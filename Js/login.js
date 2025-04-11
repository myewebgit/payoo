// console.log('logged in by clicking');
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phone = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin-number').value;
    console.log(phone, pin);

    if(phone=== '5' && pin === '1234'){
        console.log('logged in successfuly');
        window.location.href = '/home.html'
    }
   else{
    alert('Wrong pin')
   }

})