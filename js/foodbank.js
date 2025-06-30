// Empowerment Images
let FoodImageArray = [];

 // Shoedrive
 function addFood(imageUrl){
  FoodImageArray.push(imageUrl);
}


let FoodArray = [];

 // Shoedrive
 function addFoodImage(image){
  FoodArray.push(image);
}

addFood("../New Images Used/feeding/RDM_3461.jpg");
addFood("../New Images Used/feeding/RDM_3485.jpg");
addFood("../New Images Used/feeding/RDM_3537.jpg");
addFood("../New Images Used/feeding/RDM_3645.jpg");
addFood("../New Images Used/feeding/RDM_3647.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.34.53_3262281e.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.34.53_a1f4670f.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.36.56_c3d88b61.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.36.57_a1109156.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.37.13_d948a728.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.41.31_dfe75b91.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.46.23_f1457ec1.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 11.49.45_2953f3d7.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.22.23_6ffce515.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.22.23_94b1d1a9.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.22.24_5c316558.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.22.24_d9a68a20.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.24.07_0a718e6b.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.25.15_ce41d7be.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.27.06_0b89e9d1.jpg");
addFood("../New Images Used/feeding/WhatsApp Image 2025-04-09 at 12.29.52_75ebcf1d.jpg");





addFoodImage("../New Images Used/Hockey IMGS/IMG-20250421-WA0066.jpg")
addFoodImage("../New Images Used/Hockey IMGS/IMG-20250421-WA0066.jpg")
addFoodImage("../New Images Used/Hockey IMGS/IMG-20250421-WA0077.jpg")
addFoodImage("../New Images Used/Hockey IMGS/IMG-20250421-WA0080.jpg")
addFoodImage("../New Images Used/Hockey IMGS/WhatsApp Image 2025-04-22 at 16.05.17_fc58bbc0.jpg")

// const FoodGrids = document.getElementById("FoodGrid");

// Loop through the array and render each image
// FoodImageArray.forEach(src => {
//   const card = `
//     <div class="col-6 col-md-4 col-lg-3">
//       <div class="img-card">
//         <img src="${src}" alt="Image">
//       </div>
//     </div>
//   `;
//   FoodGrids.innerHTML += card;
// });

FoodImageArray.forEach((image, index) => {
  const activeClass = index === 0 ? "active" : ""; // Mark the first item as active
  const carouselItem = `
      <div class="carousel-item ${activeClass}">
          <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
      </div>
  `;
  carouselContent.innerHTML += carouselItem;
});



FoodArray.forEach((image, index) => {
  const activeClass = index === 0 ? "active" : ""; // Mark the first item as active
  const carouselItem = `
      <div class="carousel-item ${activeClass}">
          <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
      </div>
  `;
  FoodContent.innerHTML += carouselItem;
});

