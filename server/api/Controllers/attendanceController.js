import Attendance from "../models/attendance.model.js";
import Student from "../models/students.model.js";

export const create = async(req, res) => {
    const reqData = req.body;

    const {rfid_id, time} = reqData;

    const regData = await Attendance.findOne(rfid_id);
    const date = (new Date().toDateString());
    const registered = ((regData.rfid_id === rfid_id) && (regData.date == date));

    if (registered){
        res.status(500).json({message: "Already registed today"})
    }

    const studentInfo = await Student.findOne(rfid_id);
    // const newRequest = {
    //     name: studentInfo.name,
    //     matric_no: studentInfo.matric,
    //     date: date,
    //     rfid_id: rfid_id,
    //     time_in : time,
    // }
    // const attendanceData = new Attendance(newRequest);
    // const attended = await attendanceData.save();
    res.status(200).json(studentInfo);
}


export const fetch = async (req, res) => {
    const allStudent = await Attendance.find();

    res.status(200).json(allStudent);
}