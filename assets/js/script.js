function jsform() {
  var fname = document.forms["RegForm"]["firstname"].value;
  var lname = document.forms["RegForm"]["lastname"].value;
  var email = document.forms["RegForm"]["email"].value;
  var mobile = document.forms["RegForm"]["mobile"].value;

  if (fname == "") {
    document.getElementById("fname").innerHTML = "Please input your first name";
  } else if (fname.length < 2) {
    document.getElementById("fname").innerHTML = "Please input correct name";
  } else {
    document.getElementById("fname").innerHTML = "";
  }

  if (lname == "") {
    document.getElementById("lname").innerHTML = "Please input your last name";
  } else if (lname.length < 2) {
    document.getElementById("lname").innerHTML = "Please input correct name";
  } else {
    document.getElementById("lname").innerHTML = "";
  }

  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  console.log("jsform -> dotposition", dotposition)


  if (mobile == "") {
    document.getElementById("mobile").innerHTML = "Please input your mobile number";
  } else if (isNaN(mobile) || mobile.length < 9) {
    document.getElementById("mobile").innerHTML = "Please input valid mobile number";
  } else {
    document.getElementById("mobile").innerHTML = "";
  }
  if (email == "") {
    console.log("jsform -> email", email)
    document.getElementById("email").innerHTML = "Please input your email";
  } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
    document.getElementById("email").innerHTML = "Please input correct email address";
  } else {
    document.getElementById("email").innerHTML = "";
    return false;
  }
}




















