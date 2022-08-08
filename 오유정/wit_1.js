// function change(button){
//   var new_button = document.getElementById('new');
//   var exit_button = document.getElementById('existing');
//   if(button === 'new_button'){
//     new_button.style.color = "black";
//     new_button.style.backgroundColor="white";
//     exit_button.style.color = "white";
//     exit_button.style.backgroundColor = "transparent";
//   } 
//   else{
//     exit_button.style.color = "black";
//     exit_button.style.backgroundColor="white";
//     new_button.style.color = "white";
//     new_button.style.backgroundColor = "transparent";
//   }
// }
function exit_change(){
  var new_button = document.getElementById('new');
  var exit_button = document.getElementById('existing');
  var input_login = document.getElementsByClassName('input-login')[0];
  var input_signup = document.getElementsByClassName('input-signup')[0];
    exit_button.style.color = "black";
    exit_button.style.backgroundColor="white";
    new_button.style.color = "white";
    new_button.style.backgroundColor = "transparent";
    input_login.style.display = "flex";
    input_signup.style.display = "none";
}

function new_change(){
  var new_button = document.getElementById('new');
  var exit_button = document.getElementById('existing');
  var input_login = document.getElementsByClassName('input-login')[0];
  var input_signup = document.getElementsByClassName('input-signup')[0];
    new_button.style.color = "black";
    new_button.style.backgroundColor="white";
    exit_button.style.color = "white";
    exit_button.style.backgroundColor = "transparent";
    input_login.style.display = "none";
    input_signup.style.display = "flex";
}