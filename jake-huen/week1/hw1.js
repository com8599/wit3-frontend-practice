function change1() {
  var new_button = document.getElementById("new");
  var existing_button = document.getElementById("existing");
  var login_before = document.getElementsByClassName("login-before")[0];
  var login_after = document.getElementsByClassName("login-after")[0];
  existing_button.style.color = "black";
  existing_button.style.backgroundColor = "beige";
  new_button.style.color = "beige";
  new_button.style.backgroundColor = "transparent";
  login_before.style.display = "flex";
  login_after.style.display = "none";
}

function change2() {
  var new_button = document.getElementById("new");
  var existing_button = document.getElementById("existing");
  var login_before = document.getElementsByClassName("login-before")[0];
  var login_after = document.getElementsByClassName("login-after")[0];
  new_button.style.color = "black";
  new_button.style.backgroundColor = "beige";
  existing_button.style.color = "beige";
  existing_button.style.backgroundColor = "transparent";
  login_before.style.display = "none";
  login_after.style.display = "flex";
}
