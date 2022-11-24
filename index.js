const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

var fs = require('fs');
let JSONdata = undefined

app.use(cors())

fs.readFile('database/database.json', (err, data) => {
    if (err) throw err;
    JSONdata = JSON.parse(data);
    console.log(JSONdata);
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log('http://localhost:3000/');
});

app.get('/', (req, res) => {
    res.send(JSONdata)
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log('http://localhost:3000/');
})

app.get('/:id', (req, res) => {
    const id2 = req.params.id
    JSONdata.forEach(element => {
        if (element.id == id2) {
            res.send(element)
        }
    })
})

app.get('/name/:name', (req, res) => {
    const id2 = req.params.name
    JSONdata.forEach(element => {
        if (element.first_name == id2) {
            res.send(element)
        }
    })
})

