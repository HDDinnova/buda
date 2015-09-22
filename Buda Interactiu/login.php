<?php
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
    header('Location: inici');
  } else {
    echo 'Contrasenya incorrecta';
  }
}