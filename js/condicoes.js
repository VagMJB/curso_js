//CONDIÇÕES IF e ELSE

/*var interruptor = "off";

if (interruptor == "on") {
    alert("Olá, a lâmpada está ligada!")
} else{
    alert("lá, a lâmpada está desligada!")
};



var hora = new Date().getHours();

if (hora < 12) {
    alert("Olá, bom dia!")
} 
else if (hora < 18) {
    alert("Olá, boa tarde!")
}
else{
    alert("Olá, boa noite!")
};
*/

function enviar() {
    let nome = document.getElementById("nome").value;
    let p =  document.getElementById("texto");

    if (nome == "" || nome == null) {
        
        p.innerHTML= "O campo não pode ser vázio";
        p.style.color= "red";
    } else{
       
        p.innerHTML = "Olá, " +nome + ", os seus dados foram enviados com sucesso!";
        p.style.color = "green";
    }
}