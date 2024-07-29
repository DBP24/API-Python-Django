function verDatosSUNAT(id) {
    let request = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    let ajaxUrl = base_url + "/Ventas/editar_ventas_sunat/";
    let strData = "id=" + id;
    request.open("POST", ajaxUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(strData);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        let objData = JSON.parse(request.responseText);
  
        if (objData.status) {
          //Datos del proveedor
          document.querySelector("#tipdocidentidad").value = objData.ventas_sunat.TipDocIdentidad;
          document.querySelector("#nrodocidentidad").value = objData.ventas_sunat.NroDocIdentidad;
          document.querySelector("#razonsocial").value = objData.ventas_sunat.RazonSocial;

          //Detalles del CP
          document.querySelector("#montoexportacion").value = objData.ventas_sunat.MontoExportacion;
		  document.querySelector("#baseimponiblegravado").value = objData.ventas_sunat.BaseImponibleGravado;
		  document.querySelector("#baseimponibledsct").value = objData.ventas_sunat.BaseImponibleDsct;
		  document.querySelector("#baseigvipm").value = objData.ventas_sunat.BaseIgvIpm;
		  document.querySelector("#dsctoigvipm").value = objData.ventas_sunat.DsctoIgvIpm;
		  document.querySelector("#montoexonerado").value = objData.ventas_sunat.MontoExonerado;
		  document.querySelector("#montoinafecto").value = objData.ventas_sunat.MontoInafecto;
		  document.querySelector("#montoisc").value = objData.ventas_sunat.MontoISC;
		  document.querySelector("#baseimponibleivap").value = objData.ventas_sunat.BaseImponibleIvap;
		  document.querySelector("#montoivap").value = objData.ventas_sunat.MontoIvap;
		  document.querySelector("#montoicbper").value = objData.ventas_sunat.MontoICBPER;
		  document.querySelector("#montootrostributos").value = objData.ventas_sunat.MontoOtrostributos;
		  document.querySelector("#montototal").value = objData.ventas_sunat.MontoTotal;
		  document.querySelector("#moneda").value = objData.ventas_sunat.Moneda;
		  document.querySelector("#tipocambio").value = objData.ventas_sunat.TipoCambio;
		  document.querySelector("#fecemisiondocmodificado").value = objData.ventas_sunat.FecEmisionDocModificado;
		  document.querySelector("#tipodocmodificado").value = objData.ventas_sunat.TipoDocModificado;
		  document.querySelector("#seriedocmodificado").value = objData.ventas_sunat.SerieDocModificado;
		  document.querySelector("#numerodocmodificado").value = objData.ventas_sunat.NumeroDocModificado;
		  document.querySelector("#proyectooperadosatribucion").value = objData.ventas_sunat.ProyectoOperadosAtribucion;
		  document.querySelector("#tipodenota").value = objData.ventas_sunat.TipodeNota;
		  document.querySelector("#estadocomprobante").value = objData.ventas_sunat.EstadoComprobante;
		  document.querySelector("#valorfobembarcado").value = objData.ventas_sunat.ValorFOBEmbarcado;
		  document.querySelector("#valoroperaciongratuito").value = objData.ventas_sunat.ValorOperacionGratuito;
		  document.querySelector("#tipooperacion").value = objData.ventas_sunat.TipoOperacion;
		  document.querySelector("#damcp").value = objData.ventas_sunat.DamCP;
		  document.querySelector("#clu").value = objData.ventas_sunat.CLU;
		  document.querySelector("#carsunat").value = objData.ventas_sunat.CarSunat;
  
          $("#modalEditarVentasSUNAT").modal("show");
  
        } else {
          swal("Error", objData.msg, "error");
        }
      }
    };
}


function verDatosEmpresa(idd) {
    let request = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    let ajaxUrl = base_url + "/Ventas/editar_ventas_empresa/";
    let strData = "id=" + idd;
    request.open("POST", ajaxUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(strData);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        let objData = JSON.parse(request.responseText);
  
        if (objData.status) {
          //Datos del proveedor
          document.querySelector("#tipdocidentidad1").value = objData.ventas_empresa.TipDocIdentidad;
          document.querySelector("#nrodocidentidad1").value = objData.ventas_empresa.NroDocIdentidad;
          document.querySelector("#razonsocial1").value = objData.ventas_empresa.RazonSocial;

          //Detalles del CP
          document.querySelector("#montoexportacion1").value = objData.ventas_empresa.MontoExportacion;
		  document.querySelector("#baseimponiblegravado1").value = objData.ventas_empresa.BaseImponibleGravado;
		  document.querySelector("#baseimponibledsct1").value = objData.ventas_empresa.BaseImponibleDsct;
		  document.querySelector("#baseigvipm1").value = objData.ventas_empresa.BaseIgvIpm;
		  document.querySelector("#dsctoigvipm1").value = objData.ventas_empresa.DsctoIgvIpm;
		  document.querySelector("#montoexonerado1").value = objData.ventas_empresa.MontoExonerado;
		  document.querySelector("#montoinafecto1").value = objData.ventas_empresa.MontoInafecto;
		  document.querySelector("#montoisc1").value = objData.ventas_empresa.MontoISC;
		  document.querySelector("#baseimponibleivap1").value = objData.ventas_empresa.BaseImponibleIvap;
		  document.querySelector("#montoivap1").value = objData.ventas_empresa.MontoIvap;
		  document.querySelector("#montoicbper1").value = objData.ventas_empresa.MontoICBPER;
		  document.querySelector("#montootrostributos1").value = objData.ventas_empresa.MontoOtrostributos;
		  document.querySelector("#montototal1").value = objData.ventas_empresa.MontoTotal;
		  document.querySelector("#moneda1").value = objData.ventas_empresa.Moneda;
		  document.querySelector("#tipocambio1").value = objData.ventas_empresa.TipoCambio;
		  document.querySelector("#fecemisiondocmodificado1").value = objData.ventas_empresa.FecEmisionDocModificado;
		  document.querySelector("#tipodocmodificado1").value = objData.ventas_empresa.TipoDocModificado;
		  document.querySelector("#seriedocmodificado1").value = objData.ventas_empresa.SerieDocModificado;
		  document.querySelector("#numerodocmodificado1").value = objData.ventas_empresa.NumeroDocModificado;
		  document.querySelector("#proyectooperadosatribucion1").value = objData.ventas_empresa.ProyectoOperadosAtribucion;
		  document.querySelector("#tipodenota1").value = objData.ventas_empresa.TipodeNota;
		  document.querySelector("#estadocomprobante1").value = objData.ventas_empresa.EstadoComprobante;
		  document.querySelector("#valorfobembarcado1").value = objData.ventas_empresa.ValorFOBEmbarcado;
		  document.querySelector("#valoroperaciongratuito1").value = objData.ventas_empresa.ValorOperacionGratuito;
		  document.querySelector("#tipooperacion1").value = objData.ventas_empresa.TipoOperacion;
		  document.querySelector("#damcp1").value = objData.ventas_empresa.DamCP;
		  document.querySelector("#clu1").value = objData.ventas_empresa.CLU;
		  document.querySelector("#carsunat1").value = objData.ventas_empresa.CarSunat;
  
          $("#modalEditarVentasEmpresa").modal("show");
  
        } else {
          swal("Error", objData.msg, "error");
        }
      }
    };
}