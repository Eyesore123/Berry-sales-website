<?php
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


$staticDir = __DIR__;


if ($_SERVER['REQUEST_URI'] === '/') {

    include($staticDir . '/index.html');
} elseif (strpos($_SERVER['REQUEST_URI'], '/api/key') === 0) {
   
    header('Content-Type: application/json');
    echo json_encode(['key' => getenv('GMAPS_API_KEY')]);
} else {
 
    $file = $staticDir . $_SERVER['REQUEST_URI'];
    if (file_exists($file)) {
  
        readfile($file);
    } else {
      
        header('HTTP/1.0 404 Not Found');
        echo '404 Not Found';
    }
}


if (!isset($argv[1])) {
    $port = 4173; 
} else {
    $port = $argv[1]; 
}

echo "Server running on http://localhost:$port\n";

?>
