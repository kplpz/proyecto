"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["src_app_pages_categoria_categoria_module_ts"],{

/***/ 62644:
/*!*************************************************************!*\
  !*** ./src/app/pages/categoria/categoria-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaRoutingModule": () => (/* binding */ CategoriaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_listar_categoria_listar_categoria_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/listar-categoria/listar-categoria.component */ 81060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'lista', component: _pages_listar_categoria_listar_categoria_component__WEBPACK_IMPORTED_MODULE_0__.ListarCategoriaComponent }
];
class CategoriaRoutingModule {
}
CategoriaRoutingModule.ɵfac = function CategoriaRoutingModule_Factory(t) { return new (t || CategoriaRoutingModule)(); };
CategoriaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoriaRoutingModule });
CategoriaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoriaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 99727:
/*!*****************************************************!*\
  !*** ./src/app/pages/categoria/categoria.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaModule": () => (/* binding */ CategoriaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoria-routing.module */ 62644);
/* harmony import */ var _pages_listar_categoria_listar_categoria_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/listar-categoria/listar-categoria.component */ 81060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 91955);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);










class CategoriaModule {
}
CategoriaModule.ɵfac = function CategoriaModule_Factory(t) { return new (t || CategoriaModule)(); };
CategoriaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CategoriaModule });
CategoriaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriaRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CategoriaModule, { declarations: [_pages_listar_categoria_listar_categoria_component__WEBPACK_IMPORTED_MODULE_1__.ListarCategoriaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriaRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule] }); })();


/***/ }),

/***/ 29809:
/*!*****************************************************!*\
  !*** ./src/app/pages/categoria/models/categoria.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Categoria": () => (/* binding */ Categoria)
/* harmony export */ });
class Categoria {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}


/***/ }),

/***/ 81060:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/categoria/pages/listar-categoria/listar-categoria.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarCategoriaComponent": () => (/* binding */ ListarCategoriaComponent)
/* harmony export */ });
/* harmony import */ var _models_categoria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/categoria */ 29809);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constantes/constantesproyecto */ 58498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _service_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/categoria.service */ 70941);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);













function ListarCategoriaComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarCategoriaComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No valido solo permite texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListarCategoriaComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarCategoriaComponent_tr_40_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const data_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.paraEdit(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarCategoriaComponent_tr_40_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const data_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.eliminar(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.nombre);
} }
function ListarCategoriaComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarCategoriaComponent_ng_template_41_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const modal_r10 = restoredCtx.$implicit; return modal_r10.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ventana de Informaci\u00F3n de Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Muestra una tabla que contiene una lista de todas las categor\u00EDas almacenadas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Bot\u00F3n Guardar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Permite incluir una nueva categor\u00EDa a la lista. Al hacer clic en este bot\u00F3n, podr\u00E1 ingresar el nombre de la categor\u00EDa para poder ser almacenada la informaci\u00F3n en la base de datos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Bot\u00F3n Editar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Permite actualizar el nombre de la categor\u00EDa, facilitando la gesti\u00F3n eficiente de la informaci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Bot\u00F3n Eliminar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Permite eliminar de manera permanente la categor\u00EDa. Esta acci\u00F3n suele ser irreversible, lo que significa que una vez que se presiona el bot\u00F3n \"Eliminar\" y se confirma la acci\u00F3n, el elemento seleccionado se borra y no se prodra revertir dicha acci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarCategoriaComponent_ng_template_41_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const modal_r10 = restoredCtx.$implicit; return modal_r10.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ListarCategoriaComponent {
    constructor(modalService, //para abrir el modal openModal()
    categoriaService, fb) {
        this.modalService = modalService;
        this.categoriaService = categoriaService;
        this.fb = fb;
        this.categorias = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.formulario = this.inifc();
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Listado' }];
        /**table */
        this.dtOptions = {
            columnDefs: [
                { orderable: false, targets: [0, 2] },
                { searchable: false, targets: [0, 2] },
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
        this.cargarDatos();
    }
    inifc() {
        return this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter)]]
        });
    }
    cargarDatos() {
        this.categoriaService.categorias().subscribe((resp) => {
            this.categorias = resp;
            this.dtTrigger.next(null);
            this.categoria = null;
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formulario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    push() {
        if (this.categoria != null) {
            this.editar();
        }
        else {
            this.guardar();
        }
    }
    guardar() {
        this.categoria = new _models_categoria__WEBPACK_IMPORTED_MODULE_0__.Categoria(this.formulario.get('nombre').value);
        if (this.existe(this.categoria.nombre.toLowerCase() || this.categoria.nombre.toUpperCase())) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error', 'Ya existe la categoría', 'error');
            this.formulario.reset();
            this.reload();
        }
        else {
            this.categoriaService.guardarCategoria(this.categoria).subscribe(resp => {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Éxito', 'Almacenado correctamente', 'success');
                    this.reload();
                    this.formulario.reset();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Ocurrio un problema', '', 'warning');
                }
            });
        }
        this.formulario.reset();
        return Object.values(this.formulario.controls)
            .forEach(control => control.markAsTouched());
    }
    paraEdit(x) {
        this.formulario.patchValue(x);
        this.categoria = x;
    }
    editar() {
        this.categoria.nombre = this.formulario.controls['nombre'].value;
        this.categoriaService.editar(this.categoria).subscribe(resp => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Éxito', 'Modificado correctamente', 'success');
            this.reload();
            this.formulario.get('nombre').setValue("");
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Error',
                text: `Ya existe la categoría`,
                icon: 'error',
            });
        });
        this.formulario.reset();
    }
    eliminar(x) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: '¿Está seguro de eliminar? ',
            text: `Esto no se puede revertir`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error', 'El registro no puede ser eliminado', 'warning');
                this.categoriaService.eliminar(x.id).subscribe(response => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Eliminado', 'El registro ha sido eliminado', 'success');
                    this.formulario.reset();
                    this.reload();
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Cambios no aplicados', '', 'info');
            }
        });
    }
    verificar(id) {
        return this.categorias.some(cat => cat.id === id);
    }
    /**Para recargar */
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            this.categorias = [];
            dtInstance.destroy();
            this.cargarDatos();
        });
    }
    existe(nombre) {
        const nombreEnMinusculas = nombre.toLowerCase();
        return this.categorias.some(categoria => {
            return categoria.nombre.toLowerCase() === nombreEnMinusculas;
        });
    }
    //PARA LA AYUDA
    openModalA(content) {
        this.modalService.open(content, { keyboard: false,
            scrollable: true, size: 'lg' });
    }
}
ListarCategoriaComponent.ɵfac = function ListarCategoriaComponent_Factory(t) { return new (t || ListarCategoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_categoria_service__WEBPACK_IMPORTED_MODULE_4__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
ListarCategoriaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListarCategoriaComponent, selectors: [["app-listar-categoria"]], viewQuery: function ListarCategoriaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 43, vars: 10, consts: [[1, "container-fluid"], ["title", "Categoria", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-12"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "col-3"], [1, "text-danger", "mb-4"], [1, "col-9"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-5"], [1, "col", "text-start"], [1, "text-danger"], ["type", "text", "name", "nombre", "autocomplete", "off", "formControlName", "nombre", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col", "mt-4", "ms-4"], [1, "btn", "btn-info", "bg-gradient", 3, "disabled"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [1, "align-middle"], [4, "ngFor", "ngForOf"], ["ayudaCategoria", ""], ["scope", "row"], ["ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "click"], [1, "modal-headerA"], [1, "modal-titleA"], ["type", "button", "aria-label", "Close", 1, "closeA", 3, "click"], [1, "modal-body"], [2, "text-align", "justify"], [2, "margin-bottom", "20px"], [2, "font-size", "15px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]], template: function ListarCategoriaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListarCategoriaComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](42); return ctx.openModalA(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " * Campo obligator\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ListarCategoriaComponent_Template_form_ngSubmit_16_listener() { return ctx.push(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Nombre Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ListarCategoriaComponent_span_25_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ListarCategoriaComponent_span_26_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "thead", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "tbody", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ListarCategoriaComponent_tr_40_Template, 8, 2, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ListarCategoriaComponent_ng_template_41_Template, 25, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.esCampoValido("nombre"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.formulario.get("nombre")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.formulario.get("nombre")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.formulario.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categorias);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  \n  height: 30px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 23px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.modal-footerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rhci1jYXRlZ29yaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0ksV0FBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7QUFDSjtBQUVBO0VBQ0ksNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQUNKO0FBRUEsZ0ZBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSw0REFBQTtBQUNKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBQUo7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQURKO0FBS0E7RUFDSSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0EsVUFBQTtBQUZKO0FBS0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJsaXN0YXItY2F0ZWdvcmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJ0bi1pY29uLnJvdW5kZWQtY2lyY2xlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIC8qIENhbWJpYSBlbCB0YW1hw7FvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMDtcbiAgLyogRWxpbWluYSBlbCByZWxsZW5vIHBhcmEgcXVlIHNlYSBjb21wbGV0YW1lbnRlIHJlZG9uZG8gKi9cbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC8qIEFsaW5lYSBlbCBjb250ZW5pZG8gdmVydGljYWxtZW50ZSAqL1xuICBmb250LXNpemU6IDIzcHg7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIGRlbCBpY29ubyBzaSBlcyBuZWNlc2FyaW8gKi9cbn1cblxuLmJ0bi10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBFc3RhYmxlY2UgZWwgZm9uZG8gY29tbyB0cmFuc3BhcmVudGUgKi9cbiAgYm9yZGVyOiBub25lO1xuICAvKiBFbGltaW5hIGVsIGJvcmRlIHNpIGVzIG5lY2VzYXJpbyAqL1xuICBjb2xvcjogIzAwN2JmZjtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xufVxuXG4vKiBQZXJzb25hbGl6YSBlbCBjb2xvciBkZSB0ZXh0byBjdWFuZG8gc2UgcGFzYSBlbCBjdXJzb3IgcG9yIGVuY2ltYSBkZWwgYm90w7NuICovXG4uYnRuLXRyYW5zcGFyZW50OmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gYWwgcGFzYXIgZWwgY3Vyc29yIHBvciBlbmNpbWEgKi9cbn1cblxuLmNsb3NlQSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogRXN0YWJsZWNlciBwb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBwb3NpY2lvbmFyIGVsIGJvdMOzbiAqL1xuICB0b3A6IDI1cHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBwYXJ0ZSBzdXBlcmlvciAqL1xuICBsZWZ0OiA3NTBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIGl6cXVpZXJkYSAqL1xufVxuXG4ubW9kYWwtaGVhZGVyQSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm1vZGFsLXRpdGxlQSB7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gZW4gZWwgZW5jYWJlemFkbyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyMHB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogMTJweDtcbn1cblxuLm1vZGFsLWZvb3RlckEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMDAwO1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */"] });


/***/ }),

/***/ 70941:
/*!**************************************************************!*\
  !*** ./src/app/pages/categoria/service/categoria.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaService": () => (/* binding */ CategoriaService)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);






class CategoriaService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlG}/categoria`;
    }
    categorias() {
        return this.http.get(`${this.url}`);
    }
    guardarCategoria(x) {
        return this.http.post(`${this.url}/guardar`, x);
    }
    eliminar(id) {
        return this.http.delete(`${this.url}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(e => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('error', e.error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(e);
        }));
    }
    editar(x) {
        return this.http.put(`${this.url}/${x.id}`, x);
    }
}
CategoriaService.ɵfac = function CategoriaService_Factory(t) { return new (t || CategoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
CategoriaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CategoriaService, factory: CategoriaService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_categoria_categoria_module_ts.js.map