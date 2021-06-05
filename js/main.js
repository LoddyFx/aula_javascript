function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}



function redirecionar(){
    window.open("https://www.youtube.com");
    //window.location.href = "https://www.youtube.com";
}



function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Vlw ai fera";
    elemento.innerHTML = "Vlw ai fera";
    //alert("trocar texto");
}



function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}



function load() {
    alert("pag carregada");
}



function funcaoChange(elemento){
    console.log(elemento.value);
}



/*
function soma (n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaidade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
validaidade(idade);
console.log(validaidade(idade));
*/


//alert(soma(5,10));


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/



/*
var count;
for(count = 0; count <= 5; count++){
    alert(count)
}
*/



/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/



/*
var idade = prompt("Qual sua idade? ")
if (idade >= 18) {
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
*/



/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/



/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor)
*/



//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = ("Adriel Felipe Saitone");
//var n1 = 3;
//var n2 =5;
//var frase = ("dia");
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//conso000000le.log(frase.toLowerCase());
//alert(frase.replace("dia", "noite"));