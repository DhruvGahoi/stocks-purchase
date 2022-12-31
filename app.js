var initialPrice = document.querySelector('#initial-price');
var stocksQty = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQty.value);
    var fp = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,fp);
}

function calculateProfitAndLoss(initial,quantity,current) {
    if (initial>current) {
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;

        showOutput('Oops!! The loss is' ,loss, ' and the percent is ',lossPercentage,'%');
    }
    else if (current>initial) {
        var profit  = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        
        showOutput('Whoopsieee!! The profit is ',profit, 'and the percent is ',profitPercentage, '%');
    }
    else {
        showOutput ('No pain No gain, No gain No pain');
    }
}
function showOutput(message) {
    outputBox.innerHTML = message;

}
 
