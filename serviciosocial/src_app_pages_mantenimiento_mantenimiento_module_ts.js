"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["src_app_pages_mantenimiento_mantenimiento_module_ts"],{

/***/ 46362:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mantenimiento/interfaces/mantenimiento.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mantenimiento": () => (/* binding */ Mantenimiento),
/* harmony export */   "Equipo": () => (/* binding */ Equipo),
/* harmony export */   "Categoria": () => (/* binding */ Categoria),
/* harmony export */   "Ubicacion": () => (/* binding */ Ubicacion),
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
class Mantenimiento {
    constructor(id, fechainicio, fechafin, descripcion, equipo) {
        this.id = id;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.descripcion = descripcion;
        this.equipo = equipo;
    }
}
class Equipo {
    constructor(numinventario, nombre, marca, modelo, anio, descripcion, numserie, ip, estado, categoria, ubicacione, usuario, id) {
        this.numinventario = numinventario;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.descripcion = descripcion;
        this.numserie = numserie;
        this.ip = ip;
        this.estado = estado;
        this.categoria = categoria;
        this.ubicacione = ubicacione;
        this.usuario = usuario;
        this.id = id;
    }
}
class Categoria {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}
class Ubicacion {
    constructor(id, edificio, espaciofisico, nivel) {
        this.id = id;
        this.edificio = edificio;
        this.espaciofisico = espaciofisico;
        this.nivel = nivel;
    }
}
class Usuario {
    constructor(nombreusuario, password, rol, correo, codigorecuperacion, estado, id) {
        this.nombreusuario = nombreusuario;
        this.password = password;
        this.rol = rol;
        this.correo = correo;
        this.codigorecuperacion = codigorecuperacion;
        this.estado = estado;
        this.id = id;
    }
}


/***/ }),

/***/ 22761:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/mantenimiento/listar/listar-mantenimiento/listar-mantenimiento.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarMantenimientoComponent": () => (/* binding */ ListarMantenimientoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _interfaces_mantenimiento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/mantenimiento */ 46362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_service_mantenimiento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service-mantenimiento.service */ 16646);
/* harmony import */ var _service_service_equipo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/service-equipo.service */ 27738);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);















