const wrapper = document.querySelector('.warpper');
const registerLink = document.querySelector('.login-relink');
const login = document.querySelector('.log-relink');
const buttonpopup = document.querySelector('.popup');
const icon = document.querySelector('.icon-close');
registerLink.onclick =() =>{
    wrapper.classList.add('active');
};
login.onclick = () =>{
    wrapper.classList.remove('active');
};
buttonpopup.onclick = () =>{
    wrapper.classList.add('active-btnpopup');
};
icon.onclick = () =>{
    wrapper.classList.remove('active-btnpopup');
    wrapper.classList.remove('active');
}

