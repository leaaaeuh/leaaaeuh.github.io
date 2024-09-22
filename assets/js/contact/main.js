async function sendMessage() {
    const email = document.querySelector('input[name="email"]').value;
    const message = { content: `Nouvelle inscription avec l'email : ${email}` };
    const submitButton = document.querySelector('#submitButton');
  
    submitButton.value = 'Envoi en cours...';
    submitButton.disabled = true;
  
    // ajout d'un délai aléatoire entre 3 et 5 secondes
    const delay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
    setTimeout(async () => {
      const response = await fetch('https://discord.com/api/webhooks/1141043698289885214/p-1o7jha723GWC_a7lR3XvLC2qygx0oQBKNg8QljB3sK83ui58TnEANSPD_-GRZLXfe6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });
  
      if (response.ok) {
        submitButton.value = 'Envoyé !';
      } else {
        alert('Erreur lors de l\'envoi du message.');
        submitButton.value = 'Contacter';
        submitButton.disabled = false;
      }
    }, delay);
  }
  