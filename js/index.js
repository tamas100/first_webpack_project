import getDateString from "./date";

document
    .querySelector('.js-content')
    .innerHTML = `It's ${getDateString()}`;
