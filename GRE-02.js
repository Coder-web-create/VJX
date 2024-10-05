document.addEventListener('DOMContentLoaded',function(){
    const username = document.getElementById('username');
    const userEr = document.getElementById('user-error');
    const password = document.getElementById('password');
    const passEr = document.getElementById('password-error');

    username.addEventListener('input',function(){
        const User = username.value;
        let message = [];
        let re = /A-Z/;
        if(User.length < 5){
            message.push(' contain Atlest 5 charchtres');
        }
        if(!re.test(User)){
            message.push('Enter the vlaid username');
        }
        userEr.textContent = message.length > 0 ? 'user'+message.join(' ,' ): '';
        
    });

    password.addEventListener('input',function(){
        const password = password.value;
        let message = [];
        const re = /A-Z/;
        const string = String(password);
        if(password.length < 5){
            message.push('At least 5 charchter');
        }
        if(!re.test(string.toUpperCase())){
            message.push('Enter the vlaid password');
        }
        passEr.textContent = message.length > 0 ? 'Please enter'+message.join(' ,'):'';
    });
    document.getElementById('popup').addEventListener('submit',function(event){
        event.preventDefault()
        if(userEr === '' && passEr === ''){
            alert('Welcome to the coding world');
        }
        else{
            alert('Login falied');
        }
    })
    
})
