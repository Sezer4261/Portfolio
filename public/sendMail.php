<?php
// Receives the contact form (JSON) and forwards it by email.
// Replace both addresses before deploying.
$recipient = 'konya_sezer@hotmail.de';
$sender = 'noreply@vorname-nachname.de'; // must belong to your own domain, otherwise mails end up as spam

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$name = trim(strip_tags($data['name'] ?? ''));
$email = trim($data['email'] ?? '');
$message = trim(strip_tags($data['message'] ?? ''));
$privacy = ($data['privacy'] ?? false) === true;

$valid = mb_strlen($name) >= 2
    && filter_var($email, FILTER_VALIDATE_EMAIL)
    && mb_strlen($message) >= 10
    && $privacy;

if (!$valid) {
    http_response_code(422);
    echo json_encode(['success' => false]);
    exit;
}

$name = str_replace(["\r", "\n"], ' ', $name);
$subject = '=?UTF-8?B?' . base64_encode("Portfolio: Neue Nachricht von $name") . '?=';
$body = "Name: $name\nE-Mail: $email\n\n$message\n";
$headers = implode("\r\n", [
    "From: Portfolio <$sender>",
    "Reply-To: $email",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
]);

$sent = mail($recipient, $subject, $body, $headers);
http_response_code($sent ? 200 : 500);
echo json_encode(['success' => $sent]);
