document.getElementById("btn").onclick=function(e) {
    e.preventDefault();
   let nom= document.getElementById("nom").value;
   let email= document.getElementById("mail").value;
   let message= document.getElementById("msg").value;
   let formulaire= document.createElement("p");
   formulaire.innerText=`Nous avons reçu votre formulaire, votre nom est ${nom} 
   email: ${email} et votre message est ${message}.`;
   document.body.appendChild(formulaire);
};