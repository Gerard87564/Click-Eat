<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $arxius = 'ARXIUS/';
    $absolutePath = $arxius . basename($_FILES["cv"]["name"]);
    $extension = strtolower(pathinfo($absolutePath, PATHINFO_EXTENSION));
    $extension_validate = ['pdf'];
    $message = '';

    if (!in_array($extension, $extension_validate)) {
        $message = 'Extensión no válida. Solo se permiten archivos PDF.';
    } else if ($_FILES["cv"]["size"] > 5 * 1024 * 1024) {
        $message = 'El archivo es demasiado grande. Máximo permitido: 5 MB.';
    } else {
        if (move_uploaded_file($_FILES["cv"]["tmp_name"], $absolutePath)) {
            $message = 'Archivo subido con éxito.';
        } else {
            $message = 'Hubo un error al subir el archivo.';
        }
    }

    header("Location: index.html");
    exit();
}
?>