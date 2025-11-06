document.addEventListener('DOMContentLoaded', () => {

    const dadosExtrato ={
        saldo:1500,
        transacoes: [
            {tipo:'venda', descricao:"Venda - Fone de ouvido", valor:250},
            {tipo:'compra', descricao:"Compra - Livro de JavaScript", valor:-80},
            {tipo:'venda', descricao:"Venda - Smartphone usado", valor:900},
            {tipo:'compra', descricao:"Compra - Curso online", valor:-120},
            {tipo:'compra', descricao:"Compra - TV 4K", valor:-5200},
            {tipo:'venda', descricao:"Venda - Bicicleta", valor:600},
            {tipo:'venda', descricao:"Venda - Console retrô", valor:450},
            {tipo:'compra', descricao:"Compra - Fones Bluetooth", valor:-150},
            {tipo:'venda', descricao:"Venda - Notebook seminovo", valor:2800},
            {tipo:'compra', descricao:"Compra - Cadeira gamer", valor:-6000},
            {tipo:'venda', descricao:"Venda - Monitor 27 polegadas", valor:1100},
            {tipo:'compra', descricao:"Compra - Teclado mecânico", valor:-320},
            {tipo:'venda', descricao:"Venda - Impressora usada", valor:350},
            {tipo:'compra', descricao:"Compra - Mesa digitalizadora", valor:-7200},
            {tipo:'venda', descricao:"Venda - Headset profissional", valor:700},
            {tipo:'compra', descricao:"Compra - Licença de software", valor:-200},


        ]
    };

const saldoElemento = document.getElementById('saldo-conta');
const listaTransacoesElemento = document.getElementById('lista-transacoes');

saldoElemento.textContent = `Saldo ${dadosExtrato.saldo.toLocaleString('pt-BR', {
    style:'currency',
    currency:'BRL'
})}`;

dadosExtrato.transacoes.forEach(transacao => {
    const itemLista = document.createElement('li');
    itemLista.classList.add('transacao');

    if (Math.abs(transacao.valor) >= 5000) {
        itemLista.classList.add('destaque');
    }

    const ValorFormatado = new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL'
    }).format(transacao.valor);

    itemLista.innerHTML = `
        <span class="transacao-info">
        <span>${transacao.descricao}</span>
        <small>${transacao.valor}</small>
        </span>
        <span class="transacao-valor ${transacao.valor < 0 ? 'negativo' : ''}">
        ${ValorFormatado}
        </span>
        `;

        listaTransacoesElemento.appendChild(itemLista);

});
});