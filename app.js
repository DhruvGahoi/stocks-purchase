var initialPrice = document.querySelector('#initial-price');
var stocksQty = document.querySelector('#stocks-quantity');
var finalPrice = document.querySelector('#final-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function calculateProfitAndLoss(initial,quantity,current) {
    if (initial>current) {
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;

        console.log('Oops!! The loss is', loss ,'and the percent is ',lossPercentage,'%');
    }
    else if (current>initial) {
        var profit  = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        
        console.log('Whoopsieee!! The profit is ',profit, 'and the percent is ',profitPercentage, '%');
    }
    else {
        console.log ('No pain No gain, No gain No pain');
    }
}
 
calculateProfitAndLoss(10,10,10);