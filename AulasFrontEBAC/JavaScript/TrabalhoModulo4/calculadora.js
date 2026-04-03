
function calcularIMC(){
        //Entrada de dados
        let altura = document.getElementById("altura").value;
        let peso = document.getElementById("peso").value;

        //Processamento

        let imc =  peso / (altura * altura);



        //Saída

        document.getElementById("resultado").textContent = imc;
    

}


