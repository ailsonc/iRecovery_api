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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/base-resource-service */ "./src/app/shared/services/base-resource-service.ts");





var SystemService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SystemService, _super);
    function SystemService(injector) {
        var _this = _super.call(this, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/v1/system", injector, _models_system_model__WEBPACK_IMPORTED_MODULE_2__["System"].fromJson) || this;
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
}(_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__["BaseResourceService"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map