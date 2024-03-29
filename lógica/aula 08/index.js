// Podemos ter duas interpretações do que são funções. 
// A primeira de que uma função é um trecho de código em 
// que damos um nome e que é executado a cada vez que é 
// chamado. Exemplo:

// Definindo a função
function geradorNumerico(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

// Chamando a função
geradorNumerico();

// Criamos um função usando o function e demos o nome geradorNumerico. 
// É uma função que apenas imprime no console os número de 0 a 100. 
// Cada vez que é chamada a função, o seu código é executado.
// Para tornar a função mais reutilizável, podemos parametrizá-la. 
// Para isso, adicionamos os parâmetros na declaração.

// Definindo a função
function geradorNumerico(comeco, fim){
    for(let i = comeco; i <= fim; i++){
        console.log(i);
    }
}

// Chamando a função
geradorNumerico(10,20);

// Entre os parêntesis adicionamos a declaração de duas, 
// variáveis comeco e fim. De forma que a função imprime os 
// números entre esses dois valores.

// A segunda interpretação de função é a matemática, 
// como algo que recebe valores e devolve outro.

function soma(a,b){
    return a+b;
}

const resultado = soma(2,3);

// Declaramos dois parâmetros, a e b, que ao ser passados a 
// função soma, esta retorna a soma dos dois. Esse valor fica 
// disponível para ser salvo em outra variável ou para ser passado 
// como valor em outra função. 

// Formas de Declarar

// Além da forma tradicional de declarar, há ainda duas formas de utilizar funções, 
// que é usando do artifício de que em JavaScript funções são valores.

// Usando function
function soma1(a,b) { return a+b; }
// Atribuindo uma função anônima em constantes
const soma2 = function(a,b){ return a+b; };
// Atribuindo uma função de "flecha" em constantes
const soma3 = (a,b) => a+b;

// A primeira função foi declarada como a forma tradicional apresentada antes. 
// No segundo caso foi usado uma função anônima, isto é, sem nome. 
// Note que seguido de function não há declaração de um nome para a função. 
// O que define o seu nome é a variável. No terceiro caso é também uma função 
// anônima porém é usada a chamada função de flecha. Onde é declarado os parâmetros 
// de entrada em parêntesis e a sua definição seguido da flecha =>.

// Exemplos de funções de flecha:

const hello1 = () => "Hello World!";
const hello2 = (name) => "Hello " + name;
const hello3 = (name) => {return "Hello " + name;};

// Note que não é possível fazer qualquer restrição de tipo de entrada 
// como parâmetro de uma função. Caso seja passado algo que não era esperado, 
// possivelmente quebrará o código. Fique atento.