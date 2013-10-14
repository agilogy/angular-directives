angular.module('agilogyFilters', [])

.filter('monetaryAmount', function ($filter) {

    return function (price, invert) {
        if (!invert) {
            invert = 1;
        }
        if (price) {
            var amount = price.amount;
            var value = (invert * amount).toFixed(2).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return (price.currency === 'EUR') ? value + "€" : value + price.currency;
        }
    };
});