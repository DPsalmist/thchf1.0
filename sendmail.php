<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "hello@thchf.org,admin@thchf.org,omoditunu.olaopa@thchf.org"; // Replace with your cPanel email

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = nl2br(htmlspecialchars($_POST['message']));

    $subject = "New Message from Website";
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    $body = "
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Message sent successfully!";
    } else {
        echo "❌ Message failed to send.";
    }
} else {
    echo "Access denied.";
}
