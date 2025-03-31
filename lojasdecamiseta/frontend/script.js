let carrinho = []

function adicionaraocarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }
    atualizarcarrinho();
}

function atualizarcarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const total = document.getElementById('total');

    lista.innerHTML = '';
    let soma = 0;
    
    carrinho.forEach(item=> {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
        soma += item.preco;


    });
    total.textContent = soma.toFixed(2);
}
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
    }
    fetch('http://localhost:8080/pedido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carrinho)
    })
    .then(response => alert("Compra finalizada!"))
    .catch(err => console.error(err));
}