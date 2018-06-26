document.getElementById('check').onclick = function () {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    
    if (login == 'ivan' && password == '334455')
        alert('welcome')
    else if (login == 'alex' && password == '777')
        alert('welcome');
    else if (login == 'roma' && password == '2015')
        alert('welcome');
    else alert('Incorrect login or pass');
}