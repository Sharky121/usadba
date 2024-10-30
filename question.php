<?php

$to = 'info@usadba-na-pre.ru, Sharky121@mail.ru, olga6227@gmail.com, Ushmor@list.ru, Samorukova_k@inbox.ru';
$subject = 'Вопрос с сайта';
$headers = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=utf-8";
$headers[] = "From: usadba-na-pre.ru";
$headers[] = "Reply-To: info@usadba-na-pre.ru";
$headers[] = "X-Mailer: PHP/".phpversion();

$name = isset($_POST["name"]) && !empty($_POST["name"]) ? trim($_POST["name"]) : '';
$email = isset($_POST["email"]) && !empty($_POST["email"]) ? trim($_POST["email"]) : '';
$phone = isset($_POST["phone"]) && !empty($_POST["phone"]) ? trim($_POST["phone"]) : '';

// Проверка имени на русском языке
if (!empty($name) && !preg_match('/^[а-яё\s]+$/ui', $name)) {
    echo "Имя должно быть на русском языке!";
    exit;
}

// Проверка на пустоту всех полей
if (empty($name) && empty($email) && empty($phone)) {
  // Все поля пусты, не отправляем письмо
  echo "Необходимо заполнить хотя бы одно поле!";
  exit;
}
$message = '<b>Имя:</b> ' . $name . '<br>' .
  '<b>Email:</b> ' . $email . '<br>' .
  '<b>Телефон::</b> ' . $phone;

mail($to, $subject, $message, implode("\r\n", $headers));
