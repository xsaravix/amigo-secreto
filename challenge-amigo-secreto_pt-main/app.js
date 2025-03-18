let amigos = [];


function adicionarAmigo(){
    let novoNome = document.querySelector('input').value;

    if (!novoNome){
        alert('Por favor inserir um nome!!');
        return;
    }

    amigos.push(novoNome);
    atualizarLista();
    limparCampo();
}

function limparCampo(){
    novoNome = document.querySelector('input');
    novoNome.value = "";
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    } 
}

function sortearAmigo(){
    let meuNome = prompt("Digite seu nome:");
    let indiceSorteado;
    let nomeAleatorio;

    do {
    indiceSorteado = Math.floor(Math.random() * amigos.length);
    nomeAleatorio = amigos[indiceSorteado];
    } while (nomeAleatorio === meuNome);

    if (amigos.length === 0){
        alert('Não há nomes para sortear!!')
    } else {
        amigos.splice(indiceSorteado, 1);
        limparLista();
        document.getElementById('resultado').textContent = 'O amigo secreto sorteado é ' + nomeAleatorio;
    }
}

function limparLista(){
    let lista = document.getElementById('listaAmigos');
    lista.style.display = 'none';
}

document.querySelector('input').addEventListener ('keydown', function(event){
    if (event.key === 'Enter'){
        adicionarAmigo();
    }
})
