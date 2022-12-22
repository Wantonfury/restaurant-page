import '../styles/home.css';
import BackgroundImage from '../img/burger-intro.jpg';

export default function populateHome(content) {
    const home = document.createElement('div');
    const backgroundImage = document.createElement('div');
    const backgroundText = document.createElement('div');
    
    const backgroundTitle = document.createElement('h4');
    const backgroundDesc = document.createElement('p');
    const backgroundDescNote = document.createElement('p');
    
    home.id = 'home-content';
    
    backgroundImage.style.backgroundImage = 'url(' + BackgroundImage + ')';
    backgroundImage.style.backgroundSize = '100% 100%';
    backgroundImage.classList.add('background-image', 'fade-in');
    
    backgroundTitle.textContent = "Welcome to Burger John's deliciously greasly website!";
    backgroundTitle.classList.add('fade-in');
    backgroundTitle.style.animationDuration = '0.7s';
    
    backgroundDesc.textContent = "At Burger John we bring you the very best burgers John has ever made! Alas, not so many that we cannot\
    count on our hands. Or hand. Nevertheless, we focus wholly on nothing but quality at Burger John! Each single burger is as good as\
    two dozen burgers at any of our competitors! We guarantee it.*";
    backgroundDesc.classList.add('fade-in');
    backgroundDesc.style.animationDuration = '1s';
    
    backgroundDescNote.textContent = '*We do not provide any compensations or discounts.';
    backgroundDescNote.classList.add('small-note', 'fade-in');
    backgroundDescNote.style.animationDuration = '.7s';
    
    backgroundText.classList.add('background-text');
    backgroundText.append(backgroundTitle, backgroundDesc, backgroundDescNote, backgroundImage);
    
    home.append(backgroundText);
    
    content.appendChild(home);
}