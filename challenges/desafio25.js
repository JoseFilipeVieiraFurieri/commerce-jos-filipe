db.produtos.updateMany({ "valoresNutricionais.2.percentual": { $gte: 40 } }, {
    $push: {
      tags: "muito sódio",
  },
});

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });