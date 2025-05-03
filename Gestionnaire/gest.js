let total=0;
let nom=document.getElementById("nom");
let date= document.getElementById("dt");
let liste=[];
document.getElementById("btn").onclick=function() {
    const montant= document.getElementById("ar").value;
    const valeur= parseFloat(montant);
    if(!isNaN(valeur) && valeur > 0) {
        liste.push(valeur);
        total+=valeur;
        document.getElementById("liste-depense").innerHTML+=`
        <li>${nom.value}: ${valeur.toString()}Ar le ${date.value}</li>`;

        document.getElementById("total").textContent=total.toFixed(2);

        document.getElementById("ar").value="";
    }
    else {
        alert("Veuillez entrer un montant valide.");
    }
    nom.value="";
    montant.value="";
    date.value="";
};