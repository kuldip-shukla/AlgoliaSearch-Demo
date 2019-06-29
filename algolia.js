const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const algoliasearch = require('algoliasearch');
const client = algoliasearch('DI9WTF1XE0', 'cf66c84d6510d48d905f2a230713a9d2');
const index = client.initIndex('dubai');

app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (err, client) {
    var db = client.db('algolia');
    var cursor = db.collection('dubai').find();
    var data = [];
    cursor.each(function (err, result) {
        if (result) {
            data.push(result);
        }
        // index.addObjects(data);
    });

});

app.get('/', (req, res) => {
    res.render('search');
})

app.post('/search', (req, res) => {
    availableFor = '';
    type = '';
    if (req.body.rent == true) {
        availableFor = 'Rent';
    }
    if (req.body.buy == true) {
        availableFor = 'Buy';
    }
    if (req.body.residential == true) {
        type = 'Residential';
    }
    if (req.body.commercial == true) {
        type = 'Commercial';
    }
    index.search(req.body.keyword, {
        hitsPerPage: 10,
        page: 0,
        analytics: false,
        attributesToRetrieve: "*",
        attributesToSnippet: "*:20",
        getRankingInfo: true,
        snippetEllipsisText: "…",
        responseFields: "*",
        facets: "*,community.buldings.type,community.buldings.availableFor",
        facetFilters: [
            [
                "community.buldings.availableFor:" + availableFor
            ],
            [
                "community.buldings.type:" + type
            ]
        ]
    }, (err, { hits } = {}) => {
        if (err) {
            return err;
        }
        var buildingData = [];
        for (let i = 0; i < hits.length; i++) {
            for (let j = 0; j < hits[i].community.buldings.length; j++) {
                if (hits[i].community.buldings[j].availableFor == availableFor && hits[i].community.buldings[j].type == type) { 
                    buildingData.push({ c_name: hits[i].community.c_name, buldings: hits[i].community.buldings[j] });
                }
                if(availableFor == '' && type == ''){
                    buildingData.push({ c_name: hits[i].community.c_name, buldings: hits[i].community.buldings[j] });
                }
                // else {
                //     buildingData.push({ c_name: hits[i].community.c_name, buldings: hits[i].community.buldings[j] });
                // }
            }
        }
        return res.status(200).send(buildingData);
    });
})

app.listen(3022); 