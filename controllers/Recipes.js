const models = require('../models/index');

const  getAllRecipes = async (req, res) => {
    const allRecipes = await models.Recipes.findAll()
    return res.send(allRecipes)
}

const IndividualRecipe = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const singleRecipe = await models.Recipes.findOne({ where: {id} })
    return res.send(singleRecipe)
}

const createRecipe = async (req, res) => {
    try {
    const newRecipe = await models.Recipes.create(req.body);
    return res.status(201).json({newRecipe});
    } catch(error) {
        return res.status(500).json({error})
    }
}

module.exports = {
    getAllRecipes,
    createRecipe,
    IndividualRecipe
}