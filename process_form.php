<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "esarahimun@example.com"; // Change to the actual recipient's email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $mailResult = mail($to, $subject, $message, $headers);

    if ($mailResult) {
        echo "Success"; // Sending email successful
    } else {
        echo "Error"; // Sending email failed
    }
}
?>
