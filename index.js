window.addEventListener('load', function (){
    //-----AOS
    window.addEventListener("scroll",function(){
        navAnimate()    
    });
    //----booknow內頁
    const tabs = document.querySelectorAll('.tab_btn');
    console.log(tabs);
    for (let i = 0; i<tabs.length; i++){
        tabs[i].onclick =function () {
            let tag = Array.prototype.indexOf.call(tabs, this);
            const contents = document.querySelectorAll('.content_box .content');
            for(let i =0; i<contents.length; i++){
                contents[i].classList.remove('active',)
                tabs[i].classList.remove('highlight')
            }
            contents[tag].classList.add('active')
            tabs[tag].classList.add('highlight')
        }
    }
})



// header
function navAnimate(){
    let nav = document.querySelector('#nav');
    let mainNav = document.querySelectorAll('#main-nav a');
    let logo = document.getElementById('logo');

    if (scrollY > 0) {
        nav.style.backgroundColor = "white";
        for (let i = 0; i<mainNav.length; i++) {
            mainNav[i].style.color = "#222222";
        }
    } else {
        nav.style.backgroundColor = "rgba(0,0,0,0.5)";
        for (let i = 0; i<mainNav.length; i++) {
            mainNav[i].style.color = "white";
        }
    }
    if (scrollY>10){
        logo.src="./images/logo-green.png";
    }else {
        logo.src="./images/logo.png";
    }


}

