window.onload = function() {
    // 獲取所有評論項目
    const commentItems = document.querySelectorAll('.comment-item');

    // 獲取評論列表容器
    const commentList = document.querySelector('.comment-list');

    // 定義跑馬燈函數
    function marquee() {
      const containerWidth = commentList.offsetWidth; // 獲取容器的寬度
      const itemsWidth = Array.from(commentItems).reduce((sum, item) => sum + item.offsetWidth, 0); // 計算所有評論項目的總寬度
      const distance = itemsWidth + containerWidth; // 循環的距離為所有評論項目的總寬度加上容器的寬度

    let currentPosition = 0;
      const speed = 1; // 控制移動速度,可根據需要調整

    function moveMarquee() {
        currentPosition += speed; // 每一幀將 currentPosition 加上 speed 的值,實現向右移動
        if (currentPosition >= distance) { // 當 currentPosition 大於或等於 distance 時
          currentPosition = 0; // 重置 currentPosition 為 0
        }
        commentList.style.transform = `translateX(-${currentPosition}px)`; // 設置評論列表容器的位移
        requestAnimationFrame(moveMarquee); // 請求下一幀動畫
    }

      // 克隆所有評論項目並添加到列表末尾
    const clonedItems = Array.from(commentItems).map(item => item.cloneNode(true));
    clonedItems.forEach(item => commentList.appendChild(item));

      moveMarquee(); // 啟動跑馬燈動畫
    }

    // 初始化跑馬燈
    marquee();
};
