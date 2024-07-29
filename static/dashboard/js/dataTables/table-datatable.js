$(function () {
    "use strict";

    $(document).ready(function () {
        $('#example').DataTable();
    });


    /*$(document).ready(function () {
        var table = $('#example2').DataTable({
            lengthChange: false,
            ordering: false,
            searching: false, // Deshabilitar la funcionalidad de búsqueda
            columnDefs: [
                { width: '2%', targets: 0 },  // Tamaño de la primera columna
                { width: '6%', targets: 1 }, // Tamaño de la segunda columna
                { width: '10%', targets: 2 }, // Tamaño de la tercera columna
                { width: '15%', targets: 3 }, // Tamaño de la cuarta columna
                { width: '15%', targets: 4 }, // Tamaño de la quinta columna
                { width: '10%', targets: 5 }, // Tamaño de la sexta columna
                { width: '10%', targets: 6 }// Tamaño de la octava column
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

        /*var table1 = $('#example3').DataTable({
            lengthChange: false,
            ordering: false,
            searching: false, // Deshabilitar la funcionalidad de búsqueda
            columnDefs: [
                { width: '2%', targets: 0 },  // Tamaño de la primera columna
                { width: '6%', targets: 1 }, // Tamaño de la segunda columna
                { width: '10%', targets: 2 }, // Tamaño de la tercera columna
                { width: '15%', targets: 3 }, // Tamaño de la cuarta columna
                { width: '15%', targets: 4 }, // Tamaño de la quinta columna
                { width: '10%', targets: 5 }, // Tamaño de la sexta columna
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
    
        // table.buttons().container().appendTo('#example2_wrapper .col-md-6:eq(0)');
    });*/
    


});