import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MovieService } from './../src/movies.js';


$(document).ready(function() {

  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let movieService = new MovieService();
      const response = await movieService.getWeatherByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      $('.showHumidity').text(`${response.Title}`);
      $('.showTemp').text(`${response.Director}`);
    }

    setInterval (function() {
      $("#imageToPlay").toggle();
    },1000);

  });
});
