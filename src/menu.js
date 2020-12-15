const content = document.getElementById('content');
function loadMenu() {
  content.innerHTML = '';
  const menu = document.createElement('UL');
  menu.setAttribute('id', 'menu');
  for (let i = 0; i < 10; i += 1) {
    const pizza = document.createElement('li');
    pizza.setAttribute('id', `pizza ${i}`);
    menu.appendChild(pizza);
  }
  const menuList = menu.children;
  menuList[0].innerHTML = 'UGALI AND KUKU CHOMA => KES 300';
  menuList[1].innerHTML = 'FRIES AND CHICKEN => KES 400';
  menuList[2].innerHTML = 'BHAJIA => KES 80';
  menuList[3].innerHTML = 'CHAPATI => KES 20';
  menuList[4].innerHTML = 'PILAU NA KUKU => KES 250';
  menuList[5].innerHTML = 'SAMOSAS => KES 40';
  menuList[6].innerHTML = 'MATOKE WITH BEEF => KES 300';
  menuList[7].innerHTML = 'RICE AND MUTTON => KES 300';
  menuList[8].innerHTML = 'AVOCADO => KES 60';
  menuList[9].innerHTML = 'MASHED POTATOES AND CHICKEN => KES 350';
  content.appendChild(menu);
  return content;
}
export default loadMenu;
