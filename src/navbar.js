const navbar =() => {
 const content= document.getElementById('content');
 const navbar = document.createElement('nav');
 navbar.setAttribute('id', 'topnav');
  for (let i = 0; i < 3; i += 1) {
    const link = document.createElement('A');
    link.setAttribute('id', `li ${i}`);
    navbar.appendChild(link);
  }
  const linksList = navbar.children;
  linksList[0].innerHTML = 'HOME  |';
  linksList[1].innerHTML = '  MENU  |';
  linksList[2].innerHTML = '  CONTACT US';

  content.append(navbar)
}
 export default navbar;