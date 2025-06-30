// Empowerment Images
let EmpowImageArray = [];

function addEmpow(imageUrl){
    EmpowImageArray.push(imageUrl);
}

addEmpow("../New Images Used/Empowerment/WhatsApp Image 2025-04-09 at 13.07.28_c72442aa.jpg");
addEmpow("../New Images Used/Empowerment/WhatsApp Image 2025-04-09 at 13.08.37_fecbd5f5.jpg");
addEmpow("../New Images Used/Empowerment/WhatsApp Image 2025-04-09 at 13.11.16_88e98bbd.jpg");
addEmpow("../New Images Used/Empowerment/WhatsApp Image 2025-04-09 at 13.12.26_bb554544.jpg");
addEmpow("../New Images Used/Empowerment/WhatsApp Image 2025-04-09 at 16.02.52_e960cd11.jpg");
addEmpow("../New Images Used/Empowerment/WhatsApp Image 2025-04-09 at 16.41.01_705ad925.jpg");


EmpowImageArray.forEach((image, index) => {
  const activeClass = index === 0 ? "active" : ""; // Mark the first item as active
  const carouselItem = `
      <div class="carousel-item ${activeClass}">
          <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
      </div>
  `;
  carouselContent.innerHTML += carouselItem;
});


let EmpowImageArray2 = [];

function addEmpow2(imageUrl){
    EmpowImageArray2.push(imageUrl);
}

addEmpow2("../New Images Used/Visitation/IMG-20250527-WA0007.jpg");
addEmpow2("../New Images Used/Visitation/IMG-20250527-WA0008.jpg");
addEmpow2("../New Images Used/Visitation/IMG-20250527-WA0009.jpg");
addEmpow2("../New Images Used/Visitation/IMG-20250527-WA0010.jpg");
addEmpow2("../New Images Used/Visitation/WhatsApp Image 2025-05-25 at 16.41.31_94625cc2.jpg");

EmpowImageArray2.forEach((image, index) => {
  const activeClass = index === 0 ? "active" : ""; // Mark the first item as active
  const carouselItem = `
      <div class="carousel-item ${activeClass}">
          <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
      </div>
  `;
  carouselContent2.innerHTML += carouselItem;
});