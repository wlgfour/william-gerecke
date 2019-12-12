(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cv-cv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv/cv.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv/cv.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  cv works!\n</p>\n");

/***/ }),

/***/ "./src/app/cv/cv-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/cv/cv-routing.module.ts ***!
  \*****************************************/
/*! exports provided: CvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvRoutingModule", function() { return CvRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv/cv.component.ts");




var routes = [
    {
        path: '',
        component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"]
    }
];
var CvRoutingModule = /** @class */ (function () {
    function CvRoutingModule() {
    }
    CvRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CvRoutingModule);
    return CvRoutingModule;
}());



/***/ }),

/***/ "./src/app/cv/cv.module.ts":
/*!*********************************!*\
  !*** ./src/app/cv/cv.module.ts ***!
  \*********************************/
/*! exports provided: CvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvModule", function() { return CvModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cv_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv-routing.module */ "./src/app/cv/cv-routing.module.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv/cv.component.ts");





var CvModule = /** @class */ (function () {
    function CvModule() {
    }
    CvModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cv_routing_module__WEBPACK_IMPORTED_MODULE_3__["CvRoutingModule"]
            ]
        })
    ], CvModule);
    return CvModule;
}());



/***/ }),

/***/ "./src/app/cv/cv/cv.component.scss":
/*!*****************************************!*\
  !*** ./src/app/cv/cv/cv.component.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2L2N2L2N2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cv/cv/cv.component.ts":
/*!***************************************!*\
  !*** ./src/app/cv/cv/cv.component.ts ***!
  \***************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CvComponent = /** @class */ (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv/cv.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cv.component.scss */ "./src/app/cv/cv/cv.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cv-cv-module.js.map