function verDatosSUNAT(id) {
    let request = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    let ajaxUrl = base_url + "/Compras/editar_compras_sunat/";
    let strData = "id=" + id;
    request.open("POST", ajaxUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(strData);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        let objData = JSON.parse(request.responseText);
  
        if (objData.status) {
          //Datos del proveedor
          document.querySelector("#tipdocidentidad").value = objData.compras_sunat.TipDocIdentidad;
          document.querySelector("#nrodocidentidad").value = objData.compras_sunat.NroDocIdentidad;
          document.querySelector("#razonsocial").value = objData.compras_sunat.RazonSocial;

          //Detalles del CP
          document.querySelector("#montoexportacion").value = objData.compras_sunat.MontoExportacion;
		  document.querySelector("#baseimponiblegravado").value = objData.compras_sunat.BaseImponibleGravado;
		  document.querySelector("#baseimponibledsct").value = objData.compras_sunat.BaseImponibleDsct;
		  document.querySelector("#baseigvipm").value = objData.compras_sunat.BaseIgvIpm;
		  document.querySelector("#dsctoigvipm").value = objData.compras_sunat.DsctoIgvIpm;
		  document.querySelector("#montoexonerado").value = objData.compras_sunat.MontoExonerado;
		  document.querySelector("#montoinafecto").value = objData.compras_sunat.MontoInafecto;
		  document.querySelector("#montoisc").value = objData.compras_sunat.MontoISC;
		  document.querySelector("#baseimponibleivap").value = objData.compras_sunat.BaseImponibleIvap;
		  document.querySelector("#montoivap").value = objData.compras_sunat.MontoIvap;
		  document.querySelector("#montoicbper").value = objData.compras_sunat.MontoICBPER;
		  document.querySelector("#montootrostributos").value = objData.compras_sunat.MontoOtrostributos;
		  document.querySelector("#montototal").value = objData.compras_sunat.MontoTotal;
		  document.querySelector("#moneda").value = objData.compras_sunat.Moneda;
		  document.querySelector("#tipocambio").value = objData.compras_sunat.TipoCambio;
		  document.querySelector("#fecemisiondocmodificado").value = objData.compras_sunat.FecEmisionDocModificado;
		  document.querySelector("#tipodocmodificado").value = objData.compras_sunat.TipoDocModificado;
		  document.querySelector("#seriedocmodificado").value = objData.compras_sunat.SerieDocModificado;
		  document.querySelector("#numerodocmodificado").value = objData.compras_sunat.NumeroDocModificado;
		  document.querySelector("#proyectooperadosatribucion").value = objData.compras_sunat.ProyectoOperadosAtribucion;
		  document.querySelector("#tipodenota").value = objData.compras_sunat.TipodeNota;
		  document.querySelector("#estadocomprobante").value = objData.compras_sunat.EstadoComprobante;
		  document.querySelector("#valorfobembarcado").value = objData.compras_sunat.ValorFOBEmbarcado;
		  document.querySelector("#valoroperaciongratuito").value = objData.compras_sunat.ValorOperacionGratuito;
		  document.querySelector("#tipooperacion").value = objData.compras_sunat.TipoOperacion;
		  document.querySelector("#damcp").value = objData.compras_sunat.DamCP;
		  document.querySelector("#clu").value = objData.compras_sunat.CLU;
		  document.querySelector("#carsunat").value = objData.compras_sunat.CarSunat;
  
          $("#modalEditarComprasSUNAT").modal("show");
  
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
    let ajaxUrl = base_url + "/Compras/editar_compras_empresa/";
    let strData = "id=" + idd;
    request.open("POST", ajaxUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(strData);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        let objData = JSON.parse(request.responseText);
  
        if (objData.status) {
          //Datos del proveedor
          document.querySelector("#tipdocidentidad1").value = objData.compras_empresa.TipDocIdentidad;
          document.querySelector("#nrodocidentidad1").value = objData.compras_empresa.NroDocIdentidad;
          document.querySelector("#razonsocial1").value = objData.compras_empresa.RazonSocial;

          //Detalles del CP
          document.querySelector("#montoexportacion1").value = objData.compras_empresa.MontoExportacion;
		  document.querySelector("#baseimponiblegravado1").value = objData.compras_empresa.BaseImponibleGravado;
		  document.querySelector("#baseimponibledsct1").value = objData.compras_empresa.BaseImponibleDsct;
		  document.querySelector("#baseigvipm1").value = objData.compras_empresa.BaseIgvIpm;
		  document.querySelector("#dsctoigvipm1").value = objData.compras_empresa.DsctoIgvIpm;
		  document.querySelector("#montoexonerado1").value = objData.compras_empresa.MontoExonerado;
		  document.querySelector("#montoinafecto1").value = objData.compras_empresa.MontoInafecto;
		  document.querySelector("#montoisc1").value = objData.compras_empresa.MontoISC;
		  document.querySelector("#baseimponibleivap1").value = objData.compras_empresa.BaseImponibleIvap;
		  document.querySelector("#montoivap1").value = objData.compras_empresa.MontoIvap;
		  document.querySelector("#montoicbper1").value = objData.compras_empresa.MontoICBPER;
		  document.querySelector("#montootrostributos1").value = objData.compras_empresa.MontoOtrostributos;
		  document.querySelector("#montototal1").value = objData.compras_empresa.MontoTotal;
		  document.querySelector("#moneda1").value = objData.compras_empresa.Moneda;
		  document.querySelector("#tipocambio1").value = objData.compras_empresa.TipoCambio;
		  document.querySelector("#fecemisiondocmodificado1").value = objData.compras_empresa.FecEmisionDocModificado;
		  document.querySelector("#tipodocmodificado1").value = objData.compras_empresa.TipoDocModificado;
		  document.querySelector("#seriedocmodificado1").value = objData.compras_empresa.SerieDocModificado;
		  document.querySelector("#numerodocmodificado1").value = objData.compras_empresa.NumeroDocModificado;
		  document.querySelector("#proyectooperadosatribucion1").value = objData.compras_empresa.ProyectoOperadosAtribucion;
		  document.querySelector("#tipodenota1").value = objData.compras_empresa.TipodeNota;
		  document.querySelector("#estadocomprobante1").value = objData.compras_empresa.EstadoComprobante;
		  document.querySelector("#valorfobembarcado1").value = objData.compras_empresa.ValorFOBEmbarcado;
		  document.querySelector("#valoroperaciongratuito1").value = objData.compras_empresa.ValorOperacionGratuito;
		  document.querySelector("#tipooperacion1").value = objData.compras_empresa.TipoOperacion;
		  document.querySelector("#damcp1").value = objData.compras_empresa.DamCP;
		  document.querySelector("#clu1").value = objData.compras_empresa.CLU;
		  document.querySelector("#carsunat1").value = objData.compras_empresa.CarSunat;
  
          $("#modalEditarComprasEmpresa").modal("show");
  
        } else {
          swal("Error", objData.msg, "error");
        }
      }
    };
}