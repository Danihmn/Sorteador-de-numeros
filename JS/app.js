// Função para sortear os números
function sortear(){
    // Pegando o valor dos inputs html
    var quantidade = parseInt(document.getElementById("quantidade").value);

    // "parseInt" faz com que a variável receba apenas um número inteiro
    var de = parseInt(document.getElementById("de").value);
    var ate =  parseInt(document.getElementById("ate").value);

    // Declarando um array para armazenar os números sorteados
    var sorteados = [];
    var numero; // Variável que vai receber o valor da função sorteadora

    // Loop para percorrer a quantidade de números sorteados
    for(var i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate); // Atribuindo a função para a var

        // Se no array já estiver determinado número, seleciona outros para não repetir
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero); // Colocando no array os números sorteados
    }

    // Exibindo o resultado na tela
    var resultado = document.getElementById("resultado");

    // Com innerHTML, eu posso literalmente modificar a tag no HTML
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
    // Chamando a função que habilita o botão de reiniciar
    alterarStatusBotao();
}

// Sortear o número aleatório que será sorteado
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função que altera o estado do botão de reiniciar
function alterarStatusBotao(){
    var botao = document.getElementById("btn-reiniciar"); // Pegando o id do botão

    // Se o botão tiver uma classe chamada "container_botao-desabilitado"
    if(botao.classList.contains("container__botao-desabilitado")){
        // Removendo da tag HTML a classe de desabilitado
        botao.classList.remove("container__botao-desabilitado");
       
        // Adicionando à tag HTML a classe do botão, agora habilitado
        botao.classList.add("container__botao");
    }else{
        // Faço o efeito contrário caso ele já estiver habilitado 
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

// Função que limpará todos os campos
function reiniciar(){
    // Tirando os valores dos inputs do HTML
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";

    // Alterando o texto exibidor de números sorteados, para o original
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    // Chamando a função que habilita e desabilita o botão
    alterarStatusBotao(); 
}