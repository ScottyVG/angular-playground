document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[name=auto]').addEventListener('input', function(databinder) {
    document.querySelector('h1').innerHTML = databinder.target.value
  });
});
