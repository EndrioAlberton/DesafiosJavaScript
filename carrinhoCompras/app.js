let valorTotal;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    

    if (quantidade < 0) {
        alert('Quantidade inválida');
        return;
    } else if (quantidade == 0) {
        quantidade = 1;
    }

    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('listaProdutos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinhoProdutosProduto">
          <span class="textoRoxo">${quantidade}x</span> ${nomeProduto} <span class="textoRoxo">R$${preco}</span>
        </section>`
        valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valorTotal');

    campoTotal.textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('listaProdutos').innerHTML = '';
    document.getElementById('valorTotal').innerHTML = 'R$ 0';
    document.getElementById('quantidade').value = '';

}