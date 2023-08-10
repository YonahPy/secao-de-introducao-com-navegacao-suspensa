function menu() {
    const botao = document.getElementById('menu-button');
    const logoBotao = document.querySelector('.logo-botao');
    const menuBar = document.createElement('div');
    menuBar.classList.add('menu-bar');
    menuBar.style.width = '40vw';
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

    function desabilitarMenu(mediaQuery){
        if (mediaQuery.matches){
            botao.setAttribute('disabled', 'true');
        } else{
            botao.removeAttribute('disabled');
        }
    }

    const mediaQuery700px = window.matchMedia('(min-width: 700px)');
    desabilitarMenu(mediaQuery700px);

    mediaQuery700px.addEventListener('change', desabilitarMenu);
}

menu();

function menuSuspenso(){
    const features = document.getElementById('features');
    const company = document.getElementById('company');

    const menuFeatures = document.createElement('div');
    menuFeatures.classList.add('menu-features');
    menuFeatures.innerHTML = '<li><img src="intro-section-with-dropdown-navigation-main/images/icon-todo.svg" alt="icon icon-todo"> Todo List</li> <li> <img src="intro-section-with-dropdown-navigation-main/images/icon-calendar.svg" alt="icon-calendar"> Calendar</li> <li><img src="intro-section-with-dropdown-navigation-main/images/icon-reminders.svg" alt="icon-reminders">Reminders</li> <li> <img src="intro-section-with-dropdown-navigation-main/images/icon-planning.svg" alt="icon-planning"> Planning</li>';


    const menuCompany = document.createElement('div');
    menuCompany.classList.add('menu-company');
    menuCompany.innerHTML = '<li>History</li> <li>Our Team</li> <li>Blog</li>';

    let arrowUp1 = document.querySelector('#arrow-up1');
    let arrowUp2 = document.querySelector('#arrow-up2');
    let arrowDown1 = document.querySelector('#arrow-down1');
    let arrowDown2 = document.querySelector('#arrow-down2');

   
    let alternarFeatures = false;
    
    features.addEventListener('click', function(){
        if (!alternarFeatures){
            features.appendChild(menuFeatures);
            alternarFeatures = true;
            arrowDown1.style.display = 'none';
            arrowUp1.style.display = 'inline'


        } else{
            features.removeChild(menuFeatures);
            alternarFeatures = false;
            arrowDown1.style.display = 'inline';
            arrowUp1.style.display = 'none';
            
        }
    })

    let alternarCompany = false;

    company.addEventListener('click', function(){
        if (!alternarCompany){
            company.appendChild(menuCompany);
            alternarCompany = true;
            arrowDown2.style.display = 'none';
            arrowUp2.style.display = 'inline'
        } else{
            company.removeChild(menuCompany);
            alternarCompany = false;
            arrowDown2.style.display = 'inline';
            arrowUp2.style.display = 'none';
        }
    })

}
menuSuspenso()