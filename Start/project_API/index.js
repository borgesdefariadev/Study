const express = require('express');
const app = express();

app.listen(3000); //  codigo server 
console.log('Working on port')

app.use(express.json()); //middleware for create json;


app.route('/').get((req,res) => res.send('working enviroment')); 


app.route('/').post((req,res) => console.log(req.body));

let author = "Ricardo Borges"

app.route('/').put((req,res) => {
    author = req.body.author
    res.send((author)) // metodo para atualizar dado
})