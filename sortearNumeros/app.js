function camposPreenchidos() {
    let quantidade = document.getElementById("quantidade").value.trim();
    let de = document.getElementById("de").value.trim();
    let ate = document.getElementById("ate").value.trim();

    return quantidade !== "" && de !== "" && ate !== "";
}

function verificarCampos(quantidade, de, ate) {
    if (quantidade <= 0) {
        alert("A quantidade de números a sortear deve ser maior que zero.");
        habilitarCamposSorteio();
        return false;
    }

    if (de >= ate) {
        alert("O valor inicial (De) deve ser menor que o valor final (Até).");
        habilitarCamposSorteio();
        return false;
    }

    let maxPossivel = ate - de + 1;

    if (quantidade > maxPossivel) {
        alert(`A quantidade máxima permitida é ${maxPossivel} números dentro do intervalo informado.`);
        habilitarCamposSorteio();
        return false;
    }

    return true; 
}

function sortearNumeros() {
    if (!camposPreenchidos()) {
        alert("Por favor, preencha todos os campos para realizar o sorteio.");
        return;
    }

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (!verificarCampos(quantidade, de, ate)) {
        return;
    }

    desabilitarCamposSorteio();

    let listaDeNumerosSorteados = [];
    let numeroAleatorio;

    do {
        numeroAleatorio = gerarNumeroAleatorio(de, ate);
        if (!listaDeNumerosSorteados.includes(numeroAleatorio)) {
            listaDeNumerosSorteados.push(numeroAleatorio);
        }
    } while (listaDeNumerosSorteados.length < quantidade);

    exibirNumerosSorteados(listaDeNumerosSorteados);

    habilitarBotaoReiniciar();
}

function desabilitarCamposSorteio() {
    document.getElementById("quantidade").disabled = true;
    document.getElementById("de").disabled = true;
    document.getElementById("ate").disabled = true;
    document.getElementById("btnSortear").disabled = true;
}

function habilitarBotaoReiniciar() {
    document.getElementById("btnReiniciar").disabled = false;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirNumerosSorteados(numeros) {
    let resultado = document.getElementById("resultado");
    if (numeros.length > 0) {
        resultado.textContent = "Números sorteados: " + numeros.join(", ");
    } else {
        resultado.textContent = "Nenhum número sorteado.";
    }
}

function reiniciar() {
    document.getElementById("resultado").textContent = "Números sorteados: nenhum até agora";
    
    habilitarCamposSorteio();
    limparCampos();

    document.getElementById("btnReiniciar").disabled = true;
}

function habilitarCamposSorteio() {
    console.log("https://github.com/EndrioAlberton");
    document.getElementById("quantidade").disabled = false;
    document.getElementById("de").disabled = false;
    document.getElementById("ate").disabled = false;
    document.getElementById("btnSortear").disabled = false;
}

function limparCampos() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = ""; 
}
