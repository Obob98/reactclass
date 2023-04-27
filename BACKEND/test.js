const fs = require('fs')
const axios = require('axios')
const express = require('express')

const App = express()

App.use(express.json)

fs.writeFile('yeah', (data, err)=>{
    console.log('data: ', data)
    console.log('err: ', err)
    fs.close()

})

App.listen(3001, ()=>{
    console.log('listening on port 3001')
})
