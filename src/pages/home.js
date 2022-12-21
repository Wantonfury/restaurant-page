import '../styles/home.css';

export default function populateHome(content) {
    const h2 = document.createElement('h2');
    
    h2.textContent = 'Hello home!';
    
    content.appendChild(h2);
}