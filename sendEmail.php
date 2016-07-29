<?php

//connect to DB
$host = "127.0.0.1";
$db = 'marketing-offsite';
$user = 'root';
$pass = '';


$connection = mysqli_connect($host, $user, $pass, $db);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

//insert registration
$q = "INSERT INTO registrations (first, last, email, phone, shirt, jacket, shoes, pant) VALUES(
	 '".$_POST['fname']."', 
	'".$_POST['lname']."', 
	'".$_POST['email']."', 
	'".$_POST['phone']."', 
	'".$_POST['shirt']."',
	'".$_POST['jacket']."',
	'".$_POST['shoes']."',
	'".$_POST['pant']."'	
	 )";
	 
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));
// mysql_query($q) or die ("Error in query: $q. ".mysql_error());


?>