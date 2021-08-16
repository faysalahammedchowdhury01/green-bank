// selectors
const depositForm = document.getElementById('deposit-form');
const withdrawForm = document.getElementById('withdraw-form');
const depositField = document.getElementById('deposit-field');
const withdrawField = document.getElementById('withdraw-field');
const totalDepositAmountBox = document.getElementById('total-deposit-amount');
const totalWithdrawAmountBox = document.getElementById('total-withdraw-amount');
const totalBalanceBox = document.getElementById('total-balance');

// functions
function getInputValue(inputField) {
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  inputField.value = '';
  return inputValue;
}

function updateBalance(amountBox, newAmount) {
  const currentBalanceText = amountBox.innerText;
  const currentBalance = parseFloat(currentBalanceText);
  const newBalance = currentBalance + newAmount;
  amountBox.innerText = newBalance;
}

function getCurrentTotalBalance() {
  const totalBalanceBoxText = totalBalanceBox.innerText;
  const totalBalance = parseFloat(totalBalanceBoxText);
  return totalBalance;
}

function updateTotalBalance(newAmount, isAdd) {
  const currentTotalBalance = getCurrentTotalBalance();
  let newTotalBalance;
  if (isAdd == true) {
    newTotalBalance = currentTotalBalance + newAmount;
  } else {
    newTotalBalance = currentTotalBalance - newAmount;
  }
  totalBalanceBox.innerText = newTotalBalance;
}

function handleDeposit(event) {
  event.preventDefault();
  const newDepositAmount = getInputValue(depositField);
  if (newDepositAmount <= 0 || isNaN(newDepositAmount)) {
    alert('Deposit ammount must be greater than 0');
    return;
  }
  updateBalance(totalDepositAmountBox, newDepositAmount);
  updateTotalBalance(newDepositAmount, true);
}

function handleWithdraw(event) {
  event.preventDefault();
  const currentTotalBalance = getCurrentTotalBalance();
  const newWithdrawAmount = getInputValue(withdrawField);
  if (newWithdrawAmount <= 0 || isNaN(newWithdrawAmount)) {
    alert('Withdraw ammount must be greater than 0');
    return;
  } else if (newWithdrawAmount > currentTotalBalance) {
    alert("You don't have enought money to withdraw");
    return;
  }
  updateBalance(totalWithdrawAmountBox, newWithdrawAmount);
  updateTotalBalance(newWithdrawAmount, false);
}

// event listeners
depositForm.addEventListener('submit', handleDeposit);
withdrawForm.addEventListener('submit', handleWithdraw);
