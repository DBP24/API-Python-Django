function eliDatos(id) {
    // Mostrar una alerta de confirmación
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el registro de forma permanente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        iconColor: "#1D1D1D",
        confirmButtonColor:"#1D1D1D"
    }).then((result) => {
        // Si el usuario hizo clic en "Sí"
        if (result.isConfirmed) {
            // Realizar la solicitud de eliminación
            let request = window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP");
            let ajaxUrl = base_url + "/Tickets/eliminar";
            let strData = "id=" + id;
            request.open("POST", ajaxUrl, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(strData);
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    let objData = JSON.parse(request.responseText);

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
                        });
                    }
                }
            };
        }
    });
}