const Sequelize = require('sequelize');
const RecipesModel = require('./Recipes');
const allConfigs = require('../config/database');

const environment=process.env.NODE_ENV || 'development';
const config = allConfigs[environment];
const connection = new Sequelize( config.database, config.username, config.password, { host:config.host, dialect:config.dialect } )

// connection for recipes

const Recipes = RecipesModel(connection, Sequelize)

// would make connections to other tables here

module.exports = {
    Recipes
}