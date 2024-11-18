<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
</head>
<body>
    <h1>Ocurrió un error</h1>
    <p>
        <?php
        if (isset($_GET['msg'])) {
            switch ($_GET['msg']) {
                case 'extensio_no_valida':
                    echo 'Extensión no válida, solo se aceptan archivos PDF.';
                    break;
                case 'arxiu_masssa_gran':
                    echo 'El archivo es demasiado grande. Límite: 5 MB.';
                    break;
                case 'fitxer_no_pujat':
                    echo 'No se pudo cargar el archivo.';
                    break;
                default:
                    echo 'Error desconocido.';
            }
        }
        ?>
    </p>
</body>
</html>