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

$(function () {
  // Initialize ScrollMagic controller
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "200%"
    }
  });

  // Select the elements that need the ScrollMagic behavior
  var header = document.querySelector("header");
  var firstSection = document.querySelector(".main");

  // Create ScrollMagic scene for the header
  new ScrollMagic.Scene({
      triggerElement: header
    })
    .setPin(header, { pushFollowers: false })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // Create ScrollMagic scene for the first section
  new ScrollMagic.Scene({
      triggerElement: firstSection
    })
    .setPin(firstSection, { pushFollowers: false })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});