async function sendDiscordWebhookMessage(message) {
  const webhookURL = 'https://discord.com/api/webhooks/1141044220887572550/CmSKXcfKTw6JYOsdfmYjmFqEcyGpm6fwl4kc1hivcQ-PGo0HafikdalIqbqEPR7vJNHj';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: message }),
  };

  try {
    const response = await fetch(webhookURL, requestOptions);
  } catch (error) {
    console.error('Erreur :', error);
  }
}


function applyDiscount() {
  var codeInput = document.getElementById("code");
  var code = codeInput.value.trim().toUpperCase().replace(/\s/g, "");

  var reductionButton = document.getElementById("reductionButton");

  // Envoyer le message Discord
  sendDiscordWebhookMessage(`Le code ${code} a été utilisé par un utilisateur sur le site web`);

  if (code === "BAISE20") {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
      const article = box.querySelector('h4');

      const priceElement = article.querySelector('prix');

      let price = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ""));

      if (price * 0.8 < 5) {
        priceElement.textContent = "Indisponible";
      } else {
        price = Math.floor(price * 0.8 / 5) * 5;
        priceElement.textContent = price.toString();
      }
    });

    reductionButton.value = "Réduction de 20% appliquée";
    updateButtons();

  } else {
    reductionButton.value = "Code de réduction invalide";
  }

  reductionButton.style.pointerEvents = "none";

  var form = document.querySelector("form");
  form.onsubmit = function() { return false; };
  console.log("Code de réduction appliqué avec succès !")
}
