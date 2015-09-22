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
    $iduser = $db->insert_id;
    setcookie('personatge[id]',$iduser);
    setcookie('personatge[nom]',$nom);
    setcookie('personatge[cognom]',$cognom);
    setcookie('personatge[tipus]',$tipus);
    switch ($tipus){
      case 'lite':
        $sqlfoto = "INSERT INTO fotos (usuari,foto,llegenda) VALUES ('$iduser','M40A9006.jpg','Foto: Salvador Maluquer.'),('$iduser','M40A9028.jpg','Foto: Salvador Maluquer.'),('$iduser','Tortosa_026.jpg','Foto: Archivo General Militar de Ávila.')";
        $db->query($sqlfoto);
        $sqlvideo = "INSERT INTO videos (usuari,video,llegenda) VALUES "
                . "('$iduser','GuillermoBores_RegressioPerduaPerSempre','Guillermo Borés, propietari de la part privada de l’illa de Buda, explica quina és la principal característica de l’indret: la seva fragilitat.'),"
                . "('$iduser','JMEspinas_ArrivadaDelta','Josep M. Espinàs explica quina va ser la seva sensació en trepitjar per primer cop el Delta després de setmanes seguint el curs de l’Ebre.'),"
                . "('$iduser','JMEspinas_GranExperienciaBuda','Josep M. Espinàs recorda la seva experiència en penetrar a l’illa de Buda.'),"
                . "('$iduser','JMEspinas_SensacioForaster','Josep M. Espinàs recorda les seves sensacions a la platja de l’illa de Buda.')";
        $db->query($sqlvideo);
        $sqltextos = "INSERT INTO textos (usuari,imatge,url) VALUES ('$iduser','Arbo.jpg','Arbo.html'),"
                . "('$iduser','Blade.jpg','Blade.html'),"
                . "('$iduser','Espinas.jpg','Espinas.html')";
        $db->query($sqltextos);
        break;
      case 'foto':
        break;
      case 'cine':
        break;
      case 'orni':
        break;
    }
    header('Location: inici');
  }else {
    echo $db->error;
  }
  $db->close();
} else {
  $db->close();
  header('Location: jaregistrat');
}