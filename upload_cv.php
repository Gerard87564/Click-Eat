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

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Resultado</title>
        <script>
            // Mostrar alerta con el mensaje
            alert('$message');
            // Redirigir al formulario inicial (cambia 'index.php' a la ruta correcta de tu formulario)
            window.location.href = 'index.html';
        </script>
    </head>
    <body>
    </body>
    </html>";
    exit();
}
?>