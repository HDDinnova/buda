<?php
session_start();
$url = $_GET['url'];

setcookie('personatge[id]', null);
setcookie('personatge[id]', null);
setcookie('personatge[nom]', null);
setcookie('personatge[cognom]', null);
setcookie('personatge[tipus]', null);
setcookie('personatge[sexe]', null);
session_destroy();

header('Location: '.$url);