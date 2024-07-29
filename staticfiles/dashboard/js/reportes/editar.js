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