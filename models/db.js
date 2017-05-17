var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin32@ds143211.mlab.com:43211/rakemployee');


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
