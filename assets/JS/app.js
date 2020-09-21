const showMenu = (toggleID,navID) => {
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)


    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction))