// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

// Name Navbar (Typed) Animation
let animate= new Typed('#ani',{
    strings:["Front End Developer", "UI/UX Designer", "UI Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
})

// SCROLL REVEAL
const revealElements = document.querySelectorAll("[data-reveal]");
const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}
window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);

// Bottom To Top Scroll
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Preloader
window.onload = function(){
  document.getElementById("preload_container").style.display = "none";
  document.getElementById("content").style.display = "block";
}
$(window).load(function(){
  $('#preload_container').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
}),15000;