const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./images/testimony2.jpg",
    text:
      "I'm baby meggings twee health goth  Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./images/testimony1.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./images/testimony3.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "./images/testimony4.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const hamburger = document.querySelector(".hamburger");
const navbarTwo = document.querySelector(".navbar__two");
const year = document.querySelector(".years");
const links = document.querySelectorAll(".link");

const personImg = document.querySelector(".person-img");
const text = document.querySelector(".text");
const job = document.getElementById("job");
const name = document.getElementById("name");

const arrow = document.querySelector(".arrow");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

year.innerHTML = new Date().getFullYear();

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  personImg.src = item.img;
  text.textContent = item.text;
  name.textContent = item.name;
  job.textContent = item.job;
}

next.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

previous.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    navbarTwo.classList.add("open");
    showMenu = true;
  } else {
    navbarTwo.classList.remove("open");
    showMenu = false;
  }
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // select specific section

    const id = e.currentTarget.getAttribute("href").slice(1);

    const element = document.getElementById(id);

    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
