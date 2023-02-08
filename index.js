const express = require("express")
const server = express()
const router = express.Router()
const fs = require('fs')

server.use(express.json({extended:true}))
server.use(router)

const readFile = () =>{
    const content = fs.readFileSync('/data/db.json','utf-8')
    return JSON.parse(content)
}

const writeFile = (content) =>{
    const updateFile = JSON.stringify(currentContent)
    fs.writeFileSync('./data/db.json',updateFile,'utf-8')
}

router.get("/",(req,res)=>{
    const content = readFile()
    res.send(content)
})

router.post("/",(req,res)=>{
   const {modelo,ano,cor} = req.body
   const currentContent = readFile()
   currentContent.push({modelo,ano,cor})
   writeFile(currentContent)
   res.send(currentContent)
})

router.put("/:id",(req,res)=>{
    res.send("Bem vindo")
})

router.delete("/",(req,res)=>{
    res.send("Bem vindo")
})


server.listen(3000,() =>{
    console.log("Testando");
})