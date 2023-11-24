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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _models_estudiante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/estudiante */ 21285);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/estudiante.service */ 93557);
/* harmony import */ var _actividad_service_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actividad/service/actividad.service */ 14511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);













const _c0 = function (a0, a1, a2) { return { " bg-success": a0, " bg-warning": a1, " bg-info": a2 }; };
function ListadetalleComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListadetalleComponent_tr_21_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const x_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.cambiarEstado(x_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 9, x_r1.fecha, "EEEE dd, MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](x_r1.horaInicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](x_r1.horaFin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", x_r1.edificio, "-", x_r1.nivel, " ", x_r1.espacioFisico, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](12, _c0, x_r1.estado === "Finalizado", x_r1.estado === "Pendiente", x_r1.estado === "Ejecucion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](x_r1.estado);
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
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
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
                confirmButtonColor: "#a90000",
                cancelButtonColor: '#343a40',
                confirmButtonText: 'Sí, cambiar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.cambiarEstadosActividades(this.idActividadParam, 'Inactivo', this.id, 'Finalizado');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: 'El estado ha sido modificado',
                        icon: 'success',
                    });
                    //this.reload();
                }
                else if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        confirmButtonColor: "#a90000",
                        title: "Información",
                        text: `Cambios no aplicados`,
                        icon: "info",
                    });
                }
            });
        }
        else if (detalleSeleccionado.estado == 'Ejecucion') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: '¿Está seguro de modificar el estado? ',
                text: `Esto se puede revertir`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: "#a90000",
                cancelButtonColor: '#343a40',
                confirmButtonText: 'Sí, cambiar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.cambiarEstadosActividades(this.idActividadParam, 'Inactivo', this.id, 'Finalizado');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: 'El estado ha sido modificado',
                        icon: 'success',
                    });
                    //this.reload();
                }
                else if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        confirmButtonColor: "#a90000",
                        title: "Información",
                        text: `Cambios no aplicados`,
                        icon: "info",
                    });
                }
            });
        }
        else if (detalleSeleccionado.estado == 'Finalizado') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: '¿Está seguro de modificar el estado? ',
                text: `Esto se puede revertir`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: "#a90000",
                cancelButtonColor: '#343a40',
                confirmButtonText: 'Sí, cambiar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.cambiarEstadosActividades(this.idActividadParam, 'Activo', this.id, 'Pendiente');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: 'El estado ha sido modificado',
                        icon: 'success',
                    });
                    // this.reload();
                }
                else if (result.isDenied) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        confirmButtonColor: "#a90000",
                        title: "Información",
                        text: `Cambios no aplicados`,
                        icon: "info",
                    });
                }
            });
        }
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
ListadetalleComponent.ɵfac = function ListadetalleComponent_Factory(t) { return new (t || ListadetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_actividad_service_actividad_service__WEBPACK_IMPORTED_MODULE_5__.ActividadService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
ListadetalleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListadetalleComponent, selectors: [["app-listadetalle"]], viewQuery: function ListadetalleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, inputs: { idActividad: "idActividad", estudianteId: "estudianteId" }, decls: 22, vars: 3, consts: [[1, "card"], [1, "card-body"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "w-5", "p-1", "rounded", "text-white", "text-center", 3, "ngClass"], ["ngbTooltip", "Cambia Estado", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-clockwise", 3, "click"]], template: function ListadetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Hora inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Hora fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ListadetalleComponent_tr_21_Template, 17, 16, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.detalles);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRldGFsbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_estudiante_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/estudiante.service */ 93557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _listadetalle_listadetalle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../listadetalle/listadetalle.component */ 83239);










const _c0 = function (a0, a1) { return { " bg-info": a0, " bg-danger": a1 }; };
function ActividadesComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActividadesComponent_tr_21_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const x_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23); return ctx_r7.OpenDetalle(_r1, x_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, x_r5.estado === "Activo", x_r5.estado === "Inactivo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r5.estado);
} }
function ActividadesComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Lista detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActividadesComponent_ng_template_22_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const modal_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return modal_r9.dismiss("Cross click") || ctx_r10.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-listadetalle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("idActividad", ctx_r2.estudent.idactividad)("estudianteId", ctx_r2.id);
} }
function ActividadesComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActividadesComponent_ng_template_24_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return modal_r12.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Bot\u00F3n Ver Detalle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Permite ver informaci\u00F3n de los detalles de la actividad seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Bot\u00F3n Cambia Estado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Permite cambiar el estado del detalle de la actividad previamente seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u00BFC\u00F3mo utilizar esta p\u00E1gina?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Primeramente debe seleccionar el bot\u00F3n Ver Detalle de la actividad para ver la lista de los detalles especialmente de la actividad seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "En el caso de querer editar el estado de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, ", al seleccionar la actividad se muestra la lista de detalles, si solo tienen uno seleccionar el bot\u00F3n cambia estado para realizar tambi\u00E9n el cambio de estado del detalle y autom\u00E1ticamente al cerrar el modal cambia el estado de la actividad. Si tiene muchos detalles seleccionar el bot\u00F3n cambia estado del d\u00EDa, mes y a\u00F1o actual m\u00E1s reciente para realizar tambi\u00E9n el cambio de estado del detalle y autom\u00E1ticamente al cerrar el modal cambia el estado de la actividad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "En el caso de querer editar el estado de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, ", funciona de la misma manera explicada para el caso anterior.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "strong", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Importante: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " para que la actividad est\u00E9 con estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " solo es v\u00E1lido el detalle que est\u00E1 Finalizado por esta raz\u00F3n solo existe un detalle con ese estado, caso contrario para la actividad con estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, ", es v\u00E1lido si en el detalle existe estado Pendiente o Ejecucion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Nota:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " el bot\u00F3n cambia estado de la lista detall\u00E9 solo edita a estado Pendiente o Finalizado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActividadesComponent_ng_template_24_Template_button_click_57_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return modal_r12.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ActividadesComponent {
    constructor(estudianteServicio, route, modalService, ro) {
        this.estudianteServicio = estudianteServicio;
        this.route = route;
        this.modalService = modalService;
        this.ro = ro;
        this.dtOptions = {};
        this.dtTriggerr = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
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
ActividadesComponent.ɵfac = function ActividadesComponent_Factory(t) { return new (t || ActividadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_1__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ActividadesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ActividadesComponent, selectors: [["app-actividades"]], viewQuery: function ActividadesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 26, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "card"], [1, "card-body"], [1, "col-sm-12", "text-end"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [1, "text-center"], [4, "ngFor", "ngForOf"], ["role", "document"], ["contentEditarEstado", ""], ["ayuda", ""], ["width", "10%", 1, "text-center"], [1, "p-1", "rounded", "text-white", "text-center", 3, "ngClass"], ["ngbTooltip", "Ver Detalle", 1, "btn", "btn-outline-primary", "btn-sm", "dripicons-preview", 3, "click"], ["id", "modalDetallesEstu", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "idActividad", "estudianteId"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", "text-justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]], template: function ActividadesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActividadesComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25); return ctx.openModal(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ActividadesComponent_tr_21_Template, 10, 7, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ActividadesComponent_ng_template_22_Template, 8, 2, "ng-template", 13, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ActividadesComponent_ng_template_24_Template, 59, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTriggerr);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listaActividades);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _listadetalle_listadetalle_component__WEBPACK_IMPORTED_MODULE_3__.ListadetalleComponent], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aWRhZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBQ0Y7QUFFQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFDRjtBQUVBLGdGQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNERBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUNOO0FBR0E7RUFDQyx5QkFBQTtFQUNDLFlBQUE7QUFBRjtBQUlBO0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNJLFVBQUE7QUFEVjtBQUlBO0VBQ0UseUJBQUE7QUFERiIsImZpbGUiOiJhY3RpdmlkYWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5idG4taWNvbi5yb3VuZGVkLWNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICAvKiBDYW1iaWEgZWwgdGFtYcOxbyBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEVsaW1pbmEgZWwgcmVsbGVubyBwYXJhIHF1ZSBzZWEgY29tcGxldGFtZW50ZSByZWRvbmRvICovXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAvKiBBbGluZWEgZWwgY29udGVuaWRvIHZlcnRpY2FsbWVudGUgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xuICAvKiBBanVzdGEgZWwgdGFtYcOxbyBkZWwgaWNvbm8gc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbi5idG4tdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogRXN0YWJsZWNlIGVsIGZvbmRvIGNvbW8gdHJhbnNwYXJlbnRlICovXG4gIGJvcmRlcjogbm9uZTtcbiAgLyogRWxpbWluYSBlbCBib3JkZSBzaSBlcyBuZWNlc2FyaW8gKi9cbiAgY29sb3I6ICMwMDdiZmY7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cbn1cblxuLyogUGVyc29uYWxpemEgZWwgY29sb3IgZGUgdGV4dG8gY3VhbmRvIHNlIHBhc2EgZWwgY3Vyc29yIHBvciBlbmNpbWEgZGVsIGJvdMOzbiAqL1xuLmJ0bi10cmFuc3BhcmVudDpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGFsIHBhc2FyIGVsIGN1cnNvciBwb3IgZW5jaW1hICovXG59XG5cbi5jbG9zZUEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyNXB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogNzUwcHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBpenF1aWVyZGEgKi9cbn1cblxuLm1vZGFsLWhlYWRlckEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMDAwO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5tb2RhbC10aXRsZUEge1xuICBjb2xvcjogI2ZmZjtcbiAgLyogQ29sb3IgZGVsIHRleHRvIGVuIGVsIGVuY2FiZXphZG8gKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBFc3RhYmxlY2VyIHBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHBvc2ljaW9uYXIgZWwgYm90w7NuICovXG4gIHRvcDogMjBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIHN1cGVyaW9yICovXG4gIGxlZnQ6IDEycHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG59Il19 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constantes/constantesproyecto */ 58498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/estudiante.service */ 93557);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _actividades_actividades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actividades/actividades.component */ 59678);
/* harmony import */ var _shared_telefono_formato_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/telefono-formato.pipe */ 57631);



















