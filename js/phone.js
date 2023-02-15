function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease) { // isIncrease === true;
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
};

// update phone total price
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = newPhoneNumber * 1219;
};

// + btn handler
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
});

// - btn handler
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
});