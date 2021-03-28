<?php

if (isset($_POST['name']) && isset($_POST['message']) && isset($_POST['email']) && isset($_POST['phone'])) {
	$name = $_POST['name'];
	$message = $_POST['message'];
	$mailFrom = $_POST['email'];
	$phone = $_POST['phone'];
	
	$mailTo = "yourfutureworx@outlook.com";
	$headers = "Email: ".$mailFrom.".\r\n" ."Message: ".$message.".\r\n"."Phone: ".$phone.".\r\n";
	$txt = "You have received an e-mail from ".$name.".\n\n";

	mail($mailTo, $txt, $headers);
}

?>
