document.getElementById("btn").onclick=function() {
    const tache= document.getElementById("tch").value;
    const liste= document.createElement("p");
    liste.innerText=`Votre tache est ${tache}. `;
    document.body.appendChild(liste);


    const delet= document.createElement("button");
    delet.textContent="supprimer";
    delet.onclick= () => liste.remove();
    liste.appendChild(delet);
    tch.value="";
}   