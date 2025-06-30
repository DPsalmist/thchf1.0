


// Array to store image URLs
let EduimageArray = [];
// let EmpowImageArray = [];



// Function to add image URLs to the array
function addImageToArray(imageUrl) {
    EduimageArray.push(imageUrl);
}

// Example usage: Adding image URLs to the array
addImageToArray("../New Images Used/education image/IMG-20250408-WA0018.jpg");
addImageToArray("../New Images Used/education image/IMG-20250408-WA0019.jpg");
addImageToArray("../New Images Used/education image/IMG-20250408-WA0021.jpg");
addImageToArray("../New Images Used/education image/IMG-20250408-WA0022.jpg");
addImageToArray("../New Images Used/education image/IMG-20250408-WA0023.jpg");
addImageToArray("../New Images Used/education image/statione.jpg");
addImageToArray("../New Images Used/education image/IMG-20250408-WA0025.jpg");
addImageToArray("../New Images Used/education image/IMG-20250408-WA0026.jpg");
addImageToArray("../New Images Used/education image/bottles.jpg");

// Output the array to the console
console.log(EduimageArray);


// const grid = document.getElementById("imageGrid");

    // Loop through the array and render each image
    // EduimageArray.forEach(src => {
    //   const card = `
    //     <div class="col-6 col-md-4 col-lg-3">
    //       <div class="img-card">
    //         <img src="${src}" alt="Image">
    //       </div>
    //     </div>
    //   `;
    //   grid.innerHTML += card;
    // });

    EduimageArray.forEach((image, index) => {
      const activeClass = index === 0 ? "active" : ""; // Mark the first item as active
      const carouselItem = `
          <div class="carousel-item ${activeClass}">
              <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
          </div>
      `;
      carouselContent.innerHTML += carouselItem;
    });

   
    let fiestArray = [];
    const fiestaCarouselContent = document.getElementById("fiestaCarouselContent")

    function addFiesta(image){
        fiestArray.push(image);
    }

    // addFiesta("../New Images Used/Hockey IMGS/IMG-20250421-WA0064.jpg")
    // addFiesta("../New Images Used/Hockey IMGS/IMG-20250421-WA0066.jpg")
    // addFiesta("../New Images Used/Hockey IMGS/IMG-20250421-WA0077.jpg")
    // addFiesta("../New Images Used/Hockey IMGS/IMG-20250421-WA0080.jpg")
    addFiesta("../New Images Used/Hockey IMGS/IMG-20250422-WA0035.jpg")
      addFiesta("../New Images Used/Hockey IMGS/IMG-20250422-WA0036.jpg")
    addFiesta("../New Images Used/Hockey IMGS/WhatsApp Image 2025-04-22 at 16.03.25_f508d4d3.jpg")
    // addFiesta("../New Images Used/Hockey IMGS/WhatsApp Image 2025-04-22 at 16.05.17_fc58bbc0.jpg")
    

    fiestArray.forEach((image,index)=>{
        const FiestactiveClass = index === 0 ? "active" : ""; // Mark the first item as active
      const FiestacarouselItem = `
          <div class="carousel-item ${FiestactiveClass}">
              <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
          </div>
      `;
      fiestaCarouselContent.innerHTML += FiestacarouselItem;
    })
   