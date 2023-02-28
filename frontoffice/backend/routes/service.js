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
  let result = await Service.find({ "luogo": city });
  if (!result) {
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(result);
});

//DELETE  one service
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const service = await Service.findByIdAndDelete(id);

  if (!service) {
    return res.status(404).json({ error: "no such service" });
  }
  res.status(200).json(service);
});

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

//GET one service
router.post("/:id", async(req, res) => {
  const { id } = req.params;
  const service = await Service.findById(id);

  if (!service) {
    return res.status(404).json({ error: "no such service" });
  }
  res.status(200).json(service);
});

//find filtered services for either veterinario or dogsitting
router.post("/filter/veterinario", async (req, res) => {
  console.log(req.body);
  const tipo = 'Veterinario'
  const start_date = req.body.startDate;
  const city = req.body.city
  let service = {};
  let filteredServices = [];
  if (   
    tipo.length > 0 ||
    city.length > 0 ||
    start_date.length > 0
  ) {
    let query = { $and: [] };
    if (city && city.length > 0)
      query.$and.push({ luogo: { $in: city } });
    if (tipo && tipo.length > 0) query.$and.push({ tipo: { $in: tipo } });
    
    service = await Service.find(query).lean();
    const inputDate = new Date(start_date);
    const midnightUTC = new Date(
      Date.UTC(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate(),
        inputDate.getUTCHours(),
        inputDate.getUTCMinutes()
      )
    );
    console.log(midnightUTC);
    console.log("///////////////////////////////");
    
    function filterServicesByDate(
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
    filteredServices = filterServicesByDate(
      service,
      midnightUTC
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
router.patch("/addVetReservation", async (req, res) => {
  const id = req.body.id;
  const date = req.body.param.date;
  const finaldate = new Date(date);
  const dottoreId = req.body.doc_id;

  //remove all the dottore.impegni which are previous to the current date ( serve per ripulire il db)
  const currentDate = new Date();
  await Service.findOneAndUpdate(
    { _id: id },
    {
      $pull: {
        'dottore.$[].impegni': {
          dateiniz: { $lt: currentDate }
        }
      }
    },
  );

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

router.post("/filter/dogsitter", async (req, res) => {
    const start_date = req.body.startDate
    const end_date = req.body.endDate
    const piccolo = req.body.animaliPiccoli
    const medio = req.body.animaliMedi
    const grande = req.body.animaliGrandi
    const città = req.body.city
    const tipo = 'Dogsitting'
    console.log(start_date,end_date,piccolo,medio,grande,città)
    const input_start_date = new Date(start_date);
    const start_midnightUTC = new Date(
      Date.UTC(
        input_start_date.getUTCFullYear(),
        input_start_date.getUTCMonth(),
        input_start_date.getUTCDate()
      )
    );
    const input_end_date = new Date(end_date);
    const end_midnightUTC = new Date(
      Date.UTC(
        input_end_date.getUTCFullYear(),
        input_end_date.getUTCMonth(),
        input_end_date.getUTCDate()
      )
    );

    if ((
    grande.length > 0 ||
    piccolo.length > 0 || 
    medio.length > 0) 
    &&
    (start_date.length > 0 && end_date.length > 0)
  ) {
      const service = await Service.find({
      tipo: tipo,
      luogo: città,
      'dottore.impegni': {
        $not: {
          $elemMatch: {
            dateiniz: { $lte: end_midnightUTC }, 
            datefin: { $gte: start_midnightUTC }
          }
        }
      },
      $or: [
        {
          'dottore.impegni': {
            $elemMatch: {
              dateiniz: { $gte: start_midnightUTC, $lte: end_midnightUTC  },
              datefin: { $gte: start_midnightUTC, $lte: end_midnightUTC  }
            }
          },
          $expr: {
            $and: [
              { $gte: ['$dottore.slot.n_grandi', { $sum: ['$dottore.impegni.n_grandi', grande] }] },
              { $gte: ['$dottore.slot.n_medi', { $sum: ['$dottore.impegni.n_medi', medio] }] },
              { $gte: ['$dottore.slot.n_piccoli', { $sum: ['$dottore.impegni.n_piccoli', piccolo] }] }
            ]
          }
        }, 
        {
          'dottore.impegni': { $not: { $elemMatch: { dateiniz: { $lte: start_midnightUTC }, datefin: { $gte: end_midnightUTC } } } },
          $expr: {
            $and: [
              { $gte: ['$dottore.slot.n_grandi', grande] },
              { $gte: ['$dottore.slot.n_medi', medio] },
              { $gte: ['$dottore.slot.n_piccoli', piccolo] }
            ]
          }
        }
      ]
    });
    
if (!service) {
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(service);

}})

router.patch("/addDogReservation", async (req, res) => {
  const id = req.body.id;
  const start_date = req.body.param.start_date;
  const final_start_date = new Date(start_date);
  const end_date = req.body.param.end_date;
  const final_end_date = new Date(end_date)
  const stanzaId = req.body.stanza_id;
  const grandi = req.body.grandi
  const medi = req.body.medi
  const piccoli = req.body.piccoli

  const query = {
    _id: id,
    "dottore._id": stanzaId
  };
  
  const update = {
    $push: {
      "dottore.$.impegni": {
        dateiniz: final_start_date,
        datefin: final_end_date,
        animali: "",
        n_grandi: grandi,
        n_medi: medi,
        n_piccoli: piccoli
      }
    }
  };
  
 await Service.updateOne(query, update);
  
})



module.exports = router;
