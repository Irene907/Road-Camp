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
            mainNav[i].style.color = "white";
        }
    }
    if (scrollY>100){
        logo.src="./images/logo-green.png";
    }else {logo.src="./images/logo.png";}
    
});
