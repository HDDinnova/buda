<?php
$nom=utf8_decode(filter_input(INPUT_POST,'nom'));
$cognom=utf8_decode(filter_input(INPUT_POST,'cognom'));
$edat=filter_input(INPUT_POST,'edat');
$pais=utf8_decode(filter_input(INPUT_POST,'pais'));
$correu=filter_input(INPUT_POST,'correu');
$tipus=filter_input(INPUT_POST,'tipus');

function getConnection() {
    $dbhost="localhost";
    $dbuser="admin_buda";
    $dbpass="@Buda#Interactiu";
    $dbname="budainteractiu";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $dbuser, $dbpass);	
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

$sql = "INSERT INTO usuaris(nom,cognom,edat,pais,correu,tipus) VALUES ('$nom','$cognom',$edat,'$pais','$correu','$tipus')";
try {
    $db = getConnection();
    $stmt = $db->query($sql);
    $db = null;
    
    setcookie('personatge[nom]',$nom);
    setcookie('personatge[cognom]',$cognom);
    setcookie('personatge[tipus]',$tipus);
    
    header('Location: inici.php');
} catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}