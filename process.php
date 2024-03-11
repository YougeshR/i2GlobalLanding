<?php
if(isset($_POST['submit'])){
  $fname= $_POST['fullname'];
  $phonenumber= $_POST['phonenumber'];
  $email= $_POST['email'];
  $whereabouts = $_POST['whereabouts'];
  $course= $_POST['course'];
  $school= $_POST['school'];
  $grade= $_POST['grade'];
   

   
    $link = mysqli_connect("localhost", "root", "", "userdata");
    if($link==false) {
       die(mysqli_connect_error());
    
} else{
   $sql = "INSERT INTO data ( fullname, phonenumber, email, whereabouts, course, school, grade ) VALUE ('$fname', '$phonenumber', '$email','$whereabouts','$course', '$school','$grade')";
    if(mysqli_query($link,$sql)) {
      //  echo "Record Insert Successfully";
      // ob_start();
      // header("Location: thank.php");
      // ob_end_flush();
    } else {
       echo "Something went wrong";
    }

   } 
}


?> 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You page</title>
    <script src="https://kit.fontawesome.com/c85fc07344.js" crossorigin="anonymous"></script>
</head>
<style>
/* .bg{

   background: url("./assets/img/logo/image1.jpg");
   max-width: 1000px;
   background-size: cover;
   background-repeat: no-repeat;
   filter: invert(100%);
}
.content{
    padding-top: 230px;
    padding-left: 550px;
} 
.image-container {
    max-width: 100%;
   background-size: cover;
   background-repeat: no-repeat;
  position: relative;
  display: inline-block;
}
.image-container img {
  max-height: 550px;
  max-width: 100%;
   background-size: cover;
   background-repeat: no-repeat;
}
*/

.image-container {
  position: relative;
  /* display: inline-block; */
}

.image-container .page img {
  /* display: block; */
  width: 70%;
  height: 500px;
  padding-left:15%;

}

.content {
  position: absolute;
  top: 85%; 
  left: 53%; 
  transform: translate(-50%, -50%); 
  /* background-color: #fff ;  */
  color: #000000; 
  padding: 10px 50px; 
  font-size: 20px; 
  text-align: center;
  /* background: url("./assets/img/logo/tick.png"); */
  background-repeat: no-repeat;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    font-size: x-large;
}
/* h3{
    font-style: italic;
    font-size: medium;
} */
/* @media (max-width:1118px){
      .image-container{
        right: 9%;
        position: absolute;
      }
    } */
    @media (max-width:955px){
      .content{
        width:350px;
        font-size: 15px;
      }
    }
    
    @media (max-width:700px){
      .content{
        font-size: 20px;
        top: 75%; 
      }
    }
     @media (max-width:699px){
      .image-container .page img {
      /* display: block; */
      width: 70%;
      height: 400px;
      padding-left:20%;
      padding-top:10%;
      }
      
      .contact .social li{
        padding-top:40%;
        padding-right:10px;
        padding-left:5px;
      }
    }
    .contact{
     padding-left:5%;    
    }
    /* .contact .social{
      padding-bottom: 40px;
    } */
    
    .social li {
      display: inline-block;
      padding-right: 20px;
      font-size: 20px;
    }
    .contact .social li a {
      color: #111111;
    }
</style>
<body>
    <!-- <div style="border: 3px solid red;
    background: url(dogg.jpg);
    background-size: contain;
    background-repeat: no-repeat">
    <img src="./assets/img/icon/sign/thanks.png" height="100" width="100" alt="image">
    <h2>Thank You </h2>
    <h3 style="font-size: large">For submitted the form </h3>
</div> -->

<div class="image-container">
    <!-- download icon -->
<a href="./index.html"> <i class="fa-sharp fa-regular fa-circle-left fa-xl" style="padding-bottom: 15px;">&nbsp;</i >Go back to Home</a>
<div class="page">
<img src="./assets/img/logo/thankyou.jpg" alt=""> 
</div>   
 

</div>
<div class="content">
    <!-- <img src="./assets/img/icon/sign/thanks.png"  alt="image1"> -->
    <h2>Thank you for your time and connecting with us. It’s an honor!</h2>
</div>
<div class="contact">
<ul class="social">
  <li>Contact Us:</li>
  <li><a href="https://www.facebook.com/i2globaltestprep"><i class="fa fa-facebook"></i></a></li>
  <li><a href="https://www.instagram.com/i2global_virtual_learning?igsh=OGY3MTU3OGY1Mw=="><i class="fa fa-instagram"></i></a></li>
  <li><a href="mailto: info@i2global.in"><i class="fa-solid fa-envelope"></i></a></li>
  <li><a href="tel:+919500069193"><i class="fa-solid fa-phone"></i></a></li>
  <li><a href="https://www.linkedin.com/company/i2global-school/?originalSubdomain=in"><i class="fa fa-linkedin"></i></a></li>

  
</ul>
</div>
</body>
</html>


<?php

        // servername => localhost
        // username => root
        // password => empty
        // database name => staff
        // $conn = mysqli_connect("localhost", "root", "", "userdetails");

        // Check connection
        // if($conn === false){
        //     die("ERROR: Could not connect. "
        //         . mysqli_connect_error());
        // }

        // Taking all 5 values from the form data(input)
        // $fullname = $_REQUEST['fullname'];
        // $email = $_REQUEST['email'];
        // $phonenumber = $_REQUEST['phonenumber'];
        // $age = $_REQUEST['age'];


        // We are going to insert the data into our sampleDB table
        // $sql = "INSERT INTO user VALUES ('','$fullname',
        //     '$email','$phonenumber', '$age')";

        // Check if the query is successful
        //if(mysqli_query($conn, $sql)){
            // echo "<h3>data stored in a database successfully."
            //     . " Please browse your localhost php my admin"
            //     . " to view the updated data</h3>";
          //  echo "<script>alert('new record inserted')</script>";

            // echo nl2br("\n$fullname \n$email \n$phonenumber \n$age");
        // } else{
        //     echo "ERROR: Hush! Sorry $sql. "
        //         . mysqli_error($conn);
        // }

        // Close connection
        // mysqli_close($conn);
        ?>