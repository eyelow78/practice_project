const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const guestCount = document.getElementById('guestCount');
const input = document.querySelector('.booking__number-of-persons-input')

let count = 1;

function updateButtons() {
  decrementButton.disabled = count <= 1;
  incrementButton.disabled = count >= 5;
}

function updateInputValue(count) {
    input.setAttribute('value', count);
}

decrementButton.addEventListener('click', () => {
  if (count > 1) {
    count--;
    guestCount.textContent = count;
    updateButtons();
    updateInputValue(count)
  }
});

incrementButton.addEventListener('click', () => {
  count++;
  guestCount.textContent = count;
  updateButtons();
  updateInputValue(count)
});

updateButtons();
updateInputValue(count)