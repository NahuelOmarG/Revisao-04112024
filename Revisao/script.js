function pesca(){
    let pesoPermitido = Number(prompt("Digite o peso permitido!")); //Entrada de dados
    let pesoPescado = Number(prompt("Digite a quantidade pescada!")); //Entrada de dados
    if(pesoPermitido < pesoPescado){ // Decisao
       let excesso = pesoPescado - pesoPermitido; // processo
       let multa = excesso*4;
       alert("Excesso: "+excesso+"Kg\nMulta: R$"+multa);
    }
    else {
        alert("Voce nao excedeu o peso permitido, nao havera multa!")
    }
}
function idade(){
    let nome = prompt("Digite o nome!");
    alert("Bem-vindo/a: "+nome);
    let ano = Number(prompt("Digite o ano de nascimento!"))
    let idade = 2024 - ano //processo
    if (idade > 18 ){
        alert (nome+ ", voce tem: "+idade+ "portanto é maior de idade!")
    }
    else if (idade < 18) {
        alert(nome+ ", voce tem: "+idade+ "portanto nao e maior de idade!")
    }
    else {
        alert(nome+ ", esse e o ano que voce completa 18 anos de idade!")
    }
}
/*function contagem(){
    let numero = prompt("Digite o limite da contagem") // 
    let i = 0;
    //enquanto no alcanzamos o numero que definimos de limite avanze mas 3 numeros
    while(i < numero) {   
        i += 3;  // [+=] igual ele mesmo + o que vem despois.
        alert(i);
}
}

function contagem(){
let numero = prompt("Digite o limite da contagem")
let i = 0; //3
let tabelinha = ""; // cadeia de caracteres ... 
while(i < numero){
    i += 3;
    tabelinha += i+"\n";
} 
alert(tabelinha);
} 

function contagem(){
let numero = prompt("Digite o limite da contagem");
let tabelinha = "";
for {let }
}*/
function arrays(){
    let caixaDeBombons = [];
    let quantidade = prompt("Quantos bombons deseja inserir na caixa?");
    for(let i = 0; i<quantidade; i++){
    let nomeBombom = prompt("Digite o nome de bombom a ser inserido");
    caixaDeBombons.push(nomeBombom);
}
alert (caixaDeBombons);
let exclusao = prompt("Digite o nome do bombom que voce quer excluir!");
let pos = caixaDeBombons.indexOf(exclusao); // indexOf , excluie o item.
if (pos == -1){
    alert("Esse bombom ja foi comido!");
}
else{
    caixaDeBombons.splice(pos, 1); //Posicion (X), Quantidade (X);
}
alert (caixaDeBombons);
let tamanhoAtual = caixaDeBombons.length; //total
alert ("Agora a caixa de bombons possui "+ tamanhoAtual+ " bombons!")
}

