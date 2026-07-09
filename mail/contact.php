<?php
// ── Validate required fields ──────────────────────────────────────────────────
if (
    empty($_POST['name'])    ||
    empty($_POST['subject']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    http_response_code(500);
    exit();
}

// ── Sanitise inputs ───────────────────────────────────────────────────────────
$name      = strip_tags(htmlspecialchars($_POST['name']));
$email     = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message   = strip_tags(htmlspecialchars($_POST['message']));
$phone     = isset($_POST['phone']) ? strip_tags(htmlspecialchars($_POST['phone'])) : 'Not provided';

// ── Mail settings ─────────────────────────────────────────────────────────────
$to      = "mayuraconstruction25@gmail.com";
$subject = "Website Enquiry - $m_subject: $name";

$body  = "You have received a new enquiry from your website contact form.\n\n";
$body .= "-------------------------------\n";
$body .= "Name    : $name\n";
$body .= "Email   : $email\n";
$body .= "Phone   : $phone\n";
$body .= "Subject : $m_subject\n";
$body .= "-------------------------------\n";
$body .= "Message :\n$message\n";

$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── Send ─────────────────────────────────────────────────────────────────────
if (!mail($to, $subject, $body, $headers)) {
    http_response_code(500);
}
?>
