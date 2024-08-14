const loginBtn = document.querySelector('button');
const usernameInput = document.querySelector('.login-ac input');
const passwordInput = document.querySelector('.login-psw input');

if (localStorage.getItem('isLogin') === 'true') {
    window.location.href = 'index.html';
};

loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'a123' && password === '123123') {
        alert('登入成功！');

        //儲存localstorage資料
        localStorage.setItem('isLogin', 'true');
        console.log('isLogin');


        window.location.href = 'index.html';

    } else {
        alert('帳號或密碼錯誤，請重新輸入。');
    }
});

