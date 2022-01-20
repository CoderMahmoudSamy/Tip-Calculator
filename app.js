window.onload = () => {
        document.querySelector('input').focus()
    }
    // Set Element Name
let custom = document.querySelector('.custom');
let bill = document.querySelector('.bill input');
let selectTips = document.querySelectorAll('.tip-percentage');
let peopleNumber = document.querySelector('.people-number input');
let tipAmount = document.querySelector('.tip-amount .tip-amount-right-part');
let total = document.querySelector('.total .tip-amount-right-part');
let label = document.querySelectorAll('label[for="people-number"]')[1];
let resetBtn = document.querySelector('.reset');

// Get Bill Value
let billValue;
bill.oninput = () => {
    return billValue = bill.value
}

// Get People Number
let peopleNumberValue;
peopleNumber.addEventListener('keyup', () => {
    return peopleNumberValue = peopleNumber.value
});


// Tip Selection
let parsedTipValue = 0;

function tipSelection(e) {
    if (bill.value == '' || peopleNumber.value == '') {
        label.style.opacity = 1;
        peopleNumber.style.borderColor = '#ec6e6e';
        return ''
    } else {
        label.style.opacity = 0;
        peopleNumber.style.borderColor = 'transparent';
        parsedTipValue = e / 100;
        let totalTip = billValue * parsedTipValue;
        let tipForEachPerson = (totalTip / peopleNumberValue);
        tipAmount.textContent = '$' + tipForEachPerson.toFixed(2);
        let totalAmount = (billValue / peopleNumberValue) + tipForEachPerson;
        total.textContent = '$' + totalAmount.toFixed(2);
    }
}

// Store Tip Selection Amount

function calculateTipValue() {
    selectTips.forEach((tip) => {
        tip.onclick = (e) => {
            tipSelection(+e.target.textContent.replace('%', ''));
        }
    })
}
calculateTipValue();

// Custom Tip Value
function customTipValue() {
    custom.oninput = (e) => {
        tipSelection(e.target.value)
    }
}
customTipValue();

// Reset Button
resetBtn.onclick = () => {
    bill.value = '';
    peopleNumber.value = '';
    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
}

// Usage Info
let usageInfo = document.querySelector('.usage-info');
let usageInfoClose = document.querySelector('.usage-info span');

window.onload = () => {
    usageInfo.style.left = '-0%';
}
usageInfoClose.onclick = () => {
    usageInfo.style.left = '-100%'
}