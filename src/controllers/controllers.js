const Contact = require('../models/contacts.model.js');
const {Op} = rqeuire('sequelize');

const identifyContact=async (req,res)=>{
    const {email,phoneNumber} =req.body;
    let contacts =await Contact.findAll({
        where:{
            [Op.or]: [{ email }, { phoneNumber }],
        }
    })
    
    let primaryContact = contacts.find((c)=>c.linkPrecedence==='primary');
    if(!primaryContact){
        primaryContact=contacts[0];
    }
    let secondaryContact = contacts.filter((c)=>c.id!==primaryContact.id);
    for(let contact of contacts){
        if(!contact.linkedId){
            contact.linkedId = primaryContact.id;
            contact.linkPrecedence = 'secondary';
            await contact.save();
        }
    }

    const emails=[...new Set(contacts.map((c)=>c.email))];
    const phoneNumbers = [...new Set(contacts.map((c)=>c.phoneNumber))];
    const secondaryContactIds=secondaryContact.map((c)=>c.id);

    res.status(200).json({
        contact:{
            primaryContactId:primaryContact.id,
            emails,
            phoneNumbers,
            secondaryContactIds,
        }
    })
}

module.exports={identifyContact};