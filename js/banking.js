// selectors
const depositForm = document.getElementById('deposit-form');
const withdrawForm = document.getElementById('withdraw-form');

// functions
function handleDeposit(event) {
  event.preventDefault();
  // get deposit value
  const depositField = document.getElementById('deposit-field');
  const newDepositAmount = parseFloat(depositField.value);

  if (newDepositAmount <= 0 || isNaN(newDepositAmount)) {
    alert('Deposit amount must be grater than 0');
    return;
  }

  // update deposit balance
  const totalDepositAmountBox = document.getElementById('total-deposit-amount');
  const totalDepositAmountText = totalDepositAmountBox.innerHTML;
  const totalDepositAmount = parseFloat(totalDepositAmountText);

  totalDepositAmountBox.innerText = (
    totalDepositAmount + newDepositAmount
  ).toFixed(2);

  // update total balance
  const totalBalanceBox = document.getElementById('total-balance');
  const totalBalanceText = totalBalanceBox.innerHTML;
  const totalBalance = parseFloat(totalBalanceText);

  totalBalanceBox.innerText = (totalBalance + newDepositAmount).toFixed(2);

  // clear
  depositField.value = '';
}

function handleWithdraw(event) {
  event.preventDefault();
  // get withdraw value
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmount = parseFloat(withdrawField.value);

  console.log(newWithdrawAmount);

  if (newWithdrawAmount <= 0 || isNaN(newWithdrawAmount)) {
    alert('Withdraw amount must be greater than 0');
    return;
  }

  // update withdraw balance
  const totalWithdrawAmountBox = document.getElementById(
    'total-withdraw-amount'
  );
  const totalWithdrawAmountText = totalWithdrawAmountBox.innerHTML;
  const totalWithdrawAmount = parseFloat(totalWithdrawAmountText);

  totalWithdrawAmountBox.innerText = (
    totalWithdrawAmount + newWithdrawAmount
  ).toFixed(2);

  // update total balance
  const totalBalanceBox = document.getElementById('total-balance');
  const totalBalanceText = totalBalanceBox.innerHTML;
  const totalBalance = parseFloat(totalBalanceText);

  totalBalanceBox.innerText = (totalBalance - newWithdrawAmount).toFixed(2);

  // clear
  withdrawField.value = '';
}

// event listeners
depositForm.addEventListener('submit', handleDeposit);
withdrawForm.addEventListener('submit', handleWithdraw);

// Greet
const hrs = new Date().getHours();
const greetMessage = document.getElementById('greet');
let greet = 'Good Evening';

if (hrs < 12) greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 20) greet = 'Good Evening';
else if (hrs >= 20 && hrs <= 24) greet = 'Good Night';

greetMessage.innerText = greet;
