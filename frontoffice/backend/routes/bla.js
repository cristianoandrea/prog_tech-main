await Service.find({
    tipo: tipo,
    luogo: città,
    $or: [
      {
        "dottore.impegni": {
          $not: {
            $elemMatch: {
              datefin: { $gt: start_midnightUTC },
              dateiniz: { $lt: end_midnightUTC }
            }
          }
        },
        $and: [
          { "dottore.slot.n_grandi": { $gte: grande } },
          { "dottore.slot.n_medi": { $gte: medio } },
          { "dottore.slot.n_piccoli": { $gte: piccolo } },
          { "dottore.impegni.n_grandi": { $lte: dottore.slot.n_grandi - grande } },
          { "dottore.impegni.n_medi": { $lte: dottore.slot.n_medi - medio } },
          { "dottore.impegni.n_piccoli": { $lte: dottore.slot.n_piccoli - piccolo } }
        ]
      },
      {
        "dottore.impegni": {
          $elemMatch: {
            datefin: { $gt: start_midnightUTC },
            dateiniz: { $lt: end_midnightUTC }
          }
        },
        $and: [
          { "dottore.slot.n_grandi": { $gte: dottore.impegni.n_grandi + grande } },
          { "dottore.slot.n_medi": { $gte: dottore.impegni.n_medi + medio } },
          { "dottore.slot.n_piccoli": { $gte: dottore.impegni.n_piccoli + piccolo } }
        ]
      }
    ]
  })
  