const [primaryHeader, navToggle, primaryNav] = [
  ".primary-header",
  ".moble-nav-toggle",
  ".primary-navigation",
  "body",
].map(item => {
  return document.querySelector(item);
});



navToggle.addEventListener("click", () => {
  console.log('www',)
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});




const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  responsive: {
    600: {
      dots: false,
      arrows: true,
    },
  },
});