function ListarMantenimientoComponent_h5_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" Serie: ", ctx_r0.equipo.numserie, " ", ctx_r0.equipo.categoria.nombre, " ");
} }
function ListarMantenimientoComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_tr_32_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const data_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34); return ctx_r8.editarlo(data_r6, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_tr_32_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const data_r6 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.eliminar(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 4, data_r6.fechainicio, "EEEE dd, MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 7, data_r6.fechafin, "EEEE dd, MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r6.descripcion);
} }
function ListarMantenimientoComponent_ng_template_33_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarMantenimientoComponent_ng_template_33_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarMantenimientoComponent_ng_template_33_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Las fechas no son v\u00E1lidas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarMantenimientoComponent_ng_template_33_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarMantenimientoComponent_ng_template_33_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tama\u00F1o m\u00EDnimo de descripci\u00F3n 8");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarMantenimientoComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Mantenimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_ng_template_33_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); })("click", function ListarMantenimientoComponent_ng_template_33_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ListarMantenimientoComponent_ng_template_33_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.accion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Fecha Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ListarMantenimientoComponent_ng_template_33_span_18_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Fecha Fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ListarMantenimientoComponent_ng_template_33_Template_input_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.dateValidator(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ListarMantenimientoComponent_ng_template_33_span_27_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ListarMantenimientoComponent_ng_template_33_div_28_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ListarMantenimientoComponent_ng_template_33_span_37_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, ListarMantenimientoComponent_ng_template_33_span_38_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_ng_template_33_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.reset(); })("click", function ListarMantenimientoComponent_ng_template_33_Template_button_click_40_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_6_0;
    let tmp_10_0;
    let tmp_11_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r3.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r3.esCampoValido("fechainicio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.mantenimientoSeleccionado != null ? ctx_r3.mantenimientoSeleccionado.fechainicio : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r3.formulario.get("fechainicio")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r3.esCampoValido("fechafin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.mantenimientoSeleccionado != null ? ctx_r3.mantenimientoSeleccionado.fechafin : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r3.formulario.get("fechafin")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.formulario.get("fechafin").hasError("dateMismatch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r3.esCampoValido("descripcion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.mantenimientoSeleccionado != null ? ctx_r3.mantenimientoSeleccionado.descripcion : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r3.formulario.get("descripcion")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r3.formulario.get("descripcion")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r3.formulario.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.butttonText);
} }
function ListarMantenimientoComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_ng_template_35_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const modal_r24 = restoredCtx.$implicit; return modal_r24.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Bot\u00F3n Agregar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Despliega una modal que permite ingresar los datos solicitados para el registro de un nuevo mantenimiento del equipo como lo son las fecha de inicio y de finilizaci\u00F3n, as\u00ED mismo una descripci\u00F3n del mantenimiento, tener en cuenta que no se aceptan las fechas de finalizaci\u00F3n menores a las de inicio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Bot\u00F3n Editar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Permite realizar cambios en el registro de mantenimiento del equipo seleccionado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Bot\u00F3n Eliminar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Permite eliminar el registro de mantenimiento seleccionado, tener en cuenta que una vez eliminados los datos no es posible recuperar dicho registro.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_ng_template_35_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const modal_r24 = restoredCtx.$implicit; return modal_r24.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
;
class ListarMantenimientoComponent {
    constructor(mantenimientoServicio, equipoServicio, modalService, fb, route) {
        this.mantenimientoServicio = mantenimientoServicio;
        this.equipoServicio = equipoServicio;
        this.modalService = modalService;
        this.fb = fb;
        this.route = route;
        this.mantenimientos = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.formulario = this.initFomulario();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.idEquipo = params['id'];
        });
        this.breadCrumbItems = [{ label: 'Mantenimiento' }, { label: 'Listado', active: true }];
        this.initFomulario();
        this.dtOptions = {
            columnDefs: [
                { className: "", targets: [0, 1, 2, 3, 4] },
                { orderable: false, targets: [4] },
                { searchable: false, targets: [4] },
                /*         { width: "35%", targets: [1,3] },
                        { width: "10%", targets: [0, 2, 4] }, */
            ],
            lengthMenu: [5, 10, 20, 50],
            destroy: true,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json',
                lengthMenu: "Mostrar _MENU_ registros",
                zeroRecords: "Ningún dato encontrado",
            },
            pagingType: 'full_numbers',
            responsive: true,
        };
        this.obtenerEquipo();
        this.cargarDatos();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
        // this.dtTrigger.complete()
    }
    initFomulario() {
        return this.fb.group({
            fechainicio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            fechafin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)]],
        });
    }
    reset() {
        this.formulario.reset();
    }
    openModal(content, reset) {
        if (reset) {
            this.mantenimientoSeleccionado = null;
            this.butttonText = "Guardar";
            this.formulario.reset();
            this.modalService.open(content);
        }
        else {
            this.butttonText = "Editar";
            this.modalService.open(content);
        }
    }
    esCampoValido(campo) {
        const validarCampo = this.formulario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    cargarDatos() {
        this.mantenimientoServicio.mantenimientos(this.idEquipo).subscribe((resp) => {
            this.mantenimientos = resp;
            this.dtTrigger.next(null);
        });
    }
    eliminar(mantenimiento) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: '¿Está seguro de eliminar? ',
            text: `Esto no se puede revertir`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.mantenimientoServicio.eliminar(mantenimiento).subscribe(resp => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Eliminado', 'El registro ha sido eliminado', 'success');
                    this.reload();
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        icon: 'error',
                        title: 'Error',
                        text: err.error.msg
                    });
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Cambios no aplicados', '', 'info');
            }
        });
    }
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            this.mantenimientos = [];
            dtInstance.destroy();
            this.cargarDatos();
        });
    }
    editarlo(seleccion, modal) {
        this.mantenimientoSeleccionado = seleccion;
        this.openModal(modal, false);
    }
    accion() {
        if (this.mantenimiento != null) {
            this.editar();
        }
        else {
            this.guardar();
        }
    }
    guardar() {
        const fechainicio = this.formulario.get('fechainicio').value;
        const fechafin = this.formulario.get('fechafin').value;
        const descripcion = this.formulario.get('descripcion').value;
        this.mantenimiento = new _interfaces_mantenimiento__WEBPACK_IMPORTED_MODULE_1__.Mantenimiento(null, fechainicio, fechafin, descripcion, this.equipo);
        this.mantenimientoServicio.guardar(this.mantenimiento).subscribe((resp) => {
            if (resp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Éxito', 'Almacenado correctamente', 'success');
                this.modalService.dismissAll();
                this.formulario.reset();
                this.reload();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Ocurrio un problema', '', 'warning');
            }
        });
        return Object.values(this.formulario.controls)
            .forEach(control => control.markAsTouched());
    }
    editar() {
        this.mantenimientoSeleccionado.fechainicio = this.formulario.controls['fechainicio'].value;
        this.mantenimientoSeleccionado.fechafin = this.formulario.controls['fechafin'].value;
        this.mantenimientoSeleccionado.descripcion = this.formulario.controls['descripcion'].value;
        this.mantenimientoServicio.editar(this.mantenimientoSeleccionado).subscribe(resp => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Éxito', 'Modificado correctamente', 'success');
            this.modalService.dismissAll();
            this.mantenimientoSeleccionado = null;
            this.reset();
            this.reload();
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Error',
                text: `Algo fallo`,
                icon: 'error',
            });
        });
    }
    dateValidator() {
        const fechainicio = this.formulario.get('fechainicio').value;
        const fechafin = this.formulario.get('fechafin').value;
        if (fechainicio && fechafin && fechainicio > fechafin) {
            this.formulario.get('fechafin').setErrors({ dateMismatch: true });
        }
        else {
            this.formulario.get('fechafin').setErrors(null);
        }
    }
    obtenerEquipo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const data = yield this.equipoServicio.equipo(this.idEquipo).toPromise();
                this.equipo = data;
            }
            catch (error) {
                console.error('Error al obtener el equipo: ', error);
            }
        });
    }
    openModalA(content) {
        this.modalService.open(content, { keyboard: false, scrollable: true, size: 'lg' });
    }
}
ListarMantenimientoComponent.ɵfac = function ListarMantenimientoComponent_Factory(t) { return new (t || ListarMantenimientoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_service_mantenimiento_service__WEBPACK_IMPORTED_MODULE_3__.ServiceMantenimientoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_service_equipo_service__WEBPACK_IMPORTED_MODULE_4__.ServiceEquipoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute)); };
ListarMantenimientoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListarMantenimientoComponent, selectors: [["app-listar-mantenimiento"]], viewQuery: function ListarMantenimientoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 37, vars: 5, consts: [[1, "container-fluid"], ["title", "Mantenimiento", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-sm-12", "text-end"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "row", "mb-2"], [1, "col-sm-12"], [4, "ngIf"], [1, "btn", "btn-info", "btn-rounded", "bg-gradient", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], ["datatable", "", 1, "table", "table-nowrap", 3, "dtOptions", "dtTrigger"], [1, ""], [4, "ngFor", "ngForOf"], ["role", "document"], ["modal", ""], ["ayuda", ""], ["scope", "row"], ["ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "click"], ["id", "modalMantenimiento", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "text-danger", "mb-4"], [1, "col-md-6"], [1, "mb-3"], [1, "text-danger"], ["type", "date", "name", "fechainicio", "autocomplete", "off", "formControlName", "fechainicio", 1, "form-control", 3, "ngModel"], [1, "invalid-feedback"], ["type", "date", "name", "fechafin", "autocomplete", "off", "formControlName", "fechafin", 1, "form-control", 3, "ngModel", "change"], [1, "col-md-12"], ["name", "descripcion", "autocomplete", "off", "formControlName", "descripcion", 1, "form-control", 3, "ngModel"], [1, "modal-footer", "mt-5"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-info", 3, "disabled"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", "text-justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], [1, "modal-footer"]], template: function ListarMantenimientoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](36); return ctx.openModalA(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ListarMantenimientoComponent_h5_13_Template, 2, 2, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarMantenimientoComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34); return ctx.openModal(_r2, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Fecha Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Fecha Fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ListarMantenimientoComponent_tr_32_Template, 14, 10, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ListarMantenimientoComponent_ng_template_33_Template, 44, 17, "ng-template", 18, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ListarMantenimientoComponent_ng_template_35_Template, 29, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.equipo && ctx.equipo.numserie);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.mantenimientos);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rhci1tYW50ZW5pbWllbnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBRUo7QUFDRTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFFSjtBQUNFLGdGQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNERBQUE7QUFFSjtBQUNFO0VBQ0Usa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUVSO0FBRUU7RUFDQyx5QkFBQTtFQUNDLFlBQUE7QUFDSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNJLFVBQUE7QUFBWjtBQUdFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJsaXN0YXItbWFudGVuaW1pZW50by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5idG4taWNvbi5yb3VuZGVkLWNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICAvKiBDYW1iaWEgZWwgdGFtYcOxbyBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEVsaW1pbmEgZWwgcmVsbGVubyBwYXJhIHF1ZSBzZWEgY29tcGxldGFtZW50ZSByZWRvbmRvICovXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAvKiBBbGluZWEgZWwgY29udGVuaWRvIHZlcnRpY2FsbWVudGUgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xuICAvKiBBanVzdGEgZWwgdGFtYcOxbyBkZWwgaWNvbm8gc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbi5idG4tdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogRXN0YWJsZWNlIGVsIGZvbmRvIGNvbW8gdHJhbnNwYXJlbnRlICovXG4gIGJvcmRlcjogbm9uZTtcbiAgLyogRWxpbWluYSBlbCBib3JkZSBzaSBlcyBuZWNlc2FyaW8gKi9cbiAgY29sb3I6ICMwMDdiZmY7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cbn1cblxuLyogUGVyc29uYWxpemEgZWwgY29sb3IgZGUgdGV4dG8gY3VhbmRvIHNlIHBhc2EgZWwgY3Vyc29yIHBvciBlbmNpbWEgZGVsIGJvdMOzbiAqL1xuLmJ0bi10cmFuc3BhcmVudDpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGFsIHBhc2FyIGVsIGN1cnNvciBwb3IgZW5jaW1hICovXG59XG5cbi5jbG9zZUEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyNXB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogNzUwcHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBpenF1aWVyZGEgKi9cbn1cblxuLm1vZGFsLWhlYWRlckEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMDAwO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5tb2RhbC10aXRsZUEge1xuICBjb2xvcjogI2ZmZjtcbiAgLyogQ29sb3IgZGVsIHRleHRvIGVuIGVsIGVuY2FiZXphZG8gKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBFc3RhYmxlY2VyIHBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHBvc2ljaW9uYXIgZWwgYm90w7NuICovXG4gIHRvcDogMjBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIHN1cGVyaW9yICovXG4gIGxlZnQ6IDEycHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG59Il19 */"] });


