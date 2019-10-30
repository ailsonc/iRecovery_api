(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"],{

/***/ "./src/app/pages/users/models/user.model.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/users/models/user.model.ts ***!
  \**************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/base-resource.model */ "./src/app/shared/models/base-resource.model.ts");


var User = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](User, _super);
    function User(id, username, password, status) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.username = username;
        _this.password = password;
        _this.status = status;
        return _this;
    }
    User.fromJson = function (jsonData) {
        return Object.assign(new User(), jsonData);
    };
    return User;
}(_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]));



/***/ }),

/***/ "./src/app/pages/users/service/user.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/service/user.service.ts ***!
  \*****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/base-resource-service */ "./src/app/shared/services/base-resource-service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/pages/users/models/user.model.ts");




var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(injector) {
        var _this = _super.call(this, '/api/v1/user', injector, _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"].fromJson) || this;
        _this.injector = injector;
        return _this;
    }
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], UserService);
    return UserService;
}(_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__["BaseResourceService"]));



/***/ }),

/***/ "./src/app/pages/users/user-form/user-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/user-form/user-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb [itens]=\"[{text:'Usuários', link:'/user'}, {text:pageTitle} ]\"></app-bread-crumb>\n \n<app-page-header [page-title]=\"pageTitle\" button-link=\"/user\" button-class=\"btn-light\" button-text=\"<< Voltar\"></app-page-header>\n\n<form [formGroup]=\"resourceForm\" (submit)=\"submitForm()\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Informações sobre o Usuário\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"username\">Nome</label>\n          <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\">\n          <app-form-field-error [form-control]=\"resourceForm.get('username')\"></app-form-field-error>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"name\" formControlName=\"password\">\n          <app-form-field-error [form-control]=\"resourceForm.get('password')\"></app-form-field-error>\n        </div>\n        <div class=\"form-group col-md-2\" [ngClass]=\"currentAction == 'new' ? 'disabled' : 'activated'\">\n          <label for=\"status\">Status</label>\n          <div id=\"status\" class=\"btn-group\">\n            <label (click)=\"resourceForm.get('status').setValue(1)\" [class.active]=\"resourceForm.get('status').value == 1\" class=\"btn btn-outline-info\">\n              Ativo\n            </label>\n            <label (click)=\"resourceForm.get('status').setValue(0)\" [class.active]=\"resourceForm.get('status').value == 0\" class=\"btn btn-outline-info\">\n              Desativo\n            </label>\n          </div>\n          <app-form-field-error [form-control]=\"resourceForm.get('status')\"></app-form-field-error>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-server-error-messages [server-error-messages]=\"serverErrorMessages\"></app-server-error-messages>\n  <button [disabled]=\"submittingForm || resourceForm.invalid\" type=\"submit\" class=\"btn btn-primary btn-lg float-right mt-3\">Salvar</button>\n</form>"

/***/ }),

/***/ "./src/app/pages/users/user-form/user-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/user-form/user-form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disabled {\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1mb3JtL0M6XFxkZXNlbnZcXGFuZ3VsYXJcXGlSZWNvdmVyeS9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFx1c2VyLWZvcm1cXHVzZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWR7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/users/user-form/user-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/user-form/user-form.component.ts ***!
  \**************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base-resource-form/base-resource-form.component */ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/pages/users/models/user.model.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user.service */ "./src/app/pages/users/service/user.service.ts");






var UserFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserFormComponent, _super);
    function UserFormComponent(userService, injector) {
        var _this = _super.call(this, new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"], injector, userService, _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].fromJson) || this;
        _this.userService = userService;
        _this.injector = injector;
        return _this;
    }
    UserFormComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            status: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    UserFormComponent.prototype.editionPageTitle = function () {
        var resourceUserName = this.resource.username || '';
        return 'Editar: ' + resourceUserName;
    };
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/pages/users/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/pages/users/user-form/user-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], UserFormComponent);
    return UserFormComponent;
}(_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseResourceFormComponent"]));



/***/ }),

/***/ "./src/app/pages/users/user-list/user-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/user-list/user-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb [itens]=\"[{text:'Usuários'} ]\"></app-bread-crumb>\n\n<app-page-header page-title=\"Usuários\" button-link=\"new\" button-class=\"btn-success\" button-text=\"Novo Usuário\"></app-page-header>\n\n<table class=\"table table-hover\">\n  <thead>\n  <tr class=\"bg-primary text-light\">\n    <th style=\"width: 60%\">Usuario</th>\n    <th style=\"width: 20%\">Status</th>\n    <th class=\"text-center\" style=\"width: 20%\">Ações</th>\n  </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let resource of resources\">\n      <td>\n        <strong>{{resource.username}}</strong><br>\n      </td>\n      <td>\n        <small *ngIf=\"resource.status == 1\">Ativo</small>\n        <small *ngIf=\"resource.status == 0\">Desativado</small>\n      </td>\n      <td class=\"text-center\">\n        <button [routerLink]=\"[resource.id, 'edit']\" class=\"btn btn-outline-info btn-sm mr-2\">Editar</button>\n        <button (click)=\"deleteResource(resource)\" class=\"btn btn-outline-danger btn-sm\">Excluir</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/pages/users/user-list/user-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/user-list/user-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/users/user-list/user-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/user-list/user-list.component.ts ***!
  \**************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base-resource-list/base-resource-list.component */ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/pages/users/service/user.service.ts");




var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(imageService) {
        var _this = _super.call(this, imageService) || this;
        _this.imageService = imageService;
        return _this;
    }
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/pages/users/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/pages/users/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}(_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceListComponent"]));



/***/ }),

/***/ "./src/app/pages/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/pages/users/user-list/user-list.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/pages/users/user-form/user-form.component.ts");





var routes = [
    {
        path: '',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"],
        data: {
            title: 'User List'
        }
    },
    {
        path: 'new',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
        data: {
            title: 'Users Form New'
        }
    },
    {
        path: ':id/edit',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
        data: {
            title: 'Users Form Update'
        }
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/pages/users/users-routing.module.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/pages/users/user-list/user-list.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/pages/users/user-form/user-form.component.ts");






var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__["UserFormComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-users-users-module.js.map