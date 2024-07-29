$(document).ready(function() {
    $('#enviar').click(function(e) {
        e.preventDefault();
        var correo = $('#correo').val();
        var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        var ajaxUrl = base_url + '/Recuperarcontrasena/recuperar';
        var formData = new FormData();
        formData.append('correo', correo);
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
                }).then((result) => {
                        if (result.isConfirmed) { 
                            token= getRandomInt(20);
                            window.location.href=base_url + '/recuperarcontrasena/CambiarContrasenaToken?resp='+ token;
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
    });
});
  
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }