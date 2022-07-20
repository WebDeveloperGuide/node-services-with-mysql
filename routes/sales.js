const express = require('express');
const router = express.Router();
const sql = require("../models/db.js");


router.get("/", (req,res)=>{
	
	try{

		let query = "SELECT tc.name as category, AVG(amount) as avg_sales FROM tbl_sales AS ts LEFT JOIN tbl_products AS tp ON tp.id = ts.product_id LEFT JOIN tbl_categories AS tc ON tp.category_id = tc.id GROUP BY tc.id";
		sql.query(query, (error, result) => {
		    if (error) {		      
		      res.status(500).json({status:0,message:error.message})
		      return;
		    }
    		res.status(200).json({success:0,data:result});
  		});
		
	}catch(err){
		res.status(500).json({status:0,message:err.message})
	}
})



module.exports = router;