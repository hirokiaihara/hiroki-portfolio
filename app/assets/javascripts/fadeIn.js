document.addEventListener("turbolinks:load", function () {
  const cb = function(el, isIntersecting) {
    if(isIntersecting) {
      el.classList.add('inview');
    }
  }
  const so = new ScrollObserver('.main-section', cb);
});