function updateButtons() {
  var btn = document.querySelectorAll(".btn-buy");

  btn.forEach(function (element) {
    if (element.closest(".subscription")) {
      element.innerHTML = "Souscrire";
    } else {
      element.innerHTML = "Acheter ";
    }

    var prix = element.closest(".box").querySelector("prix").textContent;
    var presta = element.closest(".container").querySelector("h2").textContent;

    element.href = "./prepaid-cards?prix=" + prix + "&presta=" + encodeURIComponent(presta);
  });
}

updateButtons();