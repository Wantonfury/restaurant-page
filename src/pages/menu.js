import '../styles/menu.css';

export default function populateMenu(content) {
    const h2 = document.createElement('h2');
    
    h2.textContent = 'Hello menu!';
    
    content.appendChild(h2);
}