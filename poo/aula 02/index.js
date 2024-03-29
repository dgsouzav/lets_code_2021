// Classe e Construtor


// Classes são a forma de definir as entidades no nosso sistema. Elas são estruturas capazes de dar origem a infinitos objetos de mesmo tipo.

// Para criar uma classe usamos o comando class no JavaScript.

class <nomedaclasse> {

}
// O aspecto mais relevante de uma classe é o método construtor, onde indicaremos quais são os atributos que a classe possui e quais são os valores necessários que precisam ser definidos no momento da criação do objeto.

// A classe é semelhante a uma "planta baixa" que determina a estrutura e os comportamentos dos objetos criados por ela. Uma classe Pessoa pode indicar que todo objeto tenha um nome, mas não pode indicar qual é esse nome, pois ele será diferente para cada objeto Pessoa criado por ela.

// Para criar a classe Pessoa, com nome e idade, as informações necessárias devem ser passadas por parâmetros no construtor e atribuída em atributos precedidos por this. :

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
// Para criar um objeto do tipo Pessoa faremos:

const pessoa1 = new Pessoa('Carlos', 20);
console.log(pessoa1); 
//Veremos no console:
//Pessoa { nome: 'Carlos', idade: 20 }


// Sempre que precisar de uma nova Pessoa, basta criar outro objeto:

const pessoa2 = new Pessoa('Marta', 26);
console.log(pessoa2); 
//Veremos no console:
//Pessoa { nome: 'Marta', idade: 26 }


// É muito recomendado sempre iniciar nomes de classes com letra maiúscula. Além de manter o código mais organizado, facilita a leitura e entendimento uma vez que cria uma distinção clara entre as classes e variáveis