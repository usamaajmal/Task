const express = require("Express");
const router = express.Router();
var stripe = require('stripe')('sk_test_51GzchSFIxbY9BazzQXAOJS3j5i0anefDZYFUHyNKeRi56NltrhWGkoqesjr6YoI0UtqLgVPg1vp0mVUEQqnRNpEI00GcrnxfMa');


// get all coupans
router.get('/',(req,res)=>{
	stripe.coupons.list((err,coupons)=>{
		 if (err) {
		 	console.log("Error at \"Get Coupons\"");
			 res.statusMessage = err;
			 res.status(401).end();
         }
         if (coupons){
		 console.log("retrieved all \"Coupons\"");
         res.send(coupons);
         }
	})
})

module.exports = router;
