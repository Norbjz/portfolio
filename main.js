var last_known_scroll = 0;
var themeToggle = true;

/* var firstNav = document.getElementById('first');
firstNav.addEventListener('click', menuRemove); */

function moveBackground(e) {
  const shapes = document.querySelectorAll('.shape');
  const x = e.clientX * 0.04;
  const y = e.clientY * 0.04;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function contactForm() {
  show();
  menuRemove();
}

function show() {
  document.getElementById('contact').style.visibility = 'visible';
  document.getElementById('contact').style.opacity = 1;
  document.querySelector('.nav').style.visibility = 'hidden';
  document.querySelector('.nav').style.opacity = 0;
}

function hide() {
  document.getElementById('contact').style.visibility = 'hidden';
  document.getElementById('contact').style.opacity = 0;
  document.querySelector('.nav').style.visibility = 'visible';
  document.querySelector('.nav').style.opacity = 1;
}

function toggleTheme() {
  themeToggle = !themeToggle;
  if (themeToggle) {
    document.body.classList.add('white-theme');
  } else {
    document.body.classList.remove('white-theme');
  }
}

function openMenu() {
  navDrop = document.querySelector('.nav');
  if (navDrop.className === 'nav') {
    navDrop.classList.add('drop');
  } else {
    navDrop.classList.remove('drop');
  }
}

function menuRemove() {
  navBar = document.querySelector('.nav');

  if (navBar.classList.contains('drop')) {
    navBar.classList.remove('drop');
  }
}
