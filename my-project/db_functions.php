<?php
include 'db_config.php';

function registerUser($name, $email, $password) {
    global $conn;
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function loginUser($email, $password, &$error_message, &$error_type) {
    global $conn;
    $sql = "SELECT password FROM users WHERE email='$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            return true;
        } else {
            $error_message = "Incorrect password.";
            $error_type = "password_error";
            return false;
        }
    } else {
        $error_message = "Email not found.";
        $error_type = "email_error";
        return false;
    }
}
?>
