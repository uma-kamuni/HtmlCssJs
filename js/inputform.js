let salary=document.querySelector("#salary");
let output=document.querySelector(".salary-output")
output.textContent=salary.value;
    salary.addEventListener('input',function() {
        output.textContent=salary.value;
});
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener( 'input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z \s]{2,}$');
    if (nameRegex.test(text.value))
    textError.textContent="";
    else textError.textContent = "Name is Incorrect";
});
const password = document.querySelector('#password');     
const passwordError = document.querySelector('.password-error');
password.addEventListener( 'input', function() {
    let passwordRegex = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,}$');
    if (passwordRegex.test(password.value)) {
    passwordError.textContent="";
    } else { passwordError.textContent = "Password is Incorrect";
}
});
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener( 'input', function() {
    let emailRegex = RegExp('^[a-zA-Z0-9+_.]+@[a-zA-Z.-]+$');
    if (emailRegex.test(email.value)) {
    emailError.textContent="";
    } else {
        emailError.textContent = "Email is Incorrect";
    }
});
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
number.addEventListener( 'input', function() {
    let telRegex = RegExp('^[0-9]{2}[ ]{1}[0-9]{10}$');
    if (telRegex.test(tel.value)) {
    telError.textContent="";
    } else { telError.textContent = "Tel is Incorrect";
}
});