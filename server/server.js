const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); 
var mysql = require('mysql');
app.use(cors("*"));

var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Royal@11011',
    database : 'cars_data',
    port     : '3306',
    // connectionLimit : 10,
    // host     : 'viaduct.proxy.rlwy.net',
    // user     : 'root',
    // password : '-Ee21bHfabB-eDdeD62FFC5C4dbagcDH',
    // database : 'railway',
    // port     : '42321'
});

app.get('/',(req,res)=> {
    try {res.send("HOME")}

    catch(error) {
        console.log(error);
    }
});

app.get('/get_cars', async (req, res) => {

    try {
        let sqlquery = `SELECT ALL * FROM caps WHERE cap_id BETWEEN `;
        if (req.query.pagenum === '1')
            sqlquery+=`1 AND 20;`;

        else if (req.query.pagenum === '2')
            sqlquery+=`21 AND 40;`;

        else
            sqlquery+=`41 AND 45;`;

            console.log(sqlquery);
        await connection.query(sqlquery, function (error, result, fields) {
            // console.log(result);
            res.send(result);
            console.log(req.query);
        });
    }

    catch(error) {
        console.log(error);
    }
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})