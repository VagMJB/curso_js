//Função para calcular a idade//

function calcularIdade() {

    let nome = document.getElementById("nome").value;
    let ano = document.getElementById("nascimento").value;
    idade = new Date().getFullYear();
    let p = document.getElementById("texto");
    let msg = document.getElementById("resp");
    resultado = (idade - ano)



    if (resultado >= 18 && resultado != idade) {
        p.innerHTML = "Olá "+ nome + ", a sua idade é: "+ resultado;
        msg.innerHTML ="O " +nome + " é maior de idade"; 
        msg.style.color = "green";
    }
    

    else if ((nome == "" || nome == null) && (ano == "" || ano == null)){
        p.innerHTML = "Os campos devem ser preenchidos";
        p.style.color = "red";}

    else{
        p.innerHTML = "Olá "+ nome + ", a sua idade é: "+ resultado;
        msg.innerHTML = "O "+nome+ " é menor de idade";  
        msg.style.color = "red";
    }   
    
}