window.addEventListener('load', init, false);
function init() {
  document.querySelectorAll('textarea').forEach((element) => {
    element.addEventListener('keydown', autoTextareaGrow, false);
    element.addEventListener('keyup', autoTextareaGrow, false);
  });
}
function autoTextareaGrow() {
  this.style.height = ''; // Reset height on each call.
  this.style.height = 'calc(' + this.scrollHeight + 'px - 1em)'; // -1em offset of scrollHeight (because of 1em total vertical padding).
  this.setAttribute('value', this.value.trim() ? this.value : '');
}