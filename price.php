<?php

$to = 'info@usadba-na-pre.ru, Sharky121@mail.ru, olga6227@gmail.com, Ushmor@list.ru, Samorukova_k@inbox.ru';
//$to = 'Sharky121@mail.ru';
$subject = 'Запрос стоимости';
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

$message = '<b>Имя:</b> ' . $name . '<br>' .
  '<b>Телефон::</b> ' . $phone;

mail($to, $subject, $message, implode("\r\n", $headers));
