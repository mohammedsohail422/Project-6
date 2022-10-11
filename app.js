let myObj = {
  products: [
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s4.jpg",
      ProductImage:
        "https://xsgames.co/randomusers/assets/avatars/female/11.jpg",
      ProductName: "Highlight🎈",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s6.jpg",
      ProductImage:
        "https://xsgames.co/randomusers/assets/avatars/female/65.jpg",
      ProductName: "Vacation",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s7.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/78.jpg",
      ProductName: "London🎢",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s8.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/9.jpg",
      ProductName: "USA",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s3.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
      ProductName: "Birthday🎂",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s2.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/37.jpg",
      ProductName: "office💻",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/38.jpg",
      ProductName: "Banglore",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s2.jpg",
      ProductImage:
        "https://xsgames.co/randomusers/assets/avatars/female/43.jpg",
      ProductName: "Canada",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s5.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
      ProductName: "Sucess",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s4.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/26.jpg",
      ProductName: "apple",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s4.jpg",
      ProductImage:
        "https://xsgames.co/randomusers/assets/avatars/female/11.jpg",
      ProductName: "tv",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s2.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/37.jpg",
      ProductName: "watch",
    },
    {
      // ProductImage: "/Projects/Project-6/images/sliders/s2.jpg",
      ProductImage: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
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
  // console.log(val);
  currentScrollPosition += val * scrollAmount;
  if (currentScrollPosition >= 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = 0;
  } else {
    btnScrollLeft.style.opacity = 1;
  }
  if (currentScrollPosition <= maxScroll) {
    currentScrollPosition = maxScroll;
    // console.log(maxScroll);
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
//follow end

// //fetch start, fun fetch no. of images user enters
submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  let inputValue = document.querySelector("#input-value").value;
  // console.log(inputValue);
  if (inputValue == "") {
    alert(
      "Please input the correct value or by default it will be consider as 12"
    );
    inputValue = 12;
  }

  let urls = "https://jsonplaceholder.typicode.com/photos";
  // let urls = "https://akabab.github.io/starwars-api/api/all.json";

  fetch(urls)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let data1 = "";
      for (let i = 0; i < inputValue; i++) {
        data1 += `<div class="image">
        <img src=${data[i].url} alt="im" class="start-progress" />
        <div class = "ranger">
        <img src="" alt="im" class="one" />
        
        </div>
      </div>`;
      }
      document.querySelector(".image-container").innerHTML = data1;
      testing();
    });
  //
});

//fetch end

function testing() {
  //circular progess hekki
  let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
  let model = document.querySelector(".model");
  let startProgress = document.querySelectorAll(".start-progress");
  let image = document.querySelector(".image");
  let one = document.querySelectorAll(".one");

  // console.log(startProgress.length);
  for (let i = 0; i < startProgress.length; i++) {
    startProgress[i].addEventListener("click", () => {
      // if (progressValue.innerHTML == "100%") {
      // }

      model.style.display = "block";
      let progressStartValue = 0,
        progressEndValue = 100,
        speed = 10;

      let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${
          progressStartValue * 3.6
        }deg, #ededed 0deg)`;

        if (progressStartValue == progressEndValue) {
          model.style.display = "none";
          // one[i].setAttribute("src", startProgress[i].src);
          // one[i].style.display = "block";
          clearInterval(progress);
        }
      }, speed);
    });
    //
    let done = document.querySelector(".done");

    done.addEventListener("click", () => {});
    // let model = document.querySelector(".model");
    // window.onclick = function (event) {
    //   if (event.target == model) {
    //     if (progressValue.innerHTML == "100%") {
    //       model.style.display = "none";
    //     }
    //   }
    // };
  }
}
testing();
//circular progress end

//pop start

// let imgPop = document
//   .querySelectorAll(".image-container img")
//   .forEach((img) => {
//     img.onclick = () => {
//       console.log("clickeds");
//       document.querySelector(".pop-image img").src = img.getAttribute("src");
//       document.querySelector(".pop-image").style.display = "block";
//       // console.log(image.getAttribute("src"));
//     };
//   });

// //close
// document.querySelector(".pop-image span").onclick = () => {
//   document.querySelector(".pop-image").style.display = "none";
// };

// //pop end
