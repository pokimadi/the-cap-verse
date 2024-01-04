<?php
 
header("Content-Type: application/json");
$realData = file_get_contents("php://input");
$data = json_decode($realData); 
if($data != null){
    $file = fopen('text.JSON', 'w+');
    fwrite($file, $realData);
    fclose($file);
}
 
?>