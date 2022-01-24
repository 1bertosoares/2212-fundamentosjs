const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123543652266",
    email: "andre@email.com",
    fones: ["55987456", "5514785697"],
    dependentes: [
    {
        nome: "Sara Silva",
        parantesco: "filha",
        dataNasc: "20/03/2011"},
    {
        nome: "Samia Maria",
        parantesco: "Filha",
        dataNasc: "04/01/2014"
    }
],

    saldo:100,

    depositar: function(valor)
    {
        this.saldo += valor
    }
}



const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "123543652266",
        email: "andre@email.com",
        fones: ["55987456", "5514785697"],
        dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"},
        {
            nome: "Samia Maria",
            parentesco: "Filha",
            dataNasc: "04/01/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "56789564689",
        dependentes: [{
            nome: "Sofia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
            }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes)
console.table(listaDependentes)