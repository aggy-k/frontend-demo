// app/javascript/components/navbar.js
const initUpdateNavbarOnScroll = () => {
  // const navbar = document.querySelector('.navbar-lewagon');
  const navbar = document.getElementById('navbar-lewagon');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        console.log(window.scrollY)
        navbar.classList.add('navbar-lewagon-white');
      } else {
        console.log(window.scrollY)
        navbar.classList.remove('navbar-lewagon-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
