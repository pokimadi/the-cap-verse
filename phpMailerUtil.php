<?php

  require("includes/PHPMailer.php");
  require("includes/SMTP.php");

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP

    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465; // or 587
    $mail->IsHTML(true);
    $mail->Username = "testdaosmtpjs@gmail.com";
    $mail->Password = "qqoereaehrjsxbgh";
    $mail->SetFrom("testdaosmtpjs@gmail.com", "Aleksa Novevski");
    $mail->Subject = "[JOIN DAOVERSE CONTACT FORM]";
    $mail->Body = "<p>Name: name</p><br><p>Email: blabla@gmail.com</p><br><p>Message:<br>THIS IS THE MESSAGE</p>";
    $mail->AddAddress("akan97@gmail.com");

     if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
     } else {
echo "Message has been sent";

header('Location: index.html');
exit;
     }
?>