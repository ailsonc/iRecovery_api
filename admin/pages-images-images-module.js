(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-images-images-module"],{

/***/ "./src/app/pages/images/image-form/image-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/images/image-form/image-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb [itens]=\"[{text:'Imagens', link:'/images'}, {text:pageTitle} ]\"></app-bread-crumb>\r\n\r\n<app-page-header [page-title]=\"pageTitle\" button-link=\"/images\" button-class=\"btn-light\" button-text=\"<< Voltar\"></app-page-header>\r\n\r\n<form [formGroup]=\"resourceForm\" (submit)=\"submitForm()\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Informações sobre a Imagem\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-row\">\r\n        <!-- name -->\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"name\">Nome</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n          <app-form-field-error [form-control]=\"resourceForm.get('name')\"></app-form-field-error>\r\n        </div>\r\n        <!-- file -->\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"profile\">ISO</label>\r\n          <input type=\"file\" class=\"form-control-file\" id=\"profile\" (change)=\"onSelectedFile($event.target.files)\">\r\n          <app-form-field-error [form-control]=\"resourceForm.get('profile')\"></app-form-field-error>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- description -->\r\n        <div class=\"form-group col-md-7\">\r\n          <label for=\"description\">Descrição</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\">\r\n        </div>\r\n        <!-- systemId -->\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"idsystem\">Sistema Operacional</label>\r\n          <select name=\"idsystem\" id=\"idsystem\" class=\"form-control\" formControlName=\"idsystem\">\r\n            <option *ngFor=\"let system of systems\" [value]=\"system.id\">{{system.name}}</option>\r\n          </select>\r\n          <app-form-field-error [form-control]=\"resourceForm.get('idsystem')\"></app-form-field-error>\r\n        </div>\r\n      </div>\r\n      <!--progress-->\r\n      <div *ngIf=\"fileUpload.status!=='progress'\">\r\n        <div class=\"progress\" style=\"height: 20px;margin-bottom:20px;\">\r\n          <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"fileUpload.message\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{fileUpload.message}}%</div>\r\n        </div>\r\n      </div>\r\n      <!--message-->\r\n      <app-file-upload-error-message [file-upload]=\"fileUpload\"></app-file-upload-error-message>\r\n    </div>\r\n  </div>\r\n  <app-server-error-messages [server-error-messages]=\"serverErrorMessages\"></app-server-error-messages>\r\n  <button [disabled]=\"submittingForm || resourceForm.invalid\" type=\"submit\" class=\"btn btn-primary btn-lg float-right mt-3\">Salvar</button>\r\n</form>\r\n\r\n<pre>{{resourceForm.value | json }}</pre>\r\n"

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
/* harmony import */ var _shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base-resource-form/base-resource-form.component */ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var _models_image_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/image.model */ "./src/app/pages/images/models/image.model.ts");
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/image.service */ "./src/app/pages/images/service/image.service.ts");
/* harmony import */ var _systems_service_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../systems/service/system.service */ "./src/app/pages/systems/service/system.service.ts");







var ImageFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageFormComponent, _super);
    function ImageFormComponent(imageService, systemService, injector) {
        var _this = _super.call(this, new _models_image_model__WEBPACK_IMPORTED_MODULE_4__["Image"], injector, imageService, _models_image_model__WEBPACK_IMPORTED_MODULE_4__["Image"].fromJson) || this;
        _this.imageService = imageService;
        _this.systemService = systemService;
        _this.injector = injector;
        _this.fileUpload = { status: 'error', message: 'Teste', filePath: '' };
        _this.resource = new _models_image_model__WEBPACK_IMPORTED_MODULE_4__["Image"]();
        return _this;
    }
    ImageFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.loadSystems();
    };
    ImageFormComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            profile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [null],
            idsystem: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    ImageFormComponent.prototype.loadSystems = function () {
        var _this = this;
        this.systemService.getAll().subscribe(function (systems) { return _this.systems = systems; });
    };
    ImageFormComponent.prototype.editionPageTitle = function () {
        var resourceName = this.resource.name || '';
        return 'Editar: ' + resourceName;
    };
    ImageFormComponent.prototype.onSelectedFile = function (files) {
        if (files.length > 0) {
            var file = files.item(0);
            this.resourceForm.get('profile').setValue(file);
        }
        ;
    };
    ImageFormComponent.prototype.createResource = function () {
        var _this = this;
        this.setResouce();
        // Criando um Resource nova e atribuindo os valores de resourceForm a constante.
        this.resourceService.create(this.jsonDataToResourceFn(this.resource))
            .subscribe(function (resource) { return _this.actionsForSuccess(resource); }, function (error) { return _this.actionsForError(error); });
    };
    ImageFormComponent.prototype.updateResource = function () {
        var _this = this;
        this.setResouce();
        // Criando um Resource nova e atribuindo os valores de resourceForm a constante.
        this.resourceService.update(this.jsonDataToResourceFn(this.resource))
            .subscribe(function (resource) { return _this.actionsForSuccess(resource); }, function (error) { return _this.actionsForError(error); });
    };
    ImageFormComponent.prototype.setResouce = function () {
        /*
          const formData = new FormData();
          formData.append('profile', this.resourceForm.get('profile').value);
          */
        var profile = this.resourceForm.get('profile').value;
        this.resource.name = this.resourceForm.get('name').value;
        this.resource.description = this.resourceForm.get('description').value;
        this.resource.filename = profile.name;
        this.resource.filepath = profile.name;
        this.resource.filehash = profile.name;
        this.resource.idsystem = this.resourceForm.get('idsystem').value;
    };
    ImageFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-form',
            template: __webpack_require__(/*! ./image-form.component.html */ "./src/app/pages/images/image-form/image-form.component.html"),
            styles: [__webpack_require__(/*! ./image-form.component.scss */ "./src/app/pages/images/image-form/image-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"], _systems_service_system_service__WEBPACK_IMPORTED_MODULE_6__["SystemService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ImageFormComponent);
    return ImageFormComponent;
}(_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseResourceFormComponent"]));



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
/* harmony import */ var _shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base-resource-list/base-resource-list.component */ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/image.service */ "./src/app/pages/images/service/image.service.ts");




var ImageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageListComponent, _super);
    function ImageListComponent(imageService) {
        var _this = _super.call(this, imageService) || this;
        _this.imageService = imageService;
        return _this;
    }
    ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-list',
            template: __webpack_require__(/*! ./image-list.component.html */ "./src/app/pages/images/image-list/image-list.component.html"),
            styles: [__webpack_require__(/*! ./image-list.component.scss */ "./src/app/pages/images/image-list/image-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
    ], ImageListComponent);
    return ImageListComponent;
}(_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceListComponent"]));



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
    function Image(id, name, description, filename, filepath, filehash, idsystem, system) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.filename = filename;
        _this.filepath = filepath;
        _this.filehash = filehash;
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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/base-resource-service */ "./src/app/shared/services/base-resource-service.ts");
/* harmony import */ var _models_image_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/image.model */ "./src/app/pages/images/models/image.model.ts");
/* harmony import */ var _systems_service_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../systems/service/system.service */ "./src/app/pages/systems/service/system.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ImageService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageService, _super);
    function ImageService(injector, systemService) {
        var _this = _super.call(this, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/v1/image", injector, _models_image_model__WEBPACK_IMPORTED_MODULE_4__["Image"].fromJson) || this;
        _this.injector = injector;
        _this.systemService = systemService;
        return _this;
    }
    ImageService.prototype.create = function (image) {
        return this.setSystemAndSendToServer(image, _super.prototype.create.bind(this));
    };
    ImageService.prototype.update = function (image) {
        return this.setSystemAndSendToServer(image, _super.prototype.update.bind(this));
    };
    ImageService.prototype.setSystemAndSendToServer = function (image, sendFn) {
        return this.systemService.getById(image.idsystem).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (system) {
            image.system = system;
            return sendFn(image);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _systems_service_system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"]])
    ], ImageService);
    return ImageService;
}(_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_3__["BaseResourceService"]));



/***/ })

}]);
//# sourceMappingURL=pages-images-images-module.js.map