<?php

include_once('db_link.php');

$request = $_REQUEST;
$check_in = $request['checkIn'];
$check_out = $request['checkOut'];
$person_numbers = $request['numberOfPersons'];

if(!empty($check_in) && !empty($check_out) && !empty($person_numbers))
{
    $sql = "INSERT INTO `booking` (`check_in`, `check_out`, `persons_number`) VALUES ('$check_in', '$check_out', '$person_numbers')";
    $result = mysqli_query($link, $sql);
}
else
{
    http_response_code(400);
}

mysqli_close($link);
?>