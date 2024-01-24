/* -------------------------------DROPDOWN------------------------------- */

function myFunction(controlId, iconId) {
  var control = document.getElementById(controlId);
  var icon = document.getElementById(iconId);
  control.classList.toggle("show");
  icon.classList.toggle("FAQ__icon-rotate");
};