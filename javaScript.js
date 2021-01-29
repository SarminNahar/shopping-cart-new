//positive buttton for phone
document.getElementById('phone-increase').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const newPhoneCount = phoneCount + 1;
    phoneInput.value = newPhoneCount;

    const phoneTotal = newPhoneCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;

    const subTotal = document.getElementById('sub-total');
    newSubTotal = parseInt(subTotal.innerText);
    newSubTotal = newSubTotal + 1219;
    document.getElementById('sub-total').innerText = newSubTotal;
})

//negative button for phone
document.getElementById('phone-decrease').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const newPhoneCount = phoneCount - 1;
    phoneInput.value = newPhoneCount;

    if(newPhoneCount < 0){
        phoneInput.value = 0;
        return;
    }

    const phoneTotal = newPhoneCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;

    const subTotal = document.getElementById('sub-total');
    newSubTotal = parseInt(subTotal.innerText);
    newSubTotal = newSubTotal - 1219;
    document.getElementById('sub-total').innerText = newSubTotal;
})

//positive button for case
document.getElementById('case-increase').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const newCaseCount = caseCount + 1;
    caseInput.value = newCaseCount;

    const caseTotal = newCaseCount * 59;
    document.getElementById('case-total').innerText = '$' + caseTotal;

    const subTotal = document.getElementById('sub-total');
    newSubTotal = parseInt(subTotal.innerText);
    newSubTotal = newSubTotal + 59;
    document.getElementById('sub-total').innerText = newSubTotal;

})

//negative button for case

document.getElementById('case-decrease').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const newCaseCount = caseCount - 1;
    caseInput.value = newCaseCount;
    if(newCaseCount < 0){
        caseInput.value = 0;
        return;
    }

    const caseTotal = newCaseCount * 59;
    document.getElementById('case-total').innerText = '$' + caseTotal;

    const subTotal = document.getElementById('sub-total');
    newSubTotal = parseInt(subTotal.innerText);
    newSubTotal = newSubTotal - 59;
    document.getElementById('sub-total').innerText = newSubTotal;
})

