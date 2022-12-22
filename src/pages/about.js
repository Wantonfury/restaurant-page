import '../styles/about.css';

export default function populateAbout(content) {
    const about = document.createElement('div');
    const textTitle = document.createElement('h4');
    const textDesc = [];
    const text = document.createElement('div');
    
    text.append(textTitle);
    text.classList.add('about-desc');
    
    textTitle.textContent = 'All the burgers. All on one plate. All delicious.'
    textTitle.classList.add('fade-in');
    
    for (let i = 0; i < 3; ++i) {
        textDesc[i] = document.createElement('p');
        textDesc[i].classList.add('fade-in');
        textDesc[i].style.animationDuration = '.8s';
        text.append(textDesc[i]);
    }
    
    textDesc[0].textContent = 'We are passionate in bringing all the best flavors together to bewitch your taste buds. Nothing else will make us happier than the smile on your face.';
    textDesc[1].textContent = "We have traveled all around the world - including and especially John's place of birth - to bring to you all the flavors you will never be able to live your life without ever again. Such is the path we are forging before our feet.";
    textDesc[2].textContent = 'So come on in and enjoy flavors that will blow your mind. The only thing you have to lose is the time it takes to chew!';
    
    about.append(text);
    about.id = 'about-content';
    
    content.appendChild(about);
}