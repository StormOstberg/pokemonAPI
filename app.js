const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extede: false }))

app.use((req,resp,next) =>{
    let authenticated = true;

    if (authenticated){
        next();
    }
    else{
        resp.json({
            "Error": "Not Authenticated"
        })
    }

});

const pokemonRoutes = require('./routes/pokemon');

app.use('/api/v1/pokemon', pokemonRoutes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})