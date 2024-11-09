//errMsg
const errMsg = {
    email: {
        none: "이메일을 입력해주세요.",
        invalid: "잘못된 이메일 형식입니다."
    },
    pw: {
        none: "비밀번호를 입력해주세요.",
        invalid: "비밀번호를 8자 이상 입력해주세요."
    }
};

// email validChk
function emailValidChk(email) {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if(pattern.test(email) === false) { 
        return false; 
    } else { 
        return true;
    }
};


// email error
const inputEmail = document.getElementById('login-email');
inputEmail.addEventListener('focusout', () => {
    const errorTxtbox = document.createElement('p');
    errorTxtbox.classList.add('error-txt');
    if (inputEmail.value == '') {
        inputEmail.classList.add('error-border');
        inputEmail.after(errorTxtbox);
        errorTxtbox.textContent = errMsg.email.none;
    } else if (emailValidChk(inputEmail.value) === false) {
        inputEmail.classList.add('error-border');
        inputEmail.after(errorTxtbox);
        errorTxtbox.textContent = errMsg.email.invalid;
    } else {
        inputEmail.classList.remove('error-border');
        inputEmail.nextSibling.remove();
    }
});

inputEmail.addEventListener('focusin',() => {
    inputEmail.nextSibling.remove();
});


// pw error
const inputPw = document.getElementById('login-password');
inputPw.addEventListener('focusout', () => {
    const errorTxtbox = document.createElement('p');
    errorTxtbox.classList.add('error-txt');
    if (inputPw.value == '') {
        inputPw.classList.add('error-border');
        inputPw.parentElement.after(errorTxtbox);
        errorTxtbox.textContent = errMsg.pw.none;
    } else if (inputPw.value.length < 8) {
        inputPw.classList.add('error-border');
        inputPw.parentElement.after(errorTxtbox);
        errorTxtbox.textContent = errMsg.pw.invalid;
    } else {
        inputPw.classList.remove('error-border');
        inputPw.parentElement.nextSibling.remove();
    }
});

inputPw.addEventListener('focusin',() => {
    inputPw.parentElement.nextSibling.remove();
});


// submit-btn disable, able
const submitBtn = document.querySelector('.submit-btn');
function btnAble() {
    const email = inputEmail.value;
    const pw = inputPw.value;
    if(email && pw != '' && emailValidChk(email) === true && pw.length > 7) {
        submitBtn.disabled = false;
        submitBtn.classList.add('abled');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('abled');
    }
};

const form = document.getElementsByTagName('form');
const inputs = document.getElementsByTagName('input');
for ( let i = 0; i < inputs.length; i++ ) {
    inputs[i].addEventListener('focusout', btnAble);
};


// password show, hide
const pwToggle = document.querySelectorAll('#viewToggle');
const toggleImg = document.getElementsByClassName('toggle-img');
const inputPwtoggle = document.getElementsByClassName('password');

for (let i = 0; i < pwToggle.length; i++) {
    pwToggle[i].addEventListener('click', (e) => {
        if(pwToggle[i].className === 'hide') {
            pwToggle[i].className = 'show';
            toggleImg[i].src = 'images/btn_visibility_on.svg';
            toggleImg[i].alt = '비밀번호 보이기';
            inputPwtoggle[i].type = "text";
        } else {
            pwToggle[i].className = 'hide';
            toggleImg[i].src = 'images/btn_visibility_off.svg';
            inputPwtoggle[i].type = 'password';
            toggleImg[i].alt = '비밀번호 가리기';
        }
    });
};

// move
function goItems() {
    let link = '../items.html';
    location.href = link;
};