const _c0 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
function ListaComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "telefonoFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_tr_53_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const data_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](57); return ctx_r15.openModalEdt(_r3, data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_tr_53_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const data_r13 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r17.openDetalle(data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_tr_53_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const data_r13 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r18.eliminar(data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r13.carnet);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", data_r13.nombres, " ", data_r13.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 9, data_r13.telefono));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r13.nombrecarrera);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](11, _c0, data_r13.estado === "Activo" ? "#197DDA" : data_r13.estado === "Inactivo" ? "#f46a6a" : "transparent", data_r13.estado === "N/A" ? "#212529" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r13.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", data_r13.usuario === true);
} }
function ListaComponent_ng_template_54_ngb_alert_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngb-alert", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r20.error);
} }
function ListaComponent_ng_template_54_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Formato no valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r23.error);
} }
function ListaComponent_ng_template_54_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Formato no valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_ng_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", x_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](x_r35.nombrecarrera);
} }
function ListaComponent_ng_template_54_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Estudiante");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_54_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); const modal_r19 = restoredCtx.$implicit; return modal_r19.dismiss("Cross click"); })("click", function ListaComponent_ng_template_54_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r38.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_54_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r39.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ListaComponent_ng_template_54_ngb_alert_7_Template, 2, 2, "ngb-alert", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Carnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ListaComponent_ng_template_54_span_19_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ListaComponent_ng_template_54_span_20_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ListaComponent_ng_template_54_span_21_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, ListaComponent_ng_template_54_span_29_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ListaComponent_ng_template_54_span_30_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, ListaComponent_ng_template_54_span_31_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ListaComponent_ng_template_54_span_40_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ListaComponent_ng_template_54_span_41_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ListaComponent_ng_template_54_span_49_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, ListaComponent_ng_template_54_span_50_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, ListaComponent_ng_template_54_span_51_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, ListaComponent_ng_template_54_ng_option_58_Template, 2, 2, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, ListaComponent_ng_template_54_span_60_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_54_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](59); return ctx_r40.openModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_54_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r41.reset(); })("click", function ListaComponent_ng_template_54_Template_button_click_66_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); const modal_r19 = restoredCtx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, ListaComponent_ng_template_54_div_70_Template, 4, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r2.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r2.esCampoValido("carnet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.formulario.get("carnet")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.formulario.get("carnet")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r2.esCampoValido("nombres"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r2.formulario.get("nombres")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r2.formulario.get("nombres")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r2.formulario.get("nombres")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r2.esCampoValido("telefono"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r2.formulario.get("telefono")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r2.formulario.get("telefono")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r2.esCampoValido("apellidos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r2.formulario.get("apellidos")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r2.formulario.get("apellidos")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r2.formulario.get("apellidos")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r2.esCampoValido("carrera"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.carreras);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx_r2.formulario.get("carrera")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r2.formulario.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showLoading);
} }
function ListaComponent_ng_template_56_ngb_alert_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngb-alert", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r44.error);
} }
function ListaComponent_ng_template_56_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Formato no valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "4 caracteres m\u00EDnimos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_ng_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", x_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](x_r57.nombrecarrera);
} }
function ListaComponent_ng_template_56_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Estudiante");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_56_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59); const modal_r43 = restoredCtx.$implicit; return modal_r43.dismiss("Cross click"); })("click", function ListaComponent_ng_template_56_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r60.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_56_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r61.editar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ListaComponent_ng_template_56_ngb_alert_7_Template, 2, 2, "ngb-alert", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Carnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ListaComponent_ng_template_56_span_20_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ListaComponent_ng_template_56_span_28_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, ListaComponent_ng_template_56_span_29_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ListaComponent_ng_template_56_span_30_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, ListaComponent_ng_template_56_span_39_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ListaComponent_ng_template_56_span_40_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ListaComponent_ng_template_56_span_48_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ListaComponent_ng_template_56_span_49_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, ListaComponent_ng_template_56_span_50_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "ng-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, ListaComponent_ng_template_56_ng_option_57_Template, 2, 2, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, ListaComponent_ng_template_56_span_59_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_56_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r62.reset(); })("click", function ListaComponent_ng_template_56_Template_button_click_61_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59); const modal_r43 = restoredCtx.$implicit; return modal_r43.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, ListaComponent_ng_template_56_div_65_Template, 4, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r4.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r4.esCampoValido("carnet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.formulario.get("carnet")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r4.esCampoValido("nombres"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r4.formulario.get("nombres")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r4.formulario.get("nombres")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r4.formulario.get("nombres")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r4.esCampoValido("telefono"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r4.formulario.get("telefono")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r4.formulario.get("telefono")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r4.esCampoValido("apellidos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r4.formulario.get("apellidos")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx_r4.formulario.get("apellidos")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r4.formulario.get("apellidos")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r4.esCampoValido("carrera"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.carreras);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx_r4.formulario.get("carrera")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r4.formulario.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.showLoading);
} }
function ListaComponent_ng_template_58_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_58_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_58_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68); const modal_r64 = restoredCtx.$implicit; return modal_r64.dismiss("Cross click"); })("click", function ListaComponent_ng_template_58_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r69.fCar.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_58_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r70.guardarCarrera(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Carrera");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ListaComponent_ng_template_58_span_17_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ListaComponent_ng_template_58_span_18_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_58_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r71.fCar.reset(); })("click", function ListaComponent_ng_template_58_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68); const modal_r64 = restoredCtx.$implicit; return modal_r64.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r6.fCar);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r6.valid("nombrecarrera"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r6.fCar.get("nombrecarrera")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r6.fCar.get("nombrecarrera")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r6.fCar.valid);
} }
function ListaComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h1", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_60_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75); const modal_r73 = restoredCtx.$implicit; return modal_r73.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h2", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Ventana de Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u00BFC\u00F3mo utilizar esta p\u00E1gina?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " abre una ventana modal donde se solicitan ciertos datos para registrar a los estudiantes que har\u00E1n uso del sistema.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "La informaci\u00F3n previamente ingresada de un estudiante puede ser modificada al presionar el bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Ver Actividades");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, ", muestra un historial de actividades que el estudiante ha realizado o sigue en proceso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " El bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, ", permite eliminar un estudiante que no tenga usuario.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Filtrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " permite actualizar la tabla de estudiantes seg\u00FAn el estado de su usuario dentro del sistema. Por defecto, al registrar un estudiante por primera vez, no tendr\u00E1 ning\u00FAn estado en usuario.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "strong", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Importante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, " el carnet de estudiante no puede ser modificado una vez ha sido guardado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_60_Template_button_click_40_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75); const modal_r73 = restoredCtx.$implicit; return modal_r73.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_62_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Seleccione una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_62_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ListaComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "PDF Estudiantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_62_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r81); const modal_r77 = restoredCtx.$implicit; return modal_r77.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ListaComponent_ng_template_62_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r82.imprimir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ListaComponent_ng_template_62_Template_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r81); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r83.generar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Seleccione");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Inactivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ListaComponent_ng_template_62_span_19_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_ng_template_62_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r81); const modal_r77 = restoredCtx.$implicit; return modal_r77.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Generar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ListaComponent_ng_template_62_div_25_Template, 4, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r10.fP);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r10.seleccionar("pdf"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r10.fP.get("pdf")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r10.fP.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.showLoading);
} }
function ListaComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-actividades");
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
        this.showLoading = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.dtTriggerr = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(4),
                ],
            ],
            carnet: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCarnet)]],
            apellidos: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(4),
                ],
            ],
            carrera: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            telefono: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.telefonoRegex)]],
            id: [""],
        });
    }
    inifC() {
        return this.fb.group({
            nombrecarrera: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(src_app_constantes_constantesproyecto__WEBPACK_IMPORTED_MODULE_3__.isCaracter),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(4),
                ],
            ],
        });
    }
    inifP() {
        return this.fbC.group({
            pdf: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ,]],
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
        this.showLoading = true;
        this.estudianteServicio.estudiantes().subscribe((resp) => {
            this.showLoading = false;
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
    }
    openModalA(content) {
        this.modalService.open(content, {
            keyboard: false,
            scrollable: true,
            size: "lg",
        });
    }
    modal(content) {
        this.modalService.open(content, { keyboard: false, size: "sm", backdrop: 'static', });
    }
    guardar() {
        this.showLoading = true;
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
            this.showLoading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                confirmButtonColor: "#a90000",
                title: "Advertencia",
                text: `Teléfono ya registrado`,
                icon: "warning",
            });
            return;
        }
        else {
            this.estudianteServicio
                .guardar(this.estudiante)
                .subscribe((resp) => {
                if (resp) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: `Almacenado correctamente`,
                        icon: 'success',
                    });
                    this.reload();
                    this.modalService.dismissAll();
                    this.formulario.reset();
                    this.cargarDatos();
                }
                else {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Advertencia',
                        text: `Ocurrio un problema`,
                        icon: 'warning',
                    });
                }
            }, err => {
                if (err.status == 409) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Advertencia',
                        text: `Ya existe el carnet`,
                        icon: 'warning',
                    });
                }
                if (err.status == 400) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: "Advertencia",
                        text: `Teléfono ya registrado`,
                        icon: "warning",
                    });
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                confirmButtonColor: "#a90000",
                title: 'Error',
                text: "No puede ser eliminado",
                icon: 'warning',
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: "¿Está seguro de eliminar? ",
                text: `Esto no se puede revertir`,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#a90000",
                cancelButtonColor: '#343a40',
                confirmButtonText: "Sí, borrar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.estudianteServicio.eliminar(e).subscribe((resp) => {
                        console.log(resp);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            confirmButtonColor: "#a90000",
                            title: 'Eliminado',
                            text: `El registro ha sido eliminado`,
                            icon: 'success',
                        });
                        this.reload();
                        this.cargarDatos();
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            confirmButtonColor: "#a90000",
                            icon: "error",
                            title: "Error",
                            text: err.error.msg,
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
    }
    editar() {
        this.showLoading = true;
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
                this.showLoading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    confirmButtonColor: "#a90000",
                    title: 'Éxito',
                    text: `Modificado correctamente`,
                    icon: 'success',
                });
                this.reload();
                this.modalService.dismissAll();
                this.reset();
                this.cargarDatos();
            }, (err) => {
                if (err.status === 400) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: "Advertencia",
                        text: `Teléfono ya registrado`,
                        icon: "warning",
                    });
                }
            });
        }
    }
    guardarCarrera() {
        this.showLoading = true;
        const c = new _models_estudiante__WEBPACK_IMPORTED_MODULE_0__.C(this.fCar.get("nombrecarrera").value);
        if (this.existeCarrera(c.nombrecarrera.toLowerCase())) {
            this.showLoading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                confirmButtonColor: "#a90000",
                title: 'Advertencia',
                text: `Ya existe la carrera`,
                icon: 'warning',
            });
            return;
        }
        else {
            this.estudianteServicio.guardarCarrera(c).subscribe((resp) => {
                if (resp) {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Éxito',
                        text: `Almacenado correctamente`,
                        icon: 'success',
                    });
                    this.reload();
                    this.cargarDatos();
                    this.llenarCombo();
                    this.fCar.reset();
                }
                else {
                    this.showLoading = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        confirmButtonColor: "#a90000",
                        title: 'Advertencia',
                        text: `Ocurrio un problema`,
                        icon: 'warning',
                    });
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
        const normalizedNombre = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return this.carreras.some(carrera => {
            const normalizedCarrera = carrera.nombrecarrera.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return normalizedCarrera.toLocaleLowerCase() === normalizedNombre.toLocaleLowerCase();
        });
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
                confirmButtonColor: "#a90000",
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
        this.showLoading = true;
        this.estudianteServicio
            .generarPdfEstudiantexEstado(this.pdf)
            .subscribe((data) => {
            this.showLoading = false;
            const blob = new Blob([data], { type: "application/pdf" });
            const link = document.createElement("a");
            let url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
    descargarPdfFullEquipo() {
        this.showLoading = true;
        this.estudianteServicio
            .generarPdfFullEstudiante()
            .subscribe((data) => {
            this.showLoading = false;
            const blob = new Blob([data], { type: "application/pdf" });
            let url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
}
ListaComponent.ɵfac = function ListaComponent_Factory(t) { return new (t || ListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_estudiante_service__WEBPACK_IMPORTED_MODULE_4__.EstudianteService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router)); };
ListaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ListaComponent, selectors: [["app-lista"]], viewQuery: function ListaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 66, vars: 4, consts: [[1, "container-fluid"], ["title", "Estudiante", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-sm-6"], [1, "col-sm-3", "mb-3"], ["ngbTooltip", "Generar PDF", 1, "btn", "btn-outline-info", "dripicons-print", 3, "click"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "col-sm-4", "mb-3"], ["id", "estadoF", 1, "form-control", "form-select", 3, "change"], ["value", "Seleccione"], ["value", "Activo"], ["value", "Inactivo"], ["value", "todos"], [1, "col-sm-6", "text-end"], [1, "btn", "btn-info", "btn-rounded", "bg-gradient", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "bg-light", "bg-gradient"], [1, ""], [4, "ngFor", "ngForOf"], ["role", "document"], ["agg", ""], ["edt", ""], ["carrera", ""], ["ayuda", ""], ["pdf", ""], ["dt", ""], [1, "rounded", "p-1", "w-5", "text-center", "text-sm", 3, "ngStyle"], ["ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["ngbTooltip", "Ver Actividades", "routerLinkActive", "active", 1, "btn", "btn-outline-teal", "btn-sm", "dripicons-preview", 3, "click"], ["ngbTooltip", "Eliminar", 1, "btn", "btn-outline-danger", "btn-sm", "dripicons-cross", 3, "disabled", "click"], ["id", "modalEstudiante", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "text-danger", "mb-4"], [1, "col-md-6"], [1, "mb-3"], [1, "text-danger"], ["type", "text", "name", "carnet", "autocomplete", "off", "formControlName", "carnet", "placeholder", "AA00000", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "name", "nombres", "autocomplete", "off", "formControlName", "nombres", 1, "form-control"], ["type", "tel", "name", "telefono", "autocomplete", "off", "formControlName", "telefono", "placeholder", "####-####", "mask", "0000-0000", 1, "form-control"], ["type", "text", "name", "apellidos", "autocomplete", "off", "formControlName", "apellidos", 1, "form-control"], [1, "col-md-10"], ["formControlName", "carrera", "placeholder", "Seleccione"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-2", "mt-4"], [1, "text-white", "mt-3"], ["type", "button", 1, "btn", "btn-info", "bg-gradient", 3, "click"], [1, "mdi", "mdi-plus", "text-white"], [1, "modal-footer", "mt-5"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-info", 3, "disabled"], ["class", "spinner-overlay", 4, "ngIf"], ["type", "danger", 3, "dismissible"], [3, "value"], [1, "spinner-overlay"], ["role", "status", 1, "spinner-border", "text-primary", "m-1"], [1, "sr-only"], ["type", "button", "aria-hidden", "true", "data-dismiss", "modal", 1, "btn-close", 3, "click"], ["type", "hidden", "name", "id", "autocomplete", "off", "formControlName", "id", 1, "form-control"], ["type", "text", "name", "carnet", "autocomplete", "off", "formControlName", "carnet", 1, "form-control"], [1, "col-md-12"], ["formControlName", "carrera", "placeholder", "Seleccione", "clearAllText", "Clear"], ["id", "modalCarrera", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], ["type", "text", "name", "nombrecarrera", "autocomplete", "off", "formControlName", "nombrecarrera", 1, "form-control"], [1, "modal-footer"], [1, "modal-header", "bg"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body", 2, "text-align", "justify"], [2, "margin-bottom", "15px"], [1, "fs-5"], [2, "font-size", "15px"], ["id", "modalEquipo", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], ["formControlName", "pdf", 1, "form-control", "form-select", 3, "change"], ["value", ""]], template: function ListaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](63); return ctx.modal(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](61); return ctx.openModalA(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Filtrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ListaComponent_Template_select_change_22_listener($event) { return ctx.estados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Seleccione");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Inactivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ListaComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](55); return ctx.openModal(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "thead", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Carnet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Carrera");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "tbody", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, ListaComponent_tr_53_Template, 19, 14, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, ListaComponent_ng_template_54_Template, 71, 27, "ng-template", 27, 28, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, ListaComponent_ng_template_56_Template, 66, 25, "ng-template", 27, 29, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, ListaComponent_ng_template_58_Template, 24, 6, "ng-template", 27, 30, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, ListaComponent_ng_template_60_Template, 42, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, ListaComponent_ng_template_62_Template, 26, 6, "ng-template", 27, 32, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](64, ListaComponent_ng_template_64_Template, 1, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.estudiantes);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, ngx_mask__WEBPACK_IMPORTED_MODULE_15__.MaskDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAlert, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _actividades_actividades_component__WEBPACK_IMPORTED_MODULE_7__.ActividadesComponent], pipes: [_shared_telefono_formato_pipe__WEBPACK_IMPORTED_MODULE_8__.TelefonoFormatPipe], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  \n  height: 20px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 20px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n}\n.spinner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQStDaEI7RUFDRSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtBQTdDRjtBQWdEQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUE3Q0Y7QUFnREEsZ0ZBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0REFBQTtBQTdDRjtBQWdEQTtFQUNFLGtCQUFBO0VBQ0ksMERBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUE3Q047QUFpREE7RUFDQyx5QkFBQTtFQUNDLFlBQUE7QUE5Q0Y7QUFrREE7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNJLDBEQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0ksVUFBQTtBQS9DVjtBQWtEQTtFQUNFLHlCQUFBO0FBL0NGO0FBa0RBO0VBQ0Usa0JBQUE7RUFBb0IsaURBQUE7RUFDcEIsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQTRDLGtEQUFBO0VBQzVDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFlLDJFQUFBO0FBNUNqQiIsImZpbGUiOiJsaXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5idG4taWNvbi5yb3VuZGVkLWNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICAvKiBDYW1iaWEgZWwgdGFtYcOxbyBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEVsaW1pbmEgZWwgcmVsbGVubyBwYXJhIHF1ZSBzZWEgY29tcGxldGFtZW50ZSByZWRvbmRvICovXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAvKiBBbGluZWEgZWwgY29udGVuaWRvIHZlcnRpY2FsbWVudGUgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xuICAvKiBBanVzdGEgZWwgdGFtYcOxbyBkZWwgaWNvbm8gc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbi5idG4tdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogRXN0YWJsZWNlIGVsIGZvbmRvIGNvbW8gdHJhbnNwYXJlbnRlICovXG4gIGJvcmRlcjogbm9uZTtcbiAgLyogRWxpbWluYSBlbCBib3JkZSBzaSBlcyBuZWNlc2FyaW8gKi9cbiAgY29sb3I6ICMwMDdiZmY7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cbn1cblxuLyogUGVyc29uYWxpemEgZWwgY29sb3IgZGUgdGV4dG8gY3VhbmRvIHNlIHBhc2EgZWwgY3Vyc29yIHBvciBlbmNpbWEgZGVsIGJvdMOzbiAqL1xuLmJ0bi10cmFuc3BhcmVudDpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGFsIHBhc2FyIGVsIGN1cnNvciBwb3IgZW5jaW1hICovXG59XG5cbi5jbG9zZUEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEVzdGFibGVjZXIgcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgcG9zaWNpb25hciBlbCBib3TDs24gKi9cbiAgdG9wOiAyNXB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgbGVmdDogNzUwcHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBpenF1aWVyZGEgKi9cbn1cblxuLm1vZGFsLWhlYWRlckEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUwMDAwO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5tb2RhbC10aXRsZUEge1xuICBjb2xvcjogI2ZmZjtcbiAgLyogQ29sb3IgZGVsIHRleHRvIGVuIGVsIGVuY2FiZXphZG8gKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBFc3RhYmxlY2VyIHBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHBvc2ljaW9uYXIgZWwgYm90w7NuICovXG4gIHRvcDogMjBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIHN1cGVyaW9yICovXG4gIGxlZnQ6IDEycHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG59XG5cbi5zcGlubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIFBvc2ljacOzbiBhYnNvbHV0YSBjb24gcmVzcGVjdG8gYWwgY29udGVuZWRvciAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgLyogRm9uZG8gc2VtaXRyYW5zcGFyZW50ZSBwYXJhIGxhIHJ1ZWRhIGRlIGNhcmdhICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xuICAvKiBBc2VndXJhIHF1ZSBsYSBydWVkYSBkZSBjYXJnYSBlc3TDqSBlbiBsYSBwYXJ0ZSBzdXBlcmlvciBkZWwgZm9ybXVsYXJpbyAqL1xufSJdfQ== */"] });


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