import mongoose from "mongoose";


const attendanceSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;