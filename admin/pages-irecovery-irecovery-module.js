(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-irecovery-irecovery-module"],{

/***/ "./src/app/pages/irecovery/irecovery-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/irecovery/irecovery-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: IrecoveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrecoveryRoutingModule", function() { return IrecoveryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _irecovery_irecovery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./irecovery/irecovery.component */ "./src/app/pages/irecovery/irecovery/irecovery.component.ts");




var routes = [
    {
        path: '',
        component: _irecovery_irecovery_component__WEBPACK_IMPORTED_MODULE_3__["IrecoveryComponent"],
        data: {
            title: 'IRecovery'
        }
    }
];
var IrecoveryRoutingModule = /** @class */ (function () {
    function IrecoveryRoutingModule() {
    }
    IrecoveryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IrecoveryRoutingModule);
    return IrecoveryRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/irecovery/irecovery.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/irecovery/irecovery.module.ts ***!
  \*****************************************************/
/*! exports provided: IrecoveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrecoveryModule", function() { return IrecoveryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _irecovery_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./irecovery-routing.module */ "./src/app/pages/irecovery/irecovery-routing.module.ts");
/* harmony import */ var _irecovery_irecovery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./irecovery/irecovery.component */ "./src/app/pages/irecovery/irecovery/irecovery.component.ts");





var IrecoveryModule = /** @class */ (function () {
    function IrecoveryModule() {
    }
    IrecoveryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_irecovery_irecovery_component__WEBPACK_IMPORTED_MODULE_4__["IrecoveryComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _irecovery_routing_module__WEBPACK_IMPORTED_MODULE_3__["IrecoveryRoutingModule"]
            ]
        })
    ], IrecoveryModule);
    return IrecoveryModule;
}());



/***/ }),

/***/ "./src/app/pages/irecovery/irecovery/irecovery.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/irecovery/irecovery/irecovery.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" [src]=\"urlSafe\"></iframe>\n"

/***/ }),

/***/ "./src/app/pages/irecovery/irecovery/irecovery.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/irecovery/irecovery/irecovery.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lyZWNvdmVyeS9pcmVjb3ZlcnkvaXJlY292ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/irecovery/irecovery/irecovery.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/irecovery/irecovery/irecovery.component.ts ***!
  \******************************************************************/
/*! exports provided: IrecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrecoveryComponent", function() { return IrecoveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var IrecoveryComponent = /** @class */ (function () {
    function IrecoveryComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = "http://localhost:5000/jnlp";
    }
    IrecoveryComponent.prototype.ngOnInit = function () {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IrecoveryComponent.prototype, "url", void 0);
    IrecoveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-irecovery',
            template: __webpack_require__(/*! ./irecovery.component.html */ "./src/app/pages/irecovery/irecovery/irecovery.component.html"),
            styles: [__webpack_require__(/*! ./irecovery.component.scss */ "./src/app/pages/irecovery/irecovery/irecovery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], IrecoveryComponent);
    return IrecoveryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-irecovery-irecovery-module.js.map