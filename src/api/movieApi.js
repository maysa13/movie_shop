import {httpConnect} from '../helper/httpConnect';


class MovieApi {
    constructor() {
    }
    async getTheMovie(movieName) {
        return httpConnect.get('https://api.themoviedb.org/3/search/movie?api_key='+process.env.REACT_APP_KEY+'&query='+movieName)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                this.handleError(error);
            });
    }
    handleResponseError(response) {
        console.log("handleResponseError ==> response : ",response);
    }
    handleError(error) {
        console.log("handleErrorr ==> error.message : ", error.message);
    }
}

export default MovieApi;