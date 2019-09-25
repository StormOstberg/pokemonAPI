const ApiResponse = require('./api-response');

class pokemons{
    getPokemons(){
        const apiResp = new ApiResponse();
        apiResp.Data(['pokemon data coming here'])
        return apiResp;
    }
    addAppliance(){

    }
    updateAppliance(){
        
    }
    deleteAppliance(){
        
    }
}
module.exports = new pokemons();