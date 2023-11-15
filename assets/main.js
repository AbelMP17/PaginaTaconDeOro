const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');

const menuFilterContent = document.getElementById('menuFilterContent');
const menuFilter = document.getElementById('menuFilter');


menuButton.addEventListener('click', () => {
  if (menuButton.style.display === 'block' || menuContent.style.display === 'flex') {
    menuContent.style.display = 'none';
  } else {
    menuContent.style.display = 'flex';
    menuContent.style.flexDirection = 'column';
    menuContent.style.justifyContent = 'center';
    menuContent.style.alignItems = 'center';
    menuContent.style.padding = '10px';
  }
});

menuFilter.addEventListener('click', () => {
  if (menuFilter.style.display === 'block' || menuFilterContent.style.display === 'flex') {
    menuFilterContent.style.display = 'none';
  } else {
    menuFilterContent.style.display = 'flex';
    menuFilterContent.style.flexDirection = 'column';
    menuFilterContent.style.justifyContent = 'center';
    menuFilterContent.style.alignItems = 'center';
    menuFilterContent.style.padding = '10px';

  }
})

document.addEventListener('scroll', () => {
  if (menuContent.style.display === 'flex') {
    menuContent.style.display = 'none';
  }

  if(menuFilterContent.style.display === 'flex') {
    menuFilterContent.style.display = 'none';
  }
});
