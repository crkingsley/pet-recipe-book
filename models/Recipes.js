const Recipes = (connection, Sequelize) => connection.define('recipes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.STRING 
    },
    name: {
        type: Sequelize.STRING 
    },
    ingredients: { 
        type: Sequelize.STRING 
    },
    directions: { 
        type: Sequelize.STRING 
    }
},

{defaultScope: {attributes: {exclude: ['createdAt', 'updatedAt']}}},
{paranoid: true}
)

module.exports = Recipes