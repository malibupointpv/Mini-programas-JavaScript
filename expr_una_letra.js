<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validacion solo letras</title>
</head>
<body>
    <div id="contenedor">
        <p>
            <label for="campo">Introduce una sola letra</label><br>
            <input id="campo" type="text">
        </p>
        <p>
            <label for="otrodato">Otro dato</label><br>
            <input id="otrodato" type="text">
        </p>
    </div>

    <script>
        let texto = document.getElementById('campo');

        texto.addEventListener('blur', () => {
            if (fn_valida_letra_mayus(texto) == false) {
                setTimeout(() => {
                    texto.focus();
                }, 1);
            }
        });

        //Función que valida que solo se pueda 
        function fn_valida_letra_mayus (p_texto) {
            //let texto = document.getElementById(p_texto);
            let exprReg = /[A-Z]{1}/;
            let estado = false;

            if (exprReg.test(p_texto.value) == false) {
                estado = false;
            } else {
                estado = true;
            }

            return estado;
        }
        
    </script>
</body>
</html>
