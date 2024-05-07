// let currentIndex = 0;
// let albumWidth;
// let numCardsPerSlide;

// const carousel = document.querySelector('.album-carousel');
// const albums = carousel.children;
// const totalAlbums = albums.length;

// // 計算相冊寬度和每次切換數量
// function calculateDimensions() {
//     albumWidth = document.querySelector('.album').offsetWidth;
//     numCardsPerSlide = window.innerWidth <= 768 ? 2 : 1;
// }

// // 更新輪播位置
// function updateCarousel() {
//     const translateXValue = -currentIndex * albumWidth * numCardsPerSlide;
//     const maxTranslateValue = (totalAlbums - numCardsPerSlide) * albumWidth * numCardsPerSlide;

//     carousel.style.transition = 'transform 0.5s ease';

//     // 如果到達最後一張照片,則將容器位移至最後一組照片的位置
//     if (translateXValue <= -maxTranslateValue) {
//     carousel.style.transform = `translateX(-${maxTranslateValue}px)`;
//     } else {
//     carousel.style.transform = `translateX(${translateXValue}px)`;
//     }
// }

// // 初始計算和設置
// calculateDimensions();
// updateCarousel();

// // 窗口大小改變時重新計算並更新輪播
// window.addEventListener('resize', () => {
//     calculateDimensions();
//     updateCarousel();
// });

// // 右箭頭點擊事件處理函式
// document.querySelector('.right-arrow').addEventListener('click', () => {
//     currentIndex += numCardsPerSlide;
//     if (currentIndex >= totalAlbums) {
//         currentIndex = 0;
//     }
//     updateCarousel();
// });

// // 左箭頭點擊事件處理函式
// document.querySelector('.left-arrow').addEventListener('click', () => {
//     currentIndex -= numCardsPerSlide;
//     if (currentIndex < 0) {
//         currentIndex = totalAlbums - numCardsPerSlide;
//     }
//     updateCarousel();
// });



let currentIndex = 0;
let albumWidth;
let numCardsPerSlide;
let autoPlayInterval;

const carousel = document.querySelector('.album-carousel');
const albums = carousel.children;
const totalAlbums = albums.length;

// 計算相冊寬度和每次切換數量
function calculateDimensions() {
    albumWidth = document.querySelector('.album').offsetWidth;
    numCardsPerSlide = 1; // 每次只切換一張相冊
}
// 更新輪播位置
function updateCarousel() {
    const maxIndex = Math.floor((totalAlbums - 1) / numCardsPerSlide);
    currentIndex = ((currentIndex % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1);
    const translateXValue = -currentIndex * albumWidth * numCardsPerSlide;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${translateXValue}px)`;
}

// 初始計算和設置
calculateDimensions();
updateCarousel();

// 窗口大小改變時重新計算並更新輪播
window.addEventListener('resize', () => {
    calculateDimensions();
    updateCarousel();
});

// 左箭頭點擊事件處理函式
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        const maxIndex = totalAlbums - 1;
        currentIndex = maxIndex;
    }
    updateCarousel();
});

// 右箭頭點擊事件處理函式
document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex += 1;
    updateCarousel();
});

// 自動播放相冊
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentIndex += numCardsPerSlide;
        updateCarousel();
    }, 3000); // 每隔 3 秒切換一次
}

// 停止自動播放
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// 初始化自動播放
startAutoPlay();

// 當滑鼠進入輪播容器時停止自動播放
carousel.addEventListener('mouseenter', () => {
    stopAutoPlay();
});

// 當滑鼠離開輪播容器時重新開始自動播放
carousel.addEventListener('mouseleave', () => {
    startAutoPlay();
});
