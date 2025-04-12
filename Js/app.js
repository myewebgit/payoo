// Initial Setup
let balance = 89400;
const correctPIN = '1234';

// Elements
const balanceEl = document.getElementById('balance');
const messageEl = document.getElementById('message');

const addMoneyForm = document.getElementById('addMoneyForm');
const cashOutForm = document.getElementById('cashOutForm');

const addMoneyBtn = document.getElementById('add-money');
const cashOutBtn = document.getElementById('cash-out');

// Helper: Update balance display with comma formatting
function updateBalanceDisplay() {
  balanceEl.textContent = balance.toLocaleString();
}

// Helper: Show message
function showMessage(text, isError = false) {
  messageEl.textContent = text;
  messageEl.className = `text-center text-sm font-medium ${isError ? 'text-red-600' : 'text-green-600'}`;
}

// Toggle Forms
addMoneyBtn.addEventListener('click', () => {
  addMoneyForm.classList.remove('hidden');
  cashOutForm.classList.add('hidden');
  showMessage('');
});

cashOutBtn.addEventListener('click', () => {
  cashOutForm.classList.remove('hidden');
  addMoneyForm.classList.add('hidden');
  showMessage('');
});

// Add Money Logic
addMoneyForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const amount = parseFloat(document.getElementById('Input-add-money').value);
  const pin = document.getElementById('Input-pin').value;

  if (isNaN(amount) || amount <= 0) {
    return showMessage('Enter a valid amount.', true);
  }

  if (pin !== correctPIN) {
    return showMessage('Incorrect PIN. Try again.', true);
  }

  balance += amount;
  updateBalanceDisplay();
  showMessage('Money added successfully!');
  addMoneyForm.reset();
});

// Cash Out Logic
cashOutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const amount = parseFloat(document.getElementById('Cash-out-money').value);
  const pin = document.getElementById('cash-out-pin').value;

  if (isNaN(amount) || amount <= 0) {
    return showMessage('Enter a valid amount.', true);
  }

  if (pin !== correctPIN) {
    return showMessage('Incorrect PIN. Try again.', true);
  }

  if (amount > balance) {
    return showMessage('Insufficient balance.', true);
  }

  balance -= amount;
  updateBalanceDisplay();
  showMessage('Cash out successful!');
  cashOutForm.reset();
});

// Set initial balance
updateBalanceDisplay();
