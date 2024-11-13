//errMsg
const errMsg = {
    email: {
        none: "이메일을 입력해주세요.",
        invalid: "잘못된 이메일 형식입니다."
    },
    pw: {
        none: "비밀번호를 입력해주세요.",
        invalid: "비밀번호를 8자 이상 입력해주세요."
    },
    pwRe: {
        none: "비밀번호를 다시 입력해주세요.",
        fail: "비밀번호가 일치하지 않습니다."
    },
    nick: {
        none: "닉네임을 입력해주세요."
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
const inputEmail = document.getElementById('signup-email');
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
const inputPw = document.getElementById('signup-password');
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


// nickname 
const inputNick = document.getElementById('signup-nickname');
inputNick.addEventListener('focusout', () => {
    const errorTxtbox = document.createElement('p');
    errorTxtbox.classList.add('error-txt');
    if (inputNick.value == '') {
        inputNick.classList.add('error-border');
        inputNick.after(errorTxtbox);
        errorTxtbox.textContent = errMsg.nick.none;
    }  else {
        inputNick.classList.remove('error-border');
        inputNick.nextSibling.remove();
    }
});

inputNick.addEventListener('focusin',() => {
    inputNick.nextSibling.remove();
});


// pw rewrite
const inputPwre = document.getElementById('signup-password-rewrite');
inputPwre.addEventListener('focusout', () => {
    const errorTxtbox = document.createElement('p');
    errorTxtbox.classList.add('error-txt');
    if (inputPwre.value == '') {
        inputPwre.classList.add('error-border');
        inputPwre.parentElement.after(errorTxtbox);
        errorTxtbox.textContent = errMsg.pwRe.none;
    } else if (inputPwre.value !== inputPw.value) {
        inputPwre.classList.add('error-border');
        inputPwre.parentElement.after(errorTxtbox);
        errorTxtbox.textContent = errMsg.pwRe.fail;
    } else {
        inputPwre.classList.remove('error-border');
        inputPwre.parentElement.nextSibling.remove();
    }
});

inputPwre.addEventListener('focusin',() => {
    inputPwre.parentElement.nextSibling.remove();
});


// submit-btn disable, able
const submitBtn = document.querySelector('.submit-btn');
function btnAble() {
    const email = inputEmail.value;
    const pw = inputPw.value;
    const nick = inputNick.value;
    const pwRewrite = inputPwre.value;
    if(emailValidChk(email) === true && email && pw != ''  && pw.length > 7 && nick && pwRewrite != '' && pw === pwRewrite) {
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
}

// password show, hide
const pwToggle = document.querySelectorAll('#viewToggle');
const toggleImg = document.getElementsByClassName('toggle-img');
const inputPwtoggle = document.getElementsByClassName('password');

for (let i = 0; i < pwToggle.length; i++) {
    pwToggle[i].addEventListener('click', () => {
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
}

// move 
function goSignin() {
    let link = '../signin.html';
    location.href = link;
};





