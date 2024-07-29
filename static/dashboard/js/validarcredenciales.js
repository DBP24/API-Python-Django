document.addEventListener('DOMContentLoaded', function() {
        if (document.querySelector("#formularioLogin")) {
            let formLogin = document.querySelector("#formularioLogin");
            formLogin.onsubmit = function(e) {
                e.preventDefault();
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl = base_url + '/Login/validarcredenciales';
                var formData = new FormData(formLogin);
                request.open("POST", ajaxUrl, true);
                request.send(formData);
                request.onreadystatechange = function() {
                    if (request.readyState != 4) return;
                    if (request.status == 200) {
                        var objData = JSON.parse(request.responseText);
        
                        if (objData.status) {

                            window.location.reload();

                        } else {
                            Swal.fire({
                                position: 'center',
                                icon:  objData.type,
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
                        }
                    } else {
                        Swal.fire({
                            position: 'center',
                            icon:  objData.type,
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
                    }
                    return false;
                }
            }
        }
});

