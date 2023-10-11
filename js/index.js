import getDateString from "./date";
import '../styles/styles.css';

document
    .querySelector('.js-content')
    .innerHTML = `It's ${getDateString()}`;
