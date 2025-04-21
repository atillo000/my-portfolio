const cursor = document.querySelector('.cursor-trail');

window.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

new WOW().init();