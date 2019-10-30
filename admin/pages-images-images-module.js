(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-images-images-module"],{

/***/ "./src/app/pages/images/image-form/image-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/images/image-form/image-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb [itens]=\"[{text:'Imagens', link:'/images'}, {text:pageTitle} ]\"></app-bread-crumb>\n\n<app-page-header [page-title]=\"pageTitle\" button-link=\"/images\" button-class=\"btn-light\" button-text=\"<< Voltar\">\n</app-page-header>\n\n<form [formGroup]=\"resourceForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Informações sobre a Imagem\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <!-- name -->\n        <div class=\"form-group col-md-6\">\n          <label for=\"name\">Nome</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n          <app-form-field-error [form-control]=\"resourceForm.get('name')\"></app-form-field-error>\n        </div>\n        <!-- description -->\n        <div class=\"form-group col-md-6\">\n          <label for=\"description\">Descrição</label>\n          <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <!-- systemId -->\n        <div class=\"form-group col-md-6\">\n          <label for=\"idsystem\">Sistema Operacional</label>\n          <select name=\"idsystem\" id=\"idsystem\" class=\"form-control\" formControlName=\"idsystem\">\n            <option *ngFor=\"let system of systems\" [value]=\"system.id\">{{system.name}}</option>\n          </select>\n          <app-form-field-error [form-control]=\"resourceForm.get('idsystem')\"></app-form-field-error>\n        </div>\n        <!-- file -->\n        <div class=\"form-group col-md-6\" *ngIf=\"currentAction == 'new'\">\n          <label for=\"profile\">Arquivo</label>\n          <input type=\"file\" class=\"form-control-file\" id=\"profile\" (change)=\"onSelectedFile($event)\">\n          <app-form-field-error [form-control]=\"resourceForm.get('profile')\"></app-form-field-error>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-12\">\n          <div *ngIf=\"fileUpload.status==='progress'\">\n            <div class=\"progress\" style=\"height: 20px;margin-bottom:20px;\">\n              <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"fileUpload.message\" aria-valuenow=\"25\"\n                aria-valuemin=\"0\" aria-valuemax=\"100\">{{fileUpload.message}}%</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <button [disabled]=\"submittingForm || resourceForm.invalid\" type=\"submit\"\n        class=\"btn btn-primary btn-lg float-right mt-3\">Salvar</button>\n    </div>\n  </div>\n</form>\n<div *ngIf=\"fileUpload.status==='error'\">\n  <div [innerHTML]=\"fileUpload.message\"></div>\n</div>\n<div *ngIf=\"fileUpload.status==='success'\">\n  <img [src]=\"fileUpload.filePath\" height=\"200px\" />\n</div>"

/***/ }),

/***/ "./src/app/pages/images/image-form/image-form.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/images/image-form/image-form.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlcy9pbWFnZS1mb3JtL2ltYWdlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/images/image-form/image-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/images/image-form/image-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFormComponent", function() { return ImageFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_image_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/image.model */ "./src/app/pages/images/models/image.model.ts");
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/image.service */ "./src/app/pages/images/service/image.service.ts");
/* harmony import */ var _systems_service_system_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../systems/service/system.service */ "./src/app/pages/systems/service/system.service.ts");










