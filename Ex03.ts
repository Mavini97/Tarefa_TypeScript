interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

function resumirLivro(obra: Livro): string {
  return `O livro '${obra.titulo}' foi escrito por ${obra.autor} em ${obra.anoPublicacao}.`;
}

const livro: Livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899,
};

console.log(resumirLivro(livro));