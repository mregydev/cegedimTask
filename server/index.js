
const express=require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cors = require('cors')
const products = require('./products.json')
const filterCrtieras = require('./filterCriteria.json')

app.use(bodyParser.json())

app.use(cors())

app.post('/api/login', (req, res) => {

    console.log(JSON.stringify(req.body))

    const { userName, password } = req.body

    if (userName === 'mregydev' && password === '123') {
        res.send({
            isValid: true,
            token: jwt.sign({ userName, password }, "abcde")
        })
    }
    else {
        res.status(401)
        res.send({
            isValid: false
        })
    }
})

app.use(express.static('build'))

app.get('/test',(req,res)=>{
    res.send('this is a test')
})

app.use((req,res,next)=>{
    if(!req.headers['authorization'])
    {
        res.sendStatus(401)
    }
    else
    {
        next()
    }
})

app.get('/api/fetchAllProducts', (req, res) => {
    res.send(products)
})

app.get('/api/fetchFilterCriterias', (req, res) => {
    res.send(filterCrtieras)
})

app.listen(process.env.PORT || 4000)

console.log("server is listening")