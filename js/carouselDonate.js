
        // JavArray for images
        const imageArray = [
            "../New Images Used/RDM_3435.jpg",
            "../New Images Used/shoe drive/IMG-20250408-WA0008.jpg",
            "../New Images Used/RDM_3417.jpg",
            "../New Images Used/happy kids/RDM_3485.jpg",
            "../New Images Used/happy kids/WhatsApp Image 2025-04-08 at 11.58.07_638923bc.jpg",
            "../New Images Used/happy kids/WhatsApp Image 2025-04-09 at 16.43.15_408b907b.jpg",
            "../New Images Used/happy kids/WhatsApp Image 2025-04-09 at 16.43.16_0d969bd1.jpg"
        ];

        // Get the carousel content container
        const carouselContent = document.getElementById("carouselContent");

        // Generate carousel items dynamically from the image array
        imageArray.forEach((image, index) => {
            const activeClass = index === 0 ? "active" : ""; // Mark the first item as active
            const carouselItem = `
                <div class="carousel-item ${activeClass}">
                    <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
                </div>
            `;
            carouselContent.innerHTML += carouselItem;
        });
   