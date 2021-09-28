(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-alib-layout-index"],{

/***/ "/oPl":
/*!*****************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/a-lib/layout/layout.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AlibLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibLayoutModule", function() { return AlibLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "4OvT");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "J5sr");




class AlibLayoutModule {
}
AlibLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlibLayoutModule });
AlibLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlibLayoutModule_Factory(t) { return new (t || AlibLayoutModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlibLayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "C5Tq":
/*!********************************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/layout/basic/basic.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AlibLayoutBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibLayoutBasicExampleComponent", function() { return AlibLayoutBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _packages_a_lib_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../packages/a-lib/layout/layout.component */ "J5sr");



/**
 * @title Basic
 * @order 1
 * @description 简单的使用场景
 */
class AlibLayoutBasicExampleComponent {
    constructor() { }
    ngOnInit() { }
}
AlibLayoutBasicExampleComponent.ɵfac = function AlibLayoutBasicExampleComponent_Factory(t) { return new (t || AlibLayoutBasicExampleComponent)(); };
AlibLayoutBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibLayoutBasicExampleComponent, selectors: [["alib-layout-basic-example"]], decls: 2, vars: 0, template: function AlibLayoutBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "alib-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_packages_a_lib_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["AlibLayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29tcG9uZW50cy9hbGliL2xheW91dC9iYXNpYy9iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibLayoutBasicExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-layout-basic-example',
                templateUrl: './basic.component.html',
                styleUrls: ['./basic.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CPpt":
/*!*****************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/layout/module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AlibLayoutExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibLayoutExamplesModule", function() { return AlibLayoutExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "4OvT");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "C5Tq");
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advance/advance.component */ "PvTN");
/* harmony import */ var a_lib_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! a-lib/layout */ "TUwh");






class AlibLayoutExamplesModule {
}
AlibLayoutExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlibLayoutExamplesModule });
AlibLayoutExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlibLayoutExamplesModule_Factory(t) { return new (t || AlibLayoutExamplesModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], a_lib_layout__WEBPACK_IMPORTED_MODULE_4__["AlibLayoutModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlibLayoutExamplesModule, { declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibLayoutAdvanceExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], a_lib_layout__WEBPACK_IMPORTED_MODULE_4__["AlibLayoutModule"]], exports: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibLayoutAdvanceExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibLayoutExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibLayoutAdvanceExampleComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], a_lib_layout__WEBPACK_IMPORTED_MODULE_4__["AlibLayoutModule"]],
                exports: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibLayoutAdvanceExampleComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "J5sr":
/*!********************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/a-lib/layout/layout.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AlibLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibLayoutComponent", function() { return AlibLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");


const _c0 = ["*"];
class AlibLayoutComponent {
    constructor() {
        this.isLayout = true;
    }
    ngOnInit() { }
}
AlibLayoutComponent.ɵfac = function AlibLayoutComponent_Factory(t) { return new (t || AlibLayoutComponent)(); };
AlibLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibLayoutComponent, selectors: [["alib-layout"]], hostVars: 2, hostBindings: function AlibLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alib-layout", ctx.isLayout);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AlibLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-layout',
                template: `
        <ng-content></ng-content>
    `
            }]
    }], function () { return []; }, { isLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: [`class.alib-layout`]
        }] }); })();


/***/ }),

/***/ "PvTN":
/*!************************************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/layout/advance/advance.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AlibLayoutAdvanceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibLayoutAdvanceExampleComponent", function() { return AlibLayoutAdvanceExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _packages_a_lib_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../packages/a-lib/layout/layout.component */ "J5sr");



class AlibLayoutAdvanceExampleComponent {
    constructor() { }
    ngOnInit() { }
}
AlibLayoutAdvanceExampleComponent.ɵfac = function AlibLayoutAdvanceExampleComponent_Factory(t) { return new (t || AlibLayoutAdvanceExampleComponent)(); };
AlibLayoutAdvanceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibLayoutAdvanceExampleComponent, selectors: [["alib-layout-advance-example"]], decls: 2, vars: 0, template: function AlibLayoutAdvanceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "alib-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Advance Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_packages_a_lib_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["AlibLayoutComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibLayoutAdvanceExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-layout-advance-example',
                template: `
        <alib-layout>Advance Layout</alib-layout>
    `
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TUwh":
/*!*********************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/a-lib/layout/index.ts ***!
  \*********************************************************************************/
/*! exports provided: AlibLayoutModule, AlibLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.module */ "/oPl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlibLayoutModule", function() { return _layout_module__WEBPACK_IMPORTED_MODULE_0__["AlibLayoutModule"]; });

/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ "J5sr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlibLayoutComponent", function() { return _layout_component__WEBPACK_IMPORTED_MODULE_1__["AlibLayoutComponent"]; });





/***/ }),

/***/ "kTjw":
/*!****************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/layout/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EXAMPLE_COMPONENTS, EXAMPLES_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_COMPONENTS", function() { return EXAMPLE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLES_MODULE", function() { return EXAMPLES_MODULE; });
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advance/advance.component */ "PvTN");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/basic.component */ "C5Tq");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module */ "CPpt");



const EXAMPLE_COMPONENTS = {
    'alib-layout-advance-example': _advance_advance_component__WEBPACK_IMPORTED_MODULE_0__["AlibLayoutAdvanceExampleComponent"],
    'alib-layout-basic-example': _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["AlibLayoutBasicExampleComponent"],
};
const EXAMPLES_MODULE = _module__WEBPACK_IMPORTED_MODULE_2__["AlibLayoutExamplesModule"];


/***/ })

}]);
//# sourceMappingURL=components-alib-layout-index-es2015.js.map