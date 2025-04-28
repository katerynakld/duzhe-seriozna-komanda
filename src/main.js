const burgerBtn = document.querySelector('.burger-btn');
const sideMenu = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-button');

function openSideMenu() {
  sideMenu.classList.add('is-open');
}

function closeSideMenu() {
  sideMenu.classList.remove('is-open');
}

burgerBtn.addEventListener('click', openSideMenu);
closeBtn.addEventListener('click', closeSideMenu);
