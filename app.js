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
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
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
//follow
let pk1a = document.querySelector(".pk1a");
let blueBtn = document.querySelector(".blue-btn");

blueBtn.addEventListener("click", () => {
  if (blueBtn.innerHTML == "Follow") {
    blueBtn.innerHTML = "Following";
    pk1a.classList.add("follow");
  } else {
    blueBtn.innerHTML = "Follow";
    pk1a.classList.remove("follow");
  }
});

//
//fun
submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  let inputValue = document.querySelector("#input-value").value;
  console.log(inputValue);
  if (inputValue == "") {
    alert(
      "Please input the correct value or by default it will be consider as 12"
    );
    inputValue = 12;
  }
  //fetch
  let urls = "https://jsonplaceholder.typicode.com/photos";
  fetch(urls)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let data1 = "";
      for (let i = 0; i < inputValue; i++) {
        data1 += `<div class="image">
        <img src=${data[i].url} alt="im" />
      </div>`;
      }
      document.querySelector(".image-container").innerHTML = data1;
    });
  //
});

//fun end

//progress bar

let imgPop = document
  .querySelectorAll(".image-container img")
  .forEach((img) => {
    console.log(img);
    img.onclick = () => {
      document.querySelector(".pop-image img").src = img.getAttribute("src");
      document.querySelector(".pop-image").style.display = "block";
      // console.log(image.getAttribute("src"));
    };
  });

//close
document.querySelector(".pop-image span").onclick = () => {
  document.querySelector(".pop-image").style.display = "none";
};

// imgPop.addEventListener("click", () => {
//   console.log("clicked");
// });
