
document.getElementById("submit-button").addEventListener("click", function(){
   const userEmail = document.getElementById("text-email");
   const email = userEmail.value;
   const userPass = document.getElementById("text-pass");
   const pass = userPass.value;
   if(email === "mdsranik2gmail.com" && pass === "anikAnik")
   window.location.href = "deposit.html";

   else{
   alert ('Dukte Demu Na Vag')
   }
})

