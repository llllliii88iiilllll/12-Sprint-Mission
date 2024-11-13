// const inputs = document.querySelector('input');
// const errorMessage = document.createElement('p');
// errorMessage.classList.add('error');
// const inputEmail = document.querySelector('#login-email');
// const inputPw = document.querySelector('#login-password');
//const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// function noContent() {
//     if(this.value === '') {
//         this.classList.add('error-border');
//         this.after(errorMessage);
//         errorMessage.append(this.placeholder);
//     } else {
//         this.classList.remove('error-border');
//         errorMessage.remove();
//     } 
// };

// function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (regex.test(inputEmail)) {
//         alert("The email address is valid.");
//     } else {
//         alert("The email address is invalid.");
//     }
// }

// inputEmail.addEventListener('focusout', function() {
//     if(this.value === '') {
//         this.classList.add('error-border');
//         this.after(errorMessage);
//         errorMessage.append(this.placeholder);
//     } else if(validEmailCheck(this) == false) {
//         this.classList.remove('error-border');
//         errorMessage.remove();
//     };
// }); 

// function validEmailCheck(obj) {
//     const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
//     return (obj.value.match(pattern) != null);
// }






// password show, hide

const pwToggle = document.querySelector('#viewToggle');
const toggleImg = document.querySelector('.toggle-img');


pwToggle.addEventListener('click', () => {
    if(pwToggle.className === 'hide') {
        pwToggle.className = 'show';
        toggleImg.src = 'images/btn_visibility_on.svg';
        toggleImg.alt = '비밀번호 보이기';
        inputPw.type = 'text';
    } else {
        pwToggle.className = 'hide';
        toggleImg.src = 'images/btn_visibility_off.svg';
        inputPw.type = 'password';
        toggleImg.alt = '비밀번호 가리기';
    }
})


const submitBtn = document.getElementsByClassName('submit-btn');




function validateForm() {
    if (email == '' || password == '') {
        
        return false;
    } 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 ㅌㅌㅌ');
        return false;
    } else {

    }
    
    submitBtn.classList.remove('disabled');
    return true;
};



// const form = document.getElementById('login-form');

// form.addEventListener('focusout', (event) => {
//     const targetInput = event.target;
//     if (targetInput.value == '') {
//         targetInput.classList.add('error-border');
//         const errorTxtbox = document.createElement('p');
//         errorTxtbox.classList.add('error-txt');
//         const errorTxt = targetInput.placeholder;
//         targetInput.after(errorTxtbox);
//         errorTxtbox.append(errorTxt);
//     } else {
//         targetInput.classList.remove('error-border');
//         targetInput.nextSibling.remove();
//     }
// });



// inputEmail.addEventListener('focusout', () => {
//     if(email == '') {
//         inputEmail.classList.add('error-border');
//     } else {
//         inputEmail.classList.remove('error-border');
//     }
    
// });

// inputEmail.addEventListener('focusin', function() {
//     const errorTxt = inputEmail.nextSibling.remove();
// })

// const errorBox = document.createElement('p');
//         inputEmail.after(errorBox);
//         errorBox.append(inputEmail.placeholder);



const pwToggle = document.querySelector('#viewToggle');
const toggleImg = document.querySelector('.toggle-img');


pwToggle.addEventListener('click', () => {
    if(pwToggle.className === 'hide') {
        pwToggle.className = 'show';
        toggleImg.src = 'images/btn_visibility_on.svg';
        toggleImg.alt = '비밀번호 보이기';
        inputPw.type = 'text';
    } else {
        pwToggle.className = 'hide';
        toggleImg.src = 'images/btn_visibility_off.svg';
        inputPw.type = 'password';
        toggleImg.alt = '비밀번호 가리기';
    }
});
