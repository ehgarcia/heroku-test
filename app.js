const express = require ('express')
const path = ('path')
const app = express()

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(process.env.PORT || 3000)