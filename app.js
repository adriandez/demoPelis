const express = require('express')
const router = require('./controllers/index')
const routerApi = require('./controllers/routerApi')
const app = express()
const PORT = 3000 || process.env.PORT

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

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
