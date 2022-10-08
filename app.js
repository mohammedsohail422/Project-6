let myObj = {
  products: [
    {
      ProductImage: "/Projects/Project-6/images/sliders/s4.jpg",
      ProductName: "tv",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
      ProductName: "watch",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
      ProductName: "tv",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
      ProductName: "watch",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
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
    {
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
      ProductName: "watch",
    },
    {
      ProductImage: "/Projects/Project-6/images/sliders/s1.jpg",
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
  products += `</div>`;
  //   products += `<p>${myObj.products[x].ProductName}</p>`;
}
document.querySelector(".storys-container").innerHTML = products;
