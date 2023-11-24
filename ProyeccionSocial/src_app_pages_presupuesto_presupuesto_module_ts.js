"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["src_app_pages_presupuesto_presupuesto_module_ts"],{

/***/ 86615:
/*!*****************************************************!*\
  !*** ./src/app/pages/presupuesto/models/detalle.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Presupuestos": () => (/* binding */ Presupuestos),
/* harmony export */   "Detalles": () => (/* binding */ Detalles)
/* harmony export */ });
class Presupuestos {
    constructor(titulo, idUsuario, detalles, fecha) {
        this.titulo = titulo;
        this.idUsuario = idUsuario;
        this.detalles = detalles;
        this.fecha = fecha;
    }
}
class Detalles {
    constructor(descripcion, cantidad, preciounidad, total, id) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.preciounidad = preciounidad;
        this.total = total;
        this.id = id;
    }
    totalx() {
        return (this.cantidad * this.preciounidad);
    }
}


/***/ }),

/***/ 36287:
/*!******************************************************************!*\
  !*** ./src/app/pages/presupuesto/pages/lista/lista.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaComponent": () => (/* binding */ ListaComponent)
/* harmony export */ });
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/presupuesto.service */ 24996);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);










function ListaComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaComponent_tr_21_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24); return ctx_r6.openModal(_r2, data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaComponent_tr_21_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.descargarPdfParametro(data_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaComponent_tr_21_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.eliminar(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 4, data_r4.fecha, "EEEE dd, MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", data_r4.totalF, "");
} }
function ListaComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_23_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](x_r12.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](x_r12.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 4, x_r12.preciounidad, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 7, x_r12.total, "1.2-2"), "");
} }
function ListaComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Detalle de Presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaComponent_ng_template_23_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const modal_r10 = restoredCtx.$implicit; return modal_r10.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "thead", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Precio Unidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ListaComponent_ng_template_23_tr_31_Template, 11, 10, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListaComponent_ng_template_23_Template_button_click_33_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const modal_r10 = restoredCtx.$implicit; return modal_r10.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("T\u00EDtulo : ", ctx_r3.presupuesto.titulo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total : $", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 5, ctx_r3.presupuesto.totalF, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Fecha : ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 8, ctx_r3.presupuesto.fecha, "EEEE dd, MMMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dtOptions", ctx_r3.dtOptionsD);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.presupuesto.detalles);
} }
class ListaComponent {
    constructor(presupuestoService, modalService) {
        this.presupuestoService = presupuestoService;
        this.modalService = modalService;
        this.showLoading = false;
        this.dtOptions = {};
        this.dtOptionsD = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Presupuesto' }, { label: 'Lista', active: true }];
        this.dtOptions = {
            columnDefs: [
                { className: "", targets: [0, 1, 2, 3, 4] },
                { orderable: false, targets: [4] },
                { searchable: false, targets: [0, 4] },
                // {width: "30%", targets:[2]},
                // {width: "10%", targets:[0,1,2,3,4]},
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
            responsive: true
        };
        this.cargar();
        this.loadTable();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    cargar() {
        this.presupuestoService.presupuestos().subscribe((resp) => {
            this.presupuestos = resp;
            this.dtTrigger.next(null);
            this.presupuesto;
        });
    }
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            this.presupuestos = [];
            dtInstance.destroy();
        });
        this.cargar();
    }
    openModal(agg, edt) {
        this.presupuesto = edt;
        this.modalService.open(agg, { size: 'lg' });
    }
    eliminar(x) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: '¿Está seguro de eliminar? ',
            text: `Esto no se puede revertir`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: "#a90000",
            cancelButtonColor: '#343a40',
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.presupuestoService.eliminar(x).subscribe(resp => {
                    console.log(resp);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Eliminado',
                        text: `El registro ha sido eliminado`,
                        icon: 'success',
                    });
                    this.reload();
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        icon: 'error',
                        title: 'Error',
                        text: err.error.msg
                    });
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    confirmButtonColor: "#a90000",
                    title: "Información",
                    text: `Cambios no aplicados`,
                    icon: "info",
                });
            }
        });
    }
    loadTable() {
        this.dtOptionsD = {
            searching: false,
            columnDefs: [
                { orderable: false, targets: 0 },
                // {width: "30%", targets:[3]},
                // {width: "5%", targets:[0,1,2,4]},
                { responsivePriority: 1, targets: -1 }
            ],
            lengthMenu: [5, 10, 20, 50],
            destroy: true,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json',
                lengthMenu: "Mostrar _MENU_ registros",
                zeroRecords: "Ningún dato encontrado",
            },
            pagingType: 'full_numbers',
            responsive: true
        };
    }
    descargarPdfParametro(pdf) {
        this.showLoading = true;
        this.presupuestoService
            .generarPdfPresupuesto(pdf)
            .subscribe((data) => {
            this.showLoading = false;
            const blob = new Blob([data], { type: "application/pdf" });
            const link = document.createElement("a");
            let url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
}
ListaComponent.ɵfac = function ListaComponent_Factory(t) { return new (t || ListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__.PresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
ListaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListaComponent, selectors: [["app-lista"]], viewQuery: function ListaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 25, vars: 5, consts: [[1, "container-fluid"], ["title", "Presupuesto", 3, "breadcrumbItems"], [1, "row"], [1, "card"], [1, "card-body"], [1, "table-responsive"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "bg-light", "bg-gradient"], [1, ""], [4, "ngFor", "ngForOf"], ["class", "spinner-overlay", 4, "ngIf"], ["role", "document"], ["det", ""], ["ngbTooltip", "Ver Detalles", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-preview", 3, "click"], ["ngbTooltip", "Generar Pdf", 1, "btn", "btn-outline-primary", "btn-sm", "mdi", "mdi-file-pdf-box-outline", 3, "click"], ["ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "click"], [1, "spinner-overlay"], ["role", "status", 1, "spinner-border", "text-primary", "m-1"], [1, "sr-only"], ["id", "modalDet", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "col-7"], [1, "form-control", "border-0"], [1, "col-5", "text-end"], [1, "form-control", "border-0", "font-weight-bold"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions"], [1, "text-center"], [1, "modal-footer"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-dark", 3, "click"]], template: function ListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ListaComponent_tr_21_Template, 14, 7, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ListaComponent_div_22_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ListaComponent_ng_template_23_Template, 35, 11, "ng-template", 11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.presupuestos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["@charset \"UTF-8\";\n.spinner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQW9CLGlEQUFBO0VBQ3BCLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUE0QyxrREFBQTtFQUM1QyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBZSwyRUFBQTtBQUtqQiIsImZpbGUiOiJsaXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zcGlubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIFBvc2ljacOzbiBhYnNvbHV0YSBjb24gcmVzcGVjdG8gYWwgY29udGVuZWRvciAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgLyogRm9uZG8gc2VtaXRyYW5zcGFyZW50ZSBwYXJhIGxhIHJ1ZWRhIGRlIGNhcmdhICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xuICAvKiBBc2VndXJhIHF1ZSBsYSBydWVkYSBkZSBjYXJnYSBlc3TDqSBlbiBsYSBwYXJ0ZSBzdXBlcmlvciBkZWwgZm9ybXVsYXJpbyAqL1xufSJdfQ== */"] });


/***/ }),

