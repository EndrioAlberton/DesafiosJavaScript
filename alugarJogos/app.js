// Função para alterar o status do aluguel
function statusAluguel(id) {
    const elemento = document.getElementById(id);
    
    if (!elemento) {
        console.error(`Elemento com ID ${id} não encontrado.`);
        return;
    }

    const botao = elemento.querySelector('.botaoAlugar');

    if (botao.textContent === 'Alugar') {
        botao.textContent = 'Devolver';
        botao.classList.add('botaoDevolver');
    } else {
        botao.textContent = 'Alugar';
        botao.classList.remove('botaoDevolver');
    }
}
