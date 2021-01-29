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
    //subTotal.innerText = newSubTotal;
    document.getElementById('sub-total').innerText = '$' + newSubTotal;

})

//negative button for phone
document.getElementById('phone-decrease').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const newPhoneCount = phoneCount - 1;
    phoneInput.value = newPhoneCount;

    if(newPhoneCount < 0){
        phoneInput.value = 0;
    }

    const phoneTotal = newPhoneCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;

    const subTotal = document.getElementById('sub-total');
    newSubTotal = parseInt(subTotal.innerText);
    newSubTotal = newSubTotal - 1219;
    document.getElementById('sub-total').innerText = newSubTotal;
})
