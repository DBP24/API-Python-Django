function logout() {
    Swal.fire({
      title: "Aviso",
      text: "¿Deseas salir del sistema?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No, Cancelar!",
      confirmButtonColor:"#1D1D1D"
    }).then((result) => {
        if (result.isConfirmed) {
            // Código para ejecutar si el usuario confirma
            let request = window.XMLHttpRequest
            ? new XMLHttpRequest()
            : new ActiveXObject("Microsoft.XMLHTTP");
            let ajaxUrl = base_url + "/logout/cerrar";
            let strData = "";
            request.open("POST", ajaxUrl, true);
            request.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
            );
            request.send(strData);
            request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                let objData = JSON.parse(request.responseText);
                if (objData.status) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
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
                    Swal.fire("Atención!", objData.msg, "error");
                }
            }
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "La Sesión no ha sido cerrada...",
                showConfirmButton: true,
                allowOutsideClick : false,
                allowEscapeKey : false,
                allowEnterKey : false,  
                confirmButtonColor:"#1D1D1D"
            })
        }
    });
}
  