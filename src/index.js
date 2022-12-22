import './styles/index.css';
import populateHome from './pages/home.js';
import populateMenu from './pages/menu.js';
import populateAbout from './pages/about.js';
import GitIcon from './img/github-mark.png';

class RestaurantManager {
    header = document.createElement('div');
    content = document.createElement('div');
    footer = document.createElement('div');
    
    clearActive() {
        this.home.classList.remove('active');
        this.menu.classList.remove('active');
        this.about.classList.remove('active');
    }
    
    switchHome() {
        this.clearActive();
        this.home.classList.add('active');
        
        this.content.innerHTML = "";
        populateHome(this.content);
    }
    
    switchMenu() {
        this.clearActive();
        this.menu.classList.add('active');
        
        this.content.innerHTML = "";
        populateMenu(this.content);
    }
    
    switchAbout() {
        this.clearActive();
        this.about.classList.add('active');
        
        this.content.innerHTML = "";
        populateAbout(this.content);
    }
    
    populateHeader() {
        // Create Bacon John logo
        const logo = document.createElement('h2');
        const logoLeft = document.createElement('span');
        const logoRight = document.createElement('span');
        
        logoLeft.textContent = 'BURGER';
        logoRight.textContent = 'JOHN';
        
        logo.id = 'logo';
        
        logo.appendChild(logoLeft);
        logo.appendChild(logoRight);
        
        header.appendChild(logo);
        
        // Create the menu tabs
        const menuContainer = document.createElement('div');
        this.home = document.createElement('button');
        this.menu = document.createElement('button');
        this.about = document.createElement('button');
        
        this.home.textContent = 'Home';
        this.menu.textContent = 'Menu';
        this.about.textContent = 'About';
        
        this.home.addEventListener('click', this.switchHome.bind(this));
        this.menu.addEventListener('click', this.switchMenu.bind(this));
        this.about.addEventListener('click', this.switchAbout.bind(this));
        
        this.home.classList.add('menu-btn');
        this.menu.classList.add('menu-btn');
        this.about.classList.add('menu-btn');
        
        this.home.id = 'home';
        this.menu.id = 'menu';
        this.about.id = 'about';
        
        menuContainer.id = 'menu-container';
        
        menuContainer.append(this.home, this.menu, this.about);
        
        header.appendChild(menuContainer);
    }
    
    populateFooter() {
        const copyright = document.createElement('h6');
        const icon = new Image();
        
        copyright.textContent = 'Copyright © Wantonfury';
        icon.src = GitIcon;
        
        footer.append(copyright, icon);
    }
    
    init() {
        this.populateHeader();
        this.populateFooter();
        
        //this.switchHome();
        this.switchAbout();
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