document.addEventListener('DOMContentLoaded',()=>{
    const from = document.getElementById('Form');
    const username = document.getElementById('user');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const UserEr =document.getElementById('usererror');
    const passEr = document.getElementById('passworderror');

    from.addEventListener('submit',function(event){
        event.preventDefault();

        checkError();
        const User = username.value.trim();
        const pass = password.value.trim();
        const Email = email.value.trim();

        const isValidUser = userValidation(User);
        const isValidPassword = passwordValidation(pass);
        const isvlaidEmail = emailValidation(Email);
        if(isValidUser && isValidPassword && isvlaidEmail){
            alert('Login sucessfully');
            window.location.reload();
        }
    });
    function checkError(){
        UserEr.textContent = '';
        passEr.textContent  = '';
    }
    function userValidation(User){
        if(User === ''){
            document.getElementById('usererror').textContent='Entre the user name for login';
            return false;
        }
        else if(User.length < 6 || User.length > 10){
            document.getElementById('usererror').textContent ='This must contain 6-10 letters';
              return false;
        }
        else if(!isFirstChar(User)){
            document.getElementById('usererror').textContent = 'Must be an Uppercase charchters';
            return false;
        }
        else if(!/[a-z]/.test(User)){
            document.getElementById('usererror').textContent='Must contain one Lowercase letter';
            return false;
        }
        return true;
    }

    function isFirstChar(str){
        if(str.length === 0){
            return false;
        }

        var firstChar = str.charAt(0);
        return firstChar >= 'A' && firstChar <= 'Z';
    }
    function passwordValidation(pass){
        if(pass === ''){
            document.getElementById('passworderror').textContent = 'Entre the password';
            return false;
        }
        else if(pass.length  < 6 || pass.length > 10){
            document.getElementById('passworderror').textContent = 'This must contain 6 letter';
            return false;
        }
        else if(!/[0-9]/.test(pass)){
            document.getElementById('passworderror').textContent='Contain atlest one numerical value';
            return false;
        }
        else if(!/[A-Z]/.test(pass)){
            document.getElementById('passworderror').textContent='Contain atleast one Uppercase letter';
            return false;
        }
        else if(!/[a-z]/.test(pass)){
            document.getElementById('passworderror').textContent='Contain atleast one Lowercase letter';
            return false;
        }
        else if(!/@#!&[0-9]{}$<>/.test(pass)){
            document.getElementById('passworderror').textContent = 'Contain atleast one special charachters';
            return false;
        }
        return true;
    }
    function emailValidation(Email){
        if(Email === ''){
            document.getElementById('emailerror').textContent = 'Enter the email address';
            return false;
        }
        else{
            if(!isValidatioTrue(Email)){
                document.getElementById('emailerror').textContent = 'Invalid email address';
                return false; 
            }
        }
        return true;
    }

    function isValidatioTrue(str2){
        if(str2 === 0){
            return false;
        }

        var emialValid = /@/.test(str2);
        return emialValid;
    }

});

