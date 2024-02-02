<?php

$to = 'info@usadba-na-pre.ru, Sharky121@mail.ru, olga6227@gmail.com, Ushmor@list.ru';
$subject = 'Вопрос с сайта';
$headers = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=utf-8";
$headers[] = "From: usadba-na-pre.ru";
$headers[] = "Reply-To: info@usadba-na-pre.ru";
$headers[] = "X-Mailer: PHP/".phpversion();

if(isset($_POST["name"]) && !empty($_POST["name"])) {
  $name = trim($_POST["name"]);
} else {
  $name = '';
}

if(isset($_POST["phone"]) && !empty($_POST["phone"])) {
  $phone = trim($_POST["phone"]);
} else {
  $phone = '';
}

if(isset($_POST["email"]) && !empty($_POST["email"])) {
    $email = trim($_POST["email"]);
} else {
    $email = '';
}

$message = '<b>Имя:</b> ' . $name . '<br>' .
  '<b>Email:</b> ' . $email . '<br>' .
  '<b>Телефон::</b> ' . $phone;

mail($to, $subject, $message, implode("\r\n", $headers));
