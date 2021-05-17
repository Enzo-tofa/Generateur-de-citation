function genererCitation(nombre){
    var motsDebut, motsMilieu, motsFin;
    var randomDebut, randomMilieu, randomFin;
    if(nombre===1){
      motsDebut = ["la vie", "le monde", "le bonheur"];
      motsMilieu = [" est un mystère qu'il faut vivre", " est un ami qui ne trahit jamais", " c'est comme une bicyclette"];
      motsFin = [" car nous ne penserons jamais de la même façon"," il faut avancer pour ne pas perdre l'équilibre", " pour les connaître, il faut les aimer"];
    }
      else if(nombre===2){
      motsDebut = ["vu", "quelle que soit", "avec"];
      motsMilieu = [" la situation actuelle", " la crise de cette fin de siècle", " la conjoncture d'aujourd'hui"];
      motsFin = [" il faut étudier toutes les solutions"," il serait bon d'imaginer le meilleur", " il faut voir la vie en rose"];
      }

     else{ console.log("erreur, écrire 1 ou 2");
    }   
    randomDebut = motsDebut[Math.floor(Math.random() * motsDebut.length)];
    randomMilieu = motsMilieu[Math.floor(Math.random() * motsMilieu.length)];
    randomFin = motsFin[Math.floor(Math.random() * motsFin.length)];
    var resultat = randomDebut + randomMilieu + randomFin;
    console.log("résultat : "+resultat);
    prompt(resultat)
  }
  function RedirectionJavascript(){
    document.location.href="http://google.com"; 
  }

  function main(){
    continuer=true;

    while(continuer){

    var choix = Number(prompt("Taper 1 pour le générateur philosophique ou taper 2 pour le générateur situationelle"));
    var nombre = Number(prompt("Maintenant, combien de citations souaitez-vous générer ?\n"));

    for(i = 0; i < nombre; i++){
      genererCitation(choix);
    }
    continuer= confirm("Veut tu continuer?")
    }
    RedirectionJavascript()
    }
