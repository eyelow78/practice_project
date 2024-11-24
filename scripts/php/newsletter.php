<?php

include_once('db_link.php');

$request = $_REQUEST;
$email = $request['email'];

if(!empty($email))
{
    $sql = "INSERT INTO `newsletter_subscribers` (`email`) VALUES ('$email')";
    $result = mysqli_query($link, $sql);
}
else
{
    http_response_code(400);
}


mysqli_close($link);
?>