let isDarkMode = false;

document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

  function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } 

    else {
      dropdown.style.display = "block";
    }
  }

  document.addEventListener("click", function(event) {
      var dropdown = document.getElementById("dropdownMenu");
      var menuIcon = document.querySelector(".menu-icon");
      
      if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.style.display = "none";
        }
    });

    function moveToHome() {
      window.location.href = 'index.html';
    }
    
    function moveToInfo() {
      window.location.href = 'aboutme.html';
    }
    
    function moveToTech() {
      window.location.href = 'tech.html';
    }
    
    function moveToCertifications() {
      window.location.href = 'cert.html';
    }

  function updateTheme() {
    let themeBtn = document.querySelector("#themeBtn");
    let bottomImage = document.querySelector("#btmImg");
    let themeImage = document.querySelector(".themeImg");
    bottomImage.src = isDarkMode ? "images/owl.png" : "images/dog.png";
    themeImage.src = isDarkMode ? "images/ic_sun.gif" : "images/ic_moon.gif";

    document.body.classList.toggle("night-mode", isDarkMode);
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateTheme();
  }

  if (window.location.pathname === '/cert.html' || window.location.href.includes('cert.html')) {
  
    const style = document.createElement('style');
    document.body.classList.add('no-fixed');
  }

  if ((window.matchMedia("(max-width: 450px)").matches && window.matchMedia("(max-height: 900px)").matches) && (window.location.pathname === '/aboutme.html' || window.location.href.includes('aboutme.html'))) {
    document.body.classList.add('no-fixed');
  }

  if ((window.matchMedia("(max-width: 450px)").matches && window.matchMedia("(max-height: 900px)").matches) && (window.location.pathname === '/tech.html' || window.location.href.includes('tech.html'))) {
    document.body.classList.add('no-fixed');
  }