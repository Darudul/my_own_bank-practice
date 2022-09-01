// function dubleIt(num){
//     const result = num * 2;
//     return result;
// }

// dubleIt(65);

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText)
    // clear input field
    depositInput.value = '';
    return depositAmount;
}






document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositAmount = getInputValue();
    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText)
    depositTotal.innerText = previousDepositTotal + depositAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

// Handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    withdrawAmountText = withdrawInput.value;
    withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;




    //  clear withdraw button
    withdrawInput.value ='';


});