import './styles.css';
import templates from './templates/menu.hbs';
import menu from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const markup = templates(menu);
const menuItems = document.querySelector('.js-menu');
const switchTheme = document.querySelector('.theme-switch__toggle');

menuItems.insertAdjacentHTML('beforeend', markup);
switchTheme.addEventListener('change', themeChangeHandler);

function themeChangeHandler(event) {
 if(switchTheme.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
 } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
 }
}
function saveLocalStorage() {
    if(localStorage.getItem('theme') === Theme.DARK){
        document.body.classList.toggle(Theme.DARK);
        switchTheme.checked = true;
    } else {
        document.body.classList.toggle(Theme.LIGHT);
        switchTheme.checked = false;
    }
}

saveLocalStorage();