function status(request, response) {
  response.status(200).json({ chave: "Alunos são acima da média." });
}

export default status;
