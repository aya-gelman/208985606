/*DB*/
const users = [
    { name: "aya", secName: "gelman", phone: "1111111111", manager: false },
    { name: "maya", secName: "lali", phone: "0542222222", manager: true }
]

let input = localStorage.getItem("phone");

function allnumeric(inputtxt) /*validation for input in the log-in page*/ {

    var numbers = /^[0-9]+$/;
    if (inputtxt.value.match(numbers) && inputtxt.value.length == 10) {
        alert('פרטי התחברות תקינים!');
        document.logInForm.phone.focus();
        localStorage.setItem("phone", inputtxt.value);
        return true;
    } else {
        alert('מספר לא חוקי! יש להזין מספר טלפון בעל 10 ספרות, שמכיל רק את הספרות 0-9');
        document.logInForm.phone.focus();
        return false;
    }
}


/*validation checks for register page */
function registerValidation(phone, Fname, Sname) {
    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    if (phone.value.match(numbers) && phone.value.length == 10 && Fname.value.match(letters) &&
        Sname.value.match(letters)) {
        document.registerForm.phone.focus();
        return true;
    } else if (!phone.value.match(numbers)) {
        alert('מספר לא חוקי! יש להזין מספר טלפון בעל 10 ספרות, שמכיל רק את הספרות 0-9');
        document.registerForm.phone.focus();
        return false;
    } else if (!Fname.value.match(letters) || !Sname.value.match(letters)) {
        alert(' בשם פרטי ושם ומשפחה ישל להזין רק אותיות באנגלית ');
        document.registerForm.phone.focus();
        return false;
    }
}

function validtionRegister(phone, Fname, Sname) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.value.match(numbers) && inputtxt.value.length == 10) {
        alert('פרטי התחברות תקינים!');
        document.logInForm.phone.focus();

        return true;
    } else {
        alert('מספר לא חוקי! יש להזין מספר טלפון בעל 10 ספרות, שמכיל רק את הספרות 0-9');
        document.logInForm.phone.focus();
        return false;
    }

}

function changeBackGroundColor() {
    document.getElementById("enter").style.backgroundColor = "green";
}


function checkIfManager() {
    const currentUser = users.find(user => user.phone == input);
    if (currentUser.manager)
        document.getElementById('managerOption').style.visibility = 'visible'
    else
        document.getElementById('managerOption').style.visibility = 'hidden'
}









