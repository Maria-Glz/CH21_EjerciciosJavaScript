//OPCION 1
// let numeros = (-1, 3, 4, 2, 6);
// let ulNumeros = document.getElementById("ulNumeros");
// Math.max(numeros)
// ulNumeros.innerHTML+=`<li class="list-group-item"> ${numeros}</li>`;
   
//OPCION 2
// const arr = [2,7,4,8,23,4];
// const max = Math.max(...arr);
// ulNumeros.innerHTML+=`<li class="list-group-item"> ${max}</li>`;

//OPCION 3
// const arr = [1,2,7,5,6,9,11,23,67,87,3];
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// ulNumeros.innerHTML+=`<li class="list-group-item"> ${max}</li>`;

//EJERCICIO 1
//OPCION 4
function arrayy(nummayor){
    return Math.max.apply(null, nummayor);
}

let btnenter = document.getElementById("btnenter");
     btnenter.addEventListener("click", function(event){
     event.preventDefault();

     let numero1 = parseInt(document.getElementById("numer").value);
     let numero2 = parseInt(document.getElementById("numer2").value);
     let numero3 = parseInt(document.getElementById("numer3").value);
     let numero4 =  parseInt(document.getElementById("numer4").value);
     let numero5 = parseInt(document.getElementById("numer5").value)

     nummayor = ([numero1, numero2,numero3,numero4,numero5]);
     
     let ulNumeroMayor = document.getElementById("ulNumeroMayor");
     ulNumeroMayor.innerHTML =`<li class="list-group-item"> ${arrayy(nummayor)}</li>`;
    
 });
 
 //EJERCICIO 2

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
    let numero4 = parseInt(document.getElementById("numer4").value);
    let numero5 = parseInt(document.getElementById("numer5").value);

    nummenor = ([numero1,numero2,numero3,numero4,numero5]);

    let ulNumeroMenor = document.getElementById("ulNumeroMenor");
    ulNumeroMenor.innerHTML = `<li class="list-group-item"> ${array2(nummenor)}</li>`;

   });

//EJERCICIO3

function array3(duplicados)
{
  const tempArray = [...repeticion].sort(); //ordena el array
    for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicados.push(tempArray[i]);
    }
  }
  return(duplicados);
}

let btnenter3 = document.getElementById("btnenter3");
   btnenter3.addEventListener("click",function(event){
   event.preventDefault();

   let numero1 = parseInt(document.getElementById("numer").value);
   let numero2 = parseInt(document.getElementById("numer2").value);
   let numero3 = parseInt(document.getElementById("numer3").value);
   let numero4 = parseInt(document.getElementById("numer4").value);
   let numero5 = parseInt(document.getElementById("numer5").value);

   repeticion = ([numero1,numero2,numero3,numero4,numero5]);
   let duplicados = ([]);
   
  
   let ulNumeroRepetido = document.getElementById("ulNumeroRepetido");
   ulNumeroRepetido.innerHTML = `<li class="list-group-item">$ ${array3(duplicados)}</li>`;

  });
   

//Ejercicio 4
function array4(desordenado)
 {
     let i = desordenado.length, randomind;
     while (i !=0)
     {
      randomind = Math.floor(Math.random()*i);
      i--;
      [desordenado[i], desordenado[randomind]] = [desordenado[randomind], desordenado[i]];

     }

    return desordenado;
 }

 let btnenter4 = document.getElementById("btnenter4");
    btnenter4.addEventListener("click",function(event){
    event.preventDefault();

    let numero1 = parseInt(document.getElementById("numer").value);
    let numero2 = parseInt(document.getElementById("numer2").value);
    let numero3 = parseInt(document.getElementById("numer3").value);
    let numero4 = parseInt(document.getElementById("numer4").value);
    let numero5 = parseInt(document.getElementById("numer5").value);

    desordenado = ([numero1,numero2,numero3,numero4,numero5]);

    let ulNumeroDesordenado = document.getElementById("ulNumeroDesordenado");
    ulNumeroDesordenado.innerHTML = `<li class="list-group-item"> ${array4(desordenado)}</li>`;

   });


