// Old Validation code

// let firstname = document.getElementById("fname");
// let secondname = document.getElementById("lname");
// let emaidi = document.getElementById("uemail");
// let dob = document.getElementById("udob");
// let username = document.getElementById("uname");
// let pass = document.getElementById("upass");
// let cpass = document.getElementById("cupass");

// function validateFrom(){
//     if (firstname.value  == "" || secondname.value == ""|| emaidi.value == "" ||  username.value == "" || pass.value == "" || cpass.value == "" ){
//        alert ("Enter All the Details");
//        return false;
//     }
//     else if (username.value.length >= 10){
//         alert ('User Name is not greater than 10');
//         return false;
//     }
//     else if (pass.value != cpass.value){
//         alert("Password Mismatch");
//         return false;
//     }
//     else{
//        alert("Registration Done");
//        true;
//     }
    
// }

// new validation code
let frompage = document.getElementById("frompage");
let firstname = document.getElementById("fname");
let secondname = document.getElementById("lname");
let emaidi = document.getElementById("uemail");
let username = document.getElementById("uname");
let pass = document.getElementById("upass");
let cpass = document.getElementById("cupass");

// by default it will not redirect
frompage.addEventListener('submit', (ele) => {ele.preventDefault(); validateFrom(); } )


const completeMessage  = () => {
    if (firstname.value && emaidi.value  && pass.value && cpass.value && secondname.value !== "" && pass.value ==cpass.value && username.value.length < 8){
            swal("Success!", "Your data have been saved. Thank you!", "success");
            location.href = "./home.html";
    }
}

// validate Function
function validateFrom() {
    // let frompage = document.getElementById("frompage");
    let firstN = firstname.value.trim();
    let secondN = secondname.value.trim();
    let emaiI = emaidi.value.trim();
    let userNam = username.value.trim();
    let passWord = pass.value.trim();
    let cpassWord = cpass.value.trim();

    if (firstN === ""){
        showErrorMessage(firstname,' * Enter First Name');
    }
     
    if (secondN === ""){
        showErrorMessage(secondname, '* Enter Second Name ');
    }

    if (emaiI === ""){
        showErrorMessage(emaidi,'* Enter email Id');
    }

    if (userNam === ""){
        showErrorMessage(username, '* Enter User Name');
    }
    else if (userNam.length >= 8){
        showErrorMessage(username,'* Length Should less than 7');
    }
    if (passWord !== cpassWord){
        showErrorMessage(pass, '* Enter Correct Password');
    }

    completeMessage();
  
}

function showErrorMessage (data,errorMessage){
    let ele = data.parentElement;
    let show = ele.querySelector('span');
    show.innerText = errorMessage;
    show.style.color = 'red';
}
