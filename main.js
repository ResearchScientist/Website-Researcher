window.onfocus = function() {
  document.title = "Ruben Sanchez Researcher";
}

window.onblur = function() {
  document.title = "Ruben Sanchez Scientist";
}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);