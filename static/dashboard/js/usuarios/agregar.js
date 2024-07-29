window.addEventListener('load', function() {
    //Llamar a la función
    mostrarImagenCargada();
    //Activar el checbox
    var checkbox = document.getElementById("estado");
    // Activa el checkbox al cargar la página
    checkbox.checked = true;
    agregar();
}, false);

function mostrarImagenCargada()
{
    //mostremos img. cargada 
    var inputFile = document.getElementById("fileInput");
    inputFile.addEventListener("change", function(event) {
    // document.getElementById("ver_foto").value="";
    // Accede al archivo seleccionado por el usuario
    var file = event.target.files[0];
    // Crea un objeto FileReader
    var reader = new FileReader();
    // Establece una función de devolución de llamada para el evento onload
    reader.onload = function(e) {
    // Obtén la URL de datos de la imagen cargada
    var imageUrl = e.target.result;
    // Establece la URL de datos como fuente de la etiqueta de imagen
    var previewImage = document.getElementById("foto");
    previewImage.src = imageUrl;

    };
    
    // Lee el archivo como una URL de datos
    reader.readAsDataURL(file);
    
    });
    //Limpio la caja de texto del input file
    document.getElementById("fileInput").value="";
}

function agregar()
{
    if (document.querySelector("#formularioAgregarUsuario")) {
        let formLogin = document.querySelector("#formularioAgregarUsuario");
        formLogin.onsubmit = function(e) {
            e.preventDefault();
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url + '/Usuarios/crearUsuario';
            var formData = new FormData(formLogin);
            request.open("POST", ajaxUrl, true);
            request.send(formData);
            request.onreadystatechange = function() {
                if (request.readyState != 4) return;
                if (request.status == 200) {
                    var objData = JSON.parse(request.responseText);
                    if (objData.status) {
                        
                        Swal.fire({
                            position: 'center',
                            icon: objData.type,
                            title: objData.msg,
                            showConfirmButton: true,
                            allowOutsideClick : false,
                            allowEscapeKey : false,
                            allowEnterKey : false,
                            iconColor: "#1D1D1D",
                            confirmButtonColor:"#1D1D1D"
                        })
                        .then((result) => {
                            if (result.isConfirmed) { 
                              window.location.reload();
                            }
                        });
                    } else {
                        Swal.fire({
                            position: 'center',
                            icon: objData.type,
                            title: objData.msg,
                            showConfirmButton: true,
                            allowOutsideClick : false,
                            allowEscapeKey : false,
                            allowEnterKey : false,
                            iconColor: "#1D1D1D",
                            confirmButtonColor:"#1D1D1D"
                        })
                    }
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: objData.type,
                        title: objData.msg,
                        showConfirmButton: true,
                        allowOutsideClick : false,
                        allowEscapeKey : false,
                        allowEnterKey : false,
                        iconColor: "#1D1D1D",
                        confirmButtonColor:"#1D1D1D"
                    })
                }   
                return false;
            }
        }
     }
}




    