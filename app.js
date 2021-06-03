const express = require('express')
const router = require('./controllers/index')
const routerApi = require('./controllers/routerApi')
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');
app.use(require('body-parser').json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const {apikey} = require("./config.js");

app.use(express.static('public'));
app.use('/api', routerApi);
app.use('/', router);
app.use((req, res, next) =>{
    console.log("errorH");
    return res.status(404).json({message: "Route does not exist"})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
