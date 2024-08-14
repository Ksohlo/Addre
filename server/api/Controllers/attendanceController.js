import Attendance from "../models/attendance.model.js";
// import Student from "../models/students.model.js";


export const create = async(req, res) => {
    const id = req.body;
    // const rfid_id = reqData;
    const sendData = {"id" : `${id}`};
    const reqData1 = new Attendance(sendData);
    const registered = await reqData1.save();
    res.status(200).json(registered);

}


export const fetch = async (req, res) => {
    const allStudent = await Attendance.find();

    res.status(200).json(allStudent);
}