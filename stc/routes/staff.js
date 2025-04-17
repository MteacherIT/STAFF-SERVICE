const express = require('express');
const router = express.Router();

let staffData = [];
let idCounter = 1;

// CREATE
router.post('/', (req, res) => {
    const staff = { id: idCounter++, ...req.body };
    staffData.push(staff);
    res.status(201).json(staff);
});

// READ ALL
router.get('/', (req, res) => {
    res.json(staffData);
});

// READ BY ID
router.get('/:id', (req, res) => {
    const staff = staffData.find(s => s.id === parseInt(req.params.id));
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.json(staff);
});

// UPDATE
router.put('/:id', (req, res) => {
    const index = staffData.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Staff not found' });

    staffData[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(staffData[index]);
});

// DELETE
router.delete('/:id', (req, res) => {
    const index = staffData.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Staff not found' });

    const deleted = staffData.splice(index, 1);
    res.json(deleted[0]);
});

module.exports = router;