/***/ }),

/***/ 95090:
/*!*********************************************************************!*\
  !*** ./src/app/pages/mantenimiento/mantenimiento-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MantenimientoRoutingModule": () => (/* binding */ MantenimientoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _listar_listar_mantenimiento_listar_mantenimiento_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar/listar-mantenimiento/listar-mantenimiento.component */ 22761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'lista/:id', component: _listar_listar_mantenimiento_listar_mantenimiento_component__WEBPACK_IMPORTED_MODULE_0__.ListarMantenimientoComponent },
];
class MantenimientoRoutingModule {
}
MantenimientoRoutingModule.ɵfac = function MantenimientoRoutingModule_Factory(t) { return new (t || MantenimientoRoutingModule)(); };
MantenimientoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MantenimientoRoutingModule });
MantenimientoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MantenimientoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 82485:
/*!*************************************************************!*\
  !*** ./src/app/pages/mantenimiento/mantenimiento.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MantenimientoModule": () => (/* binding */ MantenimientoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _mantenimiento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mantenimiento-routing.module */ 95090);
/* harmony import */ var _listar_listar_mantenimiento_listar_mantenimiento_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar/listar-mantenimiento/listar-mantenimiento.component */ 22761);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox */ 15367);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 91955);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/widget/widget.module */ 57337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);


















