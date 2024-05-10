<?php

$clientTime =$_POST['lastModified'];
# track changes on server
$servertime = filemtime('customers.txt');

while ($clientTime >= $servertime) {
    sleep(1);
    clearstatcache();
    $servertime = filemtime('customers.txt');

}
//var_dump($data);
$data = file_get_contents('customers.txt');

$message = [
    'rows'=>$data,
    'client_time'=>$clientTime,
    'server_time'=>$servertime
];


echo json_encode($message);