


function selecionarPrato(qualPrato) {

    // verificar se existe um dos pratos ja com borda
    // vendo se tem a class borda nele
    const pratoClicadoAntes = document.querySelector('.pratos .borda');
    
    // se ja existe um prato com borda 
    if (pratoClicadoAntes !== null) {
        //remover a borda
        pratoClicadoAntes.classList.remove('borda');
    
    }
    // buscar o novo prato que foi clicado
    const selecionar = document.querySelector(qualPrato);

    // adicionar a borda a ele
    selecionar.classList.add('borda');
    
    

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
    // buscar o novo prato que foi clicado
    const selecionar = document.querySelector(qualBebida);
    // adicionar a borda a ele
    selecionar.classList.add('borda');

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
    // buscar o novo prato que foi clicado
    const selecionar = document.querySelector(qualSobremesa);
    // adicionar a borda a ele
    selecionar.classList.add('borda');

}


