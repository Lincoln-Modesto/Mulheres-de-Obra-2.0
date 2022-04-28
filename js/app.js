function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 50) {
    return nav.classList.add('active-header');
  } else {
    return nav.classList.remove('active-header')
  }
}

window.addEventListener('scroll', scrollHeader);

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	navbarMenu.classList.toggle("is-active");

	if (navbarMenu.classList.contains("is-active")) {
		navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
	} else {
		navbarMenu.removeAttribute("style");
	}
});
