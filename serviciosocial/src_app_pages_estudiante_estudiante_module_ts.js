"use strict";
(self["webpackChunkserviciosocial"] = self["webpackChunkserviciosocial"] || []).push([["src_app_pages_estudiante_estudiante_module_ts"],{

/***/ 5836:
/*!***************************************************************!*\
  !*** ./src/app/pages/estudiante/estudiante-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstudianteRoutingModule": () => (/* binding */ EstudianteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/lista/lista.component */ 7490);
/* harmony import */ var _pages_actividades_actividades_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/actividades/actividades.component */ 59678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    { path: 'lista', component: _pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_0__.ListaComponent },
    { path: 'actividades/:id', component: _pages_actividades_actividades_component__WEBPACK_IMPORTED_MODULE_1__.ActividadesComponent },
];
class EstudianteRoutingModule {
}
EstudianteRoutingModule.ɵfac = function EstudianteRoutingModule_Factory(t) { return new (t || EstudianteRoutingModule)(); };
EstudianteRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EstudianteRoutingModule });
EstudianteRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EstudianteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 96423:
/*!*******************************************************!*\
  !*** ./src/app/pages/estudiante/estudiante.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstudianteModule": () => (/* binding */ EstudianteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _estudiante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estudiante-routing.module */ 5836);
/* harmony import */ var _pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/lista/lista.component */ 7490);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/widget/widget.module */ 57337);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ 15367);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 91955);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _shared_telefono_formato_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/telefono-formato.pipe */ 57631);
/* harmony import */ var _pages_actividades_actividades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/actividades/actividades.component */ 59678);
/* harmony import */ var _listadetalle_listadetalle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listadetalle/listadetalle.component */ 83239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);





















class EstudianteModule {
}
EstudianteModule.ɵfac = function EstudianteModule_Factory(t) { return new (t || EstudianteModule)(); };
EstudianteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: EstudianteModule });
EstudianteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _estudiante_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstudianteRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__.WidgetModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__.LightboxModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__.PaginationModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_18__.NgxMaskModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAlertModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EstudianteModule, { declarations: [_pages_lista_lista_component__WEBPACK_IMPORTED_MODULE_1__.ListaComponent,
        _shared_telefono_formato_pipe__WEBPACK_IMPORTED_MODULE_6__.TelefonoFormatPipe,
        _pages_actividades_actividades_component__WEBPACK_IMPORTED_MODULE_7__.ActividadesComponent,
        _listadetalle_listadetalle_component__WEBPACK_IMPORTED_MODULE_8__.ListadetalleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _estudiante_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstudianteRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__.WidgetModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__.LightboxModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__.PaginationModule, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, ngx_mask__WEBPACK_IMPORTED_MODULE_18__.NgxMaskModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAlertModule] }); })();


/***/ }),

/***/ 83239:
/*!*************************************************************************!*\
  !*** ./src/app/pages/estudiante/listadetalle/listadetalle.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadetalleComponent": () => (/* binding */ ListadetalleComponent)
/* harmony export */ });
/* harmony import */ var _actividad_models_detalleactividad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actividad/models/detalleactividad */ 79005);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _models_estudiante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/estudiante */ 21285);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/estudiante.service */ 93557);
/* harmony import */ var _actividad_service_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actividad/service/actividad.service */ 14511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);












