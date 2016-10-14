<?php
require 'flight/Flight.php';

//Registre enllaç a base de dades per a realitzar les connexions
Flight::register('db', 'PDO', array('mysql:host=hostingmysql299.nominalia.com;dbname=budainteractiu','F538317_budafilm','@Buda#Int2015'), function($db){
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
});

Flight::route('POST /savevideo', function(){
    $db=Flight::db();
    
    $savevideo = $db->prepare("INSERT INTO videos (usuari,video,llegenda) VALUES (:user, :video, :desc)");
    $savevideo->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
    $savevideo->bindParam(':video', $_POST['video']);
    $savevideo->bindParam(':desc', $_POST['desc']);
    
    $return = $savevideo->execute();
    $db=NULL;
    
    if ($return) {
        echo TRUE;
    } else {
        echo FALSE;
    }
});

Flight::route('POST /savefoto', function(){
    $db=Flight::db();
    
    $savefoto = $db->prepare("INSERT INTO fotos (usuari,foto,llegenda) VALUES (:user, :foto, :desc)");
    $savefoto->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
    $savefoto->bindParam(':foto', $_POST['foto']);
    $savefoto->bindParam(':desc', $_POST['desc']);
    
    $return = $savefoto->execute();
    $db=NULL;
    
    if ($return) {
        echo TRUE;
    } else {
        echo FALSE;
    }
});

Flight::route('POST /savetext', function(){
    $db=Flight::db();
    
    $savetext = $db->prepare("INSERT INTO textos (usuari,imatge,url) VALUES (:user, :img, :url)");
    $savetext->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
    $savetext->bindParam(':img', $_POST['img']);
    $savetext->bindParam(':url', $_POST['url']);
    
    $return = $savetext->execute();
    $db=NULL;
    
    if ($return) {
        echo TRUE;
    } else {
        echo FALSE;
    }
});

Flight::route('POST /apfinal', function(){
    $db=Flight::db();
    
    $checkactual = $db->prepare("SELECT COUNT(id) FROM ap_actual WHERE usuari=:user AND apartat=:apartat");
    $checkactual->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
    $checkactual->bindParam(':apartat', $_POST['apartat'], PDO::PARAM_INT);
    
    $checkactual->execute();
    
    $ch_ac = $checkactual->fetchColumn();
    
    if ($ch_ac > 0) {
      $delactual = $db->prepare("DELETE FROM ap_actual WHERE usuari=:user AND apartat=:apartat");
      $delactual->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
      $delactual->bindParam(':apartat', $_POST['apartat'], PDO::PARAM_INT);

      $delactual->execute();
    }
    
    $checkfinal = $db->prepare("SELECT COUNT(id) FROM ap_final WHERE usuari=:user AND apartat=:apartat");
    $checkfinal->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
    $checkfinal->bindParam(':apartat', $_POST['apartat'], PDO::PARAM_INT);
    
    $checkfinal->execute();
    
    $ch_fi = $checkactual->fetchColumn();
    
    if ($ch_fi == 0) {
      
      $insfinal = $db->prepare("INSERT INTO ap_final (usuari,apartat) VALUES (:user, :apartat)");
      $insfinal->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
      $insfinal->bindParam(':apartat', $_POST['apartat'], PDO::PARAM_INT);

      $insfinal->execute();
    }
    
    $db=NULL;
});

Flight::route('POST /apactual', function(){
    $db=Flight::db();
    
    $checkfinal = $db->prepare("SELECT COUNT(id) FROM ap_final WHERE usuari=:user AND apartat=:apartat");
    $checkfinal->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
    $checkfinal->bindParam(':apartat', $_POST['apartat'], PDO::PARAM_INT);
    
    $checkfinal->execute();
    
    $ch_fi = $checkfinal->fetchColumn();
    
    if ($ch_fi == 0) {
        $checkactual = $db->prepare("SELECT COUNT(id) FROM ap_actual WHERE usuari=:user");
        $checkactual->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
        
        $checkactual->execute();
        
        $ch_ac = $checkactual->fetchColumn();
        
        if ($ch_ac == 0) {
            $insactual = $db->prepare("INSERT INTO ap_actual (usuari,apartat) VALUES (:user, :apartat)");
            $insactual->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
            $insactual->bindParam(':apartat', $_POST['apartat'], PDO::PARAM_INT);
            
            $insactual->execute();
            echo 'insertat';
        } else {
            $updactual = $db->prepare("UPDATE ap_actual SET apartat=:apartat WHERE usuari=:user");
            $updactual->bindParam(':user', $_POST['user'], PDO::PARAM_INT);
            $updactual->bindParam(':apartat', $_POST['apartat'], PDO::PARAM_INT);
            
            $updactual->execute();
            echo 'actualitzat';
        }
    }
    
    $db=NULL;
});

Flight::route('/', function(){
    echo 'Buda Interactiu';
});

Flight::start();