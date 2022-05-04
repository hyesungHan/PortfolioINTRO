const contactBtn = document.querySelector('#contact');
const idCard = document.querySelector('.id-card-area');
const contactInfo = document.querySelector('.contact-area');
contactBtn.onclick = function (){
    idCard.classList.toggle('move');
    contactInfo.classList.toggle('show');
}