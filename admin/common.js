(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/pages/systems/models/system.model.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/systems/models/system.model.ts ***!
  \******************************************************/
/*! exports provided: System */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "System", function() { return System; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/base-resource.model */ "./src/app/shared/models/base-resource.model.ts");


var System = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](System, _super);
    function System(id, name, description) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        return _this;
    }
    System.fromJson = function (jsonData) {
        return Object.assign(new System(), jsonData);
    };
    return System;
}(_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]));



/***/ }),

/***/ "./src/app/pages/systems/service/system.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/systems/service/system.service.ts ***!
  \*********************************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_system_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/system.model */ "./src/app/pages/systems/models/system.model.ts");
/* harmony import */ var _shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/base-resource-service */ "./src/app/shared/services/base-resource-service.ts");




var SystemService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SystemService, _super);
    function SystemService(injector) {
        var _this = _super.call(this, '/api/v1/system', injector, _models_system_model__WEBPACK_IMPORTED_MODULE_2__["System"].fromJson) || this;
        _this.injector = injector;
        return _this;
    }
    SystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], SystemService);
    return SystemService;
}(_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_3__["BaseResourceService"]));



/***/ }),

/***/ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/base-resource-form/base-resource-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BaseResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceFormComponent", function() { return BaseResourceFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);




var BaseResourceFormComponent = /** @class */ (function () {
    function BaseResourceFormComponent(resource, injector, resourceService, jsonDataToResourceFn) {
        this.resource = resource;
        this.injector = injector;
        this.resourceService = resourceService;
        this.jsonDataToResourceFn = jsonDataToResourceFn;
        this.serverErrorMessages = null;
        this.submittingForm = false;
        this.route = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
        this.formBuilder = injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]);
    }
    BaseResourceFormComponent.prototype.ngOnInit = function () {
        this.setCurrentAction();
        this.buildResourceForm();
        this.loadResource();
    };
    BaseResourceFormComponent.prototype.ngAfterContentChecked = function () {
        this.setPageTitle();
    };
    BaseResourceFormComponent.prototype.submitForm = function () {
        this.submittingForm = true;
        if (this.currentAction === 'new') {
            this.createResource();
        }
        else {
            this.updateResource();
        }
    };
    // Protected Methods
    BaseResourceFormComponent.prototype.setCurrentAction = function () {
        if (this.route.snapshot.url[0].path === 'new') {
            this.currentAction = 'new';
        }
        else {
            this.currentAction = 'edit';
        }
    };
    BaseResourceFormComponent.prototype.loadResource = function () {
        var _this = this;
        if (this.currentAction === 'edit') {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.resourceService.getById(+params.get('id')); })).subscribe(function (resource) {
                _this.resource = resource;
                _this.resourceForm.patchValue(resource); // binds loader resource data to resourceForm
            }, function (error) {
                alert('ocorreu um erro no servidor, tente mas tarde.');
            });
        }
    };
    BaseResourceFormComponent.prototype.setPageTitle = function () {
        if (this.currentAction === 'new') {
            this.pageTitle = this.creationPageTitle();
        }
        else {
            this.pageTitle = this.editionPageTitle();
        }
    };
    BaseResourceFormComponent.prototype.creationPageTitle = function () {
        return 'Cadastrar';
    };
    BaseResourceFormComponent.prototype.editionPageTitle = function () {
        return 'Editar';
    };
    BaseResourceFormComponent.prototype.createResource = function () {
        var _this = this;
        // Criando um Resource nova e atribuindo os valores de resourceForm a constante.
        var resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.create(resource)
            .subscribe(function (resource) { return _this.actionsForSuccess(resource); }, function (error) { return _this.actionsForError(error); });
    };
    BaseResourceFormComponent.prototype.updateResource = function () {
        var _this = this;
        // Criando um Resource nova e atribuindo os valores de resourceForm a constante.
        var resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.update(resource)
            .subscribe(function (resource) { return _this.actionsForSuccess(resource); }, function (error) { return _this.actionsForError(error); });
    };
    BaseResourceFormComponent.prototype.actionsForSuccess = function (resource) {
        var _this = this;
        toastr__WEBPACK_IMPORTED_MODULE_3___default.a.success('Solicitação processada com sucesso!');
        this.submittingForm = false;
        var baseComponentPath = this.route.snapshot.parent.routeConfig.path;
        /* this.route.snapshot.url[0].path;
           skipLocationChange: não salvar historico do navegador que passou na pagina
           redirect/reload componen page */
        console.log('baseComponentPath: ' + baseComponentPath);
        console.log('resource: ' + resource.id);
        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(function () { return _this.router.navigate([baseComponentPath, resource.id, 'edit']); });
    };
    BaseResourceFormComponent.prototype.actionsForError = function (error) {
        toastr__WEBPACK_IMPORTED_MODULE_3___default.a.error('Ocorreu um erro ao processada sua solicitação');
        this.submittingForm = false;
        if (error.status === 422) {
            // this.serverErrorMessages = JSON.parse(error._body).erros;
            this.serverErrorMessages = ['Falha na comunicação com o servidor, Por favor, tente mais tarde.'];
        }
        else {
            this.serverErrorMessages = ['Falha na comunicação com o servidor, Por favor, tente mais tarde.'];
        }
    };
    return BaseResourceFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/base-resource-list/base-resource-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BaseResourceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceListComponent", function() { return BaseResourceListComponent; });
var BaseResourceListComponent = /** @class */ (function () {
    function BaseResourceListComponent(resourceService) {
        this.resourceService = resourceService;
        this.resources = [];
    }
    BaseResourceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService.getAll().subscribe(function (resources) { return _this.resources = resources.sort(function (a, b) { return b.id - a.id; }); }, function (error) { return alert('Erro ao carregar a lista'); });
    };
    BaseResourceListComponent.prototype.deleteResource = function (resource) {
        var _this = this;
        var mustDelete = confirm('Deseja excluir esse item');
        if (mustDelete) {
            this.resourceService.delete(resource.id).subscribe(function () { return _this.resources = _this.resources.filter(function (element) { return element !== resource; }); }, function () { return alert('Erro ao tentar excluir'); });
        }
    };
    return BaseResourceListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map