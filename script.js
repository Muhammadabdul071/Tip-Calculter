const form = document.getElementById('tip-form');
const billAmountInput = document.getElementById('bill-amount');
const tipPercentageInput = document.getElementById('tip-percentage');
const tipAmountDisplay = document.getElementById('tip-amount');
const smbtn = document.getElementById('sbmt');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const tipAmount = billAmount * (tipPercentage / 100);
    tipAmountDisplay.textContent = `Tip Amount: RS${tipAmount.toFixed(2)}`;
}); 
smbtn.addEventListener('click', function() {
    form.dispatchEvent(new Event('submit'));
});

