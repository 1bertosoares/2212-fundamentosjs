const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123543652266",
    email: "andre@email.com",
    fones: ["55987456", "5514785697"]
}

cliente.dependentes = {
    nome: "Sara",
    parantesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)