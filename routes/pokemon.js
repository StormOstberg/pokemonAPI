const express = require('express');
const router = express.Router();
const pokemons =require('../modules/pokemons');

router.get('/',(req,res)=>{
    const apiResp = pokemons.getPokemons();
    res.json(apiResp).end;
})
router.post('/add',(req,res)=>{
    res.send('Add a kitchen applilance').end;
})
router.put('/update',(req,res)=>{
    res.send('Updating a kitchen appliance');
})
router.put('/delete',(req,res)=>{
    res.send('Deleting a kitchen appliance');
})

module.exports = router;