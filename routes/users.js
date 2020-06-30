const express = require("Express");
const router = express.Router();
const user = require("../models/user")
const bcrypt = require('bcrypt');


// Register user
router.post('/signup',(req,res)=>{
	let obj = req.body;
	user.addUser(obj,(err,user)=>{
		if(err){
			let message = err;
			if (err.name === 'MongoError' && err.code === 11000) {
				message = "email already exists";
			}
			res.status(500).json({
				error: message
			 });
		}
		else{
			console.log(user);
			res.status(200).json({
			   success: 'New user has been created',
			   data: user
			});
		}
		
	 })
})




module.exports = router;
