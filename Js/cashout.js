document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();


    const cashOutInput =parseFloat(document.getElementById('Cash-out-money').value);
    console.log(cashOutInput);
   

    const pinNumberInput =document.getElementById('cash-out-pin').value;
    console.log(pinNumberInput);

    if(pinNumberInput === '1234' && cashOutInput >=0){
        console.log('Cash Out money ');
const balance = document.getElementById('balance').innerText;
const newBalance = ( parseFloat(balance)- parseFloat(cashOutInput)).toFixed(2);
document.getElementById('balance').innerText= newBalance;
console.log(newBalance);
     
    }
else{
    alert('Failed to add money')
}
    
})