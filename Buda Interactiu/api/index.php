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

Flight::route('/', function(){
    echo 'Buda Interactiu';
});

Flight::start();