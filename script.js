// script.js

const icon = document.querySelector('.icon');
const links = document.querySelector('.links');

icon.addEventListener('click', () => {
    links.classList.toggle('active');
});