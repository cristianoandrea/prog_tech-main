const express = require("express");
const router = express.Router();
const { Service } = require("../models/serviceModel");
const { query } = require("express");
const { find } = require("../models/userModel");

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

//find filtered services for either veterinario or toilettatura
router.post("/filter/veterinario", async (req, res) => {
  console.log(req.body);
  const tipo = req.body.service
  const start_date = req.body.startDate;
  const city = req.body.city
  let service = {};
  let filteredServices = [];
  if (   
    tipo.length > 0 ||
    city.length > 0 ||
    start_date.length > 0
  ) {
    console.log('inside fisrt if')
    let query = { $and: [] };
    if (city && city.length > 0)
      query.$and.push({ luogo: { $in: city } });
    if (tipo && tipo.length > 0) query.$and.push({ tipo: { $in: tipo } });
    
    service = await Service.find(query).lean();
    console.log(service)
    const inputDate = new Date(start_date);
    console.log(inputDate)
    const midnightUTC = new Date(
      Date.UTC(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate(),
        inputDate.getUTCHours(),
        inputDate.getUTCMinutes()
      )
    );

    console.log("///////////////////////////////");

    midnightUTC.setHours(midnightUTC.getHours() + 1);
    console.log(midnightUTC)
    
    function filterServicesByDate(services, inputDate) {
      const final = [];
      services.forEach((service) => {
        const filteredDottore = service.dottore
          .filter((d) => {
            const hasMatch = d.impegni.some((i) => {
              const startDate = new Date(i.dateiniz);
              const inputStart = new Date(inputDate);
              const inputEnd = new Date(inputDate);
              inputEnd.setHours(inputEnd.getHours() + 1);
              const isOverlapping =
                inputStart >= startDate &&
                inputStart < new Date(startDate.getTime() + 60 * 60 * 1000);
              if (isOverlapping) {
                console.log(
                  `Match found for input date ${inputDate} with impegni ${JSON.stringify(
                    i
                  )}`
                );
              }
              return isOverlapping;
            });
            return !hasMatch || d.impegni.length === 0;
          })
          .map((d) => {
            const filteredImpegni = d.impegni.filter((i) => {
              const date = new Date(i.dateiniz);
              return date.getTime() !== inputDate.getTime();
            });
            return { ...d, impegni: filteredImpegni };
          });
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

    if(filteredServices.length === 0){
    console.log(filteredServices)
    console.log('inside second if')
    filteredServices = await Service.find({tipo:tipo});
    }
  } else {
    filteredServices = await Service.find({tipo:tipo});
  }
  if (!service) {
    console.log('inside !service')
    return res.status(404).json({ error: "no such item" });
  }
  res.status(200).json(filteredServices);
});

//function adds an impegni array to a specified doctor of a service and removes the old impegni
router.patch("/addVetReservation", async (req, res) => {
  const id = req.body.id; 
  const date = req.body.param.date;
  const dottoreId = req.body.doc_id;
  const dateParts = date.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]);
  const hours = parseInt(dateParts[3]);
  const minutes = parseInt(dateParts[4].split(':')[0]);
  const finaldate = new Date(Date.UTC(year, month, day, hours, minutes));


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
  
 // aggiunge l'appuntamento agli impegni
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
    
    if ((grande || piccolo ||  medio) 
    &&
    (start_date.length > 0 && end_date.length > 0)
  ) {


      console.log(start_midnightUTC,end_midnightUTC,piccolo,medio,grande)
      const service = await Service.find({
        tipo: tipo,
        luogo: città,
        $or: [
          {
            'dottore.impegni': {
              $elemMatch: {
                dateiniz: { $lte: end_midnightUTC },
                datefin: { $gte: start_midnightUTC }
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
            'dottore.impegni': {
              $not: {
                $elemMatch: {
                  dateiniz: { $lte: end_midnightUTC },
                  datefin: { $gte: start_midnightUTC }
                }
              }
            },
            $expr: {
              $and: [
                { $gte: ['$dottore.slot.n_grandi', grande] },
                { $gte: ['$dottore.slot.n_medi', { $sum: ['$dottore.impegni.n_medi', medio] }] },
                { $gte: ['$dottore.slot.n_piccoli', piccolo] }
              ]
            }
          }
        ]
      });
      
      
    
    console.log(service)
    if(service.length) console.log(service[0].dottore[0].impegni)
if (!service) {
    console.log('no service with that criteria')
    const all = await Service.find({tipo:tipo})
    res.status(200).json(all)
  }
  else{
  res.status(200).json(service);
  }

}})

router.patch("/addDogReservation", async (req, res) => {
  console.log("dogsitting")
  console.log(req.body)
  const id = req.body.id;
  const start_date = req.body.param.date;
  const final_start_date = new Date(start_date);
  const end_date = req.body.param.endDate;
  const final_end_date = new Date(end_date)
  const stanzaId = req.body.doc_id;
  const grandi = req.body.param.grandi
  const medi = req.body.param.medi
  const piccoli = req.body.param.piccoli
// convert start_date in right format
  const dateParts = start_date.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]);
  const hours = parseInt(dateParts[3]);
  const minutes = parseInt(dateParts[4].split(':')[0]);
  const finalStartdate = new Date(Date.UTC(year, month, day, hours, minutes));
// convert end_date in right format
  const dateParts1 = end_date.split('-');
  const year1 = parseInt(dateParts1[0]);
  const month1 = parseInt(dateParts1[1]) - 1;
  const day1 = parseInt(dateParts1[2]);
  const hours1 = parseInt(dateParts1[3]);
  const minutes1 = parseInt(dateParts1[4].split(':')[0]);
  const finalEnddate = new Date(Date.UTC(year1, month1, day1, hours1, minutes1));
//making the query  
  const query = {
    _id: id,
    "dottore._id": stanzaId
  };
  
  const update = {
    $push: {
      "dottore.$.impegni": {
        dateiniz: finalStartdate,
        datefin: finalEnddate,
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
