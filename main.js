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