const _c0 = function (a0, a1, a2) { return { " bg-success": a0, " bg-warning": a1, " bg-info": a2 }; };
function ListadetalleComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListadetalleComponent_tr_20_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const x_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.cambiarEstado(x_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 9, x_r1.fecha, "EEEE dd, MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](x_r1.horaInicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](x_r1.horaFin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", x_r1.edificio, "-", x_r1.nivel, " ", x_r1.espacioFisico, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](12, _c0, x_r1.estado === "Finalizado", x_r1.estado === "Pendiente", x_r1.estado === "Ejecucion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](x_r1.estado);
} }
class ListadetalleComponent {
    // dtTrigger: Subject<any> = new Subject<any>();
    // dtOptions: DataTables.Settings = {};
    // dtTrigger: Subject<any> = new Subject<any>();
    constructor(estudianteServicio, cambioEstadoDtServicio, actiEstadoService, ro) {
        this.estudianteServicio = estudianteServicio;
        this.cambioEstadoDtServicio = cambioEstadoDtServicio;
        this.actiEstadoService = actiEstadoService;
        this.ro = ro;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngOnInit() {
        this.loadTable();
        this.cargarDetalles(this.estudianteId, this.idActividad);
    }
    loadTable() {
        this.dtOptions = {
            searching: false,
            columnDefs: [
                { orderable: false, targets: [0, 6] },
                { searchable: false, targets: [0] },
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
    }
    cargarDetalles(id, idactividad) {
        this.idActividadParam = idactividad; //obteniendo el id de la actividad para usarlo en el cambio d estado
        this.estudianteServicio.mostrarActividadesDetalleList(id, idactividad).subscribe(resp => {
            this.detalles = resp;
            this.dtTrigger.next(null);
        });
    }
    cambiarEstado(detalleSeleccionado) {
        this.id = detalleSeleccionado.id;
        if (detalleSeleccionado.estado == 'Pendiente') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: '¿Está seguro de modificar el estado? ',
                text: `Esto se puede revertir`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, cambiar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.cambiarEstadosActividades(this.idActividadParam, 'Inactivo', this.id, 'Finalizado');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Modificado', 'El estado ha sido modificado', 'success');
                    //this.reload();
                }
                else if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Cambios no aplicados', '', 'info');
                }
            });
        }
        else if (detalleSeleccionado.estado == 'Ejecucion') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: '¿Está seguro de modificar el estado? ',
                text: `Esto se puede revertir`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, cambiar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.cambiarEstadosActividades(this.idActividadParam, 'Inactivo', this.id, 'Finalizado');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Modificado', 'El estado ha sido modificado', 'success');
                    //this.reload();
                }
                else if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Cambios no aplicados', '', 'info');
                }
            });
        }
        else if (detalleSeleccionado.estado == 'Finalizado') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: '¿Está seguro de modificar el estado? ',
                text: `Esto se puede revertir`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, cambiar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.cambiarEstadosActividades(this.idActividadParam, 'Activo', this.id, 'Pendiente');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Modificado', 'El estado ha sido modificado', 'success');
                    // this.reload();
                }
                else if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Cambios no aplicados', '', 'info');
                }
            });
        }
        else { }
    }
    cambiarEstadosActividades(idActividad, estadoActividad, idDetalle, estadoDetalle) {
        //cambiando el estado detalle
        this.estadoDetalle = new _actividad_models_detalleactividad__WEBPACK_IMPORTED_MODULE_0__.DetalleActividadEstado(estadoDetalle);
        this.cambioEstadoDtServicio.editarEstadoDt(idDetalle, this.estadoDetalle).subscribe((resp) => {
            //cambiando el estado de la actividad
            this.estadoActividad = new _models_estudiante__WEBPACK_IMPORTED_MODULE_2__.ActividadEstadoModi(estadoActividad);
            this.actiEstadoService.editarEstadoAct(idActividad, this.estadoActividad).subscribe((r) => {
                this.reload();
            });
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    reload() {
        if (this.dtElement.dtInstance) {
            this.dtElement.dtInstance.then((dtInstance) => {
                // this.detalles=[];
                dtInstance.destroy();
                this.cargarDetalles(this.estudianteId, this.idActividad);
            });
        }
    }
    mostrarRecargando() {
        //recarga los datos
        let currentUrl = this.ro.url;
        this.ro.routeReuseStrategy.shouldReuseRoute = () => false;
        this.ro.onSameUrlNavigation = "reload";
        this.ro.navigate([currentUrl]);
    }
}
ListadetalleComponent.ɵfac = function ListadetalleComponent_Factory(t) { return new (t || ListadetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_actividad_service_actividad_service__WEBPACK_IMPORTED_MODULE_5__.ActividadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
ListadetalleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListadetalleComponent, selectors: [["app-listadetalle"]], viewQuery: function ListadetalleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, inputs: { idActividad: "idActividad", estudianteId: "estudianteId" }, decls: 21, vars: 3, consts: [[1, "card"], [1, "card-body"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "w-5", "p-1", "rounded", "text-white", "text-center", 3, "ngClass"], ["ngbTooltip", "Cambia Estado", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-clockwise", 3, "click"]], template: function ListadetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Hora inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Hora fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ListadetalleComponent_tr_20_Template, 17, 16, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.detalles);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRldGFsbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 21285:
/*!*******************************************************!*\
  !*** ./src/app/pages/estudiante/models/estudiante.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Estudiante": () => (/* binding */ Estudiante),
/* harmony export */   "EstudianteList": () => (/* binding */ EstudianteList),
/* harmony export */   "Carrera": () => (/* binding */ Carrera),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "Users": () => (/* binding */ Users),
/* harmony export */   "ActividadEstadoModi": () => (/* binding */ ActividadEstadoModi)
/* harmony export */ });
class Estudiante {
    constructor(nombres, apellidos, telefono, carnet, carrera, id) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.carnet = carnet;
        this.carrera = carrera;
        this.id = id;
    }
}
class EstudianteList {
    constructor(nombres, apellidos, telefono, carnet, estado, idactividad, usuario, descripcion, nombrecarrera, nombre, idCarrera, id) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.carnet = carnet;
        this.estado = estado;
        this.idactividad = idactividad;
        this.usuario = usuario;
        this.descripcion = descripcion;
        this.nombrecarrera = nombrecarrera;
        this.nombre = nombre;
        this.idCarrera = idCarrera;
        this.id = id;
    }
}
class Carrera {
    constructor(id, nombrecarrera) {
        this.id = id;
        this.nombrecarrera = nombrecarrera;
    }
}
class C {
    constructor(nombrecarrera, id) {
        this.nombrecarrera = nombrecarrera;
        this.id = id;
    }
}
class Users {
    constructor(estado) {
        this.estado = estado;
    }
}
class ActividadEstadoModi {
    constructor(estado) {
        this.estado = estado;
    }
}


/***/ }),

/***/ 59678:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/estudiante/pages/actividades/actividades.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActividadesComponent": () => (/* binding */ ActividadesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _listadetalle_listadetalle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../listadetalle/listadetalle.component */ 83239);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_estudiante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/estudiante.service */ 93557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);










