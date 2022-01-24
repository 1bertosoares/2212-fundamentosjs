const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '123543652266',
    email: 'andre@email.com',
    fones: ['55987456', '5514785697'],
    dependentes: [{
        nome: 'Sara Silva',
        parantesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push ({
    nome: 'Samia Maria',
    parantesco: 'Filha',
    dataNasc: '04/01/2014'
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter( 
    dependentes => dependentes.dataNasc === '04/01/2014')

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)