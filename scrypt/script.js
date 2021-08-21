'use strict';

//metodo
let proveedor = [];
// clase datosproveedor
class datosProveedor  {
    constructor(idNombre, idDpi, idCel, idEmail,idEmpresa,  idUsuario, idContraseña){
        this.idNombre=idNombre;
        this.idDpi=idDpi;
        this.idCel=idCel;
        this.idEmail=idEmail;
        this.idEmpresa=idEmpresa;
        this.idUsuario=idUsuario;
        this.idContraseña=idContraseña;
    }
}
//funcion para validar los datos
function validarCampos (){
    if(document.getElementById('idNombre').value == ""){
        alert('debe ingresar el nombre');
        return false;
    }
    if(document.getElementById('idDpi').value == ""){
        alert('debe ingresar el Dpi');
        return false;
    }
    if(document.getElementById('idCel').value == ""){
        alert('debe ingresar el Telefono');
        return false;
    }
    if(document.getElementById('idEmail').value == ""){
        alert('debe ingresar el Correo');
        return false;
    }
    if(document.getElementById('idEmpresa').value == ""){
        alert('debe seleccionar la empresa');
        return false;
    }
    
    if(document.getElementById('idUsuario').value == ""){
        alert('debe ingresar el Usuario');
        return false;
    }
    if(document.getElementById('idContraseña').value == ""){
        alert('debe ingresar la contraseña');
        return false;
    }
    return true;
}

//funcion para poblar el arreglo

function poblarArreglo(){
    let idNombre = document.getElementById('idNombre').value;
    let idDpi= document.getElementById('idDpi').value;
    let idCel= document.getElementById('idCel').value;
    let idEmail=document.getElementById('idEmail').value;
    let idEmpresa=document.getElementById('idEmpresa').value;
    let idUsuario=document.getElementById('idUsuario').value;
    let idContraseña=document.getElementById('idContraseña').value;

    proveedor.push(new datosProveedor(idNombre,idDpi,idCel,idEmail,idEmpresa,  idUsuario,idContraseña));

}

//mostrar datos

function mostrarDatos(){
    let rows = "";

    for (let index = 0; index < proveedor.length; index++) {
        
        rows += '<tr>'
        rows += '<td>' + proveedor[index].idNombre + '</td>'
        rows += '<td>' + proveedor [index].idDpi + '</td>'
        rows += '<td>' + proveedor [index].idCel + '</td>'
        rows += '<td>' + proveedor [index].idEmail +'</td>'
        rows += '<td>' + proveedor[index].idEmpresa +'</td>'
        rows += '<td>' + proveedor[index].idUsuario + '</td>'
        rows += '<td>' + proveedor[index].idContraseña + '</td>'
        rows +='</tr>'
        
    }
   document.getElementById('listado').innerHTML = rows;
}
//funcion principal
function addData(){

    //validar campos
   

    if(validarCampos()== false){
        return;
    }
   
    //poblar arreglo
    poblarArreglo();

   
    //mostare datos
    mostrarDatos();



    alert(' agregados correctamente...');
    
}