

window.onload = function() {
  
  const commentItems = document.querySelectorAll('.comment-item');
  
  const commentList = document.querySelector('.comment-list');

  
  function marquee() {
    const containerWidth = commentList.offsetWidth; 
    const itemsWidth = Array.from(commentItems).reduce((sum, item) => sum + item.offsetWidth, 0); 
    const distance = itemsWidth * 5; 
    let currentPosition = 0;
    const speed = 1; 

    function moveMarquee() {
      currentPosition += speed; 
      if (currentPosition >= distance) { 
        currentPosition = 0 - containerWidth; 
      }
      commentList.style.transform = `translateX(-${currentPosition}px)`; 
      requestAnimationFrame(moveMarquee); 
    }

  
    for (let i = 0; i < 5; i++) {
      const clonedItems = Array.from(commentItems).map(item => item.cloneNode(true));
      clonedItems.forEach(item => commentList.appendChild(item));
    }

    moveMarquee(); 
  }

  marquee();
};




