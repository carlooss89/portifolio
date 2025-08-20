
function escrevendoLetra() {
    
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout( ( ) => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);

}

const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click', () => {
    // Verifica se a classe 'fa-bars' está presente no elemento
    if (ativaMenu.classList.contains('fa-bars')) {
        // Se estiver, substitui 'fa-bars' por 'fa-times'
        ativaMenu.classList.replace('fa-bars', 'fa-times');
    } else {
        // Se a classe for 'fa-times', substitui 'fa-times' por 'fa-bars'
        ativaMenu.classList.replace('fa-times', 'fa-bars');
    }
});



