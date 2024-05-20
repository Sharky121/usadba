<?php

//$to = 'info@usadba-na-pre.ru';
$to = 'Sharky121@mail.ru, info@usadba-na-pre.ru, olga6227@gmail.com, Ushmor@list.ru, Samorukova_k@inbox.ru';
$subject = 'Перезвоните мне';
$headers = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=utf-8";
$headers[] = "From: usadba-na-pre.ru";
$headers[] = "Reply-To: info@usadba-na-pre.ru";
$headers[] = "X-Mailer: PHP/".phpversion();

if(isset($_POST["subject"]) && !empty($_POST["subject"])) {
  $subject = trim($_POST["subject"]);
} else {
  $subject = 'Обратная связь с сайта';
}

if(isset($_POST["name"]) && !empty($_POST["name"])) {
  $name = trim($_POST["name"]);
} else {
  $name = '';
}

if(isset($_POST["email"]) && !empty($_POST["email"])) {
  $email = trim($_POST["email"]);
} else {
  $email = '';
}


if(isset($_POST["phone"]) && !empty($_POST["phone"])) {
  $phone = trim($_POST["phone"]);
} else {
  $phone = '';
}

$message = '<b>Имя:</b> ' . $name . '<br>' .
  '<b>Email:</b> ' . $email . '<br>' .
  '<b>Телефон::</b> ' . $phone;

mail($to, $subject, $message, implode("\r\n", $headers));
