let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let personalEmail = document.getElementById("pEmail").value;
  let orgEmail = document.getElementById("oEmail").value;
  let phoneNumber = document.getElementById("phone").value;
  let salary = document.getElementById("salary").value;
  let password = document.getElementById("pass").value;

  //   for FRIST NAME
  var alphNumericRegex = /^[0-9a-zA-Z]+$/;
  if (firstName.trim() == "" || !firstName.match(alphNumericRegex))
   {
    document.getElementById("firstName-error").innerHTML =
      "Enter your first name in alphanumeric form and no special character";
  } else {
    document.getElementById("firstName-error").innerHTML = "";
    console.log(firstName);
  }

  //for LAST NAME
  if (lastName.trim() == "" || !lastName.match(alphNumericRegex)) {
    document.getElementById("lastName-error").innerHTML =
      "Enter your Last name in alphanumeric form and no special character";
  } else {
    document.getElementById("lastName-error").innerHTML = "";
    console.log(lastName);
  }
  //for PERSONAL email
  var regexForPersonalEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    personalEmail.trim() == "" ||
    !personalEmail.match(regexForPersonalEmail)
  ) {
    document.getElementById("personalEmail-error").innerHTML =
      "Enter your valid  personal email";
  } else {
    document.getElementById("personalEmail-error").innerHTML = "";
    console.log(personalEmail);
  }
  //for ORG email
  var regexForOrgEmail = /^[a-zA-Z0-9._%+-]+@1rivet\.com/;
  if (orgEmail.trim() == "" || !orgEmail.match(regexForOrgEmail)) {
    document.getElementById("orgEmail-error").innerHTML =
      "Enter the valid Organization email ";
  } else {
    document.getElementById("orgEmail-error").innerHTML = "";
    console.log(orgEmail);
    true;
  }
  // for PHONE NUMBER
  let phoneRegx = /^\d{10}$/;
  if (phoneNumber.trim() == "" || !phoneNumber.match(phoneRegx)) {
    document.getElementById("phone-error").innerHTML =
      "Enter only 10 digit phone number";
  } else {
    document.getElementById("phone-error").innerHTML = "";
    console.log(phoneNumber);
    true;
  }

  // for SALARY
  let salaryRegex = /^[0-9]*$/;
  if (salary <= 5000 || !salary.match(salaryRegex)) {
    document.getElementById("salary-error").innerHTML =
      "Enter the valid Salary amount that is greater than 5000 ";
  } else {
    document.getElementById("salary-error").innerHTML = "";
    console.log(salary);
    true;
  }

  // for PASSWORD
  let passwordRegx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,16}$/;
  if (password.trim() == "" || !password.match(passwordRegx)) {
    document.getElementById("password-error").innerHTML =
      "Enter the valid password";
  } else {
    document.getElementById("password-error").innerHTML = "";
    console.log(salary);
    true;
  }
});
