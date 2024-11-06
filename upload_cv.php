<?php
if($_SERVER['REQUEST_METHOD']=='POST') {
    $arxius= '../ARXIUS/'; 

    $absolutePath = $arxius . basename($_FILES["cv"]["name"]);
    $extension= strtolower(pathinfo($absolutePath, PATHINFO_EXTENSION));

    $extension_validate= ['pdf'];

    if (!in_array($extension, $extension_validate)) {
        echo 'Extensió del ficher no valida, només es admes pdf!';
    } else if ($_FILES["cv"]["size"] > 5 * 1024 * 1024) {
        echo "Arxiu massa gran!, limit 5 MB";
    } else {
        if (move_uploaded_file($_FILES["cv"]["tmp_name"], $absolutePath)) {
            echo 'Fitxer ' . basename($_FILES["cv"]["name"]) . ' pujat correctament!, rebrás un email si resultes candidat';
        } else {
            echo "UPS!, no s'ha pogut pujar el fitxer...";
        }
    }
}
?>