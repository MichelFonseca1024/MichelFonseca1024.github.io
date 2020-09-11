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


//write machine

function writer(element) {
  const letterArray = element.innerHTML.split("");
  insertletter(letterArray, element);
  element.innerHTML = ""
}

function insertletter(letterArray, element ) {
  letterArray.forEach((letter, index) => {
    setTimeout(()=> {
      element.innerHTML += letter
      console.log(letter);
    }, 75 * index)
  });
}

const textToWrite = document.querySelector(".banner h1");
writer(textToWrite);
