<?php
/**
 * BrainLeague Private Room API
 * Shared multiplayer room coordinator for Hostinger / cPanel web hosting.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Cache-Control: no-cache, no-store, must-revalidate');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$roomsDir = __DIR__ . '/rooms_data';
if (!is_dir($roomsDir)) {
    @mkdir($roomsDir, 0777, true);
}

// Auto cleanup rooms older than 2 hours
$files = @glob($roomsDir . '/*.json');
if ($files) {
    $now = time();
    foreach ($files as $f) {
        if ($now - @filemtime($f) > 7200) {
            @unlink($f);
        }
    }
}

$action = $_GET['action'] ?? $_POST['action'] ?? '';
$input = json_decode(file_get_contents('php://input'), true) ?? [];
if (!$action && isset($input['action'])) {
    $action = $input['action'];
}

function getRoomFile($dir, $code) {
    $clean = preg_replace('/[^A-Z0-9]/', '', strtoupper($code));
    if (strlen($clean) < 3) return null;
    return $dir . '/' . $clean . '.json';
}

switch ($action) {
    case 'get':
        $code = $_GET['code'] ?? $input['code'] ?? '';
        $file = getRoomFile($roomsDir, $code);
        if (!$file || !file_exists($file)) {
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Room not found']);
            exit;
        }
        $data = file_get_contents($file);
        echo $data;
        break;

    case 'save':
    case 'create':
    case 'update':
        $room = $input['room'] ?? $input;
        $code = $room['code'] ?? '';
        $file = getRoomFile($roomsDir, $code);
        if (!$file || empty($code)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid room code']);
            exit;
        }
        file_put_contents($file, json_encode($room, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'room' => $room]);
        break;

    case 'delete':
        $code = $_GET['code'] ?? $input['code'] ?? '';
        $file = getRoomFile($roomsDir, $code);
        if ($file && file_exists($file)) {
            @unlink($file);
        }
        echo json_encode(['success' => true]);
        break;

    default:
        echo json_encode(['status' => 'online', 'service' => 'BrainLeague Room API']);
        break;
}
