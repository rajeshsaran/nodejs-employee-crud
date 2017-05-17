const express = require('express');
//var exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./models/db.js');
const indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employee');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(bodyParser.json());

/*
app.engine('.hbs', exphbs({
    extname: 			'.hbs',
    //defaultLayout: 	'main',
}));
app.set('view engine', '.hbs');
*/

app.use('/', indexRouter);
app.use('/employee', employeeRouter);

app.listen(3000, () => {
    console.log('Server ruuning on port 3000');
});