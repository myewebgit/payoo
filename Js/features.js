// 1. Balance Wraper start

let isBalanceVisible = false;

document.getElementById('balance-wrapper').addEventListener('click', () => {
  const balanceEl = document.getElementById('balance');
  if (isBalanceVisible) {
    balanceEl.textContent = 'Balance';
  } else {
    balanceEl.textContent = balance.toLocaleString();
  }
  isBalanceVisible = !isBalanceVisible;
});


// Balance Wraper end------