/***/ 86564:
/*!************************************************************************!*\
  !*** ./src/app/pages/presupuesto/pages/registro/registro.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroComponent": () => (/* binding */ RegistroComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _models_detalle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/detalle */ 86615);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constantes/constantesproyecto */ 58498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_presupuesto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/presupuesto.service */ 24996);
/* harmony import */ var src_app_account_auth_login_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/account/auth/login/service/autenticacion.service */ 6163);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);















function RegistroComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No se permiten caracteres especiales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cantidad m\u00EDnima 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cantidad m\u00E1xima 200 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cantidad m\u00EDnima 0.01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cantidad m\u00E1xima 5000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegistroComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistroComponent_tr_90_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const i_r16 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.eliminarFila(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r15.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r15.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 4, data_r15.preciounidad, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 7, data_r15.totalx(), "1.2-2"), "");
} }
function RegistroComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistroComponent_ng_template_91_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const modal_r19 = restoredCtx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\u00BFC\u00F3mo utilizar esta p\u00E1gina?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Para registrar un presupuesto se debe ingresar un ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "t\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " que ayuda a identificar el presupuesto y al menos un ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\u00EDtem");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " del cual se necesita una ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, ", la ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " a comprar y su ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, " por unidad. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " a\u00F1ade ese \u00EDtem a la ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "lista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "del presupuesto que se muestra en la parte inferior de la p\u00E1gina, donde se pueden observar sus detalles y total. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Los \u00EDtems agregados a la lista tambi\u00E9n pueden ser quitados si se presiona el bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Quitar.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "no estar\u00E1 habilitado a menos que se tenga el t\u00EDtulo y un \u00EDtem agregado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "El ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "del presupuesto se muestra en la parte superior y este es la suma del total de los \u00EDtems agregados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Importante: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, " una vez guardado el presupuesto no puede ser editado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistroComponent_ng_template_91_Template_button_click_55_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const modal_r19 = restoredCtx.$implicit; return modal_r19.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class RegistroComponent {
    constructor(presupuestoService, fb, authService, modalService) {
        this.presupuestoService = presupuestoService;
        this.fb = fb;
        this.authService = authService;
        this.modalService = modalService;
        this.detalles = [];
        this.habilitar = true;
        this.showLoading = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.formulario = this.inif();
        this.formT = this.inifT();
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Presupuesto' }, { label: 'Registro', active: true }];
        this.user = this.authService.getUserFromLocalCache();
        this.dtOptions = {
            searching: false,
            columnDefs: [
                { orderable: false, targets: [0, 4] },
                { searchable: false, targets: [0, 4] },
                // { width: "15%", targets: [0, 2, 3, 4] },
                // { width: "40%", targets: [1] },
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
        this.getDetalles();
    }
    inif() {
        return this.fb.group({
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(4)]],
            cantidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(200)]],
            precio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(5000)]],
        });
    }
    inifT() {
        return this.fb.group({
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter)]],
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formulario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    esCampoValidoT(campo) {
        const validarCampo = this.formT.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    agregar() {
        // const descripcion = this.formulario.get('descripcion').value;
        // const cantidad = this.formulario.get('cantidad').value;
        // const precio = this.formulario.get('precio').value;
        // this.detalle = new Detalles(descripcion, cantidad, precio);
        // this.detalles.push(this.detalle);
        const descripcion = this.formulario.get('descripcion').value;
        const cantidad = this.formulario.get('cantidad').value;
        const precio = this.formulario.get('precio').value;
        const detalleExistente = this.detalles.find(detalle => detalle.descripcion.toLowerCase() === descripcion.toLowerCase());
        if (detalleExistente) {
            detalleExistente.cantidad += cantidad;
            if (detalleExistente.preciounidad !== precio) {
                const nuevoDetalle = new _models_detalle__WEBPACK_IMPORTED_MODULE_1__.Detalles(descripcion, cantidad, precio);
                this.detalles.push(nuevoDetalle);
            }
        }
        else {
            const nuevoDetalle = new _models_detalle__WEBPACK_IMPORTED_MODULE_1__.Detalles(descripcion, cantidad, precio);
            this.detalles.push(nuevoDetalle);
        }
        this.reload();
        this.formulario.reset();
    }
    guardar() {
        this.showLoading = true;
        const titulo = this.formT.get('titulo').value;
        this.presupuesto = new _models_detalle__WEBPACK_IMPORTED_MODULE_1__.Presupuestos(titulo, this.user.id, this.detalles);
        if (this.formT.valid) {
            this.showLoading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: ' ¿Está seguro de guardar? ',
                text: `Una vez guardado el presupuesto no puede ser editado`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: "#a90000",
                cancelButtonColor: '#343a40',
                confirmButtonText: 'Sí, guardar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.presupuestoService.guardar(this.presupuesto).subscribe(resp => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                            confirmButtonColor: "#a90000",
                            title: 'Éxito',
                            text: `Almacenado correctamente`,
                            icon: 'success',
                        });
                    });
                    this.detalles.length = 0;
                    this.formulario.reset();
                    this.formT.reset();
                    this.reload();
                }
                else if (result.isDenied) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        confirmButtonColor: "#a90000",
                        title: "Información",
                        text: `Cambios no aplicados`,
                        icon: "info",
                    });
                }
            });
        }
        else {
            this.showLoading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                confirmButtonColor: "#a90000",
                position: 'center',
                title: 'Falta título de presupuesto',
                icon: 'warning'
            });
            return Object.values(this.formT.controls)
                .forEach(control => control.markAsTouched());
        }
    }
    eliminarFila(x) {
        this.detalles.splice(x, 1);
        this.reload();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    calcularTotalF() {
        this.totalF = 0.00;
        if (this.detalles.length == 0) {
            return parseFloat(this.totalF.toFixed(2));
        }
        else {
            this.detalles.forEach((detalle) => {
                this.totalF += detalle.totalx();
            });
            return parseFloat(this.totalF.toFixed(2));
        }
    }
    limpiar() {
        this.formulario.get('descripcion').setValue("");
        this.formulario.get('cantidad').setValue("");
        this.formulario.get('precio').setValue("");
    }
    getDetalles() {
        return this.detalles;
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
    }
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            // this.detalles = []
            dtInstance.destroy();
            this.dtTrigger.next();
        });
        this.getDetalles();
    }
    openModalA(content) {
        this.modalService.open(content, { keyboard: false, scrollable: true, size: 'lg' });
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_presupuesto_service__WEBPACK_IMPORTED_MODULE_4__.PresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_account_auth_login_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__.AutenticacionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal)); };
RegistroComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], viewQuery: function RegistroComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 93, vars: 29, consts: [[1, "container-fluid"], ["title", "Presupuesto", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-sm-6"], [1, "text-danger", "mb-4"], [1, "col-sm-6", "text-end"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [3, "formGroup"], [1, "row", "mb-1"], [1, "col-sm-4", "text-start"], [1, "text-danger"], ["type", "text", "name", "titulo", "autocomplete", "off", "formControlName", "titulo", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-5", "text-start"], ["id", "totalF", "name", "totalF", 1, "pt-1"], [1, "border", "p-1"], [1, "float-none", "w-auto", "p-2", 2, "font-size", "12px"], [1, "col-sm-5", "text-start"], ["type", "text", "name", "descripcion", "autocomplete", "off", "formControlName", "descripcion", 1, "form-control"], [1, "col-sm-2"], ["type", "number", "name", "cantidad", "min", "1", "max", "200", "step", "1", "autocomplete", "off", "formControlName", "cantidad", 1, "form-control"], ["type", "number", "name", "precio", "min", "0.01", "max", "5000", "step", "0.01", "autocomplete", "off", "formControlName", "precio", 1, "form-control"], [1, "col-sm-2", "mt-4", "ms-4", "text-end"], [1, "btn", "btn-info", "btn-rounded", "bg-gradient", 3, "disabled", "click"], [1, "mdi", "mdi-plus", "me-1"], [3, "ngSubmit"], [1, "col-sm-1", "mt-4"], ["type", "submit", 1, "btn", "btn-info", "bg-gradient", 3, "disabled"], ["class", "spinner-overlay", 4, "ngIf"], [1, "mb-0", "mt-3"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "bg-light", "bg-gradient"], [4, "ngFor", "ngForOf"], ["ayuda", ""], [1, "spinner-overlay"], ["role", "status", 1, "spinner-border", "text-primary", "m-1"], [1, "sr-only"], ["ngbTooltip", "Quitar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "click"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", 2, "text-align", "justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " * Campo obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](92); return ctx.openModalA(_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "T\u00EDtulo de presupuesto");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, RegistroComponent_span_23_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, RegistroComponent_span_24_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "fieldset", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "legend", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "\u00CDtem");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, RegistroComponent_span_42_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, RegistroComponent_span_43_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, RegistroComponent_span_44_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, RegistroComponent_span_52_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, RegistroComponent_span_53_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, RegistroComponent_span_54_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Precio/Unidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, RegistroComponent_span_62_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, RegistroComponent_span_63_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, RegistroComponent_span_64_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_66_listener() { return ctx.agregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function RegistroComponent_Template_form_ngSubmit_69_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, RegistroComponent_div_73_Template, 4, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "thead", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Precio Unitario");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, RegistroComponent_tr_90_Template, 13, 10, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](91, RegistroComponent_ng_template_91_Template, 57, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_16_0;
        let tmp_17_0;
        let tmp_18_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formT);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.esCampoValidoT("titulo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.formT.get("titulo")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.formT.get("titulo")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", ctx.calcularTotalF(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.esCampoValido("descripcion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.formulario.get("descripcion")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.formulario.get("descripcion")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.formulario.get("descripcion")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.esCampoValido("cantidad"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.formulario.get("cantidad")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.formulario.get("cantidad")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["min"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.formulario.get("cantidad")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["max"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.esCampoValido("precio"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx.formulario.get("precio")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.formulario.get("precio")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors["min"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.formulario.get("precio")) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors["max"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.formulario.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.detalles.length == 0 || !ctx.formT.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.detalles);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_7__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe], styles: ["@charset \"UTF-8\";\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.spinner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHlCQUFBO0FBRUY7QUFBQTtFQUNFLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBR0Y7QUFBQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFHRjtBQUFBLGdGQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNERBQUE7QUFHRjtBQURBO0VBQ0Usa0JBQUE7RUFBb0IsaURBQUE7RUFDcEIsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQTRDLGtEQUFBO0VBQzVDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFlLDJFQUFBO0FBT2pCIiwiZmlsZSI6InJlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlMDAwMDtcbn1cblxuLmJ0bi1pY29uLnJvdW5kZWQtY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIC8qIENhbWJpYSBlbCB0YW1hw7FvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgLyogRWxpbWluYSBlbCByZWxsZW5vIHBhcmEgcXVlIHNlYSBjb21wbGV0YW1lbnRlIHJlZG9uZG8gKi9cbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC8qIEFsaW5lYSBlbCBjb250ZW5pZG8gdmVydGljYWxtZW50ZSAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIGRlbCBpY29ubyBzaSBlcyBuZWNlc2FyaW8gKi9cbn1cblxuLmJ0bi10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBFc3RhYmxlY2UgZWwgZm9uZG8gY29tbyB0cmFuc3BhcmVudGUgKi9cbiAgYm9yZGVyOiBub25lO1xuICAvKiBFbGltaW5hIGVsIGJvcmRlIHNpIGVzIG5lY2VzYXJpbyAqL1xuICBjb2xvcjogIzAwN2JmZjtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xufVxuXG4vKiBQZXJzb25hbGl6YSBlbCBjb2xvciBkZSB0ZXh0byBjdWFuZG8gc2UgcGFzYSBlbCBjdXJzb3IgcG9yIGVuY2ltYSBkZWwgYm90w7NuICovXG4uYnRuLXRyYW5zcGFyZW50OmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gYWwgcGFzYXIgZWwgY3Vyc29yIHBvciBlbmNpbWEgKi9cbn1cblxuLnNwaW5uZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogUG9zaWNpw7NuIGFic29sdXRhIGNvbiByZXNwZWN0byBhbCBjb250ZW5lZG9yICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAvKiBGb25kbyBzZW1pdHJhbnNwYXJlbnRlIHBhcmEgbGEgcnVlZGEgZGUgY2FyZ2EgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC8qIEFzZWd1cmEgcXVlIGxhIHJ1ZWRhIGRlIGNhcmdhIGVzdMOpIGVuIGxhIHBhcnRlIHN1cGVyaW9yIGRlbCBmb3JtdWxhcmlvICovXG59Il19 */"] });


