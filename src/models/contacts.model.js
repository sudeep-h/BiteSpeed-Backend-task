const sequelize = require('../config/database.config.js');
const {DataTypes} = require('sequelize');

const Contact= sequelize.define('Contact',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true
    },
    linkedId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    linkPrecedence:{
        type: DataTypes.ENUM('primary', 'secondary'),
        allowNull:true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
})

module.exports=Contact;