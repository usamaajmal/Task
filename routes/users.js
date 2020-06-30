const express = require("Express");
const router = express.Router();
const user = require("../models/user")
const jwt = require('jsonwebtoken');
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

//Sign In
router.post('/signin',(req, res) => {
	let obj = req.body;
	user.signin(obj, (err,user) => {
		
		if(err) {
			res.statusMessage = err;
    		res.status(401).end();
		}
		
		else if(!user){
			res.statusMessage = 'email not found';
    		res.status(401).end();
		}

		else {
			bcrypt.compare(obj.password, user.password, (err, result) => {
				if(err) {	
					res.statusMessage = err;
					res.status(401).end();
				}

				else if(!result) {
					console.log("passeord err");
					res.statusMessage = 'incorrect password';
					res.status(401).end();
				}
				else{
					const JWTToken = jwt.sign({
						email: user.email,
						_id: user._id
					},'secret', { expiresIn: '30m'});//Time 30 Minutes for the session
					
					return res.status(200).json({
						success: 'Login Success',
						token: JWTToken,
						_id: user._id,
						
					});
				}		   
			});
		}
	})
});



module.exports = router;
