const express = require('express')

const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));




const db = require('./models');
db.mongoose
.connect(db.url)
.then(()=>{
    console.log("Database is connected!");
    })
.catch((err)=>{
    console.log("Failed to connect Database!");
    process.exit();
    });
//sample entry point
app.get("/",(req,res)=>{
    res.json({message:"welcome to curd backend!"});
});

require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8080;

 app.listen(PORT, ()=>{
   console.log("Server is running at port" +PORT)
})