db.resumoProdutos.insertOne({
    franquia: "McDonalds",
    totalProdutos: 5,
  });

  db.resumoProdutos.find({}, { franquia: 1, totalProdutos: 1, _id: 0 });