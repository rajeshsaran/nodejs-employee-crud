const mongoose = require('mongoose');
const EmployeeModel = mongoose.model('Employee');
const employee = require('express').Router();


employee.route('/')
    .get((req, res) => {
        EmployeeModel.find({}, function(err, employees) {
            res.send(JSON.stringify(employees));
        });
    })

    .post((req, res) => {
        console.log('in POST');
        var dob=req.body.dob;
        var dateOfBirth=new Date(dob);
        var age = calculateAge(dateOfBirth);
        var employeeInfo = req.body;
        employeeInfo.age = age;
        var employee = new EmployeeModel(employeeInfo);
        employee.save((err) => {
            console.log('Employee Saved');
            if (err) throw err;
        });
        return res.status(200).send("Employee Added !!! ");
    });

employee.route('/:id')
    .delete((req, res) => {
        console.log('in DELETE');
        var id=req.params.id;
        EmployeeModel.findOneAndRemove({"_id":id},function(err){
            if (err) throw err;
        });
        return res.status(200).send("Employee Removed !!! ");
    })

    .put((req, res) => {
        console.log('in PUT');
        var id=req.params.id;
        var dob=req.body.dob;
        var dateOfBirth=new Date(dob);
        var age = calculateAge(dateOfBirth);
        var employeeInfo = req.body;
        employeeInfo.age = age;
        EmployeeModel.findOneAndUpdate({"_id":id}, employeeInfo, function(err, record){
            if (err) throw err;
        });
        return res.status(200).send("Employee Updated !!! ");
    })

    .get((req, res) => {
        var id=req.params.id;
        EmployeeModel.findOne({"_id":id}, function(err, record){
            res.status(200).send(record);
            if (err) throw err;
        });
        console.log(id);
    });

const calculateAge = (birth_date) => {
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();

    birth_year = birth_date.getFullYear();
    birth_month = birth_date.getMonth();
    birth_day = birth_date.getDate();

    age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}

module.exports = employee;