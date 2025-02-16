let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validação do campo de entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);
    
    // Atualiza a exibição da lista
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizá-la

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
