require('dotenv').config()
const express = require('express')
const router = require('./controllers/index')
const routerApi = require('./controllers/routerApi')
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'pug');
app.set('views','./views');
app.use(require('body-parser').json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', routerApi);
app.use('/', router);
app.use((req, res, next) =>{
    console.log("errorH");
    return res.status(404).json({message: "Route does not exist"})
})
app.use((err, req, res, next) =>{
    console.log("errorH");
    return res.status(500).json({message: `Server ${err}`})
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
