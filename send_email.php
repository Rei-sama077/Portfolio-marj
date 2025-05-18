<?php

if(empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["message"])) {
    die("Please fill all required fields");
}

$name = htmlspecialchars($_POST["name"]);
$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($_POST["phone"] ?? '');
$message = htmlspecialchars($_POST["message"]);

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);


try {
    // Enable verbose debug output
    $mail->SMTPDebug = SMTP::DEBUG_CONNECTION; // Shows full SMTP interaction
    $mail->Debugoutput = function($str, $level) {
        echo "Debug: $str\n"; // Print debug output in real-time
    };
$mail->SMTPDebug = SMTP::DEBUG_SERVER; 
$mail->SMTPAuth = true;
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;

$mail->Username = "marjorie.matilos20@gmail.com";
$mail->Password = "gvmt resk gdfs rzzl";

$mail->setFrom($email, $name);
$mail->addAddress("marjorie.matilos18@gmail.com", "Marjorie");

$mail->Subject = $phone;
$mail->Body = $message;

$mail->send();

echo "email sent";

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
