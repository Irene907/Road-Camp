// function getRandomAvailability() {
//     return Math.floor(Math.random() * 10) + 1; 
// }

function calculateStayDuration() {
    const checkin = Date.parse(document.getElementById('checkinDate').value);
    const checkout = Date.parse(document.getElementById('checkoutDate').value);

    if(checkin && checkout){
        const diffTime = Math.abs(checkout - checkin);
        const nights = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        document.getElementById('stayDuration').textContent = `共 ${nights + 1} 天 ${nights} 夜`;
    }else{
        return;
    }
    if (checkout <= checkin) {
        alert('退房日必須在入住日之後');
        return;
    }
}



function calculateTotalCost() {
    const checkin=document.getElementById('checkinDate').value;
    const checkout=document.getElementById('checkoutDate').value;
    const roomType = document.getElementById('roomType').value;
    console.log(checkin, checkout, roomType);
    
    let basePrice;
    if (roomType === 'car' ){
        basePrice = 6000;
    }else if (roomType === 'tent' ){
        basePrice = 8000;
    } else {
        basePrice = '';
    }
    

    if(checkin !== '' &&checkout !=='' ){
        const nights = document.getElementById('stayDuration').textContent.split(' ')[3]; 
        const totalPrice = basePrice * nights;
        document.getElementById('totalCost').textContent = `總計:${totalPrice}`;
    }
}



function confirmBooking() {
    const checkin = document.getElementById('checkinDate').value;
    const checkout = document.getElementById('checkoutDate').value;
    const roomType = document.getElementById('roomType').value;

    console.log(checkin, checkout, roomType);

    // if (checkin === '' || checkout === '' || roomType === '') {
    if (checkin === '' || checkout === '' || roomType === '') {
        alert('請填寫完整的訂房資訊');
        return;
    }


    document.getElementById('errorPopup').style.display = 'block';
    document.getElementById('errorText').innerText = `您已成功預定入住日期 ${checkin} 至 ${checkout} 的 ${roomType === 'car' ? '露營車' : '帳篷'}，期待您的到來！`;
    
}

// 初始設定
document.getElementById('roomType').addEventListener('change', () => {
    calculateStayDuration();
    calculateTotalCost()
});
document.getElementById('checkinDate').addEventListener('change', () => {
    calculateStayDuration();
    calculateTotalCost();
});
document.getElementById('checkoutDate').addEventListener('change',() => {
    calculateStayDuration();
    calculateTotalCost();
});
document.getElementById('confirmButton').addEventListener('click', confirmBooking);
// document.getElementById('confirm').addEventListener('click', confirmBtn);
document.getElementById('confirm').onclick = () => window.location.href = 'index.html';
