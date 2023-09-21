import load from "./initpage";
import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

init();

function navEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
    
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}

function init() {
    load();
    loadHome();
    navEvents();
}