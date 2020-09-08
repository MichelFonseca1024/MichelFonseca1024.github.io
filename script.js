// scrool dynamic

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach((itenMenu) => {
  itenMenu.addEventListener("click", scrollToById);
});

function scrollToById(event) {
  event.preventDefault();
  const element = event.target;
  const to = getScroolTopByHref(element) - 200;
  scroolToPosition(to);
}

function scroolToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function getScroolTopByHref(event) {
  const id = event.getAttribute("href");
  const to = document.querySelector(id).offsetTop;
  return to;
}

//efects in elements

const target = document.querySelectorAll("[data-anime]");

const animeteClass = "animate";

function animeScrool() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach((element) => {
    console.log(element.offsetTop);
    if (windowTop > element.offsetTop) {
      element.classList.add(animeteClass);
    } else {
      element.classList.remove(animeteClass);
    }
  });
}

if (target.length) {
  window.addEventListener("scroll", () => {
    animeScrool();
  });
}


document.addEventListener('DOMContentLoaded',animeScrool() )