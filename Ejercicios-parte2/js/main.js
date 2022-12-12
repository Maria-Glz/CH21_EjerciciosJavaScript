//Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor

function array1(nummayor){
    
    return Math.max.apply(null, nummayor);
} 


let btnenter = document.getElementById("btnenter");
     btnenter.addEventListener("click", function(event){
     event.preventDefault();

     let numero1 = parseInt(document.getElementById("numer").value);
     let numero2 = parseInt(document.getElementById("numer2").value);
     let numero3 = parseInt(document.getElementById("numer3").value);
    
     let nummayor = ([numero1, numero2,numero3]);
     let alertResultado = document.getElementById("alertResultado");
     
     if(numero1>=1 && numero1<=100 && numero2>=1 && numero2<=100 && numero3>=1 && numero3<=100)
     {
        alertResultado.innerHTML=array1(nummayor);
     }else
     {
        alertResultado.innerHTML = "Ingresa un numero del 1 al 100";
     }
     
     
    
 });
 
 //Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números

 function array2(nummenor)
 {
    return (Math.min.apply(null,nummenor));
 }

 let btnenter2 = document.getElementById("btnenter2");
    btnenter2.addEventListener("click",function(event){
    event.preventDefault();

    let numero1 = parseInt(document.getElementById("numer").value);
    let numero2 = parseInt(document.getElementById("numer2").value);
    let numero3 = parseInt(document.getElementById("numer3").value);

    nummenor = ([numero1,numero2,numero3]);

    let alertResultado = document.getElementById("alertResultado");
    if(numero1>=1 && numero1<=100 && numero2>=1 && numero2<=100 && numero3>=1 && numero3<=100)
     {
        alertResultado.innerHTML = array2(nummenor);
     }else
     {
        alertResultado.innerHTML = "Ingresa un numero del 1 al 100";
     }

   });

//Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
//No le entendi xd

//Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

function adivina(multiploo)
{
   if(multiploo % 3==0)
   {
     return("Es multiplo");
   }
   else
   {
    return("No es multiplo");
   }
}
let btnenter3 = document.getElementById("btnenter3");
    btnenter3.addEventListener("click",function(event){
    event.preventDefault();

    let inputmultiplo = parseInt(document.getElementById("inputmultiplo").value);
    multiploo = (inputmultiplo);
    let alertMultiplo = document.getElementById("alertMultiplo");

    if(inputmultiplo>=100 && inputmultiplo<200)
    {
         alertMultiplo.innerHTML = adivina(multiploo);
    }else
    {
        alertMultiplo.innerHTML = "Ingresa un numero del 100 al 200";
    }
    
   });

//Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let btnenter6 = document.getElementById("btnenter6");
    btnenter6.addEventListener("click",function(event){
    event.preventDefault();

    let inputSuma = parseInt(document.getElementById("inputSuma").value);
    let inputSuma2 = parseInt(document.getElementById("inputSuma2").value);
    let inputSuma3 = parseInt(document.getElementById("inputSuma3").value);
   
    let alertSuma = document.getElementById("alertSuma");
    
   
    if(inputSuma == inputSuma2 + inputSuma3)
    {
       alertSuma.innerHTML = (" El " + inputSuma + " es suma del "+ inputSuma2 + " y " + inputSuma3);
    }
    else if (inputSuma2 == inputSuma + inputSuma3)
    {
      alertSuma.innerHTML = (" El " + inputSuma2 + " es suma del "+ inputSuma + " y " + inputSuma3);
    }
    else if (inputSuma3 == inputSuma + inputSuma2)
    {
      alertSuma.innerHTML = (" El " + inputSuma3 + " es suma del "+ inputSuma + " y " + inputSuma2);
    }
    else
    {
         alertSuma.innerHTML = ("Ninguno es suma");
    }
    
   });


//Elabora un algoritmo para leer un número y determinar si es par o impar
   
function pol(par)
{
   if(par % 2==0)
   {
     return("Es par");
   }
   else
   {
    return("Es impar");
   }
}
let btnenter4 = document.getElementById("btnenter4");
    btnenter4.addEventListener("click",function(event){
    event.preventDefault();

    let inputPar = parseInt(document.getElementById("inputPar").value);
    par = (inputPar);

    let alertPar = document.getElementById("alertPar");
    alertPar.innerHTML = pol(par);
    
    
   });