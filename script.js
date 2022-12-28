
const calcular =document.getElementById("calcular");



function imc(){
const nome =document.getElementById("nome").value;
const altura =document.getElementById("altura").value;
const peso =document.getElementById("peso").value;
const resultado =document.getElementById("resultado");

// Validação se os campos estão preenchidos//

if( nome !=="" && altura !== "" && peso !== "" ){
   
    // Calculo do imc  É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros) //
          


    const valorIMC=(peso/(altura*altura)).toFixed(1);
    resultado.textContent=valorIMC;
    
}else{
    resultado.textContent ="Preencha todos os campos !!!";
}


}

calcular.addEventListener("click",imc);