function retornarElemento<T>(array: T[], index: number): T | undefined {
  return array[index];
}

const nomes = ["Marcos", "Ana", "Lucas"];
const nome = retornarElemento(nomes, 1);
console.log(nome);

const numeros = [10, 20, 30, 40];
const numero = retornarElemento(numeros, 2);
console.log(numero);