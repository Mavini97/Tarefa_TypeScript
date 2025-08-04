type Genero = 'Masculino' | 'Feminino';

interface Pessoa {
  nome: string;
  idade: number;
  genero: Genero;
}

const alguem: Pessoa = {
  nome: "Marcos",
  idade: 28,
  genero: "Masculino",
};

function apresentarPessoa(individuo: Pessoa): string {
  return `${individuo.nome} tem ${individuo.idade} anos e se identifica como ${individuo.genero}`;
}

console.log(apresentarPessoa(alguem));