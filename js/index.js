import getDateString from "./date";
import '../styles/styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../index.html';

$(document).ready(() => {

    // Print the current time
    $('.js-content').html(`It's ${getDateString()}`);

    // Display the Bootstrap modal window
    $('.js-modal').modal({
        show: true,
        keyboard: true
    });

});