var ImageFormComponent = /** @class */ (function () {
    function ImageFormComponent(formBuilder, route, router, imageService, systemService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.imageService = imageService;
        this.systemService = systemService;
        this.image = new _models_image_model__WEBPACK_IMPORTED_MODULE_6__["Image"]();
        this.submittingForm = false;
        this.fileUpload = { status: '', message: '', filePath: '' };
    }
    ImageFormComponent.prototype.ngOnInit = function () {
        this.setCurrentAction();
        this.loadImage();
        this.loadSystems();
    };
    ImageFormComponent.prototype.ngAfterContentChecked = function () {
        this.setPageTitle();
    };
    ImageFormComponent.prototype.onSelectedFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.resourceForm.get('profile').setValue(file);
        }
    };
    ImageFormComponent.prototype.submitForm = function () {
        this.submittingForm = true;
        if (this.currentAction === 'new') {
            this.createImage();
        }
        else {
            this.updateImage();
        }
    };
    // Private Methods
    ImageFormComponent.prototype.setCurrentAction = function () {
        if (this.route.snapshot.url[0].path === 'new') {
            this.currentAction = 'new';
            this.newBuildResourceForm();
        }
        else {
            this.currentAction = 'edit';
            this.editBuildResourceForm();
        }
    };
    ImageFormComponent.prototype.newBuildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            profile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [null],
            idsystem: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    ImageFormComponent.prototype.editBuildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            description: [null],
            idsystem: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    ImageFormComponent.prototype.loadImage = function () {
        var _this = this;
        if (this.currentAction === 'edit') {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.imageService.getById(+params.get('id')); })).subscribe(function (image) {
                _this.image = image;
                _this.resourceForm.patchValue(image); // binds loader entry data to resourceForm
            }, function (error) {
                alert('ocorreu um erro no servidor, tente mas tarde.');
            });
        }
    };
    ImageFormComponent.prototype.setPageTitle = function () {
        if (this.currentAction === 'new') {
            this.pageTitle = 'Cadastrar';
        }
        else {
            var imageName = this.image.name || '';
            this.pageTitle = 'Editar: ' + imageName;
        }
    };
    ImageFormComponent.prototype.loadSystems = function () {
        var _this = this;
        this.systemService.getAll().subscribe(function (systems) { return _this.systems = systems; });
    };
    ImageFormComponent.prototype.createImage = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('name', this.resourceForm.get('name').value);
        formData.append('description', this.resourceForm.get('description').value);
        formData.append('profile', this.resourceForm.get('profile').value);
        formData.append('idsystem', this.resourceForm.get('idsystem').value);
        this.imageService.create(formData).subscribe(function (res) { return _this.actionsForSuccess(res); }, function (error) { return _this.actionsForError(error); });
    };
    ImageFormComponent.prototype.updateImage = function () {
        var _this = this;
        var image = Object.assign(new _models_image_model__WEBPACK_IMPORTED_MODULE_6__["Image"](), this.resourceForm.value);
        this.imageService.update(image)
            .subscribe(function (data) { return _this.actionsForSuccess(data); }, function (error) { return _this.actionsForError(error); });
    };
    ImageFormComponent.prototype.actionsForSuccess = function (res) {
        var _this = this;
        this.fileUpload = res;
        console.log(res);
        if (res.id) {
            toastr__WEBPACK_IMPORTED_MODULE_5___default.a.success('Solicitação processada com sucesso!');
            this.submittingForm = false;
            this.router.navigateByUrl('images', { skipLocationChange: true }).then(function () { return _this.router.navigate(['images', res.id, 'edit']); });
        }
    };
    ImageFormComponent.prototype.actionsForError = function (error) {
        toastr__WEBPACK_IMPORTED_MODULE_5___default.a.error('Ocorreu um erro ao processada sua solicitação');
        this.submittingForm = false;
        if (error.status === 422) {
            // this.serverErrorMessages = JSON.parse(error._body).erros;
            //this.serverErrorMessages = ['Falha na comunicação com o servidor, Por favor, tente mais tarde.'];
        }
        else {
            //this.serverErrorMessages = ['Falha na comunicação com o servidor, Por favor, tente mais tarde.'];
        }
    };
    ImageFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-form',
            template: __webpack_require__(/*! ./image-form.component.html */ "./src/app/pages/images/image-form/image-form.component.html"),
            styles: [__webpack_require__(/*! ./image-form.component.scss */ "./src/app/pages/images/image-form/image-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"], _systems_service_system_service__WEBPACK_IMPORTED_MODULE_8__["SystemService"]])
    ], ImageFormComponent);
    return ImageFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/images/image-list/image-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/images/image-list/image-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb [itens]=\"[{text:'Imagens'} ]\"></app-bread-crumb>\r\n\r\n<app-page-header page-title=\"Imagens\" button-link=\"new\" button-class=\"btn-success\" button-text=\"Nova Imagem\"></app-page-header>\r\n\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n  <tr class=\"bg-primary text-light\">\r\n    <th style=\"width: 80%\">Imagem</th>\r\n    <th class=\"text-center\" style=\"width: 20%\">Ações</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let resource of resources\">\r\n      <td>\r\n        <strong>{{resource.name}}</strong><br>\r\n        <small *ngIf=\"resource.description\">{{resource.description}}</small>\r\n      </td>\r\n      <td class=\"text-center\">\r\n        <button [routerLink]=\"[resource.id, 'edit']\" class=\"btn btn-outline-info btn-sm mr-2\">Editar</button>\r\n        <button (click)=\"deleteResource(resource)\" class=\"btn btn-outline-danger btn-sm\">Excluir</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/pages/images/image-list/image-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/images/image-list/image-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlcy9pbWFnZS1saXN0L2ltYWdlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/images/image-list/image-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/images/image-list/image-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/image.service */ "./src/app/pages/images/service/image.service.ts");



var ImageListComponent = /** @class */ (function () {
    function ImageListComponent(imageService) {
        this.imageService = imageService;
        this.resources = [];
    }
    ImageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getAll().subscribe(function (images) { return _this.resources = images.sort(function (a, b) { return b.id - a.id; }); }, function (error) { return alert('Erro ao carregar a lista'); });
    };
    ImageListComponent.prototype.deleteResource = function (resource) {
        var _this = this;
        var mustDelete = confirm('Deseja excluir esse item');
        if (mustDelete) {
            this.imageService.delete(resource.id).subscribe(function () { return _this.resources = _this.resources.filter(function (element) { return element !== resource; }); }, function () { return alert('Erro ao tentar excluir'); });
        }
    };
    ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-list',
            template: __webpack_require__(/*! ./image-list.component.html */ "./src/app/pages/images/image-list/image-list.component.html"),
            styles: [__webpack_require__(/*! ./image-list.component.scss */ "./src/app/pages/images/image-list/image-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], ImageListComponent);
    return ImageListComponent;
}());



/***/ }),

