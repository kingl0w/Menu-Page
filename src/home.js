import chefImg from '../assets/aboutbackground2.jpg';

function createAbout() {
  const about = document.createElement('section');
  about.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = 'About';

  about.appendChild(title);

  const paragraph = document.createElement('p');
  paragraph.classList.add('section-description');
  paragraph.textContent =
    'Mellow World is a captivating world fusion restaurant that takes diners on a global culinary journey through its eclectic and harmonious menu. Combining flavors, techniques, and ingredients from diverse cultures, Mellow World offers a unique and immersive dining experience that delights the senses. Whether savoring Thai-inspired tacos or indulging in Mediterranean-infused sushi rolls, patrons are treated to a symphony of tastes that celebrate the beauty of culinary fusion.';

  const chefContainer = document.createElement('div');
  chefContainer.classList.add('chef-container');

  const chefImgEl = document.createElement('img');
  chefImgEl.classList.add('chef-img');
  chefImgEl.src = chefImg;
  chefImgEl.alt = 'chef preparing food';
  chefImgEl.title = 'Chef';

  chefContainer.appendChild(chefImgEl);
  about.appendChild(chefContainer)
  about.appendChild(paragraph);
  return about;
}

function activateBtn(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const home = document.getElementById(id);
  home.classList.add('active');
}

export default function loadHome() {
  const content = document.getElementById('main-content');
  content.classList.add('flex-layout');
  content.classList.remove('grid-layout');

  content.textContent = '';

  const aboutSection = createAbout();

  activateBtn('home');

  content.appendChild(aboutSection);
}
