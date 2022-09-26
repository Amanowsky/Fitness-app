const login_page = document.getElementById('login')
const content_page = document.getElementById('content')
const status = localStorage.getItem('status')
const time = localStorage.getItem('time')
const date = new Date()
const act_date = date.getTime();
const act_time = date.getTime();

function verify_time(status,time,act_time)
{
    if(!status) return 

    if(status == 'true' && (act_time - time) < 15000 ) 
    {
        return  login_page.style.display = 'none', content_page.style.display = 'block';
    }
}
verify_time(status,time,act_time);

    



