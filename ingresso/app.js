function comprar() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);
    
    if (quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    switch (tipoIngresso) {
        case 'pista':
            processarCompra('qtd-pista', 'Pista', quantidade);
            break;
        case 'superior':
            processarCompra('qtd-superior', 'Cadeira Superior', quantidade);
            break;
        case 'inferior':
            processarCompra('qtd-inferior', 'Cadeira Inferior', quantidade);
            break;
        default:
            alert('Tipo de ingresso inválido.');
    }
}

function processarCompra(idQuantidade, nomeIngresso, quantidade) {
    // Obtém o elemento HTML que contém a quantidade disponível e a converte para um número
    const elementoQuantidade = document.getElementById(idQuantidade);
    let quantidadeDisponivel = parseInt(elementoQuantidade.textContent);

    if (quantidade > quantidadeDisponivel) {
        alert(`Quantidade indisponível para ${nomeIngresso}`);
    } else {
        // Atualiza a quantidade disponível e informa o sucesso da compra
        quantidadeDisponivel -= quantidade;
        elementoQuantidade.textContent = quantidadeDisponivel;
        alert('Compra realizada com sucesso!');
    }
}