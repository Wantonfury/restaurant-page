import '../styles/contact.css';

export default function populateContact(content) {
    const h2 = document.createElement('h2');
    
    h2.textContent = 'Hello contact!';
    
    content.appendChild(h2);
}