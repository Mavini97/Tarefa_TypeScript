type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(status: StatusRequisicao): string {
  if (status === "sucesso") return "Operação realizada com sucesso.";
  if (status === "erro") return "Erro na operação.";
  return "Carregando, aguarde..";
}

// Teste
console.log(mostrarMensagemStatus("sucesso"));