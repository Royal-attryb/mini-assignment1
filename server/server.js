const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors'); 
var mysql = require('mysql');
app.use(cors("*"));

const Origdata = [
    {
      "cap_id": 1,
      "images": ["https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png", 
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png",
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"],
      "name": "Model Y",
      "colors": ["Blue", "Red", "Black"],
      "prices": [150000.00, 100000.00, 100000.00],
      "ratings": [5, 4, 4]
    },
    {
        "cap_id": 2,
        "images": ["https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png",
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"],
        "name": "Model S",
        "colors": ["Black", "Red", "Blue"],
        "prices": [140000.00, 125000.00, 135000.00],
        "ratings": [3, 4, 5]
    },
    {
        "cap_id": 3,
        "images": ["https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png",
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"],
        "name": "Model 3",
        "colors": ["Red", "White"],
        "prices": [130000.00, 140000.00],
        "ratings": [4, 5]
    },
    {
        "cap_id": 4,
        "images": ["https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"],
        "name": "Model X",
        "colors": ["White", "Grey"],
        "prices": [110000.00, 130000.00],
        "ratings": [4, 5]
    },
    {
        "cap_id": 5,
        "images": ["https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png"],
        "name": "Cyber truck",
        "colors": ["Black"],
        "prices": [150000.00],
        "ratings": [3] 
    }
];
const data = Array.from({ length: 9 }, () => [...Origdata]).flat();
    
    const getPageData = (pageNum) => {
        const pageSize = 20; // Number of items per page
        const startIndex = (pageNum - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        return data.slice(startIndex, endIndex);
  };

  function getCar (color, model) {
    const selectedCar = data.filter((car) => car.name === model);
    const result = selectedCar[0];
    const colorIndex = result.colors.findIndex((col) => col === color);

    return  {"price": result.prices[colorIndex], "image": result.images[colorIndex], "rating": result.ratings[colorIndex] };
  }
// var connection = mysql.createConnection({
//     // host     : 'localhost',
//     // user     : 'root',
//     // password : 'Royal@11011',
//     // database : 'cars_data',
//     // port     : '3306',
//     host     : 'monorail.proxy.rlwy.net',
//     user     : 'root',
//     password : '5Chba-ED62d3dbH35a363b6Ea4FF2HH2',
//     database : 'railway',
//     port     : '52758',
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
  
//     console.log('connected as id ' + connection.threadId);
//   });

app.get('/',(req,res)=> {
    try {res.send("HOME")}

    catch(error) {
        console.log(error);
    }
});

app.get('/get_cars', async (req, res) => {
    console.log("GET CARS");

    try {
        // let sqlquery = `SELECT ALL * FROM caps WHERE cap_id BETWEEN `;
        // if (req.query.pagenum == '1')
        //     sqlquery+=`1 AND 20;`;

        // else if (req.query.pagenum == '2')
        //     sqlquery+=`21 AND 40;`;

        // else
        //     sqlquery+=`41 AND 45;`;

        // console.log(sqlquery);
        // connection.query(sqlquery, function (error, result, fields) {
        //     if (error) throw error;
        //     console.log('The solution is: ', result);
        //     res.send(result);
        // });
        const pageData = getPageData(parseInt(req.query.pagenum, 10));
        res.send(pageData);
    }

    catch(error) {
        console.log(error);
    }
    
});

app.get('/get_car', async (req, res) => {
    console.log("GET SINGLE CAR");
    console.log(req.query);
    try {
        const car = getCar(req.query.color, req.query.model);
        
        res.send(car);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})