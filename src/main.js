let navbar = document.querySelector("#navId");
let first = document.querySelector("#topSection");
let numbersPos = document.querySelector(".section-2 .numbers .rect").offsetTop;
let favoriteBooks = document.querySelectorAll(
  ".section-3 div div .bookContainer img"
);

let favoriteBooksBackground = document.querySelectorAll(
  ".section-3 div div .bookContainer"
);

const counters = document.querySelectorAll(".rect h1");
const speed = 250;
let ScrollFunc = function () {
  let y = window.scrollY;
  if (y > 1) {
    navbar.classList.add("sticky");
    first.style.marginTop = "106px";
  } else {
    first.style.marginTop = "0px";
    navbar.classList.remove("sticky");
  }
  if (y > numbersPos - window.innerHeight + 100 && counters[0].innerText == 0) {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.floor(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
};

favoriteBooks.forEach((book) => {
  let bookBackgorund = book.parentElement;
  book.addEventListener("click", function () {
    favoriteBooksBackground.forEach((divBackground) => {
      divBackground.style.background = "linear-gradient(#212529, #6c757d)";
    });
    bookBackgorund.style.background = "linear-gradient(#212529, #FF0000)";
  });
});
window.addEventListener("scroll", ScrollFunc);
