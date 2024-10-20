const switchSpans = document.querySelectorAll('.header_switch li');
const paths = document.querySelectorAll('.svg a');

switchSpans.forEach(li => {
  li.addEventListener('click', () => {
    switchSpans.forEach(s => s.classList.remove('header_active'));
    li.classList.add('header_active');
  });
});

paths.forEach(a => {
  a.addEventListener('click', () => {
    paths.forEach(p => p.classList.remove('svg_active'));
    p.classList.add('svg_active')
  })
})

// let width = window.innerWidth;
// alert("Width: " + width)