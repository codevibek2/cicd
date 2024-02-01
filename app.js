import express from "express"
import cors from "cors"
const app = express()

app.use(cors())

app.get("/",(req,res) => {
    console.log("here")
    res.send("Hello World")
})

app.listen(5000,()=>{
    console.log("Server is Running")
})