
let nomePrato = '';
let nomeBebida = '';
let nomesobremesa = '';
let x, x1, y, y1, z, z1, m = '';

let total = '';

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
                caixaFinalizar.innerHTML = 'Fechar Pedido';
                document.getElementsByClassName("caixa-finalizar").disabled = true;
                let btnRemove = document.getElementById('delete').removeAttribute('disabled');
            }
        }
    }
}

function valorTotal(terminando) {

    // verificar se existe a class aparecer
    const confirmar = document.querySelector('.tudo .aparecer');

    // se exixtir ele retira
    if (confirmar !== null) {
        confirmar.classList.remove('aparecer');
    }
    total = Number(x1) + Number(y1) + Number(z1);
    m = parseFloat(total).toFixed(2);

    const mudar = document.querySelector('.valor-t');
    mudar.innerHTML = `${m}`;

    const mudarP = document.querySelector('.valor');
    mudarP.innerHTML = `${x1}`;

    const mudarB = document.querySelector('.valor-2');
    mudarB.innerHTML = `${y1}`;

    const mudarS = document.querySelector('.valor-3');
    mudarS.innerHTML = `${z1}`;

    const mudarPra = document.querySelector('.prato-selec p');
    mudarPra.innerHTML = `${nomePrato}`;

    const mudarBeb = document.querySelector('.bebida-selec p');
    mudarBeb.innerHTML = `${nomeBebida}`;

    const mudarSob = document.querySelector('.sobremesa-selec p');
    mudarSob.innerHTML = `${nomesobremesa}`;
}

function selecionarPrato(qualPrato) {

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

    // guardar nome
    const nomeP = document.querySelector('.borda .nome')
    nomePrato = nomeP.innerHTML;

    // guardar valor
    x = document.querySelector('.borda p');
    x1 = x.innerHTML.replace('R$', '').replace(',', '.');

    selecionarTudo();
}


function selecionarBebida(qualBebida) {
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

    // guardar nome
    const nomeB = document.querySelector('.borda .nome-b')
    nomeBebida = nomeB.innerHTML;

    // guardar valor
    y = document.querySelector('.borda .preço p');
    y1 = y.innerHTML.replace('R$', '').replace(',', '.');

    selecionarTudo();
}

function selecionarSobremesa(qualSobremesa) {

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

    // guardar nome
    const nomeS = document.querySelector('.borda .nome-s')
    nomesobremesa = nomeS.innerHTML;

    // guardar valor
    z = document.querySelector('.borda .preço-sobremesa p');
    z1 = z.innerHTML.replace('R$', '').replace(',', '.');

    console.log(Number(z1));

    selecionarTudo();
}

function pedir() {

    const mensagem = `Olá, gostaria de fazer o pedido
    Prato:${nomePrato}
    Bebida:${nomeBebida}
    Sobremesa:${nomesobremesa}
    Total: R$ ${m}`

    alert(mensagem);
    const encode = encodeURIComponent(mensagem);
    window.open(`https://wa.me/38998152601?text=${encode}`);
 
}

function cancelar(cancel) {

    const cancelado = document.querySelector('.tudo .aparecer');
    console.log(cancelado);
    if (cancelado !== null) {

    }
    const can = document.querySelector('.confirmar-pedido')
    can.classList.add('aparecer');
}




