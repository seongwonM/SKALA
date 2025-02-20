// document.getElementById('loginForm').addEventListener()...
// 위에 처럼 loginForm의 id를 가져와서 바로 뒤에 .add 어쩌구 붙이는건 위험
//  -> id가 loginForm이 아닐 수도 있음. 그러면 오류 발생.



const loginform = document.getElementById('loginForm') // click 쓸거면 loginButton으로 -> 근데 form이 자동 제출 되면서 페이지가 새로고침됨.

if (loginform) {
    loginform.addEventListener('submit', function(event) { // click으로하면 form 어디를 눌러도 이벤트 발생 -> click 쓸거면 버튼으로 불러와야됨
        event.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // 입력값 검증 (예: 이메일 형식 체크)
        if (!email || !password) {
            alert("모든 필드를 채워주세요.");
            return;
        }
    
        // 메시지 표시
        const message = `로그인 성공!<br>이메일: ${email}`;
        document.getElementById('message').innerHTML = message;
    });
}

