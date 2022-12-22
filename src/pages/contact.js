import '../styles/contact.css';

export default function populateContact(content) {
    const contact = document.createElement('div');
    
    contact.id = 'contact-content';
    
    content.appendChild(contact);
}