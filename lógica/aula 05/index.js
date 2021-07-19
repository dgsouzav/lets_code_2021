// condicional - if & else
let condicao = x > 0;

if(condicao){
    console.log("X é maior do que zero");
}

else{
    console.log("X é menor ou igual a que zero");
}

// else if
if(x > 0){
    console.log("X é positivo");
}

else if(x == 0){
    console.log("X é zero");
}

else{
    console.log("X é negativo");
}

// operador tenário
let paridade = x % 2 === 0 ? 'par' : 'impar';

// switch - calendário
let hoje = new Date().getDay(); 
let dia;

switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
     dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}

// switch - sinal 
let sinal = 'azul';
switch(sinal){
    case 'verde' : 
        console.log('pode passar');
        break;
    case 'amarelo' :
        console.log('prestes a fechar, cuidado...');
        break;
    case 'vermelho':
        console.log('fechado, não passe');
        break;
    default:
        console.log('esse não é um valor válido');
        break;
}

// Truthy & False 
// Além do true e do false, o JavaScript aceita outras informações que não são booleanos e os interpreta como se fosse 
//true ou false. Esses casos chamamos de truthy e falsy. Por exemplo, o JavaScript interpreta os seguintes valores como falso:

//0
//'' ou ""
//null
//undefined
//NaN
//Todos os demais são interpretados como verdadeiro. Alguns exemplos de truthy:

//[]
//{}
//function(){}
//Uma utilidade dessa característica é verificar se uma variável está definida antes de usá-la. Assim evitando erro.