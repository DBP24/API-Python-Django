window.addEventListener('load', function() {
    agregar();
}, false);

function agregar()
{
    if (document.querySelector("#formularioAgregarTicket")) {
        let formLogin = document.querySelector("#formularioAgregarTicket");
        formLogin.onsubmit = function(e) {
            e.preventDefault();
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url + '/Tickets/crear';
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




    