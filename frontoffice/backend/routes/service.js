const express = require("express");
const router = express.Router();
const { Service } = require("../models/serviceModel");
const { query } = require("express");

//GET all service
router.post("/", async (req, res) => {
  let result = await Service.find();
  if (!result) {
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(result);
});

router.post("/filter", async (req, res) => {
  const city = String(req.body.ok);
  let result = await Service.find({ "luogo.nome": city });
  if (!result) {
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(result);
});

//GET one service
router.get("/:id", async (req, res) => {});

//GET only certain service(veterinario||dogsitting)
router.post("/visual/:id", async (req, res) => {
    console.log(req.params)
    const filter = String(req.params.id)
    console.log(filter)
    const result = await Service.find({"tipo": filter})
    if (!result) {
        return res.status(404).json({ error: "no such item" });
      }
      res.status(200).json(result);
  });

//POST service
router.post("/create", (req, res) => {
  const service = new Service(req.body);
  // qua devo creare l'evento ttl tipo: Service.createIndex( { "datefin": 1 }, { expireAfterSeconds: 0 } )
  service.save((error, data) => {
    if (error) return res.status(400).json({ error: error.message });
    return res
      .status(200)
      .json({ message: "service has been addes succesfully", data });
  });
});

//DELETE service
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE item" });
});

//find filtered services for either veterinario or dogsitting
router.post("/filter2", async (req, res) => {
  console.log(req.body);
  const animale = req.body.animal;
  const tipo = req.body.tipo;
  const quantity = req.body.quantity;
  const start_date = req.body.startDate;
  //const end_date = req.body.endddate
  let service = {};
  let filteredServices = [];
  if (
    animale.length > 0 ||
    tipo.length > 0 ||
    quantity.length > 0 ||
    start_date.length > 0
  ) {
    let query = { $and: [] };
    if (animale && animale.length > 0)
      query.$and.push({ animale: { $in: animale } });
    if (tipo && tipo.length > 0) query.$and.push({ tipo: { $in: tipo } });
    if (quantity && quantity.length > 0)
      query.$and.push({ quantity: { $in: quantity.map(Number) } });

    service = await Service.find(query).lean();
    const inputDate = new Date(start_date);
    const midnightUTC = new Date(
      Date.UTC(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate()
      )
    );
    console.log(midnightUTC);
    console.log("///////////////////////////////");
    
    function filterServicesByDateAndAnimal(
      services,
      inputDate
    ) {
      const final = [];
      services.forEach((service) => {
        const filteredDottore = service.dottore
          .filter((d) => {
            const hasMatch = d.impegni.some((i) => {
              const date = new Date(i.dateiniz);
              return date.getTime() === inputDate.getTime();
            });
            return !hasMatch;
          })
          .map((d) => {
            const filteredImpegni = d.impegni.filter((i) => {
              const date = new Date(i.dateiniz);
              return (
                date.getTime() !==
                inputDate.getTime() /*&& i.animali == inputAnimal*/
              );
            });
            return { ...d, impegni: filteredImpegni };
          })
          .filter((d) => d.impegni.length > 0); // Remove any dottore without impegni after filter
        if (filteredDottore.length > 0) {
          // Add service only if there are filteredDottore
          final.push({ ...service, dottore: filteredDottore });
        }
      });
      return final;
    }
    filteredServices = filterServicesByDateAndAnimal(
      service,
      midnightUTC,
      animale
    );
    if(filteredServices.length === 0)
    filteredServices = await Service.find();
  } else {
    filteredServices = await Service.find();
  }
  if (!service) {
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(filteredServices);
});

//function adds an impegni array to a specified doctor of a service and removes the old impegni
router.patch("/addReservation", async (req, res) => {
  const id = req.body.id;
  const date = req.body.param.date;
  const finaldate = new Date(date);
  const dottoreId = req.body.doc_id;

  const currentDate = new Date(); // Get the current date and time
  // Define the filter for the query
  const filter = {
    "dottore.impegni.dateiniz": { $lt: currentDate }, // Match impegni with dateiniz < current date
  };
  // Define the update operation for the query
  const update = {
    $pull: { "dottore.$[].impegni": { dateiniz: { $lt: currentDate } } },
  };

  await Service.findByIdAndUpdate(id, update, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });

  await Service.updateOne(
    { _id: id, "dottore._id": dottoreId },
    { $push: { "dottore.$.impegni": { dateiniz: finaldate } } },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

router.post("/filter/dogsitting", async (req, res) => {
    //const start_date = req.body.startDate
    //const end_date = req.body.endDate
    const piccolo = req.body.piccoli
    const medio = req.body.medi
    const grande = req.body.grandi
    const tipo = 'Dogsitting'

    if (
    quantity_g.length > 0 ||
    quantity_p.length > 0 ||
    quantity_m.length > 0 /*||
    start_date.length > 0 ||
    end_date.length > 0*/
  ) {
    const pipeline = [
  {
    $match: { tipo } // Match documents with the specified tipo value
  },
  {
    $addFields: {
      dottore: {
        $filter: {
          input: "$dottore",
          as: "d",
          cond: {
            $and: [
              { $gte: ["$$d.slot.n_grandi", grande] },
              { $gte: ["$$d.slot.n_medi", medio] },
              { $gte: ["$$d.slot.n_piccoli", piccolo] }
            ]
          }
        }
      }
    }
  }
];

const service = Service.aggregate(pipeline, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }})

if (!service) {
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(service);

    


}})



module.exports = router;
