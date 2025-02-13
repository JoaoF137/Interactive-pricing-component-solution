
const views = document.getElementById('pageViewsNumber');
const price = document.getElementsByClassName('priceSelected');
console.log(price)
const slider = document.getElementById('slider');
const billing = document.getElementById('discountSlider');
let discount = false;
pricesViewsChart = {
    1: [8.00,"10K"],
    2: [12.00,"50K"],
    3: [16.00,"100K"],
    4: [24.00,"500K"],
    5: [36.00,"1M"]
}
let priceSelected;
let viewsNumber;
function calculatePrice () {
    priceSelected = pricesViewsChart[slider.value][0].toFixed(2); 
    if (discount) {
        priceSelected = (priceSelected - priceSelected/4).toFixed(2);
    }
}

function printValues () {
    viewsNumber = pricesViewsChart[slider.value][1];
    views.innerHTML = viewsNumber;
    price[0].innerHTML = `$${priceSelected}`
    price[1].innerHTML = `$${priceSelected}`;
}

calculatePrice();
printValues();

slider.oninput = function() {
    calculatePrice();
    printValues();
}

billing.onchange = function() {
    discount = !discount;
    calculatePrice();
    printValues();
}