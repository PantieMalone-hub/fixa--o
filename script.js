// Lista inicial de estudantes armazenada em um Array
const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniela Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinícius"
];

// Obtendo as referências dos elementos HTML pelo identificador
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");

function exibirListaAutomaticamente() {
    // Limpa o conteúdo atual da lista para evitar duplicações indesejadas
    elementoLista.innerHTML = "";

    // Percorre cada posição do Array usando o laço for
    for (let i = 0; i < listaDeEstudantes.length; i++) {
        // Cria um elemento <li> novo em memória
        const itemLi = document.createElement("li"); //<li></li>
        itemLi.className = "item-nome"; //<li class="item-nome"></li>

        // Define o conteúdo interno do item com onome e sua respectiva ordem visual
        itemLi.innerHTML = `
            <span>${listaDeEstudantes[i]}</span>
            <span class="posicao-tag">#${i + 1}</span>
        `;

        // Anexa o item criado dentro da tag <ul> da página
        elementoLista.appendChild(itemLi);
    }

    //atualiza
    elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados`;
    elementoContador.style.color = "#16a34a";

    console.log(`Lista de estudantes exibida com sucesso: ${listaDeEstudantes.length} itens processados`);
}   

function limparLista(){
    elementoLista.innerHTML = "";
    elementoContador.innerText = "Lista limpa pelo usuário.Nenhum nome na tela.";
    elementoContador.style.color = "#475569";
    console.log("tela limpa.");
}

//dispara a exibição automaticamente assim que o script for carregado
exibirListaAutomaticamente();  


     
function adicionarNovoNome(){
    const NomeDigitado = document.getElementById("campoNovoNome");
    if(NomeDigitado.value ==="")
    {
        situacao.innerHTML="O campo está vazio";
    }
    else{
        listaDeEstudantes.push(NomeDigitado.value);
        exibirListaAutomaticamente();
        NomeDigitado.value="";
        NomeDigitado.select();
    }

}