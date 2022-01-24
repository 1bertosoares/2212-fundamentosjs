const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '123543652266',
    email: 'andre@email.com',
    fones: ['55987456', '5514785697'],
    dependentes: [
    {
        nome: 'Sara Silva',
        parantesco: 'filha',
        dataNasc: '20/03/2011'},
    {
        nome: 'Samia Maria',
        parantesco: 'Filha',
        dataNasc: '04/01/2014'
    }
],

    saldo:100,

    depositar: function(valor)
    {
        this.saldo += valor
    }
}


function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)