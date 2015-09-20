<?php
class connexio extends mysqli {
    public function __construct() {
    $dbhost="hostingmysql299.nominalia.com";
    $dbuser="F538317_budafilm";
    $dbpass="@Buda#Int2015";
    $dbname="budainteractiu";
	parent::__construct($dbhost,$dbuser,$dbpass,$dbname);
	if (mysqli_connect_error()) {
		die('Error connexió (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
	}
    }
}