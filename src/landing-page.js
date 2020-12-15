import image1 from './images/img.jpg';

const content = document.getElementById('content');
function homepage() {
  content.innerHTML = '';

  const divContainer = document.createElement('div');
  divContainer.setAttribute('id', 'container');

  // image section
  const e = document.createElement('img');
  e.src = image1;
  content.append(e);

  // main title
  const div = document.createElement('h1');
  div.id = 'container';
  div.innerHTML = 'Welcome to simple restaurant';
  content.append(div);

  // subtitle
  const para1 = document.createElement('p');
  para1.innerHTML = 'Cras elementum rhoncus rhoncus. Vestibulum sodales ante sed justo laoreet, quis luctus nisi malesuada. Integer consectetur nulla elit. onsequat';
  content.append(para1);
}

export default homepage;