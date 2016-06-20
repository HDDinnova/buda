<?php
session_start();

$url = $_GET['url'];

$correu=filter_input(INPUT_POST,'correu');
$contrasenya=filter_input(INPUT_POST,'contrasenya');

require_once 'class/connexio.php';

$sql = "SELECT * FROM usuaris WHERE correu='$correu'";
$db = new connexio();
$data=$db->query($sql);
$db->close;
$usuari=$data->fetch_array(MYSQLI_ASSOC);
if ($a->num_rows===0){
  echo 'Usuari no existeix, torna a entrar i registra\'t';
} else {
  if (crypt($usuari['contrasenya']==$contrasenya,$usuari['contrasenya'])){
    setcookie('personatge[id]',$usuari['id']);
    setcookie('personatge[nom]',$usuari['nom']);
    setcookie('personatge[cognom]',$usuari['cognom']);
    setcookie('personatge[tipus]',$usuari['tipus']);
    setcookie('personatge[sexe]',$usuari['sexe']);
    if (isset($url)){
        header('Location: '.$url);
    } else {
        header('Location: inici.php');
    }
  } else {
    echo 'Contrasenya incorrecta';
  }
}