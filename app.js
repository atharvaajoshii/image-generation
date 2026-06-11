require("dotenv").config();
const apikey = process.env.APIKEY

const express=require("express")
const app = express()
const axios = require("axios");
const path = require("path")

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"./views"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./public")));

app.get('/',(req,res)=>{
    res.render("index",{
        images:[],
        searchTerm: "" 
    })
})

app.post('/search',async(req,res)=>{
    const searchTerm = req.body.search;
    try{
        const result = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=30`,
            {
                headers:{
                    Authorization:apikey
                }
            }
        )
        res.render("index",{
            images:result.data.photos,
            searchTerm
        })
    }catch(error){
        res.render("index",{images:[],searchTerm})
    }
})

app.listen(5000,()=>{
    console.log("runnig")
})