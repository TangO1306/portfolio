import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Remove anchor

const url = document.querySelector(".anchor");

if(url){
    url.addEventListener("click", removeAnchor);
}

function removeAnchor() {
    setTimeout(() => {
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 5);
}

// Burger menu

let menuButton = document.querySelector(".btn--menu");
menuButton.addEventListener("click", toggleNavigation);
function toggleNavigation(){
    if(document.body.hasAttribute("data-menu")){
        document.body.removeAttribute("data-menu");
        menuButton.classList.remove("open");
        burger.timeScale(1.5);
        burger.reverse();
    }else{
        document.body.setAttribute("data-menu", true);
        menuButton.classList.add("open");
        burger.play().timeScale(1);
    }
}

// Menu height

const mainMenu = document.querySelector(".menu__main");
const moreMenu = document.querySelector(".menu__more");
window.addEventListener("resize", menuHeight);

function menuHeight(){
  moreMenu.style.height = (mainMenu.offsetHeight + 24) + "px";
}

menuHeight();

// Nav

let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 900){
    header.classList.add("header--bg");
  }else{
    header.classList.remove("header--bg");
  }
});

// Copyright

let annee = (new Date).getFullYear(),
date = document.querySelector(".copyright span");
date.innerHTML = "©"+annee;

// Parallax

let parallaxs = document.querySelectorAll(".parallax");

parallaxs.forEach( parallax => {
  gsap.fromTo(parallax, {
    backgroundPosition: "50% 100%"
  },
  {
    scrollTrigger: {
      trigger: parallax,
      start: "top bottom",
      scrub: .2,
    },
    backgroundPosition: "50% 0%",
    ease: "none"
  });
})

// Lines

let lines = document.querySelectorAll(".line");

lines.forEach( line => {
  gsap.fromTo(line, {
    height: "0%",
  },
  {
    scrollTrigger: {
      trigger: line,
      start: "top 50%",
    },
    height: "100%",
    duration: .8,
    ease: "none"
  });
})

// Cursor

const cursorOpen = document.querySelector(".cursor--open");
const open = document.querySelectorAll(".open");
const cursorDrag = document.querySelector(".cursor--drag");
const drag = document.querySelectorAll(".drag");
const cursorEmail = document.querySelector(".cursor--email");
const email = document.querySelectorAll(".email");

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
  slidesPerView: 1,
  breakpoints: {
    650: {
      slidesPerView: 1.5,
    },
    1300: {
      slidesPerView: 2.5,
    }
  }
});

// Anim burger

const burger = gsap.timeline({ paused: true });

burger.set(".menu__more, .menu__main", {
  y: "-100%",
  ease: "expo.easeOut"
})

burger.to(".menu__more", {
  y: "0",
  duration: .6
})

burger.to(".menu__main", {
  y: "0",
  duration: .6,
  delay: -.4
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

// Services

gsap.to(".services:nth-child(1)", {
  x: "-10%",
  ease: "none",
  scrollTrigger:{
    trigger: ".section--services",
    start: "top bottom",
    scrub: true
  }
})

gsap.to(".services:nth-child(2)", {
  x: "5%",
  ease: "none",
  scrollTrigger:{
    trigger: ".section--services",
    start: "top bottom",
    scrub: true
  }
})

gsap.to(".services:nth-child(3)", {
  x: "-20%",
  ease: "none",
  scrollTrigger:{
    trigger: ".section--services",
    start: "top bottom",
    scrub: true
  }
})

gsap.to(".services:nth-child(4)", {
  x: "15%",
  ease: "none",
  scrollTrigger:{
    trigger: ".section--services",
    start: "top bottom",
    scrub: true
  }
})

// Title

gsap.set(".hidden span", {
  y: "100%",
})

gsap.to(".hidden span", {
  ease: "expo.out",
  y: "0%",
  stagger: .2,
  duration: 2.4,
  delay: .8,
  scrollTrigger: {
    trigger:".hidden span",
  }
})

// Fade background

gsap.to(".intro--home", {
  ease: "none",
  opacity: 0,
  scrollTrigger:{
    trigger: ".intro--home",
    scrub: true,
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom 10%"
  }
})