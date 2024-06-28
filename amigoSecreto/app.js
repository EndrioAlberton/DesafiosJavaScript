let arrayAmigos = [];

function adicionarParticipante() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if (validacaoNome(nomeAmigo)) {
        if (!jaExiste(nomeAmigo.value)) {
            arrayAmigos.push(nomeAmigo.value);

            if (listaAmigos.textContent === '') {
                listaAmigos.textContent += nomeAmigo.value;
            } else {
                listaAmigos.textContent += ', ' + nomeAmigo.value;
            }

            if (arrayAmigos.length >= 4) {
                document.getElementById('btn-sorteio').disabled = false;
            }

            nomeAmigo.value = '';
        } else {
            alert('Amigo já adicionado.');
        }
    }
}

function validacaoNome(nomeAmigo) {
    if (nomeAmigo.value === '' || nomeAmigo.value.length < 2) {
        alert('Por favor, insira um nome válido com mais de 2 caracteres.');
        return false;
    }
    return true;
}

function jaExiste(nome) {
    return arrayAmigos.includes(nome);
}

function sortearParticipante() {
    if (arrayAmigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }
    embaralha(arrayAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < arrayAmigos.length; i++) {
        if (i === arrayAmigos.length - 1) {
            sorteio.innerHTML += arrayAmigos[i] + ' -> ' + arrayAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML += arrayAmigos[i] + ' -> ' + arrayAmigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    arrayAmigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('btn-sorteio').disabled = true;
}
