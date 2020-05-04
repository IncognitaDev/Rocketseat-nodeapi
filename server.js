const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())
//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models/')

//rotas
app.use('/', require('./src/routes'))

app.listen(3001);