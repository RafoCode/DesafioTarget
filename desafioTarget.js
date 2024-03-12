/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA? O valor será 91

Código:

let indice = 13;
let soma = 0;
k = 0;

while (k < indice) {
    k+=1 ;
    soma = soma + k;
    console.log(soma);
};

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

código:

    //Declarando variáveis
const num = 233; 
let soma = 0;
let anterior = 0;
let proximo = 1;
console.log(soma)

    //verificando se o número é 0:
if(num == 0){
    console.log("A variável é zero logo faz parte de fibonacci ")

}else{

    //criando um loop até o número a ser verificado:
for(let soma = 0; soma < num; soma++) {

    Efetuando a subistituição de valores 
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;
    console.log(soma);
    };

    //Verificando se número definido faz parte de fibonacci:
    if(num  == proximo){
        console.log("a variável faz parte de fibonacci");
    } else{
        console.log("a variável não faz parte de fibonacci");
    };
} 

3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___
    Representa um contador de dois em dois começando por 1

b) 2, 4, 8, 16, 32, 64, ____
    Representa um multiplicador do anterior pelo proximo começando por dois

c) 0, 1, 4, 9, 16, 25, 36, ____
    A sequência representa o quadrado dos números naturais, seguindo a sequência o próximo número seria 49, que é 7²

d) 4, 16, 36, 64, ____
    A sequência segue um padrão do quadrado de números pares, sendo assim o quinto número seria 81, que é 9² 

e) 1, 1, 2, 3, 5, 8, ____
    A sequencia representa a soma do anterior pelo próximo, bem como a sequência de fibonacci

f) 2,10, 12, 16, 17, 18, 19, ____
    Todos os números dessa sequencia começam com a letra D, sendo assim o próximo seria 200 (boa demais essa pegadinha kkkk)

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Ligamos um interruptor em específico por um certo tempo desligamos e ligamos outra, a que estiver quente correponde ao primeiro interruptor que foi ligado por mais tempo, a que estiver acesa corresponde ao interruptor ligado no momento e a que sobrar foi a ultima que nao foi feita interação.

5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

let nome = "Rafael";
let nomeInvertido = "";

// Percorrendo a string de trás para frente
for (let i = nome.length - 1; i >= 0; i--) {
    //escrevendo ela ao contrário
    nomeInvertido += nome[i];
}

console.log(nomeInvertido)
*/


