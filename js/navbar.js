
  const hamburger = document.querySelector(".hamburger");
  const sidenav = document.getElementById("mobile-sidenav");
  const closebtn = document.querySelector(".sidenav .closebtn");

  hamburger.addEventListener("click", () => {
    sidenav.style.width = "250px";
  });

  closebtn.addEventListener("click", () => {
    sidenav.style.width = "0";
  });

  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".custom-navbar");
  
    function toggleShadow() {
      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  
    toggleShadow();                
    window.addEventListener("scroll", toggleShadow);
  });
  