/***/ }),

/***/ 32239:
/*!*****************************************************************!*\
  !*** ./src/app/pages/presupuesto/presupuesto-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresupuestoRoutingModule": () => (/* binding */ PresupuestoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/lista/lista.component */ 36287);
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/registro/registro.component */ 86564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    { path: 'presupuesto', component: _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_1__.RegistroComponent },
    { path: 'lista', component: _pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_0__.ListaComponent },
];
class PresupuestoRoutingModule {
}
PresupuestoRoutingModule.ɵfac = function PresupuestoRoutingModule_Factory(t) { return new (t || PresupuestoRoutingModule)(); };
PresupuestoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PresupuestoRoutingModule });
PresupuestoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PresupuestoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 41595:
/*!*********************************************************!*\
  !*** ./src/app/pages/presupuesto/presupuesto.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresupuestoModule": () => (/* binding */ PresupuestoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _presupuesto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presupuesto-routing.module */ 32239);
/* harmony import */ var _pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/lista/lista.component */ 36287);
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/registro/registro.component */ 86564);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 91955);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);












class PresupuestoModule {
}
PresupuestoModule.ɵfac = function PresupuestoModule_Factory(t) { return new (t || PresupuestoModule)(); };
PresupuestoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PresupuestoModule });
PresupuestoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _presupuesto_routing_module__WEBPACK_IMPORTED_MODULE_0__.PresupuestoRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PresupuestoModule, { declarations: [_pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_1__.ListaComponent,
        _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_2__.RegistroComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _presupuesto_routing_module__WEBPACK_IMPORTED_MODULE_0__.PresupuestoRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule] }); })();


/***/ }),

/***/ 24996:
/*!******************************************************************!*\
  !*** ./src/app/pages/presupuesto/service/presupuesto.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresupuestoService": () => (/* binding */ PresupuestoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class PresupuestoService {
    constructor(http) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlG}/registropresupuestos`;
    }
    // public presupuestos(page: number = 0, size: number = 3): Observable<any> {
    //   return this.http.get<any>(`${this.url}/presupuesto` + '?' + `page=${page}&size=${size}`)
    // }
    presupuestos() {
        return this.http.get(`${this.url}`);
    }
    getDetalle(id) {
        return this.http.get(`${this.url}`);
    }
    eliminar(x) {
        return this.http.delete(`${this.url}/${x.id}`);
    }
    guardar(x) {
        return this.http.post(`${this.url}`, x);
    }
    generarPdfPresupuesto(id) {
        return this.http.get(`${this.url}/pdf` + '?' + `id=${id}`, { responseType: 'arraybuffer' });
    }
}
PresupuestoService.ɵfac = function PresupuestoService_Factory(t) { return new (t || PresupuestoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PresupuestoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PresupuestoService, factory: PresupuestoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_presupuesto_presupuesto_module_ts.js.map