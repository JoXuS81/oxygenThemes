<?php


/* 

Table of Contents

1. Get Data from the Form

*/


// Get Data from the Form
$name = $_POST['nameArea'];
$email= $_POST['mailArea'];
$phone= $_POST['phoneArea'];
$message= $_POST['messageArea'];
$to = "";
$subject = "Mail from CreativY";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone = " . $phone . "\r\n Message =" . $message;
$headers = "From: CreativY" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>