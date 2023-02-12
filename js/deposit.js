document.getElementById('deposit-button').addEventListener('click', function(){
   const depositInput = document.getElementById('input-deposit')
    const input = depositInput.value;
    const newInput = parseFloat(input);
    depositInput.value = '';
    if(isNaN(newInput)){
        alert('please valid a number')
        return;
    }
    if (newInput < 0) {
        alert("Negative number entered!");
        return;
      }
    const depositFilde = document.getElementById("deposit")
    const depositTotalElement = depositFilde.innerText;
    const newDeposittotalElement = parseFloat(depositTotalElement);
    const currentDeposit = newDeposittotalElement + newInput;
    depositFilde.innerText = currentDeposit;
    const balance = document.getElementById('Balance');
    const balanceTotalElement = balance.innerText;
    const newBalanceTotalElement = parseFloat(balanceTotalElement);
    const currentBalance = newBalanceTotalElement + newInput;
    balance.innerText = currentBalance;    
})

// withdraw----------------

document.getElementById('withdraw-button').addEventListener('click', function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawString = inputWithdraw.value;
    const newInputWithdraw = parseFloat(inputWithdrawString);
    inputWithdraw.value = '';
    if(isNaN(newInputWithdraw)){
        alert('please valid a number')
        return;
    }
    const withdraw = document.getElementById('withdraw');
    const withdrawTotalElementString = withdraw.innerText;
    const newWithdrawTotalElement = parseFloat(withdrawTotalElementString)
    
    
    
    const withdrawBalance = document.getElementById('Balance');
    const withdrawTotalBalanceString = withdrawBalance.innerText;
    const newWithdrawTotalBalance = parseFloat(withdrawTotalBalanceString);
    if(newInputWithdraw > newWithdrawTotalBalance){
       alert("You have no money ,Please Deposit amount")
       return ;
    }
    const currentWithdraw = newWithdrawTotalElement + newInputWithdraw;
    withdraw.innerText = currentWithdraw;
    const newCurrentBalance = newWithdrawTotalBalance - newInputWithdraw;
    withdrawBalance.innerText = newCurrentBalance;
})