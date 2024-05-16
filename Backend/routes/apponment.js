const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const adminModule = require('../models/admin');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send("Admin Page");
});


//  http://localhost:3001/appoinment/get/Gandhipuram
router.get('/get/:location',(req,res)=>{
    console.log(req.params.location)
    adminModule.find({location:req.params.location})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})

// http://localhost:3001/appoinment/post
router.post('/post', (req, res) => {
    console.log(req.body);
    const newAdmin = new adminModule(req.body)
    newAdmin.save()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    res.send("Users post page");
})


module.exports = router;
