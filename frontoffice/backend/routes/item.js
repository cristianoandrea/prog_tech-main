const express = require("express");
const router = express.Router();
const { Item } = require("../models/itemModel");

//GET all items
router.post("/", (req, res) => {
  //momentaneo faro una funz nel controller
  Item.find()
    .exec()
    .then((data, error) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json({ message: "Get items succesfully", data });
    });
});

//GET one item
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);

  if (!item) {
    return res.status(404).json({ error: "no such item" });
  }

  res.status(200).json(item);
});

//POST item
router.post("/create", (req, res) => {
  console.log(req.body);
  const item = new Item(req.body);
  item.save((error, data) => {
    if (error) return res.status(400).json({ error: error.message });
    return res
      .status(200)
      .json({ message: "item has been addes succesfully", data });
  });
});

//DELETE item
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByIdAndDelete(id);

  if (!item) {
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(item);
});

//UPDATE item
router.post("/update", async (req, res) => {
  const item = await Item.findById(req.body.id);
  console.log(req.body);
  if (item) {
    item.nome = req.body.nome || item.nome;
    item.prezzo = req.body.prezzo || item.prezzo;
    item.descrizione = req.body.descrizione || item.descrizione;
    item.animale = req.body.animale || item.animale;
    item.image.path = req.body.image || item.image.path;
    item.varianti[0].count = req.body.varianti.count || item.varianti[0].count;
    item.tag = req.body.tag || item.tag;
    item.producer = req.body.producer || item.producer;

    const updatedItem = await item.save();
    res.status(200).json(updatedItem);
  } else {
    res.status(404);
    throw new Error("Item not found!");
  }
});

//decrease the count for one item
router.patch("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);

  if (item) {
    item.varianti[0].disponibilità = item.varianti[0].disponibilità - 1;
    const updatedItem = await item.save();
    res.status(200);
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

//increase the count for one item
router.patch("/add/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);

  if (item) {
    item.varianti[0].disponibilità = item.varianti[0].disponibilità + 1;
    const updatedItem = await item.save();
    res.status(200).json({
      count: updatedItem.count,
    });
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

//find filtered items
router.post("/filter", async (req, res) => {
  console.log(req.body);
  console.log("hello")
  const animale = req.body.Animal;
  const tag = req.body.tag;
  const recensione = req.body.recensioni;
  let items = {}

  if (animale.length > 0 || tag.length > 0 || recensione.length > 0) {
    let query = { $and: [] };
    if (animale && animale.length > 0)
      query.$and.push({ animale: { $in: animale } });
    if (tag && tag.length > 0) query.$and.push({ tag: { $in: tag } });
    if (recensione && recensione.length > 0)
      query.$and.push({ "recensioni.rating": recensione });
    //fare un check se qu0ery.lenght === 0 allora ritorniamo un json di 'una card che dice spiacenìti non ci sono prodotti richiesti
    items = await Item.find(query);
    
  }
  else{
    items = await Item.find()  
  }

  if (!items) {
    return res.status(404).json({ error: "no such item" });
  }

  res.status(200).json(items);
});

module.exports = router;