const _c0 = function (a0, a1) { return { " bg-info": a0, " bg-danger": a1 }; };
function ActividadesComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActividadesComponent_tr_20_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const x_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22); return ctx_r7.OpenDetalle(_r1, x_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c0, x_r5.estado === "Activo", x_r5.estado === "Inactivo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r5.estado);
} }
function ActividadesComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Lista detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActividadesComponent_ng_template_21_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const modal_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return modal_r9.dismiss("Cross click") || ctx_r10.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-listadetalle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("idActividad", ctx_r2.estudent.idactividad)("estudianteId", ctx_r2.id);
} }
function ActividadesComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActividadesComponent_ng_template_23_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return modal_r12.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Bot\u00F3n Ver Detalle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Permite ver informaci\u00F3n de los detalles de la actividad seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Bot\u00F3n Cambia Estado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Permite cambiar el estado del detalle de la actividad previamente seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u00BFC\u00F3mo utilizar esta p\u00E1gina?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Primeramente debe seleccionar el bot\u00F3n Ver Detalle de la actividad para ver la lista de los detalles especialmente de la actividad seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "En el caso de querer editar el estado de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, ", al seleccionar la actividad se muestra la lista de detalles, si solo tienen uno seleccionar el bot\u00F3n cambia estado para realizar tambi\u00E9n el cambio de estado del detalle y autom\u00E1ticamente al cerrar el modal cambia el estado de la actividad. Si tiene muchos detalles seleccionar el bot\u00F3n cambia estado del d\u00EDa, mes y a\u00F1o actual m\u00E1s reciente para realizar tambi\u00E9n el cambio de estado del detalle y autom\u00E1ticamente al cerrar el modal cambia el estado de la actividad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "En el caso de querer editar el estado de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, ", funciona de la misma manera explicada para el caso anterior.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "strong", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Importante: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " para que la actividad est\u00E9 con estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " solo es v\u00E1lido el detalle que est\u00E1 Finalizado por esta raz\u00F3n solo existe un detalle con ese estado, caso contrario para la actividad con estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, ", es v\u00E1lido si en el detalle existe estado Pendiente o Ejecucion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Nota:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " el bot\u00F3n cambia estado de la lista detall\u00E9 solo edita a estado Pendiente o Finalizado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActividadesComponent_ng_template_23_Template_button_click_57_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return modal_r12.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ActividadesComponent {
    constructor(estudianteServicio, route, modalService, ro) {
        this.estudianteServicio = estudianteServicio;
        this.route = route;
        this.modalService = modalService;
        this.ro = ro;
        this.dtOptions = {};
        this.dtTriggerr = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = params['id'];
        });
        this.loadTable();
        this.cargarActividades();
    }
    loadTable() {
        this.dtOptions = {
            //searching: false,
            columnDefs: [
                { orderable: false, targets: [0, 3] },
                { searchable: false, targets: [3] },
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
    }
    cargarActividades() {
        this.estudianteServicio.detallesEstudiante(this.id).subscribe(resp => {
            this.listaActividades = resp;
            this.dtTriggerr.next(null);
        });
    }
    ngOnDestroy() {
        this.dtTriggerr.unsubscribe();
    }
    OpenDetalle(content, estudiante) {
        this.estudent = estudiante;
        this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });
        //this.childComponent.cargarDetalles(this.id, this.estudent.idactividad);
    }
    openModal(content) {
        this.modalService.open(content, {
            keyboard: false,
            scrollable: true, size: 'lg'
        });
    }
    /**Para recargar */
    reload() {
        if (this.dtElement.dtInstance) {
            this.dtElement.dtInstance.then((dtInstance) => {
                // Destruye DataTables
                this.listaActividades = [];
                dtInstance.destroy();
                // Vuelve a cargar los datos
                this.cargarActividades();
            });
        }
    }
    mostrarRecargando() {
        //recarga los datos
        let currentUrl = this.ro.url;
        this.ro.routeReuseStrategy.shouldReuseRoute = () => false;
        this.ro.onSameUrlNavigation = "reload";
        this.ro.navigate([currentUrl]);
    }
}
ActividadesComponent.ɵfac = function ActividadesComponent_Factory(t) { return new (t || ActividadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_2__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ActividadesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ActividadesComponent, selectors: [["app-actividades"]], viewQuery: function ActividadesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_listadetalle_listadetalle_component__WEBPACK_IMPORTED_MODULE_0__.ListadetalleComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.childComponent = _t.first);
    } }, decls: 25, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "card"], [1, "card-body"], [1, "col-sm-12", "text-end"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [1, "text-center"], [4, "ngFor", "ngForOf"], ["role", "document"], ["contentEditarEstado", ""], ["ayuda", ""], ["width", "10%", 1, "text-center"], [1, "p-1", "rounded", "text-white", "text-center", 3, "ngClass"], ["ngbTooltip", "Ver Detalle", 1, "btn", "btn-outline-primary", "btn-sm", "dripicons-preview", 3, "click"], ["id", "modalDetallesEstu", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "idActividad", "estudianteId"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", "text-justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]], template: function ActividadesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActividadesComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24); return ctx.openModal(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ActividadesComponent_tr_20_Template, 10, 7, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ActividadesComponent_ng_template_21_Template, 8, 2, "ng-template", 13, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ActividadesComponent_ng_template_23_Template, 59, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTriggerr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listaActividades);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _listadetalle_listadetalle_component__WEBPACK_IMPORTED_MODULE_0__.ListadetalleComponent], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aWRhZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBQ0Y7QUFFQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFDRjtBQUVBLGdGQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNERBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUNOO0FBR0E7RUFDQyx5QkFBQTtFQUNDLFlBQUE7QUFBRjtBQUlBO0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNJLFVBQUE7QUFEVjtBQUlBO0VBQ0UseUJBQUE7QUFERiIsImZpbGUiOiJhY3RpdmlkYWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5idG4taWNvbi5yb3VuZGVkLWNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICAvKiBDYW1iaWEgZWwgdGFtYcOxbyBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEVsaW1pbmEgZWwgcmVsbGVubyBwYXJhIHF1ZSBzZWEgY29tcGxldGFtZW50ZSByZWRvbmRvICovXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAvKiBBbGluZWEgZWwgY29udGVuaWRvIHZlcnRpY2FsbWVudGUgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xuICAvKiBBanVzdGEgZWwgdGFtYcOxbyBkZWwgaWNvbm8gc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbi5idG4tdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogRXN0YWJsZWNlIGVsIGZvbmRvIGNvbW8gdHJhbnNwYXJlbnRlICovXG4gIGJvcmRlcjogbm9uZTtcbiAgLyogRWxpbWluYSBlbCBib3JkZSBzaSBlcyBuZWNlc2FyaW8gKi9cbiAgY29sb3I6ICMwMDdiZmY7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cbn1cblxuLyogUGVyc29uYWxpemEgZWwgY29sb3IgZGUgdGV4dG8gY3VhbmRvIHNlIHBhc2EgZWwgY3Vyc29yIHBvciBlbmNpbWEgZGVsIGJvdMOzbiAqL1xuLmJ0bi10cmFuc3BhcmVudDpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGFsIHBhc2FyIGVsIGN1cnNvciBwb3IgZW5jaW1hICovXG59XG5cbi5jbG9zZUEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyNXB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogNzUwcHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBpenF1aWVyZGEgKi9cbn1cblxuLm1vZGFsLWhlYWRlckEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMDAwO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5tb2RhbC10aXRsZUEge1xuICBjb2xvcjogI2ZmZjtcbiAgLyogQ29sb3IgZGVsIHRleHRvIGVuIGVsIGVuY2FiZXphZG8gKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBFc3RhYmxlY2VyIHBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHBvc2ljaW9uYXIgZWwgYm90w7NuICovXG4gIHRvcDogMjBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIHN1cGVyaW9yICovXG4gIGxlZnQ6IDEycHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG59Il19 */"] });


