
export class MovieService {
  async getMovie(movie) {
    try {
      let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
  // trying to plumb the front end of the giphy api
export class GiphyService {
  async getGif(movie) {
    try {
      let response = await fetch(`http://api.giphy.com/v1/gifs/translate?q=${movie}&api_key=${process.env.API_KEY_GIPHY}&limit=1"`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}




// export class GiphyService {
//   getAPI(movie) {fetch(`http://api.giphy.com/v1/gifs/translate?q=${movie}&api_key=${process.env.API_KEY_GIPHY}&limit=1"`);
//   console.log(movie);
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonifiedResponse) {
//     return getElements(jsonifiedResponse);
//   });
// }
//
//
// export class GiphyService {
//   getAPI(movie) {fetch(`http://api.giphy.com/v1/gifs/translate?q=${movie}&api_key=${process.env.API_KEY_GIPHY}&limit=1"`);
//   console.log(movie);
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonifiedResponse) {
//     return getElements(jsonifiedResponse);
//   });
// }
