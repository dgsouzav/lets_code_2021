// Filter

// Filter é uma função de alta ordem semelhante ao map, a diferença é que o objetivo do filter é filtrar
// elementos do vetor. Portanto a função passada para o deve receber o elemento e retornar um booleano.
// Se retorna true o elementor será mantido, senão retirado. Como exemplo, suponha que temos
// um vetor numérico e queremos somente os pares:

const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter(x => x % 2 === 0);
// Note que estamos passando a função x => x % 2 === 0 para o filter.
// Ele recebe um elemento x do vetor e retorna true se o resto da divisão por dois é zero.

// Um outro exemplo é retirar elementos maior do que um valor limite:

const vetor = [10,4,5,6,2,7,3,8,9,1];

const vetor2 = vetor.filter(x => x < 8);
// No exemplo acima filtramos os elementos maiores ou iguais a oito.