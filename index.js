// header
window.addEventListener("scroll",function(){
    let nav = document.querySelector('#nav');
    let mainNav = document.querySelectorAll('#main-nav a');
    let logo = document.getElementById('logo');
    
    if (scrollY > 0) {
        nav.style.backgroundColor = "white";
        for (let i = 0; i<mainNav.length; i++) {
            mainNav[i].style.color = "#222222";
        }
    } else {
        nav.style.backgroundColor = "rgba(0,0,0,0)";
        for (let i = 0; i<mainNav.length; i++) {
            mainNav[i].style.color = "222222";
        }
    }
    if (scrollY>100){
        logo.src="./images/logo-green.png";
    }else {logo.src="./images/logo.png";}
    
});

//booknow內頁

const tabs = document.querySelectorAll('.tab_box button');
const contents = document.querySelectorAll('.content_box .content');

// 預設顯示第一個內容
// contents[0].classList.add('active');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach(content => {
            content.classList.remove('active');
        });
        contents[index].classList.add('active');
    });
});