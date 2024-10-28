let count = 0;

document.getElementById('count').innerText = count;

document.getElementById('increase').addEventListener('click', () => {
  count--;
  updateCountDisplay();
});

document.getElementById('decrease').addEventListener('click', () => {
  count++;
  updateCountDisplay();
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  updateCountDisplay();
});

function updateCountDisplay() {
  document.getElementById('count').innerText = count;
  if (count < 0) {
    document.getElementById('count').style.color = 'red';
  } else {
    document.getElementById('count').style.color = 'green'; // or whatever the original color was
  }
}