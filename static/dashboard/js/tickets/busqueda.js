$(document).ready(function () {
    var table1 = $('#example2').DataTable({
        ordering: false,
        columnDefs: [
            { width: '6%', targets: 0 },  // Tamaño de la primera columna
            { width: '8%', targets: 1 }, // Tamaño de la segunda columna
            { width: '8%', targets: 2 }, // Tamaño de la tercera columna
            { width: '10%', targets: 3 }, // Tamaño de la cuarta columna
            { width: '10%', targets: 4 }, // Tamaño de la quinta columna
            { width: '6%', targets: 5 }, // Tamaño de la sexta columna
            { width: '6%', targets: 6 } // Tamaño de la setima columna
        ],
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

    $('#busqueda_periodo, #busqueda_numero_ticket, #busqueda_fecha_proceso, #busqueda_nro_registros,#busqueda_tipo_libro, #busqueda_estado')
        .on('input', function() {
        // Obtener el valor de los campos de búsqueda
        var periodo = $('#busqueda_periodo').val().toUpperCase();
        var tipoLibro = $('#busqueda_tipo_libro').val().toUpperCase();
        var estado = $('#busqueda_estado').val().toUpperCase();
        var numeroTicket = $('#busqueda_numero_ticket').val().toUpperCase();
        var fechaProceso = $('#busqueda_fecha_proceso').val().toUpperCase();
        var nroRegistros = $('#busqueda_nro_registros').val().toUpperCase();

        // Limpiar la búsqueda actual
        table1.search('').draw();

        // Aplicar los nuevos criterios de búsqueda
        table1.columns().every(function () {
            var column = this;
            column.search('').draw();
        });

        if (periodo !== '') {
            table1.column(1).search(periodo).draw();
        }
        if (numeroTicket !== '') {
            table1.column(2).search(numeroTicket).draw();
        }
        if (fechaProceso !== '') {
            table1.column(3).search(fechaProceso).draw();
        }
        if (tipoLibro !== '0') {
            table1.column(4).search(tipoLibro).draw();
        }
        if (nroRegistros !== '') {
            table1.column(5).search(nroRegistros).draw();
        }
        if (estado !== '0') {
            table1.column(6).search(estado).draw();
        }
    });
});