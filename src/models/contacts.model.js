const sequelize = require('../config/database.config.js');
const {datatypes} = require('sequelize');

const Contact= sequelize.define('Contact',{
    id:{
        type:datatypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    phoneNumber:{
        type:datatypes.STRING,
        allowNull:true,
    },
    email:{
        type:datatypes.STRING,
        allowNull:true
    },
    linkedId:{
        type:datatypes.INTEGER,
        allowNull:true,
    },
    linkPrecedence:{
        type: DataTypes.ENUM('primary', 'secondary'),
        allowNull:true
    },
    createdAt: {
        type: datatypes.DATE,
        defaultValue: datatypes.NOW,
    },
    updatedAt: {
        type: datatypes.DATE,
        defaultValue: datatypes.NOW,
    },
    deletedAt: {
        type: datatypes.DATE,
        allowNull: true,
    },
})

module.exports=Contact;