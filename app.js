let myObj = {
  products: [
    {
      ProductImage: "/Projects/Project-6/images/sliders/s4.jpg",
      ProductName: "Highlight🎈",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s6.jpg",
      ProductName: "Vacation",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s7.jpg",
      ProductName: "London🎢",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s8.jpg",
      ProductName: "USA",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s3.jpg",
      ProductName: "Birthday🎂",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s2.jpg",
      ProductName: "office💻",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s3.jpg",
      ProductName: "Banglore",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s2.jpg",
      ProductName: "Canada",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s5.jpg",
      ProductName: "Sucess",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s4.jpg",
      ProductName: "apple",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
      ProductName: "tv",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s3.jpg",
      ProductName: "watch",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s2.jpg",
      ProductName: "apple",
    },
  ],
};
let products = "";
for (let x in myObj.products) {
  products += `<div class = "story-circle">`;
  products += `<img class="prod-img" src=${myObj.products[x].ProductImage} alt"image of product" ></img>`;
  products += `<p>${myObj.products[x].ProductName}</p>`;
  products += `</div>`;
}
document.querySelector(".storys-container").innerHTML = products;

let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = 0;

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
console.log(maxScroll);

function scrollHorizontal(val) {
  console.log(val);
  currentScrollPosition += val * scrollAmount;
  if (currentScrollPosition >= 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = 0;
  } else {
    btnScrollLeft.style.opacity = 1;
  }
  if (currentScrollPosition <= maxScroll) {
    currentScrollPosition = maxScroll;
    console.log(maxScroll);
    btnScrollRight.style.opacity = 0;
  } else {
    btnScrollRight.style.opacity = 1;
  }
  sCont.style.left = currentScrollPosition + "px";
}
//fetch