/***/ "./src/app/pages/images/images-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/images/images-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ImagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesRoutingModule", function() { return ImagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-list/image-list.component */ "./src/app/pages/images/image-list/image-list.component.ts");
/* harmony import */ var _image_form_image_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-form/image-form.component */ "./src/app/pages/images/image-form/image-form.component.ts");





var routes = [
    {
        path: '',
        component: _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_3__["ImageListComponent"],
        data: {
            title: 'Image List'
        }
    },
    {
        path: 'new',
        component: _image_form_image_form_component__WEBPACK_IMPORTED_MODULE_4__["ImageFormComponent"],
        data: {
            title: 'Images Form New'
        }
    },
    {
        path: ':id/edit',
        component: _image_form_image_form_component__WEBPACK_IMPORTED_MODULE_4__["ImageFormComponent"],
        data: {
            title: 'Images Form Update'
        }
    }
];
var ImagesRoutingModule = /** @class */ (function () {
    function ImagesRoutingModule() {
    }
    ImagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ImagesRoutingModule);
    return ImagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/images/images.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/images/images.module.ts ***!
  \***********************************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _images_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images-routing.module */ "./src/app/pages/images/images-routing.module.ts");
/* harmony import */ var _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-list/image-list.component */ "./src/app/pages/images/image-list/image-list.component.ts");
/* harmony import */ var _image_form_image_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-form/image-form.component */ "./src/app/pages/images/image-form/image-form.component.ts");






var ImagesModule = /** @class */ (function () {
    function ImagesModule() {
    }
    ImagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_4__["ImageListComponent"], _image_form_image_form_component__WEBPACK_IMPORTED_MODULE_5__["ImageFormComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _images_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImagesRoutingModule"]
            ]
        })
    ], ImagesModule);
    return ImagesModule;
}());



/***/ }),

/***/ "./src/app/pages/images/models/image.model.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/images/models/image.model.ts ***!
  \****************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/base-resource.model */ "./src/app/shared/models/base-resource.model.ts");


var Image = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Image, _super);
    function Image(id, name, description, originalname, filename, filesize, idsystem, system) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.originalname = originalname;
        _this.filename = filename;
        _this.filesize = filesize;
        _this.idsystem = idsystem;
        _this.system = system;
        return _this;
    }
    Image.fromJson = function (jsonData) {
        return Object.assign(new Image(), jsonData);
    };
    return Image;
}(_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]));



/***/ }),

/***/ "./src/app/pages/images/service/image.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/images/service/image.service.ts ***!
  \*******************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_image_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/image.model */ "./src/app/pages/images/models/image.model.ts");
/* harmony import */ var _systems_service_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../systems/service/system.service */ "./src/app/pages/systems/service/system.service.ts");







var ImageService = /** @class */ (function () {
    function ImageService(http, systemService) {
        this.http = http;
        this.systemService = systemService;
        this.apiPath = '/api/v1/image';
    }
    ImageService.prototype.getAll = function () {
        return this.http.get(this.apiPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToEntries));
    };
    ImageService.prototype.getById = function (id) {
        var url = this.apiPath + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.jsonDataToEntry));
    };
    ImageService.prototype.delete = function (id) {
        var url = this.apiPath + "/" + id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return null; }));
    };
    ImageService.prototype.create = function (formData) {
        var _this = this;
        return this.http.post("" + this.apiPath, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return _this.getEventMessage(event, formData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ImageService.prototype.update = function (image) {
        var _this = this;
        var url = this.apiPath + "/" + image.id;
        return this.systemService.getById(image.idsystem).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (system) {
            image.system = system;
            return _this.http.put(url, image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(_this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return image; }));
        }));
    };
    ImageService.prototype.getEventMessage = function (event, formData) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                return this.fileUploadProgress(event);
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return this.apiResponse(event);
                break;
            default:
                return "File \"" + formData.get('profile').name + "\" surprising upload event: " + event.type + ".";
        }
    };
    ImageService.prototype.fileUploadProgress = function (event) {
        var percentDone = Math.round(100 * event.loaded / event.total);
        return { status: 'progress', message: percentDone };
    };
    ImageService.prototype.apiResponse = function (event) {
        return event.body;
    };
    ImageService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ImageService.prototype.jsonDataToEntries = function (jsonData) {
        var images = [];
        jsonData.forEach(function (element) {
            var image = Object.assign(new _models_image_model__WEBPACK_IMPORTED_MODULE_5__["Image"](), element);
            images.push(image);
        });
        return images;
    };
    ImageService.prototype.jsonDataToEntry = function (jsonData) {
        return Object.assign(new _models_image_model__WEBPACK_IMPORTED_MODULE_5__["Image"](), jsonData);
    };
    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _systems_service_system_service__WEBPACK_IMPORTED_MODULE_6__["SystemService"]])
    ], ImageService);
    return ImageService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-images-images-module.js.map