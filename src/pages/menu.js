import '../styles/menu.css';
import BurgerImage from '../img/burger-image.jpg';
import Burger1 from '../img/burger-1.webp';
import Burger2 from '../img/burger-2.jpg';
import Burger3 from '../img/burger-3.jpg';

function createBurgerPresentation() {
    /* ==========================
    /* Create a small intro presentation
    /* ========================== */
    
    const burgerPresentation = document.createElement('div');
    const burgerDesc = document.createElement('div');
    const burgerImage = new Image();
    const burgerDescTitle = document.createElement('h4');
    const burgerDescBody = document.createElement('p');
    
    burgerDescTitle.textContent = "Burger John's famous burgers!";
    burgerDescBody.textContent = 'LadidadidaLadidadidaLadidadidaLadidadida LadidadidaLadidadidaLadidadidaLadidadidaLadidadida';
    
    // Setup elements
    burgerImage.src = BurgerImage;
    burgerImage.width = '300';
    burgerImage.classList.add('fade-in', 'image');
    
    burgerPresentation.id = 'burger-presentation';
    burgerDesc.classList.add('desc');
    
    burgerDescTitle.classList.add('desc-title', 'fade-in');
    burgerDescTitle.style.animationDuration = '0.8s';
    
    burgerDescBody.classList.add('desc-body', 'fade-in');
    burgerDescBody.style.animationDuration = '1s';
    
    burgerDesc.append(burgerDescTitle, burgerDescBody);
    burgerPresentation.append(burgerImage, burgerDesc);
    
    return burgerPresentation;
}

function createBurgerItems() {
    /* ==========================
    /* Create a burger menu list
    /* ========================== */
    
    const burgerMenu = document.createElement('div');
    
    const burgerImage1 = new Image();
    const burgerImage3 = new Image();
    
    const burgerDesc1 = document.createElement('div');
    const burgerDesc2 = document.createElement('div');
    const burgerDesc3 = document.createElement('div');
    
    const burgerDesc1Title = document.createElement('h4');
    const burgerDesc1Body = document.createElement('p');
    const burgerDesc2Title = document.createElement('h4');
    const burgerDesc2Body = document.createElement('p');
    const burgerDesc3Title = document.createElement('h4');
    const burgerDesc3Body = document.createElement('p');
    
    
    burgerImage1.src = Burger1;
    burgerImage1.width = '500';
    burgerImage1.height = '400';
    burgerImage1.classList.add('fade-in');
    
    burgerImage3.src = Burger3;
    burgerImage3.width = '500';
    burgerImage3.height = '400';
    burgerImage3.classList.add('fade-in');
    
    burgerDesc1.append(burgerDesc1Title, burgerDesc1Body);
    burgerDesc1.classList.add('desc');
    
    burgerDesc2.append(burgerDesc2Title, burgerDesc2Body);
    burgerDesc2.classList.add('desc', 'fade-in');
    burgerDesc2.style.width = '100%';
    burgerDesc2.style.height = '100%';
    burgerDesc2.style.backgroundImage = 'url(' + Burger2 + ')';
    burgerDesc2.style.backgroundSize = '100% 100%';
    
    
    burgerDesc3.append(burgerDesc3Title, burgerDesc3Body);
    burgerDesc3.classList.add('desc');
    
    for (const desc of [burgerDesc1, burgerDesc2, burgerDesc3]) {
        desc.firstChild.classList.add('desc-title', 'fade-in');
        desc.firstChild.style.animationDuration = '0.8s';
    
        desc.lastChild.classList.add('desc-body', 'fade-in');
        desc.lastChild.style.animationDuration = '1s';
    }
    
    // Set text for each item
    burgerDesc1Title.textContent = 'Title 1';
    burgerDesc1Body.textContent = 'Body 1';
    
    burgerDesc2Title.textContent = 'Title 2';
    burgerDesc2Body.textContent = 'Body 2';
    
    burgerDesc3Title.textContent = 'Title 3';
    burgerDesc3Body.textContent = 'Body 3';
    
    burgerMenu.id = 'burger-menu';
    burgerMenu.append(burgerImage1, burgerDesc1, burgerDesc2, burgerImage3, burgerDesc3);
    
    return burgerMenu;
}

export default function populateMenu(content) {
    const menu = document.createElement('div');
    
    
    // Append all elements
    menu.id = 'menu-content';
    menu.append(createBurgerPresentation(), createBurgerItems());
    
    content.appendChild(menu);
}