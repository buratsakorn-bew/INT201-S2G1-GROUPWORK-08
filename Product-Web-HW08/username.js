let username = document.getElementById('username');
let button = document.getElementById('change');

login();

function login(){
    if(localStorage.getItem('username') == null || localStorage.getItem('username') == 'null'){
        console.log('Hello Guest');
        setName();
        button.innerHTML = 'Login';
    }else
        console.log('Hello' + localStorage.getItem('username'));
        username.innerHTML = localStorage.getItem('username');
        button.innerHTML = 'Logout';
}

function setName(){
    let name = prompt('Enter your name');
    if(localStorage.getItem('username') == null ){
        localStorage.setItem('username', 'Guest');
        button.innerHTML = 'Login';
    }else{
        localStorage.setItem('username',name);
        username.innerHTML = name;
        button.innerHTML = 'Logout';
    }
}

button.addEventListener('click', ()=>{
    if((button.innerHTML == 'Logout')){
        button.innerHTML = 'Login';
        localStorage.setItem('username', 'Guest');
        username.innerHTML = 'Guest'
        console.log('Hi');
    }else{
        button.innerHTML == 'Logout';
        setName();
    }
})

if(localStorage.getItem('username') == 'Guest'){
    button.innerHTML = 'Login';
}

if(localStorage.getItem('username') == null || localStorage.getItem('username') == 'null'){
    username.innerHTML = 'Guest'
    button.innerHTML = 'Login';
}