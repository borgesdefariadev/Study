const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = [
        {
            title: 'D',
        message: 'Desenvolver aplicaçoes/serviços de forma facil'
        },
        {
            title: 'M',
        message: 'Mirror Breaks after you looking on it'

        },
        {
            title: 'D',
        message: 'Demons flaying souls after getting beat up'

        },
    ];

    res.render('pages/index', {
        qualities: items,
    });
   
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.listen(8080);
console.log('Working on port')