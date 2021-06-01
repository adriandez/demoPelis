const express = require('express')
const router = require('./controllers/index')
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const {apikey} = require("./config.js");

console.log(apikey);

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})