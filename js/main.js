
// Get data from deposit input and calculate - Deposit and Balance
document.getElementById('deposit-button').addEventListener('click', function () {

    // Deposit Field
    let deposit_field = document.getElementById('deposit-field');
    let deposit_field_money = parseInt(deposit_field.value);

    // Deposit total
    const deposit_money_total_text = document.getElementById('deposit-balance');
    let total_deposit = parseInt(deposit_money_total_text.innerText);

    // Addition and Add Deposit Balance
    let deposit_total = total_deposit + deposit_field_money;
    deposit_money_total_text.innerText = deposit_total;

    // Add total Balance 
    const total_balance_text = document.getElementById('total-balance');
    let total_balance = parseInt(total_balance_text.innerText);

    let total_balance_current = total_balance + deposit_field_money;

    total_balance_text.innerText = total_balance_current;

    // Clear Field
    deposit_field.value = '';

})

// Get data from withdraw input and calculate - Withdraw and Balance
document.getElementById('withdraw-button').addEventListener('click', function () {

    // Get input value
    const withdraw_field = document.getElementById('withdraw-field');
    let withdraw_field_money = parseFloat(withdraw_field.value);

    // Get total Withdraw
    const total_withdraw_balance_text = document.getElementById('withdraw-balance');
    let total_withdraw = parseInt(total_withdraw_balance_text.innerText);

    // Addition and Add Withdraw Balance
    let total_withdraw_money = withdraw_field_money + total_withdraw;
    total_withdraw_balance_text.innerText = total_withdraw_money;

    // Substract Total Balance
    const total_balance_text = document.getElementById('total-balance');
    let total_balance_prev = parseInt(total_balance_text.innerText);

    let total_balance = total_balance_prev - withdraw_field_money;
    total_balance_text.innerText = total_balance;

    // Clear field
    withdraw_field.value = '';
}) 
