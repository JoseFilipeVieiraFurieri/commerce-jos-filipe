db.produtos.find(
    { "valoresNutricionais.3.percentual": 
    { $gte: 30, $lte: 40 },
"valoresNutricionais.3.tipo": "proteínas" }, 
    { nome: 1, _id: 0 },
);