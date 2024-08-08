import User from "../models/user.model.js"

export const Create = async (req, res) =>{
    try {
        const userData = new User(req.body);

        const username = userData;

        const userExist = await User.findOne(username);
        if (userExist) {
            return (res.status(400).json({message:"User already exist"}));
        } 
        const newUSer = await userData.save();
        res.status(200).json(newUSer)
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const Update = async (req, res) => {
    try {
        const id = req.params.id;

        const userExist = await User.findOne({_id: id});
        if (!userExist) {
            return(res.status(404).json({message:"User not found."}))
        }
        const updateUser = await User.findOneAndUpdate(id, req.body, {new: true});
        res.status(201).json(updateUser)
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}

export const Fetch = async (req, res) =>{
    try {
        const savedUsers = await User.find();
        if(savedUsers.length === 0){
            res.status(404).json({message:"No user found"})
        }
        res.status(200).json(savedUsers);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
} // eslint-disable-line const

export const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userExist = await User.findOne({_id: id});
        if (!userExist) {
            return(res.status(404).json({message:"User not found."}))
        }
        const DeleteUser = await User.findByIdAndDelete(id);
        res.status(201).json({message: "User deleted successfully."})
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})   
    }
}

export const Login = async (req, res) => {
    try {
        const {username, password} = req.body;
        User.findOne({username: username})
        .then((user) => {
            if (user) {
                if (user.password === password) {
                    res.status(200).json({message: `Welcome back ${user.username}`});
                }else{
                    res.status(400).json({message: "Incorrect password"});
                }
            }else{
                res.status(404).json({message: "Record not found"});
            }
        })
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}