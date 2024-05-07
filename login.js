const loginBtn = document.querySelector('button');
const usernameInput = document.querySelector('.login-ac input');
const passwordInput = document.querySelector('.login-psw input');

loginBtn.addEventListener('click', () => {
const username = usernameInput.value;
const password = passwordInput.value;

if (username === 'a123' && password === '123123') {
    alert('登入成功！');
    
} else {
    alert('帳號或密碼錯誤，請重新輸入。');
}
});