db.produtos.find(
    { "valoresNutricionais.0.quantidade": { $lt: 500 }, "valoresNutricionais.0.tipo": "calorias" }, 
    { nome: 1, _id: 0 },
);