const express = require("express");
const bodyParser = require('body-parser');
const sequelize = require('./config/database.config.js');

const app = express();
app.use(bodyParser.json());

const PORT=3033;
sequelize.sync()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
})
.catch(err=>{
    console.log('Unable to connect to the database : ',err);
})