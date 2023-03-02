let submitButton = document.getElementById("submit");

function validateFirstName() {
    let firstName = document.getElementById("fname").value;

    var alphNumericRegex = /^[0-9a-zA-Z]+$/;
    if (firstName.trim() == "" || !firstName.match(alphNumericRegex)) {
        document.getElementById("firstNameerror").innerHTML =
            "Enter your first name in alphanumeric form and no special character";
        let inputColor = document.getElementById("fname");
        inputColor.style.border = "1px solid red";
    } else {
        let inputColor = document.getElementById("fname");
        inputColor.style.border = "1px solid green";

        document.getElementById("firstNameerror").innerHTML = "";
        console.log(firstName);
    }
}

function validateLastName() {
    //for LAST NAME
    var alphNumericRegex = /^[0-9a-zA-Z]+$/;
    let lastName = document.getElementById("lname").value;
    if (lastName.trim() == "" || !lastName.match(alphNumericRegex)) {
        document.getElementById("lastNameerror").innerHTML =
            "Enter your Last name in alphanumeric form and no special character";
        let inputColor = document.getElementById("lname");
        inputColor.style.border = "1px solid red";
    } else {
        let inputColor = document.getElementById("lname");
        inputColor.style.border = "1px solid green";

        document.getElementById("lastNameerror").innerHTML = "";
        console.log(lastName);
    }
}
function validatePersonalEmail() {
    let personalEmail = document.getElementById("pEmail").value;
    //for PERSONAL email
    var regexForPersonalEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[com,in]{2,3})*$/;
    if (
        personalEmail.trim() == "" ||
        !personalEmail.match(regexForPersonalEmail)
    ) {
        document.getElementById("personalEmailerror").innerHTML =
            "Enter your valid  personal email";
        let inputColor = document.getElementById("pEmail");
        inputColor.style.border = "1px solid red";
    } else {
        let inputColor = document.getElementById("pEmail");
        inputColor.style.border = "1px solid green";

        document.getElementById("personalEmailerror").innerHTML = "";
        console.log(personalEmail);
    }
}

function validateOrgEmail() {
    //for ORG email
    let orgEmail = document.getElementById("oEmail").value;
    var regexForOrgEmail = /^[a-zA-Z0-9._%+-]+@1rivet\.com$/;
    if (orgEmail.trim() == "" || !orgEmail.match(regexForOrgEmail)) {
        document.getElementById("orgEmailerror").innerHTML =
            "Enter the valid Organization email ";
        let inputColor = document.getElementById("oEmail");
        inputColor.style.border = "1px solid red";
    } else {
        let inputColor = document.getElementById("oEmail");
        inputColor.style.border = "1px solid green";

        document.getElementById("orgEmailerror").innerHTML = "";
        console.log(orgEmail);
        true;
    }
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById("phone").value;
    // for PHONE NUMBER
    let phoneRegx = /^\d{10}$/;
    if (phoneNumber.trim() == "" || !phoneNumber.match(phoneRegx)) {
        document.getElementById("phoneerror").innerHTML =
            "Enter only 10 digit phone number";
        let inputColor = document.getElementById("phone");
        inputColor.style.border = "1px solid red";
    } else {
        let inputColor = document.getElementById("phone");
        inputColor.style.border = "1px solid green";
        document.getElementById("phoneerror").innerHTML = "";
        console.log(phoneNumber);
        true;
    }
}

function validateSalary() {
    // for SALARY

    let salary = document.getElementById("salary").value;
    let salaryRegex = /^[0-9]*$/;
    if (salary <= 5000 || !salary.match(salaryRegex)) {
        document.getElementById("salaryerror").innerHTML =
            "Enter the valid Salary amount that is greater than 5000 ";
        let inputColor = document.getElementById("salary");
        inputColor.style.border = "1px solid red";
    } else {
        let inputColor = document.getElementById("salary");
        inputColor.style.border = "1px solid green";

        document.getElementById("salaryerror").innerHTML = "";
        console.log(salary);
        true;
    }
}

function ValidatePassword() {
    let password = document.getElementById("pass").value;
    // for PASSWORD
    let passwordRegx =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,16}$/;
    if (password.trim() == "" || !password.match(passwordRegx)) {
        document.getElementById("passworderror").innerHTML =
            "Enter the valid password";
        let inputColor = document.getElementById("pass");
        inputColor.style.border = "1px solid red";
    } else {
        let inputColor = document.getElementById("pass");
        inputColor.style.border = "1px solid green";
        document.getElementById("passworderror").innerHTML = "";
        console.log(salary);
        true;
    }
}
submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    validateFirstName();
    validateLastName();
    validatePersonalEmail();
    validateOrgEmail();
    validatePhoneNumber();
    validateSalary();
    ValidatePassword();
    // to post the data to jason file

    if (
        firstNameerror.innerHTML == "" && lastNameerror.innerHTML == "" && personalEmailerror.innerHTML == "" && orgEmailerror.innerHTML == "" && phoneerror.innerHTML == "" && salaryerror.innerHTML == "" && passworderror.innerHTML == ""
    ) 
    {
        fetch("http://localhost:3000/table", {
            method: "POST",
            body: JSON.stringify({
                fname: firstName,
                lname: lastName,
                pEmail: personalEmail,
                oEmail: orgEmail,
                phone: phoneNumber,
                salary: salary,
                pass: password,
            }),
            headers: { "content-type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => error);
    }
});