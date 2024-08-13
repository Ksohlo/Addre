import mongoose from "mongoose";


const attendanceSchema = new mongoose.Schema({
    id:{
        type: Text,
        required: true
    }
}, 
{
    timestamps: true,
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;