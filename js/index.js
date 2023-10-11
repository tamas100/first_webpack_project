import getDateString from "./date";
import '../styles/styles.css';
import $ from 'jquery';

$(document).ready(() => {

    // Print the current time
    $('.js-content').html(`It's ${getDateString()}`);

});
