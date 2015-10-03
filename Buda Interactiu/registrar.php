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
        $db->close();
        header('Location: inici');
        break;
      case 'foto':
        $sqlfoto = "INSERT INTO fotos (usuari,foto,llegenda) VALUES ('$iduser','_MG_8075.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','Santi155.jpg','Foto: Museu de les Terres de l\'Ebre.'),"
              . "('$iduser','IMG009PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','IMG011PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','IMG029PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','buda-53.jpg','Foto: Guillermo Barberà.'),"
              . "('$iduser','buda-61.jpg','Foto: Guillermo Barberà.'),"
              . "('$iduser','buda-62.jpg','Foto: Guillermo Barberà.')";
        $db->query($sqlfoto);
        $sqlvideo = "INSERT INTO videos (usuari,video,llegenda) VALUES "
                . "('$iduser','Maluquer_LaTorreEiffelAlMigDelMar','El fotògraf Salvador Maluquer explica les seves sensacions en prendre una de les fotografies més icòniques del far.')";
        $db->query($sqlvideo);
        $sqltextos = "INSERT INTO textos (usuari,imatge,url) VALUES ('$iduser','text.jpg','foto.html')";
        $db->query($sqltextos);
        $db->close();
        header('Location: inici');
        break;
      case 'cine':
        $sqlfoto = "INSERT INTO fotos (usuari,foto,llegenda) VALUES ('$iduser','M40A9048.jpg','Foto: Salvador Maluquer.')";
        $db->query($sqlfoto);
        $sqlvideo = "INSERT INTO videos (usuari,video,llegenda) VALUES "
                . "('$iduser','Sarro_Encanyissada','La navegació en barquets de perxar a la llacuna de l’Encayissada va cridar l’atenció all cineasta Artur Sarró en un dels seus primers viatges al Delta.'),"
                . "('$iduser','ExercitDelta','Un vol d’hidroavions per la badia dels Alfacs a principis de la dècada de 1930 és la primera presa d’imatges aèries del Delta.'),"
                . "('$iduser','arxiufilmoteca','La Filmoteca de Catalunya atresora una filmació d’origen institucional datada a la dècada de 1950 en què la vida pagesa al Delta emergeix amb gran naturalitat.'),"
                . "('$iduser','4804','En el marc de la pel·lícula “Buda, l’illa del Delta” (2013), el cineasta Asbel Esteve fou convidat a retratar la vida domèstica dels habitants de l’illa de Buda.'),"
                . "('$iduser','4805','En el marc de la pel·lícula “Buda, l’illa del Delta” (2013), el cineasta Asbel Esteve fou convidat a retratar la vida domèstica dels habitants de l’illa de Buda.')";
        $db->query($sqlvideo);
        $sqltextos = "INSERT INTO textos (usuari,imatge,url) VALUES ('$iduser','sarro.jpg','sarro.html')";
        $db->query($sqltextos);
        $db->close();
        header('Location: inici');
        break;
      case 'orni':
        $sqlfoto = "INSERT INTO fotos (usuari,foto,llegenda) VALUES "
              . "('$iduser','_MG_8085.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','IMG022PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','IMG032PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','M40A8979.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','M40A9035.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','M40A9125.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','M40A9146.jpg','Foto: Salvador Maluquer.')";
        $db->query($sqlfoto);
        $sqlvideo = "INSERT INTO videos (usuari,video,llegenda) VALUES "
                . "('$iduser','RafelBalada_BudaLlocMistic','Rafel Balada comenta la fascinació que suposava l’illa de Buda per a la gent del Delta.'),"
                . "('$iduser','RafelBalada_GranRiquesaNatural','Rafel Balada explica la gran riquesa natural que caracteritza el delta de l’Ebre.')";
        $db->query($sqlvideo);
        $sqltextos = "INSERT INTO textos (usuari,imatge,url) VALUES "
                . "('$iduser','maluquer.jpg','maluquer.html'),"
                . "('$iduser','seo.jpg','seo.html'),"
                . "('$iduser','rafelbalada.jpg','rafelbalada.html')";
        $db->query($sqltextos);
        $db->close();
        header('Location: inici');
        break;
        break;
    }
  }else {
    echo $db->error;
  }
} else {
  $db->close();
  header('Location: jaregistrat');
}