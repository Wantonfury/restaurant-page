import './styles/index.css';
import populateHome from './pages/home.js';
import populateMenu from './pages/menu.js';
import populateContact from './pages/contact.js';
import GitIcon from './img/github-mark.png';

class RestaurantManager {
    header = document.createElement('div');
    content = document.createElement('div');
    footer = document.createElement('div');
    
    switchHome() {
        content.innerHTML = "";
        populateHome(content);
    }
    
    switchMenu() {
        content.innerHTML = "";
        populateMenu(content);
    }
    
    switchContact() {
        content.innerHTML = "";
        populateContact(content);
    }
    
    populateHeader() {
        // Create Bacon John logo
        const logo = document.createElement('h2');
        const logoLeft = document.createElement('span');
        const logoRight = document.createElement('span');
        
        logoLeft.textContent = 'BACON';
        logoRight.textContent = 'JOHN';
        
        logo.id = 'logo';
        
        logo.appendChild(logoLeft);
        logo.appendChild(logoRight);
        
        header.appendChild(logo);
        
        // Create the menu tabs
        const menuContainer = document.createElement('div');
        const home = document.createElement('button');
        const menu = document.createElement('button');
        const contact = document.createElement('button');
        
        home.textContent = 'Home';
        menu.textContent = 'Menu';
        contact.textContent = 'Contact';
        
        home.addEventListener('click', this.switchHome);
        menu.addEventListener('click', this.switchMenu);
        contact.addEventListener('click', this.switchContact);
        
        home.classList.add('menu-btn');
        menu.classList.add('menu-btn');
        contact.classList.add('menu-btn');
        
        menuContainer.id = 'menu-container';
        
        menuContainer.append(home, menu, contact);
        
        header.appendChild(menuContainer);
    }
    
    populateFooter() {
        const copyright = document.createElement('h6');
        const icon = new Image();
        
        copyright.textContent = 'Copyright © Wantonfury';
        icon.src = GitIcon;
        
        footer.append(copyright, icon);
    }
    
    populateContent() {
        
    }
    
    init() {
        this.populateHeader();
        this.populateContent();
        this.populateFooter();
        
        this.switchHome();
    }
    
    constructor() {
        const body = document.querySelector('body');
        
        this.header.id = 'header';
        this.content.id = 'content';
        this.footer.id = 'footer';
        
        body.appendChild(this.header);
        body.appendChild(this.content);
        body.appendChild(this.footer);
    }
}

const manager = new RestaurantManager();
manager.init();