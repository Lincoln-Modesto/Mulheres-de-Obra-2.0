function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 50) {
    return nav.classList.add('active-header');
  } else {
    return nav.classList.remove('active-header')
  }
}

window.addEventListener('scroll', scrollHeader);

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile');
      toggle.classList.toggle('active-bx');
    })
  }
}
showMenu('bx', 'menu-mobile')
