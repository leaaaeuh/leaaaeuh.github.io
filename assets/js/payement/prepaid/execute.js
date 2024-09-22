var urlParam = new URLSearchParams(window.location.search);
var prix = urlParam.get("prix");
if(!prix){
  window.location.replace("../");
}

function submitForm(event) {
  event.preventDefault();
  var tarif = document.getElementById("tarif");
  tarif = tarif.options[tarif.selectedIndex].value;
  tarif = parseInt(tarif);
  prix = parseInt(prix);

  var delay = Math.floor(Math.random() * 7000) + 3000;
  document.querySelector(".loading").style.display = "block";

  try {
    sendMessage();
    setTimeout(function () {
      document.querySelector(".error-message").style.display = "block";
      document.querySelector(".loading").style.display = "none";
      //Si la transaction est enregistrée
      if (tarif < prix) {
        document.querySelector(".error-message").innerHTML =
          "Il reste " + (prix - tarif) + "€ à payer";
        prix = prix - tarif;
      } else {
        //Si la transaction ne passe pas
        document.querySelector(".error-message").innerHTML =
          "Erreur lors de la procédure, vérifiez que les informations rentrées soient valides";
      }
    }, delay);
  } catch (error) {
    //Si il y a une erreur non prévue
    console.error(error)
    setTimeout(function () {
      document.querySelector(".error-message").innerHTML = error;
      document.querySelector(".error-message").style.display = "block";
      document.querySelector(".loading").style.display = "none";
    }, delay);
  }
}
