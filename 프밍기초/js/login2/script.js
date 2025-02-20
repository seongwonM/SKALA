function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // 입력값 검증
    if (!email || !password) {
        alert("모든 필드를 채워주세요.");
        return;
    }

    // 메시지 표시
    const message = `로그인 성공!<br>이메일: ${email}`;
    document.getElementById("message").innerHTML = message;
}
