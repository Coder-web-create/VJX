document.addEventListener('DOMContentLoaded',()=>{
    const from = document.getElementById('Form');
    const username  = document.getElementById('username');
    const password = document.getElementById('password');
    const userEr = document.getElementById('usererror');
    const passwEr = document.getElementById('passworderror');

    from.addEventListener('submit',function(event){
        event.preventDefault();

        const Username = username.value.trim();
        const Password = password.value.trim();
        

        clearError();

        const isValidUser = userVlaidation(Username);
        const isValidpassword = passwordValidation(Password);

        if(isValidUser && isValidpassword){
            alert('Login Sucessfully');
            window.location.href = 'GRE-02.html';
        }
        
    });
    function clearError(){
        userEr.textContent ='';
        passwEr.textContent = '';
    }

    function userVlaidation(Username){
        if(Username === ''){
            document.getElementById('usererror').textContent = 'Entre the username';
            return true;
        }
        else if(Username.length < 6 || Username.length > 10){
            document.getElementById('usererror').textContent = 'Invalid user name';
            return false;
        }
        else if(!/[A-Z]/.test(Username)){
            document.getElementById('usererror').textContent = 'Must contain atlest one uppercase letter';
            return false;
        }
        return true;
    }

    function passwordValidation(password){
        if(password ===''){
            document.getElementById('passworderror').textContent = 'Entre the password';
            return false;
        }
        else if(password.length < 6 || password.length > 10){
            document.getElementById('passworderror').textContent = 'Invalid password';
            return false;
        }
        else if(!/[A-Z]/.test(password)){
            document.getElementById('passworderror').textContent = 'Must contain atleast one Uppercase letter';
            return false;
        }
        else if(!/[a-z]/.test(password)){
            document.getElementById('passworderror').textContent = 'Must contain atleast one Lowercase letter';
            return false;
        }
        else if(!/[0-9]/.test(password)){
            document.getElementById('passworderror').textContent = 'Must contain the numerical values';
            return false;
        }

        return true;
    }
});
