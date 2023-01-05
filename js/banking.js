function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;

};

function getInnerxTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
};

function updateTotal(fieldId, amount) {
    const previousTotal = getInnerxTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
};

function updateBlance(amount, isAddig) {
    const previousBlance = getInnerxTextValue('balance-total');
    if (isAddig == true) {
        newBlance = previousBlance + amount;
    }
    else {
        newBlance = previousBlance - amount;
    }
    document.getElementById('balance-total').innerText = newBlance;

}


document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        const depositField = updateTotal('deposit-total', amount);
        updateBlance(amount, true);
    }

});

//Widthdrow Handale 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const blance = getInnerxTextValue('balance-total');
    if (amount > 0 && amount <= blance) {
        const withdrawField = updateTotal('withdraw-total', amount);
        updateBlance(amount, false);
    }
})