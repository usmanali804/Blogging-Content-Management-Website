<?php
session_start();
include 'db_functions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $error_message = "";
    $error_type = "";

    if (loginUser($email, $password, $error_message, $error_type)) {
        $_SESSION['email'] = $email; // Store user email in session
        header("Location: home1.html");
        exit();
    } else {
        $_SESSION[$error_type] = $error_message;
        header("Location: login.html?error_message=$error_message&error_type=$error_type");
        exit();
    }
}
?>
