const menuIcon = document.querySelector('.ham-menu>img');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', ()=>{
    if (menu.style.right == "-20%" && menuIcon.style.transform == "rotateY(180deg)") {
        menu.style.right = "-100%";
        menuIcon.style.transform = "rotateY(0deg)";
    } else {
        menu.style.right = "-20%";
        menuIcon.style.transform = "rotateY(180deg)";
    }
});