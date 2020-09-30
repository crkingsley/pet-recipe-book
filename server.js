const { getAllRecipes, createRecipe } = require('./controllers/Recipes')
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// app.use(cors());
// app.use(express.json());

// initialize app
const app = express();
app.use(bodyParser());

// Load view Engine - not using 
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// home route
app.get('/api', getAllRecipes);
app.post('/api/add', createRecipe);

// start server
app.listen(5000, () => {
    console.log('Server started on port 5000...')
});