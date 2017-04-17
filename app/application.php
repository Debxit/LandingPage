<?php
/**
 * Created by PhpStorm.
 * User: Vasiliy Tsvetkov
 * Date: 17.04.2017
 * Time: 9:34
 */

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = "debxit@gmail.com";
$subject = "От посетителя сайта";
$text =  "Написал(а): $name\n Контактный телефон  - $phone\n\n Текст сообщения: $message\n";

$header.= "Content-type: text/html; charset=utf-8\r\n";
$header .= "MIME-Version: 1.0\r\n";
$sending = mail($to, $subject, $text);

if($sending) echo "Письмо отправлено.";