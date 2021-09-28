(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-alib-button-index"],{

/***/ "7xfw":
/*!****************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/button/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EXAMPLE_COMPONENTS, EXAMPLES_MODULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_COMPONENTS", function() { return EXAMPLE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLES_MODULE", function() { return EXAMPLES_MODULE; });
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/basic.component */ "l6CX");
/* harmony import */ var _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advance-title/advance-title.component */ "ENnc");
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance/advance.component */ "iBic");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "rtvN");




const EXAMPLE_COMPONENTS = {
    'alib-button-basic-example': _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__["AlibButtonBasicExampleComponent"],
    'alib-button-advance-title-example': _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_1__["AlibButtonAdvanceTitleExampleComponent"],
    'alib-button-advance-example': _advance_advance_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonAdvanceExampleComponent"],
};
const EXAMPLES_MODULE = _module__WEBPACK_IMPORTED_MODULE_3__["AlibButtonExamplesModule"];


/***/ }),

/***/ "CoqV":
/*!*********************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/a-lib/button/index.ts ***!
  \*********************************************************************************/
/*! exports provided: AlibButtonModule, AlibButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.module */ "ppnO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlibButtonModule", function() { return _button_module__WEBPACK_IMPORTED_MODULE_0__["AlibButtonModule"]; });

/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component */ "sNG8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlibButtonComponent", function() { return _button_component__WEBPACK_IMPORTED_MODULE_1__["AlibButtonComponent"]; });





/***/ }),

/***/ "ENnc":
/*!************************************************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/button/advance-title/advance-title.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: AlibButtonAdvanceTitleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibButtonAdvanceTitleExampleComponent", function() { return AlibButtonAdvanceTitleExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _packages_a_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../packages/a-lib/button/button.component */ "sNG8");



class AlibButtonAdvanceTitleExampleComponent {
    constructor() { }
    ngOnInit() { }
}
AlibButtonAdvanceTitleExampleComponent.ɵfac = function AlibButtonAdvanceTitleExampleComponent_Factory(t) { return new (t || AlibButtonAdvanceTitleExampleComponent)(); };
AlibButtonAdvanceTitleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibButtonAdvanceTitleExampleComponent, selectors: [["alib-button-advance-title-example"]], decls: 2, vars: 0, consts: [["alibButton", "primary"]], template: function AlibButtonAdvanceTitleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Advance Title Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_packages_a_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["AlibButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibButtonAdvanceTitleExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-button-advance-title-example',
                templateUrl: './advance-title.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iBic":
/*!************************************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/button/advance/advance.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AlibButtonAdvanceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibButtonAdvanceExampleComponent", function() { return AlibButtonAdvanceExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _packages_a_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../packages/a-lib/button/button.component */ "sNG8");



class AlibButtonAdvanceExampleComponent {
    constructor() {
        this.loading = false;
    }
    ngOnInit() { }
    toggleLoading() {
        this.loading = !this.loading;
    }
}
AlibButtonAdvanceExampleComponent.ɵfac = function AlibButtonAdvanceExampleComponent_Factory(t) { return new (t || AlibButtonAdvanceExampleComponent)(); };
AlibButtonAdvanceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibButtonAdvanceExampleComponent, selectors: [["alib-button-advance-example"]], decls: 2, vars: 0, consts: [["alibButton", "primary"]], template: function AlibButtonAdvanceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Advance Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_packages_a_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["AlibButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibButtonAdvanceExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-button-advance-example',
                templateUrl: './advance.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l6CX":
/*!********************************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/button/basic/basic.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AlibButtonBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibButtonBasicExampleComponent", function() { return AlibButtonBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _packages_a_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../packages/a-lib/button/button.component */ "sNG8");



