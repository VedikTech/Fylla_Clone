document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".links");
    let menuIcon = document.querySelector(".fa-bars");
    let closeIcon = document.querySelector(".fa-xmark");
   
    
    menuIcon.addEventListener("click", function () {
      menu.classList.add("links2");
      menuIcon.style.display = "none"; // Hide bars icon
      closeIcon.style.display = "block"; // Show close icon
    });
  
    closeIcon.addEventListener("click", function () {
      menu.classList.remove("links2");
      menuIcon.style.display = "block"; // Show bars icon
      closeIcon.style.display = "none"; // Hide close icon
    });

   
  });
  