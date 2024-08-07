import mongoose from "mongoose";


const attendanceSchema = new mongoose.Schema({

    date:{
        type: Date,
        required: true
    },
    rfid_id:{
        type: String,
        required: true
    },
    time_in:{
        type: String,
        required: true
    }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;