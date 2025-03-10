//Criando uma lista para armazenar os nomes
let amigos = [];

//Função para adicionar nomes de amigos
function adicionarAmigo(){
    let novoNome = document.querySelector('input').value;
    //Se não inserir um nome exibe mensagem de erro
    if (!novoNome){
        alert('Por favor inserir um nome!!');
        return;
    }

    //Adiciona nomes na lista
    amigos.push(novoNome);
    limparCampo();
    atualizarLista();
}

//Função para limpar o campo cada vez que adicionado um nome
function limparCampo(){
    novoNome = document.querySelector('input');
    novoNome.value = "";
}

//Função para atualizar a lista de amigos no HTML
function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    } 
}

//Função para sortear um nome
function sortearAmigo(){
    //Variável que indicará o indice da lista
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    //Variavel que armazenará o nome indicado pelo indice sorteado acima
    let nomeAleatorio = amigos[indiceSorteado];

    //Se a lista estiver vazia exibe mensagem de erro, senão sorteia um nome
    if (amigos.length === 0){
        alert('Não há nomes para sortear!!')
    } else {
        limparLista();
        document.getElementById('resultado').textContent = 'O amigo secreto sorteado é ' + nomeAleatorio;
    }
}

//Função para limpar a lista da tela para exibir somente a mensagem de nome sorteado
function limparLista(){
    let lista = document.getElementById('listaAmigos');
    lista.style.display = 'none';
}

//Ao clicar no enter ele fará a mesma função que o botão 'Adicionar'
document.querySelector('input').addEventListener ('keydown', function(event){
    if (event.key === 'Enter'){
        adicionarAmigo();
    }
})