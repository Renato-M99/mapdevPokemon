const btnAvancar = document.querySelector('#btn-avancar');
const btnVoltar = document.querySelector('#btn-voltar');
/* Selecionando todos os cartões dos pokemons e guardando nas constantes */

const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function escondeCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    /* classList permite que JS manipule classes do CSS, nesse caso está recebendo a função remove que irá remover uma classe de um elemento */
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', () => {

    /* .lenght = retorna o tamanho do vetor, ou seja, a quantidade de elementos que está guardada nele */
    if (cartaoAtual < cartoes.length - 1 ) {
        escondeCartaoSelecionado();

        cartaoAtual++;
        mostrarCartao(cartaoAtual);
        
    }
       
});

btnVoltar.addEventListener('click', () => {
    if (cartaoAtual > 0){
        escondeCartaoSelecionado();

        cartaoAtual--;
        mostrarCartao(cartaoAtual);
    }
});