//vetores 
let vetor = [1,2,3,4,5,6,7,8,9,10];

// vetor vazio
let vetor = [];
vetor[0] = 'teste';
vetor[1] = 'teste2';

// vetor índice
vetor['indice1'] = 'teste';
vetor['indice2'] = 'teste2';

// vetor heterogêneo
let vetor = [1,2,3,'a','b','c',true,false];
let primeiro_elemento = vetor[0];
let quinto_elemento = vetor[4];

// percorrer o vetor
let vetor = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}

//  "" pt2
const vetor = [10,20,30,40,50];
for(let valor of vetor){
    console.log(valor);
}

// "" pt3
const vetor = [10,20,30,40,50];

for(let indice in vetor){
    console.log(indice, vetor[indice]);
}

// matrizes
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let linha of matriz){
    for (let dado of linha){
        console.log(dado);
    }
}

// Para adicionar um elemento ao final do vetor, faça:

let vetor = [10,20,30,40,50];
let novo_elemento = 60;

vetor.push(novo_elemento);

// Para remover do final:

let vetor = [10,20,30,40,50];
vetor.pop();

// Para adicionar ao começo:

let vetor = [10,20,30,40,50];
let novo_elemento = 0;

vetor.unshift(novo_elemento);

// Para remover do começo:

let vetor = [10,20,30,40,50];
vetor.shift();
