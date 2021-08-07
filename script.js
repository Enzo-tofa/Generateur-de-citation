function generercitation(nombre) {
  var motsDebut, motsMilieu, motsFin;
  var randomDebut, randomMilieu, randomFin;
  if (nombre === 1) {
    motsDebut = ["la vie", "le monde", "le bonheur","l'amour","la passion"];
    motsMilieu = [" est un mystère qu'il faut vivre", " est un ami qui ne trahit jamais", " c'est comme une bicyclette"," est intense"," ne se tarit jamais"];
    motsFin = [" car nous ne penserons jamais de la même façon", " il faut avancer pour ne pas perdre l'équilibre", " pour le connaître, il faut les aimer", " mais c'est de courte durée"," car c'est ce qui nous anime"];
  }
  else if (nombre === 2) {
    motsDebut = ["vu", "quelle que soit", "avec", "par rapport à ", "en sachant"];
    motsMilieu = [" la situation actuelle", " la crise de cette fin de siècle", " la conjoncture d'aujourd'hui", " la chute des cryptomonnaies", " la remontée du cumrocket"];
    motsFin = [" il faut étudier toutes les solutions", " il serait bon d'imaginer le meilleur", " il faut voir la vie en rose", " il faut racheter à la baisse", " il faut rester confiant"];
  }

  else {
    console.log("erreur, écrire 1 ou 2");
  }
  randomDebut = motsDebut[Math.floor(Math.random() * motsDebut.length)];
  randomMilieu = motsMilieu[Math.floor(Math.random() * motsMilieu.length)];
  randomFin = motsFin[Math.floor(Math.random() * motsFin.length)];
  const resultat = randomDebut + randomMilieu + randomFin;
  console.log("résultat : " + resultat);
  alert(resultat)
}


function main() {
  continuer = true;

  while (continuer) {

    const choix = Number(prompt("Taper 1 pour le générateur philosophique ou taper 2 pour le générateur situationelle"));
    const nombre = Number(prompt("Maintenant, combien de citations souaitez-vous générer ?\n"));

    for (i = 0; i < nombre && i<5; i++) {
      generercitation(choix);
    }
    continuer = confirm("Veut tu continuer?")
  }
}
