"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["common"],{

/***/ 58498:
/*!**************************************************!*\
  !*** ./src/app/constantes/constantesproyecto.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCaracter": () => (/* binding */ isCaracter),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isTel": () => (/* binding */ isTel),
/* harmony export */   "isDescription": () => (/* binding */ isDescription),
/* harmony export */   "isCarnet": () => (/* binding */ isCarnet),
/* harmony export */   "telefonoRegex": () => (/* binding */ telefonoRegex),
/* harmony export */   "idUsuarioTemp": () => (/* binding */ idUsuarioTemp)
/* harmony export */ });
const isCaracter = '^([A-Za-záéíóúÁÉÍÓÚñÑüÜ\\ ]+[ ]?){1,2}$';
const isNumber = '^[0-9]+([\\.,][0-9]+)?$';
const isTel = '^[0-9]{4}[ -]?[0-9]{4}$';
const isDescription = '^([A-Za-záéíóúÁÉÍÓÚñÑüÜ0-9\\ ]+[ ]?){1,2}$';
const isCarnet = /^[A-Za-z]{2}\d{5}$/;
const telefonoRegex = /^[267]\d{7}$/;
//export const idEstudianteTemp:number=20230912100746;
const idUsuarioTemp = 20230912171789;


/***/ }),

/***/ 79005:
/*!************************************************************!*\
  !*** ./src/app/pages/actividad/models/detalleactividad.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleActividad": () => (/* binding */ DetalleActividad),
/* harmony export */   "DetalleActividadMostrar": () => (/* binding */ DetalleActividadMostrar),
/* harmony export */   "DetalleActividadEdit": () => (/* binding */ DetalleActividadEdit),
/* harmony export */   "Ejecucion": () => (/* binding */ Ejecucion),
/* harmony export */   "Ubicacion": () => (/* binding */ Ubicacion),
/* harmony export */   "Edificio": () => (/* binding */ Edificio),
/* harmony export */   "HorasActividad": () => (/* binding */ HorasActividad),
/* harmony export */   "ConfirmarEstado": () => (/* binding */ ConfirmarEstado),
/* harmony export */   "DetalleActividadModi": () => (/* binding */ DetalleActividadModi),
/* harmony export */   "DetalleActividadEstado": () => (/* binding */ DetalleActividadEstado)
/* harmony export */ });
class DetalleActividad {
    constructor(fecha, horaInicio, horaFin, estado, idEstudiante, idUbicacion, idDetalle) {
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.estado = estado;
        this.idEstudiante = idEstudiante;
        this.idUbicacion = idUbicacion;
        this.idDetalle = idDetalle;
    }
}
class DetalleActividadMostrar {
    constructor(nombres, apellidos, fecha, nivel, edificio, espacioFisico, horaInicio, horaFin, estado) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fecha = fecha;
        this.nivel = nivel;
        this.edificio = edificio;
        this.espacioFisico = espacioFisico;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.estado = estado;
    }
}
//solo para setear datos al editar
class DetalleActividadEdit {
    constructor(fecha, horaInicio, horaFin, estado, idEstudiante, idUbicacion, idDetalle) {
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.estado = estado;
        this.idEstudiante = idEstudiante;
        this.idUbicacion = idUbicacion;
        this.idDetalle = idDetalle;
    }
}
class Ejecucion {
    constructor(idDetalleActividad, idActividad, id) {
        this.idDetalleActividad = idDetalleActividad;
        this.idActividad = idActividad;
        this.id = id;
    }
}
class Ubicacion {
    constructor(id, espaciofisico, nivel, edificio) {
        this.id = id;
        this.espaciofisico = espaciofisico;
        this.nivel = nivel;
        this.edificio = edificio;
    }
}
class Edificio {
    constructor(id, edificio, niveles) {
        this.id = id;
        this.edificio = edificio;
        this.niveles = niveles;
    }
}
class HorasActividad {
    constructor(id, nombre, apellido, horas) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.horas = horas;
    }
}
class ConfirmarEstado {
    constructor(idActividad, usuarioNombre, nombreActividad, coinciden) {
        this.idActividad = idActividad;
        this.usuarioNombre = usuarioNombre;
        this.nombreActividad = nombreActividad;
        this.coinciden = coinciden;
    }
}
class DetalleActividadModi {
    constructor(fecha, horaInicio, horaFin, estado, idEstudiante, idUbicacion, id) {
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.estado = estado;
        this.idEstudiante = idEstudiante;
        this.idUbicacion = idUbicacion;
        this.id = id;
    }
}
class DetalleActividadEstado {
    constructor(estado) {
        this.estado = estado;
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map