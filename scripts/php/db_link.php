<?php

$server = 'localhost';
$username = 'root';
$password = '';
$db = 'theglasshuts';


$link = mysqli_connect($server, $username, $password);


if (!$link){
    die('error');
}

mysqli_select_db($link, $db);

?>