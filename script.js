let isDarkMode = false;

document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
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

  function updateTheme() {
    let themeBtn = document.querySelector("#themeBtn");
    let bottomImage = document.querySelector("#btmImg");
    bottomImage.src = isDarkMode ? "images/owl.png" : "images/dog.png";
    themeBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

    document.body.classList.toggle("night-mode", isDarkMode);
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateTheme();
  }