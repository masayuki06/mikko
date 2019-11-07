
// const express = require('express');

// const app = express();

// app.get('/',(req, res) => {

//     res.send('Testing mark ');
// } );



// app.listen(3000);


const fs = require('fs');
const fileName = 'target.txt';

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err,data) => {

    if (err) errHandler(err);
   
    dataHandler(data);
} );


console.log('Mikko async.......');