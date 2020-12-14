import homepage from './landing-page';
import generateNav from './navbar';
import loadMenu from './menu';
import loadContact from './contact';


const handleListeners = () => {
  const menu = [...document.querySelectorAll('.main-menu__item')];
  const events = [homepage, loadMenu,loadContact];
  menu.forEach((element, index) => {
    element.addEventListener('click', () => {
      const container = document.getElementById('div-container');
      if (container) container.remove();
      events[index]();
    });
  });
};
generateNav();
homepage();
handleListeners();

