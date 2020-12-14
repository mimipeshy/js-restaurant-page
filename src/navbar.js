const content = document.getElementById('content');
function generateNav  () {
  content.innerHTML = '';
  const nav = document.getElementById('nav');
  const ul = document.createElement('ul');
  ul.classList.add('main-menu');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.classList.add('main-menu__item');
    switch (i) {
      case 0:
        li.textContent = 'HOME';
        break;
      case 1:
        li.textContent = 'MENU';
        break;
      case 2:
        li.textContent = 'CONTACT';
        break;
      default:
        break;
    }
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);
  nav.appendChild(ul);
  
};

export default generateNav;