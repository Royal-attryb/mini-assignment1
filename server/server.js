const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); 
var mysql = require('mysql');
app.use(cors("*"));

var connection = mysql.createConnection({
    // host     : 'localhost',
    // user     : 'root',
    // password : 'Royal@11011',
    // database : 'cars_data',
    // port     : '3306',
    host     : 'monorail.proxy.rlwy.net',
    user     : 'root',
    password : '5Chba-ED62d3dbH35a363b6Ea4FF2HH2',
    database : 'railway',
    port     : '52758',
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

app.get('/',(req,res)=> {
    try {res.send("HOME")}

    catch(error) {
        console.log(error);
    }
});

app.get('/get_cars', async (req, res) => {
    console.log("GET CARS");

    try {
        let sqlquery = `SELECT ALL * FROM caps WHERE cap_id BETWEEN `;
        if (req.query.pagenum == '1')
            sqlquery+=`1 AND 20;`;

        else if (req.query.pagenum == '2')
            sqlquery+=`21 AND 40;`;

        else
            sqlquery+=`41 AND 45;`;

        console.log(sqlquery);
        connection.query(sqlquery, function (error, result, fields) {
            if (error) throw error;
            console.log('The solution is: ', result);
            res.send(result);
        });
    }

    catch(error) {
        console.log(error);
    }
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})