
let nomePrato = '';
let nomeBebida = '';
let nomesobremesa = '';
let x, x1, y, y1, z, z1 = '';

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
                caixaFinalizar.innerHTML = 'Finalizar Pedido';
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
    console.log(total);
    const mudar = document.querySelector('.valor-t');
    mudar = innerHTML = total;

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



    x = document.querySelector('.borda p');

    x1 = x.innerHTML.replace('R$', '').replace(',', '.');
    Number(x1);


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

    y = document.querySelector('.borda .preço');

    y1 = y.innerHTML.replace('R$', '').replace(',', '.');
    Number(y1);
    console.log(y1);

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

    z = document.querySelector('.borda .preço-sobremesa');


    z1 = z.innerHTML.replace('R$', '').replace(',', '.');
    Number(z1);
    console.log(z1);

    selecionarTudo();
}

function pedir() {

    const mensagem = `Olá, gostaria de fazer o pedido\n
    - Prato: Frango Yin Yang\n
    - Bebida: Coquinha Gelada\n
    - Sobremesa: Pudim\n
    Total: R$ ${total}`

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

// fazer uma caixa pra quardar o valor da prato selecionado
// fazer uma caixa pra quardar o valor da bebida selecionado









// fazer uma caixa pra guardar o nome do prato selecionado
   //1 mostrar esse nome na class  prato-selec dentro do p
// fazer uma caixa pra quardar o valor da prato selecionado
  //1 mostrar esse valor na  class prato-selec dentro da div valor



 // fazer uma caixa pra guardar o nome da bebida selecionado
   //1 mostrar esse nome na class bebida-selec dentro do p
// fazer uma caixa pra quardar o valor da bebida selecionado
  //1 mostrar esse valor na class bebida-selec dentro da div valor



// fazer uma caixa pra guardar o nome da sobremesa selecionado
   //1 mostrar esse nome na class sobremesa-selec dentro do p
// fazer uma caixa pra quardar o valor da sobremesa selecionado
  //1 mostrar esse valor na  class sobremesa-selec dentro da div valor


