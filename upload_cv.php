<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $arxius = '../ARXIUS/'; 
    $absolutePath = $arxius . basename($_FILES["cv"]["name"]);
    $extension = strtolower(pathinfo($absolutePath, PATHINFO_EXTENSION));
    $extension_validate = ['pdf'];

    if (!in_array($extension, $extension_validate)) {
        header('Location: error.php?msg=extensio_no_valida');
        exit();
    } else if ($_FILES["cv"]["size"] > 5 * 1024 * 1024) {
        header('Location: error.php?msg=arxiu_masssa_gran');
        exit();
    } else {
        if (move_uploaded_file($_FILES["cv"]["tmp_name"], $absolutePath)) {
            header('Location: success.html');
            exit();
        } else {
            header('Location: error.php?msg=fitxer_no_pujat');
            exit();
        }
    }
}
?>