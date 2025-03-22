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

  function scrollToHome() {
    const headerElement = document.querySelector('#home');
    const topBanner = document.querySelector('#topBanner');
    const topBannerHeight = topBanner.offsetHeight;
    const offset = topBannerHeight + 30;

    const topPosition = headerElement.getBoundingClientRect().top + window.pageYOffset;
    const finalOffset = topPosition - offset;

    window.scrollTo({ top: finalOffset, behavior: 'smooth' });
  }

  function scrollToInfo() {
    const headerElement = document.querySelector('#info');
    const topBanner = document.querySelector('#topBanner');
    const topBannerHeight = topBanner.offsetHeight;
    const offset = topBannerHeight + 20;

    const topPosition = headerElement.getBoundingClientRect().top + window.pageYOffset;
    const finalOffset = topPosition - offset;

    window.scrollTo({ top: finalOffset, behavior: 'smooth' });
  }

  function scrollToTech() {
    const headerElement = document.querySelector('#tech');
    const topBanner = document.querySelector('#topBanner');
    const topBannerHeight = topBanner.offsetHeight;
    const offset = topBannerHeight + 20;

    const topPosition = headerElement.getBoundingClientRect().top + window.pageYOffset;
    const finalOffset = topPosition - offset;

    window.scrollTo({ top: finalOffset, behavior: 'smooth' });
  }

  function scrollToCertifications() {
    const headerElement = document.querySelector('#certifications');
    const topBanner = document.querySelector('#topBanner');
    const topBannerHeight = topBanner.offsetHeight;
    const offset = topBannerHeight + 20;

    const topPosition = headerElement.getBoundingClientRect().top + window.pageYOffset;
    const finalOffset = topPosition - offset;

    window.scrollTo({ top: finalOffset, behavior: 'smooth' });
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