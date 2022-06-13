var last_known_scroll = 0;
var themeToggle = true;

var firstNav = document.getElementById('first');
firstNav.addEventListener('click', menuRemove);

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

/* function show() {
  document.getElementById('contact').style.display = 'block';

  let cosa = document.getElementById('contact');
  console.log(cosa);
}

function hide() {
  document.getElementById('contact').style.display = 'none';
} */

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
