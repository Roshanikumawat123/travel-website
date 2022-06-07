let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelector('.navbar');


window.onscroll=()=>{
searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');
}
menu.addEventListener('click',()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});
videoBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
    $('.controls .active').remove('active');
  });  
});

var swiper=new Swiper(".review-slider",{
  spaceBetween: 20,
  loop:true,
  autoplay:{
    delay: 2500,
    disableonInteraction: false,
  },
  breakpoints:{
    640:{
      slidesPerview:1,
    },
    768:{
      slidesPerview:2,
    },
    1024:{
      slidesPerview:3,
    },
  },
});
var swiper=new swiper(".brand-slider",{
  spaceBetween:20,
  loop:true,
  autoplay:{
    delay:2500,
    disableonInteraction:false,


    },
    breakpoints:{
      450:{
        slidesPerview:2,
      },
      768:{
        slidesPerview:3,
      },
      991:{
        slidesPerview:4,
      },
      1200:{
        slidesPerview:5;
      },
    },
  
});