"use strict";(self.webpackChunkserviciosocial=self.webpackChunkserviciosocial||[]).push([[664],{8664:(re,_,s)=>{s.r(_),s.d(_,{PresupuestoModule:()=>ne});var u=s(6019),C=s(6225),p=s(2501),y=s(3405),R=s(1659),m=s.n(R),e=s(3668),k=s(8260),T=s(4522);let I=(()=>{class r{constructor(t){this.http=t,this.url=`${k.N.urlG}/presupuesto`}presupuestos(){return this.http.get(`${this.url}`)}getDetalle(t){return this.http.get(`${this.url}`)}eliminar(t){return this.http.delete(`${this.url}/${t.id}`)}guardar(t){return this.http.post(`${this.url}`,t)}generarPdfPresupuesto(t){return this.http.get(`${this.url}/pdf?id=${t}`,{responseType:"arraybuffer"})}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275inject(T.eN))},r.\u0275prov=e.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var c=s(549),F=s(4576),M=s(1950);function D(r,l){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275elementStart(1,"td",8),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td",8),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"td",8),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"td",8),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"td",8),e.\u0275\u0275elementStart(11,"button",12),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit,d=e.\u0275\u0275nextContext(),g=e.\u0275\u0275reference(23);return d.openModal(g,i)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"button",13),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().descargarPdfParametro(i.id)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"button",14),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().eliminar(i)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&r){const t=l.$implicit,n=l.index;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n+1),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(5,4,t.fecha,"EEEE dd, MMMM yyyy")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.titulo),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("$",t.totalF,"")}}function P(r,l){if(1&r&&(e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275elementStart(1,"td",8),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td",26),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td",26),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"td",26),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&r){const t=l.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.descripcion),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.cantidad),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("$",e.\u0275\u0275pipeBind2(7,4,t.preciounidad,"1.2-2"),""),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1("$",e.\u0275\u0275pipeBind2(10,7,t.total,"1.2-2"),"")}}function w(r,l){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275elementStart(1,"div",16),e.\u0275\u0275elementStart(2,"h1",17),e.\u0275\u0275text(3,"Detalle de Presupuesto"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",18),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t).$implicit.dismiss("Cross click")}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",19),e.\u0275\u0275elementStart(6,"div",20),e.\u0275\u0275elementStart(7,"div",2),e.\u0275\u0275elementStart(8,"div",2),e.\u0275\u0275elementStart(9,"div",21),e.\u0275\u0275elementStart(10,"label",22),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"label",22),e.\u0275\u0275text(13),e.\u0275\u0275pipe(14,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div",23),e.\u0275\u0275elementStart(16,"label",24),e.\u0275\u0275text(17),e.\u0275\u0275pipe(18,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"table",25),e.\u0275\u0275elementStart(20,"thead",7),e.\u0275\u0275elementStart(21,"tr"),e.\u0275\u0275elementStart(22,"th",8),e.\u0275\u0275text(23,"Descripci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th",26),e.\u0275\u0275text(25,"Cantidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th",26),e.\u0275\u0275text(27,"Precio Unidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th",26),e.\u0275\u0275text(29,"Total"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"tbody"),e.\u0275\u0275template(31,P,11,10,"tr",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"div",27),e.\u0275\u0275elementStart(33,"button",28),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t).$implicit.dismiss()}),e.\u0275\u0275text(34," Cerrar "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&r){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(11),e.\u0275\u0275textInterpolate1("T\xedtulo : ",t.presupuesto.titulo,""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Total : $",e.\u0275\u0275pipeBind2(14,5,t.presupuesto.totalF,"1.2-2"),""),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1("Fecha : ",e.\u0275\u0275pipeBind2(18,8,t.presupuesto.fecha,"EEEE dd, MMMM yyyy"),""),e.\u0275\u0275advance(2),e.\u0275\u0275property("dtOptions",t.dtOptionsD),e.\u0275\u0275advance(12),e.\u0275\u0275property("ngForOf",t.presupuesto.detalles)}}let O=(()=>{class r{constructor(t,n){this.presupuestoService=t,this.modalService=n,this.dtOptions={},this.dtOptionsD={},this.dtTrigger=new y.xQ}ngOnInit(){this.breadCrumbItems=[{label:"Presupuesto"},{label:"Lista",active:!0}],this.dtOptions={columnDefs:[{className:"",targets:[0,1,2,3,4]},{orderable:!1,targets:[4]},{searchable:!1,targets:[0,4]},{responsivePriority:1,targets:-1}],lengthMenu:[5,10,20,50],destroy:!0,language:{url:"//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json",lengthMenu:"Mostrar _MENU_ registros",zeroRecords:"Ning\xfan dato encontrado"},pagingType:"full_numbers",responsive:!0},this.cargar(),this.loadTable()}ngOnDestroy(){this.dtTrigger.unsubscribe()}cargar(){this.presupuestoService.presupuestos().subscribe(t=>{this.presupuestos=t,this.dtTrigger.next(null)})}reload(){this.dtElement.dtInstance.then(t=>{this.presupuestos=[],t.destroy()}),this.cargar()}openModal(t,n){this.presupuesto=n,this.modalService.open(t,{size:"lg"})}eliminar(t){m().fire({title:"\xbfEst\xe1 seguro de eliminar? ",text:"Esto no se puede revertir",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, borrar",cancelButtonText:"Cancelar"}).then(n=>{n.isConfirmed?this.presupuestoService.eliminar(t).subscribe(a=>{console.log(a),m().fire("Eliminado","El registro ha sido eliminado","success"),this.reload()},a=>{m().fire({icon:"error",title:"Error",text:a.error.msg})}):n.isDenied&&m().fire("Cambios no aplicados","","info")})}loadTable(){this.dtOptionsD={searching:!1,columnDefs:[{orderable:!1,targets:0},{responsivePriority:1,targets:-1}],lengthMenu:[5,10,20,50],destroy:!0,language:{url:"//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json",lengthMenu:"Mostrar _MENU_ registros",zeroRecords:"Ning\xfan dato encontrado"},pagingType:"full_numbers",responsive:!0}}descargarPdfParametro(t){this.presupuestoService.generarPdfPresupuesto(t).subscribe(n=>{const a=new Blob([n],{type:"application/pdf"});document.createElement("a");let d=URL.createObjectURL(a);window.open(d)})}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(I),e.\u0275\u0275directiveInject(c.FF))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-lista"]],viewQuery:function(t,n){if(1&t&&e.\u0275\u0275viewQuery(p.G,5),2&t){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(n.dtElement=a.first)}},decls:24,vars:4,consts:[[1,"container-fluid"],["title","Presupuesto",3,"breadcrumbItems"],[1,"row"],[1,"card"],[1,"card-body"],[1,"table-responsive"],["datatable","","width","100%",1,"row-border","hover",3,"dtOptions","dtTrigger"],[1,"bg-light","bg-gradient"],[1,""],[4,"ngFor","ngForOf"],["role","document"],["det",""],["ngbTooltip","Ver Detalles",1,"btn","btn-outline-info","btn-sm","dripicons-preview",3,"click"],["ngbTooltip","Generar Pdf",1,"btn","btn-outline-primary","btn-sm","mdi","mdi-file-pdf-box-outline",3,"click"],["ngbTooltip","Eliminar",1,"btn","btn-outline-danger","btn-sm","dripicons-cross",3,"click"],["id","modalDet","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"container"],[1,"col-7"],[1,"form-control","border-0"],[1,"col-5","text-end"],[1,"form-control","border-0","font-weight-bold"],["datatable","","width","100%",1,"row-border","hover",3,"dtOptions"],[1,"text-center"],[1,"modal-footer"],["type","submit","id","btn-save-event",1,"btn","btn-dark",3,"click"]],template:function(t,n){1&t&&(e.\u0275\u0275element(0,"app-loader"),e.\u0275\u0275elementStart(1,"div",0),e.\u0275\u0275element(2,"app-page-title",1),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275elementStart(5,"div",4),e.\u0275\u0275elementStart(6,"div",5),e.\u0275\u0275elementStart(7,"table",6),e.\u0275\u0275elementStart(8,"thead",7),e.\u0275\u0275elementStart(9,"tr"),e.\u0275\u0275elementStart(10,"th",8),e.\u0275\u0275text(11,"N\xb0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"th",8),e.\u0275\u0275text(13,"Fecha"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"th",8),e.\u0275\u0275text(15,"T\xedtulo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"th",8),e.\u0275\u0275text(17,"Total"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"th",8),e.\u0275\u0275text(19,"Acciones"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"tbody",8),e.\u0275\u0275template(21,D,14,7,"tr",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(22,w,35,11,"ng-template",10,11,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("breadcrumbItems",n.breadCrumbItems),e.\u0275\u0275advance(5),e.\u0275\u0275property("dtOptions",n.dtOptions)("dtTrigger",n.dtTrigger),e.\u0275\u0275advance(14),e.\u0275\u0275property("ngForOf",n.presupuestos))},directives:[F.R,M.V,p.G,u.NgForOf,c._L],pipes:[u.DatePipe,u.DecimalPipe],styles:[""]}),r})();var o=s(9133);class V{constructor(l,t,n,a){this.titulo=l,this.idUsuario=t,this.detalles=n,this.fecha=a}}class L{constructor(l,t,n,a,i){this.descripcion=l,this.cantidad=t,this.preciounidad=n,this.total=a,this.id=i}totalx(){return this.cantidad*this.preciounidad}}var $=s(8498),j=s(3120);function N(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Campo requerido "),e.\u0275\u0275elementEnd())}function B(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"4 caracteres m\xednimos "),e.\u0275\u0275elementEnd())}function z(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Campo requerido "),e.\u0275\u0275elementEnd())}function Q(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"4 caracteres m\xednimos "),e.\u0275\u0275elementEnd())}function U(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"No se permiten caracteres especiales "),e.\u0275\u0275elementEnd())}function A(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Campo requerido "),e.\u0275\u0275elementEnd())}function G(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Cantidad m\xednima 1 "),e.\u0275\u0275elementEnd())}function q(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Cantidad m\xe1xima 200 "),e.\u0275\u0275elementEnd())}function J(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Campo requerido "),e.\u0275\u0275elementEnd())}function X(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Cantidad m\xednima 0.01 "),e.\u0275\u0275elementEnd())}function Y(r,l){1&r&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Cantidad m\xe1xima 5000 "),e.\u0275\u0275elementEnd())}function H(r,l){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275elementStart(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"td"),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275elementStart(12,"button",38),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).index;return e.\u0275\u0275nextContext().eliminarFila(i)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&r){const t=l.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.descripcion),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.cantidad),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("$",e.\u0275\u0275pipeBind2(7,4,t.preciounidad,"1.2-2"),""),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1("$",e.\u0275\u0275pipeBind2(10,7,t.totalx(),"1.2-2"),"")}}function K(r,l){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275elementStart(1,"h1",40),e.\u0275\u0275text(2,"Ayuda"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",41),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t).$implicit.dismiss("Cross click")}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",42),e.\u0275\u0275elementStart(5,"div"),e.\u0275\u0275elementStart(6,"h2",43),e.\u0275\u0275text(7,"Ventana de Informaci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"label",44),e.\u0275\u0275elementStart(9,"strong"),e.\u0275\u0275text(10,"\xbfC\xf3mo utilizar esta p\xe1gina?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p",45),e.\u0275\u0275text(12,"Para registrar un presupuesto se debe ingresar un "),e.\u0275\u0275elementStart(13,"strong"),e.\u0275\u0275text(14,"t\xedtulo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(15," que ayuda a identificar el presupuesto y al menos un "),e.\u0275\u0275elementStart(16,"strong"),e.\u0275\u0275text(17,"\xedtem"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(18," del cual se necesita una "),e.\u0275\u0275elementStart(19,"strong"),e.\u0275\u0275text(20,"descripci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(21,", la "),e.\u0275\u0275elementStart(22,"strong"),e.\u0275\u0275text(23,"cantidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(24," a comprar y su "),e.\u0275\u0275elementStart(25,"strong"),e.\u0275\u0275text(26,"precio"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(27," por unidad. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"p",45),e.\u0275\u0275text(29,"El bot\xf3n "),e.\u0275\u0275elementStart(30,"strong"),e.\u0275\u0275text(31,"Agregar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(32," a\xf1ade ese \xedtem a la "),e.\u0275\u0275elementStart(33,"strong"),e.\u0275\u0275text(34,"lista "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(35,"del presupuesto que se muestra en la parte inferior de la p\xe1gina, donde se pueden observar sus detalles y total. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"p",45),e.\u0275\u0275text(37," Los \xedtems agregados a la lista tambi\xe9n pueden ser quitados si se presiona el bot\xf3n "),e.\u0275\u0275elementStart(38,"strong"),e.\u0275\u0275text(39,"Quitar."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"p",45),e.\u0275\u0275text(41,"El bot\xf3n "),e.\u0275\u0275elementStart(42,"strong"),e.\u0275\u0275text(43,"Guardar "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(44,"no estar\xe1 habilitado a menos que se tenga el t\xedtulo y un \xedtem agregado."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"p",45),e.\u0275\u0275text(46,"El "),e.\u0275\u0275elementStart(47,"strong"),e.\u0275\u0275text(48,"Total "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(49,"del presupuesto se muestra en la parte superior y este es la suma del total de los \xedtems agregados."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"p",45),e.\u0275\u0275elementStart(51,"strong",14),e.\u0275\u0275text(52,"Importante: "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(53," una vez guardado el presupuesto no puede ser editado."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(54,"div",46),e.\u0275\u0275elementStart(55,"button",47),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t).$implicit.close("Close click")}),e.\u0275\u0275text(56,"Cerrar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}}const W=[{path:"presupuesto",component:(()=>{class r{constructor(t,n,a,i){this.presupuestoService=t,this.fb=n,this.authService=a,this.modalService=i,this.detalles=[],this.habilitar=!0,this.dtOptions={},this.dtTrigger=new y.xQ,this.formulario=this.inif(),this.formT=this.inifT()}ngOnInit(){this.breadCrumbItems=[{label:"Presupuesto"},{label:"Registro",active:!0}],this.user=this.authService.getUserFromLocalCache(),this.dtOptions={searching:!1,columnDefs:[{orderable:!1,targets:[0,4]},{searchable:!1,targets:[0,4]},{responsivePriority:1,targets:-1}],lengthMenu:[5,10,20,50],destroy:!0,language:{url:"//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json",lengthMenu:"Mostrar _MENU_ registros",zeroRecords:"Ning\xfan dato encontrado"},pagingType:"full_numbers",responsive:!0},this.getDetalles()}inif(){return this.fb.group({descripcion:["",[o.kI.required,o.kI.minLength(4)]],cantidad:["",[o.kI.required,o.kI.min(1),o.kI.max(200)]],precio:["",[o.kI.required,o.kI.min(.01),o.kI.max(5e3)]]})}inifT(){return this.fb.group({titulo:["",[o.kI.required,o.kI.minLength(4),o.kI.pattern($.s2)]]})}esCampoValido(t){const n=this.formulario.get(t);return!(null==n?void 0:n.valid)&&(null==n?void 0:n.touched)?"is-invalid":(null==n?void 0:n.touched)?"is-valid":""}esCampoValidoT(t){const n=this.formT.get(t);return!(null==n?void 0:n.valid)&&(null==n?void 0:n.touched)?"is-invalid":(null==n?void 0:n.touched)?"is-valid":""}agregar(){const t=this.formulario.get("descripcion").value,n=this.formulario.get("cantidad").value,a=this.formulario.get("precio").value;this.detalle=new L(t,n,a),this.detalles.push(this.detalle),this.reload(),this.formulario.reset()}guardar(){const t=this.formT.get("titulo").value;if(this.presupuesto=new V(t,this.user.id,this.detalles),!this.formT.valid)return m().fire({position:"center",title:"Falta t\xedtulo de presupuesto",icon:"warning"}),Object.values(this.formT.controls).forEach(n=>n.markAsTouched());m().fire({title:" \xbfEst\xe1 seguro de guardar? ",text:"Una vez guardado el presupuesto no puede ser editado",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, guardar",cancelButtonText:"Cancelar"}).then(n=>{n.isConfirmed?(this.presupuestoService.guardar(this.presupuesto).subscribe(a=>{m().fire("\xc9xito","Almacenado correctamente","success")}),this.detalles.length=0,this.formulario.reset(),this.formT.reset(),this.reload()):n.isDenied&&m().fire("Cambios no aplicados","","info")})}eliminarFila(t){this.detalles.splice(t,1),this.reload()}ngOnDestroy(){this.dtTrigger.unsubscribe()}calcularTotalF(){return this.totalF=0,0==this.detalles.length?this.totalF=0:(this.detalles.forEach(t=>{this.totalF+=t.totalx()}),this.totalF)}limpiar(){this.formulario.get("descripcion").setValue(""),this.formulario.get("cantidad").setValue(""),this.formulario.get("precio").setValue("")}getDetalles(){return this.detalles}ngAfterViewInit(){this.dtTrigger.next()}reload(){this.dtElement.dtInstance.then(t=>{t.destroy(),this.dtTrigger.next()}),this.getDetalles()}openModalA(t){this.modalService.open(t,{keyboard:!1,scrollable:!0,size:"lg"})}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(I),e.\u0275\u0275directiveInject(o.qu),e.\u0275\u0275directiveInject(j.T),e.\u0275\u0275directiveInject(c.FF))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-registro"]],viewQuery:function(t,n){if(1&t&&e.\u0275\u0275viewQuery(p.G,5),2&t){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(n.dtElement=a.first)}},decls:92,vars:28,consts:[[1,"container-fluid"],["title","Presupuesto",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"col-sm-6"],[1,"text-danger","mb-4"],[1,"col-sm-6","text-end"],["type","button","data-toggle","tooltip","ngbTooltip","Ayuda","data-placement","end",1,"btn","btn-info","btn-icon","rounded-circle","btn-transparent",2,"margin-right","+35px",3,"click"],[1,"fa","fa-question-circle","fa-lg"],[3,"formGroup"],[1,"row","mb-1"],[1,"col-sm-4","text-start"],[1,"text-danger"],["type","text","name","titulo","autocomplete","off","formControlName","titulo",1,"form-control"],[1,"invalid-feedback"],[4,"ngIf"],[1,"col-5","text-start"],["id","totalF","name","totalF",1,"pt-1"],[1,"border","p-1"],[1,"float-none","w-auto","p-2",2,"font-size","12px"],[1,"col-sm-5","text-start"],["type","text","name","descripcion","autocomplete","off","formControlName","descripcion",1,"form-control"],[1,"col-sm-2"],["type","number","name","cantidad","min","1","max","200","step","1","autocomplete","off","formControlName","cantidad",1,"form-control"],["type","number","name","precio","min","0.01","max","5000","step","0.01","autocomplete","off","formControlName","precio",1,"form-control"],[1,"col-sm-2","mt-4","ms-4","text-end"],[1,"btn","btn-info","btn-rounded","bg-gradient",3,"disabled","click"],[1,"mdi","mdi-plus","me-1"],[3,"ngSubmit"],[1,"col-sm-1","mt-4"],["type","submit",1,"btn","btn-info","bg-gradient",3,"disabled"],[1,"mb-0","mt-3"],["datatable","","width","100%",1,"row-border","hover",3,"dtOptions","dtTrigger"],[1,"bg-light","bg-gradient"],[4,"ngFor","ngForOf"],["ayuda",""],["ngbTooltip","Quitar",1,"btn","btn-outline-danger","btn-sm","dripicons-cross",3,"click"],[1,"modal-header","bg"],[1,"modal-title","text-white"],["type","button","aria-label","Close",1,"close",3,"click"],[1,"modal-body",2,"text-align","justify"],[2,"margin-bottom","15px"],[1,"fs-5"],[2,"font-size","15px"],[1,"modal-footer"],["type","button",1,"btn","btn-dark",3,"click"]],template:function(t,n){if(1&t){const a=e.\u0275\u0275getCurrentView();e.\u0275\u0275element(0,"app-loader"),e.\u0275\u0275elementStart(1,"div",0),e.\u0275\u0275element(2,"app-page-title",1),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275elementStart(5,"div",4),e.\u0275\u0275elementStart(6,"div",5),e.\u0275\u0275elementStart(7,"div",2),e.\u0275\u0275elementStart(8,"div",6),e.\u0275\u0275elementStart(9,"label",7),e.\u0275\u0275text(10," * Campo obligatorio"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",8),e.\u0275\u0275elementStart(12,"button",9),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(a);const d=e.\u0275\u0275reference(91);return n.openModalA(d)}),e.\u0275\u0275element(13,"i",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"form",11),e.\u0275\u0275elementStart(15,"div",12),e.\u0275\u0275elementStart(16,"div",13),e.\u0275\u0275elementStart(17,"label"),e.\u0275\u0275text(18,"T\xedtulo de presupuesto"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"span",14),e.\u0275\u0275text(20," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(21,"input",15),e.\u0275\u0275elementStart(22,"div",16),e.\u0275\u0275template(23,N,2,0,"span",17),e.\u0275\u0275template(24,B,2,0,"span",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",18),e.\u0275\u0275elementStart(26,"label"),e.\u0275\u0275text(27,"Total"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"h2",19),e.\u0275\u0275text(29),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"fieldset",20),e.\u0275\u0275elementStart(31,"legend",21),e.\u0275\u0275text(32,"\xcdtem"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"form",11),e.\u0275\u0275elementStart(34,"div",2),e.\u0275\u0275elementStart(35,"div",22),e.\u0275\u0275elementStart(36,"label"),e.\u0275\u0275text(37,"Descripci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"span",14),e.\u0275\u0275text(39," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(40,"input",23),e.\u0275\u0275elementStart(41,"div",16),e.\u0275\u0275template(42,z,2,0,"span",17),e.\u0275\u0275template(43,Q,2,0,"span",17),e.\u0275\u0275template(44,U,2,0,"span",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"div",24),e.\u0275\u0275elementStart(46,"label"),e.\u0275\u0275text(47,"Cantidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(48,"span",14),e.\u0275\u0275text(49," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(50,"input",25),e.\u0275\u0275elementStart(51,"div",16),e.\u0275\u0275template(52,A,2,0,"span",17),e.\u0275\u0275template(53,G,2,0,"span",17),e.\u0275\u0275template(54,q,2,0,"span",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(55,"div",24),e.\u0275\u0275elementStart(56,"label"),e.\u0275\u0275text(57,"Precio/Unidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"span",14),e.\u0275\u0275text(59," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(60,"input",26),e.\u0275\u0275elementStart(61,"div",16),e.\u0275\u0275template(62,J,2,0,"span",17),e.\u0275\u0275template(63,X,2,0,"span",17),e.\u0275\u0275template(64,Y,2,0,"span",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(65,"div",27),e.\u0275\u0275elementStart(66,"button",28),e.\u0275\u0275listener("click",function(){return n.agregar()}),e.\u0275\u0275element(67,"i",29),e.\u0275\u0275text(68,"Agregar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(69,"form",30),e.\u0275\u0275listener("ngSubmit",function(){return n.guardar()}),e.\u0275\u0275elementStart(70,"div",31),e.\u0275\u0275elementStart(71,"button",32),e.\u0275\u0275text(72,"Guardar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(73,"div",2),e.\u0275\u0275elementStart(74,"div",33),e.\u0275\u0275elementStart(75,"table",34),e.\u0275\u0275elementStart(76,"thead",35),e.\u0275\u0275elementStart(77,"tr"),e.\u0275\u0275elementStart(78,"th"),e.\u0275\u0275text(79,"Descripci\xf3n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(80,"th"),e.\u0275\u0275text(81,"Cantidad"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(82,"th"),e.\u0275\u0275text(83,"Precio Unitario"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(84,"th"),e.\u0275\u0275text(85,"Total"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(86,"th"),e.\u0275\u0275text(87,"Acciones"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(88,"tbody"),e.\u0275\u0275template(89,H,13,10,"tr",36),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(90,K,57,0,"ng-template",null,37,e.\u0275\u0275templateRefExtractor)}if(2&t){let a,i,d,g,f,h,E,b,v,x,S;e.\u0275\u0275advance(2),e.\u0275\u0275property("breadcrumbItems",n.breadCrumbItems),e.\u0275\u0275advance(12),e.\u0275\u0275property("formGroup",n.formT),e.\u0275\u0275advance(7),e.\u0275\u0275classMap(n.esCampoValidoT("titulo")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",null==(a=n.formT.get("titulo"))||null==a.errors?null:a.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(i=n.formT.get("titulo"))||null==i.errors?null:i.errors.minlength),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("$",n.calcularTotalF(),""),e.\u0275\u0275advance(4),e.\u0275\u0275property("formGroup",n.formulario),e.\u0275\u0275advance(7),e.\u0275\u0275classMap(n.esCampoValido("descripcion")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",null==(d=n.formulario.get("descripcion"))||null==d.errors?null:d.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(g=n.formulario.get("descripcion"))||null==g.errors?null:g.errors.minlength),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(f=n.formulario.get("descripcion"))||null==f.errors?null:f.errors.pattern),e.\u0275\u0275advance(6),e.\u0275\u0275classMap(n.esCampoValido("cantidad")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",null==(h=n.formulario.get("cantidad"))||null==h.errors?null:h.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(E=n.formulario.get("cantidad"))||null==E.errors?null:E.errors.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(b=n.formulario.get("cantidad"))||null==b.errors?null:b.errors.max),e.\u0275\u0275advance(6),e.\u0275\u0275classMap(n.esCampoValido("precio")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",null==(v=n.formulario.get("precio"))||null==v.errors?null:v.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(x=n.formulario.get("precio"))||null==x.errors?null:x.errors.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(S=n.formulario.get("precio"))||null==S.errors?null:S.errors.max),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",!n.formulario.valid),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",0==n.detalles.length||!n.formT.valid),e.\u0275\u0275advance(4),e.\u0275\u0275property("dtOptions",n.dtOptions)("dtTrigger",n.dtTrigger),e.\u0275\u0275advance(14),e.\u0275\u0275property("ngForOf",n.detalles)}},directives:[F.R,M.V,c._L,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,u.NgIf,o.qQ,o.Fd,o.wV,o.F,p.G,u.NgForOf],pipes:[u.DecimalPipe],styles:['@charset "UTF-8";.bg[_ngcontent-%COMP%]{background-color:#6e0000}.btn-icon.rounded-circle[_ngcontent-%COMP%]{width:20px;height:20px;padding:0;line-height:25px;font-size:20px}.btn-transparent[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#007bff}.btn-transparent[_ngcontent-%COMP%]:hover{color:#0056b3}']}),r})()},{path:"lista",component:O}];let Z=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[[C.Bz.forChild(W)],C.Bz]}),r})();var ee=s(8975),te=s(3091);let ne=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.CommonModule,Z,T.JF,o.UX,o.u5,te.v,ee.u3.forRoot(),p.T,c.IJ]]}),r})()}}]);