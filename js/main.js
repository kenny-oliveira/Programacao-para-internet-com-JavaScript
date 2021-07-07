function clicou(){
    document.getElementById("agradecimento").style.display = "block";
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o Mouse aqui";
}

function load(){
    console.log("pagina carregada");
}

function Change(elemento){
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1+n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("qual sua idade");
console.log(validaIdade(idade));

console.log(soma(5,10));

var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());


var count;
for (count=0; count <= 5; count++) {
    alert(count);
}

var count = 0;

while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
var idade = prompt("Insira sua idade")
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

var frutas = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}];

console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça",cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maça","pera","laranja"];
lista.push("uva");

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

var nome = "Kenny Oliveira";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome+"Tem "+idade+" anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
*/