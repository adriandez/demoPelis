const fetch = require('node-fetch');

const products = {
    getProducts: async url => {
        let data = [];
        let response = await fetch(url);
        let prod = await response.json();

        Array.isArray(prod)?data=prod:data=[prod];
        return data;
    },
    createProduct: async (url, data) => {
        // {
        //     title: 'test product',
        //     price: 13.5,
        //     description: 'lorem ipsum set',
        //     image: 'https://i.pravatar.cc',
        //     category: 'electronic'
        // }
        let response = await fetch(url, 
        {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(
                        data
                    )
        });

        let prod = await response.json();
        return prod;
    }
    
}


module.exports = products;