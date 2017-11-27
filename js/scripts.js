const view = document.querySelector('#calcView');
var store;

function calcView(btnInput) {
  view.innerHTML += btnInput;
  if (btnInput === 'c') {
    view.innerHTML = '';
  }
};

function calc() {
  let answer = view.innerHTML;
  answer = eval(answer);
  view.innerHTML = answer;
};

function mem() {
  store = view.innerHTML;
};

function recall() {
  view.innerHTML = store;
};
