
// let currentIndex = 0;
// let albumWidth;
// let numCardsPerSlide;
// let autoPlayInterval;

// const carousel = document.querySelector('.album-carousel');
// const albums = carousel.children;
// const totalAlbums = albums.length;


// function calculateDimensions() {
//     albumWidth = document.querySelector('.album').offsetWidth;
//     numCardsPerSlide = 1; 
// }

// function updateCarousel() {
//     const maxIndex = Math.floor((totalAlbums - 1) / numCardsPerSlide);
//     currentIndex = ((currentIndex % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1);
//     const translateXValue = -currentIndex * albumWidth * numCardsPerSlide;
//     carousel.style.transition = 'transform 0.5s ease';
//     carousel.style.transform = `translateX(${translateXValue}px)`;
// }


// calculateDimensions();
// updateCarousel();


// window.addEventListener('resize', () => {
//     calculateDimensions();
//     updateCarousel();
// });


// document.querySelector('.left-arrow').addEventListener('click', () => {
//     currentIndex -= 1;
//     if (currentIndex < 0) {
//         const maxIndex = totalAlbums - 1;
//         currentIndex = maxIndex;
//     }
//     updateCarousel();
// });


// document.querySelector('.right-arrow').addEventListener('click', () => {
//     currentIndex += 1;
//     updateCarousel();
// });


// function startAutoPlay() {
//     autoPlayInterval = setInterval(() => {
//         currentIndex += numCardsPerSlide;
//         updateCarousel();
//     }, 3000); 
// }


// function stopAutoPlay() {
//     clearInterval(autoPlayInterval);
// }


// startAutoPlay();


// carousel.addEventListener('mouseenter', () => {
//     stopAutoPlay();
// });

// carousel.addEventListener('mouseleave', () => {
//     startAutoPlay();
// });
