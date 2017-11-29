// DOM Elements
const btn = document.querySelector('#input');
const colorPick = document.querySelector('#color');
const main = document.querySelector('main');

// Prompt the user to enter a header and a paragraph to append to the page
function addContent() {
  btn.className = 'hidden';
  const h1Str = prompt('Add Header', 'Baby Driver');
  const pStr = prompt('Add a few sentences', 'Baby Driver, is a really good movie. Seriously, the music is awesome, and the driving sequences are top notch. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi omnis doloribus sunt sequi mollitia cupiditate ut, suscipit est cum, vitae quo odio repudiandae exercitationem sit in molestias ea, alias veritatis?');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  h1.textContent = h1Str;
  h1.className = 'center';
  p.textContent = pStr;
  p.className = 'justify';
  main.append(h1, p);
};

// Ask the user for a color and change the background color of the paragraph to that color
function addColor() {
  const p = document.querySelector('p');
  var color;
  colorPick.addEventListener('change', (e) => {
    color = e.target.value;
    p.style.backgroundColor = color;
  });
};
