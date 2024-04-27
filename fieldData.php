<?php
	$data_file = fopen('data.txt', w);

	$name = $_POST['massage'];

	fwrite($data_file, $name);

	fclose($data_file);
?>
