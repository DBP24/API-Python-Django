$(document).ready(function () {
  var table2 = $("#example2").DataTable({
    serverSide: true,
    searching: true,
    ajax: {
      url: base_url + "/reportes/cargarDatos",
      type: "POST",
      data: function (d) {
        d.start = d.start || 0;
        d.length = d.length || 10;

        d.search =
        {
        busqueda_tipo_documento2 : $('#busqueda_tipo_documento2').val().toUpperCase(),
        busqueda_serie2:$('#busqueda_serie2').val().toUpperCase(),
        busqueda_nro_de_documento2:$('#busqueda_nro_de_documento2').val().toUpperCase(),
        busqueda_ticket2:$('#busqueda_ticket2').val().toUpperCase(),
        busqueda_tipo_documento_identidad2:$('#busqueda_tipo_documento_identidad2').val().toUpperCase(),
        busqueda_nro_documento_identidad2:$('#busqueda_nro_documento_identidad2').val().toUpperCase(),
        busqueda_razon_social2:$('#busqueda_razon_social2').val().toUpperCase(),
        busqueda_monto_exportacion2:$('#busqueda_monto_exportacion2').val().toUpperCase(),
        busqueda_base_imponible_gravado2:$('#busqueda_base_imponible_gravado2').val().toUpperCase(),
        busqueda_base_imponible_dsct2:$('#busqueda_base_imponible_dsct2').val().toUpperCase(),
        busqueda_base_igv_ipm2:$('#busqueda_base_igv_ipm2').val().toUpperCase(),
        busqueda_dscto_igv_ipm2:$('#busqueda_dscto_igv_ipm2').val().toUpperCase(),
        busqueda_monto_exonerado2:$('#busqueda_monto_exonerado2').val().toUpperCase(),
        busqueda_monto_inafecto2:$('#busqueda_monto_inafecto2').val().toUpperCase(),
        busqueda_monto_isc2:$('#busqueda_monto_isc2').val().toUpperCase(),
        busqueda_base_imponible_ivap2:$('#busqueda_base_imponible_ivap2').val().toUpperCase(),
        busqueda_monto_ivap2:$('#busqueda_monto_ivap2').val().toUpperCase(),
        busqueda_monto_icbper2:$('#busqueda_monto_icbper2').val().toUpperCase(),
        busqueda_monto_otros_tributos2:$('#busqueda_monto_otros_tributos2').val().toUpperCase(),
        busqueda_monto_total2:$('#busqueda_monto_total2').val().toUpperCase(),
        busqueda_moneda2:$('#busqueda_moneda2').val().toUpperCase(),
        busqueda_tipo_cambio2:$('#busqueda_tipo_cambio2').val().toUpperCase(),
        busqueda_fec_emision_doc_modificado2:$('#busqueda_fec_emision_doc_modificado2').val().toUpperCase(),
        busqueda_tipo_doc_modificado2:$('#busqueda_tipo_doc_modificado2').val().toUpperCase(),
        busqueda_serie_doc_modificado2:$('#busqueda_serie_doc_modificado2').val().toUpperCase(),
        busqueda_numero_doc_modificado2:$('#busqueda_numero_doc_modificado2').val().toUpperCase(),
        busqueda_proyecto_operados_atribucion2:$('#busqueda_proyecto_operados_atribucion2').val().toUpperCase(),
        busqueda_tipo_de_nota2:$('#busqueda_tipo_de_nota2').val().toUpperCase(),
        busqueda_estado_comprobante2:$('#busqueda_estado_comprobante2').val().toUpperCase(),
        busqueda_valor_fob_embarcado2:$('#busqueda_valor_fob_embarcado2').val().toUpperCase(),
        busqueda_valor_operacion_gratuito2:$('#busqueda_valor_operacion_gratuito2').val().toUpperCase(),
        busqueda_tipo_operacion2:$('#busqueda_tipo_operacion2').val().toUpperCase(),
        busqueda_dam_cp2:$('#busqueda_dam_cp2').val().toUpperCase(),
        busqueda_clu2:$('#busqueda_clu2').val().toUpperCase(),
        busqueda_car_sunat2:$('#busqueda_car_sunat2').val().toUpperCase()

        }

        return d;
      },
      dataSrc: function (json) {
        return json.data;
      },
      error: function (xhr, error, thrown) {
        console.log("Error en la respuesta del servidor:", error);
      }
    },
    paging: true,
    ordering: false,
    language: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ elementos",
      info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
      infoEmpty: "Mostrando ningún elemento.",
      infoFiltered: "(filtrado _MAX_ elementos total)",
      infoPostFix: "",
      loadingRecords: "Cargando registros...",
      zeroRecords: "No se encontraron registros",
      emptyTable: "No hay datos disponibles en la tabla",
      paginate: {
        first: "Primero",
        previous: "<<",
        next: ">>",
        last: "Último",
      },
      aria: {
        sortAscending: ": Activar para ordenar la columna de manera ascendente",
        sortDescending:
          ": Activar para ordenar la columna de manera descendente",
      },
    },
    columns: [
      {
        data: "ID_RegCompEmpresa",
        render: function (data, type, row, meta) {
          // Construir el enlace para ver datos en SUNAT
          var enlace =
            '<a href="#" onclick="verDatosEmpresa(' +
            row.ID_RegCompEmpresa +
            ')"><ion-icon class="icon__e" name="eye-outline"></ion-icon></a>';
          return enlace;
        },
      },
      { data: "TipoComprobante" },
      { data: "SerieComprobante" },
      { data: "NumeroComprobante" },
      { data: "Ticket" },
      { data: "TipDocIdentidad" },
      { data: "NroDocIdentidad" },
      { data: "RazonSocial" },
      { data: "MontoExportacion" },
      { data: "BaseImponibleGravado" },
      { data: "BaseImponibleDsct" },
      { data: "BaseIgvIpm" },
      { data: "DsctoIgvIpm" },
      { data: "MontoExonerado" },
      { data: "MontoInafecto" },
      { data: "MontoISC" },
      { data: "BaseImponibleIvap" },
      { data: "MontoIvap" },
      { data: "MontoICBPER" },
      { data: "MontoOtrostributos" },
      { data: "MontoTotal" },
      { data: "Moneda" },
      { data: "TipoCambio" },
      { data: "FecEmisionDocModificado" },
      { data: "TipoDocModificado" },
      { data: "SerieDocModificado" },
      { data: "NumeroDocModificado" },
      { data: "ProyectoOperadosAtribucion" },
      { data: "TipodeNota" },
      { data: "EstadoComprobante" },
      { data: "ValorFOBEmbarcado" },
      { data: "ValorOperacionGratuito" },
      { data: "TipoOperacion" },
      { data: "DamCP" },
      { data: "CLU" },
      { data: "CarSunat" },
    ],
    initComplete: function (settings, json) {
      if (json.error) {
        console.error("Error en la respuesta del servidor:", json.error);
      } else {
        console.log("Datos cargados:", json.data);
      }
    }
  });

  $('#busqueda_tipo_documento2,#busqueda_serie2,#busqueda_nro_de_documento2,#busqueda_ticket2,#busqueda_tipo_documento_identidad2,#busqueda_nro_documento_identidad2,#busqueda_razon_social2,#busqueda_monto_exportacion2,#busqueda_base_imponible_gravado2,#busqueda_base_imponible_dsct2,#busqueda_base_igv_ipm2,#busqueda_dscto_igv_ipm2,#busqueda_monto_exonerado2,#busqueda_monto_inafecto2,#busqueda_monto_isc2,#busqueda_base_imponible_ivap2,#busqueda_monto_ivap2,#busqueda_monto_icbper2,#busqueda_monto_otros_tributos2,#busqueda_monto_total2,#busqueda_moneda2,#busqueda_tipo_cambio2,#busqueda_fec_emision_doc_modificado2,#busqueda_tipo_doc_modificado2,#busqueda_serie_doc_modificado2,#busqueda_numero_doc_modificado2,#busqueda_proyecto_operados_atribucion2,#busqueda_tipo_de_nota2,#busqueda_estado_comprobante2,#busqueda_valor_fob_embarcado2,#busqueda_valor_operacion_gratuito2,#busqueda_tipo_operacion2,#busqueda_dam_cp2,#busqueda_clu2,#busqueda_car_sunat2').on('input', function () {
    // Obtener el valor de los campos de búsqueda
    var busqueda_tipo_documento2=$('#busqueda_tipo_documento2').val().toUpperCase();
    var busqueda_serie2=$('#busqueda_serie2').val().toUpperCase();
    var busqueda_nro_de_documento2=$('#busqueda_nro_de_documento2').val().toUpperCase();
    var busqueda_ticket2=$('#busqueda_ticket2').val().toUpperCase();
    var busqueda_tipo_documento_identidad2=$('#busqueda_tipo_documento_identidad2').val().toUpperCase();
    var busqueda_nro_documento_identidad2=$('#busqueda_nro_documento_identidad2').val().toUpperCase();
    var busqueda_razon_social2=$('#busqueda_razon_social2').val().toUpperCase();
    var busqueda_monto_exportacion2=$('#busqueda_monto_exportacion2').val().toUpperCase();
    var busqueda_base_imponible_gravado2=$('#busqueda_base_imponible_gravado2').val().toUpperCase();
    var busqueda_base_imponible_dsct2=$('#busqueda_base_imponible_dsct2').val().toUpperCase();
    var busqueda_base_igv_ipm2=$('#busqueda_base_igv_ipm2').val().toUpperCase();
    var busqueda_dscto_igv_ipm2=$('#busqueda_dscto_igv_ipm2').val().toUpperCase();
    var busqueda_monto_exonerado2=$('#busqueda_monto_exonerado2').val().toUpperCase();
    var busqueda_monto_inafecto2=$('#busqueda_monto_inafecto2').val().toUpperCase();
    var busqueda_monto_isc2=$('#busqueda_monto_isc2').val().toUpperCase();
    var busqueda_base_imponible_ivap2=$('#busqueda_base_imponible_ivap2').val().toUpperCase();
    var busqueda_monto_ivap2=$('#busqueda_monto_ivap2').val().toUpperCase();
    var busqueda_monto_icbper2=$('#busqueda_monto_icbper2').val().toUpperCase();
    var busqueda_monto_otros_tributos2=$('#busqueda_monto_otros_tributos2').val().toUpperCase();
    var busqueda_monto_total2=$('#busqueda_monto_total2').val().toUpperCase();
    var busqueda_moneda2=$('#busqueda_moneda2').val().toUpperCase();
    var busqueda_tipo_cambio2=$('#busqueda_tipo_cambio2').val().toUpperCase();
    var busqueda_fec_emision_doc_modificado2=$('#busqueda_fec_emision_doc_modificado2').val().toUpperCase();
    var busqueda_tipo_doc_modificado2=$('#busqueda_tipo_doc_modificado2').val().toUpperCase();
    var busqueda_serie_doc_modificado2=$('#busqueda_serie_doc_modificado2').val().toUpperCase();
    var busqueda_numero_doc_modificado2=$('#busqueda_numero_doc_modificado2').val().toUpperCase();
    var busqueda_proyecto_operados_atribucion2=$('#busqueda_proyecto_operados_atribucion2').val().toUpperCase();
    var busqueda_tipo_de_nota2=$('#busqueda_tipo_de_nota2').val().toUpperCase();
    var busqueda_estado_comprobante2=$('#busqueda_estado_comprobante2').val().toUpperCase();
    var busqueda_valor_fob_embarcado2=$('#busqueda_valor_fob_embarcado2').val().toUpperCase();
    var busqueda_valor_operacion_gratuito2=$('#busqueda_valor_operacion_gratuito2').val().toUpperCase();
    var busqueda_tipo_operacion2=$('#busqueda_tipo_operacion2').val().toUpperCase();
    var busqueda_dam_cp2=$('#busqueda_dam_cp2').val().toUpperCase();
    var busqueda_clu2=$('#busqueda_clu2').val().toUpperCase();
    var busqueda_car_sunat2=$('#busqueda_car_sunat2').val().toUpperCase();

    // Limpiar la búsqueda actual
    table2.search('').draw();

    // Aplicar los nuevos criterios de búsqueda
    table2.columns().every(function () {
        var column = this;
       column.search('').draw();
    });

    if (busqueda_tipo_documento2 !== '0') {
        table2.column(1).search(busqueda_tipo_documento2).draw();
    }
    if (busqueda_serie2 !== '') {
        table2.column(2).search(busqueda_serie2).draw();
    }
    if (busqueda_nro_de_documento2 !== '') {
        table2.column(3).search(busqueda_nro_de_documento2).draw();
    }
    if (busqueda_ticket2 !== '') {
        table2.column(4).search(busqueda_ticket2).draw();
    }
    if (busqueda_tipo_documento_identidad2 !== '') {
        table2.column(5).search(busqueda_tipo_documento_identidad2).draw();
    }
    if (busqueda_nro_documento_identidad2 !== '') {
        table2.column(6).search(busqueda_nro_documento_identidad2).draw();
    }
    if (busqueda_razon_social2 !== '') {
        table2.column(7).search(busqueda_razon_social2).draw();
    }
    if (busqueda_monto_exportacion2 !== '') {
        table2.column(8).search(busqueda_monto_exportacion2).draw();
    }
    if (busqueda_base_imponible_gravado2 !== '') {
        table2.column(9).search(busqueda_base_imponible_gravado2).draw();
    }
    if (busqueda_base_imponible_dsct2 !== '') {
        table2.column(10).search(busqueda_base_imponible_dsct2).draw();
    }
    if (busqueda_base_igv_ipm2 !== '') {
        table2.column(11).search(busqueda_base_igv_ipm2).draw();
    }
    if (busqueda_dscto_igv_ipm2 !== '') {
        table2.column(12).search(busqueda_dscto_igv_ipm2).draw();
    }
    if (busqueda_monto_exonerado2 !== '') {
        table2.column(13).search(busqueda_monto_exonerado2).draw();
    }
    if (busqueda_monto_inafecto2 !== '') {
        table2.column(14).search(busqueda_monto_inafecto2).draw();
    }
    if (busqueda_monto_isc2 !== '') {
        table2.column(15).search(busqueda_monto_isc2).draw();
    }
    if (busqueda_base_imponible_ivap2 !== '') {
        table2.column(16).search(busqueda_base_imponible_ivap2).draw();
    }
    if (busqueda_monto_ivap2 !== '') {
        table2.column(17).search(busqueda_monto_ivap2).draw();
    }
    if (busqueda_monto_icbper2 !== '') {
        table2.column(18).search(busqueda_monto_icbper2).draw();
    }
    if (busqueda_monto_otros_tributos2 !== '') {
        table2.column(19).search(busqueda_monto_otros_tributos2).draw();
    }
    if (busqueda_monto_total2 !== '') {
        table2.column(20).search(busqueda_monto_total2).draw();
    }
    if (busqueda_moneda2 !== '') {
        table2.column(21).search(busqueda_moneda2).draw();
    }
    if (busqueda_tipo_cambio2 !== '') {
        table2.column(22).search(busqueda_tipo_cambio2).draw();
    }
    if (busqueda_fec_emision_doc_modificado2 !== '') {
        table2.column(23).search(busqueda_fec_emision_doc_modificado2).draw();
    }
    if (busqueda_tipo_doc_modificado2 !== '') {
        table2.column(24).search(busqueda_tipo_doc_modificado2).draw();
    }
    if (busqueda_serie_doc_modificado2 !== '') {
        table2.column(25).search(busqueda_serie_doc_modificado2).draw();
    }
    if (busqueda_numero_doc_modificado2 !== '') {
        table2.column(26).search(busqueda_numero_doc_modificado2).draw();
    }
    if (busqueda_proyecto_operados_atribucion2 !== '') {
        table2.column(27).search(busqueda_proyecto_operados_atribucion2).draw();
    }
    if (busqueda_tipo_de_nota2 !== '') {
        table2.column(28).search(busqueda_tipo_de_nota2).draw();
    }
    if (busqueda_estado_comprobante2 !== '') {
        table2.column(29).search(busqueda_estado_comprobante2).draw();
    }
    if (busqueda_valor_fob_embarcado2 !== '') {
        table2.column(30).search(busqueda_valor_fob_embarcado2).draw();
    }
    if (busqueda_valor_operacion_gratuito2 !== '') {
        table2.column(31).search(busqueda_valor_operacion_gratuito2).draw();
    }
    if (busqueda_tipo_operacion2 !== '') {
        table2.column(32).search(busqueda_tipo_operacion2).draw();
    }
    if (busqueda_dam_cp2 !== '') {
        table2.column(33).search(busqueda_dam_cp2).draw();
    }
    if (busqueda_clu2 !== '') {
        table2.column(34).search(busqueda_clu2).draw();
    }
    if (busqueda_car_sunat2 !== '') {
        table2.column(35).search(busqueda_car_sunat2).draw();
    }
});


});
