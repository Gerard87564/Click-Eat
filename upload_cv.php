<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['pdf']) && $_FILES['pdf']['error'] == 0) {
    $archivo = $_FILES['pdf'];
    $nombreArchivo = $archivo['name'];
    $tipoArchivo = $archivo['type'];
    $tmpArchivo = $archivo['tmp_name'];
    $tamañoArchivo = $archivo['size'];
    
    $directorioDestino = 'ARXIUS/'; 

    $rutaDestino = $directorioDestino . basename($nombreArchivo);

    if ($tipoArchivo == 'application/pdf') {
        $tamañoMaximo = 5 * 1024 * 1024; // 5 MB
        if ($tamañoArchivo <= $tamañoMaximo) {
            if (move_uploaded_file($tmpArchivo, $rutaDestino)) {
                header("Location: index.html");
                exit();
            } else {
                echo "Error al mover el archivo al directorio de destino.";
            }
        } else {
            echo "El archivo es demasiado grande. El tamaño máximo permitido es 5MB.";
        }
    } else {
        echo "El archivo debe ser un PDF.";
    }
} else {
    echo "No se ha enviado ningún archivo o ha ocurrido un error.";
}
?>