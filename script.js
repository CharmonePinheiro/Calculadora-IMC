
const calcular =document.getElementById("calcular");



function imc(){
const nome =document.getElementById("nome").value;
const altura =document.getElementById("altura").value;
const peso =document.getElementById("peso").value;
const resultado =document.getElementById("resultado");

// Validação se os campos estão preenchidos//

if( nome !=="" && altura !== "" && peso !== "" ){
   
    // Calculo do imc //
    
}else{
    resultado.textContent ="Preencha todos os campos !!!";
}


}

calcular.addEventListener("click",imc);