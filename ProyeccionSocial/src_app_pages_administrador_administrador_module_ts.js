"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["src_app_pages_administrador_administrador_module_ts"],{

/***/ 23467:
/*!*********************************************************************!*\
  !*** ./src/app/pages/administrador/administrador-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministradorRoutingModule": () => (/* binding */ AdministradorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_lista_admin_lista_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/lista-admin/lista-admin.component */ 67365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'lista', component: _pages_lista_admin_lista_admin_component__WEBPACK_IMPORTED_MODULE_0__.ListaAdminComponent },
];
class AdministradorRoutingModule {
}
AdministradorRoutingModule.ɵfac = function AdministradorRoutingModule_Factory(t) { return new (t || AdministradorRoutingModule)(); };
AdministradorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdministradorRoutingModule });
AdministradorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdministradorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 46238:
/*!*************************************************************!*\
  !*** ./src/app/pages/administrador/administrador.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministradorModule": () => (/* binding */ AdministradorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _administrador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administrador-routing.module */ 23467);
/* harmony import */ var _pages_lista_admin_lista_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/lista-admin/lista-admin.component */ 67365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages-routing.module */ 64205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var src_app_shared_pipes_telefono_formato_dos_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/telefono-formato-dos.pipe */ 77954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);














class AdministradorModule {
}
AdministradorModule.ɵfac = function AdministradorModule_Factory(t) { return new (t || AdministradorModule)(); };
AdministradorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AdministradorModule });
AdministradorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _administrador_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministradorRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__.PagesRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAlertModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdministradorModule, { declarations: [_pages_lista_admin_lista_admin_component__WEBPACK_IMPORTED_MODULE_1__.ListaAdminComponent,
        src_app_shared_pipes_telefono_formato_dos_pipe__WEBPACK_IMPORTED_MODULE_5__.TelefonoFormatoDosPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _administrador_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministradorRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__.PagesRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAlertModule] }); })();


/***/ }),

/***/ 67365:
/*!********************************************************************************!*\
  !*** ./src/app/pages/administrador/pages/lista-admin/lista-admin.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaAdminComponent": () => (/* binding */ ListaAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constantes/constantesproyecto */ 58498);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_administrador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/administrador.service */ 34461);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var src_app_shared_pipes_telefono_formato_dos_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/pipes/telefono-formato-dos.pipe */ 77954);

















function ListaAdminComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "telefonoFormatoDos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_tr_32_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const data_r9 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](36); return ctx_r11.openModalEditar(_r3, data_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_tr_32_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const data_r9 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.eliminandoconAlert(data_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", data_r9.nombres, " ", data_r9.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 6, data_r9.telefono));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r9.nombrecargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", data_r9.usuario === true);
} }
function ListaAdminComponent_ng_template_33_ngb_alert_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngb-alert", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r15.error);
} }
function ListaAdminComponent_ng_template_33_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Tama\u00F1o m\u00EDnimo del nombre ", (tmp_0_0 = ctx_r17.formAdmin.get("nombres")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"] == null ? null : tmp_0_0.errors["minlength"].requiredLength, "");
} }
function ListaAdminComponent_ng_template_33_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No valido solo permite texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Tama\u00F1o m\u00EDnimo del apellido ", (tmp_0_0 = ctx_r20.formAdmin.get("apellidos")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"] == null ? null : tmp_0_0.errors["minlength"].requiredLength, "");
} }
function ListaAdminComponent_ng_template_33_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No valido solo permite texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No valido formato incorrecto para n\u00FAmero de tel\u00E9fono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_ng_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", c_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r28.nombrecargo);
} }
function ListaAdminComponent_ng_template_33_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione un cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_33_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const modal_r14 = restoredCtx.$implicit; return modal_r14.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListaAdminComponent_ng_template_33_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r31.guardarAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListaAdminComponent_ng_template_33_ngb_alert_8_Template, 2, 2, "ngb-alert", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListaAdminComponent_ng_template_33_span_20_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ListaAdminComponent_ng_template_33_span_21_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ListaAdminComponent_ng_template_33_span_22_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ListaAdminComponent_ng_template_33_span_31_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ListaAdminComponent_ng_template_33_span_32_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ListaAdminComponent_ng_template_33_span_33_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ListaAdminComponent_ng_template_33_span_42_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, ListaAdminComponent_ng_template_33_span_43_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "ng-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, ListaAdminComponent_ng_template_33_ng_option_51_Template, 2, 2, "ng-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, ListaAdminComponent_ng_template_33_span_53_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, ListaAdminComponent_ng_template_33_span_54_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_33_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](38); return ctx_r32.openModalCargo(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_33_Template_button_click_61_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const modal_r14 = restoredCtx.$implicit; return modal_r14.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, ListaAdminComponent_ng_template_33_div_65_Template, 4, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_15_0;
    let tmp_16_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.formAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("nombres"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.formAdmin.get("nombres")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.formAdmin.get("nombres")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r2.formAdmin.get("nombres")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("apellidos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r2.formAdmin.get("apellidos")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r2.formAdmin.get("apellidos")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r2.formAdmin.get("apellidos")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("telefono"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r2.formAdmin.get("telefono")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r2.formAdmin.get("telefono")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("cargo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.cargos);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r2.formAdmin.get("cargo")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r2.formAdmin.get("cargo")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r2.formAdmin.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showLoading);
} }
function ListaAdminComponent_ng_template_35_ngb_alert_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngb-alert", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r35.error);
} }
function ListaAdminComponent_ng_template_35_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Tama\u00F1o minimo del nombre ", (tmp_0_0 = ctx_r37.formAdmin.get("nombres")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"] == null ? null : tmp_0_0.errors["minlength"].requiredLength, "");
} }
function ListaAdminComponent_ng_template_35_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No valido solo permite texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Tama\u00F1o minimo del apellido ", (tmp_0_0 = ctx_r40.formAdmin.get("apellido")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"] == null ? null : tmp_0_0.errors["minlength"].requiredLength, "");
} }
function ListaAdminComponent_ng_template_35_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No valido solo permite texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No valido formato incorrecto para numero de telefono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_ng_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", c_r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r48.nombrecargo);
} }
function ListaAdminComponent_ng_template_35_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione un cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_35_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); const modal_r34 = restoredCtx.$implicit; return modal_r34.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListaAdminComponent_ng_template_35_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r51.guardarAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListaAdminComponent_ng_template_35_ngb_alert_8_Template, 2, 2, "ngb-alert", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ListaAdminComponent_ng_template_35_span_22_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ListaAdminComponent_ng_template_35_span_23_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ListaAdminComponent_ng_template_35_span_24_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ListaAdminComponent_ng_template_35_span_33_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ListaAdminComponent_ng_template_35_span_34_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ListaAdminComponent_ng_template_35_span_35_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ListaAdminComponent_ng_template_35_span_44_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, ListaAdminComponent_ng_template_35_span_45_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "ng-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, ListaAdminComponent_ng_template_35_ng_option_53_Template, 2, 2, "ng-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ListaAdminComponent_ng_template_35_span_55_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ListaAdminComponent_ng_template_35_span_56_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_35_Template_button_click_58_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); const modal_r34 = restoredCtx.$implicit; return modal_r34.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, ListaAdminComponent_ng_template_35_div_62_Template, 4, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_15_0;
    let tmp_16_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r4.formAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("nombres"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.formAdmin.get("nombres")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r4.formAdmin.get("nombres")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r4.formAdmin.get("nombres")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("apellidos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r4.formAdmin.get("apellidos")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r4.formAdmin.get("apellidos")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r4.formAdmin.get("apellidos")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("telefono"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r4.formAdmin.get("telefono")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r4.formAdmin.get("telefono")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("cargo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.cargos);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r4.formAdmin.get("cargo")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r4.formAdmin.get("cargo")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r4.formAdmin.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.showLoading);
} }
function ListaAdminComponent_ng_template_37_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un nombre cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_37_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Tama\u00F1o minimo del cargo ", (tmp_0_0 = ctx_r55.formAdminCargo.get("nombrecargo")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"] == null ? null : tmp_0_0.errors["minlength"].requiredLength, "");
} }
function ListaAdminComponent_ng_template_37_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No valido solo permite texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_37_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaAdminComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_37_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const modal_r53 = restoredCtx.$implicit; return modal_r53.dismiss("Cross click"); })("click", function ListaAdminComponent_ng_template_37_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r60.formAdminCargo.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListaAdminComponent_ng_template_37_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r61.guardarCargosAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Nombre cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ListaAdminComponent_ng_template_37_span_18_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ListaAdminComponent_ng_template_37_span_19_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListaAdminComponent_ng_template_37_span_20_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_37_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const modal_r53 = restoredCtx.$implicit; return modal_r53.dismiss("Cross click"); })("click", function ListaAdminComponent_ng_template_37_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r63.formAdminCargo.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListaAdminComponent_ng_template_37_div_26_Template, 4, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r6.formAdminCargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r6.esCampoValidoAdminCargo("nombrecargo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r6.formAdminCargo.get("nombrecargo")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r6.formAdminCargo.get("nombrecargo")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r6.formAdminCargo.get("nombrecargo")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r6.formAdminCargo.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.showLoading);
} }
function ListaAdminComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_39_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66); const modal_r64 = restoredCtx.$implicit; return modal_r64.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Bot\u00F3n Agregar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Permite ingresar los datos solicitados del personal administrador.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Bot\u00F3n Editar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Permite realizar cambios en la informaci\u00F3n previamente ingresada del administrador seleccionado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Bot\u00F3n Eliminar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Permite eliminar el administrador seleccionado, si este ya tienen establecido un usuario no puede realizarse la accion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_ng_template_39_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66); const modal_r64 = restoredCtx.$implicit; return modal_r64.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class ListaAdminComponent {
    constructor(adminService, cargoService, modalService, fb, fbdos, router) {
        this.adminService = adminService;
        this.cargoService = cargoService;
        this.modalService = modalService;
        this.fb = fb;
        this.fbdos = fbdos;
        this.router = router;
        this.admin = [];
        this.cargos = [];
        this.error = '';
        this.showLoading = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.formAdmin = this.iniciarFormulario();
        this.formAdminCargo = this.iniciarFormularioCargoAdmin();
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Administrador' }, { label: 'Registros', active: true }];
        this.dtOptions = {
            columnDefs: [
                { orderable: false, targets: [4] },
                { searchable: false, targets: [0, 4] },
                { responsivePriority: 1, targets: -1 },
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
        this.cargarDatosAdmin();
        this.llenarComboCargos();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    /**
      * Open modal
      * @param content modal content
      */
    openModal(content) {
        this.error = '';
        this.modalService.open(content, { backdrop: 'static', keyboard: false });
        this.formAdmin = this.iniciarFormulario(); //limpia los campos al editar
        this.adminE = null; //limpia el arreglo de los campos al editar
    }
    openModalCargo(content) {
        this.modalService.open(content, { backdrop: 'static', keyboard: false });
    }
    openModalA(content) {
        this.error = '';
        this.modalService.open(content, { keyboard: false, scrollable: true, size: 'lg' });
    }
    iniciarFormulario() {
        return this.fb.group({
            id: ['',],
            nombres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.isCaracter)]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.isCaracter)]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.telefonoRegex)]],
            cargo: ['Seleccione', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.isNumber)]],
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formAdmin.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    llenarComboCargos() {
        this.cargoService.mostrarCargos().subscribe((resp) => {
            this.cargos = resp;
        });
    }
    openModalEditar(content, admine) {
        this.error = '';
        this.adminE = admine;
        this.formAdmin.patchValue(admine);
        // this.formAdmin.get('cargo').setValue(admine.cargo.id)
        this.formAdmin.get('cargo').setValue(admine.idCargo);
        this.modalService.open(content, { backdrop: 'static', keyboard: false });
    }
    cargarDatosAdmin(page = 0) {
        // this.adminService.mostrarAdmin().subscribe((resp: any) => {
        //   this.admin = resp;
        //   this.dtTrigger.next(null);
        // });
        this.adminService.mostrarAdminUser().subscribe((res) => {
            this.admin = res;
            this.dtTrigger.next(null);
        });
    }
    guardarAdmin() {
        if (this.formAdmin.valid) {
            if (this.adminE != null) {
                this.editandoAdminForm();
            }
            else {
                this.registrandoAdminForm();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                confirmButtonColor: "#a90000",
                position: 'center',
                title: 'Faltan datos en el formulario',
                text: 'completar campos requeridos',
                icon: 'warning',
            });
        }
    }
    registrandoAdminForm() {
        this.showLoading = true;
        const admin = this.formAdmin.value;
        if (!admin.telefono.match(_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.telefonoRegex)) {
            return;
        }
        else if (this.verificar(admin.telefono)) {
            this.showLoading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                confirmButtonColor: "#a90000",
                title: "Advertencia",
                text: `Teléfono ya registrado`,
                icon: "warning",
            });
        }
        else {
            this.adminService.nuevoAdmin(admin).subscribe((resp) => {
                if (resp) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: `Almacenado correctamente`,
                        icon: 'success',
                    });
                    this.formAdmin.reset();
                    this.formAdmin.get('cargo').setValue('Seleccione');
                    this.reload();
                    this.modalService.dismissAll();
                }
            }, (err) => {
                this.showLoading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    confirmButtonColor: "#a90000",
                    title: 'Advertencia',
                    text: `Ocurrio un problema`,
                    icon: 'warning',
                });
            });
        }
    }
    editandoAdminForm() {
        this.showLoading = true;
        const admine = this.formAdmin.value;
        if (!admine.telefono.match(_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.telefonoRegex)) {
            return;
        }
        else {
            this.adminService.editarAdmin(admine).subscribe((resp) => {
                if (resp) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: `Modificado correctamente`,
                        icon: 'success',
                    });
                    this.formAdmin.reset();
                    this.formAdmin.get('cargo').setValue('Seleccione');
                    this.reload();
                    this.modalService.dismissAll();
                }
            }, (err) => {
                if (err.status === 422) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        confirmButtonColor: "#a90000",
                        title: "Advertencia",
                        text: `Teléfono ya registrado`,
                        icon: "warning",
                    });
                }
            });
        }
    }
    eliminandoconAlert(x) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: '¿Esta seguro de eliminar? ',
            text: `Esto no se puede revertir`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: "#a90000",
            cancelButtonColor: '#343a40',
            confirmButtonText: 'Si, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.adminService.deleteAdmin(x).subscribe((res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Eliminado',
                        text: `El registro ha sido eliminado`,
                        icon: 'success',
                    });
                    this.reload();
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Advertencia',
                        text: 'El registro no puede ser eliminado',
                        icon: 'warning',
                    });
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    confirmButtonColor: "#a90000",
                    title: "Información",
                    text: `Cambios no aplicados`,
                    icon: "info",
                });
            }
        });
    }
    verificar(tel) {
        return this.admin.some(usu => usu.telefono === tel);
    }
    guardarCargosAdmin() {
        if (this.formAdminCargo.valid) {
            this.registrandoCargo();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: 'center',
                title: 'Faltan datos en el formulario',
                text: 'completar campos requeridos',
                icon: 'warning',
            });
        }
    }
    registrandoCargo() {
        this.showLoading = true;
        const cargoAdmin = this.formAdminCargo.value;
        if (this.existeCargo(cargoAdmin.nombrecargo.toLowerCase())) {
            this.showLoading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                confirmButtonColor: "#a90000",
                title: 'Advertencia',
                text: `Ya existe el cargo`,
                icon: 'warning',
            });
            return;
        }
        else {
            this.cargoService.nuevoCargoAdmin(cargoAdmin).subscribe((resp) => {
                if (resp) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: `Almacenado correctamente`,
                        icon: 'success',
                    });
                    this.formAdminCargo.reset();
                    this.llenarComboCargos();
                    this.reload();
                }
            }, (err) => {
                this.showLoading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    confirmButtonColor: "#a90000",
                    title: 'Advertencia',
                    text: `Ocurrio un problema`,
                    icon: 'warning',
                });
            });
        }
    }
    iniciarFormularioCargoAdmin() {
        return this.fbdos.group({
            nombrecargo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.isCaracter)]],
        });
    }
    esCampoValidoAdminCargo(campo) {
        const validarCampo = this.formAdminCargo.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    existeCargo(nombre) {
        const normalizedNombre = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return this.cargos.some(cargo => {
            const normalizedCargo = cargo.nombrecargo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return normalizedCargo.toLocaleLowerCase() === normalizedNombre.toLocaleLowerCase();
        });
    }
    mostrarRecargando() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
    /**Para recargar */
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            this.admin = [];
            dtInstance.destroy();
            this.cargarDatosAdmin();
        });
    }
}
ListaAdminComponent.ɵfac = function ListaAdminComponent_Factory(t) { return new (t || ListaAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_administrador_service__WEBPACK_IMPORTED_MODULE_3__.AdministradorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_administrador_service__WEBPACK_IMPORTED_MODULE_3__.AdministradorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
ListaAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListaAdminComponent, selectors: [["app-lista-admin"]], viewQuery: function ListaAdminComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 41, vars: 4, consts: [[1, "container-fluid"], ["title", "Administrador", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-12", "text-end"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "col-sm-12"], [1, "btn", "btn-info", "btn-rounded", 3, "click"], [1, "text-sm-end"], [1, "table-responsive"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [4, "ngFor", "ngForOf"], ["role", "document"], ["content", ""], ["contentEditar", ""], ["cargo", ""], ["ayuda", ""], ["type", "button", "ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["type", "button", "ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "disabled", "click"], ["id", "modalAdmin", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "text-danger", "mb-4"], [1, "col-md-12"], [1, "mb-3"], [1, "text-danger"], ["type", "text", "autocomplete", "off", "placeholder", "Ej: Carlos Miguel", "formControlName", "nombres", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "autocomplete", "off", "placeholder", "Ej: Fernandez Guzman", "formControlName", "apellidos", 1, "form-control"], ["type", "text", "autocomplete", "off", "placeholder", "####-####", "mask", "0000-0000", "formControlName", "telefono", 1, "form-control"], [1, "col-md-10"], ["formControlName", "cargo", "placeholder", "Seleccione"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "text-white"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-info", 3, "disabled"], ["class", "spinner-overlay", 4, "ngIf"], ["type", "danger", 3, "dismissible"], [3, "value"], [1, "spinner-overlay"], ["role", "status", 1, "spinner-border", "text-primary", "m-1"], [1, "sr-only"], ["type", "hidden", "formControlName", "id", 1, "form-control"], ["formControlName", "cargo", "placeholder", "Seleccione", "clearAllText", "Clear"], ["id", "modalCarrera", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], ["type", "text", "autocomplete", "off", "formControlName", "nombrecargo", 1, "form-control"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", "text-justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"]], template: function ListaAdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](40); return ctx.openModalA(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaAdminComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](34); return ctx.openModal(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "+ Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "N.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ListaAdminComponent_tr_32_Template, 13, 8, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ListaAdminComponent_ng_template_33_Template, 66, 23, "ng-template", 19, 20, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ListaAdminComponent_ng_template_35_Template, 63, 23, "ng-template", 19, 21, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ListaAdminComponent_ng_template_37_Template, 27, 8, "ng-template", 19, 22, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, ListaAdminComponent_ng_template_39_Template, 29, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.admin);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ngx_mask__WEBPACK_IMPORTED_MODULE_13__.MaskDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbAlert, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionComponent], pipes: [src_app_shared_pipes_telefono_formato_dos_pipe__WEBPACK_IMPORTED_MODULE_6__.TelefonoFormatoDosPipe], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n.spinner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBRUY7QUFDQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFFRjtBQUNBLGdGQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNERBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUVOO0FBRUE7RUFDQyx5QkFBQTtFQUNDLFlBQUE7QUFDRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNJLFVBQUE7QUFBVjtBQUdBO0VBQ0UseUJBQUE7QUFBRjtBQUVBO0VBQ0Usa0JBQUE7RUFBb0IsaURBQUE7RUFDcEIsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQTRDLGtEQUFBO0VBQzVDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFlLDJFQUFBO0FBSWpCIiwiZmlsZSI6Imxpc3RhLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJ0bi1pY29uLnJvdW5kZWQtY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIC8qIENhbWJpYSBlbCB0YW1hw7FvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgLyogRWxpbWluYSBlbCByZWxsZW5vIHBhcmEgcXVlIHNlYSBjb21wbGV0YW1lbnRlIHJlZG9uZG8gKi9cbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC8qIEFsaW5lYSBlbCBjb250ZW5pZG8gdmVydGljYWxtZW50ZSAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIGRlbCBpY29ubyBzaSBlcyBuZWNlc2FyaW8gKi9cbn1cblxuLmJ0bi10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBFc3RhYmxlY2UgZWwgZm9uZG8gY29tbyB0cmFuc3BhcmVudGUgKi9cbiAgYm9yZGVyOiBub25lO1xuICAvKiBFbGltaW5hIGVsIGJvcmRlIHNpIGVzIG5lY2VzYXJpbyAqL1xuICBjb2xvcjogIzAwN2JmZjtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xufVxuXG4vKiBQZXJzb25hbGl6YSBlbCBjb2xvciBkZSB0ZXh0byBjdWFuZG8gc2UgcGFzYSBlbCBjdXJzb3IgcG9yIGVuY2ltYSBkZWwgYm90w7NuICovXG4uYnRuLXRyYW5zcGFyZW50OmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gYWwgcGFzYXIgZWwgY3Vyc29yIHBvciBlbmNpbWEgKi9cbn1cblxuLmNsb3NlQSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogRXN0YWJsZWNlciBwb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBwb3NpY2lvbmFyIGVsIGJvdMOzbiAqL1xuICB0b3A6IDI1cHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBwYXJ0ZSBzdXBlcmlvciAqL1xuICBsZWZ0OiA3NTBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIGl6cXVpZXJkYSAqL1xufVxuXG4ubW9kYWwtaGVhZGVyQSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm1vZGFsLXRpdGxlQSB7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gZW4gZWwgZW5jYWJlemFkbyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyMHB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogMTJweDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlMDAwMDtcbn1cblxuLnNwaW5uZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogUG9zaWNpw7NuIGFic29sdXRhIGNvbiByZXNwZWN0byBhbCBjb250ZW5lZG9yICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAvKiBGb25kbyBzZW1pdHJhbnNwYXJlbnRlIHBhcmEgbGEgcnVlZGEgZGUgY2FyZ2EgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC8qIEFzZWd1cmEgcXVlIGxhIHJ1ZWRhIGRlIGNhcmdhIGVzdMOpIGVuIGxhIHBhcnRlIHN1cGVyaW9yIGRlbCBmb3JtdWxhcmlvICovXG59Il19 */"] });


/***/ }),

/***/ 34461:
/*!**********************************************************************!*\
  !*** ./src/app/pages/administrador/service/administrador.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministradorService": () => (/* binding */ AdministradorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);






class AdministradorService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlG;
    }
    mostrarCargos() {
        return this.http.get(`${this.url}/cargo/listaCargos`);
    }
    nuevoCargoAdmin(cargo) {
        return this.http.post(`${this.url}/cargo/guardar`, cargo);
    }
    mostrarAdminUser() {
        return this.http.get(`${this.url}/administrador/listaAdminResp`);
    }
    mostrarAdmin() {
        return this.http.get(`${this.url}/administrador/listaAdmin`);
    }
    nuevoAdmin(admin) {
        return this.http.post(`${this.url}/administrador/guardarAdmin`, admin);
    }
    deleteAdmin(admin) {
        return this.http.delete(`${this.url}/administrador/${admin.id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(e => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('error', 'Algo ocurrio mal, intente nuevamente');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(e);
        }));
    }
    editarAdmin(admin) {
        return this.http.put(`${this.url}/administrador/editarAdmin`, admin);
    }
    buscar(filtro, page = 0, size) {
        return this.http.get(`${this.url}/administrador/buscar/${filtro}` + '?' + `page=${page}&size=${size}`);
    }
    UsuariosListaAdmin() {
        return this.http.get(`${this.url}/usuario`);
    }
}
AdministradorService.ɵfac = function AdministradorService_Factory(t) { return new (t || AdministradorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AdministradorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AdministradorService, factory: AdministradorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77954:
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/telefono-formato-dos.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonoFormatoDosPipe": () => (/* binding */ TelefonoFormatoDosPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class TelefonoFormatoDosPipe {
    transform(value) {
        // Verifica que el valor sea una cadena válida y tenga al menos 8 dígitos
        if (typeof value !== 'string' || value.length < 8) {
            return value;
        }
        // Formatea el número de teléfono en "7879-8787"
        return `${value.substr(0, 4)}-${value.substr(4)}`;
    }
}
TelefonoFormatoDosPipe.ɵfac = function TelefonoFormatoDosPipe_Factory(t) { return new (t || TelefonoFormatoDosPipe)(); };
TelefonoFormatoDosPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "telefonoFormatoDos", type: TelefonoFormatoDosPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_administrador_administrador_module_ts.js.map