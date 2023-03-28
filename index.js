const express=require("express")
const app=express()
app.use(express.json())
const studentData=[
    {
        name:"ABC",
        age:23
    },
    {
        name:"PQR",
        age:21
    }
]
app.get("/",(req,res)=>{
    res.send(JSON.stringify({message:"Express.js is a free open-source web application framework for Node.js.It is used for designing and building web applications quickly and easily."}))
})
app.get("/about",(req,res)=>{
    res.send(studentData)
})
app.post("/about",(req,res)=>{
    res.send(req.body)
})

app.listen(5000,()=>{
    console.log("server running")
})