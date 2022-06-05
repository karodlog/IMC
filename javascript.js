const prenom = document.querySelector("#prenom");
let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let affichage = document.querySelector(".imc span");
const boxAffichage = document.querySelectorAll(".curseur .imc");
const titreResultats = document.querySelector("#titreResultats");
const commentaires = document.querySelector("#commentaires");
console.log(boxAffichage);

let calculez = document.getElementById("btn");
calculez.addEventListener("click", () => {
  let calculimc = parseInt(
    poids.value / ((taille.value / 100) * (taille.value / 100))
  );
  affichage.innerHTML = calculimc;
  console.log(calculimc);
  const affcalcul = "imc" + calculimc;

  console.log(affcalcul);

  let curs = document.querySelectorAll(".curseur");
  for (i = 0; i < curs.length; i++) {
    if (affcalcul === curs[i].classList[1]) {
      curs[i].style.visibility = "visible";
      curs[i].classList.add("bouge");
      if (calculimc >= 18 && calculimc <= 25) {
        boxAffichage[i].classList.add("colorGreen");
        titreResultats.textContent = `Bonjour ${prenom.value}, votre IMC corporelle est de type NORMAL (${calculimc}).`;
        commentaires.innerHTML = `Si votre IMC se situe entre 18,5 et 25, vous êtes de corpulence normale, c’est-à-dire que vous n’êtes ni en surpoids, ni maigre. Continuez à manger équilibré, à faire de l’exercice régulièrement : ce mode de vie sain est garant d’une bonne santé, sans oublier la notion de plaisir bien sûr !`;
      } else if (calculimc > 25 && calculimc <= 30) {
        boxAffichage[i].classList.add("colorOrange");
        titreResultats.textContent = `Bonjour ${prenom.value}, votre IMC corporelle est de type SURPOIDS (${calculimc}).`;
        commentaires.innerHTML = `Si votre IMC est supérieur à 25, vous êtes en situation de surpoids. Votre médecin vous recommandera certainement de perdre du poids pour revenir à un poids "normal".
        Il est important aussi de pratiquer régulièrement une activité physique, que ce soit pour perdre ou maintenir son poids, mais aussi pour modeler sa silhouette.`;
      } else {
        boxAffichage[i].classList.add("colorRed");
        titreResultats.textContent = `Bonjour ${prenom.value}, votre IMC corporelle est de type OBÉSITÉ (${calculimc}).`;
        commentaires.innerHTML = `Dans le cas d’une obésité modérée (IMC supérieur à 30), sévère (IMC supérieur à 35) ou morbide (IMC supérieur à 40), la prise en charge peut être effectuée par une équipe pluridisciplinaire dans des centres spécialisés de l’obésité (CSO). En cas d’échec des mesures hygiéno-diététiques et du parcours de soins, on peut envisager une opération de chirurgie bariatrique qui permet d’induire une perte de poids importante et de retrouver un poids plus sain.`;
      }
    }
  }
});
