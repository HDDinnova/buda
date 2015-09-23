<?php
$iduser=5;
$sqlfoto = "INSERT INTO fotos (usuari,foto,llegenda) VALUES ('$iduser','_MG_8075.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','Santi155.jpg','Foto: Museu de les Terres de l'Ebre.'),"
              . "('$iduser','IMG009PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','IMG011PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','IMG029PNDE.jpg','Foto: Salvador Maluquer.'),"
              . "('$iduser','buda-53.jpg','Foto: Guillermo Barberà.'),"
              . "('$iduser','buda-61.jpg','Foto: Guillermo Barberà.'),"
              . "('$iduser','buda-62.jpg','Foto: Guillermo Barberà.')";

      echo $sqlfoto;