import { add, divide, multiply, subtract } from './math.js';

// 숫자 증가/감소 버튼 클릭 시 값 변경
window.changeNumber = function(inputId, amount) {
    const inputField = document.getElementById(inputId);
    let currentValue = parseFloat(inputField.value) || 0;
    inputField.value = currentValue + amount;
};

// 입력값이 변경될 때 실시간으로 업데이트
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("num1").addEventListener("input", validateInput);
    document.getElementById("num2").addEventListener("input", validateInput);
});

function validateInput(event) {
    if (isNaN(event.target.value) || event.target.value.trim() === "") {
        event.target.value = 0; // 잘못된 값 입력 시 0으로 초기화
    }
}

// 사칙연산 수행 함수
window.handleCalculation = function(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('유효한 숫자를 입력하세요.');
        return;
    }

    try {
        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                alert("올바른 연산자를 선택하세요.");
                return;
        }

        document.getElementById('result').textContent = result;
    } catch (error) {
        alert(error.message);
    }
};

