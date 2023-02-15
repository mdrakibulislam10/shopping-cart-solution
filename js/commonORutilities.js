/* function updateCaseNumber(isIncrease, inputId) {
    // get the value inside the case number field (input field)
    const caseNumberField = document.getElementById(inputId);
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
}; */


/* // update phone total price
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = newPhoneNumber * 1219;
}; */

// get text element value by id
function getTextElementValueById(elementId) {
    const phoneCaseTotalElement = document.getElementById(elementId);
    const currentPhoneCaseTotalString = phoneCaseTotalElement.innerText;
    const currentPhoneCaseTotal = parseInt(currentPhoneCaseTotalString);

    return currentPhoneCaseTotal;
};

// set text element
function setElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// calculate sub total
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById("phone-total");
    const currentCaseTotal = getTextElementValueById("case-total");

    // calculate total
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById("sub-total", currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2); // price * 10 / 100;
    const taxAmount = parseFloat(taxAmountString);
    setElementValueById("tax-amount", taxAmount);

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    setElementValueById("final-total", finalAmount);
};