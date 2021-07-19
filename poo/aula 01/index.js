// Criando Objetos

// Normalmente em uma linguagem orientada a objetos, é necessário criar uma classe antes de poder criar objetos. No entanto, como JavaScript é uma linguagem dinâmica e a orientação a objetos é suportada, mas não é o paradigma principal de programação nessa linguagem, é possível criar objetos sem criar classes.

// Isso é útil para quando vamos fazer um único objeto, usado em um determinado lugar, mas não precisaremos reaproveitá-lo em outras partes do sistema.

// Para criar objetos sem classes, o JavaScript se vale de uma notação de criação de objetos, depois veremos que é quase idêntico ao JSON, que é uma representação textual do objeto.

// Essa notação é extremamente simples e concisa. Um objeto é detonado pela abertura de chaves, os atributos são pares chave-valor separados por dois pontos (:) e os métodos são funções.

// Por exemplo:

const pessoa1 = { nome : "Carlos", idade : 20 };

const quadrado = { 
    base : 10, 
    altura : 10, 
    calcularArea : function() => { return this.base * this.altura; }
};
// Observe que para nos referirmos a um atributo ou método do objeto de dentro dele mesmo precisamos usar o prefixo this para saber que é algo que pertence ao objeto e não alguma variável declarada previamente.

// Podemos inclusive criar objetos dentro de objetos ou mesmo vetores sem problemas:

const agenda = {
    contatos : [
        {nome : 'contato1', telefone : 'telefone1', email : 'email1@teste.com'},
        {nome : 'contato2', telefone : 'telefone2', email : 'email2@teste.com'},
        {nome : 'contato3', telefone : 'telefone3', email : 'email3@teste.com'},
        {nome : 'contato4', telefone : 'telefone4', email : 'email4@teste.com'}
    ],
    adicionar : function(contato){ this.contatos.push(contato) },
}
// É simples escrever objetos assim e extremamente comum no javascript, no entanto, para escrever estruturas reutilizáveis é necessário usar classes.