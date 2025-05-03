const buttons= document.querySelectorAll("button");
const supprimer= document.querySelector(".supprimer");
const affichage= document.getElementById("Affichage");
const egal= document.getElementById("egal");
let expression=""
buttons.forEach(function(button) {
    button.addEventListener('click',function() {
        const valeur= button.getAttribute("value");
        if(valeur) {
            expression+=valeur
            affichage.textContent=expression;
        }
    })
})
egal.addEventListener('click',function() {
   try {
        console.log("expression évalué:",expression);
        const resultat= eval(expression);
        affichage.textContent=resultat;
        expression=resultat.toString();
   }
   catch (error) {
        affichage.textContent="Erreur";
        expression="";
   }
})
suprimer.addEventListener('click',function() {
    expression="";
    affichage.textContent=0;
})