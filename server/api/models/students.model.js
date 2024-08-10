import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    matric: {
        type: String,
        required: true
    },
    rfid_id:{
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

const Student = mongoose.model("Student", studentSchema);
export default Student;