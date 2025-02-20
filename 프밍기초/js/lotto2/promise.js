const drawButton = document.getElementById('drawButton');
const messageDiv = document.getElementById('message');

function drawLottery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWinner = Math.random() < 0.5; // 50% 확률
            isWinner ? resolve("당첨 되었습니다.") : reject("꽝! 다음 기회에...");
        }, 1000);
    });
}

// async/await을 사용한 동기적 코드 스타일
async function handleDrawClick() {
    messageDiv.textContent = "1초 후에 당첨 결과가 발표됩니다.";
    messageDiv.className = 'message'; // 초기화

    try {
        const result = await drawLottery();
        messageDiv.textContent = result;
        messageDiv.classList.add('success'); // 파란색
    } catch (error) {
        messageDiv.textContent = error;
        messageDiv.classList.add('failure'); // 빨간색
    }
}

drawButton.addEventListener('click', handleDrawClick);

