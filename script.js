// function sendmail(){
  
// Email.send({
//     Host : "smtp.gmail.com",
//     SecureToken : "1fd900e8-d334-4bbe-acec-9546babfa727",
//     To : 'yougeshravichandran58@gmail.com',
//     From : "yougeshravichandran58@gmail.com",
//     Subject : "New User Details",
//     Body : "Name: " + document.getElementById("fullname").value
//          +"<br> Email: "  + document.getElementById("email").value
//          +"<br> Phone No. : "  + document.getElementById("phonenumber").value
//          +"<br> Age: "  + document.getElementById("age").value

// }).then(
//   message => alert("Message Succesfully Sent..")
// );

// }
function sendmail(){

const fname = document.getElementById('fullname');
const phonenumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const location = document.getElementById('locations');
const course = document.getElementById('course');
const school = document.getElementById('school');
const grade = document.getElementById('grade');
//Add event listener on form container
const submit = document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('clicked');
    let ebody=` 
    <b>Name: </b>${fname.value}
    <br>
    <b>Phone Number: </b>${phonenumber.value}
    <br>
    <b>Email ID: </b>${email.value}
    <br>
    <b>Location: </b>${location.value}
    <br>
    <b>Choosen Course: </b>${course.value}
    <br>
    <b>Current School Name: </b>${school.value}
    <br>
    <b>Current Grade: </b>${grade.value}
    <br> `
    console.log(ebody);
    //Email code
   Email.send({
        SecureToken : "0c72670b-4e09-4357-859f-7a5bf13dd3a1",
        To : 'yougeshravi00@gmail.com',
        From : "yougeshravi00@gmail.com",
        Subject : "Testing email",
        Body : ebody
    }).then(
      message => alert(message)
    );
}); 

}


