const switchSpans = document.querySelectorAll('.top-bar_switch span');

  switchSpans.forEach(span => {
    span.addEventListener('click', () => {
      switchSpans.forEach(s => s.classList.remove('top-bar_active'));
      span.classList.add('top-bar_active');
    });
  });