'use strict';
const express = require("express");
const router = express.Router();
const request = require('request');

router.get("/", (req, res) => {
    const queryURL = "http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1";
    request(queryURL, (err, response, body) => {
        console.log("here");
        const data = JSON.parse(body);
        const results = data.productList;
        console.log("I ran");
        res.json(results);
    });
});

module.exports = router;
