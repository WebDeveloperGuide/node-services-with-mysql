const express = require('express');
const app = express();
const cors = require("cors");
const salesRoute = require("./routes/sales");

//Allow to call from different source
app.use(cors());
// parse requests of content-type - application/json, Read JSON data from request
app.use(express.json());

//Use routes
app.use("/api/sales",salesRoute);
app.get("/",(req,res)=>{
	res.status(200).json({success:0,message:"API"})
});


//Read PORT from .env file OR Default set 5002
const API_PORT = process.env.API_PORT || 5002;

app.listen(API_PORT,()=>{
	console.log(`Backend Server is running on port ${API_PORT}`)
})