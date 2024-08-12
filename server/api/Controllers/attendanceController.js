import Attendance from "../models/attendance.model.js";
// import Student from "../models/students.model.js";


export const create = async(req, res) => {
    const reqData = new Attendance(req.body);
    // const rfid_id = reqData;

    const registered = await reqData.save();
    res.status(200).json(registered);

}


export const fetch = async (req, res) => {
    const allStudent = await Attendance.find();

    res.status(200).json(allStudent);
}