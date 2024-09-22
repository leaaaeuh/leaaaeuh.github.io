const currency = "€"

var list = document.querySelectorAll('.currency');
list.forEach(function (element) {
    element.innerHTML = currency;
});

var select = document.querySelectorAll('#tarif option');
select.forEach(function (element) {
    element.innerHTML = element.innerHTML + currency;
});
