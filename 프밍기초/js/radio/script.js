document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지
   // 선택된 라디오 버튼의 값 가져오기
   const selectedShipping = document.querySelector('input[name="shipping"]:checked').value;
    // 선택된 배송 방법을 출력
   const message = `선택한 배송 방법: ${selectedShipping}`;
    document.getElementById('message').innerHTML = message;
});