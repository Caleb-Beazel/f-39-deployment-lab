const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname , '../front_end')))

app.listen(4500, () => {
    console.log('up on 4500')
})