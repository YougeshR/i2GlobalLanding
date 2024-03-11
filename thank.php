

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
  display: inline-block;
}

.image-container img {
  display: block;
  width: 1250px;
  height: 527px;;
}

.content {
  position: absolute;
  top: 90%; 
  left: 50%; 
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
<a href="./index.html"> <i class="fa-sharp fa-regular fa-circle-left fa-xl" style="padding-bottom: 15px;"></i></a>
    <img src="./assets/img/logo/thankyou.jpg" alt="">  
<div class="content">
    <!-- <img src="./assets/img/icon/sign/thanks.png"  alt="image1"> -->
    <h2>Thank you for your time and connecting with us. It’s an honor!</h2>
</div>
</div>

</body>
</html>
