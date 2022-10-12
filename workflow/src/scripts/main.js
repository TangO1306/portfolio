import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Burger menu

let menuButton = document.querySelector(".btn--menu");
menuButton.addEventListener("click", toggleNavigation);
function toggleNavigation(){
    if(document.body.hasAttribute("data-menu")){
        document.body.removeAttribute("data-menu");
        menuButton.classList.remove("open");
    }else{
        document.body.setAttribute("data-menu", true);
        menuButton.classList.add("open");
    }
}

// Menu height

const mainMenu = document.querySelector(".menu__main");
const moreMenu = document.querySelector(".menu__more");
mainMenu.addEventListener("resize", menuHeight);

function menuHeight(){
  moreMenu.style.height = (mainMenu.offsetHeight + 24) + "px";
}

menuHeight();

// Nav

/*let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 900){
    header.classList.add("header--bg");
  }else{
    header.classList.remove("header--bg");
  }
});*/

// Copyright

let annee = (new Date).getFullYear(),
date = document.querySelector(".copyright span");
date.innerHTML = "Tanguy Hellin ©"+annee;

// Parallax

gsap.fromTo(".parallax", { 
    backgroundPosition: "50% 0%"
  },
  {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax",
      start: "top bottom",
      scrub: true
  }
});

// Cursor

const cursorOpen = document.querySelector(".cursor--open");
const open = document.querySelectorAll(".open");
const cursorDrag = document.querySelector(".cursor--drag");
const drag = document.querySelectorAll(".drag");
const cursorEmail = document.querySelector(".cursor--email");
const email = document.querySelectorAll(".title--extralarge");

window.addEventListener("mousemove", (e) => {
  let y = e.pageY;
  let x = e.pageX;

  gsap.to(".cursors", {
      x: x,
      y: y
  });
})

drag.forEach(el => {
  el.addEventListener('mouseenter', () => {
      cursorDrag.classList.add('active--drag');
  });

  el.addEventListener('mouseleave', () => {
      cursorDrag.classList.remove('active--drag');
  })
})

open.forEach(el => {
  el.addEventListener('mouseenter', () => {
      cursorOpen.classList.add('active--open');
  });

  el.addEventListener('mouseleave', () => {
      cursorOpen.classList.remove('active--open');
  })
})

email.forEach(el => {
  el.addEventListener('mouseenter', () => {
      cursorEmail.classList.add('active--email');
  });

  el.addEventListener('mouseleave', () => {
      cursorEmail.classList.remove('active--email');
  })
})

// Swiper

const swiper = new Swiper(".swiper", {
  freeMode: true,
  grabCursor: true,
  slidesPerView: 2.5
});

// Anim burger

/*const burger = gsap.timeline()

burger.to('.menu-link', {
  yPercent:100,
  duration: 0.5,
})

burger.to('.menu-overlay', {
  width: 0
}).progress(1)



menuButton.addEventListener('click', () => {
  burger.reversed(!burger.reversed());
})*/

const burger = gsap.timeline();

burger.set(".menu__more, .menu__main", {
  y: "-100%",
  ease: "expo.easeOut"
})

burger.to(".menu__more", {
  y: "0",
  duration: 1
})

burger.to(".menu__main", {
  yPercent: 0,
  duration: 1,
  delay: .3
})

menuButton.addEventListener("click", () => {
  burger.play();
})

// Tasks

const tasks = gsap.timeline({
  repeat: -1,
  ease: "expo.easeOut",
})

tasks.set(".tasks__element",{
  yPercent: 0,
  delay: 1.6
})

tasks.to(".tasks__element",{
  yPercent: -100,
  duration: .3,
  delay: .5
})

tasks.to(".tasks__element",{
  yPercent: -200,
  duration: .3,
  delay: .5
})

tasks.to(".tasks__element",{
  yPercent: -300,
  duration: .3,
  delay: .5
})

tasks.to(".tasks__element",{
  yPercent: -400,
  duration: .3,
  delay: .5
})