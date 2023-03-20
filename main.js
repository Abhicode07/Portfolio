const hambuger = document.querySelector('.hambuger');

const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');

  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hambuger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projects = [
  {
    id: 1,
    name: 'Food Hunt',
    subheader1: 'UI/UX',
    description:
      'A Food Hunt named website web design by using UI/UX on Figma ',
    image: 'images/work-image-5.png',
    imageDesktop: '../images/Snapshoot Portfolio(6).png',
    technologies: ['Figma', 'Ux', 'Ui'],

  },
  {
    id: 2,
    name: 'Redux',
    subheader1: 'Website',
    description:
      'Redux is the website for computer science aspirational students from colleges and schools which helps them to find the events updates, jobs/internships opportunities, courses updates and etc',
    image: 'images/work-image-6.png',
    technologies: ['html', 'css', 'JavaScript', 'github'],
    link: 'https://abhicode07.github.io/Redux-Webpage/',
    source: 'https://abhicode07.github.io/Redux-Webpage/',
  },
  {
    id: 3,
    name: 'Computer Networking',
    subheader1: 'Certification',
    description:
      ' This course is about a full overview of computer networking. I have covered everything from the fundamentals of modern networking technologies and protocols to an overview of the cloud to practical applications and network troubleshooting. ',
    image: 'images/work-image-7.png',
    technologies: ['Bits By Bytes'],
    link: 'https://drive.google.com/file/d/1EP9TJuzeSosuYNiwQbsjART4HI2haa4C/view?usp=sharing',
    source: 'https://drive.google.com/file/d/1EP9TJuzeSosuYNiwQbsjART4HI2haa4C/view?usp=sharing',
  },
  {
    id: 4,
    name: 'FOSSASIA by MICROSOFT',
    subheader1: 'Certification',
    description:
      'Cetification of completion by the event by Microsoft by Fossasia CLoud Skills Challenge is about the .',
    image: 'images/work-image-8.png',
    technologies: ['Cloud Skills Challenge'],
    link: 'https://drive.google.com/file/d/19D5uEE1WuUPm7ftEdHmrOpFLwLQzHo1h/view?usp=sharing',
    source: 'https://drive.google.com/file/d/19D5uEE1WuUPm7ftEdHmrOpFLwLQzHo1h/view?usp=sharing',
  },
];

const onModalOpen = async (id) => {
  const getData = await projects.find((project) => project.id === id);

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'block';
  document.getElementById('modal-title').innerHTML = getData.name;
  document.getElementById('modal-desc').innerHTML = getData.description;
  document.getElementById('modal-img').src = getData.image;
  document.getElementById('modal-seelive').src = getData.link;
  document.getElementById('modal-seesource').src = getData.source;

  document.getElementById('group-list').innerHTML = getData.technologies
    .map((tech) => `<li class="stack">${tech}</li>`)
    .join('');
};

const p = onModalOpen;

const onModalClose = () => {
  const modal = document.querySelector('.modal-container');
  modal.style.display = 'none';
};
onModalClose(p);

window.addEventListener('DOMContentLoaded', () => {
  const displayCards = projects.map(
    (project) => `
      <div id=${project.id} >
        <div class="work-info1">
            <div class="image-container">
              <img
                src=${project.image}
                alt="multi-post work content2"
                class="pic-temp1"
              />
            </div>
            <div class="content1">
              <h3 class="tonic">
                ${project.name}
              </h3>
              <h4>
                ${project.subheader1}
                
              </h4>
              <p class="proj-info">
              ${project.description}
              </p>
              <ul class="stack-icon">
              ${project.technologies
    .map((tech) => `<li class="stack">${tech}</li>`)
    .join('')}
              </ul>
              <button id=${project.id} type="button" onclick="onModalOpen(${
  project.id
})" class="btn" id="btn-4">See Project</button>
            </div>
          </div> 
      </div>`,
  );
  document.getElementById('cards').innerHTML = displayCards.join('');
});

// validate contact form

const form = document.querySelector('form');
const emailAdrdress = document.getElementById('email');
const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
const msgError = document.querySelector('#message-error');
const msgSuccess = document.querySelector('#message-success');

form.addEventListener('submit', (e) => {
  if (!emailAdrdress.value.match(emailPattern)) {
    e.preventDefault();
    msgError.classList.toggle('error');

    setTimeout(() => { msgError.classList.toggle('error'); }, 7000);
  } else {
    msgSuccess.classList.toggle('success');

    setTimeout(() => { form.submit(); }, 6000);
  }
});

// local-Storage-branch

const formLocal = document.querySelector('#form');

formLocal.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    fullname: document.querySelector('#name').value,
    emailAdress: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

const getData = localStorage.getItem('DATA');
const getDataValue = JSON.parse(getData);

window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
    document.querySelector('#name').value = getDataValue.fullname;
    document.querySelector('#email').value = getDataValue.emailAdress;
    document.querySelector('#message').value = getDataValue.message;
  }
});
