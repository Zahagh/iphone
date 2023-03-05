const btn = document.querySelector(`.menuBtn`);
const nav = document.querySelector(`.nav`);

btn.addEventListener(`click`, () => {
  nav.classList.toggle(`menuOpen`);
});
