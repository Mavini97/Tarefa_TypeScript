interface RespostaAPI<T> {
  dados: T;
  sucesso: boolean;
}

const respostaNumeros: RespostaAPI<string> = {
  dados: "OK",
  sucesso: true,
};

const respostaString: RespostaAPI<number[]> = {
  dados: [1, 2, 3],
  sucesso: false,
};

console.log(respostaNumeros);
console.log(respostaString);