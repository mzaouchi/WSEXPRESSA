const express = require('express')

const app = express()

const port = 5000

const middleware=(req,res,next)=>{
    console.log('Walahi rani f west l middlware')
    next()
}

app.use(middleware)

// app.get('/test',(req,res)=>{
//     res.send('A7la Mohamed')
// })

// app.get('/team',(req,res)=>{
//     res.send('<h1>Salem</h1>')
// })

// app.get('/Djeja',(req,res)=>{
//     res.sendFile(__dirname+"/public/Contact.html")
// })


// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+"/public/style.css")
// })

// app.get('/mohamed',(req,res)=>{
//     res.sendFile(__dirname+"/public/")
// })

app.use(express.static('public'))


app.listen(port,console.log(`Server is running on the port ${port}`))
