<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" type="text/css" href="../css/language-style.css" > 
		<title>DOL Language-widget Demo
		</title>
	</head>
    <!--[if lt IE 7 ]> <body class=" ie6 "> <![endif]-->
    <!--[if IE 7 ]>    <body class=" ie7 "> <![endif]-->
    <!--[if IE 8 ]>    <body class=" ie8 "> <![endif]-->

    <!--[if IE 9 ]>    <body class=" ie9 "> <![endif]-->
    <!--[if (gt IE 9)|!(IE)]><!--> 
	<body class="">
	<!--<![endif]--> 
		<div>
		<p>
		server side include implementation
		</p>
		<!--#include file="../language-widget.inc"-->
		<?php 
			include "../language-widget.inc"
		?>
		</div>

		<?php 
			include "../complaint-form.html"
		?>

		<script src="../js/jquery.js" ></script>
		<script src="../js/expandables.js" ></script>
</body>
</html>