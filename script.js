
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
    

    // Classificação imc//

    let classificação="";

    if (valorIMC<18.5){
        classificação="abaixo do peso.";
    }else if (valorIMC <25){
        classificação="com peso ideal.";
    }else if (valorIMC <30){
        classificação="esta levemente acima do peso.";
    }else if( valorIMC<35){
        classificação="com obesidade grau I";
    }else if (valorIMC<40){classificação="com obesidade grau II";
    }else{
        classificação="obesidade grau III";
    }
        
    

    resultado.textContent =`${nome} seu IMC é ${valorIMC} e voçê esta ${classificação}`; 


    

}else{
    resultado.textContent ="Preencha todos os campos !!!";
}


}

calcular.addEventListener("click",imc);