<!DOCTYPE html>
<html lang="es">
	<head>
		<title>PiVo::login</title>
		<meta charset="UTF-8">
		<meta name=description content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--[if lt IE 9	]>
        <script src='http://html5shim.googlecode.com/svn/trunk/html5.js'></script>
        <![endif]-->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <!--[if IE]><link rel="shortcut icon" href="../inc/pivo.png"><![endif]-->
        <link rel="icon" href="../inc/pivo.png">
        <link href='http://fonts.googleapis.com/css?family=Jura:500' rel='stylesheet' type='text/css'>
        <style>
            div.transbox {
                margin: 30px;
                /*background-color: #ffffff;*/
                opacity: 0.9;
                filter: alpha(opacity=60); /* For IE8 and earlier */
            }

        </style>
	</head>
	<body style="background:  #ffdb99; font-family: 'Jura', sans-serif;">
        <div>
                            <div class="container">
                    <div class="row transbox" style="margin-top: 10%; text-align: center;">
                        <h1>Bienvenido a PiVo</h1>
                        <p class="help-block">pccomponentes 2015</p>
                        <br/>
                        <h4></h4>
                        <div class = "col-md-4 col-md-offset-4">
                            <form class="col-md-12" action="validate_login.php" method="post">
                                <div class="form-group">
                                    <input name="username" id="username" type="text" placeholder="usuario" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input name="password" id="password" type="password" placeholder="contraseña" class="form-control">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-warning btn-lg btn-block">Entrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	</body>
</html>

