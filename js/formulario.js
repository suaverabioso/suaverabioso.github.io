


          function GuardarDatos () {

             var nombre=document.getElementById ("nombre").value;
             var mail=document.getElementById ("mail").value;

if (nombre=="") {

    alert ("Por favor escribí tu nombre ૮ ˶ᵔ ᵕ ᵔ˶ ა")
    document.getElementById("nombre").focus();
} else {
    if (mail==""){
     alert ("Por favor escribí tu mail ૮ ˶ᵔ ᵕ ᵔ˶ ა")
         document.getElementById("mail").focus();
    } else {
 console.log(nombre +" "+ mail);
 document.getElementById("nombre").value+"";
  document.getElementById("mail").value+"";
 
}         
          }
      }

