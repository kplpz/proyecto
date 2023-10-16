"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["src_app_pages_cargo_cargo_module_ts"],{

/***/ 33960:
/*!*****************************************************!*\
  !*** ./src/app/pages/cargo/cargo-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargoRoutingModule": () => (/* binding */ CargoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_lista_cargos_lista_cargos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/lista-cargos/lista-cargos.component */ 72053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'lista', component: _pages_lista_cargos_lista_cargos_component__WEBPACK_IMPORTED_MODULE_0__.ListaCargosComponent }
];
class CargoRoutingModule {
}
CargoRoutingModule.ɵfac = function CargoRoutingModule_Factory(t) { return new (t || CargoRoutingModule)(); };
CargoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CargoRoutingModule });
CargoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CargoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 84665:
/*!*********************************************!*\
  !*** ./src/app/pages/cargo/cargo.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargoModule": () => (/* binding */ CargoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cargo-routing.module */ 33960);
/* harmony import */ var _pages_lista_cargos_lista_cargos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/lista-cargos/lista-cargos.component */ 72053);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages-routing.module */ 64205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);







//import { PaginationModule } from 'ngx-bootstrap/pagination';



class CargoModule {
}
CargoModule.ɵfac = function CargoModule_Factory(t) { return new (t || CargoModule)(); };
CargoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CargoModule });
CargoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _cargo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CargoRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__.PagesRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            //PaginationModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CargoModule, { declarations: [_pages_lista_cargos_lista_cargos_component__WEBPACK_IMPORTED_MODULE_1__.ListaCargosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _cargo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CargoRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__.PagesRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        //PaginationModule.forRoot(),
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule] }); })();


/***/ }),

/***/ 72053:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cargo/pages/lista-cargos/lista-cargos.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaCargosComponent": () => (/* binding */ ListaCargosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constantes/constantesproyecto */ 58498);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_cargos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/cargos.service */ 23458);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);













function ListaCargosComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ListaCargosComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Tama\u00F1o minimo del nombre ", (tmp_0_0 = ctx_r1.formCargo.get("nombrecargo")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"] == null ? null : tmp_0_0.errors["minlength"].requiredLength, "");
} }
function ListaCargosComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No valido solo permite texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ListaCargosComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaCargosComponent_tr_43_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const data_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.setDatos(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaCargosComponent_tr_43_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const data_r6 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.eliminandoconAlert(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6.nombrecargo);
} }
function ListaCargosComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaCargosComponent_ng_template_44_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Bot\u00F3n Guardar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Permite guardar el cargo ingresado, este se habilita cuando el nombre de cargo se est\u00E1 escribiendo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Bot\u00F3n Editar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Permite realizar cambios en la informaci\u00F3n previamente ingresada del cargo seleccionado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Bot\u00F3n Eliminar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Permite eliminar el cargo seleccionado, si este ya est\u00E1 siendo utilizado no se puede realizarse la acci\u00F3n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaCargosComponent_ng_template_44_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const modal_r11 = restoredCtx.$implicit; return modal_r11.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ListaCargosComponent {
    constructor(cargoService, fb, modalService, router) {
        this.cargoService = cargoService;
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.cargos = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.formCargo = this.iniciarFormulario();
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: "Cargo" },
            { label: "Registrar", active: true },
        ];
        this.dtOptions = {
            columnDefs: [
                // { className: "", targets: [0, 1, 2] },
                { orderable: false, targets: [0, 2] },
                { searchable: false, targets: [2] },
                { responsivePriority: 1, targets: -1 },
            ],
            lengthMenu: [5, 10, 20, 50],
            destroy: true,
            language: {
                url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json",
                lengthMenu: "Mostrar _MENU_ registros",
                zeroRecords: "Ningún dato encontrado",
            },
            pagingType: "full_numbers",
            responsive: true,
        };
        this.getPageCargos();
    }
    ngOnDestroy() {
        //para destruir la peticion
        this.dtTrigger.unsubscribe();
    }
    setDatos(cargoe) {
        this.cargoe = cargoe;
    }
    openModalA(content) {
        this.modalService.open(content, { keyboard: false, scrollable: true, size: 'lg' });
    }
    iniciarFormulario() {
        return this.fb.group({
            nombrecargo: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_1__.isCaracter),
                ],
            ],
            id: [""],
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formCargo.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    getPageCargos() {
        //obtener los datos
        this.cargoService.mostrarCargoList().subscribe((resp) => {
            this.cargos = resp;
            this.dtTrigger.next(null);
            this.cargoe = null;
        });
        this.cargoService.AdministradoresListaCargo().subscribe((resp) => {
            this.administradores = resp;
        });
    }
    guardarCargos() {
        //funciona para guardar y editar
        if (this.formCargo.valid) {
            if (this.cargoe != null) {
                this.editandoCargo();
            }
            else {
                this.registrandoCargoForm();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: "center",
                title: "Faltan datos en el formulario",
                text: "completar campos requeridos",
                icon: "warning",
            });
        }
    }
    registrandoCargoForm() {
        const cargo = this.formCargo.value;
        const cargovalid = this.formCargo.get('nombrecargo').value;
        const v = this.existe(cargovalid);
        if (v) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Ya existe el cargo', 'warning');
        }
        else {
            this.cargoService.nuevoCargo(cargo).subscribe((resp) => {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Éxito", "Almacenado correctamente", "success");
                    this.formCargo.reset();
                    this.reload();
                }
            }, (err) => {
                //consoleerro
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Ocurrio un problema", "", "warning");
            });
        }
    }
    editandoCargo() {
        const cargoe = this.formCargo.value;
        this.cargoService.editarCargo(cargoe).subscribe((resp) => {
            if (resp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Éxito", "Modificado correctamente", "success");
                this.formCargo.reset();
                this.reload();
            }
        }, (err) => {
            //consoleerro
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Ocurrio un problema", "", "warning");
        });
    }
    eliminandoconAlert(x) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: '¿Está seguro de eliminar? ',
            text: `Esto no se puede revertir`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const v = this.verificar(x.id);
                if (v) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'El registro no puede ser eliminado', 'warning');
                }
                else {
                    this.cargoService.deleteCargo(x).subscribe(response => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Eliminado', 'El registro ha sido eliminado', 'success');
                        this.reload();
                    });
                }
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Cambios no aplicados', '', 'info');
            }
        });
    }
    verificar(id) {
        return this.administradores.some(admin => admin.cargo.id === id);
    }
    existe(nombre) {
        return this.cargos.some(cargo => cargo.nombrecargo === nombre);
    }
    mostrarRecargando() {
        //recarga los datos
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([currentUrl]);
    }
    /**Para recargar */
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            this.cargos = [];
            dtInstance.destroy();
            this.getPageCargos();
        });
    }
}
ListaCargosComponent.ɵfac = function ListaCargosComponent_Factory(t) { return new (t || ListaCargosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_cargos_service__WEBPACK_IMPORTED_MODULE_3__.CargosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
ListaCargosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListaCargosComponent, selectors: [["app-lista-cargos"]], viewQuery: function ListaCargosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 46, vars: 13, consts: [[1, "container-fluid"], ["title", "Cargo", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-sm-12", "text-end"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "col-sm-3"], [1, "text-danger", "mb-4"], [1, "col-9"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-5"], ["type", "hidden", "formControlName", "id", 1, "form-control", 3, "ngModel"], [1, "col-sm-5", "text-start"], [1, "text-danger"], ["type", "text", "autocomplete", "off", "placeholder", "Ej: Administrador", "formControlName", "nombrecargo", 1, "form-control", 3, "ngModel"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-sm-3", "mt-4", "ms-4"], ["type", "submit", 1, "btn", "btn-info", "bg-gradient", 3, "disabled"], [1, "text-sm-end"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [4, "ngFor", "ngForOf"], ["ayuda", ""], ["type", "button", "ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["type", "button", "ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "click"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", "text-justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]], template: function ListaCargosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaCargosComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](45); return ctx.openModalA(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " * Campo obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ListaCargosComponent_Template_form_ngSubmit_15_listener() { return ctx.guardarCargos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Nombre cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ListaCargosComponent_span_26_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ListaCargosComponent_span_27_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ListaCargosComponent_span_28_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "thead", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "N.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ListaCargosComponent_tr_43_Template, 8, 2, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ListaCargosComponent_ng_template_44_Template, 29, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formCargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.cargoe != null ? ctx.cargoe.id : ctx.cargoe);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("nombrecargo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.cargoe != null ? ctx.cargoe.nombrecargo : ctx.cargoe);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.formCargo.get("nombrecargo")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.formCargo.get("nombrecargo")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.formCargo.get("nombrecargo")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.formCargo.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.cargos);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWNhcmdvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtBQUVGO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0FBRUY7QUFDQSxnRkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDREQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0ksMERBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFFTjtBQUVBO0VBQ0MseUJBQUE7RUFDQyxZQUFBO0FBQ0Y7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0ksMERBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDSSxVQUFBO0FBQVY7QUFHQTtFQUNFLHlCQUFBO0FBQUYiLCJmaWxlIjoibGlzdGEtY2FyZ29zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJ0bi1pY29uLnJvdW5kZWQtY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIC8qIENhbWJpYSBlbCB0YW1hw7FvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgLyogRWxpbWluYSBlbCByZWxsZW5vIHBhcmEgcXVlIHNlYSBjb21wbGV0YW1lbnRlIHJlZG9uZG8gKi9cbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC8qIEFsaW5lYSBlbCBjb250ZW5pZG8gdmVydGljYWxtZW50ZSAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIGRlbCBpY29ubyBzaSBlcyBuZWNlc2FyaW8gKi9cbn1cblxuLmJ0bi10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBFc3RhYmxlY2UgZWwgZm9uZG8gY29tbyB0cmFuc3BhcmVudGUgKi9cbiAgYm9yZGVyOiBub25lO1xuICAvKiBFbGltaW5hIGVsIGJvcmRlIHNpIGVzIG5lY2VzYXJpbyAqL1xuICBjb2xvcjogIzAwN2JmZjtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xufVxuXG4vKiBQZXJzb25hbGl6YSBlbCBjb2xvciBkZSB0ZXh0byBjdWFuZG8gc2UgcGFzYSBlbCBjdXJzb3IgcG9yIGVuY2ltYSBkZWwgYm90w7NuICovXG4uYnRuLXRyYW5zcGFyZW50OmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gYWwgcGFzYXIgZWwgY3Vyc29yIHBvciBlbmNpbWEgKi9cbn1cblxuLmNsb3NlQSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogRXN0YWJsZWNlciBwb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBwb3NpY2lvbmFyIGVsIGJvdMOzbiAqL1xuICB0b3A6IDI1cHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBwYXJ0ZSBzdXBlcmlvciAqL1xuICBsZWZ0OiA3NTBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIGl6cXVpZXJkYSAqL1xufVxuXG4ubW9kYWwtaGVhZGVyQSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm1vZGFsLXRpdGxlQSB7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gZW4gZWwgZW5jYWJlemFkbyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyMHB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogMTJweDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlMDAwMDtcbn0iXX0= */"] });


/***/ }),

/***/ 23458:
/*!*******************************************************!*\
  !*** ./src/app/pages/cargo/service/cargos.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargosService": () => (/* binding */ CargosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class CargosService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlG}`;
    }
    mostrarCargoList() {
        return this.http.get(`${this.url}/cargo/listaCargos`);
    }
    nuevoCargo(cargo) {
        return this.http.post(`${this.url}/cargo/guardar`, cargo);
    }
    deleteCargo(id) {
        return this.http.delete(`${this.url}/cargo/${id.id}`);
    }
    editarCargo(cargo) {
        return this.http.put(`${this.url}/cargo/modificar`, cargo);
    }
    buscar(filtro, page = 0, size = 3) {
        return this.http.get(`${this.url}/cargo/buscar/${filtro}` + '?' + `page=${page}&size=${size}`);
    }
    AdministradoresListaCargo() {
        return this.http.get(`${this.url}/administrador/listaAdmin`);
    }
}
CargosService.ɵfac = function CargosService_Factory(t) { return new (t || CargosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CargosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CargosService, factory: CargosService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cargo_cargo_module_ts.js.map