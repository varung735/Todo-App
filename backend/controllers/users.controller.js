// import { Client, Account, ID } from "appwrite";
const appWrite = require('appwrite');

const client = new appWrite.Client()
.setEndpoint('http://localhost/v1')
.setProject('63a5f0776de18d127dcb');

const account = new appWrite.Account(client);

exports.createUser = async (req, res) => {
    try {
        let {Name, email, password} = req.body;
        
        // to check if user has filled all the fields or not.
        if(!Name || !email || !password){
            res.status(400).send("Please fill in the complete details");
        }

        let newUser = await account.create(
            appWrite.ID.unique(),
            email,
            password,
            Name
        );

        res.status(200).json({
            "success": true,
            "message": "User Successfully Created",
            newUser
        });

    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Cannot Create User",
            "error": error.message
        });
        console.log(error);
    }
}

exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        if(!email || !password){
            res.status(400).send("Please fill all the fields");
        }

        let promise = await account.createEmailSession(email, password);

        res.status(200).json({
            "success": true,
            "message": "User Login Successfull",
            promise
        });
    } catch (error) {
        res.status(401).json({
            "success": false,
            "message": "Cannot Login User",
            "error": error.message
        });
        console.log(error);
    }
} 