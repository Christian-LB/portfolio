let isDarkMode = false;
let vantaEffect = null;

function toggleDropdown() {
  var dropdown = document.getElementById("dropdownMenu");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

document.addEventListener("click", function (event) {
  var dropdown = document.getElementById("dropdownMenu");
  var menuIcon = document.querySelector(".menu-icon");

  if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

function initVanta() {
  if (vantaEffect) vantaEffect.destroy();

  vantaEffect = VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: isDarkMode ? 0x3d3d3d : 0x6785ac,
    shininess: 79.00,
    waveHeight: 14.50,
    waveSpeed: 1.15,
    zoom: 0.65
  });
}

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
  let bottomImage = document.querySelector("#btmImg");
  let themeImage = document.querySelector(".themeImg");
  themeImage.src = isDarkMode ? "images/ic_sun.gif" : "images/ic_moon.gif";

  document.body.classList.toggle("night-mode", isDarkMode);
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  updateTheme();

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  initVanta();
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode = true;
  }
  updateTheme();
  initVanta();
});