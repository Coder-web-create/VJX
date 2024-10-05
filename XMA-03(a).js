document.addEventListener('DOMContentLoaded',() =>{
    const form  = document.getElementById('form1');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const er2 = document.getElementById('passworderror');
    const er3 = document.getElementById('emailerror');

    form.addEventListener('submit',function(event){
        event.preventDefault();


        const Password = password.value.trim();
        const Email = email.value.trim();
        clrEr();


        const isValidPassword = ValidPassword(Password);
        const isvlaidEmail = mailValidation(Email);
        if(isValidPassword && isvlaidEmail){
            alert('Sucess!');
        }
    })

    function clrEr(){
        er2.textContent ='';
        er3.textContent ='';
    }



    function ValidPassword(Password){
        if(Password == ''){
            document.getElementById('passworderror').textContent = 'Entre the password ';
            return false;
        }
        else if(Password.length < 6 || Password.length > 10){
            document.getElementById('passworderror').textContent = 'Invalid password';
            return false;
        }
        else if(!/[0-9]/.test(Password)){
            document.getElementById('passworderror').textContent = 'Must contain atleast one Numerical Value';
            return false;
        }
        else if(!/[A-Z]/.test(Password)){
            document.getElementById('passworderror').textContent = 'Must contain atleast one upperCase letter';
            return false;
        }
        else if(!/[a-z]/.test(Password)){
            document.getElementById('passworderror').textContent = 'Must contain atleast one lowerCase letter';
            return false;
        }
        return true;
    }

    function mailValidation(Email){
        if(Email === ''){
            document.getElementById('emailerror').textContent = 'Entre the email address';
            return false;
        }
        else if(!Em(Email)){
            document.getElementById('emailerror').textContent='Missing char "@"';
            return false;
        }
        return true;
    }

    function Em(){
        if(Em.length === 0){
            return false;
        }
        var emailVaid = /@/.test(Em);
        return emailVaid;
    }

});