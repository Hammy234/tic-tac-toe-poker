const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
  const card = document.querySelector('#'+idInput.value);
  card.style.color = colorInput.value;
}
function resetButton() {
  document.querySelector('#color-form').reset();
  const cards = document.querySelectorAll('.card');
  cards.forEach( card => card.style.color = "grey")
}
  