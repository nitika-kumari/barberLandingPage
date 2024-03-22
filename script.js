let menuBtn = document.querySelector('.menuBtn');
let sideNav = document.querySelector('.side-nav');
let menu = document.querySelector('#menu');

menuBtn.addEventListener('click',()=>{
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = '0';
        menu.src = "Barber_Shop_img/close.png";
    }else{
        sideNav.style.right = '-250px';
        menu.src = "Barber_Shop_img/menu.png";
    }

})