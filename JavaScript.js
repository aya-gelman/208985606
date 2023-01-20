/*DB*/
const serverUrl = 'http://localhost:3000/'

const getFromServer = async (table) => {
    let url = serverUrl + table
    let response = await fetch(url);
    return await response.json();
}

const postToServer = async (table, data) => {
    url = serverUrl + table
    let response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}


let users = []

async function loadUsers() {
    users = (await getFromServer('users')).users
}

async function addUser(user) {
    await postToServer('users', user)
}

async function addShift(shift) {
    await postToServer('shifts', shift)
}

async function addRequirementToServer(requirement) {
    await postToServer('requirements', requirement)
}

let input = localStorage.getItem("phone");

function allnumeric(inputtxt) /*validation for input in the log-in page*/ {

    var numbers = /^[0-9]+$/;
    if (inputtxt.value.match(numbers) && inputtxt.value.length == 10) {
        let currentUser = users.find(user => user.phone == inputtxt.value);
        if (currentUser) {
            alert('פרטי התחברות תקינים!');
            document.logInForm.phone.focus();
            localStorage.setItem("phone", inputtxt.value);
            return true;
        } else {
            alert('פרטי התחברות שגויים')
            return false
        }
    } else {
        alert('מספר לא חוקי! יש להזין מספר טלפון בעל 10 ספרות, שמכיל רק את הספרות 0-9');
        document.logInForm.phone.focus();
        return false;
    }
}

 function addNewShift() {
    let details = document.getElementById('addShiftForm').elements
    roles = ""
    for (let i=1; i<=6; i++){
        let roleName = 'role' + i.toString()
        if (details[roleName].checked) {
            roles += ", " + details[roleName].value
        }
    }
    if(!roles) {
        alert('נא לבחור בתפקיד אחד לפחות :)')
        return false
    }
    let workDate = document.getElementById('workDate').value

    let newShift = {
        "workerid": localStorage.getItem("phone"),
        "role": roles,
        "shiftdate": workDate,
        "time": Number(details['time'].value)
    }
    addShift(newShift)
    return true;
 }

 function addRequirement() {
    let details = document.getElementById('requirementsForm').elements

    let workPlaceDate = document.getElementById('workPlaceDate').value
    let numOfWorkers = Number(document.getElementById('numOfWorkers').value)

    let newRequirement = {
        "role": details['role'].value,
        "numOfWorkers": numOfWorkers,
        "reqdate": workPlaceDate,
        "time": Number(details['time'].value)
    }
    addRequirementToServer(newRequirement)
    return true;
 }


/*validation checks for register page */
function registerValidation(phone, Fname, Sname) {
    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    if (phone.value.match(numbers) && phone.value.length == 10 && Fname.value.match(letters) &&
        Sname.value.match(letters)) {
        document.registerForm.phone.focus();
        addUser({
            "firstname": Fname.value,
            "lastname": Sname.value,
            "phone": phone.value,
            "role": role_register.value,
            "manager": false
        })
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
    const isManager = localStorage.getItem("manager");
    if (isManager)
        document.getElementById('managerOption').style.visibility = 'visible'
    else
        document.getElementById('managerOption').style.visibility = 'hidden'
}









