const express = require('express');
const router = express.Router();

const TransportDocument = require('../model/TransportDocument');

//@route GET api/sign/documents
//@desc Get all documents
//@access Public

router.get('/documents',async (req, res) => {
    try{
        const documents = await TransportDocument.find().populate(['transporter']);
        res.json({
            success: true,
            count: documents.length,
            data:documents,
        });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route POST api/sign/documents
//@desc Create a new document
//@access Public
router.post('/documents',async (req, res) => {
    try {
        let { dateSign,transporter,documentImg} = req.body;
        //Simple validation
        if(!documentImg || !dateSign || !transporter){
            return res.status(400).json({
                success: false,
                message: 'Please enter all fields'
            });
        }
        let newDocument = new TransportDocument({            
            dateSign,
            transporter,  
            documentImg,          
        });
        await newDocument.save();
        res.json({success: true, message: 'Document created', newDocument});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})    


module.exports = router;