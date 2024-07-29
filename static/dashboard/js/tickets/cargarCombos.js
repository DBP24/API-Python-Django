document.addEventListener("DOMContentLoaded", function () {
  cargarTipoLibrosAgregar();
  cargarTipoLibrosAll();
});

function cargarTipoLibrosAgregar() {
  $.ajax({
    type: "POST",
    url: base_url + "/Tickets/cargarcombos/",
    data: { action: "get-book_type-SUNAT" },
    dataType: "JSON",
    success: function (response) {
      var options = '<option value="0">Todos</option>';
      $.each(response, function (index, value) {
        options +=
          '<option value="' +
          value.IdLibro +
          '" data-valida-ticket="' +
          value.ValidaTicket +
          '" data-importa-archivo="' +
          value.ImportaArchivo +
          '">' +
          value.LibroNombre +
          "</option>";
      });
      $("#tipo_libro").html(options);

      $("#tipo_libro").change(function () {
        // Obtener el valor de ValidaTicket seleccionado
        var validaTicket = $(this).find(":selected").data("valida-ticket");
        var importaArchivo = $(this).find(":selected").data("importa-archivo");
        
        //Validar Nro de Ticket
        if (validaTicket === "N") {
          $('input[name="numero_ticket"]').attr('disabled', true).val('');;
        } else if(validaTicket === "S"){
          $('input[name="numero_ticket"]').attr('disabled', false);
        } else {
          $('input[name="numero_ticket"]').attr('disabled', true).val('');;
        }

        //Validar ImportaArchivo
        if (importaArchivo === "N") {
          $('input[name="archivo_sunat"]').attr('disabled', true);
        } else if(importaArchivo === "S"){
          $('input[name="archivo_sunat"]').attr('disabled', false);
        } else {
          $('input[name="archivo_sunat"]').attr('disabled', true);
        }

      });
    },
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
  });
}



function cargarTipoLibrosAll() {
  $.ajax({
    type: "POST",
    url: base_url + "/Tickets/cargarcombos/",
    data: { action: "get-book_type" },
    dataType: "JSON",
    success: function (response) {
      var options = '<option value="0">Todos</option>';
      $.each(response, function (index, value) {
        options +=
          '<option value="' +
          value.LibroNombre +
          '">' +
          value.LibroNombre +
          "</option>";
      });
      $("#busqueda_tipo_libro").html(options);
    },
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
  });
}
