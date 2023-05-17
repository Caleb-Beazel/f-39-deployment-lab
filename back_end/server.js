const express = require('express')

const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/front_end'))

app.listen(4500, () => {
    console.log('up on 4500')
})