const express = require("Express");
const mongoose=require("Mongoose")
const bodyParser = require("Body-parser");
var cors = require('cors')
const app = express();
var user = require ('./routes/users');
var coupan = require('./routes/coupans');

const port = process.env.PORT || 3000;

/**/
//setting up body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
//setting up cors
app.use(cors())

app.use('/user',user);
app.use('/coupan', coupan);

mongoose.connect("mongodb://root:toor321@ds161104.mlab.com:61104/task").then(
	console.log("Database Connectd"));


app.listen(port, ()=>{
	console.log('Running on port '+port);
	
	
})
