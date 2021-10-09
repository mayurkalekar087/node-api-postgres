const pool = require('../config/config');
const modules = require("../model/module");
const getStudent = (req,res)=>{
    pool.query(modules.getStudent,(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(modules.getStudentById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req,res)=>{
    const {name,email,age,dob} = req.body;
    //check if email exists
    pool.query(modules.checkEmailExists,[email],(error,results)=>{
        if (results.rows.length) {
            res.send("Email already exists");
        }
        //add student to db
        pool.query(modules.addStudent, [name,email,age,dob],(error,results)=>{
            if(error) throw error;
            res.status(201).send("student created successfully!");
        });
    });
};

const removeStudent = (req,res) => {
    const id = parseInt(req.params.id);
        pool.query(modules.removeStudent,[id],(error,results)=>{
            if(error) throw error;
            res.status(201).send("student removed successfully");
     });
};

const updateStudent = (req,res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(modules.getStudentById,[id],(error,results)=>{
        const noUserFound = ! results.rows.length;
        if(noUserFound){
            res.send("student does not exists in the database, could not remove");
        }
        pool.query(modules.updateStudent,[name,id],(error,results)=>{
            if(error)throw error;
            res.status(200).send("student updated successfully!");
        });
    });
};
module.exports = {
    getStudent,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
};