let currentIndex = 0;
let albumWidth;
let numCardsPerSlide;

const carousel = document.querySelector('.album-carousel');
const albums = carousel.children;
const totalAlbums = albums.length;

// 計算相冊寬度和每次切換數量
function calculateDimensions() {
    albumWidth = document.querySelector('.album').offsetWidth;
    numCardsPerSlide = window.innerWidth <= 768 ? 2 : 1;
}

// 更新輪播位置
function updateCarousel() {
    const translateXValue = -currentIndex * albumWidth * numCardsPerSlide;
    const maxTranslateValue = (totalAlbums - numCardsPerSlide) * albumWidth * numCardsPerSlide;

    carousel.style.transition = 'transform 0.5s ease';

    // 如果到達最後一張照片,則將容器位移至最後一組照片的位置
    if (translateXValue <= -maxTranslateValue) {
    carousel.style.transform = `translateX(-${maxTranslateValue}px)`;
    } else {
    carousel.style.transform = `translateX(${translateXValue}px)`;
    }
}

// 初始計算和設置
calculateDimensions();
updateCarousel();

// 窗口大小改變時重新計算並更新輪播
window.addEventListener('resize', () => {
    calculateDimensions();
    updateCarousel();
});

// 右箭頭點擊事件處理函式
document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex += numCardsPerSlide;
    if (currentIndex >= totalAlbums) {
        currentIndex = 0;
    }
    updateCarousel();
});

// 左箭頭點擊事件處理函式
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex -= numCardsPerSlide;
    if (currentIndex < 0) {
        currentIndex = totalAlbums - numCardsPerSlide;
    }
    updateCarousel();
});