class AlibButtonBasicExampleComponent {
    constructor() { }
    ngOnInit() { }
}
AlibButtonBasicExampleComponent.ɵfac = function AlibButtonBasicExampleComponent_Factory(t) { return new (t || AlibButtonBasicExampleComponent)(); };
AlibButtonBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibButtonBasicExampleComponent, selectors: [["alib-button-basic-example"]], decls: 8, vars: 0, consts: [["alibButton", "primary"], ["alibButton", "success"], ["alibButton", "danger"], ["alibButton", "info"]], template: function AlibButtonBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_packages_a_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["AlibButtonComponent"]], styles: ["[_nghost-%COMP%]   .dg-btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb21wb25lbnRzL2FsaWIvYnV0dG9uL2Jhc2ljL2Jhc2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29tcG9uZW50cy9hbGliL2J1dHRvbi9iYXNpYy9iYXNpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuZGctYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibButtonBasicExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-button-basic-example',
                templateUrl: './basic.component.html',
                styleUrls: ['./basic.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ppnO":
/*!*****************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/a-lib/button/button.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AlibButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibButtonModule", function() { return AlibButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "4OvT");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "sNG8");




class AlibButtonModule {
}
AlibButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlibButtonModule });
AlibButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlibButtonModule_Factory(t) { return new (t || AlibButtonModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlibButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_button_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_button_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_button_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "rtvN":
/*!*****************************************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/alib/button/module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AlibButtonExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibButtonExamplesModule", function() { return AlibButtonExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "4OvT");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "l6CX");
/* harmony import */ var _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advance/advance.component */ "iBic");
/* harmony import */ var a_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! a-lib/button */ "CoqV");
/* harmony import */ var _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advance-title/advance-title.component */ "ENnc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "y/8W");








class AlibButtonExamplesModule {
}
AlibButtonExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlibButtonExamplesModule });
AlibButtonExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlibButtonExamplesModule_Factory(t) { return new (t || AlibButtonExamplesModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], a_lib_button__WEBPACK_IMPORTED_MODULE_4__["AlibButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlibButtonExamplesModule, { declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibButtonAdvanceExampleComponent"], _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_5__["AlibButtonAdvanceTitleExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], a_lib_button__WEBPACK_IMPORTED_MODULE_4__["AlibButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]], exports: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibButtonAdvanceExampleComponent"], _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_5__["AlibButtonAdvanceTitleExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibButtonExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibButtonAdvanceExampleComponent"], _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_5__["AlibButtonAdvanceTitleExampleComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], a_lib_button__WEBPACK_IMPORTED_MODULE_4__["AlibButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
                entryComponents: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibButtonAdvanceExampleComponent"], _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_5__["AlibButtonAdvanceTitleExampleComponent"]],
                exports: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlibButtonBasicExampleComponent"], _advance_advance_component__WEBPACK_IMPORTED_MODULE_3__["AlibButtonAdvanceExampleComponent"], _advance_title_advance_title_component__WEBPACK_IMPORTED_MODULE_5__["AlibButtonAdvanceTitleExampleComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "sNG8":
/*!********************************************************************************************!*\
  !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/a-lib/button/button.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AlibButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlibButtonComponent", function() { return AlibButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "3TJL");


const _c0 = ["*"];
class AlibButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isBtn = true;
    }
    set alibButton(value) {
        if (this.type) {
            this.elementRef.nativeElement.classList.remove(`dg-btn-${this.type}`);
        }
        this.type = value;
        this.elementRef.nativeElement.classList.add(`dg-btn-${this.type}`);
    }
    ngOnInit() { }
}
AlibButtonComponent.ɵfac = function AlibButtonComponent_Factory(t) { return new (t || AlibButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AlibButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlibButtonComponent, selectors: [["alib-button"], ["", "alibButton", ""]], hostVars: 2, hostBindings: function AlibButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-btn", ctx.isBtn);
    } }, inputs: { alibButton: "alibButton" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AlibButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlibButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alib-button,[alibButton]',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { isBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: [`class.dg-btn`]
        }], alibButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=components-alib-button-index-es2015.js.map