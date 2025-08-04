interface Usuario {
  nome: string;
  email: string;
  exibirInfo(): string;
}

const usuario: Usuario = {
  nome: "Marcos",
  email: "marcos@gmail.com",
  exibirInfo() {
    return `Nome: ${this.nome} - Email: ${this.email}`;
  },
};

console.log(usuario.exibirInfo());