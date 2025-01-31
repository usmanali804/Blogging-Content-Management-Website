<?php
include 'db_functions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (registerUser($name, $email, $password)) {
        header("Location: home1.html");
        exit();
    } else {
        echo "Registration failed!";
    }
}
?>
