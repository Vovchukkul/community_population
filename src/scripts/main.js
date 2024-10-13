const switchSpans = document.querySelectorAll('.header_switch li');

switchSpans.forEach(li => {
  li.addEventListener('click', () => {
    switchSpans.forEach(s => s.classList.remove('header_active'));
    li.classList.add('header_active');
  });
});

// let width = window.innerWidth;
// alert("Width: " + width)