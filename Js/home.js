// console.log('home added');
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();


    const addMoneyInput =parseFloat(document.getElementById('Input-add-money').value);
    console.log(addMoneyInput);
   

    const pinNumberInput =document.getElementById('Input-pin').value;
    console.log(pinNumberInput);

    if(pinNumberInput === '1234' && addMoneyInput >=0){
        console.log('Adding money ');
const balance = document.getElementById('balance').innerText;
const newBalance = (parseFloat(addMoneyInput) + parseFloat(balance)).toFixed(2);
document.getElementById('balance').innerText= newBalance;
console.log(newBalance);
     
    }
else{
    alert('Failed to add money')
}
    
})




