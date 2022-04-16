function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 50) {
    return nav.classList.add('active-header');
  } else {
    return nav.classList.remove('active-header')
  }
}

window.addEventListener('scroll', scrollHeader);