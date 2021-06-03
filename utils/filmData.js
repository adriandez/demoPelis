const fetch = require('node-fetch');

const filmData = {
    getfilm: async url => {
        console.log(url);
        let response = await fetch(url);
        let data = await response.json();
        return data;
    },
}
module.exports = filmData;