
  const hamburger = document.querySelector(".hamburger");
  const sidenav = document.getElementById("mobile-sidenav");
  const closebtn = document.querySelector(".sidenav .closebtn");

  hamburger.addEventListener("click", () => {
    sidenav.style.width = "250px";
  });

  closebtn.addEventListener("click", () => {
    sidenav.style.width = "0";
  });
