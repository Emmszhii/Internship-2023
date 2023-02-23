const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav");
const hmServices = document.querySelector('.hm-services');
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});



// const header = document.querySelector('.header');

// const servicesObserver = () =>{
//   const option = {
//     root: null,
//     rootMargin: '20px',
//     threshold: 1.0
//   }
  
//   const cb = (entry) =>{
//     entry.map(element => {
//       if(element.isIntersecting){
//         header.style.backgroundColor = '#ffffff'
//       }else{
//         header.style.backgroundColor = '#2b2b2b'
//       }
//     });
//   }
  
//   const observer = new IntersectionObserver(cb, option);
//   observer.observe(hmServices);
// }

// window.addEventListener('DOMContentLoaded', ()=>{
//   servicesObserver();
// });