/***/ }),

/***/ 7490:
/*!*****************************************************************!*\
  !*** ./src/app/pages/estudiante/pages/lista/lista.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaComponent": () => (/* binding */ ListaComponent)
/* harmony export */ });
/* harmony import */ var _models_estudiante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/estudiante */ 21285);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constantes/constantesproyecto */ 58498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/estudiante.service */ 93557);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _actividades_actividades_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actividades/actividades.component */ 59678);
/* harmony import */ var _shared_telefono_formato_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/telefono-formato.pipe */ 57631);


















const _c0 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
function ListaComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "telefonoFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_tr_52_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const data_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](56); return ctx_r15.openModalEdt(_r3, data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_tr_52_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const data_r13 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.openDetalle(data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_tr_52_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const data_r13 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r18.eliminar(data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r13.carnet);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", data_r13.nombres, " ", data_r13.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 9, data_r13.telefono));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r13.nombrecarrera);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](11, _c0, data_r13.estado === "Activo" ? "#197DDA" : data_r13.estado === "Inactivo" ? "#f46a6a" : "transparent", data_r13.estado === "N/A" ? "#212529" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r13.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", data_r13.usuario === true);
} }
function ListaComponent_ng_template_53_ngb_alert_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngb-alert", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r20.error);
} }
function ListaComponent_ng_template_53_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Formato no valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r23.error);
} }
function ListaComponent_ng_template_53_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Formato no valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_ng_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", x_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](x_r34.nombrecarrera);
} }
function ListaComponent_ng_template_53_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Estudiante");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_53_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const modal_r19 = restoredCtx.$implicit; return modal_r19.dismiss("Cross click"); })("click", function ListaComponent_ng_template_53_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r37.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_53_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r38.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ListaComponent_ng_template_53_ngb_alert_7_Template, 2, 2, "ngb-alert", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Carnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ListaComponent_ng_template_53_span_19_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ListaComponent_ng_template_53_span_20_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ListaComponent_ng_template_53_span_21_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, ListaComponent_ng_template_53_span_29_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ListaComponent_ng_template_53_span_30_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, ListaComponent_ng_template_53_span_31_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, ListaComponent_ng_template_53_span_40_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, ListaComponent_ng_template_53_span_41_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, ListaComponent_ng_template_53_span_49_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, ListaComponent_ng_template_53_span_50_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, ListaComponent_ng_template_53_span_51_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, ListaComponent_ng_template_53_ng_option_58_Template, 2, 2, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, ListaComponent_ng_template_53_span_60_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_53_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](58); return ctx_r39.openModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_53_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r40.reset(); })("click", function ListaComponent_ng_template_53_Template_button_click_66_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const modal_r19 = restoredCtx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_19_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.esCampoValido("carnet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.formulario.get("carnet")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.formulario.get("carnet")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.esCampoValido("nombres"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r2.formulario.get("nombres")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r2.formulario.get("nombres")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r2.formulario.get("nombres")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.esCampoValido("telefono"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r2.formulario.get("telefono")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r2.formulario.get("telefono")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.esCampoValido("apellidos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r2.formulario.get("apellidos")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r2.formulario.get("apellidos")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r2.formulario.get("apellidos")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.esCampoValido("carrera"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.carreras);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx_r2.formulario.get("carrera")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r2.formulario.valid);
} }
function ListaComponent_ng_template_55_ngb_alert_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngb-alert", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r43.error);
} }
function ListaComponent_ng_template_55_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Formato no valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_ng_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", x_r55.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](x_r55.nombrecarrera);
} }
function ListaComponent_ng_template_55_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Estudiante");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_55_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const modal_r42 = restoredCtx.$implicit; return modal_r42.dismiss("Cross click"); })("click", function ListaComponent_ng_template_55_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r58.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_55_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r59.editar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ListaComponent_ng_template_55_ngb_alert_7_Template, 2, 2, "ngb-alert", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Carnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ListaComponent_ng_template_55_span_20_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, ListaComponent_ng_template_55_span_28_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, ListaComponent_ng_template_55_span_29_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ListaComponent_ng_template_55_span_30_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, ListaComponent_ng_template_55_span_39_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, ListaComponent_ng_template_55_span_40_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ListaComponent_ng_template_55_span_48_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, ListaComponent_ng_template_55_span_49_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, ListaComponent_ng_template_55_span_50_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "ng-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, ListaComponent_ng_template_55_ng_option_57_Template, 2, 2, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, ListaComponent_ng_template_55_span_59_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_55_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r60.reset(); })("click", function ListaComponent_ng_template_55_Template_button_click_61_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const modal_r42 = restoredCtx.$implicit; return modal_r42.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_17_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r4.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r4.esCampoValido("carnet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.formulario.get("carnet")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r4.esCampoValido("nombres"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r4.formulario.get("nombres")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r4.formulario.get("nombres")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r4.formulario.get("nombres")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r4.esCampoValido("telefono"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r4.formulario.get("telefono")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r4.formulario.get("telefono")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r4.esCampoValido("apellidos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r4.formulario.get("apellidos")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx_r4.formulario.get("apellidos")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r4.formulario.get("apellidos")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r4.esCampoValido("carrera"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.carreras);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx_r4.formulario.get("carrera")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r4.formulario.valid);
} }
function ListaComponent_ng_template_57_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_57_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_57_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const modal_r62 = restoredCtx.$implicit; return modal_r62.dismiss("Cross click"); })("click", function ListaComponent_ng_template_57_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r67.fCar.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_57_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r68.guardarCarrera(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ListaComponent_ng_template_57_span_17_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ListaComponent_ng_template_57_span_18_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_57_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r69.fCar.reset(); })("click", function ListaComponent_ng_template_57_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const modal_r62 = restoredCtx.$implicit; return modal_r62.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r6.fCar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r6.valid("nombrecarrera"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r6.fCar.get("nombrecarrera")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r6.fCar.get("nombrecarrera")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r6.fCar.valid);
} }
function ListaComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h1", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_59_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r73); const modal_r71 = restoredCtx.$implicit; return modal_r71.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\u00BFC\u00F3mo utilizar esta p\u00E1gina?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " abre una ventana modal donde se solicitan ciertos datos para registrar a los estudiantes que har\u00E1n uso del sistema.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "La informaci\u00F3n previamente ingresada de un estudiante puede ser modificada al presionar el bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Ver Actividades");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, ", muestra un historial de actividades que el estudiante ha realizado o sigue en proceso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, " El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, ", permite eliminar un estudiante que no tenga usuario.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Filtrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, " permite actualizar la tabla de estudiantes seg\u00FAn el estado de su usuario dentro del sistema. Por defecto, al registrar un estudiante por primera vez, no tendr\u00E1 ning\u00FAn estado en usuario.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "strong", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Importante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " el carnet de estudiante no puede ser modificado una vez ha sido guardado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_59_Template_button_click_40_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r73); const modal_r71 = restoredCtx.$implicit; return modal_r71.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_61_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Seleccione una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "PDF Estudiantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_61_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78); const modal_r75 = restoredCtx.$implicit; return modal_r75.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_61_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r79.imprimir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ListaComponent_ng_template_61_Template_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r80.generar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Seleccione");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ListaComponent_ng_template_61_span_19_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_ng_template_61_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78); const modal_r75 = restoredCtx.$implicit; return modal_r75.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Generar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r10.fP);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r10.seleccionar("pdf"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r10.fP.get("pdf")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r10.fP.valid);
} }
function ListaComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-actividades");
} }
class ListaComponent {
    constructor(estudianteServicio, modalService, fb, fbC, router) {
        this.estudianteServicio = estudianteServicio;
        this.modalService = modalService;
        this.fb = fb;
        this.fbC = fbC;
        this.router = router;
        this.estudiantes = [];
        this.estudiantesEstado = [];
        this.lista = [];
        this.estado = "Activo";
        this.error = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.dtTriggerr = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        (this.formulario = this.inif()),
            (this.fCar = this.inifC()),
            (this.fP = this.inifP());
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: "Estudiante" },
            { label: "Listado", active: true },
        ];
        this.llenarCombo();
        this.dtOptions = {
            columnDefs: [
                { orderable: false, targets: [6] },
                { searchable: false, targets: [0, 6] },
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
        this.cargarDatos();
    }
    inif() {
        return this.fb.group({
            nombres: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(4),
                ],
            ],
            carnet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCarnet)]],
            apellidos: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(4),
                ],
            ],
            carrera: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            telefono: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.telefonoRegex)]],
            id: [""],
        });
    }
    inifC() {
        return this.fb.group({
            nombrecarrera: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(4),
                ],
            ],
        });
    }
    inifP() {
        return this.fbC.group({
            pdf: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, ,]],
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formulario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    valid(campo) {
        const validarCampo = this.fCar.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    seleccionar(campo) {
        const validarCampo = this.fP.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    llenarCombo() {
        this.estudianteServicio.carrera().subscribe((resp) => {
            this.carreras = resp;
        });
    }
    estados(event) {
        this.estado = event.target.value;
        this.cargarConEstado();
    }
    cargarDatos() {
        this.estudianteServicio.estudiantes().subscribe((resp) => {
            this.estudiantes = resp;
            this.dtTrigger.next();
        });
    }
    cargarConEstado() {
        this.reload();
        this.estudianteServicio
            .estudiantesEstado(this.estado)
            .subscribe((response) => {
            if (this.estado === "Seleccione") {
                this.estudiantes = [];
                this.cargarDatos();
            }
            else if (this.estado === "todos") {
                this.cargarFull();
            }
            else {
                this.estudiantes = response;
                this.dtTrigger.next();
            }
        });
    }
    cargarFull() {
        this.estudianteServicio.estudiantesFull().subscribe((resp) => {
            this.estudiantes = resp;
            this.dtTrigger.next();
        });
    }
    openModal(content) {
        this.error = '';
        this.modalService.open(content, { backdrop: "static", keyboard: false });
        this.formulario.get("carnet").enable();
        this.estado;
    }
    openModalEdt(content, e) {
        this.error = '';
        this.estudent = e;
        this.formulario.patchValue(e);
        this.formulario.get("carnet").disable();
        this.formulario.get("id").setValue(this.estudent.id);
        this.formulario.get("carrera").setValue(this.estudent.idCarrera);
        this.modalService.open(content, { backdrop: "static", keyboard: false });
    }
    openDetalle(e) {
        this.estudent = e;
        this.router.navigate(['estudiante/actividades', this.estudent.id]);
        // this.cargarActividades(this.estudent.id)
        // this.modalService.open(content, {
        //   backdrop: "static",
        //   keyboard: false,
        //   size: "lg",
        // });
    }
    openModalA(content) {
        this.modalService.open(content, {
            keyboard: false,
            scrollable: true,
            size: "lg",
        });
    }
    modal(content) {
        this.modalService.open(content, { keyboard: false, size: "sm" });
    }
    guardar() {
        this.estado = null;
        const c = new _models_estudiante__WEBPACK_IMPORTED_MODULE_0__.Carrera(this.formulario.get("carrera").value);
        const nombres = this.formulario.get("nombres").value;
        const apellidos = this.formulario.get("apellidos").value;
        const telefono = this.formulario.get("telefono").value;
        const carnet = this.formulario.get("carnet").value;
        this.estudiante = new _models_estudiante__WEBPACK_IMPORTED_MODULE_0__.Estudiante(nombres, apellidos, telefono, carnet.toUpperCase(), c);
        if (!telefono.match(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.telefonoRegex)) {
            return;
        }
        else if (this.existeTel(telefono)) {
            this.error = "El teléfono ya existe";
            return;
        }
        else {
            this.estudianteServicio
                .guardar(this.estudiante)
                .subscribe((resp) => {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Éxito", "Almacenado correctamente", "success");
                    this.reload();
                    this.modalService.dismissAll();
                    this.formulario.reset();
                    this.cargarDatos();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Ocurrio un problema", "", "warning");
                }
            }, err => {
                if (err.status == 400) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "Ya existe el carnet", "warning");
                }
            });
        }
        return Object.values(this.formulario.controls).forEach((control) => control.markAsTouched());
    }
    reset() {
        this.formulario.reset();
    }
    eliminar(e) {
        this.estudent = e;
        if (this.estudent.usuario) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "No puede ser eliminado", "warning");
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: "¿Está seguro de eliminar? ",
                text: `Esto no se puede revertir`,
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Sí, borrar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.estudianteServicio.eliminar(e).subscribe((resp) => {
                        console.log(resp);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Eliminado", "El registro ha sido eliminado", "success");
                        this.reload();
                        this.cargarDatos();
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            icon: "error",
                            title: "Error",
                            text: err.error.msg,
                        });
                    });
                }
                else if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Cambios no aplicados", "", "info");
                }
            });
        }
    }
    editar() {
        const c = new _models_estudiante__WEBPACK_IMPORTED_MODULE_0__.Carrera(this.formulario.get("carrera").value);
        const nombres = this.formulario.get("nombres").value;
        const apellidos = this.formulario.get("apellidos").value;
        const telefono = this.formulario.get("telefono").value;
        const carnet = this.formulario.get("carnet").value;
        this.estudiante = new _models_estudiante__WEBPACK_IMPORTED_MODULE_0__.Estudiante(nombres, apellidos, telefono, carnet.toUpperCase(), c, this.formulario.get("id").value);
        if (!telefono.match(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.telefonoRegex)) {
            return;
        }
        else {
            this.estudianteServicio.editar(this.estudiante).subscribe((resp) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Éxito", "Modificado correctamente", "success");
                this.reload();
                this.modalService.dismissAll();
                this.reset();
                this.cargarDatos();
            }, (err) => {
                if (err.status === 400) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: "Advertencia",
                        text: `Teléfono ya registrado`,
                        icon: "warning",
                    });
                }
            });
        }
    }
    guardarCarrera() {
        const c = new _models_estudiante__WEBPACK_IMPORTED_MODULE_0__.C(this.fCar.get("nombrecarrera").value);
        if (this.existeCarrera(c.nombrecarrera.toLowerCase())) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error", "Ya existe la carrera", "error");
            return;
        }
        else {
            this.estudianteServicio.guardarCarrera(c).subscribe((resp) => {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Éxito", "Almacenado correctamente", "success");
                    this.reload();
                    this.cargarDatos();
                    this.llenarCombo();
                    this.fCar.reset();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Ocurrio un problema", "", "warning");
                }
            });
        }
        return Object.values(this.fCar.controls).forEach((control) => control.markAsTouched());
    }
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            // this.estudiantes = [];
            dtInstance.destroy();
            // this.cargarDatos()
        });
    }
    existeCarrera(nombre) {
        return this.carreras.some((carrera) => carrera.nombrecarrera === nombre);
    }
    existeTel(telefono) {
        return this.estudiantes.some((estudiante) => estudiante.telefono === telefono);
    }
    generar(event) {
        this.pdf = event.target.value;
    }
    imprimir() {
        if (this.pdf === "selec") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: "error",
                title: "Oops...",
                text: "Seleccione una opción",
            });
            return;
        }
        if (this.pdf === "todos") {
            this.descargarPdfFullEquipo();
        }
        else {
            this.descargarPdfParametro();
        }
    }
    descargarPdfParametro() {
        this.estudianteServicio
            .generarPdfEstudiantexEstado(this.pdf)
            .subscribe((data) => {
            const blob = new Blob([data], { type: "application/pdf" });
            const link = document.createElement("a");
            let url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
    descargarPdfFullEquipo() {
        this.estudianteServicio
            .generarPdfFullEstudiante()
            .subscribe((data) => {
            const blob = new Blob([data], { type: "application/pdf" });
            let url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
}
ListaComponent.ɵfac = function ListaComponent_Factory(t) { return new (t || ListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
ListaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ListaComponent, selectors: [["app-lista"]], viewQuery: function ListaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 65, vars: 4, consts: [[1, "container-fluid"], ["title", "Estudiante", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-sm-6"], [1, "col-sm-3", "mb-3"], ["ngbTooltip", "Generar PDF", 1, "btn", "btn-outline-info", "dripicons-print", 3, "click"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "col-sm-4", "mb-3"], ["id", "estadoF", 1, "form-control", "form-select", 3, "change"], ["value", "Seleccione"], ["value", "Activo"], ["value", "Inactivo"], ["value", "todos"], [1, "col-sm-6", "text-end"], [1, "btn", "btn-info", "btn-rounded", "bg-gradient", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "bg-light", "bg-gradient"], [1, ""], [4, "ngFor", "ngForOf"], ["role", "document"], ["agg", ""], ["edt", ""], ["carrera", ""], ["ayuda", ""], ["pdf", ""], ["dt", ""], [1, "rounded", "p-1", "w-5", "text-center", "text-sm", 3, "ngStyle"], ["ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["ngbTooltip", "Ver Actividades", "routerLinkActive", "active", 1, "btn", "btn-outline-teal", "btn-sm", "dripicons-preview", 3, "click"], ["ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "disabled", "click"], ["id", "modalEstudiante", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "text-danger", "mb-4"], [1, "col-md-6"], [1, "mb-3"], [1, "text-danger"], ["type", "text", "name", "carnet", "autocomplete", "off", "formControlName", "carnet", "placeholder", "AA00000", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "name", "nombres", "autocomplete", "off", "formControlName", "nombres", 1, "form-control"], ["type", "tel", "name", "telefono", "autocomplete", "off", "formControlName", "telefono", "placeholder", "####-####", "mask", "0000-0000", 1, "form-control"], ["type", "text", "name", "apellidos", "autocomplete", "off", "formControlName", "apellidos", 1, "form-control"], [1, "col-md-10"], ["formControlName", "carrera", "placeholder", "Seleccione"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-2", "mt-4"], [1, "text-white", "mt-3"], ["type", "button", 1, "btn", "btn-info", "bg-gradient", 3, "click"], [1, "mdi", "mdi-plus", "text-white"], [1, "modal-footer", "mt-5"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-info", 3, "disabled"], ["type", "danger", 3, "dismissible"], [3, "value"], ["type", "button", "aria-hidden", "true", "data-dismiss", "modal", 1, "btn-close", 3, "click"], ["type", "hidden", "name", "id", "autocomplete", "off", "formControlName", "id", 1, "form-control"], ["type", "text", "name", "carnet", "autocomplete", "off", "formControlName", "carnet", 1, "form-control"], [1, "col-md-12"], ["formControlName", "carrera", "placeholder", "Seleccione", "clearAllText", "Clear"], ["id", "modalCarrera", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], ["type", "text", "name", "nombrecarrera", "autocomplete", "off", "formControlName", "nombrecarrera", 1, "form-control"], [1, "modal-footer"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", 2, "text-align", "justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], ["id", "modalEquipo", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], ["formControlName", "pdf", 1, "form-control", "form-select", 3, "change"], ["value", ""]], template: function ListaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](62); return ctx.modal(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](60); return ctx.openModalA(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Filtrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ListaComponent_Template_select_change_21_listener($event) { return ctx.estados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Seleccione");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Inactivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListaComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](54); return ctx.openModal(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "thead", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Carnet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Carrera");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "tbody", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, ListaComponent_tr_52_Template, 19, 14, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, ListaComponent_ng_template_53_Template, 70, 26, "ng-template", 27, 28, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, ListaComponent_ng_template_55_Template, 65, 24, "ng-template", 27, 29, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, ListaComponent_ng_template_57_Template, 24, 6, "ng-template", 27, 30, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, ListaComponent_ng_template_59_Template, 42, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, ListaComponent_ng_template_61_Template, 25, 5, "ng-template", 27, 32, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, ListaComponent_ng_template_63_Template, 1, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.estudiantes);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, ngx_mask__WEBPACK_IMPORTED_MODULE_14__.MaskDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbAlert, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _actividades_actividades_component__WEBPACK_IMPORTED_MODULE_6__.ActividadesComponent], pipes: [_shared_telefono_formato_pipe__WEBPACK_IMPORTED_MODULE_7__.TelefonoFormatPipe], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQStDaEI7RUFDRSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtBQTdDRjtBQWdEQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUE3Q0Y7QUFnREEsZ0ZBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0REFBQTtBQTdDRjtBQWdEQTtFQUNFLGtCQUFBO0VBQ0ksMERBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUE3Q047QUFpREE7RUFDQyx5QkFBQTtFQUNDLFlBQUE7QUE5Q0Y7QUFrREE7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNJLDBEQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0ksVUFBQTtBQS9DVjtBQWtEQTtFQUNFLHlCQUFBO0FBL0NGIiwiZmlsZSI6Imxpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJ0bi1pY29uLnJvdW5kZWQtY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIC8qIENhbWJpYSBlbCB0YW1hw7FvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgLyogRWxpbWluYSBlbCByZWxsZW5vIHBhcmEgcXVlIHNlYSBjb21wbGV0YW1lbnRlIHJlZG9uZG8gKi9cbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC8qIEFsaW5lYSBlbCBjb250ZW5pZG8gdmVydGljYWxtZW50ZSAqL1xuICBmb250LXNpemU6IDIwcHg7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIGRlbCBpY29ubyBzaSBlcyBuZWNlc2FyaW8gKi9cbn1cblxuLmJ0bi10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBFc3RhYmxlY2UgZWwgZm9uZG8gY29tbyB0cmFuc3BhcmVudGUgKi9cbiAgYm9yZGVyOiBub25lO1xuICAvKiBFbGltaW5hIGVsIGJvcmRlIHNpIGVzIG5lY2VzYXJpbyAqL1xuICBjb2xvcjogIzAwN2JmZjtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xufVxuXG4vKiBQZXJzb25hbGl6YSBlbCBjb2xvciBkZSB0ZXh0byBjdWFuZG8gc2UgcGFzYSBlbCBjdXJzb3IgcG9yIGVuY2ltYSBkZWwgYm90w7NuICovXG4uYnRuLXRyYW5zcGFyZW50OmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gYWwgcGFzYXIgZWwgY3Vyc29yIHBvciBlbmNpbWEgKi9cbn1cblxuLmNsb3NlQSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogRXN0YWJsZWNlciBwb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBwb3NpY2lvbmFyIGVsIGJvdMOzbiAqL1xuICB0b3A6IDI1cHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBwYXJ0ZSBzdXBlcmlvciAqL1xuICBsZWZ0OiA3NTBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIGl6cXVpZXJkYSAqL1xufVxuXG4ubW9kYWwtaGVhZGVyQSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm1vZGFsLXRpdGxlQSB7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gZW4gZWwgZW5jYWJlemFkbyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyMHB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogMTJweDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlMDAwMDtcbn0iXX0= */"] });


/***/ }),

/***/ 57631:
/*!*************************************************!*\
  !*** ./src/app/shared/telefono-formato.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonoFormatPipe": () => (/* binding */ TelefonoFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class TelefonoFormatPipe {
    transform(value) {
        // Verifica que el valor sea una cadena válida y tenga al menos 8 dígitos
        if (typeof value !== 'string' || value.length < 8) {
            return value;
        }
        // Formatea el número de teléfono en "7879-8787"
        return `${value.substr(0, 4)}-${value.substr(4)}`;
    }
}
TelefonoFormatPipe.ɵfac = function TelefonoFormatPipe_Factory(t) { return new (t || TelefonoFormatPipe)(); };
TelefonoFormatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "telefonoFormat", type: TelefonoFormatPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_estudiante_estudiante_module_ts.js.map