// Empowerment Images
let ShoeImageArray = [];

 // Shoedrive
 function addShoe(imageUrl){
    ShoeImageArray.push(imageUrl);
}


addShoe("../New Images Used/shoe drive/IMG-20250408-WA0005.jpg");
addShoe("../New Images Used/shoe drive/IMG-20250408-WA0006.jpg");
addShoe("../New Images Used/shoe drive/IMG-20250408-WA0007.jpg");
addShoe("../New Images Used/shoe drive/IMG-20250408-WA0008.jpg");
addShoe("../New Images Used/shoe drive/IMG-20250408-WA0009.jpg");
addShoe("../New Images Used/shoe drive/IMG-20250408-WA0010.jpg");
addShoe("../New Images Used/shoe drive/IMG-20250408-WA0012.jpg");
addShoe("../New Images Used/shoe drive/IMG-20250408-WA0013.jpg");


const ShoeGrids = document.getElementById("FoodGrid");

// Loop through the array and render each image
// ShoeImageArray.forEach(src => {
//   const card = `
//     <div class="col-6 col-md-4 col-lg-3">
//       <div class="img-card">
//         <img src="${src}" alt="Image">
//       </div>
//     </div>
//   `;
//   ShoeGrids.innerHTML += card;
// });

ShoeImageArray.forEach((image, index) => {
  const activeClass = index === 0 ? "active" : ""; // Mark the first item as active
  const carouselItem = `
      <div class="carousel-item ${activeClass}">
          <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
      </div>
  `;
  carouselContent.innerHTML += carouselItem;
});