class MantenimientoModule {
}
MantenimientoModule.ɵfac = function MantenimientoModule_Factory(t) { return new (t || MantenimientoModule)(); };
MantenimientoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MantenimientoModule });
MantenimientoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _mantenimiento_routing_module__WEBPACK_IMPORTED_MODULE_0__.MantenimientoRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__.WidgetModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginationModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_15__.NgxMaskModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MantenimientoModule, { declarations: [_listar_listar_mantenimiento_listar_mantenimiento_component__WEBPACK_IMPORTED_MODULE_1__.ListarMantenimientoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _mantenimiento_routing_module__WEBPACK_IMPORTED_MODULE_0__.MantenimientoRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__.WidgetModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginationModule, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, ngx_mask__WEBPACK_IMPORTED_MODULE_15__.NgxMaskModule] }); })();


/***/ }),

/***/ 27738:
/*!***********************************************************************!*\
  !*** ./src/app/pages/mantenimiento/service/service-equipo.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceEquipoService": () => (/* binding */ ServiceEquipoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class ServiceEquipoService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlG}/equipo`;
    }
    equipo(id) {
        return this.http.get(`${this.url}/${id}`);
    }
}
ServiceEquipoService.ɵfac = function ServiceEquipoService_Factory(t) { return new (t || ServiceEquipoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ServiceEquipoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceEquipoService, factory: ServiceEquipoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 16646:
/*!******************************************************************************!*\
  !*** ./src/app/pages/mantenimiento/service/service-mantenimiento.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceMantenimientoService": () => (/* binding */ ServiceMantenimientoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class ServiceMantenimientoService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlG}/mantenimiento`;
    }
    mantenimientos(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    guardar(data) {
        return this.http.post(`${this.url}`, data);
    }
    editar(data) {
        return this.http.put(`${this.url}/${data.id}`, data);
    }
    eliminar(data) {
        return this.http.delete(`${this.url}/${data.id}`);
    }
}
ServiceMantenimientoService.ɵfac = function ServiceMantenimientoService_Factory(t) { return new (t || ServiceMantenimientoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ServiceMantenimientoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceMantenimientoService, factory: ServiceMantenimientoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_mantenimiento_mantenimiento_module_ts.js.map