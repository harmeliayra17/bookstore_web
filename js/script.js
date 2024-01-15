//Toggle Class Active
const navbarNav = document.querySelector ('.navbar-nav');
//Ketika menu di klik
document.querySelector('#book-recomendation').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluaar sidebar
const menu =document.querySelector('#book-recomendation');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});