const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

var fs = require('fs');
let JSONdata = undefined


app.get(['/data/cats/cat', '/data/cats/cat.json'], (req, res) => {
    fs.readFile('data/cats/cat.json', (err, data) => {
        if (err) throw err;
        JSONdata = JSON.parse(data);
        console.log(JSONdata);
        console.log(`Servidor corriendo en el puerto ${port}`)
        console.log('http://localhost:3000/');
    });
    res.send(JSONdata)
})

app.get('/data/cats_products/:id', (req, res) => {
    const idProd = req.params.id
    let route = 'data/cats_products/'+idProd
    
    if (route.slice(-4) != 'json') {
        route = 'data/cats_products/'+idProd+'.json'
    }
    fs.readFile(route, (err, data) => {
        if (err) throw err;
        JSONdata = JSON.parse(data);
        console.log(JSONdata);
        console.log(`Servidor corriendo en el puerto ${port}`)
        console.log('http://localhost:3000/');
    });
    res.send(JSONdata)
})

app.get('/data/products/:id', (req, res) => {
    const idProd = req.params.id
    let route = 'data/products/'+idProd
    
    if (route.slice(-4) != 'json') {
        route = 'data/products/'+idProd+'.json'
    }
    fs.readFile(route, (err, data) => {
        if (err) throw err;
        JSONdata = JSON.parse(data);
        console.log(JSONdata);
        console.log(`Servidor corriendo en el puerto ${port}`)
        console.log('http://localhost:3000/');
    });
    res.send(JSONdata)
})

app.get('/data/products_comments/:id', (req, res) => {
    const idProd = req.params.id
    let route = 'data/products_comments/'+idProd
    
    if (route.slice(-4) != 'json') {
        route = 'data/products_comments/'+idProd+'.json'
    }
    fs.readFile(route, (err, data) => {
        if (err) throw err;
        JSONdata = JSON.parse(data);
        console.log(JSONdata);
        console.log(`Servidor corriendo en el puerto ${port}`)
        console.log('http://localhost:3000/');
    });
    res.send(JSONdata)
})

app.get(['/data/sell/publish', '/data/sell/publish.json'], (req, res) => {
    fs.readFile('data/sell/publish.json', (err, data) => {
        if (err) throw err;
        JSONdata = JSON.parse(data);
        console.log(JSONdata);
        console.log(`Servidor corriendo en el puerto ${port}`)
        console.log('http://localhost:3000/');
    });
    res.send(JSONdata)
})

app.get('/data/user_cart/:id', (req, res) => {
    const idProd = req.params.id
    let route = 'data/user_cart/'+idProd
    
    if (route.slice(-4) != 'json') {
        route = 'data/user_cart/'+idProd+'.json'
    }
    fs.readFile(route, (err, data) => {
        if (err) throw err;
        JSONdata = JSON.parse(data);
        console.log(JSONdata);
        console.log(`Servidor corriendo en el puerto ${port}`)
        console.log('http://localhost:3000/');
    });
    res.send(JSONdata)
})

app.post("/data/user_buy_history/", function(req, res) {
    var data = JSON.parse(req.body)
    console.log(data);
    

    fs.writeFile('data/user_buy_history/001.json', 
    `{
        name: ${req.body.name},
        email: ${req.body.email},
        shippingMethod: ${req.body.shippingMethod},
        totalCost: ${req.body.totalCost},
        currency: ${req.body.currency},
        payMethod: ${req.body.payMethod},
        items:  [
                    {
                        itemID: undefined,
                        itemName: undefined,
                        itemCost: undefined
                    },
                ],
        shipping:   {
                        street: ${req.body.shipping.street},
                        number: ${req.body.shipping.number},
                        corner: ${req.body.shipping.corner},
                        specialDetails: ${req.body.shipping.specialDetails}
                    },
    }`, function (err) {
    if (err) throw err;

    console.log('Saved!');
});
});


app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log("http://localhost:3000/");
})