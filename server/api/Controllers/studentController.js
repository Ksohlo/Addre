import Student from "../models/students.model.js";

export const create = async (req, res) =>{
    try {
        const studentData = new Student(req.body);

        const name = studentData;

        const studentExist = await Student.findOne(name);
        if (studentExist) {
            return (res.status(400).json({message:"Student data already exist"}));
        } 
        const newStudent = await studentData.save();
        res.status(200).json(newStudent);

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const FetchStudent = async (req, res) => {
    try {
        const savedStudents = await Student.find();
        if(savedStudents.length === 0){
            res.status(404).json({message:"No Students data found"})
        }
        res.status(200).json(savedStudents);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const UpdateStudent = async (req, res) => {
    try {
        const id = req.params.id;

        const StudentExist = await Student.findOne({_id: id});
        if (!StudentExist) {
            return(res.status(404).json({message:"Student data not found."}))
        }
        const updateStudent = await Student.findOneAndUpdate(id, req.body, {new: true});
        res.status(201).json(updateStudent)
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}

export const DeleteStudent = async (req, res) => {
    try {
        const id = req.params.id;

        const StudentExist = await Student.findOne({_id: id});
        if (!StudentExist) {
            return(res.status(404).json({message:"Student data not found."}))
        }
        const DeleteStudent = await Student.findByIdAndDelete(id);
        res.status(201).json({message: "Student data deleted successfully."})
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})   
    }
}