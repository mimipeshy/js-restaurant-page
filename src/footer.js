const footer = document.createElement('div');
footer.setAttribute('id', 'footer');
function loadFooter() {
  const note = document.createElement('P');
  note.innerHTML = 'Note: The Simple Restaurant is open every day from 10:00AM to midnight';
  const copyright = document.createElement('P');
  copyright.innerHTML = '&copy; Peris Ndanu, 2020, github:mimipeshy';
  footer.appendChild(note).appendChild(copyright);
  return footer;
}

export default loadFooter;