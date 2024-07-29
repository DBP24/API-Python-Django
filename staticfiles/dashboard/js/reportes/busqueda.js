$(document).ready(function () {

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
