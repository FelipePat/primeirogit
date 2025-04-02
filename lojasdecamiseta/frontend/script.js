let carrinho = [];
let total = 0;
function toggleCarrinho() {
    const carrinho = document.getElementById('carrinho-dropdown');
    carrinho.classList.toggle('visible');
}

// Fechar o carrinho ao clicar fora
document.addEventListener('click', (e) => {
    const carrinho = document.getElementById('carrinho-dropdown');
    const btnCarrinho = document.querySelector('.carrinho-btn');
    
    if (!carrinho.contains(e.target) && e.target !== btnCarrinho && !btnCarrinho.contains(e.target)) {
        carrinho.classList.remove('visible');
    }
});
// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Adiciona o item ao carrinho
    carrinho.push({ nome, preco });
    total += preco;
    
    // Atualiza a exibição do carrinho
    atualizarCarrinho();
    
    // Feedback visual
    alert(`${nome} foi adicionado ao carrinho!`);
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalElement = document.getElementById('total');
    
    // Limpa a lista
    listaCarrinho.innerHTML = '';
    
    // Adiciona cada item do carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });
    
    // Atualiza o total
    totalElement.textContent = total.toFixed(2);
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Simulação de finalização de compra
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}\nObrigado por comprar na DrilWear!`);
    
    // Limpa o carrinho
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}

// Inicializa o carrinho
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
});