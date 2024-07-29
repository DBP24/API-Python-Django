document.addEventListener('DOMContentLoaded', function() {
  cargarEmpresas();
});
  
function cargarEmpresas(){
    $.ajax({
        type: 'POST',
        url: base_url + '/Usuarios/cargarcombos/',
        data: {action:'get-companies'},
        dataType: 'JSON',
        success: function(response){
            var options = '<option value="0">Seleccione</option>';
            $.each(response, function(index, value){
              options += '<option value="'+value.DocumentoFiscal+'">'+value.RazonSocial+'</option>';
            }); 
            $('#empresa').html(options); 
          },
        }).fail(function(jqXHR, textStatus, errorThrown){
          console.log(jqXHR);
    });
}
