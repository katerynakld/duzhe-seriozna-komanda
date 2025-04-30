// Open a side menu

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

// Show more nbutton functionality
const showMoreBtn = document.querySelector('.show-more-btn');
const hiddenItems = document.querySelectorAll('.catalog-item.hidden');

// Toggle function
function toggleCatalogItems() {
  let isNowHidden = false;

  hiddenItems.forEach(item => {
    // Toggle the hidden class
    item.classList.toggle('hidden');

    // Check if item is now hidden
    if (item.classList.contains('hidden')) {
      isNowHidden = true;
    }
  });

  // Change button text based on the current state
  showMoreBtn.textContent = isNowHidden ? 'Show more' : 'Hide';
}

showMoreBtn.addEventListener('click', toggleCatalogItems);
