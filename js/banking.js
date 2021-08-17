function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const currentInput = parseFloat(input.value);
    // clear input field
    input.value = '';
    return currentInput;
}

function updateAmount(amountId, currentInput) {
    const amount = document.getElementById(amountId);
    const currentAmount = parseFloat(amount.innerText);
    const totalAmount = currentAmount + currentInput;
    amount.innerText = totalAmount;
    // return totalDepositAmount;
}

function getCurrentBalance() {
    const balanceAmount = document.getElementById('balance-amount');
    const PreviousBalanceToatl = parseFloat(balanceAmount.innerText);
    return PreviousBalanceToatl;
}

function updateBalance(currentInput, isAdd) {
    const balanceAmount = document.getElementById('balance-amount');
    const currentBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        const totalBalanceAmount = currentBalanceAmount + currentInput;
        balanceAmount.innerText = totalBalanceAmount;
    }
    else if (isAdd == false) {
        const totalBalanceAmount = currentBalanceAmount - currentInput;
        balanceAmount.innerText = totalBalanceAmount;
    }
    else {
        return;
    }

}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // get amount deposited
    const currentDepositInput = getInputValue('deposit-input');

    if (currentDepositInput > 0) {
        // update deposit amount
        updateAmount('deposit-amount', currentDepositInput);

        // update balance
        updateBalance(currentDepositInput, true);
    }
})

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get amount withdrawed
    const currentWithdrawInput = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (currentWithdrawInput > 0 && currentWithdrawInput < currentBalance) {
        // update withdraw amount
        updateAmount('withdraw-amount', currentWithdrawInput);

        // update balance
        updateBalance(currentWithdrawInput, false);
    }
    else {
        const errorMessage = document.createElement('div');
        errorMessage.innerText = "You can not withdraw more than what you have in your account";
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '20px';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.paddingTop = '20px';
        document.getElementById('deposit-withdraw').appendChild(errorMessage);
        errorMessage.innerText = '';
    }
})