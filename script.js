const menuIcon = document.querySelector('.ham-menu>img');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', ()=>{
    if (menu.style.right == "0%" && menuIcon.style.transform == "rotateY(180deg)") {
        menu.style.right = "-100%";
        menuIcon.style.transform = "rotateY(0deg)";
    } else {
        menu.style.right = "0%";
        menuIcon.style.transform = "rotateY(180deg)";
    }
});

const zooHead = document.querySelector('.secondSec>.zooHead');
const zooHeading = document.querySelector('.secondSec>.zooHead>h1');
const zooDetail = document.querySelector('.zooDetail');
const zooBuyBtn = document.querySelector('.secondSec>.zooHead>a');

const museumHead = document.querySelector('.secondSec>.museumHead');
const museumHeading = document.querySelector('.secondSec>.museumHead>h1');
const museumDetail = document.querySelector('.museumDetail');
const museumBuyBtn = document.querySelector('.secondSec>.museumHead>a');


zooHeading.addEventListener('click', ()=>{
    if (zooHeading.style.top == "10%" && zooHeading.style.left == "50%" && zooHeading.style.fontSize == "2rem" && zooDetail.style.opacity == "1" && zooBuyBtn.style.opacity == "1" && zooBuyBtn.style.pointerEvents == "all") {
        zooHeading.style.top = "50%";
        zooHeading.style.left = "50%";
        zooHeading.style.fontSize = "3rem";
        zooDetail.style.opacity = "0";
        zooBuyBtn.style.opacity = "0";
        zooBuyBtn.style.pointerEvents = "none";
    } else {
        zooHeading.style.top = "10%";
        zooHeading.style.left = "50%";
        zooHeading.style.fontSize = "2rem";
        zooDetail.style.opacity = "1";
        zooBuyBtn.style.opacity = "1";
        zooBuyBtn.style.pointerEvents = "all";
    }
});

museumHeading.addEventListener('click', ()=>{
    if (museumHeading.style.top == "10%" && museumHeading.style.left == "50%" && museumHeading.style.fontSize == "2rem" && museumDetail.style.opacity == "1" && museumBuyBtn.style.opacity == "1" && museumBuyBtn.style.pointerEvents == "all") {
        museumHeading.style.top = "50%";
        museumHeading.style.left = "50%";
        museumHeading.style.fontSize = "3rem";
        museumDetail.style.opacity = "0";
        museumBuyBtn.style.opacity = "0";
        museumBuyBtn.style.pointerEvents = "none";
    } else {
        museumHeading.style.top = "10%";
        museumHeading.style.left = "50%";
        museumHeading.style.fontSize = "2rem";
        museumDetail.style.opacity = "1";
        museumBuyBtn.style.opacity = "1";
        museumBuyBtn.style.pointerEvents = "all";
    }
});

