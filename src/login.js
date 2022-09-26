const sub_btn = document.getElementById('submit-btn')
const loginbox = document.getElementById('loginbox')
const passwordbox = document.getElementById('passwordbox')
const bad_login = document.getElementById('bad_login')
const login_ok = document.getElementById('login_ok')
const login_page = document.getElementById('login')
const content_page = document.getElementById('content')

const axios = require('axios').default;

function getData(action)
{
    switch(action){
        case 'login':
        return loginbox.value
        case 'password':
        return passwordbox.value
    }
}
function loadPage()
{
    const date = new Date()
    const time = date.getTime();
    localStorage.clear();
    login_page.style.display = 'none';
    content_page.style.display = 'block';
    localStorage.setItem('status', 'true');
    localStorage.setItem('time',time);
}

async function checkAccount(login,password)
{
    axios.post('http://localhost:5000/verify',
    {
        login: login,
        password: password
    })
    .then(function(response){
        if(response.data['login_check'] == true && response.data['password_check'] == true){
            login_ok.textContent = "Zalogowano"
            loadPage()}
        else {
            bad_login.textContent = "Błędne dane logowania"
        }
        
    })
    .catch(function(error){
        console.log(error);
    })
}

sub_btn.addEventListener('click',function(){
    checkAccount(getData('login'),getData('password'));
})

