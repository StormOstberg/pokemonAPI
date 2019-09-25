class ApiResponse{
    constructor(){
        this.data = null;
        this.success = true;
        this.error = '';
    }

    Data(data){
        this.data = data;
    }
    Success(sucess){
        this.success = success;
    }
    Error(error){
        this.error = error
    }
}

module.exports = ApiResponse;