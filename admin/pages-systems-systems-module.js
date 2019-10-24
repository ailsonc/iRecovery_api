(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-systems-systems-module"],{

/***/ "./src/app/pages/systems/system-form/system-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/systems/system-form/system-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb [itens]=\"[{text:'Sistema Operacionais', link:'/systems'}, {text:pageTitle} ]\"></app-bread-crumb>\r\n \r\n<app-page-header [page-title]=\"pageTitle\" button-link=\"/systems\" button-class=\"btn-light\" button-text=\"<< Voltar\"></app-page-header>\r\n\r\n<form [formGroup]=\"resourceForm\" (submit)=\"submitForm()\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Informações sobre o Sistema Operacional\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"name\">Nome</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n          <app-form-field-error [form-control]=\"resourceForm.get('name')\"></app-form-field-error>\r\n        </div>\r\n        <div class=\"form-group col-md-8\">\r\n          <label for=\"description\">Descrição</label>\r\n          <textarea class=\"form-control\" id=\"description\" name=\"description\" formControlName=\"description\" rows=\"5\" cols=\"33\"></textarea>\r\n<!--\r\n          <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\">-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-server-error-messages [server-error-messages]=\"serverErrorMessages\"></app-server-error-messages>\r\n  <button [disabled]=\"submittingForm || resourceForm.invalid\" type=\"submit\" class=\"btn btn-primary btn-lg float-right mt-3\">Salvar</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/systems/system-form/system-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/systems/system-form/system-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5c3RlbXMvc3lzdGVtLWZvcm0vc3lzdGVtLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/systems/system-form/system-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/systems/system-form/system-form.component.ts ***!
  \********************************************************************/
/*! exports provided: SystemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemFormComponent", function() { return SystemFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base-resource-form/base-resource-form.component */ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var _models_system_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/system.model */ "./src/app/pages/systems/models/system.model.ts");
/* harmony import */ var _service_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/system.service */ "./src/app/pages/systems/service/system.service.ts");






var SystemFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SystemFormComponent, _super);
    function SystemFormComponent(systemService, injector) {
        var _this = _super.call(this, new _models_system_model__WEBPACK_IMPORTED_MODULE_4__["System"], injector, systemService, _models_system_model__WEBPACK_IMPORTED_MODULE_4__["System"].fromJson) || this;
        _this.systemService = systemService;
        _this.injector = injector;
        return _this;
    }
    SystemFormComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            description: [null]
        });
    };
    SystemFormComponent.prototype.editionPageTitle = function () {
        var resourceName = this.resource.name || '';
        return 'Editar: ' + resourceName;
    };
    SystemFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-form',
            template: __webpack_require__(/*! ./system-form.component.html */ "./src/app/pages/systems/system-form/system-form.component.html"),
            styles: [__webpack_require__(/*! ./system-form.component.scss */ "./src/app/pages/systems/system-form/system-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], SystemFormComponent);
    return SystemFormComponent;
}(_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseResourceFormComponent"]));



/***/ }),

/***/ "./src/app/pages/systems/system-list/system-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/systems/system-list/system-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb [itens]=\"[ {text:'Sistema Operacionais'} ]\"></app-bread-crumb>\r\n\r\n<app-page-header page-title=\"Sistema Operacionais\" button-link=\"new\" button-class=\"btn-success\" button-text=\"Novo Sistema Operacional\"></app-page-header>\r\n\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n  <tr class=\"bg-primary text-light\">\r\n    <th style=\"width: 80%\">Sistema Operacionais</th>\r\n    <th class=\"text-center\" style=\"width: 20%\">Ações</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let resource of resources\">\r\n      <td>\r\n        <strong>{{resource.name}}</strong><br>\r\n        <small>{{resource.description}}</small>\r\n      </td>\r\n      <td class=\"text-center\">\r\n        <button [routerLink]=\"[resource.id, 'edit']\" class=\"btn btn-outline-info btn-sm mr-2\">Editar</button>\r\n        <button (click)=\"deleteResource(resource)\" class=\"btn btn-outline-danger btn-sm\">Excluir</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/pages/systems/system-list/system-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/systems/system-list/system-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5c3RlbXMvc3lzdGVtLWxpc3Qvc3lzdGVtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/systems/system-list/system-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/systems/system-list/system-list.component.ts ***!
  \********************************************************************/
/*! exports provided: SystemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemListComponent", function() { return SystemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base-resource-list/base-resource-list.component */ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
/* harmony import */ var _service_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/system.service */ "./src/app/pages/systems/service/system.service.ts");




var SystemListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SystemListComponent, _super);
    function SystemListComponent(systemService) {
        var _this = _super.call(this, systemService) || this;
        _this.systemService = systemService;
        return _this;
    }
    SystemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-list',
            template: __webpack_require__(/*! ./system-list.component.html */ "./src/app/pages/systems/system-list/system-list.component.html"),
            styles: [__webpack_require__(/*! ./system-list.component.scss */ "./src/app/pages/systems/system-list/system-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]])
    ], SystemListComponent);
    return SystemListComponent;
}(_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceListComponent"]));



/***/ }),

/***/ "./src/app/pages/systems/systems-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/systems/systems-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SystemsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsRoutingModule", function() { return SystemsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _system_list_system_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-list/system-list.component */ "./src/app/pages/systems/system-list/system-list.component.ts");
/* harmony import */ var _system_form_system_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-form/system-form.component */ "./src/app/pages/systems/system-form/system-form.component.ts");





var routes = [
    {
        path: '',
        component: _system_list_system_list_component__WEBPACK_IMPORTED_MODULE_3__["SystemListComponent"],
        data: {
            title: 'System List'
        }
    },
    {
        path: 'new',
        component: _system_form_system_form_component__WEBPACK_IMPORTED_MODULE_4__["SystemFormComponent"],
        data: {
            title: 'Systems Form New'
        }
    },
    {
        path: ':id/edit',
        component: _system_form_system_form_component__WEBPACK_IMPORTED_MODULE_4__["SystemFormComponent"],
        data: {
            title: 'Systems Form Update'
        }
    }
];
var SystemsRoutingModule = /** @class */ (function () {
    function SystemsRoutingModule() {
    }
    SystemsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SystemsRoutingModule);
    return SystemsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/systems/systems.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/systems/systems.module.ts ***!
  \*************************************************/
/*! exports provided: SystemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsModule", function() { return SystemsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _systems_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./systems-routing.module */ "./src/app/pages/systems/systems-routing.module.ts");
/* harmony import */ var _system_list_system_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-list/system-list.component */ "./src/app/pages/systems/system-list/system-list.component.ts");
/* harmony import */ var _system_form_system_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-form/system-form.component */ "./src/app/pages/systems/system-form/system-form.component.ts");






var SystemsModule = /** @class */ (function () {
    function SystemsModule() {
    }
    SystemsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_system_list_system_list_component__WEBPACK_IMPORTED_MODULE_4__["SystemListComponent"], _system_form_system_form_component__WEBPACK_IMPORTED_MODULE_5__["SystemFormComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _systems_routing_module__WEBPACK_IMPORTED_MODULE_3__["SystemsRoutingModule"]
            ]
        })
    ], SystemsModule);
    return SystemsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-systems-systems-module.js.map