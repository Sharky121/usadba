<?php

$to = 'info@usadba-na-pre.ru, Sharky121@mail.ru, olga6227@gmail.com, Ushmor@list.ru';
$subject = 'Бронирование с сайта';
$headers = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=utf-8";
$headers[] = "From: usadba-na-pre.ru";
$headers[] = "Reply-To: info@usadba-na-pre.ru";
$headers[] = "X-Mailer: PHP/".phpversion();

if(isset($_POST["start-date"]) && !empty($_POST["start-date"])) {
  $startDate = trim($_POST["start-date"]);
} else {
  $startDate = '';
}

if(isset($_POST["end-date"]) && !empty($_POST["end-date"])) {
  $endDate = trim($_POST["end-date"]);
} else {
  $endDate = '';
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

if(isset($_POST["house-name"]) && !empty($_POST["house-name"])) {
  $house = trim($_POST["house-name"]);
  switch ($house) {
    case 'pra':
      $houseName = 'Усадьба на Пре';
      break;
    case 'ushmor':
      $houseName = 'Усадьба Ушмор';
      break;
    default:
      $houseName = 'Усадьба не выбрана';
      break;
  }
}

$message = '<b>Дата заезда:</b> ' . $startDate . '<br>' .
  '<b>Дата выезда::</b> ' . $endDate . '<br>' .
  '<b>Телефон::</b> ' . $phone . '<br>' .
  '<b>E-mail::</b> ' . $email . '<br>' .
  '<b>Усадьба::</b> ' . $houseName;

mail($to, $subject, $message, implode("\r\n", $headers));
