const mongoose = require('Mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
	
	email : {
		type:String,
		required:true,
		unique:true
	},
	password : {
		type:String,
		required:true
	},
	
});

let user = module.exports = mongoose.model('User',userSchema);

/*Register User*/
module.exports.addUser = (data,callback) =>{
	bcrypt.hash(data.password, 10, function(err, hash){
		if(err) {
		   return res.status(500).json({
			  error: err
		   });
		}
		else {
		   let add ={
			  email: data.email,
			  password: hash,
	
	    
		   };
		   user.create(add,callback)
		}
	 });
}
 


