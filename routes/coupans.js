const express = require("Express");
const router = express.Router();
var stripe = require('stripe')('sk_test_51GzchSFIxbY9BazzQXAOJS3j5i0anefDZYFUHyNKeRi56NltrhWGkoqesjr6YoI0UtqLgVPg1vp0mVUEQqnRNpEI00GcrnxfMa');


// add Coupan
router.post('/add',(req,res)=>{
    let obj = req.body;
    console.log(obj);
    stripe.coupons.create({
        percent_off: obj.percent,
        duration: obj.duration,
        duration_in_months: obj.months
    }, (err,coupon)=>{
        if (err) {
            console.log("Error at \"Adding Coupon\"");
            res.statusMessage = err;
            res.status(401).end();
        }
        if (coupon){
        console.log("\"Coupon\" added successfully");
        res.send(coupon);
        }
    })
	
})

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
         res.send(coupons.data);
         }
	})
})

//delete a coupan
router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	stripe.coupons.del(id,(err,confirmation) =>{
		if(err){
			console.log("ERROR at \"Deleting Coupan\"");
			res.statusMessage = err;
			res.status(401).end();
        }
        if(confirmation){
		console.log("\"Coupan\" deleted");
        res.send(confirmation);
    }
	})
})

module.exports = router;
