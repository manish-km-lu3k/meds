import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : true
        },
        info: {
            type: String,
            required : true
        }

    }
);

export const MedicineModel = mongoose.model("Medicines", MedicineSchema);