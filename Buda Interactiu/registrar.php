<?php
$nom=utf8_decode(filter_input(INPUT_POST,'nom'));
$cognom=utf8_decode(filter_input(INPUT_POST,'cognom'));
$edat=filter_input(INPUT_POST,'edat');
$pais=utf8_decode(filter_input(INPUT_POST,'pais'));
$correu=filter_input(INPUT_POST,'correu');
$tipus=filter_input(INPUT_POST,'tipus');
$contrasenya=filter_input(INPUT_POST,'contrasenya');

require_once 'class/connexio.php';

$encriptada=  crypt($contrasenya);
$sql = "INSERT INTO usuaris(nom,cognom,edat,pais,correu,tipus,contrasenya) VALUES ('$nom','$cognom',$edat,'$pais','$correu','$tipus','$encriptada')";
$sqlcheck = "SELECT id FROM usuaris WHERE correu='$correu'";
$db = new connexio();
$a=$db->query($sqlcheck);
if ($a->num_rows===0){
  if($db->query($sql)){
    
    setcookie('personatge[nom]',$nom);
    setcookie('personatge[cognom]',$cognom);
    setcookie('personatge[tipus]',$tipus);
    header('Location: inici');
  }else {echo $db->error;
  }
  $db->close();
} else {
  header('Location: jaregistrat');
}