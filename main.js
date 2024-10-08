function criaCartao(pergunta, resposta){
    let conteudo = document.getElementById('conteudo')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao--conteudo">
           <div class="cartao--pergunta"><p>Quais são os principais animatronics?</p></div>
           <div class="cartao--resposta"><p>Freddy, Bonnie, Chica e Foxy</p></div>
        </div>
    `

    console.log()

}

