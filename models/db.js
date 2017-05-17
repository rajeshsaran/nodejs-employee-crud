var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employees');


var employeeSchema = mongoose.Schema({
    "name":{
        type:String
    },
    "email" : {
        type:String
    },
    "dob" : {
        type: Date,
    },
    "department" : {
        type:String
    },
    "gender" : {
        type:String
    },
    "age" : {
        type:Number
    }
});

var Employee = mongoose.model('Employee', employeeSchema);
