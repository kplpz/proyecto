"use strict";(self.webpackChunkserviciosocial=self.webpackChunkserviciosocial||[]).push([[417],{3417:(D,p,a)=>{a.r(p),a.d(p,{CategoriaModule:()=>k});var d=a(6019),f=a(6225);class h{constructor(o,t){this.nombre=o,this.id=t}}var l=a(9133),c=a(2501),b=a(1659),m=a.n(b),v=a(3405),C=a(8498),e=a(3668),u=a(549),E=a(540),S=a(2047),x=a(8260),y=a(4522);let M=(()=>{class n{constructor(t){this.http=t,this.url=`${x.N.urlG}/categoria`}categorias(){return this.http.get(`${this.url}`)}guardarCategoria(t){return this.http.post(`${this.url}/guardar`,t)}eliminar(t){return this.http.delete(`${this.url}/${t}`).pipe((0,S.K)(r=>(m().fire("error",r.error.error),(0,E._)(r))))}editar(t){return this.http.put(`${this.url}/${t.id}`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject(y.eN))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var T=a(1950);function F(n,o){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Campo requerido"),e.\u0275\u0275elementEnd())}function I(n,o){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"No valido solo permite texto"),e.\u0275\u0275elementEnd())}function L(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275elementStart(1,"td",29),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275elementStart(6,"button",30),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().paraEdit(s)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",31),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().eliminar(s)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const t=o.$implicit,r=o.index;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(r+1),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.nombre)}}function O(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",32),e.\u0275\u0275elementStart(1,"h1",33),e.\u0275\u0275text(2,"Ayuda"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",34),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t).$implicit.dismiss("Cross click")}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",35),e.\u0275\u0275elementStart(5,"div",36),e.\u0275\u0275elementStart(6,"h2",37),e.\u0275\u0275text(7,"Ventana de Informaci\xf3n de Categor\xeda"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"ul",38),e.\u0275\u0275elementStart(9,"p"),e.\u0275\u0275text(10,"Muestra una tabla que contiene una lista de todas las categor\xedas almacenadas."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"h4"),e.\u0275\u0275text(12,"Bot\xf3n Guardar:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(13," Permite incluir una nueva categor\xeda a la lista. Al hacer clic en este bot\xf3n, podr\xe1 ingresar el nombre de la categor\xeda para poder ser almacenada la informaci\xf3n en la base de datos. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"ul",38),e.\u0275\u0275elementStart(15,"h4"),e.\u0275\u0275text(16,"Bot\xf3n Editar:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(17," Permite actualizar el nombre de la categor\xeda, facilitando la gesti\xf3n eficiente de la informaci\xf3n. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"ul",38),e.\u0275\u0275elementStart(19,"h4"),e.\u0275\u0275text(20,"Bot\xf3n Eliminar:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(21,' Permite eliminar de manera permanente la categor\xeda. Esta acci\xf3n suele ser irreversible, lo que significa que una vez que se presiona el bot\xf3n "Eliminar" y se confirma la acci\xf3n, el elemento seleccionado se borra y no se prodra revertir dicha acci\xf3n. '),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"div",39),e.\u0275\u0275elementStart(23,"button",40),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t).$implicit.close("Close click")}),e.\u0275\u0275text(24,"Cerrar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}}const w=[{path:"lista",component:(()=>{class n{constructor(t,r,i){this.modalService=t,this.categoriaService=r,this.fb=i,this.categorias=[],this.dtOptions={},this.dtTrigger=new v.xQ,this.formulario=this.inifc()}ngOnInit(){this.breadCrumbItems=[{label:"Listado"}],this.dtOptions={columnDefs:[{orderable:!1,targets:[0,2]},{searchable:!1,targets:[0,2]},{responsivePriority:1,targets:-1}],lengthMenu:[5,10,20,50],destroy:!0,language:{url:"//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json",lengthMenu:"Mostrar _MENU_ registros",zeroRecords:"Ning\xfan dato encontrado"},pagingType:"full_numbers",responsive:!0},this.cargarDatos()}inifc(){return this.fb.group({nombre:["",[l.kI.required,l.kI.pattern(C.s2)]]})}cargarDatos(){this.categoriaService.categorias().subscribe(t=>{this.categorias=t,this.dtTrigger.next(null),this.categoria=null})}esCampoValido(t){const r=this.formulario.get(t);return!(null==r?void 0:r.valid)&&(null==r?void 0:r.touched)?"is-invalid":(null==r?void 0:r.touched)?"is-valid":""}push(){null!=this.categoria?this.editar():this.guardar()}guardar(){return this.categoria=new h(this.formulario.get("nombre").value),this.existe(this.categoria.nombre.toLowerCase()||this.categoria.nombre.toUpperCase())?(m().fire("Error","Ya existe la categor\xeda","error"),this.formulario.reset(),this.reload()):this.categoriaService.guardarCategoria(this.categoria).subscribe(t=>{t?(m().fire("\xc9xito","Almacenado correctamente","success"),this.reload(),this.formulario.reset()):m().fire("Ocurrio un problema","","warning")}),this.formulario.reset(),Object.values(this.formulario.controls).forEach(t=>t.markAsTouched())}paraEdit(t){this.formulario.patchValue(t),this.categoria=t}editar(){this.categoria.nombre=this.formulario.controls.nombre.value,this.categoriaService.editar(this.categoria).subscribe(t=>{m().fire("\xc9xito","Modificado correctamente","success"),this.reload(),this.formulario.get("nombre").setValue("")},t=>{m().fire({title:"Error",text:"Ya existe la categor\xeda",icon:"error"})}),this.formulario.reset()}eliminar(t){m().fire({title:"\xbfEst\xe1 seguro de eliminar? ",text:"Esto no se puede revertir",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, borrar",cancelButtonText:"Cancelar"}).then(r=>{r.isConfirmed?(m().fire("Error","El registro no puede ser eliminado","warning"),this.categoriaService.eliminar(t.id).subscribe(i=>{m().fire("Eliminado","El registro ha sido eliminado","success"),this.formulario.reset(),this.reload()})):r.isDenied&&m().fire("Cambios no aplicados","","info")})}verificar(t){return this.categorias.some(r=>r.id===t)}reload(){this.dtElement.dtInstance.then(t=>{this.categorias=[],t.destroy(),this.cargarDatos()})}existe(t){const r=t.toLowerCase();return this.categorias.some(i=>i.nombre.toLowerCase()===r)}openModalA(t){this.modalService.open(t,{keyboard:!1,scrollable:!0,size:"lg"})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(u.FF),e.\u0275\u0275directiveInject(M),e.\u0275\u0275directiveInject(l.qu))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-listar-categoria"]],viewQuery:function(t,r){if(1&t&&e.\u0275\u0275viewQuery(c.G,5),2&t){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(r.dtElement=i.first)}},decls:43,vars:10,consts:[[1,"container-fluid"],["title","Categoria",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],[1,"col-sm-12"],[1,"text-sm-end","mb-3"],["type","button","data-toggle","tooltip","ngbTooltip","Ayuda","data-placement","end",1,"btn","btn-info","btn-icon","rounded-circle","btn-transparent",2,"margin-right","+35px",3,"click"],[1,"fa","fa-question-circle","fa-lg"],[1,"col-3"],[1,"text-danger","mb-4"],[1,"col-9"],[3,"formGroup","ngSubmit"],[1,"row","mb-5"],[1,"col","text-start"],[1,"text-danger"],["type","text","name","nombre","autocomplete","off","formControlName","nombre",1,"form-control"],[1,"invalid-feedback"],[4,"ngIf"],[1,"col","mt-4","ms-4"],[1,"btn","btn-info","bg-gradient",3,"disabled"],["datatable","","width","100%",1,"row-border","hover",3,"dtOptions","dtTrigger"],[1,"table","bg-light","bg-gradient"],[1,""],[1,"align-middle"],[4,"ngFor","ngForOf"],["ayudaCategoria",""],["scope","row"],["ngbTooltip","Editar",1,"btn","btn-outline-info","btn-sm","dripicons-document-edit",3,"click"],["ngbTooltip","Eliminar",1,"btn","btn-outline-danger","btn-sm","dripicons-cross",3,"click"],[1,"modal-headerA"],[1,"modal-titleA"],["type","button","aria-label","Close",1,"closeA",3,"click"],[1,"modal-body"],[2,"text-align","justify"],[2,"margin-bottom","20px"],[2,"font-size","15px"],[1,"modal-footer"],["type","button",1,"btn","btn-dark",3,"click"]],template:function(t,r){if(1&t){const i=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-page-title",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275elementStart(4,"div",4),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275elementStart(6,"div",6),e.\u0275\u0275elementStart(7,"div",7),e.\u0275\u0275elementStart(8,"div",8),e.\u0275\u0275elementStart(9,"button",9),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(i);const g=e.\u0275\u0275reference(42);return r.openModalA(g)}),e.\u0275\u0275element(10,"i",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",2),e.\u0275\u0275elementStart(12,"div",11),e.\u0275\u0275elementStart(13,"label",12),e.\u0275\u0275text(14," * Campo obligator\xedo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div",13),e.\u0275\u0275elementStart(16,"form",14),e.\u0275\u0275listener("ngSubmit",function(){return r.push()}),e.\u0275\u0275elementStart(17,"div",15),e.\u0275\u0275elementStart(18,"div",16),e.\u0275\u0275elementStart(19,"label"),e.\u0275\u0275text(20,"Nombre Categor\xeda"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"span",17),e.\u0275\u0275text(22," *"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(23,"input",18),e.\u0275\u0275elementStart(24,"div",19),e.\u0275\u0275template(25,F,2,0,"span",20),e.\u0275\u0275template(26,I,2,0,"span",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",21),e.\u0275\u0275elementStart(28,"button",22),e.\u0275\u0275text(29," Guardar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"table",23),e.\u0275\u0275elementStart(31,"thead",24),e.\u0275\u0275elementStart(32,"tr"),e.\u0275\u0275elementStart(33,"th",25),e.\u0275\u0275text(34,"N\xb0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"th",26),e.\u0275\u0275text(36,"Nombre"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"th",26),e.\u0275\u0275text(38,"Acciones"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"tbody",25),e.\u0275\u0275template(40,L,8,2,"tr",27),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(41,O,25,0,"ng-template",null,28,e.\u0275\u0275templateRefExtractor)}if(2&t){let i,s;e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",r.breadCrumbItems),e.\u0275\u0275advance(15),e.\u0275\u0275property("formGroup",r.formulario),e.\u0275\u0275advance(7),e.\u0275\u0275classMap(r.esCampoValido("nombre")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",null==(i=r.formulario.get("nombre"))||null==i.errors?null:i.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==(s=r.formulario.get("nombre"))||null==s.errors?null:s.errors.pattern),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",!r.formulario.valid),e.\u0275\u0275advance(2),e.\u0275\u0275property("dtOptions",r.dtOptions)("dtTrigger",r.dtTrigger),e.\u0275\u0275advance(10),e.\u0275\u0275property("ngForOf",r.categorias)}},directives:[T.V,u._L,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,d.NgIf,c.G,d.NgForOf],styles:['@charset "UTF-8";.btn-icon.rounded-circle[_ngcontent-%COMP%]{width:30px;height:30px;padding:0;line-height:25px;font-size:23px}.btn-transparent[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#007bff}.btn-transparent[_ngcontent-%COMP%]:hover{color:#0056b3}.closeA[_ngcontent-%COMP%]{position:absolute;top:25px;left:750px}.modal-headerA[_ngcontent-%COMP%]{background-color:#6e0000;height:80px}.modal-titleA[_ngcontent-%COMP%]{color:#fff;position:absolute;top:20px;left:12px}.modal-footerA[_ngcontent-%COMP%]{background-color:#6e0000;height:50px}']}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[f.Bz.forChild(w)],f.Bz]}),n})();var j=a(3091),V=a(8975);let k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.CommonModule,A,l.UX,u.IJ,j.v,l.u5,V.u3.forRoot(),c.T]]}),n})()}}]);