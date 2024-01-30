const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); 
var mysql = require('mysql');
app.use(cors("*"));

const data = [
    {
      "cap_id": 1,
      "image": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
      "name": "Model Y",
      "color": "Blue",
      "price": 150000.00,
      "rating": 5
    },
    {
        "cap_id": 2,
        "image": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
        "name": "Model S",
        "color": "Black",
        "price": 140000.00,
        "rating": 3
    },
    {
        "cap_id": 3,
        "image": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png",
        "name": "Model 3",
        "color": "Red",
        "price": 130000.00,
        "rating": 4
    },
    {
        "cap_id": 4,
        "image": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
        "name": "Model X",
        "color": "White",
        "price": 110000.00,
        "rating": 4
    },
    {
        "cap_id": 5,
        "image": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
        "name": "Cyber truck",
        "color": "Black",
        "price": 100000.00,
        "rating": 3
    },
    {
        "cap_id": 6,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY23,$PR01,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
        "name": "Model Y",
        "color": "Red",
        "price": 100000.00,
        "rating": 4
    },
    {
        "cap_id": 7,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY23,$PN01,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
        "name": "Model Y",
        "color": "Black",
        "price": 100000.00,
        "rating": 5
    },
    {
        "cap_id": 8,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$BC3R,$DV4W,$IPB1,$PPSW,$PRM31,$SC04,$MDL3,$W33D,$SLR1,$MT317,$PL31,$SPT31,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&",
        "name": "Model 3",
        "color": "White",
        "price": 140000.00,
        "rating": 5
    },
    {
        "cap_id": 9,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=FRONT34&size=1400&model=mx&options=$MDLX,$MTX13,$PMNG,$WX20,$APBS,$CC04,$SC04,$CPF0,$IWW00,$ST0Y,$TW01&crop=1400,850,300,130&",
        "name": "Model X",
        "color": "Grey",
        "price": 130000.00,
        "rating": 4
    },
    {
        "cap_id": 10,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=FRONT34&size=1400&model=mx&options=$MDLX,$MTX13,$PMNG,$WX20,$APBS,$CC04,$SC04,$CPF0,$IWW00,$ST0Y,$TW01&crop=1400,850,300,130&",
        "name": "Model X",
        "color": "Grey",
        "price": 130000.00,
        "rating": 4
    },
    {
        "cap_id": 11,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=FRONT34&size=1400&model=ms&options=$MDLS,$MTS13,$PPMR,$WS11,$APBS,$SC04,$CPF0,$IBE00,$ST0Y&crop=1400,850,300,130&",
        "name": "Model S",
        "color": "Red",
        "price": 125000.00,
        "rating": 4
    },
    {
        "cap_id": 12,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=FRONT34&size=1400&model=ms&options=$MDLS,$MTS13,$PPSB,$WS11,$APBS,$SC04,$CPF0,$IBE00,$ST0Y&crop=1400,850,300,130&",
        "name": "Model S",
        "color": "Blue",
        "price": 135000.00,
        "rating": 5
    },
    {
        "cap_id": 13,
        "image": "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=FRONT34&size=1400&model=ms&options=$MDLS,$MTS13,$PPSB,$WS11,$APBS,$SC04,$CPF0,$IBE00,$ST0Y&crop=1400,850,300,130&",
        "name": "Model U",
        "color": "Blue",
        "price": 135000.00,
        "rating": 5
    }
];

const getPageData = (pageNum) => {
    const pageSize = 20; // Number of items per page
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    return data.slice(startIndex, endIndex);
  };
  
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})