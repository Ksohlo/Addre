import Attendance from "../models/attendance.model.js";

export const create = async(req, res) => {
    const attendanceData = new Attendance(req.body);

    const rfid_id = attendanceData;
    const date = attendanceData;
    const registered_rfid = await Attendance.find(rfid_id);

    const allStudent = await Attendance.find();

    if (registered_rfid) {
        return(res.status(400).json({message:"Attendance already taken"}));
    }else{
        const attended = await attendanceData.save();
        return(res.status(200).json(attended))
    }
}


export const fetch = async (req, res) => {
    const allStudent = await Attendance.find();

    res.status(200).json(allStudent);
}