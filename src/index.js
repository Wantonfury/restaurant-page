import './style.css';

class RestaurantManager {
    #header = document.createElement('div');
    #content = document.createElement('div');
    #footer = document.createElement('div');
    
    #switchHome() {
        console.log("Hello Home!");
    }
    
    #switchMenu() {
        console.log("Hello Menu!");
    }
    
    #switchContact() {
        console.log("Hello Contact!");
    }
    
    #populateHeader() {
        // Create Bacon John logo
        const logo = document.createElement('h2');
        const logoLeft = document.createElement('span');
        const logoRight = document.createElement('span');
        
        logoLeft.textContent = 'BACON';
        logoRight.textContent = 'JOHN';
        
        logo.id = 'logo';
        
        logo.appendChild(logoLeft);
        logo.appendChild(logoRight);
        
        this.#header.appendChild(logo);
        
        // Create the menu tabs
        const menuContainer = document.createElement('div');
        const home = document.createElement('button');
        const menu = document.createElement('button');
        const contact = document.createElement('button');
        
        home.textContent = 'Home';
        menu.textContent = 'Menu';
        contact.textContent = 'Contact';
        
        home.addEventListener('click', this.#switchHome);
        menu.addEventListener('click', this.#switchMenu);
        contact.addEventListener('click', this.#switchContact);
        
        home.classList.add('menu-btn');
        menu.classList.add('menu-btn');
        contact.classList.add('menu-btn');
        
        menuContainer.id = 'menu-container';
        
        menuContainer.append(home, menu, contact);
        
        this.#header.appendChild(menuContainer);
    }
    
    #populateFooter() {
        
    }
    
    #populateContent() {
        
    }
    
    init() {
        this.#populateHeader();
        this.#populateContent();
        this.#populateFooter();
    }
    
    constructor() {
        const body = document.querySelector('body');
        
        this.#header.id = 'header';
        this.#content.id = 'content';
        this.#footer.id = 'footer';
        
        body.appendChild(this.#header);
        body.appendChild(this.#content);
        body.appendChild(this.#footer);
    }
}

const manager = new RestaurantManager();
manager.init();