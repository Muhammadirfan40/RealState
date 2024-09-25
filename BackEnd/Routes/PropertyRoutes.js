const express = require('express');
const Property = require('../Models/PropertyModel');
const router = express.Router();

// Create a property
router.post('/create', async (req, res) => {
    const property = new Property(req.body);
    try {
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ error });
    }
});

// Get all properties
router.get('/getall', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

// Get property by ID
router.get('/get:id', async (req, res) => {
    const property = await Property.findById(req.params.id);
    res.json(property);
});

// Delete a property
router.delete('/delete:id', async (req, res) => {
    await Property.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
