
function buscarRuc() {
    $("input[name='razon_social']").prop("readonly", true);
    $("input[name='ciudad']").prop("readonly", true);
    $("input[name='estado_empresa']").prop("readonly", true);
    $("textarea[name='direccion']").prop("readonly", true);

    var valorInput = $('#documento_fiscal').val();

    if(valorInput == ""){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ingrese el Documento Fiscal',
            showConfirmButton: true,
            allowOutsideClick : false,
            allowEscapeKey : false,
            allowEnterKey : false,
            iconColor: "#1D1D1D",
            confirmButtonColor:"#1D1D1D"
        })
    } else if(valorInput.length > 11 || valorInput.length < 11)
    {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Documento Fiscal inválido',
            showConfirmButton: true,
            allowOutsideClick : false,
            allowEscapeKey : false,
            allowEnterKey : false,
            iconColor: "#1D1D1D",
            confirmButtonColor:"#1D1D1D"
        })
    }

    $.ajax({
        type: "POST",
        url: base_url + '/Empresas/busquedaXRUC',
        data: { documentoFiscal: valorInput }, 
        
        dataType: "json",
        success: function(response) {

            $('#razon_social').val(response[1]);
            $('#estado_empresa').val(response[2]);
            $('#direccion').val(response[3]);
            $('#ciudad').val(response[4]);

        },
        error: function(error) {
            // Manejar errores
            console.error('Error en la solicitud AJAX: ', error);
        }
    });
}