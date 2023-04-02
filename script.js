
let nomePrato = '';
let nomeBebida = '';
let nomesobremesa = '';

function selecionarTudo() {
    // verificar se o pratos foi clicado
    if (nomePrato !== '') {
        // verificar se bebida foi clicado
        if (nomeBebida !== '') {

            // verificar se sobremesa foi clicado
            if (nomesobremesa !== '') {
                // buscar a class caixa-finalizar
                const caixaFinalizar = document.querySelector('.caixa-finalizar');
                // adiciona a clss botão-finalizar
                caixaFinalizar.classList.add('botão-finalizar');
                caixaFinalizar.innerHTML = 'Finalizar Pedido';
                document.getElementsByClassName("caixa-finalizar").disabled = true;

                let btnRemove = document.getElementById('delete').removeAttribute('disabled');
            }
        }
    }
}

function valorTotal(terminando) {
    
    alert('ate aqui tudo bem');
    // verificar se existe a class aparecer
    const confirmar = document.querySelector('.tudo .aparecer');
    console.log(confirmar);
    // se exixtir ele retira
    if (confirmar !== null) {
        confirmar.classList.remove('aparecer');
    }

}

function selecionarPrato(qualPrato) {

    nomePrato = qualPrato.innerHTML;
    // verificar se existe um dos pratos ja com borda
    // vendo se tem a class borda nele
    const pratoClicadoAntes = document.querySelector('.pratos .borda');
    // se ja existe um prato com borda 
    if (pratoClicadoAntes !== null) {
        //remover a borda
        pratoClicadoAntes.classList.remove('borda');
    }
    // adicionar a borda a ele
    qualPrato.classList.add('borda');


    selecionarTudo();
}




function selecionarBebida(qualBebida) {

    nomeBebida = qualBebida.innerHTML;

    // verificar se existe um dos pratos ja com borda
    // vendo se tem a class borda nele
    const bebidaClicadoAntes = document.querySelector('.bebidas .borda');
    // se ja existe um prato com borda 
    if (bebidaClicadoAntes !== null) {
        //remover a borda
        bebidaClicadoAntes.classList.remove('borda');
    }

    // adicionar a borda a ele
    qualBebida.classList.add('borda');
    selecionarTudo();
}

function selecionarSobremesa(qualSobremesa) {

    nomesobremesa = qualSobremesa.innerHTML;

    // verificar se existe um dos pratos ja com borda
    // vendo se tem a class borda nele
    const sobremesaClicadoAntes = document.querySelector('.sobremesa .borda');
    // se ja existe um prato com borda 
    if (sobremesaClicadoAntes !== null) {
        //remover a borda
        sobremesaClicadoAntes.classList.remove('borda');
    }

    // adicionar a borda a ele
    qualSobremesa.classList.add('borda');
    selecionarTudo();
}

function pedir() {
    alert('deu certo');
}
function cancelar() {
    alert('cancelado');
}


