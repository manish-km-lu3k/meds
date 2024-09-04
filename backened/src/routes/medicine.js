import express from 'express';
import { MedicineModel } from '../models/Medicine.js';

const router = express.Router();

// get Home Page 
router.get("/", async (req, res) => {
    try {
        const response = await MedicineModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

// Create Medicine
router.post("/medicine", async (req, res) => {
    const medicine = new MedicineModel(req.body);
    try {
        const response = await medicine.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

// Update Medicine
router.put("/medicine/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, info } = req.body;

        let result = await MedicineModel.findByIdAndUpdate(id,
            { name, info },
            { new: true, runValidators: true });
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

// Delete Medicine
router.delete('/medicine/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the medicine by ID and delete it
        const deletedMedicine = await MedicineModel.findByIdAndDelete(id);

        // If the medicine is not found, return a 404 error
        if (!deletedMedicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }

        // Respond with a success message
        res.json({ message: 'Medicine deleted successfully', deletedMedicine });
    } catch (error) {
        // Handle any errors and send a 500 response with the error message
        res.status(500).json({ error: error.message });
    }
});

export { router as medicineRouter };