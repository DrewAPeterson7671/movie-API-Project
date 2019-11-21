import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MovieService } from './../src/movies.js';
import { GiphyService } from './../src/movies.js';


$(document).ready(function() {

  $('#movieButton').click(function() {
    const movie = $('#location').val();
    $('#location').val("");

    (async () => {
      let movieService = new MovieService();
      const response = await movieService.getMovie(movie);
      getElements(response);
    })();

    function getElements(response) {
      $('.showMovie').text(`${response.Title}`);
      $('.showDirector').text(`${response.Director}`);
    }

    setInterval (function() {
      $("#imageToPlay").toggle();
    },5000);


    (async () => {
      let giphyService = new GiphyService();
      const response = await giphyService.getGif(movie);
      getElements(response);
    })();

    // trying to plumb the front end of the giphy api

    // $("#imageToToggle").attr("src", response.data.images.original.url);

    // getAPI(movie);
    //   getElements = function(response) {
    //   $("#imageToToggle").attr("src", response.data.images.original.url);
    // }};
  });

});












// https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${searchTermWinLoss}`

// const getElements = function(response) {
//     $("#imageWinLoss").attr("src", response.data.images.original.url);
//   };
//
// let searchTerm = "city";
//
//   let api = function() {
//     let request = new XMLHttpRequest();
//     const url = `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${searchTerm}`;
//
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };
//
//     request.open("GET", url, true);
//     request.send();
//
//     const getElements = function(response) {
//       $("#testGif").attr("src", response.data.images.original.url);
//     };
//   };
