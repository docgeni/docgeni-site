(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-alib-zoo-index"],{

/***/ "GBez":
/*!*************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/zoo/index.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EXAMPLE_COMPONENTS, EXAMPLES_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_COMPONENTS", function() { return EXAMPLE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLES_MODULE", function() { return EXAMPLES_MODULE; });
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/basic.component */ "OLjc");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ "M/Ph");


const EXAMPLE_COMPONENTS = {
    'alib-zoo-basic-example': _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__["AlibZooBasicExampleComponent"],
};
const EXAMPLES_MODULE = _module__WEBPACK_IMPORTED_MODULE_1__["AlibZooExamplesModule"];


/***/ }),

/***/ "M/Ph":
/*!**************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/zoo/module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AlibZooExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibZooExamplesModule", function() { return AlibZooExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "4OvT");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "OLjc");




class AlibZooExamplesModule {
}
AlibZooExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlibZooExamplesModule });
AlibZooExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlibZooExamplesModule_Factory(t) { return new (t || AlibZooExamplesModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlibZooExamplesModule, { declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibZooBasicExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibZooBasicExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibZooExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibZooBasicExampleComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibZooBasicExampleComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "OLjc":
/*!*****************************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/zoo/basic/basic.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AlibZooBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibZooBasicExampleComponent", function() { return AlibZooBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");


/**
 * @title Baz Basic
 * @order 1
 */
class AlibZooBasicExampleComponent {
    constructor() { }
    ngOnInit() { }
}
AlibZooBasicExampleComponent.ɵfac = function AlibZooBasicExampleComponent_Factory(t) { return new (t || AlibZooBasicExampleComponent)(); };
AlibZooBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibZooBasicExampleComponent, selectors: [["alib-zoo-basic-example"]], decls: 1, vars: 0, template: function AlibZooBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "This is Basic Zoo\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29tcG9uZW50cy9hbGliL3pvby9iYXNpYy9iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibZooBasicExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-zoo-basic-example',
                templateUrl: './basic.component.html',
                styleUrls: ['./basic.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-alib-zoo-index-es2015.js.map