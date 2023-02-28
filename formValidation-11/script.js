let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let personalEmail = document.getElementById("pEmail").value;
    let orgEmail = document.getElementById("oEmail").value;
    let phoneNumber = document.getElementById("phone").value;
    let salary = document.getElementById("salary").value;




    var alphNumericRegex = /^[0-9a-zA-Z]+$/;
    //for FRIST NAME 
    if (firstName.trim() == "" || !firstName.match(alphNumericRegex)) {
        alert("Enter your first name in alphanumeric form and no special character");
    } else {
        console.log(firstName);

    }
    //for LAST NAME
    if (lastName.trim() == "" || !lastName.match(alphNumericRegex)) {
        alert("Enter your Last name in alphanumeric form and no special character");
    } else {
        console.log(lastName);

    }
    //for PERSONAL email
    var regexForPersonalEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (personalEmail.trim() == "" ||!personalEmail.match(regexForPersonalEmail) ) {
        alert("enter the valid email")
} 
//for ORG email
var regexForOrgEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
if (orgEmail.trim() == "" ||!personalEmail.match(regexForOrgEmail) ) {
    alert("enter the valid email")
} 
    // for PHONE NUMBER
    let phoneRegx = /^\d{10}$/;
    if (phoneNumber.trim() == "" || !phoneNumber.match(phoneRegx)) {
        alert("Enter the valid 10 digit phone number")

    } else {
        console.log(phoneNumber);
        true;

    }







});




