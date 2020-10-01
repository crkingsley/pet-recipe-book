const express = require('express');
const router = express.Router();
const db = require('../config/database');
const {Recipes} = require('../models/Recipes');
const {getAllRecipes, createRecipe, IndividualRecipe} = require('../controllers/Recipes')

// Get recipe list
router.get('/', async (req, res) => {
    res.send(await getAllRecipes());
});

//Get individual Recipe
router.get('/recipe/:id', async (req,res) => {
    const id = req.params.id
    console.log(id)
    res.send(await IndividualRecipe(id));
});
// findAll is a sequelize method that returns a promise
/* router.get('/', (req, res) => 
    Recipes.findAll()
        .then(recipes => {
            res.json(recipes);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
    );
 */
// Add a recipe
router.post('/', async (req, res) => {
    const newRecipe = req.body;
    await createRecipe(newRecipe);
    res.send({
        message: 'New recipe created.',
        allRecipes: await getAllRecipes(),
        thanks: true
    });
});

module.exports = router