function menu() {
    const botao = document.getElementById('menu-button');
    const logoBotao = document.querySelector('.logo-botao');
    const menuBar = document.createElement('div');
    menuBar.classList.add('menu-bar');
    menuBar.style.width = '50vw';
    menuBar.style.height = '100vh';
    menuBar.style.backgroundColor = 'white';
    menuBar.style.position = 'fixed';
    menuBar.style.top = '0';
    menuBar.style.right = '0';
    let menuAberto = false;
    const uls = document.querySelectorAll('ul');
    const botaoClonado = botao.cloneNode(true);
    botaoClonado.id = 'menu-button-clonado';
    

    function abrirFecharMenu() {
        if (!menuAberto) {
            
            logoBotao.appendChild(menuBar);
            menuAberto = true;
            botaoClonado.innerHTML = '<i class="material-icons">close</i>';
            menuBar.appendChild(botaoClonado);

            uls.forEach(function (ul) {
                menuBar.appendChild(ul);
                ul.style.display = 'block';
            });
        } else {
            logoBotao.removeChild(menuBar);
            menuAberto = false;

            menuBar.removeChild(botaoClonado);
        }
    }

    botao.addEventListener('click', abrirFecharMenu);

    botaoClonado.addEventListener('click', abrirFecharMenu);
}

menu();
