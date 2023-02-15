function updateCaseNumber(isIncrease) {
    // get the value inside the case number field (input field)
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    // convert the number to an integer
    const previousCaseNumber = parseInt(caseNumberString);

    // calculation and set the new value to the case number field
    let newCaseNumber;
    if (isIncrease) { // isIncrease === true;
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
};

// update case total price
function updateCaseTotalPrice(newCaseNumber) {
    const totalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = totalPrice;
}


// add event listener to the case plus + btn
document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
});

// add event listener to the case minus - btn
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
});