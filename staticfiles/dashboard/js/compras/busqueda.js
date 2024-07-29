$(document).ready(function () {

    var table1 = $('#example1').DataTable({
        ordering: false,
        language: {
            processing:     "Procesando...",
            search:         "Buscar:",
            lengthMenu:    "Mostrar _MENU_ elementos",
            info:           "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
            infoEmpty:      "Mostrando ningún elemento.",
            infoFiltered:   "(filtrado _MAX_ elementos total)",
            infoPostFix:    "",
            loadingRecords: "Cargando registros...",
            zeroRecords:    "No se encontraron registros",
            emptyTable:     "No hay datos disponibles en la tabla",
            paginate: {
                first:      "Primero",
                previous:   "<<",
                next:       ">>",
                last:       "Último"
            },
            aria: {
                sortAscending:  ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });

    $('#busqueda_tipo_documento1,#busqueda_serie1,#busqueda_nro_de_documento1,#busqueda_ticket1,#busqueda_tipo_documento_identidad1,#busqueda_nro_documento_identidad1,#busqueda_razon_social1,#busqueda_monto_exportacion1,#busqueda_base_imponible_gravado1,#busqueda_base_imponible_dsct1,#busqueda_base_igv_ipm1,#busqueda_dscto_igv_ipm1,#busqueda_monto_exonerado1,#busqueda_monto_inafecto1,#busqueda_monto_isc1,#busqueda_base_imponible_ivap1,#busqueda_monto_ivap1,#busqueda_monto_icbper1,#busqueda_monto_otros_tributos1,#busqueda_monto_total1,#busqueda_moneda1,#busqueda_tipo_cambio1,#busqueda_fec_emision_doc_modificado1,#busqueda_tipo_doc_modificado1,#busqueda_serie_doc_modificado1,#busqueda_numero_doc_modificado1,#busqueda_proyecto_operados_atribucion1,#busqueda_tipo_de_nota1,#busqueda_estado_comprobante1,#busqueda_valor_fob_embarcado1,#busqueda_valor_operacion_gratuito1,#busqueda_tipo_operacion1,#busqueda_dam_cp1,#busqueda_clu1,#busqueda_car_sunat1').on('input', function () {
        // Obtener el valor de los campos de búsqueda
        var busqueda_tipo_documento1=$('#busqueda_tipo_documento1').val().toUpperCase();
        var busqueda_tipo_documento1=$('#busqueda_tipo_documento1').val().toUpperCase();
        var busqueda_serie1=$('#busqueda_serie1').val().toUpperCase();
        var busqueda_nro_de_documento1=$('#busqueda_nro_de_documento1').val().toUpperCase();
        var busqueda_ticket1=$('#busqueda_ticket1').val().toUpperCase();
        var busqueda_tipo_documento_identidad1=$('#busqueda_tipo_documento_identidad1').val().toUpperCase();
        var busqueda_nro_documento_identidad1=$('#busqueda_nro_documento_identidad1').val().toUpperCase();
        var busqueda_razon_social1=$('#busqueda_razon_social1').val().toUpperCase();
        var busqueda_monto_exportacion1=$('#busqueda_monto_exportacion1').val().toUpperCase();
        var busqueda_base_imponible_gravado1=$('#busqueda_base_imponible_gravado1').val().toUpperCase();
        var busqueda_base_imponible_dsct1=$('#busqueda_base_imponible_dsct1').val().toUpperCase();
        var busqueda_base_igv_ipm1=$('#busqueda_base_igv_ipm1').val().toUpperCase();
        var busqueda_dscto_igv_ipm1=$('#busqueda_dscto_igv_ipm1').val().toUpperCase();
        var busqueda_monto_exonerado1=$('#busqueda_monto_exonerado1').val().toUpperCase();
        var busqueda_monto_inafecto1=$('#busqueda_monto_inafecto1').val().toUpperCase();
        var busqueda_monto_isc1=$('#busqueda_monto_isc1').val().toUpperCase();
        var busqueda_base_imponible_ivap1=$('#busqueda_base_imponible_ivap1').val().toUpperCase();
        var busqueda_monto_ivap1=$('#busqueda_monto_ivap1').val().toUpperCase();
        var busqueda_monto_icbper1=$('#busqueda_monto_icbper1').val().toUpperCase();
        var busqueda_monto_otros_tributos1=$('#busqueda_monto_otros_tributos1').val().toUpperCase();
        var busqueda_monto_total1=$('#busqueda_monto_total1').val().toUpperCase();
        var busqueda_moneda1=$('#busqueda_moneda1').val().toUpperCase();
        var busqueda_tipo_cambio1=$('#busqueda_tipo_cambio1').val().toUpperCase();
        var busqueda_fec_emision_doc_modificado1=$('#busqueda_fec_emision_doc_modificado1').val().toUpperCase();
        var busqueda_tipo_doc_modificado1=$('#busqueda_tipo_doc_modificado1').val().toUpperCase();
        var busqueda_serie_doc_modificado1=$('#busqueda_serie_doc_modificado1').val().toUpperCase();
        var busqueda_numero_doc_modificado1=$('#busqueda_numero_doc_modificado1').val().toUpperCase();
        var busqueda_proyecto_operados_atribucion1=$('#busqueda_proyecto_operados_atribucion1').val().toUpperCase();
        var busqueda_tipo_de_nota1=$('#busqueda_tipo_de_nota1').val().toUpperCase();
        var busqueda_estado_comprobante1=$('#busqueda_estado_comprobante1').val().toUpperCase();
        var busqueda_valor_fob_embarcado1=$('#busqueda_valor_fob_embarcado1').val().toUpperCase();
        var busqueda_valor_operacion_gratuito1=$('#busqueda_valor_operacion_gratuito1').val().toUpperCase();
        var busqueda_tipo_operacion1=$('#busqueda_tipo_operacion1').val().toUpperCase();
        var busqueda_dam_cp1=$('#busqueda_dam_cp1').val().toUpperCase();
        var busqueda_clu1=$('#busqueda_clu1').val().toUpperCase();
        var busqueda_car_sunat1=$('#busqueda_car_sunat1').val().toUpperCase();

        // Limpiar la búsqueda actual
        table1.search('').draw();

        // Aplicar los nuevos criterios de búsqueda
        table1.columns().every(function () {
            var column = this;
            column.search('').draw();
        });

        if (busqueda_tipo_documento1 !== '0') {
            table1.column(1).search(busqueda_tipo_documento1).draw();
        }
        if (busqueda_serie1 !== '') {
            table1.column(2).search(busqueda_serie1).draw();
        }
        if (busqueda_nro_de_documento1 !== '') {
            table1.column(3).search(busqueda_nro_de_documento1).draw();
        }
        if (busqueda_ticket1 !== '') {
            table1.column(4).search(busqueda_ticket1).draw();
        }
        if (busqueda_tipo_documento_identidad1 !== '') {
            table1.column(5).search(busqueda_tipo_documento_identidad1).draw();
        }
        if (busqueda_nro_documento_identidad1 !== '') {
            table1.column(6).search(busqueda_nro_documento_identidad1).draw();
        }
        if (busqueda_razon_social1 !== '') {
            table1.column(7).search(busqueda_razon_social1).draw();
        }
        if (busqueda_monto_exportacion1 !== '') {
            table1.column(8).search(busqueda_monto_exportacion1).draw();
        }
        if (busqueda_base_imponible_gravado1 !== '') {
            table1.column(9).search(busqueda_base_imponible_gravado1).draw();
        }
        if (busqueda_base_imponible_dsct1 !== '') {
            table1.column(10).search(busqueda_base_imponible_dsct1).draw();
        }
        if (busqueda_base_igv_ipm1 !== '') {
            table1.column(11).search(busqueda_base_igv_ipm1).draw();
        }
        if (busqueda_dscto_igv_ipm1 !== '') {
            table1.column(12).search(busqueda_dscto_igv_ipm1).draw();
        }
        if (busqueda_monto_exonerado1 !== '') {
            table1.column(13).search(busqueda_monto_exonerado1).draw();
        }
        if (busqueda_monto_inafecto1 !== '') {
            table1.column(14).search(busqueda_monto_inafecto1).draw();
        }
        if (busqueda_monto_isc1 !== '') {
            table1.column(15).search(busqueda_monto_isc1).draw();
        }
        if (busqueda_base_imponible_ivap1 !== '') {
            table1.column(16).search(busqueda_base_imponible_ivap1).draw();
        }
        if (busqueda_monto_ivap1 !== '') {
            table1.column(17).search(busqueda_monto_ivap1).draw();
        }
        if (busqueda_monto_icbper1 !== '') {
            table1.column(18).search(busqueda_monto_icbper1).draw();
        }
        if (busqueda_monto_otros_tributos1 !== '') {
            table1.column(19).search(busqueda_monto_otros_tributos1).draw();
        }
        if (busqueda_monto_total1 !== '') {
            table1.column(20).search(busqueda_monto_total1).draw();
        }
        if (busqueda_moneda1 !== '') {
            table1.column(21).search(busqueda_moneda1).draw();
        }
        if (busqueda_tipo_cambio1 !== '') {
            table1.column(22).search(busqueda_tipo_cambio1).draw();
        }
        if (busqueda_fec_emision_doc_modificado1 !== '') {
            table1.column(23).search(busqueda_fec_emision_doc_modificado1).draw();
        }
        if (busqueda_tipo_doc_modificado1 !== '') {
            table1.column(24).search(busqueda_tipo_doc_modificado1).draw();
        }
        if (busqueda_serie_doc_modificado1 !== '') {
            table1.column(25).search(busqueda_serie_doc_modificado1).draw();
        }
        if (busqueda_numero_doc_modificado1 !== '') {
            table1.column(26).search(busqueda_numero_doc_modificado1).draw();
        }
        if (busqueda_proyecto_operados_atribucion1 !== '') {
            table1.column(27).search(busqueda_proyecto_operados_atribucion1).draw();
        }
        if (busqueda_tipo_de_nota1 !== '') {
            table1.column(28).search(busqueda_tipo_de_nota1).draw();
        }
        if (busqueda_estado_comprobante1 !== '') {
            table1.column(29).search(busqueda_estado_comprobante1).draw();
        }
        if (busqueda_valor_fob_embarcado1 !== '') {
            table1.column(30).search(busqueda_valor_fob_embarcado1).draw();
        }
        if (busqueda_valor_operacion_gratuito1 !== '') {
            table1.column(31).search(busqueda_valor_operacion_gratuito1).draw();
        }
        if (busqueda_tipo_operacion1 !== '') {
            table1.column(32).search(busqueda_tipo_operacion1).draw();
        }
        if (busqueda_dam_cp1 !== '') {
            table1.column(33).search(busqueda_dam_cp1).draw();
        }
        if (busqueda_clu1 !== '') {
            table1.column(34).search(busqueda_clu1).draw();
        }
        if (busqueda_car_sunat1 !== '') {
            table1.column(35).search(busqueda_car_sunat1).draw();
        }
    });

    var table2 = $('#example2').DataTable({
        ordering: false,
        language: {
            processing:     "Procesando...",
            search:         "Buscar:",
            lengthMenu:    "Mostrar _MENU_ elementos",
            info:           "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
            infoEmpty:      "Mostrando ningún elemento.",
            infoFiltered:   "(filtrado _MAX_ elementos total)",
            infoPostFix:    "",
            loadingRecords: "Cargando registros...",
            zeroRecords:    "No se encontraron registros",
            emptyTable:     "No hay datos disponibles en la tabla",
            paginate: {
                first:      "Primero",
                previous:   "<<",
                next:       ">>",
                last:       "Último"
            },
            aria: {
                sortAscending:  ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
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
    
    function realizarBusqueda() {
        var periodo = $('#busqueda_periodo').val();
        if (periodo ==="" ){
            periodo = obtenerUltimoPeriodo();
        }

     // Realizar la solicitud AJAX al servidor
     $.ajax({
        url: base_url + '/Compras/buscarXPeriodoSUNAT', // Reemplaza con la ruta real de tu script PHP
        method: 'POST',
        dataType: 'json',
        data: {
            periodo: periodo
        },
        success: function (response) {
        //limpiar
        table1.clear().draw();

        response.forEach(function (datos_registros_compras_sunat) {
            var row = '<tr class="text-center">';
            row += '<td> <a onclick="verDatosSUNAT(' + datos_registros_compras_sunat['ID_RegCompSunat'] + ')"> <ion-icon class="icon__e" name="eye-outline"></ion-icon></a></td>';
            row += '<td>' + (datos_registros_compras_sunat['TipoDocumento'] !== null ? datos_registros_compras_sunat['TipoDocumento'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['SerieDcoumento'] !== null ? datos_registros_compras_sunat['SerieDcoumento'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['NumeroDocumento'] !== null ? datos_registros_compras_sunat['NumeroDocumento'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['Ticket'] !== null ? datos_registros_compras_sunat['Ticket'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['TipDocIdentidad'] !== null ? datos_registros_compras_sunat['TipDocIdentidad'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['NroDocIdentidad'] !== null ? datos_registros_compras_sunat['NroDocIdentidad'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['RazonSocial'] !== null ? datos_registros_compras_sunat['RazonSocial'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoExportacion'] !== null ? datos_registros_compras_sunat['MontoExportacion'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['BaseImponibleGravado'] !== null ? datos_registros_compras_sunat['BaseImponibleGravado'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['BaseImponibleDsct'] !== null ? datos_registros_compras_sunat['BaseImponibleDsct'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['BaseIgvIpm'] !== null ? datos_registros_compras_sunat['BaseIgvIpm'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['DsctoIgvIpm'] !== null ? datos_registros_compras_sunat['DsctoIgvIpm'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoExonerado'] !== null ? datos_registros_compras_sunat['MontoExonerado'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoInafecto'] !== null ? datos_registros_compras_sunat['MontoInafecto'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoISC'] !== null ? datos_registros_compras_sunat['MontoISC'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['BaseImponibleIvap'] !== null ? datos_registros_compras_sunat['BaseImponibleIvap'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoIvap'] !== null ? datos_registros_compras_sunat['MontoIvap'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoICBPER'] !== null ? datos_registros_compras_sunat['MontoICBPER'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoOtrostributos'] !== null ? datos_registros_compras_sunat['MontoOtrostributos'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['MontoTotal'] !== null ? datos_registros_compras_sunat['MontoTotal'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['Moneda'] !== null ? datos_registros_compras_sunat['Moneda'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['TipoCambio'] !== null ? datos_registros_compras_sunat['TipoCambio'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['FecEmisionDocModificado'] !== null ? datos_registros_compras_sunat['FecEmisionDocModificado'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['TipoDocModificado'] !== null ? datos_registros_compras_sunat['TipoDocModificado'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['SerieDocModificado'] !== null ? datos_registros_compras_sunat['SerieDocModificado'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['NumeroDocModificado'] !== null ? datos_registros_compras_sunat['NumeroDocModificado'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['ProyectoOperadosAtribucion'] !== null ? datos_registros_compras_sunat['ProyectoOperadosAtribucion'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['TipodeNota'] !== null ? datos_registros_compras_sunat['TipodeNota'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['EstadoComprobante'] !== null ? datos_registros_compras_sunat['EstadoComprobante'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['ValorFOBEmbarcado'] !== null ? datos_registros_compras_sunat['ValorFOBEmbarcado'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['ValorOperacionGratuito'] !== null ? datos_registros_compras_sunat['ValorOperacionGratuito'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['TipoOperacion'] !== null ? datos_registros_compras_sunat['TipoOperacion'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['DamCP'] !== null ? datos_registros_compras_sunat['DamCP'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['CLU'] !== null ? datos_registros_compras_sunat['CLU'] : '') + '</td>';
            row += '<td>' + (datos_registros_compras_sunat['CarSunat'] !== null ? datos_registros_compras_sunat['CarSunat'] : '') + '</td>';

            
            row += '</tr>';
            table1.row.add($(row));
        });


        //dibujar
        table1.draw();
                    
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
    
     // Realizar la solicitud AJAX al servidor
     $.ajax({
        url: base_url + '/Compras/buscarXPeriodoEmpresa', // Reemplaza con la ruta real de tu script PHP
        method: 'POST',
        dataType: 'json',
        data: {
            periodo: periodo
        },
        success: function (response) {
        //limpiar
        table2.clear().draw();

        response.forEach(function (datos_registros_compras_empresa) {
            var row2 = '<tr class="text-center">';
            row2 += '<td> <a onclick="verDatosEmpresa(' + datos_registros_compras_empresa['ID_RegCompEmpresa'] + ')"> <ion-icon class="icon__e" name="eye-outline"></ion-icon></a></td>';
            row2 += '<td>' + (datos_registros_compras_empresa['TipoDocumento'] !== null ? datos_registros_compras_empresa['TipoDocumento'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['SerieDcoumento'] !== null ? datos_registros_compras_empresa['SerieDcoumento'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['NumeroDocumento'] !== null ? datos_registros_compras_empresa['NumeroDocumento'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['Ticket'] !== null ? datos_registros_compras_empresa['Ticket'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['TipDocIdentidad'] !== null ? datos_registros_compras_empresa['TipDocIdentidad'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['NroDocIdentidad'] !== null ? datos_registros_compras_empresa['NroDocIdentidad'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['RazonSocial'] !== null ? datos_registros_compras_empresa['RazonSocial'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoExportacion'] !== null ? datos_registros_compras_empresa['MontoExportacion'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['BaseImponibleGravado'] !== null ? datos_registros_compras_empresa['BaseImponibleGravado'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['BaseImponibleDsct'] !== null ? datos_registros_compras_empresa['BaseImponibleDsct'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['BaseIgvIpm'] !== null ? datos_registros_compras_empresa['BaseIgvIpm'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['DsctoIgvIpm'] !== null ? datos_registros_compras_empresa['DsctoIgvIpm'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoExonerado'] !== null ? datos_registros_compras_empresa['MontoExonerado'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoInafecto'] !== null ? datos_registros_compras_empresa['MontoInafecto'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoISC'] !== null ? datos_registros_compras_empresa['MontoISC'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['BaseImponibleIvap'] !== null ? datos_registros_compras_empresa['BaseImponibleIvap'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoIvap'] !== null ? datos_registros_compras_empresa['MontoIvap'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoICBPER'] !== null ? datos_registros_compras_empresa['MontoICBPER'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoOtrostributos'] !== null ? datos_registros_compras_empresa['MontoOtrostributos'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['MontoTotal'] !== null ? datos_registros_compras_empresa['MontoTotal'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['Moneda'] !== null ? datos_registros_compras_empresa['Moneda'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['TipoCambio'] !== null ? datos_registros_compras_empresa['TipoCambio'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['FecEmisionDocModificado'] !== null ? datos_registros_compras_empresa['FecEmisionDocModificado'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['TipoDocModificado'] !== null ? datos_registros_compras_empresa['TipoDocModificado'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['SerieDocModificado'] !== null ? datos_registros_compras_empresa['SerieDocModificado'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['NumeroDocModificado'] !== null ? datos_registros_compras_empresa['NumeroDocModificado'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['ProyectoOperadosAtribucion'] !== null ? datos_registros_compras_empresa['ProyectoOperadosAtribucion'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['TipodeNota'] !== null ? datos_registros_compras_empresa['TipodeNota'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['EstadoComprobante'] !== null ? datos_registros_compras_empresa['EstadoComprobante'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['ValorFOBEmbarcado'] !== null ? datos_registros_compras_empresa['ValorFOBEmbarcado'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['ValorOperacionGratuito'] !== null ? datos_registros_compras_empresa['ValorOperacionGratuito'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['TipoOperacion'] !== null ? datos_registros_compras_empresa['TipoOperacion'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['DamCP'] !== null ? datos_registros_compras_empresa['DamCP'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['CLU'] !== null ? datos_registros_compras_empresa['CLU'] : '') + '</td>';
            row2 += '<td>' + (datos_registros_compras_empresa['CarSunat'] !== null ? datos_registros_compras_empresa['CarSunat'] : '') + '</td>';
        
            row2 += '</tr>';
            table2.row.add($(row2));
        });

        //dibujar
        table2.draw();
                    
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
      
    }
    
    // Llamar a realizarBusqueda cuando se haga clic en el botón
    $('.realizar_busqueda').on('click', realizarBusqueda);
    
    // Llamar a realizarBusqueda cuando se escriba en el campo #busqueda_periodo
    $('#busqueda_periodo').on('input', function () {
        var periodo = $(this).val().trim();
    
        if (periodo === "") {
            realizarBusqueda();
        }
    });

    function obtenerUltimoPeriodo() {
        const fechaActual = new Date();
        let ultimoPeriodo;
    
        // Obtener año y mes actuales
        const añoActual = fechaActual.getFullYear();
        const mesActual = fechaActual.getMonth() + 1; // Nota: en JavaScript, los meses van de 0 a 11
    
        // Calcular el último periodo
        if (mesActual === 1) {
            // Si el mes actual es enero, restar 1 al año y establecer el mes a diciembre
            ultimoPeriodo = (añoActual - 1).toString() + '12';
        } else {
            // Para otros meses, restar 1 al mes
            const mesAnterior = (mesActual - 1).toString().padStart(2, '0');
            ultimoPeriodo = añoActual.toString() + mesAnterior;
        }
    
        return ultimoPeriodo;
    }
    
  
});
