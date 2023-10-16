"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["src_app_pages_ubicacion_ubicacion_module_ts"],{

/***/ 90463:
/*!*********************************************************!*\
  !*** ./src/app/pages/ubicacion/interfaces/Ubicacion.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ubicacion": () => (/* binding */ Ubicacion),
/* harmony export */   "Edificio": () => (/* binding */ Edificio),
/* harmony export */   "Nivel": () => (/* binding */ Nivel),
/* harmony export */   "EspacioFisico": () => (/* binding */ EspacioFisico)
/* harmony export */ });
class Ubicacion {
    constructor(id, edificio, espaciofisico, nivel) {
        this.id = id;
        this.edificio = edificio;
        this.espaciofisico = espaciofisico;
        this.nivel = nivel;
    }
}
class Edificio {
    constructor(id, edificio, niveles) {
        this.id = id;
        this.edificio = edificio;
        this.niveles = niveles;
    }
}
class Nivel {
    constructor(id, nivel) {
        this.id = id;
        this.nivel = nivel;
    }
}
class EspacioFisico {
    constructor(id, espacio) {
        this.id = id;
        this.espacio = espacio;
    }
}


/***/ }),

/***/ 31709:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/ubicacion/listar/listar-ubicacion/listar-ubicacion.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarUbicacionComponent": () => (/* binding */ ListarUbicacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _interfaces_Ubicacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/Ubicacion */ 90463);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_service_ubicacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service-ubicacion.service */ 65446);
/* harmony import */ var _service_service_edificio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/service-edificio.service */ 31327);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);













function ListarUbicacionComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_tr_31_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const data_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33); return ctx_r7.editarlo(data_r5, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_tr_31_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const data_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.eliminar(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.edificio.edificio);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.nivel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.espaciofisico);
} }
function ListarUbicacionComponent_ng_template_32_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", data_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r17.edificio, " ");
} }
function ListarUbicacionComponent_ng_template_32_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarUbicacionComponent_ng_template_32_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", data_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r18.nivel, " ");
} }
function ListarUbicacionComponent_ng_template_32_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarUbicacionComponent_ng_template_32_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarUbicacionComponent_ng_template_32_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tama\u00F1o m\u00EDnimo de espacio f\u00EDsico 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarUbicacionComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_ng_template_32_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const modal_r10 = restoredCtx.$implicit; return modal_r10.dismiss("Cross click"); })("click", function ListarUbicacionComponent_ng_template_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ListarUbicacionComponent_ng_template_32_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.accion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Edificio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ListarUbicacionComponent_ng_template_32_Template_select_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.filtrarNivel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Seleccione");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ListarUbicacionComponent_ng_template_32_option_19_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ListarUbicacionComponent_ng_template_32_span_21_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Nivel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Seleccione");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ListarUbicacionComponent_ng_template_32_option_30_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ListarUbicacionComponent_ng_template_32_span_32_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Espacio F\u00EDsico");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ListarUbicacionComponent_ng_template_32_span_40_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ListarUbicacionComponent_ng_template_32_span_41_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_ng_template_32_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.reset(); })("click", function ListarUbicacionComponent_ng_template_32_Template_button_click_43_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const modal_r10 = restoredCtx.$implicit; return modal_r10.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_4_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("edificio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.ubicacionSeleccionada != null ? ctx_r2.ubicacionSeleccionada.edificio.id : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.edificios);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.formulario.get("edificio")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("nivel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.ubicacionSeleccionada != null ? ctx_r2.ubicacionSeleccionada.nivel : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.niveles);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r2.formulario.get("nivel")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("espacio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.ubicacionSeleccionada != null ? ctx_r2.ubicacionSeleccionada.espaciofisico : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r2.formulario.get("espacio")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r2.formulario.get("espacio")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r2.formulario.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.butttonText);
} }
function ListarUbicacionComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_ng_template_34_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const modal_r26 = restoredCtx.$implicit; return modal_r26.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Bot\u00F3n Agregar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Despliega un modal que permite ingresar los datos solicitados como la selecci\u00F3n de un edificio, un nivel en espec\u00EDfico y un espacio f\u00EDsico para el registro de una nueva ubicaci\u00F3n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Bot\u00F3n Editar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Permite realizar cambios en edificio, nivel y espacio f\u00EDsico de la ubicaci\u00F3n seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Bot\u00F3n Eliminar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Permite eliminar la ubicaci\u00F3n seleccionada, si la ubicaci\u00F3n est\u00E1 utilizada en mantenimiento, actividad o equipo no se podr\u00E1 eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_ng_template_34_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const modal_r26 = restoredCtx.$implicit; return modal_r26.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ListarUbicacionComponent {
    constructor(ubicacionService, edificioService, modalService, fb) {
        this.ubicacionService = ubicacionService;
        this.edificioService = edificioService;
        this.modalService = modalService;
        this.fb = fb;
        this.ubicaciones = [];
        this.edificios = [];
        this.niveles = [];
        this.espacios = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.formulario = this.initFomulario();
        this.llenarEdificio();
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Ubicación' }, { label: 'Listado', active: true }];
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
        this.cargarDatos();
        this.llenarEdificio();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
        // this.dtTrigger.complete()
    }
    openModal(content, reset) {
        if (reset) {
            this.ubicacionSeleccionada = null;
            this.butttonText = "Guardar";
            this.formulario.reset();
            this.modalService.open(content);
        }
        else {
            this.llenarNivel(this.ubicacionSeleccionada.edificio.niveles);
            this.butttonText = "Editar";
            this.modalService.open(content);
        }
    }
    reset() {
        this.formulario.reset();
    }
    initFomulario() {
        return this.fb.group({
            edificio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            nivel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            espacio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4)]],
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formulario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    cargarDatos() {
        this.ubicacionService.ubicaciones().subscribe((resp) => {
            this.ubicaciones = resp;
            this.dtTrigger.next(null);
        });
    }
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            this.ubicaciones = [];
            dtInstance.destroy();
            this.cargarDatos();
        });
    }
    eliminar(ubicacion) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: '¿Está seguro de eliminar? ',
            text: `Esto no se puede revertir`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.ubicacionService.eliminar(ubicacion).subscribe(resp => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Eliminado', 'El registro ha sido eliminado', 'success');
                    this.reload();
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        icon: 'error',
                        title: 'Error',
                        text: err.error.msg
                    });
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Cambios no aplicados', '', 'info');
            }
        });
    }
    editarlo(seleccion, modal) {
        this.ubicacionSeleccionada = seleccion;
        this.openModal(modal, false);
    }
    accion() {
        if (this.ubicacionSeleccionada != null) {
            this.editar();
        }
        else {
            this.guardar();
        }
    }
    guardar() {
        const edificio = this.formulario.get('edificio').value;
        const nivel = this.formulario.get('nivel').value;
        const espacio = this.formulario.get('espacio').value;
        this.ubicacion = new _interfaces_Ubicacion__WEBPACK_IMPORTED_MODULE_0__.Ubicacion(null, new _interfaces_Ubicacion__WEBPACK_IMPORTED_MODULE_0__.Edificio(edificio, null, null), espacio, nivel);
        this.ubicacionService.guardar(this.ubicacion).subscribe((resp) => {
            if (resp.mensaje === "Error ubicacón existente") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Registro existente', '', 'warning');
            }
            else {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Éxito', 'Almacenado correctamente', 'success');
                    this.reload();
                    this.modalService.dismissAll();
                    this.formulario.reset();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ocurrio un problema', '', 'warning');
                }
            }
        });
        return Object.values(this.formulario.controls)
            .forEach(control => control.markAsTouched());
    }
    editar() {
        this.ubicacionSeleccionada.edificio.id = this.formulario.controls['edificio'].value;
        this.ubicacionSeleccionada.espaciofisico = this.formulario.controls['espacio'].value;
        this.ubicacionSeleccionada.nivel = this.formulario.controls['nivel'].value;
        this.ubicacionService.editar(this.ubicacionSeleccionada).subscribe((resp) => {
            if (resp.mensaje === "Error ubicacón existente") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Registro existente', '', 'warning');
            }
            else {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Éxito', 'Modificado correctamente', 'success');
                    this.reload();
                    this.modalService.dismissAll();
                    this.formulario.reset();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ocurrio un problema', '', 'warning');
                }
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Error',
                text: `Algo fallo`,
                icon: 'error',
            });
        });
    }
    filtrarNivel() {
        const edificio = this.formulario.controls['edificio'].value;
        this.edificioService.edificio(edificio).subscribe((resp) => {
            let nivel = 0;
            nivel = resp.niveles;
            this.llenarNivel(nivel);
        });
    }
    llenarNivel(nivel) {
        this.niveles = [];
        for (let i = 1; i <= nivel; i++) {
            this.niveles.push(new _interfaces_Ubicacion__WEBPACK_IMPORTED_MODULE_0__.Nivel(i, 'Nivel ' + i));
        }
    }
    llenarEdificio() {
        this.edificioService.edificios().subscribe((resp) => {
            this.edificios = resp;
            this.edificios.sort((a, b) => a.edificio.localeCompare(b.edificio));
        });
    }
    openModalA(content) {
        this.modalService.open(content, { keyboard: false, scrollable: true, size: 'lg' });
    }
}
ListarUbicacionComponent.ɵfac = function ListarUbicacionComponent_Factory(t) { return new (t || ListarUbicacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_service_ubicacion_service__WEBPACK_IMPORTED_MODULE_3__.ServiceUbicacionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_service_edificio_service__WEBPACK_IMPORTED_MODULE_4__.ServiceEdificioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
ListarUbicacionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListarUbicacionComponent, selectors: [["app-listar-ubicacion"]], viewQuery: function ListarUbicacionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 36, vars: 4, consts: [[1, "container-fluid"], ["title", "Ubicaci\u00F3n", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-sm-12", "text-end"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "row", "mb-2"], [1, "col-sm-12"], [1, "btn", "btn-info", "btn-rounded", "bg-gradient", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], ["datatable", "", 1, "table", "table-nowrap", 3, "dtOptions", "dtTrigger"], [1, "bg-light", "bg-gradient"], [1, ""], [4, "ngFor", "ngForOf"], ["role", "document"], ["modal", ""], ["ayuda", ""], ["scope", "row"], ["ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "click"], ["id", "modalUbicacion", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "text-danger", "mb-4"], [1, "col-md-12"], [1, "mb-3"], [1, "control-label"], [1, "text-danger"], ["formControlName", "edificio", 1, "form-control", "form-select", 3, "ngModel", "change"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "nivel", 1, "form-control", "form-select", 3, "ngModel"], ["type", "text", "name", "espacio", "autocomplete", "off", "formControlName", "espacio", 1, "form-control", 3, "ngModel"], [1, "modal-footer", "mt-5"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-info", 3, "disabled"], [3, "ngValue"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", "text-justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], [1, "modal-footer"]], template: function ListarUbicacionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35); return ctx.openModalA(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarUbicacionComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33); return ctx.openModal(_r1, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "thead", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Edificio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Nivel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Espacio F\u00EDsico");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ListarUbicacionComponent_tr_31_Template, 12, 4, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ListarUbicacionComponent_ng_template_32_Template, 47, 18, "ng-template", 18, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ListarUbicacionComponent_ng_template_34_Template, 29, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ubicaciones);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rhci11YmljYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksV0FBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7QUFFSjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQUVKO0FBQ0UsZ0ZBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0REFBQTtBQUVKO0FBQ0U7RUFDRSxrQkFBQTtFQUNJLDBEQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBRVI7QUFFRTtFQUNDLHlCQUFBO0VBQ0MsWUFBQTtBQUNKO0FBR0U7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNJLDBEQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0ksVUFBQTtBQUFaO0FBR0U7RUFDRSx5QkFBQTtBQUFKIiwiZmlsZSI6Imxpc3Rhci11YmljYWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYnRuLWljb24ucm91bmRlZC1jaXJjbGUge1xuICB3aWR0aDogMjBweDtcbiAgLyogQ2FtYmlhIGVsIHRhbWHDsW8gc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICAvKiBFbGltaW5hIGVsIHJlbGxlbm8gcGFyYSBxdWUgc2VhIGNvbXBsZXRhbWVudGUgcmVkb25kbyAqL1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgLyogQWxpbmVhIGVsIGNvbnRlbmlkbyB2ZXJ0aWNhbG1lbnRlICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLyogQWp1c3RhIGVsIHRhbWHDsW8gZGVsIGljb25vIHNpIGVzIG5lY2VzYXJpbyAqL1xufVxuXG4uYnRuLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIEVzdGFibGVjZSBlbCBmb25kbyBjb21vIHRyYW5zcGFyZW50ZSAqL1xuICBib3JkZXI6IG5vbmU7XG4gIC8qIEVsaW1pbmEgZWwgYm9yZGUgc2kgZXMgbmVjZXNhcmlvICovXG4gIGNvbG9yOiAjMDA3YmZmO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG59XG5cbi8qIFBlcnNvbmFsaXphIGVsIGNvbG9yIGRlIHRleHRvIGN1YW5kbyBzZSBwYXNhIGVsIGN1cnNvciBwb3IgZW5jaW1hIGRlbCBib3TDs24gKi9cbi5idG4tdHJhbnNwYXJlbnQ6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhbCBwYXNhciBlbCBjdXJzb3IgcG9yIGVuY2ltYSAqL1xufVxuXG4uY2xvc2VBIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBFc3RhYmxlY2VyIHBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHBvc2ljaW9uYXIgZWwgYm90w7NuICovXG4gIHRvcDogMjVweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIHN1cGVyaW9yICovXG4gIGxlZnQ6IDc1MHB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgaXpxdWllcmRhICovXG59XG5cbi5tb2RhbC1oZWFkZXJBIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlMDAwMDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubW9kYWwtdGl0bGVBIHtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIENvbG9yIGRlbCB0ZXh0byBlbiBlbCBlbmNhYmV6YWRvICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogRXN0YWJsZWNlciBwb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBwb3NpY2lvbmFyIGVsIGJvdMOzbiAqL1xuICB0b3A6IDIwcHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBwYXJ0ZSBzdXBlcmlvciAqL1xuICBsZWZ0OiAxMnB4O1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMDAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 31327:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ubicacion/service/service-edificio.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceEdificioService": () => (/* binding */ ServiceEdificioService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class ServiceEdificioService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlG}/edificio`;
    }
    edificios() {
        return this.http.get(`${this.url}`);
    }
    edificio(id) {
        return this.http.get(`${this.url}/${id}`);
    }
}
ServiceEdificioService.ɵfac = function ServiceEdificioService_Factory(t) { return new (t || ServiceEdificioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ServiceEdificioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceEdificioService, factory: ServiceEdificioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65446:
/*!**********************************************************************!*\
  !*** ./src/app/pages/ubicacion/service/service-ubicacion.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceUbicacionService": () => (/* binding */ ServiceUbicacionService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class ServiceUbicacionService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlG}/ubicacion`;
    }
    ubicaciones(page = 0, size = 3) {
        return this.http.get(`${this.url}` + '?' + `page=${page}&size=${size}`);
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
ServiceUbicacionService.ɵfac = function ServiceUbicacionService_Factory(t) { return new (t || ServiceUbicacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ServiceUbicacionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceUbicacionService, factory: ServiceUbicacionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66357:
/*!*************************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionRoutingModule": () => (/* binding */ UbicacionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _listar_listar_ubicacion_listar_ubicacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar/listar-ubicacion/listar-ubicacion.component */ 31709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'lista', component: _listar_listar_ubicacion_listar_ubicacion_component__WEBPACK_IMPORTED_MODULE_0__.ListarUbicacionComponent },
];
class UbicacionRoutingModule {
}
UbicacionRoutingModule.ɵfac = function UbicacionRoutingModule_Factory(t) { return new (t || UbicacionRoutingModule)(); };
UbicacionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UbicacionRoutingModule });
UbicacionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UbicacionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 35126:
/*!*****************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionModule": () => (/* binding */ UbicacionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion-routing.module */ 66357);
/* harmony import */ var _listar_listar_ubicacion_listar_ubicacion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar/listar-ubicacion/listar-ubicacion.component */ 31709);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 91955);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ 15367);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/widget/widget.module */ 57337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);















class UbicacionModule {
}
UbicacionModule.ɵfac = function UbicacionModule_Factory(t) { return new (t || UbicacionModule)(); };
UbicacionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UbicacionModule });
UbicacionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.UbicacionRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__.WidgetModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginationModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UbicacionModule, { declarations: [_listar_listar_ubicacion_listar_ubicacion_component__WEBPACK_IMPORTED_MODULE_1__.ListarUbicacionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.UbicacionRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__.WidgetModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginationModule, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ubicacion_ubicacion_module_ts.js.map