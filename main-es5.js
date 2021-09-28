(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+9N5":
    /*!****************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/doc-pages-links/doc-pages-links.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: DocPagesLinksComponent */

    /***/
    function N5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocPagesLinksComponent", function () {
        return DocPagesLinksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/global-context */
      "gKL3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../icon/icon.component */
      "2PPk");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/translate.pipe */
      "PnZ4");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function DocPagesLinksComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dg-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "dgTranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.preRouterLink));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "PRE_PAGE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.docPages.pre.title, " ");
        }
      }

      function DocPagesLinksComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dg-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "dgTranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.nextRouterLink));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "NEXT_PAGE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.docPages.next.title, " ");
        }
      }

      var DocPagesLinksComponent = /*#__PURE__*/function () {
        function DocPagesLinksComponent(globalContext) {
          _classCallCheck(this, DocPagesLinksComponent);

          this.globalContext = globalContext;
        }

        _createClass(DocPagesLinksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.docPages.pre) {
              this.preRouterLink = this.globalContext.config.mode === 'lite' ? "/".concat(this.docPages.pre.path) : "/".concat(this.docPages.pre.channelPath, "/").concat(this.docPages.pre.path);
            }

            if (this.docPages.next) {
              this.nextRouterLink = this.globalContext.config.mode === 'lite' ? "/".concat(this.docPages.next.path) : "/".concat(this.docPages.next.channelPath, "/").concat(this.docPages.next.path);
            }
          }
        }]);

        return DocPagesLinksComponent;
      }();

      DocPagesLinksComponent.ɵfac = function DocPagesLinksComponent_Factory(t) {
        return new (t || DocPagesLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]));
      };

      DocPagesLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocPagesLinksComponent,
        selectors: [["dg-doc-pages-links"]],
        hostAttrs: [1, "dg-pages-link"],
        inputs: {
          docPages: "docPages"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "dg-page-link", 4, "ngIf"], [1, "dg-page-link"], [3, "routerLink"], [1, "dg-page-link-icon"], ["iconName", "arrowLeft"], [1, "dg-page-link-label"], [1, "dg-page-link-title"], ["iconName", "arrowRight"]],
        template: function DocPagesLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocPagesLinksComponent_div_0_Template, 10, 7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocPagesLinksComponent_div_1_Template, 10, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docPages.pre && ctx.docPages.pre.channelPath);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docPages.next && ctx.docPages.next.channelPath);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocPagesLinksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-doc-pages-links',
            templateUrl: './doc-pages-links.component.html',
            host: {
              "class": 'dg-pages-link'
            }
          }]
        }], function () {
          return [{
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }];
        }, {
          docPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "+ELa":
    /*!***********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/channel/channel.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ChannelComponent, ChannelHomeComponent */

    /***/
    function ELa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelComponent", function () {
        return ChannelComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelHomeComponent", function () {
        return ChannelHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/sidebar/sidebar.component */
      "94D3");

      function ChannelComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menus", ctx_r0.navigationService.channel.items);
        }
      }

      var ChannelComponent = /*#__PURE__*/function () {
        function ChannelComponent(http, elementRef, route, router, navigationService, global) {
          _classCallCheck(this, ChannelComponent);

          this.http = http;
          this.elementRef = elementRef;
          this.route = route;
          this.router = router;
          this.navigationService = navigationService;
          this.global = global;
          this.isLayout = true;
          this.isScrollContainer = true;
          /** Component type for the current example. */

          this.exampleComponentType = null;
          this.exampleModuleFactory = null;
        }

        _createClass(ChannelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = this.route.snapshot.routeConfig.path;
            this.navigationService.selectChannelByPath(path);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.navigationService.clearChannel();
          }
        }]);

        return ChannelComponent;
      }();

      ChannelComponent.ɵfac = function ChannelComponent_Factory(t) {
        return new (t || ChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]));
      };

      ChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChannelComponent,
        selectors: [["dg-channel"]],
        hostVars: 4,
        hostBindings: function ChannelComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-layout", ctx.isLayout)("dg-scroll-container", ctx.isScrollContainer);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "menus"]],
        template: function ChannelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChannelComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navigationService.channel);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-channel',
            templateUrl: './channel.component.html'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]
          }];
        }, {
          isLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-layout"]
          }],
          isScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-scroll-container"]
          }]
        });
      })();

      var ChannelHomeComponent = /*#__PURE__*/function () {
        function ChannelHomeComponent(router, navigationService, global, route) {
          _classCallCheck(this, ChannelHomeComponent);

          this.router = router;
          this.navigationService = navigationService;
          this.global = global;
          this.route = route;
        }

        _createClass(ChannelHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var firstDocItem = this.navigationService.getChannelFirstDocItem();

            if (firstDocItem) {
              this.router.navigate(['./' + firstDocItem.path], {
                replaceUrl: true,
                relativeTo: this.route
              });
            }
          }
        }]);

        return ChannelHomeComponent;
      }();

      ChannelHomeComponent.ɵfac = function ChannelHomeComponent_Factory(t) {
        return new (t || ChannelHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ChannelHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChannelHomeComponent,
        selectors: [["dg-channel-home"]],
        decls: 0,
        vars: 0,
        template: function ChannelHomeComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelHomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-channel-home',
            template: ""
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!**********************************************************************************!*\
      !*** multi /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/main.ts ***!
      \**********************************************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/main.ts */
      "kO5l");
      /***/
    },

    /***/
    "0Nd9":
    /*!******************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/component-viewer/api/component-api.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: ComponentApiComponent */

    /***/
    function Nd9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function () {
        return ComponentApiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../component-viewer.component */
      "A8ta");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");

      function ComponentApiComponent_ng_container_0_ng_container_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
        }

        if (rf & 2) {
          var apiDeclaration_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", apiDeclaration_r2.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ComponentApiComponent_ng_container_0_ng_container_1_table_7_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var property_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", property_r7.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", property_r7["default"] || "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", property_r7.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ComponentApiComponent_ng_container_0_ng_container_1_table_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ComponentApiComponent_ng_container_0_ng_container_1_table_7_tr_12_Template, 10, 4, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var apiDeclaration_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", apiDeclaration_r2.properties);
        }
      }

      function ComponentApiComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ComponentApiComponent_ng_container_0_ng_container_1_div_6_Template, 1, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ComponentApiComponent_ng_container_0_ng_container_1_table_7_Template, 13, 1, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var apiDeclaration_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](apiDeclaration_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("type-label dg-label ", apiDeclaration_r2.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](apiDeclaration_r2.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", apiDeclaration_r2.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", apiDeclaration_r2.properties && apiDeclaration_r2.properties.length > 0);
        }
      }

      function ComponentApiComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentApiComponent_ng_container_0_ng_container_1_Template, 8, 7, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.apiDeclarations);
        }
      }

      var ComponentApiComponent = /*#__PURE__*/function () {
        function ComponentApiComponent(componentViewer, global, http) {
          _classCallCheck(this, ComponentApiComponent);

          this.componentViewer = componentViewer;
          this.global = global;
          this.http = http;
          this.contentClass = true;
          this.isDocContent = true;
        }

        _createClass(ComponentApiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.contentUrl = this.global.getAssetsContentPath("api-docs/".concat(this.componentViewer.docItem.importSpecifier, "/").concat(this.global.locale, ".html"));
            var apiUrl = this.global.getAssetsContentPath("api-docs/".concat(this.componentViewer.docItem.importSpecifier, "/").concat(this.global.locale, ".json"));
            this.http.get(apiUrl).subscribe({
              next: function next(data) {
                _this.apiDeclarations = data;
              }
            });
          }
        }]);

        return ComponentApiComponent;
      }();

      ComponentApiComponent.ɵfac = function ComponentApiComponent_Factory(t) {
        return new (t || ComponentApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ComponentApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComponentApiComponent,
        selectors: [["dg-component-api"]],
        hostVars: 4,
        hostBindings: function ComponentApiComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-component-api", ctx.contentClass)("dg-doc-content", ctx.isDocContent);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dg-api-header"], [1, "name"], ["class", "dg-api-class-description", 3, "innerHTML", 4, "ngIf"], ["class", "dg-api-properties-table", 4, "ngIf"], [1, "dg-api-class-description", 3, "innerHTML"], [1, "dg-api-properties-table"], [1, "dg-api-properties-header-row"], [1, "dg-api-properties-name-th"], [1, "dg-api-properties-type-th"], [1, "dg-api-properties-default-th"], [1, "dg-api-properties-description-th"], ["class", "dg-api-properties-row", 4, "ngFor", "ngForOf"], [1, "dg-api-properties-row"], [1, "dg-api-properties-name-cell"], [1, "dg-label", "dg-label-sm", "dg-label-outline-primary"], [1, "dg-api-properties-type-cell"], [1, ""], [1, "dg-api-properties-default-cell"], [1, "dg-api-property-description", 3, "innerHTML"]],
        template: function ComponentApiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentApiComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiDeclarations);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentApiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-component-api',
            templateUrl: './component-api.component.html'
          }]
        }], function () {
          return [{
            type: _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, {
          contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-component-api']
          }],
          isDocContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-doc-content']
          }]
        });
      })();
      /***/

    },

    /***/
    "0b7C":
    /*!**************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/example-loader.ts ***!
      \**************************************************************************************************/

    /*! exports provided: LibExampleLoader, LIB_EXAMPLE_LOADER_PROVIDER */

    /***/
    function b7C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibExampleLoader", function () {
        return LibExampleLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIB_EXAMPLE_LOADER_PROVIDER", function () {
        return LIB_EXAMPLE_LOADER_PROVIDER;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _docgeni_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @docgeni/template */
      "wNV8");
      /* harmony import */


      var _component_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./component-examples */
      "bo6b");

      var LibExampleLoader = /*#__PURE__*/function (_docgeni_template__WE) {
        _inherits(LibExampleLoader, _docgeni_template__WE);

        var _super = _createSuper(LibExampleLoader);

        function LibExampleLoader() {
          var _this2;

          _classCallCheck(this, LibExampleLoader);

          _this2 = _super.apply(this, arguments);
          _this2.enableIvy = true;
          return _this2;
        }

        _createClass(LibExampleLoader, [{
          key: 'alib/zoo',
          value: function alibZoo() {
            return __webpack_require__.e(
            /*! import() | components-alib-zoo-index */
            "components-alib-zoo-index").then(__webpack_require__.bind(null,
            /*! ./components/alib/zoo/index */
            "GBez"));
          }
        }, {
          key: 'alib/bar',
          value: function alibBar() {
            return __webpack_require__.e(
            /*! import() | components-alib-bar-index */
            "components-alib-bar-index").then(__webpack_require__.bind(null,
            /*! ./components/alib/bar/index */
            "hFK8"));
          }
        }, {
          key: 'alib/button',
          value: function alibButton() {
            return __webpack_require__.e(
            /*! import() | components-alib-button-index */
            "components-alib-button-index").then(__webpack_require__.bind(null,
            /*! ./components/alib/button/index */
            "7xfw"));
          }
        }, {
          key: 'alib/foo',
          value: function alibFoo() {
            return __webpack_require__.e(
            /*! import() | components-alib-foo-index */
            "components-alib-foo-index").then(__webpack_require__.bind(null,
            /*! ./components/alib/foo/index */
            "Rzas"));
          }
        }, {
          key: 'alib/layout',
          value: function alibLayout() {
            return __webpack_require__.e(
            /*! import() | components-alib-layout-index */
            "components-alib-layout-index").then(__webpack_require__.bind(null,
            /*! ./components/alib/layout/index */
            "kTjw"));
          }
        }, {
          key: "load",
          value: function load(exampleKey) {
            var _this3 = this;

            var example = _component_examples__WEBPACK_IMPORTED_MODULE_2__["EXAMPLE_COMPONENTS"][exampleKey];
            return new Promise(function (resolve) {
              _this3[example.module.importSpecifier]().then(function (result) {
                resolve({
                  moduleType: result.EXAMPLES_MODULE,
                  componentType: result.EXAMPLE_COMPONENTS[exampleKey],
                  example: example
                });
              });
            });
          }
        }]);

        return LibExampleLoader;
      }(_docgeni_template__WEBPACK_IMPORTED_MODULE_1__["ExampleLoader"]);

      LibExampleLoader.ɵfac = function LibExampleLoader_Factory(t) {
        return ɵLibExampleLoader_BaseFactory(t || LibExampleLoader);
      };

      LibExampleLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LibExampleLoader,
        factory: LibExampleLoader.ɵfac
      });

      var ɵLibExampleLoader_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LibExampleLoader);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibExampleLoader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var LIB_EXAMPLE_LOADER_PROVIDER = {
        provide: _docgeni_template__WEBPACK_IMPORTED_MODULE_1__["ExampleLoader"],
        useClass: LibExampleLoader
      };
      /***/
    },

    /***/
    "0ncm":
    /*!*************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/$$_lazy_route_resource lazy namespace object ***!
      \*************************************************************************************************************/

    /*! no static exports found */

    /***/
    function ncm(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "0ncm";
      /***/
    },

    /***/
    "1Yp7":
    /*!******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/api-declaration.ts ***!
      \******************************************************************************************************/

    /*! no exports provided */

    /***/
    function Yp7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "2PPk":
    /*!******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/icon/icon.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: IconComponent */

    /***/
    function PPk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconComponent", function () {
        return IconComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./svgs */
      "pYbF");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "caRq");

      var _c0 = ["*"];

      var IconComponent = /*#__PURE__*/function () {
        function IconComponent(elementRef, domSanitizer) {
          _classCallCheck(this, IconComponent);

          this.elementRef = elementRef;
          this.domSanitizer = domSanitizer;
        }

        _createClass(IconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "setSvg",
          value: function setSvg(name) {
            var svg = _svgs__WEBPACK_IMPORTED_MODULE_1__["BUILTIN_SVGS"][name];

            if (svg) {
              this.elementRef.nativeElement.innerHTML = svg;
            } else {
              this.elementRef.nativeElement.innerHTML = '';
            }
          }
        }, {
          key: "iconName",
          set: function set(name) {
            this.setSvg(name);
          }
        }]);

        return IconComponent;
      }();

      IconComponent.ɵfac = function IconComponent_Factory(t) {
        return new (t || IconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconComponent,
        selectors: [["dg-icon"]],
        hostAttrs: [1, "dg-icon"],
        inputs: {
          iconName: "iconName"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function IconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-icon',
            templateUrl: './icon.component.html',
            host: {
              "class": 'dg-icon'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, {
          iconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "2Pz0":
    /*!***********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/public-api.ts ***!
      \***********************************************************************************************/

    /*! exports provided: CONFIG_TOKEN, DEFAULT_CONFIG, GlobalContext, NavigationService, ChannelResolver, ExampleLoader, PageTitleService */

    /***/
    function Pz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _global_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global-context */
      "gKL3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CONFIG_TOKEN", function () {
        return _global_context__WEBPACK_IMPORTED_MODULE_0__["CONFIG_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return _global_context__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GlobalContext", function () {
        return _global_context__WEBPACK_IMPORTED_MODULE_0__["GlobalContext"];
      });
      /* harmony import */


      var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navigation.service */
      "Tsk+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return _navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"];
      });
      /* harmony import */


      var _channel_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./channel.resolver */
      "hShd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChannelResolver", function () {
        return _channel_resolver__WEBPACK_IMPORTED_MODULE_2__["ChannelResolver"];
      });
      /* harmony import */


      var _example_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./example-loader */
      "KIzp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExampleLoader", function () {
        return _example_loader__WEBPACK_IMPORTED_MODULE_3__["ExampleLoader"];
      });
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page-title.service */
      "qDxM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageTitleService", function () {
        return _page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"];
      });
      /***/

    },

    /***/
    "2iTK":
    /*!******************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/doc-header/doc-header.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: DocHeaderComponent */

    /***/
    function iTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocHeaderComponent", function () {
        return DocHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../icon/icon.component */
      "2PPk");
      /* harmony import */


      var _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/mode.pipe */
      "cYjk");

      function DocHeaderComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocHeaderComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.toggleSidebar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocHeaderComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitle);
        }
      }

      var DocHeaderComponent = /*#__PURE__*/function () {
        function DocHeaderComponent(navigationService, global) {
          _classCallCheck(this, DocHeaderComponent);

          this.navigationService = navigationService;
          this.global = global;
          this.isHeader = true;
        }

        _createClass(DocHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar(event) {
            this.navigationService.toggleSidebar();
            event.stopPropagation();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.navigationService.resetShowSidebar();
          }
        }]);

        return DocHeaderComponent;
      }();

      DocHeaderComponent.ɵfac = function DocHeaderComponent_Factory(t) {
        return new (t || DocHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]));
      };

      DocHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocHeaderComponent,
        selectors: [["dg-doc-header"]],
        hostVars: 2,
        hostBindings: function DocHeaderComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-doc-header", ctx.isHeader);
          }
        },
        inputs: {
          title: "title",
          subtitle: "subtitle"
        },
        decls: 6,
        vars: 7,
        consts: [["class", "sidebar-toggler", "href", "javascript:;", 3, "click", 4, "ngIf"], [1, "title"], ["class", "subtitle", 4, "ngIf"], ["href", "javascript:;", 1, "sidebar-toggler", 3, "click"], ["iconName", "list"], [1, "subtitle"]],
        template: function DocHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocHeaderComponent_a_0_Template, 2, 0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "dgIsFull");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dgIsLite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocHeaderComponent_span_5_Template, 2, 1, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.global.config.mode) && ctx.navigationService.channel || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.global.config.mode));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]],
        pipes: [_pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_4__["IsModeFullPipe"], _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_4__["IsModeLitePipe"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-doc-header',
            templateUrl: './doc-header.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }];
        }, {
          isHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-doc-header"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "4hFW":
    /*!************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/toc.service.ts ***!
      \************************************************************************************************/

    /*! exports provided: TocService */

    /***/
    function hFW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TocService", function () {
        return TocService;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "Uq6i");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "wEA+");
      /* harmony import */


      var _global_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./global-context */
      "gKL3");

      var OFFSET = 0;

      var TocService = /*#__PURE__*/function () {
        function TocService(document, global, viewportScroller) {
          _classCallCheck(this, TocService);

          this.document = document;
          this.viewportScroller = viewportScroller;
          this.linksSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.activeLinkSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          if (global.config.mode === 'lite') {
            OFFSET = 0;
          }

          this.viewportScroller.setOffset([0, OFFSET]);
        }

        _createClass(TocService, [{
          key: "reset",
          value: function reset() {
            this.linksSubject$.next([]);
            this.activeLinkSubject$.next(null);
            this.highestLevel = 0;
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }, {
          key: "generateToc",
          value: function generateToc(docViewerContent) {
            var _this4 = this;

            var scrollContainer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.dg-scroll-container';
            var headers = Array.from(docViewerContent.querySelectorAll('h1, h2, h3, h4'));
            var links = [];
            headers.forEach(function (header) {
              // remove the 'TocLink' icon name from the inner text
              var name = header.innerText.trim().replace(/^TocLink/, '');

              var _header$getBoundingCl = header.getBoundingClientRect(),
                  top = _header$getBoundingCl.top;

              var headerLevel = parseInt(header.tagName[1], 10);
              links.push({
                name: name,
                type: header.tagName.toLowerCase(),
                top: top,
                id: header.id,
                active: false,
                level: headerLevel,
                element: header
              });
              _this4.highestLevel = _this4.highestLevel && headerLevel > _this4.highestLevel ? _this4.highestLevel : headerLevel;
            });
            this.linksSubject$.next(links);
            this.initializeScrollContainer(scrollContainer);
          }
        }, {
          key: "initializeScrollContainer",
          value: function initializeScrollContainer(scrollContainerSelector) {
            var _this5 = this;

            Promise.resolve().then(function () {
              _this5.scrollContainer = scrollContainerSelector ? _this5.document.querySelectorAll(scrollContainerSelector)[0] : window;

              if (_this5.scrollContainer) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this5.scrollContainer, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this5.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10)).subscribe(function () {
                  return _this5.onScroll();
                });
              }

              _this5.onScroll();
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll() {
            var scrollOffset = this.getScrollOffset();
            var activeItem;

            if (scrollOffset <= OFFSET + 1) {
              activeItem = this.links[0];
            } else {
              this.links.some(function (link) {
                if (link.element.offsetTop >= scrollOffset) {
                  activeItem = link;
                  return true;
                }

                return false;
              });

              if (!activeItem) {
                activeItem = this.links[this.links.length - 1];
              }
            }

            this.activeLinkSubject$.next(activeItem || null);
          }
        }, {
          key: "scrollToAnchor",
          value: function scrollToAnchor(urlFragment) {
            if (this.scrollContainer) {
              if (this.scrollContainer === this.document.window) {
                this.viewportScroller.scrollToAnchor(urlFragment);
              } else {
                var link = this.links.find(function (link) {
                  return link.name === urlFragment;
                });

                if (link) {
                  this.scrollContainer.scrollTop = link.element.offsetTop - 10;
                }
              }
            }
          }
        }, {
          key: "getScrollOffset",
          value: function getScrollOffset() {
            if (this.scrollContainer) {
              if (typeof this.scrollContainer.scrollTop !== 'undefined') {
                return this.scrollContainer.scrollTop + OFFSET;
              } else if (typeof this.scrollContainer.pageYOffset !== 'undefined') {
                return this.scrollContainer.pageYOffset + OFFSET;
              }
            } else {
              return 0;
            }
          }
        }, {
          key: "links$",
          get: function get() {
            return this.linksSubject$.asObservable();
          }
        }, {
          key: "links",
          get: function get() {
            return this.linksSubject$.value;
          }
        }, {
          key: "activeLink$",
          get: function get() {
            return this.activeLinkSubject$.asObservable();
          }
        }]);

        return TocService;
      }();

      TocService.ɵfac = function TocService_Factory(t) {
        return new (t || TocService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_global_context__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["ViewportScroller"]));
      };

      TocService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TocService,
        factory: TocService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TocService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: _global_context__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["ViewportScroller"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5CmJ":
    /*!*********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/config.ts ***!
      \*********************************************************************************************/

    /*! no exports provided */

    /***/
    function CmJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "69kI":
    /*!********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/copier/copier.service.ts ***!
      \********************************************************************************************************/

    /*! exports provided: CopierService */

    /***/
    function kI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CopierService", function () {
        return CopierService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");

      var CopierService = /*#__PURE__*/function () {
        function CopierService() {
          _classCallCheck(this, CopierService);
        }

        _createClass(CopierService, [{
          key: "copyText",

          /** Copy the text value to the clipboard. */
          value: function copyText(text) {
            this.createTextareaAndSelect(text);
            var copySuccessful = document.execCommand('copy');
            this.removeFake();
            return copySuccessful;
          }
          /**
           * Creates a hidden textarea element, sets its value from `text` property,
           * and makes a selection on it.
           */

        }, {
          key: "createTextareaAndSelect",
          value: function createTextareaAndSelect(text) {
            // Create a fake element to hold the contents to copy
            this.textarea = document.createElement('textarea'); // Prevent zooming on iOS

            this.textarea.style.fontSize = '12pt'; // Hide the element
            // Can't copy text when set visibility: hidden; or display: none;

            this.textarea.classList.add('dg-visually-hidden'); // Move element to the same position vertically

            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.textarea.style.top = yPosition + 'px';
            this.textarea.setAttribute('readonly', '');
            this.textarea.value = text;
            document.body.appendChild(this.textarea);
            this.textarea.select();
            this.textarea.setSelectionRange(0, this.textarea.value.length);
          }
          /** Remove the text area from the DOM. */

        }, {
          key: "removeFake",
          value: function removeFake() {
            if (this.textarea) {
              document.body.removeChild(this.textarea);
              delete this.textarea;
            }
          }
        }]);

        return CopierService;
      }();

      CopierService.ɵfac = function CopierService_Factory(t) {
        return new (t || CopierService)();
      };

      CopierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CopierService,
        factory: CopierService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopierService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "6uBU":
    /*!*******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/built-in/built-in-component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: DocgeniBuiltInComponent */

    /***/
    function uBU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocgeniBuiltInComponent", function () {
        return DocgeniBuiltInComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");

      var DocgeniBuiltInComponent = /*#__PURE__*/function () {
        function DocgeniBuiltInComponent(elementRef) {
          _classCallCheck(this, DocgeniBuiltInComponent);

          this.elementRef = elementRef;
          this.classes = [];
        }

        _createClass(DocgeniBuiltInComponent, [{
          key: "setAttribute",
          value: function setAttribute(qualifiedName, value) {
            this[qualifiedName] = value;
            this.hostElement.setAttribute(qualifiedName, value);
          }
        }, {
          key: "updateHostClass",
          value: function updateHostClass(classes) {
            var _this6 = this;

            if (this.classes) {
              this.classes.forEach(function (className) {
                if (!_this6.classes.includes(className)) {
                  _this6.removeClass(className);
                }
              });
            }

            var newClasses = [];
            classes.forEach(function (className) {
              if (className) {
                newClasses.push(className);

                if (!_this6.classes.includes(className)) {
                  _this6.addClass(className);
                }
              }
            });
            this.classes = newClasses;
            return this;
          }
        }, {
          key: "addClass",
          value: function addClass(className) {
            this.hostElement.classList.add(className);
          }
        }, {
          key: "removeClass",
          value: function removeClass(className) {
            this.hostElement.classList.remove(className);
          }
        }, {
          key: "hostElement",
          get: function get() {
            return this.elementRef.nativeElement;
          }
        }]);

        return DocgeniBuiltInComponent;
      }();

      DocgeniBuiltInComponent.ɵfac = function DocgeniBuiltInComponent_Factory(t) {
        return new (t || DocgeniBuiltInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      DocgeniBuiltInComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DocgeniBuiltInComponent
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocgeniBuiltInComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "94D3":
    /*!************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/sidebar/sidebar.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function D3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "wEA+");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/global-context */
      "gKL3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../logo/logo.component */
      "XEMZ");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../icon/icon.component */
      "2PPk");
      /* harmony import */


      var _label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../label/label.component */
      "sKEz");
      /* harmony import */


      var _toc_toc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../toc/toc.component */
      "KDNN");
      /* harmony import */


      var _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../locales-selector/locales-selector.component */
      "gyWy");
      /* harmony import */


      var _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../pipes/mode.pipe */
      "cYjk");

      function SidebarComponent_div_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.global.config.description);
        }
      }

      var _c0 = function _c0() {
        return ["/"];
      };

      function SidebarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_span_4_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.global.config.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.global.config.description);
        }
      }

      function SidebarComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          $implicit: a0
        };
      };

      function SidebarComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var menu_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, menu_r8));
        }
      }

      function SidebarComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function SidebarComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function SidebarComponent_ng_template_6_ng_container_0_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r11.title, " ");
        }
      }

      function SidebarComponent_ng_template_6_ng_container_0_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconName", "angleRight");
        }
      }

      function SidebarComponent_ng_template_6_ng_container_0_div_1_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function SidebarComponent_ng_template_6_ng_container_0_div_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_template_6_ng_container_0_div_1_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var menu_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, menu_r20));
        }
      }

      function SidebarComponent_ng_template_6_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_ng_template_6_ng_container_0_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toggle(menu_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ng_template_6_ng_container_0_div_1_div_2_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_ng_template_6_ng_container_0_div_1_div_3_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_ng_template_6_ng_container_0_div_1_ng_container_5_Template, 2, 4, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("group-group--open", ctx_r15.menuDisplayMap.get(menu_r11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.items && menu_r11.items.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r11.items);
        }
      }

      function SidebarComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_template_6_ng_container_0_div_1_Template, 6, 5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.items.length > 0);
        }
      }

      function SidebarComponent_ng_template_6_ng_template_1_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dg-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menu_r11.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r11.title, " ");
        }
      }

      function SidebarComponent_ng_template_6_ng_template_1_ng_template_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r11.subtitle);
        }
      }

      function SidebarComponent_ng_template_6_ng_template_1_ng_template_1_dg_label_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dg-label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelType", menu_r11.label.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r11.label.text);
        }
      }

      function SidebarComponent_ng_template_6_ng_template_1_ng_template_1_dg_toc_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-toc", 39);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          exact: a0
        };
      };

      var _c3 = function _c3(a0) {
        return [a0];
      };

      function SidebarComponent_ng_template_6_ng_template_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_ng_template_6_ng_template_1_ng_template_1_span_5_Template, 2, 1, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_ng_template_6_ng_template_1_ng_template_1_dg_label_7_Template, 2, 2, "dg-label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_ng_template_6_ng_template_1_ng_template_1_dg_toc_8_Template, 1, 0, "dg-toc", 36);
        }

        if (rf & 2) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, !menu_r11.examples));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, "./" + menu_r11.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r11.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.toc === "menu" && _r31.isActive);
        }
      }

      function SidebarComponent_ng_template_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_ng_template_6_ng_template_1_div_0_Template, 4, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_template_6_ng_template_1_ng_template_1_Template, 9, 10, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.isExternal)("ngIfElse", _r28);
        }
      }

      function SidebarComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ng_template_6_ng_template_1_Template, 3, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var menu_r11 = ctx.$implicit;

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.items)("ngIfElse", _r13);
        }
      }

      function SidebarComponent_ng_template_8_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dg-locales-selector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_ng_template_8_div_0_Template, 3, 0, "div", 40);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.global.config.locales && ctx_r6.global.config.locales.length > 1);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(global, router, activatedRoute) {
          _classCallCheck(this, SidebarComponent);

          this.global = global;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.isSidebar = true;
          this.menuDisplayMap = new Map();
          this.initDisplay = true;
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (item) {
              return item instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            })).subscribe(function () {
              _this7.updateGroupsCollapseStates();
            });
          }
        }, {
          key: "toggle",
          value: function toggle(menu) {
            if (!menu.items || !menu.items.length) {
              return;
            }

            var status = this.menuDisplayMap.get(menu);
            this.setMenuOpen(menu, !status);
          }
        }, {
          key: "setMenuOpen",
          value: function setMenuOpen(menu, open) {
            this.menuDisplayMap.set(menu, open);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.initDisplay) {
              this.setMenuDisplay(this.menus);
            }

            this.updateGroupsCollapseStates();
          }
        }, {
          key: "updateGroupsCollapseStates",
          value: function updateGroupsCollapseStates() {
            var _this8 = this;

            var ancestors = [];

            var _iterator = _createForOfIteratorHelper(this.global.docItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var menu = _step.value;
                var urlTree = this.router.createUrlTree(['./' + menu.path], {
                  relativeTo: this.activatedRoute
                });
                var result = this.router.isActive(urlTree, !menu.examples);

                if (result) {
                  ancestors = menu.ancestors;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            ancestors.forEach(function (menu) {
              _this8.setMenuOpen(menu, true);
            });
          }
        }, {
          key: "setMenuDisplay",
          value: function setMenuDisplay(menus) {
            var _iterator2 = _createForOfIteratorHelper(menus),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var menu = _step2.value;
                this.menuDisplayMap.set(menu, true);

                if (menu.items && menu.items.length) {
                  this.setMenuDisplay(menu.items);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["dg-sidebar"]],
        hostVars: 2,
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-sidebar", ctx.isSidebar);
          }
        },
        inputs: {
          menus: "menus"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 10,
        vars: 7,
        consts: [["class", "dg-sidebar-header", 4, "ngIf"], [1, "dg-menu"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["navTemplate", ""], ["changeLanguageTemplate", ""], [1, "dg-sidebar-header"], [1, "title", 3, "routerLink"], ["class", "description", 4, "ngIf"], [1, "description"], [1, "menu-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], ["item", ""], ["class", "menu-group", 3, "group-group--open", 4, "ngIf"], [1, "menu-group"], [1, "group-header", 3, "click"], ["class", "group-title", 4, "ngIf"], ["class", "group-arrow", 4, "ngIf"], [1, "group-body"], [4, "ngFor", "ngForOf"], [1, "group-title"], [1, "group-arrow"], [3, "iconName"], ["class", "menu-item", 4, "ngIf", "ngIfElse"], ["docItemMenu", ""], ["target", "_blank", 1, "item-content", 3, "href"], ["iconName", "external"], ["routerLinkActive", "active", 1, "menu-item", 3, "routerLinkActiveOptions"], ["routerLinkActive", "routerLinkActive"], [1, "item-content", 3, "routerLink"], [1, "item-content-title"], ["class", "subtitle", 4, "ngIf"], [1, "item-content-label"], [3, "labelType", 4, "ngIf"], ["class", "dg-toc-menu", 4, "ngIf"], [1, "subtitle"], [3, "labelType"], [1, "dg-toc-menu"], ["class", "action-items", 4, "ngIf"], [1, "action-items"], [1, "action-item"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 5, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "dgIsLite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_ng_container_3_Template, 2, 4, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_ng_container_4_Template, 2, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "dgIsLite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_ng_template_6_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_ng_template_8_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.global.config.mode));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.global.config.mode));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], _toc_toc_component__WEBPACK_IMPORTED_MODULE_8__["TableOfContentsComponent"], _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_9__["LocalesSelectorComponent"]],
        pipes: [_pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_10__["IsModeLitePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-sidebar',
            templateUrl: './sidebar.component.html'
          }]
        }], function () {
          return [{
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, {
          isSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-sidebar"]
          }],
          menus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "A3AA":
    /*!**************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/content-viewer/content-viewer.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: ContentViewerComponent */

    /***/
    function A3AA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentViewerComponent", function () {
        return ContentViewerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "DSWV");
      /* harmony import */


      var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../example-viewer/example-viewer.component */
      "h2Vk");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "wEA+");
      /* harmony import */


      var _services_dom_portal_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/dom-portal-outlet */
      "wiIL");
      /* harmony import */


      var _built_in_built_in_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../built-in/built-in-components */
      "ECsV");
      /* harmony import */


      var _content_renderer___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../content-renderer  */
      "SpGE");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");
      /* harmony import */


      var _services_toc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/toc.service */
      "4hFW");

      var ContentViewerComponent = /*#__PURE__*/function (_content_renderer___W) {
        _inherits(ContentViewerComponent, _content_renderer___W);

        var _super2 = _createSuper(ContentViewerComponent);

        function ContentViewerComponent(http, elementRef, appRef, componentFactoryResolver, injector, viewContainerRef, ngZone, tocService) {
          var _this9;

          _classCallCheck(this, ContentViewerComponent);

          _this9 = _super2.call(this, http);
          _this9.elementRef = elementRef;
          _this9.appRef = appRef;
          _this9.componentFactoryResolver = componentFactoryResolver;
          _this9.injector = injector;
          _this9.viewContainerRef = viewContainerRef;
          _this9.ngZone = ngZone;
          _this9.tocService = tocService;
          _this9.isDocContent = true;
          _this9.contentRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this9.portalHosts = [];
          return _this9;
        }

        _createClass(ContentViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateDocument",
          value: function updateDocument(content) {
            var _this10 = this;

            this.elementRef.nativeElement.innerHTML = content;
            this.loadComponents('example', _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ExampleViewerComponent"]);
            Object(_built_in_built_in_components__WEBPACK_IMPORTED_MODULE_5__["getBuiltInComponents"])().forEach(function (item) {
              _this10.loadComponents(item.selector, item.component);
            }); // Resolving and creating components dynamically in Angular happens synchronously, but since
            // we want to emit the output if the components are actually rendered completely, we wait
            // until the Angular zone becomes stable.

            this.ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
              _this10.ngZone.run(function () {
                _this10.contentRendered.emit(_this10.elementRef.nativeElement);

                _this10.updateTableOfContents(_this10.elementRef.nativeElement);
              });
            });
          }
        }, {
          key: "updateTableOfContents",
          value: function updateTableOfContents(docViewerContent) {
            if (docViewerContent) {
              this.tocService.generateToc(docViewerContent);
            }
          }
        }, {
          key: "loadComponents",
          value: function loadComponents(selector, componentClass) {
            var _this11 = this;

            var exampleElements = this.elementRef.nativeElement.querySelectorAll(selector);
            Array.prototype.slice.call(exampleElements).forEach(function (element) {
              var portalHost = new _services_dom_portal_outlet__WEBPACK_IMPORTED_MODULE_4__["DomPortalOutlet"](element, _this11.componentFactoryResolver, _this11.appRef, _this11.injector, [element.childNodes]);
              var examplePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentClass, _this11.viewContainerRef);
              var exampleViewerRef = portalHost.attach(examplePortal); // 循环设置属性

              for (var attributeKey in element.attributes) {
                if (Object.prototype.hasOwnProperty.call(element.attributes, attributeKey)) {
                  var attribute = element.attributes[attributeKey]; // eslint-disable-next-line dot-notation

                  var setAttributeFn = exampleViewerRef.instance['setAttribute'];

                  if (setAttributeFn) {
                    setAttributeFn.call(exampleViewerRef.instance, attribute.nodeName, element.getAttribute(attribute.nodeName));
                  } else {
                    exampleViewerRef.instance[attribute.nodeName] = element.getAttribute(attribute.nodeName);
                  }
                }
              }

              _this11.portalHosts.push(portalHost);
            });
          }
          /** Show an error that occurred when fetching a document. */

        }, {
          key: "showError",
          value: function showError(url, error) {
            console.log(error);
            this.elementRef.nativeElement.innerText = "Failed to load document: ".concat(url, ". Error: ").concat(error.statusText);
          }
        }, {
          key: "clearLiveExamples",
          value: function clearLiveExamples() {
            this.portalHosts.forEach(function (h) {
              return h.dispose();
            });
            this.portalHosts = [];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearLiveExamples();
            this.tocService.reset();

            _get(_getPrototypeOf(ContentViewerComponent.prototype), "destroy", this).call(this);
          }
        }]);

        return ContentViewerComponent;
      }(_content_renderer___WEBPACK_IMPORTED_MODULE_6__["ContentRenderer"]);

      ContentViewerComponent.ɵfac = function ContentViewerComponent_Factory(t) {
        return new (t || ContentViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toc_service__WEBPACK_IMPORTED_MODULE_8__["TocService"]));
      };

      ContentViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContentViewerComponent,
        selectors: [["dg-content-viewer"]],
        hostVars: 2,
        hostBindings: function ContentViewerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-doc-content", ctx.isDocContent);
          }
        },
        outputs: {
          contentRendered: "contentRendered"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        template: function ContentViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading...");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentViewerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-content-viewer',
            template: 'Loading...'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _services_toc_service__WEBPACK_IMPORTED_MODULE_8__["TocService"]
          }];
        }, {
          isDocContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-doc-content']
          }],
          contentRendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "A8ta":
    /*!*****************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/component-viewer/component-viewer.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: ComponentViewerComponent, ComponentEmptyComponent */

    /***/
    function A8ta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentViewerComponent", function () {
        return ComponentViewerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentEmptyComponent", function () {
        return ComponentEmptyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _shared_doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/doc-meta/doc-meta.component */
      "dFo5");
      /* harmony import */


      var _shared_doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/doc-header/doc-header.component */
      "2iTK");
      /* harmony import */


      var _shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/pipes/translate.pipe */
      "PnZ4");

      var _c0 = function _c0() {
        return ["./overview"];
      };

      function ComponentViewerComponent_ng_container_0_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dgTranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "OVERVIEW"));
        }
      }

      var _c1 = function _c1() {
        return ["./examples"];
      };

      function ComponentViewerComponent_ng_container_0_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dgTranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "EXAMPLES"));
        }
      }

      var _c2 = function _c2() {
        return ["./api"];
      };

      function ComponentViewerComponent_ng_container_0_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
        }
      }

      function ComponentViewerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-doc-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComponentViewerComponent_ng_container_0_a_3_Template, 3, 5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComponentViewerComponent_ng_container_0_a_4_Template, 3, 5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComponentViewerComponent_ng_container_0_a_5_Template, 2, 2, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.docItem.title)("subtitle", ctx_r0.docItem.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.docItem.overview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.docItem.examples.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.docItem.api);
        }
      }

      var ComponentViewerComponent = /*#__PURE__*/function () {
        function ComponentViewerComponent() {
          _classCallCheck(this, ComponentViewerComponent);

          this.isDocViewer = true;
        }

        _createClass(ComponentViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ComponentViewerComponent;
      }();

      ComponentViewerComponent.ɵfac = function ComponentViewerComponent_Factory(t) {
        return new (t || ComponentViewerComponent)();
      };

      ComponentViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComponentViewerComponent,
        selectors: [["dg-component-viewer"]],
        hostVars: 2,
        hostBindings: function ComponentViewerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-component-viewer", ctx.isDocViewer);
          }
        },
        inputs: {
          docItem: "docItem"
        },
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"], [3, "docItem"], [3, "title", "subtitle"], [1, "dg-tab-links"], ["class", "dg-tab-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "dg-tab-link", 3, "routerLink"]],
        template: function ComponentViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentViewerComponent_ng_container_0_Template, 6, 5, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dg-doc-meta", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("docItem", ctx.docItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_3__["DocMetaComponent"], _shared_doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_4__["DocHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        pipes: [_shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentViewerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-component-viewer',
            templateUrl: './component-viewer.component.html'
          }]
        }], function () {
          return [];
        }, {
          isDocViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-component-viewer"]
          }],
          docItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var ComponentEmptyComponent = /*#__PURE__*/function () {
        function ComponentEmptyComponent() {
          _classCallCheck(this, ComponentEmptyComponent);

          this.isDocEmpty = true;
        }

        _createClass(ComponentEmptyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ComponentEmptyComponent;
      }();

      ComponentEmptyComponent.ɵfac = function ComponentEmptyComponent_Factory(t) {
        return new (t || ComponentEmptyComponent)();
      };

      ComponentEmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComponentEmptyComponent,
        selectors: [["dg-component-empty"]],
        hostVars: 2,
        hostBindings: function ComponentEmptyComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-component-empty", ctx.isDocEmpty);
          }
        },
        decls: 2,
        vars: 0,
        template: function ComponentEmptyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current component has not been documented.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentEmptyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-component-empty',
            template: "\n        <p>Current component has not been documented.</p>\n    "
          }]
        }], function () {
          return [];
        }, {
          isDocEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-component-empty"]
          }]
        });
      })();
      /***/

    },

    /***/
    "B6mT":
    /*!************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/utils/color-metadata.ts ***!
      \************************************************************************************************/

    /*! exports provided: colorMetadata */

    /***/
    function B6mT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colorMetadata", function () {
        return colorMetadata;
      });

      function colorMetadata(color) {
        var obj;

        if (color.startsWith('#')) {
          obj = hexColorMetadata(color);
        } else if (color.startsWith('rgb')) {
          obj = rgbColorMetadata(color);
        } else {
          throw new Error('unsupported color format ' + color);
        }

        return obj;
      }

      function hexColorMetadata(color) {
        var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        var hex = color.replace(rgx, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });
        var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return {
          r: parseInt(rgb[1], 16),
          g: parseInt(rgb[2], 16),
          b: parseInt(rgb[3], 16)
        };
      }

      function rgbColorMetadata(color) {
        var result = /rgb\(([0-9]{1,3})\s*[,\s]\s*([0-9]{1,3})\s*[,\s]\s*([0-9]{1,3})\)/i.exec(color);
        return {
          r: parseInt(result[1], 10),
          g: parseInt(result[2], 10),
          b: parseInt(result[3], 10)
        };
      }
      /***/

    },

    /***/
    "BOKR":
    /*!**********************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/module.ts ***!
      \**********************************************************************************/

    /*! exports provided: DocgeniTemplateModule */

    /***/
    function BOKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocgeniTemplateModule", function () {
        return DocgeniTemplateModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/shared.module */
      "YB8S");
      /* harmony import */


      var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/pages.module */
      "tm1L");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");
      /* harmony import */


      var _built_in_built_in_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./built-in/built-in.module */
      "j9J+");

      var DocgeniTemplateModule = function DocgeniTemplateModule() {
        _classCallCheck(this, DocgeniTemplateModule);
      };

      DocgeniTemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DocgeniTemplateModule
      });
      DocgeniTemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DocgeniTemplateModule_Factory(t) {
          return new (t || DocgeniTemplateModule)();
        },
        providers: [{
          provide: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["CONFIG_TOKEN"],
          useValue: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONFIG"]
        }],
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocgeniSharedModule"], _built_in_built_in_module__WEBPACK_IMPORTED_MODULE_5__["DocgeniBuiltInModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniPagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocgeniSharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniPagesModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocgeniTemplateModule, {
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocgeniSharedModule"], _built_in_built_in_module__WEBPACK_IMPORTED_MODULE_5__["DocgeniBuiltInModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniPagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocgeniSharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniPagesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocgeniTemplateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocgeniSharedModule"], _built_in_built_in_module__WEBPACK_IMPORTED_MODULE_5__["DocgeniBuiltInModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniPagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocgeniSharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniPagesModule"]],
            providers: [{
              provide: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["CONFIG_TOKEN"],
              useValue: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONFIG"]
            }]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Bc2r":
    /*!*****************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/index.ts ***!
      \*****************************************************************************************/

    /*! exports provided: DOCGENI_SITE_PROVIDERS, IMPORT_MODULES, RootComponent, DocgeniTemplateModule */

    /***/
    function Bc2r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOCGENI_SITE_PROVIDERS", function () {
        return DOCGENI_SITE_PROVIDERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IMPORT_MODULES", function () {
        return IMPORT_MODULES;
      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      "xzLZ");
      /* harmony import */


      var _example_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./example-loader */
      "0b7C");
      /* harmony import */


      var _components_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/custom */
      "X0bL");
      /* harmony import */


      var _docgeni_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @docgeni/template */
      "wNV8");
      /* harmony import */


      var _navigations_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navigations.json */
      "pCGV");

      var _navigations_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./navigations.json */
      "pCGV", 1);
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RootComponent", function () {
        return _docgeni_template__WEBPACK_IMPORTED_MODULE_3__["RootComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniTemplateModule", function () {
        return _docgeni_template__WEBPACK_IMPORTED_MODULE_3__["DocgeniTemplateModule"];
      });

      var DOCGENI_SITE_PROVIDERS = [].concat(_toConsumableArray(_docgeni_template__WEBPACK_IMPORTED_MODULE_3__["DOCGENI_INITIALIZER_PROVIDERS"]), [_example_loader__WEBPACK_IMPORTED_MODULE_1__["LIB_EXAMPLE_LOADER_PROVIDER"], {
        provide: _docgeni_template__WEBPACK_IMPORTED_MODULE_3__["CONFIG_TOKEN"],
        useValue: _config__WEBPACK_IMPORTED_MODULE_0__["config"]
      }]);
      var IMPORT_MODULES = [_components_custom__WEBPACK_IMPORTED_MODULE_2__["CustomComponentsModule"]];
      /***/
    },

    /***/
    "DfRf":
    /*!**********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/library.ts ***!
      \**********************************************************************************************/

    /*! no exports provided */

    /***/
    function DfRf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "ECsV":
    /*!********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/built-in/built-in-components.ts ***!
      \********************************************************************************************************/

    /*! exports provided: setBuiltInComponents, getBuiltInComponents, addBuiltInComponents */

    /***/
    function ECsV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setBuiltInComponents", function () {
        return setBuiltInComponents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBuiltInComponents", function () {
        return getBuiltInComponents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addBuiltInComponents", function () {
        return addBuiltInComponents;
      });

      var builtInComponents;

      function setBuiltInComponents(components) {
        builtInComponents = components;
      }

      function getBuiltInComponents() {
        return builtInComponents;
      }

      function addBuiltInComponents(components) {
        builtInComponents = builtInComponents.concat(components);
      }
      /***/

    },

    /***/
    "FRmB":
    /*!*********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/router-reset.service.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: RouterResetService */

    /***/
    function FRmB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterResetService", function () {
        return RouterResetService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _pages_channel_channel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../pages/channel/channel.component */
      "+ELa");
      /* harmony import */


      var _pages_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pages/doc-viewer/doc-viewer.component */
      "cyu1");
      /* harmony import */


      var _pages_component_viewer_overview_component_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pages/component-viewer/overview/component-overview.component */
      "rVPT");
      /* harmony import */


      var _pages_component_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pages/component-viewer */
      "jTvV");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pages/home/home.component */
      "LxNY");
      /* harmony import */


      var _pages_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pages/example/example.component */
      "hDUS");
      /* harmony import */


      var _pages_root_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pages/root/root.component */
      "vy4S");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _global_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./global-context */
      "gKL3");

      var componentChildrenRoutes = [{
        path: '',
        component: _pages_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerHomeComponent"]
      }, {
        path: 'overview',
        component: _pages_component_viewer_overview_component_overview_component__WEBPACK_IMPORTED_MODULE_3__["ComponentOverviewComponent"]
      }, {
        path: 'api',
        component: _pages_component_viewer__WEBPACK_IMPORTED_MODULE_4__["ComponentApiComponent"]
      }, {
        path: 'examples',
        component: _pages_component_viewer__WEBPACK_IMPORTED_MODULE_4__["ComponentExamplesComponent"]
      }, {
        path: 'empty',
        component: _pages_component_viewer__WEBPACK_IMPORTED_MODULE_4__["ComponentEmptyComponent"]
      }, {
        path: '**',
        component: _pages_component_viewer__WEBPACK_IMPORTED_MODULE_4__["ComponentExamplesComponent"]
      }];

      var RouterResetService = /*#__PURE__*/function () {
        function RouterResetService(router, global) {
          _classCallCheck(this, RouterResetService);

          this.router = router;
          this.global = global;
        }

        _createClass(RouterResetService, [{
          key: "resetRoutes",
          value: function resetRoutes() {
            var config = this.router.config;
            var routes = [{
              path: '',
              component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            }];
            var rootRoutes = [].concat(_toConsumableArray(this.global.config.locales.map(function (locale) {
              return {
                path: locale.key,
                component: _pages_root_root_component__WEBPACK_IMPORTED_MODULE_7__["ActualRootComponent"],
                children: routes
              };
            })), [{
              path: '',
              component: _pages_root_root_component__WEBPACK_IMPORTED_MODULE_7__["ActualRootComponent"],
              children: routes
            }, {
              path: '~examples/:name',
              component: _pages_example_example_component__WEBPACK_IMPORTED_MODULE_6__["ExampleIsolatedViewerComponent"]
            }]);
            var channelPathToRoutes = {};
            var channelPathToHomeRoutes = {};
            var shouldRemoveHome = false;

            if (this.global.config.mode === 'full') {
              var rootNavs = this.global.navs.filter(function (nav) {
                return !nav.isExternal;
              });
              rootNavs.forEach(function (nav) {
                if (nav.items) {
                  var route = {
                    path: nav.path,
                    component: _pages_channel_channel_component__WEBPACK_IMPORTED_MODULE_1__["ChannelComponent"],
                    children: [{
                      path: '',
                      component: _pages_channel_channel_component__WEBPACK_IMPORTED_MODULE_1__["ChannelHomeComponent"]
                    }]
                  };
                  channelPathToHomeRoutes[nav.path] = route.children[0];

                  if (nav.lib) {
                    route.children.push({
                      path: ':id',
                      component: _pages_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"],
                      children: componentChildrenRoutes
                    });
                  }

                  routes.push(route);
                  channelPathToRoutes[nav.path] = route;
                }
              });
              this.global.docItems.forEach(function (docItem) {
                var route = docItem.importSpecifier ? {
                  path: docItem.path,
                  component: _pages_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"],
                  children: componentChildrenRoutes
                } : {
                  path: docItem.path,
                  component: _pages_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"]
                };
                var channelRoute = channelPathToRoutes[docItem.channelPath];

                if (channelRoute) {
                  // remove chanel home when has route path is ''
                  if (route.path === '' && channelRoute.children.includes(channelPathToHomeRoutes[channelRoute.path])) {
                    channelRoute.children.splice(0, 1);
                  }

                  channelRoute.children.push(route);
                } else if (!docItem.importSpecifier) {
                  // 独立的页面，不属于任何频道
                  route.data = {
                    single: true
                  };
                  routes.push(route);
                }
              });
            } else {
              this.global.docItems.forEach(function (docItem) {
                var route = docItem.importSpecifier ? {
                  path: docItem.path,
                  component: _pages_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"],
                  children: componentChildrenRoutes
                } : {
                  path: docItem.path,
                  component: _pages_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"]
                }; // remove home when route path is ''

                if (route.path === '') {
                  shouldRemoveHome = true;
                }

                routes.push(route);
              });

              if (shouldRemoveHome) {
                routes.splice(0, 1);
              }
            }

            this.router.resetConfig([].concat(_toConsumableArray(config), _toConsumableArray(rootRoutes), [{
              path: '**',
              redirectTo: ''
            }]));
          }
        }]);

        return RouterResetService;
      }();

      RouterResetService.ɵfac = function RouterResetService_Factory(t) {
        return new (t || RouterResetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_context__WEBPACK_IMPORTED_MODULE_9__["GlobalContext"]));
      };

      RouterResetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RouterResetService,
        factory: RouterResetService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterResetService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _global_context__WEBPACK_IMPORTED_MODULE_9__["GlobalContext"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GPwl":
    /*!*********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/module.ts ***!
      \*********************************************************************************************/

    /*! no exports provided */

    /***/
    function GPwl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "HhmG":
    /*!****************************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/component-viewer/examples/component-examples.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: ComponentExamplesComponent */

    /***/
    function HhmG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentExamplesComponent", function () {
        return ComponentExamplesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../component-viewer.component */
      "A8ta");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _shared_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/example-viewer/example-viewer.component */
      "h2Vk");

      function ComponentExamplesComponent_dg_example_viewer_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-example-viewer", 1);
        }

        if (rf & 2) {
          var example_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", example_r1);
        }
      }

      var ComponentExamplesComponent = /*#__PURE__*/function () {
        function ComponentExamplesComponent(componentViewer, navigationService) {
          _classCallCheck(this, ComponentExamplesComponent);

          this.componentViewer = componentViewer;
          this.navigationService = navigationService;
          this.isComponentExamples = true;
        }

        _createClass(ComponentExamplesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "examples",
          get: function get() {
            return this.componentViewer.docItem.examples || [];
          }
        }]);

        return ComponentExamplesComponent;
      }();

      ComponentExamplesComponent.ɵfac = function ComponentExamplesComponent_Factory(t) {
        return new (t || ComponentExamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]));
      };

      ComponentExamplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComponentExamplesComponent,
        selectors: [["dg-component-examples"]],
        hostVars: 2,
        hostBindings: function ComponentExamplesComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-examples", ctx.isComponentExamples);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[3, "name", 4, "ngFor", "ngForOf"], [3, "name"]],
        template: function ComponentExamplesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentExamplesComponent_dg_example_viewer_0_Template, 1, 1, "dg-example-viewer", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.examples);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ExampleViewerComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentExamplesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-component-examples',
            templateUrl: './component-examples.component.html'
          }]
        }], function () {
          return [{
            type: _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
          }];
        }, {
          isComponentExamples: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-examples']
          }]
        });
      })();
      /***/

    },

    /***/
    "KDNN":
    /*!****************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/toc/toc.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TableOfContentsComponent */

    /***/
    function KDNN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableOfContentsComponent", function () {
        return TableOfContentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "Uq6i");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "wEA+");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/global-context */
      "gKL3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _services_toc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/toc.service */
      "4hFW");

      function TableOfContentsComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableOfContentsComponent_li_2_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var link_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onLinkClick($event, link_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dg-level-", link_r1.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-level", link_r1.level - ctx_r0.tocService.highestLevel + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", link_r1 === ctx_r0.activeLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.rootUrl + "#" + link_r1.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-level", link_r1.level - ctx_r0.tocService.highestLevel + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.name, " ");
        }
      }

      var OFFSET = 60;

      var TableOfContentsComponent = /*#__PURE__*/function () {
        function TableOfContentsComponent(router, route, global, locationStrategy, tocService) {
          var _this12 = this;

          _classCallCheck(this, TableOfContentsComponent);

          this.router = router;
          this.route = route;
          this.locationStrategy = locationStrategy;
          this.tocService = tocService;
          this.isToc = true;
          this.container = '.dg-scroll-container';
          this.links = [];
          this.activeLink = null;
          this.rootUrl = this.locationStrategy.path(false);
          this.hideToc = true;
          this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.urlFragment = '';

          if (global.config.mode === 'lite') {
            OFFSET = 0;
          }

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              var rootUrl = _this12.locationStrategy.path(false);

              if (rootUrl !== _this12.rootUrl) {
                _this12.rootUrl = rootUrl;
              }
            }
          });
          this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(function (fragment) {
            _this12.urlFragment = fragment;

            _this12.tocService.scrollToAnchor(_this12.urlFragment);
          });
          this.tocService.links$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(function (links) {
            _this12.hideToc = !links || links.length === 0;

            if (!_this12.hideToc) {
              _this12.tocService.scrollToAnchor(_this12.urlFragment);
            }
          });
          this.tocService.activeLink$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(function (activeLink) {
            _this12.activeLink = activeLink;
          });
        }

        _createClass(TableOfContentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.next();
          }
        }, {
          key: "onLinkClick",
          value: function onLinkClick($event, link) {// 当前的 urlFragment 和点击相同，阻止默认行为，因为浏览器会按照整个文档可视区域滚动，
            // if (link.id === this.urlFragment) {
            //     $event.preventDefault();
            // }
          }
        }]);

        return TableOfContentsComponent;
      }();

      TableOfContentsComponent.ɵfac = function TableOfContentsComponent_Factory(t) {
        return new (t || TableOfContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toc_service__WEBPACK_IMPORTED_MODULE_6__["TocService"]));
      };

      TableOfContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableOfContentsComponent,
        selectors: [["dg-toc"]],
        hostVars: 4,
        hostBindings: function TableOfContentsComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-toc", ctx.isToc)("dg-d-none", ctx.hideToc);
          }
        },
        inputs: {
          container: "container"
        },
        decls: 4,
        vars: 4,
        consts: [[1, "dg-toc-container"], [3, "class", 4, "ngFor", "ngForOf"], [1, "dg-link", 3, "href", "click"]],
        template: function TableOfContentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableOfContentsComponent_li_2_Template, 3, 9, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Table of Contents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.tocService.links$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableOfContentsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-toc',
            templateUrl: './toc.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]
          }, {
            type: _services_toc_service__WEBPACK_IMPORTED_MODULE_6__["TocService"]
          }];
        }, {
          isToc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-toc"]
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideToc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-d-none']
          }]
        });
      })();
      /***/

    },

    /***/
    "KIzp":
    /*!***************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/example-loader.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ExampleLoader */

    /***/
    function KIzp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleLoader", function () {
        return ExampleLoader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");

      var ExampleLoader = function ExampleLoader() {
        _classCallCheck(this, ExampleLoader);
      };

      ExampleLoader.ɵfac = function ExampleLoader_Factory(t) {
        return new (t || ExampleLoader)();
      };

      ExampleLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExampleLoader,
        factory: ExampleLoader.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleLoader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LxNY":
    /*!*****************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/home/home.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LxNY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/pipes/translate.pipe */
      "PnZ4");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _services_page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/page-title.service */
      "qDxM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "NJkh");
      /* harmony import */


      var _shared_content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/content-viewer/content-viewer.component */
      "A3AA");
      /* harmony import */


      var _shared_pipes_hero_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/pipes/hero.pipe */
      "kzzZ");
      /* harmony import */


      var _shared_pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/pipes/assets-content-path.pipe */
      "zVRa");

      function HomeComponent_div_0_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "dgHeroActionClass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, item_r5))("href", item_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.text, " ");
        }
      }

      function HomeComponent_div_0_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.global.homeMeta.hero.banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function HomeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_0_a_7_Template, 3, 5, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_0_img_9_Template, 1, 1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.global.homeMeta.hero.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.global.homeMeta.hero.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.global.homeMeta.hero.actions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.global.homeMeta.hero.backgroundColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.global.homeMeta.hero.banner);
        }
      }

      function HomeComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r7.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_div_1_Template, 5, 3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.global.homeMeta.features);
        }
      }

      function HomeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-content-viewer", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dgAssetsContentPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.global.homeMeta.contentPath));
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(global, router, navigationService, pageTitle) {
          _classCallCheck(this, HomeComponent);

          this.global = global;
          this.isHome = true;
          this.hasHome = false;

          if (!global.homeMeta) {
            if (global.config.mode === 'full') {
              var channels = navigationService.getChannels();

              if (channels && channels[0].path && !channels[0].isExternal) {
                router.navigateByUrl(channels[0].path, {
                  replaceUrl: true
                });
              }
            } else {
              var docItem = navigationService.searchFirstDocItem();

              if (docItem) {
                router.navigateByUrl(docItem.path, {
                  replaceUrl: true
                });
              }
            }

            return;
          }

          pageTitle.title = new _shared_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"](global).transform('HOME');
          this.hasHome = true;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["dg-home"]],
        hostVars: 2,
        hostBindings: function HomeComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-home", ctx.isHome);
          }
        },
        decls: 4,
        vars: 3,
        consts: [["class", "dg-hero", 4, "ngIf"], ["class", "dg-features", 4, "ngIf"], ["class", "dg-extra-content", 4, "ngIf"], [1, "dg-hero"], [1, "dg-hero-launch"], [1, "dg-launch-title"], [1, "dg-launch-description"], [1, "dg-launch-actions"], ["class", "dg-launch-action dg-btn", 3, "ngClass", "href", 4, "ngFor", "ngForOf"], [1, "dg-hero-banner"], [3, "src", 4, "ngIf"], [1, "dg-launch-action", "dg-btn", 3, "ngClass", "href"], [3, "src"], [1, "dg-features"], ["class", "dg-feature", 4, "ngFor", "ngForOf"], [1, "dg-feature"], ["alt", "", 3, "src"], [1, "dg-feature-title"], [1, "dg-feature-description", 3, "innerHTML"], [1, "dg-extra-content"], [3, "url"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 10, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 3, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dg-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.global.homeMeta.hero);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.global.homeMeta.features && ctx.global.homeMeta.features.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.global.homeMeta.contentPath);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _shared_content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_7__["ContentViewerComponent"]],
        pipes: [_shared_pipes_hero_pipe__WEBPACK_IMPORTED_MODULE_8__["HeroActionClassPipe"], _shared_pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_9__["AssetsContentPathPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-home',
            templateUrl: './home.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
          }, {
            type: _services_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]
          }];
        }, {
          isHome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-home"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Mf95":
    /*!******************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/built-in/index.ts ***!
      \******************************************************************************************/

    /*! exports provided: DocgeniBuiltInModule, DocgeniBuiltInComponent, setBuiltInComponents, getBuiltInComponents, addBuiltInComponents, BUILT_IN_COMPONENTS */

    /***/
    function Mf95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BUILT_IN_COMPONENTS", function () {
        return BUILT_IN_COMPONENTS;
      });
      /* harmony import */


      var _label_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./label/label.component */
      "yzKF");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert/alert.component */
      "za4Q");
      /* harmony import */


      var _built_in_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./built-in.module */
      "j9J+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniBuiltInModule", function () {
        return _built_in_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniBuiltInModule"];
      });
      /* harmony import */


      var _built_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./built-in-component */
      "6uBU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniBuiltInComponent", function () {
        return _built_in_component__WEBPACK_IMPORTED_MODULE_3__["DocgeniBuiltInComponent"];
      });
      /* harmony import */


      var _built_in_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./built-in-components */
      "ECsV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setBuiltInComponents", function () {
        return _built_in_components__WEBPACK_IMPORTED_MODULE_4__["setBuiltInComponents"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getBuiltInComponents", function () {
        return _built_in_components__WEBPACK_IMPORTED_MODULE_4__["getBuiltInComponents"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "addBuiltInComponents", function () {
        return _built_in_components__WEBPACK_IMPORTED_MODULE_4__["addBuiltInComponents"];
      });

      var BUILT_IN_COMPONENTS = [_label_label_component__WEBPACK_IMPORTED_MODULE_0__["default"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["default"]];
      /***/
    },

    /***/
    "MvtF":
    /*!******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/navigation-item.ts ***!
      \******************************************************************************************************/

    /*! no exports provided */

    /***/
    function MvtF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "NJkh":
    /*!**********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/footer/footer.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function NJkh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/global-context */
      "gKL3");

      var _c0 = ["*"];

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent(global, elementRef) {
          _classCallCheck(this, FooterComponent);

          this.global = global;
          this.elementRef = elementRef;
          this.isHide = true;
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.global.config.footer) {
              this.elementRef.nativeElement.innerHTML = this.global.config.footer;
              this.isHide = false;
            } else {
              this.isHide = true;
            }
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["dg-footer"]],
        hostAttrs: [1, "dg-footer"],
        hostVars: 2,
        hostBindings: function FooterComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-hidden", ctx.isHide);
          }
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-footer',
            templateUrl: './footer.component.html',
            host: {
              "class": 'dg-footer'
            }
          }]
        }], function () {
          return [{
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          isHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-hidden"]
          }]
        });
      })();
      /***/

    },

    /***/
    "PnZ4":
    /*!*******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/pipes/translate.pipe.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: TranslatePipe */

    /***/
    function PnZ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
        return TranslatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/global-context */
      "gKL3");

      var TRANSLATES = {
        'zh-cn': {
          OVERVIEW: '概览',
          EXAMPLES: '示例',
          HOME: '首页',
          LAST_UPDATED_TIME: '最后更新',
          PRE_PAGE: '上一篇',
          NEXT_PAGE: '下一篇'
        },
        'en-us': {
          OVERVIEW: 'Overview',
          EXAMPLES: 'Examples',
          HOME: 'Home',
          LAST_UPDATED_TIME: 'Last updated',
          PRE_PAGE: 'Previous',
          NEXT_PAGE: 'Next'
        }
      };

      var TranslatePipe = /*#__PURE__*/function () {
        function TranslatePipe(global) {
          _classCallCheck(this, TranslatePipe);

          this.global = global;
        }

        _createClass(TranslatePipe, [{
          key: "transform",
          value: function transform(key) {
            var langTranslates = TRANSLATES[this.global.locale.toLowerCase()] || TRANSLATES['en-us'];
            return langTranslates[key] ? langTranslates[key] : key;
          }
        }]);

        return TranslatePipe;
      }();

      TranslatePipe.ɵfac = function TranslatePipe_Factory(t) {
        return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]));
      };

      TranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dgTranslate",
        type: TranslatePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dgTranslate'
          }]
        }], function () {
          return [{
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RHi/":
    /*!*************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/public-api.ts ***!
      \*************************************************************************************************/

    /*! no exports provided */

    /***/
    function RHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      "5CmJ");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./example */
      "n9tt");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./library */
      "DfRf");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./locale */
      "XCCV");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./module */
      "GPwl");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _navigation_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./navigation-item */
      "MvtF");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _api_declaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./api-declaration */
      "1Yp7");
      /* empty/unused harmony star reexport */

      /***/

    },

    /***/
    "SpGE":
    /*!****************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/content-renderer .ts ***!
      \****************************************************************************************************/

    /*! exports provided: ContentRenderer */

    /***/
    function SpGE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentRenderer", function () {
        return ContentRenderer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");

      var ContentRenderer = /*#__PURE__*/function () {
        function ContentRenderer(http) {
          _classCallCheck(this, ContentRenderer);

          this.http = http;
          this.contentRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ContentRenderer, [{
          key: "fetchDocument",
          value: function fetchDocument(url) {
            var _this13 = this;

            // Cancel previous pending request
            if (this.documentFetchSubscription) {
              this.documentFetchSubscription.unsubscribe();
            }

            this.documentFetchSubscription = this.http.get(url, {
              responseType: 'text'
            }).subscribe(function (response) {
              _this13.updateDocument(response);
            }, function (error) {
              _this13.showError(url, error);
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.documentFetchSubscription.unsubscribe();
          }
        }, {
          key: "url",
          set: function set(value) {
            if (value) {
              this.fetchDocument(value);
            }
          }
        }, {
          key: "content",
          set: function set(value) {
            if (value) {
              this.updateDocument(value);
            }
          }
        }]);

        return ContentRenderer;
      }();

      ContentRenderer.ɵfac = function ContentRenderer_Factory(t) {
        return new (t || ContentRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ContentRenderer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ContentRenderer,
        inputs: {
          url: "url",
          content: "content"
        },
        outputs: {
          contentRendered: "contentRendered"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentRenderer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, {
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentRendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Tjph":
    /*!**************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/app.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: AppModule */

    /***/
    function Tjph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "caRq");
      /* harmony import */


      var _docgeni_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @docgeni/template */
      "wNV8");
      /* harmony import */


      var _content_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./content/index */
      "Bc2r");
      /* harmony import */


      var _content_components_custom_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./content/components/custom/index */
      "X0bL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_content_index__WEBPACK_IMPORTED_MODULE_4__["RootComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: _toConsumableArray(_content_index__WEBPACK_IMPORTED_MODULE_4__["DOCGENI_SITE_PROVIDERS"]),
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _docgeni_template__WEBPACK_IMPORTED_MODULE_3__["DocgeniTemplateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([])].concat(_toConsumableArray(_content_index__WEBPACK_IMPORTED_MODULE_4__["IMPORT_MODULES"]))]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _docgeni_template__WEBPACK_IMPORTED_MODULE_3__["DocgeniTemplateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _content_components_custom_index__WEBPACK_IMPORTED_MODULE_5__["CustomComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _docgeni_template__WEBPACK_IMPORTED_MODULE_3__["DocgeniTemplateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([])].concat(_toConsumableArray(_content_index__WEBPACK_IMPORTED_MODULE_4__["IMPORT_MODULES"])),
            providers: _toConsumableArray(_content_index__WEBPACK_IMPORTED_MODULE_4__["DOCGENI_SITE_PROVIDERS"]),
            bootstrap: [_content_index__WEBPACK_IMPORTED_MODULE_4__["RootComponent"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Tsk+":
    /*!*******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/navigation.service.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: NavigationService */

    /***/
    function Tsk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "Uq6i");
      /* harmony import */


      var _global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./global-context */
      "gKL3");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService(global) {
          _classCallCheck(this, NavigationService);

          this.global = global;
          this.channel$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.docItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.docPages$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          /** Responsive layout, sidebar default is hide */

          this.showSidebar = false;
        }

        _createClass(NavigationService, [{
          key: "getChannels",
          value: function getChannels() {
            return this.navs;
          }
        }, {
          key: "getChannel",
          value: function getChannel(path) {
            return this.navs.find(function (nav) {
              return nav.path === path;
            });
          }
        }, {
          key: "getDocItemByPath",
          value: function getDocItemByPath(path) {
            var _this14 = this;

            var index;

            if (this.channel) {
              // 类库频道
              if (this.channel.lib) {
                index = this.docItems.findIndex(function (docItem) {
                  return docItem.path === path && !!docItem.importSpecifier;
                });
              } else {
                index = this.docItems.findIndex(function (docItem) {
                  return docItem.path === path && docItem.channelPath === _this14.channel.path;
                });
              }
            } else {
              index = this.docItems.findIndex(function (docItem) {
                return docItem.path === path && (_this14.global.config.mode === 'lite' ? true : !docItem.channelPath);
              });
            }

            if (index > -1) {
              var preDocItem = index ? this.docItems[index - 1] : undefined;
              var nextDocItem = this.docItems.length - 1 === index ? undefined : this.docItems[index + 1];
              this.docPages$.next({
                pre: preDocItem,
                next: nextDocItem
              });
            }

            return this.docItems[index];
          }
        }, {
          key: "selectChannelByPath",
          value: function selectChannelByPath(path) {
            var channel = this.getChannel(path);
            this.channel$.next(channel);
            return channel;
          }
        }, {
          key: "clearChannel",
          value: function clearChannel() {
            this.channel$.next(null);
          }
        }, {
          key: "selectDocItem",
          value: function selectDocItem(path) {
            var docItem = this.getDocItemByPath(path);
            this.docItem$.next(docItem);
          }
        }, {
          key: "getChannelFirstDocItem",
          value: function getChannelFirstDocItem() {
            var docItem;

            if (this.channel && this.channel.items) {
              return this.searchFirstDocItem(this.channel.items);
            }

            return docItem;
          }
        }, {
          key: "searchFirstDocItem",
          value: function searchFirstDocItem() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.navs;
            var docItem;

            var _iterator3 = _createForOfIteratorHelper(items),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var nav = _step3.value;

                if (this.isDocItem(nav)) {
                  docItem = nav;
                } else {
                  docItem = this.getNavFirstDocItem(nav);
                }

                if (docItem) {
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return docItem;
          }
        }, {
          key: "getNavFirstDocItem",
          value: function getNavFirstDocItem(nav) {
            var docItem;

            var _iterator4 = _createForOfIteratorHelper(nav.items),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;

                if (item && this.isCategoryItem(item)) {
                  docItem = this.getNavFirstDocItem(item);
                } else {
                  docItem = item;
                }

                if (docItem) {
                  break;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return docItem;
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.showSidebar = !this.showSidebar;
          }
        }, {
          key: "resetShowSidebar",
          value: function resetShowSidebar() {
            this.showSidebar = false;
          }
        }, {
          key: "isCategoryItem",
          value: function isCategoryItem(category) {
            return category.items;
          }
        }, {
          key: "isDocItem",
          value: function isDocItem(item) {
            return !item.items;
          }
        }, {
          key: "channel",
          get: function get() {
            return this.channel$.value;
          }
        }, {
          key: "docItem",
          get: function get() {
            return this.docItem$.value;
          }
        }, {
          key: "navs",
          get: function get() {
            return this.global.navs;
          }
        }, {
          key: "docItems",
          get: function get() {
            return this.global.docItems;
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_context__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]));
      };

      NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationService,
        factory: NavigationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _global_context__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UK4f":
    /*!******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/copy/copy.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: CopyComponent */

    /***/
    function UK4f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CopyComponent", function () {
        return CopyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _copier_copier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../copier/copier.service */
      "69kI");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../icon/icon.component */
      "2PPk");

      var _c0 = ["*"];

      var CopyComponent = /*#__PURE__*/function () {
        function CopyComponent(copier) {
          _classCallCheck(this, CopyComponent);

          this.copier = copier;
          this.icon = 'copy';
        }

        _createClass(CopyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "copy",
          value: function copy($event) {
            var _this15 = this;

            this.copier.copyText(this.text);
            this.icon = 'check';
            /* eslint-disable no-restricted-globals */

            setTimeout(function () {
              _this15.icon = 'copy';
            }, 2000);
          }
        }, {
          key: "dgCopy",
          set: function set(text) {
            this.text = text;
          }
        }]);

        return CopyComponent;
      }();

      CopyComponent.ɵfac = function CopyComponent_Factory(t) {
        return new (t || CopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_copier_copier_service__WEBPACK_IMPORTED_MODULE_1__["CopierService"]));
      };

      CopyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CopyComponent,
        selectors: [["dg-copy"], ["", "dgCopy", ""]],
        hostAttrs: [1, "dg-copy"],
        hostBindings: function CopyComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CopyComponent_click_HostBindingHandler($event) {
              return ctx.copy($event);
            });
          }
        },
        inputs: {
          text: "text",
          dgCopy: "dgCopy"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 1,
        consts: [[1, "color-primary", 3, "iconName"]],
        template: function CopyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-icon", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconName", ctx.icon);
          }
        },
        directives: [_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-copy,[dgCopy]',
            templateUrl: './copy.component.html',
            host: {
              "class": 'dg-copy'
            }
          }]
        }], function () {
          return [{
            type: _copier_copier_service__WEBPACK_IMPORTED_MODULE_1__["CopierService"]
          }];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dgCopy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['dgCopy']
          }],
          copy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "UgCJ":
    /*!***************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/custom/color/color.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: MyColorComponent, default */

    /***/
    function UgCJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyColorComponent", function () {
        return MyColorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _docgeni_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @docgeni/template */
      "wNV8");

      var _c0 = ["*"];

      var MyColorComponent = /*#__PURE__*/function (_docgeni_template__WE2) {
        _inherits(MyColorComponent, _docgeni_template__WE2);

        var _super3 = _createSuper(MyColorComponent);

        function MyColorComponent(elementRef) {
          _classCallCheck(this, MyColorComponent);

          return _super3.call(this, elementRef);
        }

        _createClass(MyColorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "color",
          set: function set(value) {
            this.hostElement.style.color = value;
          }
        }]);

        return MyColorComponent;
      }(_docgeni_template__WEBPACK_IMPORTED_MODULE_1__["DocgeniBuiltInComponent"]);

      MyColorComponent.ɵfac = function MyColorComponent_Factory(t) {
        return new (t || MyColorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MyColorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyColorComponent,
        selectors: [["my-color"]],
        inputs: {
          color: "color"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MyColorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyColorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'my-color',
            templateUrl: './color.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /* harmony default export */


      __webpack_exports__["default"] = {
        selector: 'my-color',
        component: MyColorComponent
      };
      /***/
    },

    /***/
    "X0bL":
    /*!***********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/components/custom/index.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: CustomComponentsModule */

    /***/
    function X0bL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function () {
        return CustomComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _docgeni_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @docgeni/template */
      "wNV8");
      /* harmony import */


      var _color_color_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./color/color.component */
      "UgCJ");

      var COMPONENTS = [_color_color_component__WEBPACK_IMPORTED_MODULE_2__["default"].component];

      var CustomComponentsModule = function CustomComponentsModule() {
        _classCallCheck(this, CustomComponentsModule);
      };

      CustomComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CustomComponentsModule
      });
      CustomComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CustomComponentsModule_Factory(t) {
          return new (t || CustomComponentsModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomComponentsModule, {
          declarations: [_color_color_component__WEBPACK_IMPORTED_MODULE_2__["MyColorComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [].concat(COMPONENTS),
            entryComponents: [].concat(COMPONENTS)
          }]
        }], null, null);
      })();

      Object(_docgeni_template__WEBPACK_IMPORTED_MODULE_1__["addBuiltInComponents"])([_color_color_component__WEBPACK_IMPORTED_MODULE_2__["default"]]);
      /***/
    },

    /***/
    "XCCV":
    /*!*********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/locale.ts ***!
      \*********************************************************************************************/

    /*! no exports provided */

    /***/
    function XCCV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "XEMZ":
    /*!******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/logo/logo.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: LogoComponent */

    /***/
    function XEMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
        return LogoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/global-context */
      "gKL3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");

      var _c0 = ["logo"];

      function LogoComponent_ng_template_0_img_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.global.config.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function LogoComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogoComponent_ng_template_0_img_0_Template, 1, 1, "img", 2);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.global.config.logoUrl)("ngIfElse", _r2);
        }
      }

      function LogoComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "style", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " .st0 { fill: #00cc05; } .st1 { fill: #ffda00; } .st2 { fill: #246eff; } .st3 { fill: #004ab5; } .st4 { fill: #ff5050; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LogoComponent = /*#__PURE__*/function () {
        function LogoComponent(global, elementRef, viewContainerRef) {
          _classCallCheck(this, LogoComponent);

          this.global = global;
          this.elementRef = elementRef;
          this.viewContainerRef = viewContainerRef;
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.viewContainerRef.createEmbeddedView(this.logoTemplate); // remove host

            var hostElement = this.elementRef.nativeElement;
            hostElement.remove();
          }
        }]);

        return LogoComponent;
      }();

      LogoComponent.ɵfac = function LogoComponent_Factory(t) {
        return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoComponent,
        selectors: [["dg-logo"]],
        viewQuery: function LogoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.logoTemplate = _t.first);
          }
        },
        decls: 4,
        vars: 0,
        consts: [["logo", ""], ["defaultLogo", ""], ["class", "logo", "alt", "Logo", 3, "src", 4, "ngIf", "ngIfElse"], ["alt", "Logo", 1, "logo", 3, "src"], ["version", "1.1", "id", "docgeni-logo", "data-name", "docgeni-logo", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 30 30", 0, "xml", "space", "preserve", 1, "logo", 2, "enable-background", "new 0 0 30 30"], ["type", "text/css"], ["d", "M3.74,3.26h13.54c0,0,4.5,0,7.99,4.66c2.33,3.12,2.31,5.42,2.31,5.42s-0.88-2.44-7.04-2.41\n c-7.43,0.04-10.59,0.04-10.59,0.04S3.23,11.28,3.74,3.26z", 1, "st0"], ["d", "M6.37,3.26h10.92c0,0,4.5,0,7.99,4.66c2.33,3.12,2.31,5.42,2.31,5.42s-0.88-2.44-7.04-2.41\n c-7.43,0.04-7.97,0.04-7.97,0.04S5.87,11.28,6.37,3.26z", 1, "st1"], ["d", "M16.04,26.74H2.45L4.88,14.5h6.77l-1.02,5.15h5.4c2.52,0,4.58-2.06,4.58-4.58s-2.06-4.58-4.58-4.58h-1.98\n   v-7.1h1.98c6.44,0,11.68,5.24,11.68,11.68C27.72,21.5,22.48,26.74,16.04,26.74z", 1, "st2"], ["d", "M27.64,13.61c0,0-3.95-0.9-7.06,0.88c0,0-0.31-2.39-2.47-3.55C18.11,10.95,27.32,8.46,27.64,13.61z", 1, "st3"], ["d", "M8.99,3.26h8.68c0,0,3.92,0,7.6,4.66c2.24,2.84,2.38,5.92,2.38,5.92s0.06-2.89-4.48-2.9\n c-7.4-0.02-7.97,0.04-7.97,0.04S8.49,11.28,8.99,3.26z", 1, "st4"]],
        template: function LogoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogoComponent_ng_template_0_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogoComponent_ng_template_2_Template, 10, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-logo',
            templateUrl: './logo.component.html'
          }]
        }], function () {
          return [{
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, {
          logoTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['logo', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "YB8S":
    /*!************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/shared.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: DocgeniSharedModule, NavbarComponent, FooterComponent, SidebarComponent, ExampleViewerComponent, ExampleRendererComponent, IconComponent, DocHeaderComponent, LabelComponent, ContentViewerComponent, SourceCodeComponent, TableOfContentsComponent, CopierService, CopyComponent, AssetsContentPathPipe, IsModeFullPipe, IsModeLitePipe */

    /***/
    function YB8S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocgeniSharedModule", function () {
        return DocgeniSharedModule;
      });
      /* harmony import */


      var _pipes_nav_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pipes/nav.pipe */
      "fYwp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "y/8W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "94D3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"];
      });
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "xQG+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"];
      });
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./footer/footer.component */
      "NJkh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"];
      });
      /* harmony import */


      var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./example-viewer/example-viewer.component */
      "h2Vk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExampleViewerComponent", function () {
        return _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_9__["ExampleViewerComponent"];
      });
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./icon/icon.component */
      "2PPk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconComponent", function () {
        return _icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"];
      });
      /* harmony import */


      var _content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./content-viewer/content-viewer.component */
      "A3AA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ContentViewerComponent", function () {
        return _content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ContentViewerComponent"];
      });
      /* harmony import */


      var _doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./doc-header/doc-header.component */
      "2iTK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocHeaderComponent", function () {
        return _doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_12__["DocHeaderComponent"];
      });
      /* harmony import */


      var _label_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./label/label.component */
      "sKEz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LabelComponent", function () {
        return _label_label_component__WEBPACK_IMPORTED_MODULE_13__["LabelComponent"];
      });
      /* harmony import */


      var _toc_toc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./toc/toc.component */
      "KDNN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TableOfContentsComponent", function () {
        return _toc_toc_component__WEBPACK_IMPORTED_MODULE_14__["TableOfContentsComponent"];
      });
      /* harmony import */


      var _pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pipes/assets-content-path.pipe */
      "zVRa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssetsContentPathPipe", function () {
        return _pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_15__["AssetsContentPathPipe"];
      });
      /* harmony import */


      var _copier_copier_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./copier/copier.service */
      "69kI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CopierService", function () {
        return _copier_copier_service__WEBPACK_IMPORTED_MODULE_16__["CopierService"];
      });
      /* harmony import */


      var _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pipes/mode.pipe */
      "cYjk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IsModeFullPipe", function () {
        return _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeFullPipe"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IsModeLitePipe", function () {
        return _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeLitePipe"];
      });
      /* harmony import */


      var _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./locales-selector/locales-selector.component */
      "gyWy");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "f9O4");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./logo/logo.component */
      "XEMZ");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pipes/translate.pipe */
      "PnZ4");
      /* harmony import */


      var _pipes_hero_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pipes/hero.pipe */
      "kzzZ");
      /* harmony import */


      var _doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./doc-meta/doc-meta.component */
      "dFo5");
      /* harmony import */


      var _copy_copy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./copy/copy.component */
      "UK4f");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CopyComponent", function () {
        return _copy_copy_component__WEBPACK_IMPORTED_MODULE_24__["CopyComponent"];
      });
      /* harmony import */


      var _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./source-code/source-code.component */
      "mVRI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SourceCodeComponent", function () {
        return _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_25__["SourceCodeComponent"];
      });
      /* harmony import */


      var _example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./example-renderer/example-renderer.component */
      "xnIq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExampleRendererComponent", function () {
        return _example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_26__["ExampleRendererComponent"];
      });
      /* harmony import */


      var _doc_pages_links_doc_pages_links_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./doc-pages-links/doc-pages-links.component */
      "+9N5");

      var COMPONENTS = [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_9__["ExampleViewerComponent"], _example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_26__["ExampleRendererComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_12__["DocHeaderComponent"], _content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ContentViewerComponent"], _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_25__["SourceCodeComponent"], _label_label_component__WEBPACK_IMPORTED_MODULE_13__["LabelComponent"], _toc_toc_component__WEBPACK_IMPORTED_MODULE_14__["TableOfContentsComponent"], _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_18__["LocalesSelectorComponent"], _pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_15__["AssetsContentPathPipe"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_20__["LogoComponent"], _copy_copy_component__WEBPACK_IMPORTED_MODULE_24__["CopyComponent"], _pipes_nav_pipe__WEBPACK_IMPORTED_MODULE_0__["IsComponentDocPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_21__["TranslatePipe"], _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeLitePipe"], _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeFullPipe"], _pipes_hero_pipe__WEBPACK_IMPORTED_MODULE_22__["HeroActionClassPipe"], _doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_23__["DocMetaComponent"], _doc_pages_links_doc_pages_links_component__WEBPACK_IMPORTED_MODULE_27__["DocPagesLinksComponent"]];

      var DocgeniSharedModule = function DocgeniSharedModule() {
        _classCallCheck(this, DocgeniSharedModule);
      };

      DocgeniSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DocgeniSharedModule
      });
      DocgeniSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DocgeniSharedModule_Factory(t) {
          return new (t || DocgeniSharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocgeniSharedModule, {
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_9__["ExampleViewerComponent"], _example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_26__["ExampleRendererComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_12__["DocHeaderComponent"], _content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ContentViewerComponent"], _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_25__["SourceCodeComponent"], _label_label_component__WEBPACK_IMPORTED_MODULE_13__["LabelComponent"], _toc_toc_component__WEBPACK_IMPORTED_MODULE_14__["TableOfContentsComponent"], _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_18__["LocalesSelectorComponent"], _pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_15__["AssetsContentPathPipe"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_20__["LogoComponent"], _copy_copy_component__WEBPACK_IMPORTED_MODULE_24__["CopyComponent"], _pipes_nav_pipe__WEBPACK_IMPORTED_MODULE_0__["IsComponentDocPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_21__["TranslatePipe"], _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeLitePipe"], _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeFullPipe"], _pipes_hero_pipe__WEBPACK_IMPORTED_MODULE_22__["HeroActionClassPipe"], _doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_23__["DocMetaComponent"], _doc_pages_links_doc_pages_links_component__WEBPACK_IMPORTED_MODULE_27__["DocPagesLinksComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_9__["ExampleViewerComponent"], _example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_26__["ExampleRendererComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_12__["DocHeaderComponent"], _content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ContentViewerComponent"], _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_25__["SourceCodeComponent"], _label_label_component__WEBPACK_IMPORTED_MODULE_13__["LabelComponent"], _toc_toc_component__WEBPACK_IMPORTED_MODULE_14__["TableOfContentsComponent"], _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_18__["LocalesSelectorComponent"], _pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_15__["AssetsContentPathPipe"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_20__["LogoComponent"], _copy_copy_component__WEBPACK_IMPORTED_MODULE_24__["CopyComponent"], _pipes_nav_pipe__WEBPACK_IMPORTED_MODULE_0__["IsComponentDocPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_21__["TranslatePipe"], _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeLitePipe"], _pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_17__["IsModeFullPipe"], _pipes_hero_pipe__WEBPACK_IMPORTED_MODULE_22__["HeroActionClassPipe"], _doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_23__["DocMetaComponent"], _doc_pages_links_doc_pages_links_component__WEBPACK_IMPORTED_MODULE_27__["DocPagesLinksComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocgeniSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [].concat(COMPONENTS),
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"]],
            entryComponents: [_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_9__["ExampleViewerComponent"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]].concat(COMPONENTS)
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bM3e":
    /*!*******************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/built-in/loader.ts ***!
      \*******************************************************************************************/

    /*! no exports provided */

    /***/
    function bM3e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _built_in_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./built-in-components */
      "ECsV");
      /* harmony import */


      var _label_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./label/label.component */
      "yzKF");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert/alert.component */
      "za4Q");

      Object(_built_in_components__WEBPACK_IMPORTED_MODULE_0__["setBuiltInComponents"])([_label_label_component__WEBPACK_IMPORTED_MODULE_1__["default"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["default"]]);
      /***/
    },

    /***/
    "bo6b":
    /*!******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/component-examples.ts ***!
      \******************************************************************************************************/

    /*! exports provided: EXAMPLE_COMPONENTS */

    /***/
    function bo6b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXAMPLE_COMPONENTS", function () {
        return EXAMPLE_COMPONENTS;
      });

      var EXAMPLE_COMPONENTS = {
        "alib-zoo-basic-example": {
          "key": "alib-zoo-basic-example",
          "name": "basic",
          "title": "Basic",
          "componentName": "AlibZooBasicExampleComponent",
          "module": {
            "name": "AlibZooExamplesModule",
            "importSpecifier": "alib/zoo"
          },
          "sourceFiles": [{
            "name": "basic.component.html",
            "highlightedPath": "basic-component-html.html"
          }, {
            "name": "basic.component.scss",
            "highlightedPath": "basic-component-scss.html"
          }, {
            "name": "basic.component.ts",
            "highlightedPath": "basic-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-bar-basic-example": {
          "key": "alib-bar-basic-example",
          "name": "basic",
          "title": "Basic",
          "componentName": "AlibBarBasicExampleComponent",
          "module": {
            "name": "AlibBarExamplesModule",
            "importSpecifier": "alib/bar"
          },
          "sourceFiles": [{
            "name": "basic.component.html",
            "highlightedPath": "basic-component-html.html"
          }, {
            "name": "basic.component.scss",
            "highlightedPath": "basic-component-scss.html"
          }, {
            "name": "basic.component.ts",
            "highlightedPath": "basic-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-button-basic-example": {
          "key": "alib-button-basic-example",
          "name": "basic",
          "title": "Button Base",
          "componentName": "AlibButtonBasicExampleComponent",
          "module": {
            "name": "AlibButtonExamplesModule",
            "importSpecifier": "alib/button"
          },
          "sourceFiles": [{
            "name": "a.component.ts",
            "highlightedPath": "a-component-ts.html"
          }, {
            "name": "basic.component.html",
            "highlightedPath": "basic-component-html.html"
          }, {
            "name": "basic.component.scss",
            "highlightedPath": "basic-component-scss.html"
          }, {
            "name": "basic.component.ts",
            "highlightedPath": "basic-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-button-advance-title-example": {
          "key": "alib-button-advance-title-example",
          "name": "advance-title",
          "title": "Advance with Title",
          "componentName": "AlibButtonAdvanceTitleExampleComponent",
          "module": {
            "name": "AlibButtonExamplesModule",
            "importSpecifier": "alib/button"
          },
          "sourceFiles": [{
            "name": "advance-title.component.html",
            "highlightedPath": "advance-title-component-html.html"
          }, {
            "name": "advance-title.component.ts",
            "highlightedPath": "advance-title-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-button-advance-example": {
          "key": "alib-button-advance-example",
          "name": "advance",
          "title": "Advance",
          "componentName": "AlibButtonAdvanceExampleComponent",
          "module": {
            "name": "AlibButtonExamplesModule",
            "importSpecifier": "alib/button"
          },
          "sourceFiles": [{
            "name": "advance.component.html",
            "highlightedPath": "advance-component-html.html"
          }, {
            "name": "advance.component.scss",
            "highlightedPath": "advance-component-scss.html"
          }, {
            "name": "advance.component.ts",
            "highlightedPath": "advance-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-foo-advance-example": {
          "key": "alib-foo-advance-example",
          "name": "advance",
          "title": "Advance",
          "componentName": "AlibFooAdvanceExampleComponent",
          "module": {
            "name": "AlibFooExamplesModule",
            "importSpecifier": "alib/foo"
          },
          "sourceFiles": [{
            "name": "advance.component.ts",
            "highlightedPath": "advance-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-foo-basic-example": {
          "key": "alib-foo-basic-example",
          "name": "basic",
          "title": "Basic",
          "componentName": "AlibFooBasicExampleComponent",
          "module": {
            "name": "AlibFooExamplesModule",
            "importSpecifier": "alib/foo"
          },
          "sourceFiles": [{
            "name": "basic.component.html",
            "highlightedPath": "basic-component-html.html"
          }, {
            "name": "basic.component.scss",
            "highlightedPath": "basic-component-scss.html"
          }, {
            "name": "basic.component.ts",
            "highlightedPath": "basic-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-layout-advance-example": {
          "key": "alib-layout-advance-example",
          "name": "advance",
          "title": "Advance",
          "componentName": "AlibLayoutAdvanceExampleComponent",
          "module": {
            "name": "AlibLayoutExamplesModule",
            "importSpecifier": "alib/layout"
          },
          "sourceFiles": [{
            "name": "advance.component.ts",
            "highlightedPath": "advance-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        },
        "alib-layout-basic-example": {
          "key": "alib-layout-basic-example",
          "name": "basic",
          "title": "Basic",
          "componentName": "AlibLayoutBasicExampleComponent",
          "module": {
            "name": "AlibLayoutExamplesModule",
            "importSpecifier": "alib/layout"
          },
          "sourceFiles": [{
            "name": "basic.component.html",
            "highlightedPath": "basic-component-html.html"
          }, {
            "name": "basic.component.scss",
            "highlightedPath": "basic-component-scss.html"
          }, {
            "name": "basic.component.ts",
            "highlightedPath": "basic-component-ts.html"
          }],
          "additionalFiles": [],
          "additionalComponents": []
        }
      };
      /***/
    },

    /***/
    "cYjk":
    /*!**************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/pipes/mode.pipe.ts ***!
      \**************************************************************************************************/

    /*! exports provided: IsModeLitePipe, IsModeFullPipe */

    /***/
    function cYjk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsModeLitePipe", function () {
        return IsModeLitePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsModeFullPipe", function () {
        return IsModeFullPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");

      var IsModeLitePipe = /*#__PURE__*/function () {
        function IsModeLitePipe() {
          _classCallCheck(this, IsModeLitePipe);
        }

        _createClass(IsModeLitePipe, [{
          key: "transform",
          value: function transform(mode) {
            return mode === 'lite';
          }
        }]);

        return IsModeLitePipe;
      }();

      IsModeLitePipe.ɵfac = function IsModeLitePipe_Factory(t) {
        return new (t || IsModeLitePipe)();
      };

      IsModeLitePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dgIsLite",
        type: IsModeLitePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsModeLitePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dgIsLite'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var IsModeFullPipe = /*#__PURE__*/function () {
        function IsModeFullPipe() {
          _classCallCheck(this, IsModeFullPipe);
        }

        _createClass(IsModeFullPipe, [{
          key: "transform",
          value: function transform(mode) {
            return mode === 'full';
          }
        }]);

        return IsModeFullPipe;
      }();

      IsModeFullPipe.ɵfac = function IsModeFullPipe_Factory(t) {
        return new (t || IsModeFullPipe)();
      };

      IsModeFullPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dgIsFull",
        type: IsModeFullPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsModeFullPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dgIsFull'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "cyu1":
    /*!*****************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/doc-viewer/doc-viewer.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: DocViewerComponent, DocViewerHomeComponent */

    /***/
    function cyu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocViewerComponent", function () {
        return DocViewerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocViewerHomeComponent", function () {
        return DocViewerHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "Uq6i");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "wEA+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _services_page_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/page-title.service */
      "qDxM");
      /* harmony import */


      var _services_toc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/toc.service */
      "4hFW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "NJkh");
      /* harmony import */


      var _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../component-viewer/component-viewer.component */
      "A8ta");
      /* harmony import */


      var _shared_doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/doc-header/doc-header.component */
      "2iTK");
      /* harmony import */


      var _shared_content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/content-viewer/content-viewer.component */
      "A3AA");
      /* harmony import */


      var _shared_doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared/doc-meta/doc-meta.component */
      "dFo5");
      /* harmony import */


      var _shared_doc_pages_links_doc_pages_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../shared/doc-pages-links/doc-pages-links.component */
      "+9N5");
      /* harmony import */


      var _shared_toc_toc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../shared/toc/toc.component */
      "KDNN");
      /* harmony import */


      var _shared_pipes_nav_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../shared/pipes/nav.pipe */
      "fYwp");
      /* harmony import */


      var _shared_pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../shared/pipes/assets-content-path.pipe */
      "zVRa");

      var _c0 = ["toc"];

      function DocViewerComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-component-viewer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var docItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("docItem", docItem_r1);
        }
      }

      function DocViewerComponent_ng_container_0_ng_template_3_dg_doc_pages_links_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-doc-pages-links", 11);
        }

        if (rf & 2) {
          var docPages_r8 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("docPages", docPages_r8);
        }
      }

      function DocViewerComponent_ng_container_0_ng_template_3_dg_toc_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-toc");
        }
      }

      function DocViewerComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dg-doc-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dg-content-viewer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "dgAssetsContentPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocViewerComponent_ng_container_0_ng_template_3_dg_doc_pages_links_5_Template, 1, 1, "dg-doc-pages-links", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dg-doc-meta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DocViewerComponent_ng_container_0_ng_template_3_dg_toc_9_Template, 1, 0, "dg-toc", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var docItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", docItem_r1.title)("subtitle", docItem_r1.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, docItem_r1.contentPath));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx_r4.docPages$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("docItem", docItem_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.hasContentToc);
        }
      }

      function DocViewerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocViewerComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dgIsComponentDoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocViewerComponent_ng_container_0_ng_template_3_Template, 10, 10, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dg-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var docItem_r1 = ctx.ngIf;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, docItem_r1))("ngIfElse", _r3);
        }
      }

      var DocViewerComponent = /*#__PURE__*/function () {
        function DocViewerComponent(route, router, navigationService, pageTitle, tocService) {
          _classCallCheck(this, DocViewerComponent);

          this.route = route;
          this.router = router;
          this.navigationService = navigationService;
          this.pageTitle = pageTitle;
          this.tocService = tocService;
          this.isDocViewer = true; // 独立展示的页面，不属于任何频道

          this.isSingle = false;
          this.hasContentToc = false;
          /** Component type for the current example. */

          this.exampleComponentType = null;
          this.exampleModuleFactory = null;
          this.docItem$ = this.navigationService.docItem$.asObservable();
          this.docPages$ = this.navigationService.docPages$.asObservable();
          this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(DocViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            if (this.route.snapshot.data) {
              this.isSingle = this.route.snapshot.data.single;
            }

            this.route.paramMap.subscribe(function (params) {
              var id = params.get('id'); // component doc

              if (id) {
                _this16.navigationService.selectDocItem(id);

                _this16.navigationService.resetShowSidebar();
              } else {
                // doc
                var path = _this16.route.snapshot.routeConfig.path;

                _this16.navigationService.selectDocItem(path);
              }

              if (_this16.navigationService.docItem) {
                _this16.pageTitle.title = '' + _this16.navigationService.docItem.title;
              } else {
                var firstDoc = _this16.navigationService.searchFirstDocItem();

                if (firstDoc) {
                  _this16.router.navigate(['./' + firstDoc.path], {
                    relativeTo: _this16.route
                  });
                }
              }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.navigationService.docItem$, this.tocService.links$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed)).subscribe(function (result) {
              _this16.hasContentToc = result[0].toc === 'content' && result[1].length > 0;
            });
          }
        }, {
          key: "close",
          value: function close() {
            if (this.navigationService.showSidebar) {
              this.navigationService.toggleSidebar();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.next();
            this.destroyed.complete();
          }
        }, {
          key: "channel",
          get: function get() {
            return this.navigationService.channel;
          }
        }]);

        return DocViewerComponent;
      }();

      DocViewerComponent.ɵfac = function DocViewerComponent_Factory(t) {
        return new (t || DocViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_title_service__WEBPACK_IMPORTED_MODULE_5__["PageTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toc_service__WEBPACK_IMPORTED_MODULE_6__["TocService"]));
      };

      DocViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocViewerComponent,
        selectors: [["dg-doc-viewer"]],
        viewQuery: function DocViewerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableOfContents = _t.first);
          }
        },
        hostVars: 6,
        hostBindings: function DocViewerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-doc-viewer", ctx.isDocViewer)("dg-doc-viewer--single", ctx.isSingle)("dg-doc-viewer--toc", ctx.hasContentToc);
          }
        },
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"], [1, "dg-doc-viewer-backdrop", 3, "click"], [4, "ngIf", "ngIfElse"], ["general", ""], [3, "docItem"], [1, "dg-doc-viewer-inner"], [1, "dg-doc-viewer-inner-content"], [3, "title", "subtitle"], [3, "url"], [3, "docPages", 4, "ngIf"], [1, "dg-divider", "dg-mt-4"], [3, "docPages"]],
        template: function DocViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocViewerComponent_ng_container_0_Template, 6, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocViewerComponent_Template_div_click_2_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.docItem$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_9__["ComponentViewerComponent"], _shared_doc_header_doc_header_component__WEBPACK_IMPORTED_MODULE_10__["DocHeaderComponent"], _shared_content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ContentViewerComponent"], _shared_doc_meta_doc_meta_component__WEBPACK_IMPORTED_MODULE_12__["DocMetaComponent"], _shared_doc_pages_links_doc_pages_links_component__WEBPACK_IMPORTED_MODULE_13__["DocPagesLinksComponent"], _shared_toc_toc_component__WEBPACK_IMPORTED_MODULE_14__["TableOfContentsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _shared_pipes_nav_pipe__WEBPACK_IMPORTED_MODULE_15__["IsComponentDocPipe"], _shared_pipes_assets_content_path_pipe__WEBPACK_IMPORTED_MODULE_16__["AssetsContentPathPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocViewerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-doc-viewer',
            templateUrl: './doc-viewer.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
          }, {
            type: _services_page_title_service__WEBPACK_IMPORTED_MODULE_5__["PageTitleService"]
          }, {
            type: _services_toc_service__WEBPACK_IMPORTED_MODULE_6__["TocService"]
          }];
        }, {
          isDocViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-doc-viewer"]
          }],
          isSingle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-doc-viewer--single"]
          }],
          hasContentToc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-doc-viewer--toc"]
          }],
          tableOfContents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toc']
          }]
        });
      })();

      var DocViewerHomeComponent = /*#__PURE__*/function () {
        function DocViewerHomeComponent(navigationService, route, router) {
          _classCallCheck(this, DocViewerHomeComponent);

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          navigationService.docItem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (docItem) {
            if (docItem) {
              var redirectTo = './empty';

              if (docItem.overview) {
                redirectTo = './overview';
              } else if (docItem.examples && docItem.examples.length > 0) {
                redirectTo = './examples';
              } else if (docItem.api) {
                redirectTo = './api';
              }

              if (redirectTo) {
                router.navigate([redirectTo], {
                  relativeTo: route,
                  replaceUrl: true
                });
              }
            }
          });
        }

        _createClass(DocViewerHomeComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return DocViewerHomeComponent;
      }();

      DocViewerHomeComponent.ɵfac = function DocViewerHomeComponent_Factory(t) {
        return new (t || DocViewerHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      DocViewerHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocViewerHomeComponent,
        selectors: [["doc-viewer-home"]],
        decls: 0,
        vars: 0,
        template: function DocViewerHomeComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocViewerHomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'doc-viewer-home',
            template: ''
          }]
        }], function () {
          return [{
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dFo5":
    /*!**************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/doc-meta/doc-meta.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: DocMetaComponent */

    /***/
    function dFo5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocMetaComponent", function () {
        return DocMetaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "wEA+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/global-context */
      "gKL3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/translate.pipe */
      "PnZ4");

      function DocMetaComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://avatars.githubusercontent.com/", item_r4, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function DocMetaComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.contributors, 3).length, " ");
        }
      }

      function DocMetaComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocMetaComponent_div_0_div_1_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocMetaComponent_div_0_div_3_Template, 3, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r0.contributors, 0, 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx_r0.contributors, 3).length);
        }
      }

      function DocMetaComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dgTranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "LAST_UPDATED_TIME"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r1.lastUpdatedTime, "yyyy/MM/dd"), "\n");
        }
      }

      var DocMetaComponent = /*#__PURE__*/function () {
        function DocMetaComponent(http, globalContext) {
          _classCallCheck(this, DocMetaComponent);

          this.http = http;
          this.globalContext = globalContext;
          this.isDocContribution = true;
        }

        _createClass(DocMetaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            if (this.globalContext.owner && this.globalContext.repo) {
              this.http.get("https://api.github.com/repos/".concat(this.globalContext.owner, "/").concat(this.globalContext.repo, "/commits"), {
                params: {
                  path: this.docItem.originPath
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (result) {
                return !!result.length;
              })).subscribe(function (result) {
                _this17.contributors = Array.from(new Set(result.map(function (item) {
                  return item.author.login;
                })));
                _this17.lastUpdatedTime = new Date(result[0].commit.author.date);
              });
            }
          }
        }]);

        return DocMetaComponent;
      }();

      DocMetaComponent.ɵfac = function DocMetaComponent_Factory(t) {
        return new (t || DocMetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]));
      };

      DocMetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocMetaComponent,
        selectors: [["dg-doc-meta"]],
        hostVars: 2,
        hostBindings: function DocMetaComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-doc-meta", ctx.isDocContribution);
          }
        },
        inputs: {
          docItem: "docItem"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "dg-contributor-avatar-list", 4, "ngIf"], ["class", "dg-contribution-last-time", 4, "ngIf"], [1, "dg-contributor-avatar-list"], ["class", "dg-contributor-avatar", 3, "title", 4, "ngFor", "ngForOf"], ["class", "dg-contributor-avatar dg-contributor-other", 4, "ngIf"], [1, "dg-contributor-avatar", 3, "title"], [3, "src"], [1, "dg-contributor-avatar", "dg-contributor-other"], [1, "dg-contribution-last-time"]],
        template: function DocMetaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocMetaComponent_div_0_Template, 5, 9, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocMetaComponent_div_1_Template, 4, 7, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contributors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastUpdatedTime);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocMetaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-doc-meta',
            templateUrl: './doc-meta.component.html'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]
          }];
        }, {
          isDocContribution: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-doc-meta"]
          }],
          docItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "fYwp":
    /*!*************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/pipes/nav.pipe.ts ***!
      \*************************************************************************************************/

    /*! exports provided: IsComponentDocPipe */

    /***/
    function fYwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsComponentDocPipe", function () {
        return IsComponentDocPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");

      var IsComponentDocPipe = /*#__PURE__*/function () {
        function IsComponentDocPipe() {
          _classCallCheck(this, IsComponentDocPipe);
        }

        _createClass(IsComponentDocPipe, [{
          key: "transform",
          value: function transform(docItem) {
            return !!docItem.importSpecifier;
          }
        }]);

        return IsComponentDocPipe;
      }();

      IsComponentDocPipe.ɵfac = function IsComponentDocPipe_Factory(t) {
        return new (t || IsComponentDocPipe)();
      };

      IsComponentDocPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dgIsComponentDoc",
        type: IsComponentDocPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsComponentDocPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dgIsComponentDoc'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gKL3":
    /*!***************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/global-context.ts ***!
      \***************************************************************************************************/

    /*! exports provided: CONFIG_TOKEN, DEFAULT_CONFIG, GlobalContext */

    /***/
    function gKL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONFIG_TOKEN", function () {
        return CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return DEFAULT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalContext", function () {
        return GlobalContext;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _utils_language_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/language-compare */
      "o1sK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");

      var CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DOC_SITE_CONFIG');
      var DEFAULT_CONFIG = {
        title: 'Docgeni',
        description: ''
      };
      var DOCGENI_LOCALE_KEY = 'docgeni-locale';
      var DOCGENI_MODE_KEY = 'docgeni-mode';

      var GlobalContext = /*#__PURE__*/function () {
        function GlobalContext(config, http, document) {
          _classCallCheck(this, GlobalContext);

          this.config = config;
          this.http = http;
          this.document = document;
          this.setup();
        }

        _createClass(GlobalContext, [{
          key: "getLocaleKey",
          value: function getLocaleKey() {
            var localeKeyFromUrl = this.getLocalKeyFromUrl();

            if (localeKeyFromUrl) {
              return localeKeyFromUrl;
            } else {
              var cacheLocale = window.localStorage.getItem(DOCGENI_LOCALE_KEY) || window.navigator.language || '';
              var locale = (this.config.locales || []).find(function (locale) {
                return Object(_utils_language_compare__WEBPACK_IMPORTED_MODULE_1__["languageCompare"])(locale.key, cacheLocale);
              });

              if (locale) {
                return locale.key;
              } else {
                return this.config.defaultLocale;
              }
            }
          }
        }, {
          key: "setup",
          value: function setup() {
            this.setLocale(this.getLocaleKey());
            var cacheMode = window.localStorage.getItem(DOCGENI_MODE_KEY);

            if (cacheMode && ['lite', 'full'].includes(cacheMode)) {
              this.config.mode = cacheMode;
            }

            document.body.classList.add("dg-mode-".concat(this.config.mode), "dg-theme-".concat(this.config.theme));
            var pattern = /https:\/\/github.com\/([^\/]*)\/([^\/]*)/.exec(this.config.repoUrl);

            if (pattern && pattern.length === 3) {
              this.owner = pattern[1];
              this.repo = pattern[2];
            }
          }
        }, {
          key: "getLocalKeyFromUrl",
          value: function getLocalKeyFromUrl() {
            var _this18 = this;

            var localeFromUrl = (this.config.locales || []).find(function (locale) {
              return _this18.document.location.pathname.startsWith("/".concat(locale.key));
            });
            return localeFromUrl && localeFromUrl.key;
          }
        }, {
          key: "setLocale",
          value: function setLocale(locale) {
            this.locale = locale;
            window.localStorage.setItem(DOCGENI_LOCALE_KEY, locale);
          }
        }, {
          key: "getNowTimestamp",
          value: function getNowTimestamp() {
            return new Date().getTime();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this19 = this;

            return new Promise(function (resolve, reject) {
              _this19.http.get("assets/content/navigations-".concat(_this19.locale, ".json?t=").concat(_this19.getNowTimestamp())).subscribe({
                next: function next(response) {
                  _this19.homeMeta = response.homeMeta;
                  _this19.navs = response.navs;
                  _this19.docItems = _this19.sortDocItems(_this19.navs);
                  resolve(response);
                },
                error: function error(_error) {
                  reject(_error);
                }
              });
            });
          }
        }, {
          key: "getAssetsContentPath",
          value: function getAssetsContentPath(path) {
            return path.startsWith('/') ? "assets/content".concat(path) : "assets/content/".concat(path);
          }
        }, {
          key: "sortDocItems",
          value: function sortDocItems(navs) {
            navs = navs.slice();
            var list = [];

            var _loop = function _loop() {
              var item = navs.shift();

              if (item.items) {
                var _navs;

                item.items.forEach(function (child) {
                  var _child$ancestors;

                  child.ancestors = child.ancestors || [];

                  (_child$ancestors = child.ancestors).push.apply(_child$ancestors, _toConsumableArray(item.ancestors || []).concat([item]));
                });

                (_navs = navs).unshift.apply(_navs, _toConsumableArray(item.items));
              } else if (!item.hidden) {
                list.push(item);
              }
            };

            while (navs.length) {
              _loop();
            }

            return list;
          }
        }, {
          key: "isDefaultLocale",
          get: function get() {
            return this.locale === this.config.defaultLocale;
          }
        }]);

        return GlobalContext;
      }();

      GlobalContext.ɵfac = function GlobalContext_Factory(t) {
        return new (t || GlobalContext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CONFIG_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      GlobalContext.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlobalContext,
        factory: GlobalContext.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalContext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CONFIG_TOKEN]
            }]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gyWy":
    /*!******************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/locales-selector/locales-selector.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: LocalesSelectorComponent */

    /***/
    function gyWy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalesSelectorComponent", function () {
        return LocalesSelectorComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "y/8W");

      function LocalesSelectorComponent_select_0_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var locale_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", locale_r2.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](locale_r2.name);
        }
      }

      function LocalesSelectorComponent_select_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LocalesSelectorComponent_select_0_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.locale = $event;
          })("ngModelChange", function LocalesSelectorComponent_select_0_Template_select_ngModelChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.localeModelChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LocalesSelectorComponent_select_0_option_1_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.locale);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.global.config.locales);
        }
      }

      var LocalesSelectorComponent = /*#__PURE__*/function () {
        function LocalesSelectorComponent(global, navigationService, document) {
          _classCallCheck(this, LocalesSelectorComponent);

          this.global = global;
          this.navigationService = navigationService;
          this.document = document;
          this.isNavbar = true;
        }

        _createClass(LocalesSelectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.locale = this.global.locale;
          }
        }, {
          key: "localeModelChange",
          value: function localeModelChange() {
            var isDefaultLocale = this.locale === this.global.config.defaultLocale;
            var localKeyFromUrl = this.global.getLocalKeyFromUrl();

            if (isDefaultLocale) {
              this.global.setLocale(this.locale);
            }

            if (localKeyFromUrl) {
              location.href = document.location.origin + document.location.pathname.replace('/' + localKeyFromUrl, isDefaultLocale ? '' : "/".concat(this.locale));
            } else {
              location.href = isDefaultLocale ? document.location.origin + document.location.pathname : document.location.origin + "/".concat(this.locale) + location.pathname;
            }
          }
        }]);

        return LocalesSelectorComponent;
      }();

      LocalesSelectorComponent.ɵfac = function LocalesSelectorComponent_Factory(t) {
        return new (t || LocalesSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      LocalesSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LocalesSelectorComponent,
        selectors: [["dg-locales-selector"]],
        hostVars: 2,
        hostBindings: function LocalesSelectorComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dg-locales-selector", ctx.isNavbar);
          }
        },
        decls: 2,
        vars: 1,
        consts: [["name", "locale", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "dg-selector-arrow"], ["name", "locale", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function LocalesSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LocalesSelectorComponent_select_0_Template, 2, 2, "select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.global.config.locales && ctx.global.config.locales.length > 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalesSelectorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'dg-locales-selector',
            templateUrl: './locales-selector.component.html'
          }]
        }], function () {
          return [{
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, {
          isNavbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.dg-locales-selector']
          }]
        });
      })();
      /***/

    },

    /***/
    "h2Vk":
    /*!**************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/example-viewer/example-viewer.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: ExampleViewerComponent */

    /***/
    function h2Vk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleViewerComponent", function () {
        return ExampleViewerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "5mJ2");
      /* harmony import */


      var _services_example_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/example-loader */
      "KIzp");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../example-renderer/example-renderer.component */
      "xnIq");
      /* harmony import */


      var _copy_copy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../copy/copy.component */
      "UK4f");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../icon/icon.component */
      "2PPk");
      /* harmony import */


      var _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../source-code/source-code.component */
      "mVRI");

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      function ExampleViewerComponent_div_0_a_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleViewerComponent_div_0_a_13_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var tab_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.selectExampleTab(tab_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, tab_r3 === ctx_r1.selectedTab));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.name);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "dg-sources-show": a0
        };
      };

      function ExampleViewerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleViewerComponent_div_0_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.toggleSource();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dg-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dg-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleViewerComponent_div_0_a_13_Template, 2, 4, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "pre", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.example.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exampleModuleType", ctx_r0.exampleModuleType)("exampleComponentType", ctx_r0.exampleComponentType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.example.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dgCopy", _r2 == null ? null : _r2.textContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "~examples/" + ctx_r0.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r0.showSource));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.exampleTabs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r0.selectedTab == null ? null : ctx_r0.selectedTab.path);
        }
      }

      var EXAMPLES_HIGHLIGHTED_PATH = "examples-highlighted";
      var nameOrdersMap = {
        HTML: 1,
        TS: 2,
        SCSS: 3,
        CSS: 4
      };

      var ExampleViewerComponent = /*#__PURE__*/function () {
        function ExampleViewerComponent(exampleLoader, globalContext) {
          _classCallCheck(this, ExampleViewerComponent);

          this.exampleLoader = exampleLoader;
          this.globalContext = globalContext;
          this._inline = false;
          this.isExampleViewer = true;
          /** Component type for the current example. */

          this.exampleComponentType = null;
          this.exampleModuleType = null;
          this.showSource = false;
          this.exampleTabs = [];
        }
        /**
         * @deprecated please use name
         */


        _createClass(ExampleViewerComponent, [{
          key: "transformFileName",
          // Use short name such as TS, HTML, CSS replace exampleName.component.*, we need to transform
          // the file name to match the exampleName.component.* that displays main source files.
          value: function transformFileName(fileName, exampleName) {
            return fileName.startsWith("".concat(exampleName, ".component.")) ? fileName.replace("".concat(exampleName, ".component."), '').toUpperCase() : fileName;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.exampleLoader.load(this.name).then(function (result) {
              _this20.exampleModuleType = result.moduleType;
              _this20.exampleComponentType = result.componentType;
              _this20.example = result.example;

              var rootDir = _this20.globalContext.getAssetsContentPath("".concat(EXAMPLES_HIGHLIGHTED_PATH, "/").concat(_this20.example.module.importSpecifier, "/").concat(_this20.example.name));

              _this20.exampleTabs = _this20.example.sourceFiles.map(function (file) {
                return {
                  name: _this20.transformFileName(file.name, _this20.example.name),
                  path: "".concat(rootDir, "/").concat(file.highlightedPath)
                };
              }) // The order we expect is TS > HTML > SCSS | CSS
              .sort(function (a, b) {
                var aOrder = nameOrdersMap[a.name] || Number.MAX_SAFE_INTEGER;
                var bOrder = nameOrdersMap[b.name] || Number.MAX_SAFE_INTEGER;
                return aOrder > bOrder ? 1 : aOrder === bOrder ? 0 : -1;
              });
              _this20.selectedTab = _this20.exampleTabs[0];
            });
          }
        }, {
          key: "selectExampleTab",
          value: function selectExampleTab(tab) {
            this.selectedTab = tab;
          }
        }, {
          key: "toggleSource",
          value: function toggleSource() {
            this.showSource = !this.showSource;
          }
        }, {
          key: "exampleName",
          set: function set(name) {
            this.name = name;
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          },
          set: function set(value) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "enableIvy",
          get: function get() {
            return this.exampleLoader.enableIvy;
          }
        }]);

        return ExampleViewerComponent;
      }();

      ExampleViewerComponent.ɵfac = function ExampleViewerComponent_Factory(t) {
        return new (t || ExampleViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_example_loader__WEBPACK_IMPORTED_MODULE_2__["ExampleLoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]));
      };

      ExampleViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExampleViewerComponent,
        selectors: [["dg-example-viewer"]],
        hostVars: 4,
        hostBindings: function ExampleViewerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-example-viewer", ctx.isExampleViewer)("dg-example-viewer-inline", ctx.inline);
          }
        },
        inputs: {
          exampleName: "exampleName",
          name: "name",
          inline: "inline"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "dg-example-viewer-wrapper", 4, "ngIf"], [1, "dg-example-viewer-wrapper"], [1, "dg-example-viewer-header"], [1, "title"], ["dgExampleRenderer", "", 1, "dg-example-viewer-body", 3, "exampleModuleType", "exampleComponentType"], [1, "dg-example-viewer-actions", 3, "title"], ["title", "Copy source code", "href", "javascript:;", 1, "action-item", 3, "dgCopy"], ["title", "Toggle source code", "href", "javascript:;", 1, "action-item", 3, "click"], ["iconName", "code"], ["title", "Open example in new tab", "target", "_blank", 1, "action-item", 3, "href"], ["iconName", "external"], [1, "dg-example-viewer-sources", 3, "ngClass"], [1, "dg-tab-links"], ["class", "dg-tab-link", "href", "javascript:;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["dgSourceCode", "", 3, "url"], ["sourceCode", ""], ["href", "javascript:;", 1, "dg-tab-link", 3, "ngClass", "click"]],
        template: function ExampleViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExampleViewerComponent_div_0_Template, 16, 11, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.example);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_5__["ExampleRendererComponent"], _copy_copy_component__WEBPACK_IMPORTED_MODULE_6__["CopyComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_8__["SourceCodeComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleViewerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-example-viewer',
            templateUrl: './example-viewer.component.html'
          }]
        }], function () {
          return [{
            type: _services_example_loader__WEBPACK_IMPORTED_MODULE_2__["ExampleLoader"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]
          }];
        }, {
          isExampleViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-example-viewer']
          }],
          exampleName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-example-viewer-inline']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hDUS":
    /*!***********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/example/example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ExampleIsolatedViewerComponent */

    /***/
    function hDUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleIsolatedViewerComponent", function () {
        return ExampleIsolatedViewerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/page-title.service */
      "qDxM");
      /* harmony import */


      var _shared_example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/example-renderer/example-renderer.component */
      "xnIq");

      var ExampleIsolatedViewerComponent = /*#__PURE__*/function () {
        function ExampleIsolatedViewerComponent(route, pageTitle) {
          _classCallCheck(this, ExampleIsolatedViewerComponent);

          this.route = route;
          this.pageTitle = pageTitle;
        }

        _createClass(ExampleIsolatedViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.name = this.route.snapshot.paramMap.get('name');
            this.pageTitle.title = "Example - ".concat(this.name);
          }
        }]);

        return ExampleIsolatedViewerComponent;
      }();

      ExampleIsolatedViewerComponent.ɵfac = function ExampleIsolatedViewerComponent_Factory(t) {
        return new (t || ExampleIsolatedViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]));
      };

      ExampleIsolatedViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExampleIsolatedViewerComponent,
        selectors: [["dg-example-isolated-viewer"]],
        decls: 1,
        vars: 1,
        consts: [[3, "name"]],
        template: function ExampleIsolatedViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-example-renderer", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name);
          }
        },
        directives: [_shared_example_renderer_example_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ExampleRendererComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleIsolatedViewerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-example-isolated-viewer',
            templateUrl: './example.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hShd":
    /*!*****************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/channel.resolver.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ChannelResolver */

    /***/
    function hShd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelResolver", function () {
        return ChannelResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navigation.service */
      "Tsk+");

      var ChannelResolver = /*#__PURE__*/function () {
        function ChannelResolver(navigationService) {
          _classCallCheck(this, ChannelResolver);

          this.navigationService = navigationService;
        }

        _createClass(ChannelResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var path = route.paramMap.get('channel');
            var channel = this.navigationService.getChannel(path);
            return channel;
          }
        }]);

        return ChannelResolver;
      }();

      ChannelResolver.ɵfac = function ChannelResolver_Factory(t) {
        return new (t || ChannelResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
      };

      ChannelResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChannelResolver,
        factory: ChannelResolver.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j9J+":
    /*!****************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/built-in/built-in.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: DocgeniBuiltInModule */

    /***/
    function j9J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocgeniBuiltInModule", function () {
        return DocgeniBuiltInModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _label_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./label/label.component */
      "yzKF");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert/alert.component */
      "za4Q");
      /* harmony import */


      var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./loader */
      "bM3e");

      var DocgeniBuiltInModule = function DocgeniBuiltInModule() {
        _classCallCheck(this, DocgeniBuiltInModule);
      };

      DocgeniBuiltInModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DocgeniBuiltInModule
      });
      DocgeniBuiltInModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DocgeniBuiltInModule_Factory(t) {
          return new (t || DocgeniBuiltInModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocgeniBuiltInModule, {
          declarations: [_label_label_component__WEBPACK_IMPORTED_MODULE_2__["DocgeniLabelComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["DocgeniAlertComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocgeniBuiltInModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_label_label_component__WEBPACK_IMPORTED_MODULE_2__["DocgeniLabelComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["DocgeniAlertComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [],
            providers: [],
            entryComponents: [_label_label_component__WEBPACK_IMPORTED_MODULE_2__["DocgeniLabelComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["DocgeniAlertComponent"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jTvV":
    /*!********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/component-viewer/index.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComponentViewerComponent, ComponentEmptyComponent, ComponentOverviewComponent, ComponentApiComponent, ComponentExamplesComponent */

    /***/
    function jTvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _component_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./component-viewer.component */
      "A8ta");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentViewerComponent", function () {
        return _component_viewer_component__WEBPACK_IMPORTED_MODULE_0__["ComponentViewerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentEmptyComponent", function () {
        return _component_viewer_component__WEBPACK_IMPORTED_MODULE_0__["ComponentEmptyComponent"];
      });
      /* harmony import */


      var _overview_component_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./overview/component-overview.component */
      "rVPT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentOverviewComponent", function () {
        return _overview_component_overview_component__WEBPACK_IMPORTED_MODULE_1__["ComponentOverviewComponent"];
      });
      /* harmony import */


      var _api_component_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api/component-api.component */
      "0Nd9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function () {
        return _api_component_api_component__WEBPACK_IMPORTED_MODULE_2__["ComponentApiComponent"];
      });
      /* harmony import */


      var _examples_component_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./examples/component-examples.component */
      "HhmG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentExamplesComponent", function () {
        return _examples_component_examples_component__WEBPACK_IMPORTED_MODULE_3__["ComponentExamplesComponent"];
      });
      /***/

    },

    /***/
    "kO5l":
    /*!****************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/main.ts ***!
      \****************************************************************************/

    /*! no exports provided */

    /***/
    function kO5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "nM9a");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "Tjph");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "caRq");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/

    },

    /***/
    "kzzZ":
    /*!**************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/pipes/hero.pipe.ts ***!
      \**************************************************************************************************/

    /*! exports provided: HeroActionClassPipe */

    /***/
    function kzzZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroActionClassPipe", function () {
        return HeroActionClassPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");

      var HeroActionClassPipe = /*#__PURE__*/function () {
        function HeroActionClassPipe() {
          _classCallCheck(this, HeroActionClassPipe);
        }

        _createClass(HeroActionClassPipe, [{
          key: "transform",
          value: function transform(action) {
            return ["dg-btn-".concat(action.btnType || 'primary-light'), 'dg-btn-xlg', "dg-btn-".concat(action.btnShape || 'round')];
          }
        }]);

        return HeroActionClassPipe;
      }();

      HeroActionClassPipe.ɵfac = function HeroActionClassPipe_Factory(t) {
        return new (t || HeroActionClassPipe)();
      };

      HeroActionClassPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dgHeroActionClass",
        type: HeroActionClassPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroActionClassPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dgHeroActionClass'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "mVRI":
    /*!********************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/source-code/source-code.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: SourceCodeComponent */

    /***/
    function mVRI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceCodeComponent", function () {
        return SourceCodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _content_renderer___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../content-renderer  */
      "SpGE");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "g9Za");
      /* harmony import */


      var _copy_copy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../copy/copy.component */
      "UK4f");

      var _c0 = ["codeContent"];

      var SourceCodeComponent = /*#__PURE__*/function (_content_renderer___W2) {
        _inherits(SourceCodeComponent, _content_renderer___W2);

        var _super4 = _createSuper(SourceCodeComponent);

        function SourceCodeComponent(http) {
          _classCallCheck(this, SourceCodeComponent);

          return _super4.call(this, http);
        }

        _createClass(SourceCodeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateDocument",
          value: function updateDocument(content) {
            this.codeContent.nativeElement.innerHTML = content;
          }
        }, {
          key: "showError",
          value: function showError(url, error) {
            console.log(error);
            this.codeContent.nativeElement.innerText = "Failed to load document: ".concat(url, ". Error: ").concat(error.statusText);
          }
        }, {
          key: "textContent",
          get: function get() {
            var _a;

            return (_a = this.codeContent.nativeElement) === null || _a === void 0 ? void 0 : _a.textContent;
          }
        }]);

        return SourceCodeComponent;
      }(_content_renderer___WEBPACK_IMPORTED_MODULE_1__["ContentRenderer"]);

      SourceCodeComponent.ɵfac = function SourceCodeComponent_Factory(t) {
        return new (t || SourceCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      SourceCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SourceCodeComponent,
        selectors: [["dg-source-code"], ["", "dgSourceCode", ""]],
        viewQuery: function SourceCodeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeContent = _t.first);
          }
        },
        hostAttrs: [1, "dg-source-code"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 1,
        consts: [[1, "dg-source-code-content"], ["codeContent", ""], ["href", "javascript:;", "title", "Copy", 3, "dgCopy"]],
        template: function SourceCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dgCopy", ctx.textContent);
          }
        },
        directives: [_copy_copy_component__WEBPACK_IMPORTED_MODULE_3__["CopyComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SourceCodeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-source-code, [dgSourceCode]',
            templateUrl: './source-code.component.html',
            host: {
              "class": 'dg-source-code'
            }
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, {
          codeContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['codeContent', {
              "static": true,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "n9tt":
    /*!**********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/interfaces/example.ts ***!
      \**********************************************************************************************/

    /*! no exports provided */

    /***/
    function n9tt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "nM9a":
    /*!************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/environments/environment.ts ***!
      \************************************************************************************************/

    /*! exports provided: environment */

    /***/
    function nM9a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        hmr: true
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "o1sK":
    /*!**************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/utils/language-compare.ts ***!
      \**************************************************************************************************/

    /*! exports provided: languageCompare */

    /***/
    function o1sK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "languageCompare", function () {
        return languageCompare;
      });

      function languageCompare(language1, language2) {
        return language1.toLocaleLowerCase().replace(/_/g, '-') === language2.toLocaleLowerCase().replace(/_/g, '-');
      }
      /***/

    },

    /***/
    "pCGV":
    /*!*************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/navigations.json ***!
      \*************************************************************************************************/

    /*! exports provided: en-us, zh-cn, default */

    /***/
    function pCGV(module) {
      module.exports = JSON.parse("{\"en-us\":[{\"id\":\"guides\",\"path\":\"guides\",\"channelPath\":\"guides\",\"title\":\"Guides\",\"items\":[{\"id\":\"guides/intro\",\"path\":\"guides/intro\",\"channelPath\":\"guides\",\"title\":\"Introduce\",\"items\":[{\"id\":\"index\",\"path\":\"intro\",\"channelPath\":\"guides\",\"title\":\"Introduce\",\"order\":10,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/intro/index.html\",\"originPath\":\"docs/en-us/guides/intro/index.md\"},{\"id\":\"getting-started\",\"path\":\"intro/getting-started\",\"channelPath\":\"guides\",\"title\":\"Getting Started\",\"order\":30,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/intro/getting-started.html\",\"originPath\":\"docs/en-us/guides/intro/getting-started.md\"}],\"order\":10},{\"id\":\"guides/basic\",\"path\":\"guides/basic\",\"channelPath\":\"guides\",\"title\":\"Basic\",\"items\":[{\"id\":\"route-nav-menu\",\"path\":\"basic/route-nav-menu\",\"channelPath\":\"guides\",\"title\":\"Route Navigation & Menu\",\"order\":20,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/basic/route-nav-menu.html\",\"originPath\":\"docs/en-us/guides/basic/route-nav-menu.md\"},{\"id\":\"lib-nav\",\"path\":\"basic/lib-nav\",\"channelPath\":\"guides\",\"title\":\"Library Navigation & Menu\",\"order\":30,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/basic/lib-nav.html\",\"originPath\":\"docs/en-us/guides/basic/lib-nav.md\"},{\"id\":\"component\",\"path\":\"basic/component\",\"channelPath\":\"guides\",\"title\":\"Overview & API & Examples\",\"order\":40,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/basic/component.html\",\"originPath\":\"docs/en-us/guides/basic/component.md\"},{\"id\":\"built-in-components\",\"path\":\"basic/built-in-components\",\"channelPath\":\"guides\",\"title\":\"Built-in Components\",\"order\":50,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/basic/built-in-components.html\",\"originPath\":\"docs/en-us/guides/basic/built-in-components.md\"}],\"order\":15},{\"id\":\"guides/advance\",\"path\":\"guides/advance\",\"channelPath\":\"guides\",\"title\":\"Advanced\",\"items\":[{\"id\":\"customize\",\"path\":\"advance/customize\",\"channelPath\":\"guides\",\"title\":\"Customize Site\",\"order\":20,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/advance/customize.html\",\"originPath\":\"docs/en-us/guides/advance/customize.md\"},{\"id\":\"locales\",\"path\":\"advance/locales\",\"channelPath\":\"guides\",\"title\":\"Multi-language\",\"order\":100,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/advance/locales.html\",\"originPath\":\"docs/en-us/guides/advance/locales.md\"}],\"order\":40},{\"id\":\"faq\",\"path\":\"faq\",\"channelPath\":\"guides\",\"title\":\"FAQ\",\"order\":9007199254740991,\"toc\":\"content\",\"contentPath\":\"docs/en-us/guides/faq.html\",\"originPath\":\"docs/en-us/guides/faq.md\"}],\"order\":20},{\"id\":\"configuration\",\"path\":\"configuration\",\"channelPath\":\"configuration\",\"title\":\"Configuration\",\"items\":[{\"id\":\"global\",\"path\":\"global\",\"channelPath\":\"configuration\",\"title\":\"Global Configuration\",\"order\":30,\"toc\":\"menu\",\"contentPath\":\"docs/en-us/configuration/global.html\",\"originPath\":\"docs/en-us/configuration/global.md\"},{\"id\":\"lib\",\"path\":\"lib\",\"channelPath\":\"configuration\",\"title\":\"Library Configuration\",\"order\":30,\"toc\":\"menu\",\"contentPath\":\"docs/en-us/configuration/lib.html\",\"originPath\":\"docs/en-us/configuration/lib.md\"},{\"id\":\"front-matter\",\"path\":\"front-matter\",\"channelPath\":\"configuration\",\"title\":\"Front Matter\",\"order\":40,\"toc\":\"menu\",\"contentPath\":\"docs/en-us/configuration/front-matter.html\",\"originPath\":\"docs/en-us/configuration/front-matter.md\"}],\"order\":30},{\"title\":\"Components\",\"path\":\"components\",\"lib\":\"alib\",\"items\":[{\"id\":\"general\",\"title\":\"General\",\"items\":[{\"id\":\"button\",\"title\":\"Button\",\"subtitle\":\"\",\"path\":\"button\",\"importSpecifier\":\"alib/button\",\"examples\":[\"alib-button-basic-example\",\"alib-button-advance-title-example\",\"alib-button-advance-example\"],\"overview\":true,\"api\":true,\"order\":1,\"category\":\"general\",\"label\":{\"text\":\"New\",\"color\":\"#73D897\"},\"toc\":\"content\"},{\"id\":\"foo\",\"title\":\"Foo\",\"subtitle\":\"测试\",\"path\":\"foo\",\"importSpecifier\":\"alib/foo\",\"examples\":[\"alib-foo-advance-example\",\"alib-foo-basic-example\"],\"overview\":true,\"api\":false,\"order\":2,\"category\":\"general\",\"toc\":\"content\"}]},{\"id\":\"layout\",\"title\":\"Layout\",\"items\":[{\"id\":\"layout\",\"title\":\"Layout\",\"subtitle\":\"布局\",\"path\":\"layout\",\"importSpecifier\":\"alib/layout\",\"examples\":[\"alib-layout-advance-example\",\"alib-layout-basic-example\"],\"overview\":true,\"api\":false,\"order\":1,\"category\":\"layout\",\"toc\":\"content\"}]},{\"id\":\"zoo\",\"title\":\"Zoo\",\"subtitle\":\"\",\"path\":\"zoo\",\"importSpecifier\":\"alib/zoo\",\"examples\":[\"alib-zoo-basic-example\"],\"overview\":false,\"api\":false,\"order\":9007199254740991,\"toc\":\"content\"},{\"id\":\"bar\",\"title\":\"Bar\",\"subtitle\":\"\",\"path\":\"bar\",\"importSpecifier\":\"alib/bar\",\"examples\":[\"alib-bar-basic-example\"],\"overview\":false,\"api\":true,\"order\":9007199254740991,\"toc\":\"content\"},{\"id\":\"common\",\"title\":\"Common\",\"subtitle\":\"\",\"path\":\"common\",\"importSpecifier\":\"alib/common\",\"examples\":[],\"overview\":true,\"api\":false,\"order\":9007199254740991,\"toc\":\"content\"}]},{\"title\":\"GitHub\",\"path\":\"https://github.com/docgeni/docgeni\",\"isExternal\":true},{\"title\":\"Changelog\",\"path\":\"https://github.com/docgeni/docgeni/blob/master/CHANGELOG.md\",\"isExternal\":true}],\"zh-cn\":[{\"id\":\"guides\",\"path\":\"guides\",\"channelPath\":\"guides\",\"title\":\"指南\",\"items\":[{\"id\":\"guides/intro\",\"path\":\"guides/intro\",\"channelPath\":\"guides\",\"title\":\"介绍\",\"items\":[{\"id\":\"index\",\"path\":\"intro\",\"channelPath\":\"guides\",\"title\":\"介绍\",\"order\":10,\"toc\":\"hidden\",\"contentPath\":\"docs/guides/intro/index.html\",\"originPath\":\"docs/guides/intro/index.md\"},{\"id\":\"getting-started\",\"path\":\"intro/getting-started\",\"channelPath\":\"guides\",\"title\":\"快速上手\",\"order\":30,\"toc\":\"menu\",\"contentPath\":\"docs/guides/intro/getting-started.html\",\"originPath\":\"docs/guides/intro/getting-started.md\"},{\"id\":\"guides/intro/hello\",\"path\":\"guides/intro/hello\",\"channelPath\":\"guides\",\"title\":\"Hello\",\"items\":[],\"order\":9007199254740991}],\"order\":10},{\"id\":\"guides/basic\",\"path\":\"guides/basic\",\"channelPath\":\"guides\",\"title\":\"基本用法\",\"items\":[{\"id\":\"route-nav-menu\",\"path\":\"basic/route-nav-menu\",\"channelPath\":\"guides\",\"title\":\"路由导航菜单\",\"order\":20,\"toc\":\"content\",\"contentPath\":\"docs/guides/basic/route-nav-menu.html\",\"originPath\":\"docs/guides/basic/route-nav-menu.md\"},{\"id\":\"lib-nav\",\"path\":\"basic/lib-nav\",\"channelPath\":\"guides\",\"title\":\"类库导航和菜单\",\"order\":30,\"toc\":\"content\",\"contentPath\":\"docs/guides/basic/lib-nav.html\",\"originPath\":\"docs/guides/basic/lib-nav.md\"},{\"id\":\"component\",\"path\":\"basic/component\",\"channelPath\":\"guides\",\"title\":\"组件文档、API和示例\",\"order\":40,\"toc\":\"content\",\"contentPath\":\"docs/guides/basic/component.html\",\"originPath\":\"docs/guides/basic/component.md\"},{\"id\":\"built-in-components\",\"path\":\"basic/built-in-components\",\"channelPath\":\"guides\",\"title\":\"内置组件\",\"order\":50,\"toc\":\"content\",\"contentPath\":\"docs/guides/basic/built-in-components.html\",\"originPath\":\"docs/guides/basic/built-in-components.md\"}],\"order\":15},{\"id\":\"guides/advance\",\"path\":\"guides/advance\",\"channelPath\":\"guides\",\"title\":\"高级用法\",\"items\":[{\"id\":\"customize\",\"path\":\"advance/customize\",\"channelPath\":\"guides\",\"title\":\"自定义站点\",\"order\":20,\"toc\":\"content\",\"contentPath\":\"docs/guides/advance/customize.html\",\"originPath\":\"docs/guides/advance/customize.md\"},{\"id\":\"home\",\"path\":\"advance/home\",\"channelPath\":\"guides\",\"title\":\"自定义首页\",\"order\":30,\"toc\":\"content\",\"contentPath\":\"docs/guides/advance/home.html\",\"originPath\":\"docs/guides/advance/home.md\"},{\"id\":\"locales\",\"path\":\"advance/locales\",\"channelPath\":\"guides\",\"title\":\"多语言\",\"order\":100,\"toc\":\"content\",\"contentPath\":\"docs/guides/advance/locales.html\",\"originPath\":\"docs/guides/advance/locales.md\"}],\"order\":40},{\"id\":\"faq\",\"path\":\"faq\",\"channelPath\":\"guides\",\"title\":\"常见问题\",\"order\":9007199254740991,\"toc\":\"content\",\"contentPath\":\"docs/guides/faq.html\",\"originPath\":\"docs/guides/faq.md\"}],\"order\":20},{\"id\":\"configuration\",\"path\":\"configuration\",\"channelPath\":\"configuration\",\"title\":\"配置\",\"items\":[{\"id\":\"global\",\"path\":\"global\",\"channelPath\":\"configuration\",\"title\":\"全局配置\",\"order\":30,\"toc\":\"menu\",\"contentPath\":\"docs/configuration/global.html\",\"originPath\":\"docs/configuration/global.md\"},{\"id\":\"lib\",\"path\":\"lib\",\"channelPath\":\"configuration\",\"title\":\"类库配置\",\"order\":30,\"toc\":\"menu\",\"contentPath\":\"docs/configuration/lib.html\",\"originPath\":\"docs/configuration/lib.md\"},{\"id\":\"front-matter\",\"path\":\"front-matter\",\"channelPath\":\"configuration\",\"title\":\"Front Matter\",\"order\":40,\"toc\":\"menu\",\"contentPath\":\"docs/configuration/front-matter.html\",\"originPath\":\"docs/configuration/front-matter.md\"}],\"order\":30},{\"title\":\"组件\",\"path\":\"components\",\"lib\":\"alib\",\"items\":[{\"id\":\"general\",\"title\":\"通用\",\"items\":[{\"id\":\"button\",\"title\":\"Button\",\"subtitle\":\"按钮\",\"path\":\"button\",\"importSpecifier\":\"alib/button\",\"examples\":[\"alib-button-basic-example\",\"alib-button-advance-title-example\",\"alib-button-advance-example\"],\"overview\":true,\"api\":true,\"order\":1,\"category\":\"general\",\"label\":{\"text\":\"New\",\"color\":\"#73D897\"},\"toc\":\"content\"},{\"id\":\"foo\",\"title\":\"Foo\",\"subtitle\":\"测试\",\"path\":\"foo\",\"importSpecifier\":\"alib/foo\",\"examples\":[\"alib-foo-advance-example\",\"alib-foo-basic-example\"],\"overview\":true,\"api\":false,\"order\":2,\"category\":\"general\",\"toc\":\"content\"}]},{\"id\":\"layout\",\"title\":\"布局\",\"items\":[{\"id\":\"layout\",\"title\":\"Layout\",\"subtitle\":\"布局\",\"path\":\"layout\",\"importSpecifier\":\"alib/layout\",\"examples\":[\"alib-layout-advance-example\",\"alib-layout-basic-example\"],\"overview\":true,\"api\":false,\"order\":1,\"category\":\"layout\",\"toc\":\"content\"}]},{\"id\":\"zoo\",\"title\":\"Zoo\",\"subtitle\":\"\",\"path\":\"zoo\",\"importSpecifier\":\"alib/zoo\",\"examples\":[\"alib-zoo-basic-example\"],\"overview\":false,\"api\":false,\"order\":9007199254740991,\"toc\":\"content\"},{\"id\":\"bar\",\"title\":\"Bar\",\"subtitle\":\"\",\"path\":\"bar\",\"importSpecifier\":\"alib/bar\",\"examples\":[\"alib-bar-basic-example\"],\"overview\":false,\"api\":true,\"order\":9007199254740991,\"toc\":\"content\"},{\"id\":\"common\",\"title\":\"Common\",\"subtitle\":\"\",\"path\":\"common\",\"importSpecifier\":\"alib/common\",\"examples\":[],\"overview\":true,\"api\":false,\"order\":9007199254740991,\"toc\":\"content\"}]},{\"title\":\"GitHub\",\"path\":\"https://github.com/docgeni/docgeni\",\"isExternal\":true},{\"title\":\"更新日志\",\"path\":\"https://github.com/docgeni/docgeni/blob/master/CHANGELOG.md\",\"isExternal\":true}]}");
      /***/
    },

    /***/
    "pYbF":
    /*!********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/icon/svgs.ts ***!
      \********************************************************************************************/

    /*! exports provided: BUILTIN_SVGS */

    /***/
    function pYbF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BUILTIN_SVGS", function () {
        return BUILTIN_SVGS;
      });

      var github = "<svg focusable=\"false\" viewBox=\"0 0 51.8 50.4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\">\n<path\n  d=\"M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3C51.5,11.7,40.1,0.2,25.9,0.2z\"\n></path>\n</svg>";
      var code = "<svg\nviewBox=\"0 0 16 16\"\nxmlns=\"http://www.w3.org/2000/svg\"\nfit=\"\"\nheight=\"1em\"\nwidth=\"1em\"\npreserveAspectRatio=\"xMidYMid meet\"\nfocusable=\"false\"\n>\n<g fill-rule=\"evenodd\">\n  <path d=\"M.003 8.306l4.302 4.304.849-.848L.852 7.458z\"></path>\n  <path d=\"M0 8.308l.847.85 4.31-4.296-.847-.85zM10.8 4.861l4.309 4.296.848-.85-4.309-4.296z\"></path>\n  <path d=\"M10.804 11.762l.849.848 4.302-4.304-.85-.848zM8.526 4L6.1 12.582l1.241.006 2.435-8.565z\"></path>\n</g>\n</svg>";
      var external = "<svg\nfit=\"\"\nfocusable=\"false\"\nheight=\"100%\"\npreserveAspectRatio=\"xMidYMid meet\"\nviewBox=\"0 0 24 24\"\nwidth=\"100%\"\nxmlns=\"http://www.w3.org/2000/svg\"\n>\n<path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n<path\n  d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"\n></path>\n</svg>";
      var copy = "<svg\nviewBox=\"0 0 16 16\"\nxmlns=\"http://www.w3.org/2000/svg\"\nfit=\"\"\nheight=\"1em\"\nwidth=\"1em\"\npreserveAspectRatio=\"xMidYMid meet\"\nfocusable=\"false\"\n>\n<path\n  d=\"M7.6 8.2V7h4.174v1.2H7.6zm0 3V10h4.174v1.2H7.6zm-4.4-10v10.074H2L2.003 2c0-1.088.895-2 1.997-2h7.585v1.2H3.2zM5 2h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm.2 1.2v11.6h8.6V3.2H5.2z\"\n></path>\n</svg>";
      var check = "\n<svg\n  viewBox=\"0 0 16 16\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  fit=\"\"\n  height=\"1em\"\n  width=\"1em\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n>\n  <path d=\"M6.012 11.201L1.313 6.832l-.817.879 5.54 5.15 9.304-9.163-.842-.855z\"></path>\n</svg>";
      var list = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"align-justify\">\n<g id=\"ageditor/align-justify\" stroke-width=\"1\" fill-rule=\"evenodd\">\n  <path d=\"M0 1h16v1.2H0V1zm0 6.4h16v1.2H0V7.4zm0 6.4h16V15H0v-1.2z\" id=\"ag\u5408\u5E76\u5F62\u72B6\"></path>\n</g>\n</svg>";
      var arrowLeft = "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->\n    <title>navigation/arrow-left</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"navigation/arrow-left\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\">\n        <path d=\"M7.4,4.14955232 L4.4383,7.3151 C4.2123,7.5571 3.8323,7.5691 3.5903,7.3431 C3.3483,7.1161 3.3353,6.7371 3.5623,6.4951 L7.53151194,2.2516372 C7.55538364,2.21814642 7.58305703,2.18659454 7.6145,2.1576 C7.8585,1.9336 8.2375,1.9496 8.4615,2.1946 L12.4315,6.5176 C12.6565,6.7616 12.6395,7.1416 12.3955,7.3656 C12.1515,7.5896 11.7725,7.5736 11.5475,7.3296 L8.6,4.11846621 L8.6,13.2666667 C8.6,13.6712222 8.331,14 8,14 C7.668,14 7.4,13.6712222 7.4,13.2666667 L7.4,4.14955232 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"  transform=\"translate(7.995013, 7.999832) rotate(-90.000000) translate(-7.995013, -7.999832) \"></path>\n    </g>\n</svg>";
      var arrowRight = "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->\n    <title>navigation/arrow-right</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"navigation/arrow-right\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\">\n        <path d=\"M7.4,4.14955232 L4.4383,7.3151 C4.2123,7.5571 3.8323,7.5691 3.5903,7.3431 C3.3483,7.1161 3.3353,6.7371 3.5623,6.4951 L7.53151194,2.2516372 C7.55538364,2.21814642 7.58305703,2.18659454 7.6145,2.1576 C7.8585,1.9336 8.2375,1.9496 8.4615,2.1946 L12.4315,6.5176 C12.6565,6.7616 12.6395,7.1416 12.3955,7.3656 C12.1515,7.5896 11.7725,7.5736 11.5475,7.3296 L8.6,4.11846621 L8.6,13.2666667 C8.6,13.6712222 8.331,14 8,14 C7.668,14 7.4,13.6712222 7.4,13.2666667 L7.4,4.14955232 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"  transform=\"translate(7.995013, 7.999832) rotate(90.000000) translate(-7.995013, -7.999832) \"></path>\n    </g>\n</svg>";
      var angleRight = "<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->\n    <title>navigation/angle-right</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"navigation/angle-right\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M7.97815,11.49765 L7.9728,11.503 L2.2998,5.831 L3.1298,5 L7.97807731,9.84827731 L12.8255,5 L13.6565,5.831 L7.9835,11.503 L7.97815,11.49765 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\" fill=\"#888888\" transform=\"translate(7.978150, 8.251500) scale(-1, -1) rotate(-270.000000) translate(-7.978150, -8.251500) \"></path>\n    </g>\n</svg>";
      var BUILTIN_SVGS = {
        github: github,
        code: code,
        external: external,
        copy: copy,
        check: check,
        list: list,
        arrowLeft: arrowLeft,
        arrowRight: arrowRight,
        angleRight: angleRight
      };
      /***/
    },

    /***/
    "q4Up":
    /*!**********************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/routes.ts ***!
      \**********************************************************************************/

    /*! exports provided: routes */

    /***/
    function q4Up(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "LxNY");

      var actualRoutes = [{
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
      }];
      var routes = [].concat(actualRoutes);
      /***/
    },

    /***/
    "qDxM":
    /*!*******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/page-title.service.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PageTitleService */

    /***/
    function qDxM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageTitleService", function () {
        return PageTitleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "caRq");
      /* harmony import */


      var _global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./global-context */
      "gKL3");

      var PageTitleService = /*#__PURE__*/function () {
        function PageTitleService(bodyTitle, globalContext) {
          _classCallCheck(this, PageTitleService);

          this.bodyTitle = bodyTitle;
          this.globalContext = globalContext;
          this.innerTitle = '';
        }

        _createClass(PageTitleService, [{
          key: "title",
          get: function get() {
            return this.innerTitle;
          },
          set: function set(title) {
            this.innerTitle = title;

            if (title !== '') {
              title = "".concat(title, " - ").concat(this.globalContext.config.title);
            } else {
              title = this.globalContext.config.title;
            }

            this.bodyTitle.setTitle(title);
          }
        }]);

        return PageTitleService;
      }();

      PageTitleService.ɵfac = function PageTitleService_Factory(t) {
        return new (t || PageTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_context__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]));
      };

      PageTitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PageTitleService,
        factory: PageTitleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTitleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }, {
            type: _global_context__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qWGF":
    /*!***************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/initializer.ts ***!
      \***************************************************************************************/

    /*! exports provided: DOCGENI_INITIALIZER_PROVIDERS, initializeDocgeniSite */

    /***/
    function qWGF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOCGENI_INITIALIZER_PROVIDERS", function () {
        return DOCGENI_INITIALIZER_PROVIDERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initializeDocgeniSite", function () {
        return initializeDocgeniSite;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/public-api */
      "2Pz0");
      /* harmony import */


      var _services_router_reset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/router-reset.service */
      "FRmB");

      var DOCGENI_INITIALIZER_PROVIDERS = [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        useFactory: initializeDocgeniSite,
        deps: [_services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"], _services_router_reset_service__WEBPACK_IMPORTED_MODULE_2__["RouterResetService"]],
        multi: true
      }];

      function initializeDocgeniSite(globalContext, routerResetService) {
        return function () {
          return globalContext.initialize().then(function () {
            routerResetService.resetRoutes();
          });
        };
      }
      /***/

    },

    /***/
    "rVPT":
    /*!****************************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/component-viewer/overview/component-overview.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: ComponentOverviewComponent */

    /***/
    function rVPT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentOverviewComponent", function () {
        return ComponentOverviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../component-viewer.component */
      "A8ta");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _shared_content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/content-viewer/content-viewer.component */
      "A3AA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _shared_toc_toc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/toc/toc.component */
      "KDNN");

      var _c0 = ["toc"];

      function ComponentOverviewComponent_dg_toc_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-toc", null, 2);
        }
      }

      var ComponentOverviewComponent = /*#__PURE__*/function () {
        function ComponentOverviewComponent(componentViewer, global) {
          _classCallCheck(this, ComponentOverviewComponent);

          this.componentViewer = componentViewer;
          this.global = global;
          this.contentClass = true;
        }

        _createClass(ComponentOverviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contentUrl = this.global.getAssetsContentPath("overviews/".concat(this.componentViewer.docItem.importSpecifier, "/").concat(this.global.locale, ".html"));
          }
        }]);

        return ComponentOverviewComponent;
      }();

      ComponentOverviewComponent.ɵfac = function ComponentOverviewComponent_Factory(t) {
        return new (t || ComponentOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]));
      };

      ComponentOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ComponentOverviewComponent,
        selectors: [["dg-component-overview"]],
        viewQuery: function ComponentOverviewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableOfContents = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function ComponentOverviewComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-component-overview", ctx.contentClass);
          }
        },
        decls: 2,
        vars: 2,
        consts: [[1, "dg-doc-viewer-inner-content", 3, "url"], [4, "ngIf"], ["toc", ""]],
        template: function ComponentOverviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-content-viewer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentOverviewComponent_dg_toc_1_Template, 2, 0, "dg-toc", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.contentUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.componentViewer.docItem.toc === "content");
          }
        },
        directives: [_shared_content_viewer_content_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ContentViewerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_toc_toc_component__WEBPACK_IMPORTED_MODULE_5__["TableOfContentsComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentOverviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-component-overview',
            templateUrl: './component-overview.component.html'
          }]
        }], function () {
          return [{
            type: _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]
          }];
        }, {
          contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-component-overview']
          }],
          tableOfContents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toc']
          }]
        });
      })();
      /***/

    },

    /***/
    "sKEz":
    /*!********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/label/label.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: LabelComponent */

    /***/
    function sKEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabelComponent", function () {
        return LabelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _utils_color_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/color-metadata */
      "B6mT");

      var _c0 = ["*"];
      var LABEL_LIST = ['primary', 'danger', 'warning', 'info'];

      var LabelComponent = /*#__PURE__*/function () {
        function LabelComponent(elementRef, renderer) {
          _classCallCheck(this, LabelComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
        }

        _createClass(LabelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getBackgroundColor",
          value: function getBackgroundColor(color) {
            var _Object = Object(_utils_color_metadata__WEBPACK_IMPORTED_MODULE_1__["colorMetadata"])(color),
                r = _Object.r,
                g = _Object.g,
                b = _Object.b;

            return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",0.20)");
          }
        }, {
          key: "labelType",
          set: function set(value) {
            if (LABEL_LIST.includes(value)) {
              this.classList = ['dg-label', "dg-label-".concat(value)];
            } else {
              this.classList = ['dg-label'];
              this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.getBackgroundColor(value));
              this.renderer.setStyle(this.elementRef.nativeElement, 'color', value);
            }
          }
        }]);

        return LabelComponent;
      }();

      LabelComponent.ɵfac = function LabelComponent_Factory(t) {
        return new (t || LabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      LabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LabelComponent,
        selectors: [["dg-label"]],
        hostVars: 2,
        hostBindings: function LabelComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classList);
          }
        },
        inputs: {
          labelType: "labelType"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function LabelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-label',
            templateUrl: './label.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
          }],
          labelType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "tm1L":
    /*!**********************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/pages.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: DocgeniPagesModule, ActualRootComponent, RootComponent, HomeComponent, ChannelComponent, DocViewerComponent, DocViewerHomeComponent, ComponentViewerComponent, ComponentOverviewComponent, ComponentApiComponent, ComponentExamplesComponent, ComponentEmptyComponent */

    /***/
    function tm1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocgeniPagesModule", function () {
        return DocgeniPagesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component-viewer/component-viewer.component */
      "A8ta");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentViewerComponent", function () {
        return _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentEmptyComponent", function () {
        return _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentEmptyComponent"];
      });
      /* harmony import */


      var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./doc-viewer/doc-viewer.component */
      "cyu1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocViewerComponent", function () {
        return _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocViewerHomeComponent", function () {
        return _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerHomeComponent"];
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "YB8S");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "LxNY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"];
      });
      /* harmony import */


      var _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./channel/channel.component */
      "+ELa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChannelComponent", function () {
        return _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelComponent"];
      });
      /* harmony import */


      var _root_root_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./root/root.component */
      "vy4S");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ActualRootComponent", function () {
        return _root_root_component__WEBPACK_IMPORTED_MODULE_6__["ActualRootComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RootComponent", function () {
        return _root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"];
      });
      /* harmony import */


      var _component_viewer_overview_component_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./component-viewer/overview/component-overview.component */
      "rVPT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentOverviewComponent", function () {
        return _component_viewer_overview_component_overview_component__WEBPACK_IMPORTED_MODULE_7__["ComponentOverviewComponent"];
      });
      /* harmony import */


      var _component_viewer_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./component-viewer/api/component-api.component */
      "0Nd9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function () {
        return _component_viewer_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__["ComponentApiComponent"];
      });
      /* harmony import */


      var _component_viewer_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./component-viewer/examples/component-examples.component */
      "HhmG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentExamplesComponent", function () {
        return _component_viewer_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_9__["ComponentExamplesComponent"];
      });
      /* harmony import */


      var _example_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./example/example.component */
      "hDUS");

      var COMPONENTS = [_root_root_component__WEBPACK_IMPORTED_MODULE_6__["ActualRootComponent"], _root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelComponent"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelHomeComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerHomeComponent"], _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"], _component_viewer_overview_component_overview_component__WEBPACK_IMPORTED_MODULE_7__["ComponentOverviewComponent"], _component_viewer_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__["ComponentApiComponent"], _component_viewer_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_9__["ComponentExamplesComponent"], _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentEmptyComponent"], _example_example_component__WEBPACK_IMPORTED_MODULE_10__["ExampleIsolatedViewerComponent"]];

      var DocgeniPagesModule = function DocgeniPagesModule(appRef) {
        _classCallCheck(this, DocgeniPagesModule);

        this.appRef = appRef;
      };

      DocgeniPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DocgeniPagesModule
      });
      DocgeniPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DocgeniPagesModule_Factory(t) {
          return new (t || DocgeniPagesModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]));
        },
        providers: [],
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["DocgeniSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocgeniPagesModule, {
          declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_6__["ActualRootComponent"], _root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelComponent"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelHomeComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerHomeComponent"], _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"], _component_viewer_overview_component_overview_component__WEBPACK_IMPORTED_MODULE_7__["ComponentOverviewComponent"], _component_viewer_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__["ComponentApiComponent"], _component_viewer_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_9__["ComponentExamplesComponent"], _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentEmptyComponent"], _example_example_component__WEBPACK_IMPORTED_MODULE_10__["ExampleIsolatedViewerComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["DocgeniSharedModule"]],
          exports: [_root_root_component__WEBPACK_IMPORTED_MODULE_6__["ActualRootComponent"], _root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelComponent"], _channel_channel_component__WEBPACK_IMPORTED_MODULE_5__["ChannelHomeComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerHomeComponent"], _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"], _component_viewer_overview_component_overview_component__WEBPACK_IMPORTED_MODULE_7__["ComponentOverviewComponent"], _component_viewer_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__["ComponentApiComponent"], _component_viewer_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_9__["ComponentExamplesComponent"], _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentEmptyComponent"], _example_example_component__WEBPACK_IMPORTED_MODULE_10__["ExampleIsolatedViewerComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocgeniPagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [].concat(COMPONENTS),
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["DocgeniSharedModule"]],
            providers: [],
            exports: [].concat(COMPONENTS)
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vy4S":
    /*!*****************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/pages/root/root.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ActualRootComponent, RootComponent */

    /***/
    function vy4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActualRootComponent", function () {
        return ActualRootComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RootComponent", function () {
        return RootComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/navigation.service */
      "Tsk+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/navbar/navbar.component */
      "xQG+");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/sidebar/sidebar.component */
      "94D3");
      /* harmony import */


      var _shared_pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/pipes/mode.pipe */
      "cYjk");

      function ActualRootComponent_dg_navbar_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-navbar");
        }
      }

      function ActualRootComponent_dg_sidebar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-sidebar", 2);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menus", ctx_r1.navigationService.navs);
        }
      }

      var ActualRootComponent = /*#__PURE__*/function () {
        function ActualRootComponent(global, navigationService) {
          _classCallCheck(this, ActualRootComponent);

          this.global = global;
          this.navigationService = navigationService;
          this.isMain = true;
          this.isLayout = true;
          this.isScrollContainer = this.global.config.mode === 'lite';
        }

        _createClass(ActualRootComponent, [{
          key: "showSidebar",
          get: function get() {
            return this.navigationService.showSidebar;
          }
        }]);

        return ActualRootComponent;
      }();

      ActualRootComponent.ɵfac = function ActualRootComponent_Factory(t) {
        return new (t || ActualRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]));
      };

      ActualRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActualRootComponent,
        selectors: [["dg-root-actual"]],
        hostVars: 8,
        hostBindings: function ActualRootComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-main", ctx.isMain)("dg-layout", ctx.isLayout)("dg-scroll-container", ctx.isScrollContainer)("dg-sidebar-show", ctx.showSidebar);
          }
        },
        decls: 5,
        vars: 6,
        consts: [[4, "ngIf"], [3, "menus", 4, "ngIf"], [3, "menus"]],
        template: function ActualRootComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ActualRootComponent_dg_navbar_0_Template, 1, 0, "dg-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "dgIsFull");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActualRootComponent_dg_sidebar_2_Template, 1, 1, "dg-sidebar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "dgIsLite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.global.config.mode));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.global.config.mode));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
        pipes: [_shared_pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_7__["IsModeFullPipe"], _shared_pipes_mode_pipe__WEBPACK_IMPORTED_MODULE_7__["IsModeLitePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActualRootComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-root-actual',
            templateUrl: './root.component.html'
          }]
        }], function () {
          return [{
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }, {
            type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
          }];
        }, {
          isMain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-main"]
          }],
          isLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-layout"]
          }],
          isScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-scroll-container"]
          }],
          showSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.dg-sidebar-show"]
          }]
        });
      })();

      var RootComponent = function RootComponent(global, navigationService) {
        _classCallCheck(this, RootComponent);

        this.global = global;
        this.navigationService = navigationService;
      };

      RootComponent.ɵfac = function RootComponent_Factory(t) {
        return new (t || RootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]));
      };

      RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RootComponent,
        selectors: [["dg-root"]],
        decls: 1,
        vars: 0,
        template: function RootComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-root',
            template: '<router-outlet></router-outlet>'
          }]
        }], function () {
          return [{
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }, {
            type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wNV8":
    /*!**************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/public-api.ts ***!
      \**************************************************************************************/

    /*! exports provided: DocgeniTemplateModule, DocgeniSharedModule, NavbarComponent, FooterComponent, SidebarComponent, ExampleViewerComponent, ExampleRendererComponent, IconComponent, DocHeaderComponent, LabelComponent, ContentViewerComponent, SourceCodeComponent, TableOfContentsComponent, CopierService, CopyComponent, AssetsContentPathPipe, IsModeFullPipe, IsModeLitePipe, DocgeniPagesModule, ActualRootComponent, RootComponent, HomeComponent, ChannelComponent, DocViewerComponent, DocViewerHomeComponent, ComponentViewerComponent, ComponentOverviewComponent, ComponentApiComponent, ComponentExamplesComponent, ComponentEmptyComponent, CONFIG_TOKEN, DEFAULT_CONFIG, GlobalContext, NavigationService, ChannelResolver, ExampleLoader, PageTitleService, DocgeniBuiltInModule, setBuiltInComponents, getBuiltInComponents, BUILT_IN_COMPONENTS, RouterResetService, routes, DOCGENI_INITIALIZER_PROVIDERS, initializeDocgeniSite, DocgeniBuiltInComponent, addBuiltInComponents */

    /***/
    function wNV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module */
      "BOKR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniTemplateModule", function () {
        return _module__WEBPACK_IMPORTED_MODULE_0__["DocgeniTemplateModule"];
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/shared.module */
      "YB8S");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniSharedModule", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocgeniSharedModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExampleViewerComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["ExampleViewerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExampleRendererComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["ExampleRendererComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["IconComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocHeaderComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["DocHeaderComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LabelComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["LabelComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ContentViewerComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["ContentViewerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SourceCodeComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SourceCodeComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TableOfContentsComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["TableOfContentsComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CopierService", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["CopierService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CopyComponent", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["CopyComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssetsContentPathPipe", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["AssetsContentPathPipe"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IsModeFullPipe", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["IsModeFullPipe"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IsModeLitePipe", function () {
        return _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["IsModeLitePipe"];
      });
      /* harmony import */


      var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/pages.module */
      "tm1L");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniPagesModule", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocgeniPagesModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ActualRootComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["ActualRootComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RootComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["RootComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChannelComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["ChannelComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocViewerComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocViewerHomeComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["DocViewerHomeComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentViewerComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["ComponentViewerComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentOverviewComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["ComponentOverviewComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["ComponentApiComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentExamplesComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["ComponentExamplesComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentEmptyComponent", function () {
        return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["ComponentEmptyComponent"];
      });
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/public-api */
      "2Pz0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CONFIG_TOKEN", function () {
        return _services_public_api__WEBPACK_IMPORTED_MODULE_3__["CONFIG_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return _services_public_api__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GlobalContext", function () {
        return _services_public_api__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return _services_public_api__WEBPACK_IMPORTED_MODULE_3__["NavigationService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChannelResolver", function () {
        return _services_public_api__WEBPACK_IMPORTED_MODULE_3__["ChannelResolver"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExampleLoader", function () {
        return _services_public_api__WEBPACK_IMPORTED_MODULE_3__["ExampleLoader"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageTitleService", function () {
        return _services_public_api__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"];
      });
      /* harmony import */


      var _built_in_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./built-in/index */
      "Mf95");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniBuiltInModule", function () {
        return _built_in_index__WEBPACK_IMPORTED_MODULE_4__["DocgeniBuiltInModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setBuiltInComponents", function () {
        return _built_in_index__WEBPACK_IMPORTED_MODULE_4__["setBuiltInComponents"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getBuiltInComponents", function () {
        return _built_in_index__WEBPACK_IMPORTED_MODULE_4__["getBuiltInComponents"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BUILT_IN_COMPONENTS", function () {
        return _built_in_index__WEBPACK_IMPORTED_MODULE_4__["BUILT_IN_COMPONENTS"];
      });
      /* harmony import */


      var _services_router_reset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/router-reset.service */
      "FRmB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RouterResetService", function () {
        return _services_router_reset_service__WEBPACK_IMPORTED_MODULE_5__["RouterResetService"];
      });
      /* harmony import */


      var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./routes */
      "q4Up");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return _routes__WEBPACK_IMPORTED_MODULE_6__["routes"];
      });
      /* harmony import */


      var _interfaces_public_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./interfaces/public-api */
      "RHi/");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _initializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./initializer */
      "qWGF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DOCGENI_INITIALIZER_PROVIDERS", function () {
        return _initializer__WEBPACK_IMPORTED_MODULE_8__["DOCGENI_INITIALIZER_PROVIDERS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "initializeDocgeniSite", function () {
        return _initializer__WEBPACK_IMPORTED_MODULE_8__["initializeDocgeniSite"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocgeniBuiltInComponent", function () {
        return _built_in_index__WEBPACK_IMPORTED_MODULE_4__["DocgeniBuiltInComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "addBuiltInComponents", function () {
        return _built_in_index__WEBPACK_IMPORTED_MODULE_4__["addBuiltInComponents"];
      });
      /*
       * Public API Surface of @docgeni/template
       */
      // It will warn Circular dependence when export from /services/public-api

      /***/

    },

    /***/
    "wiIL":
    /*!******************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/services/dom-portal-outlet.ts ***!
      \******************************************************************************************************/

    /*! exports provided: DomPortalOutlet */

    /***/
    function wiIL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
        return DomPortalOutlet;
      });

      var DomPortalOutlet = /*#__PURE__*/function () {
        function DomPortalOutlet(outletElement, componentFactoryResolver, appRef, defaultInjector, projectableNodes) {
          _classCallCheck(this, DomPortalOutlet);

          this.outletElement = outletElement;
          this.componentFactoryResolver = componentFactoryResolver;
          this.appRef = appRef;
          this.defaultInjector = defaultInjector;
          this.projectableNodes = projectableNodes;
        }

        _createClass(DomPortalOutlet, [{
          key: "attach",
          value: function attach(portal) {
            var _this21 = this;

            var resolver = portal.componentFactoryResolver || this.componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the view to the application.

            if (portal.viewContainerRef) {
              componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector, this.projectableNodes);
              this.setDisposeFn(function () {
                componentRef.destroy();
              });
            } else {
              componentRef = componentFactory.create(portal.injector || this.defaultInjector);
              this.appRef.attachView(componentRef.hostView);
              this.setDisposeFn(function () {
                _this21.appRef.detachView(componentRef.hostView);

                componentRef.destroy();
              });
            } // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.


            this.outletElement.replaceWith(this.getComponentRootNode(componentRef)); // this.outletElement.appendChild(this._getComponentRootNode(componentRef));

            this.attachedPortal = portal;
            return componentRef;
          }
        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return !!this.attachedPortal;
          }
          /** Detaches a previously attached portal. */

        }, {
          key: "detach",
          value: function detach() {
            if (this.attachedPortal) {
              this.attachedPortal.setAttachedHost(null);
              this.attachedPortal = null;
            }

            this.invokeDisposeFn();
          }
          /** Permanently dispose of this portal host. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.hasAttached()) {
              this.detach();
            }

            this.invokeDisposeFn();
            this.isDisposed = true;
          }
          /** @docs-private */

        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this.disposeFn = fn;
          }
        }, {
          key: "invokeDisposeFn",
          value: function invokeDisposeFn() {
            if (this.disposeFn) {
              this.disposeFn();
              this.disposeFn = null;
            }
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "getComponentRootNode",
          value: function getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return DomPortalOutlet;
      }();
      /***/

    },

    /***/
    "xQG+":
    /*!**********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/navbar/navbar.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function xQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/public-api */
      "2Pz0");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../logo/logo.component */
      "XEMZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "qLko");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../icon/icon.component */
      "2PPk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");
      /* harmony import */


      var _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../locales-selector/locales-selector.component */
      "gyWy");

      function NavbarComponent_ng_container_10_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dg-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var channel_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", channel_r3.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", channel_r3.title, " ");
        }
      }

      function NavbarComponent_ng_container_10_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var channel_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", channel_r3.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r3.title);
        }
      }

      function NavbarComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_container_10_a_1_Template, 3, 2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_container_10_ng_template_2_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var channel_r3 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", channel_r3.isExternal)("ngIfElse", _r5);
        }
      }

      function NavbarComponent_dg_locales_selector_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dg-locales-selector", 16);
        }
      }

      function NavbarComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.global.config.repoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0() {
        return ["/"];
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(global, navigationService, elementRef) {
          _classCallCheck(this, NavbarComponent);

          this.global = global;
          this.navigationService = navigationService;
          this.elementRef = elementRef;
          this.isNavbar = true;
          this.showNav = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.channels = this.navigationService.getChannels();
            this.elementRef.nativeElement.classList.add(this.global.config.theme);
          }
        }, {
          key: "toggleNavbar",
          value: function toggleNavbar() {
            this.showNav = !this.showNav;
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_api__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["dg-navbar"]],
        hostVars: 4,
        hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dg-navbar", ctx.isNavbar)("show", ctx.showNav);
          }
        },
        decls: 15,
        vars: 6,
        consts: [[1, "navbar-brand"], [1, "title", 3, "routerLink"], [1, "nav", "nav-spacer"], [1, "navbar-toggler", "dg-btn", "dg-btn-primary", 3, "click"], ["iconName", "list"], [1, "nav"], [4, "ngFor", "ngForOf"], [1, "spacer"], [1, "action-items"], ["class", "action-item", 4, "ngIf"], ["class", "action-item repo-url", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf", "ngIfElse"], ["navLink", ""], ["target", "_blank", 3, "href"], ["iconName", "external"], ["routerLinkActive", "active", 3, "routerLink"], [1, "action-item"], ["target", "_blank", 1, "action-item", "repo-url", 3, "href"], ["iconName", "github"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dg-logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_7_listener() {
              return ctx.toggleNavbar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dg-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_ng_container_10_Template, 4, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_dg_locales_selector_13_Template, 1, 0, "dg-locales-selector", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_a_14_Template, 2, 1, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.global.config.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.global.config.locales && ctx.global.config.locales.length > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.global.config.repoUrl);
          }
        },
        directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _locales_selector_locales_selector_component__WEBPACK_IMPORTED_MODULE_6__["LocalesSelectorComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-navbar',
            templateUrl: './navbar.component.html'
          }]
        }], function () {
          return [{
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }, {
            type: _services_public_api__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          isNavbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.dg-navbar']
          }],
          showNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.show']
          }]
        });
      })();
      /***/

    },

    /***/
    "xnIq":
    /*!******************************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/example-renderer/example-renderer.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: ExampleRendererComponent */

    /***/
    function xnIq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleRendererComponent", function () {
        return ExampleRendererComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_example_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/example-loader */
      "KIzp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "4OvT");

      function ExampleRendererComponent_0_ng_template_0_Template(rf, ctx) {}

      function ExampleRendererComponent_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExampleRendererComponent_0_ng_template_0_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r0.componentType)("ngComponentOutletNgModuleFactory", ctx_r0.exampleModuleFactory);
        }
      }

      function ExampleRendererComponent_1_ng_template_0_Template(rf, ctx) {}

      function ExampleRendererComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExampleRendererComponent_1_ng_template_0_Template, 0, 0, "ng-template", 2);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.componentType);
        }
      }

      var ExampleRendererComponent = /*#__PURE__*/function () {
        function ExampleRendererComponent(exampleLoader) {
          _classCallCheck(this, ExampleRendererComponent);

          this.exampleLoader = exampleLoader;
          /** Component type for the current example. */

          this.componentType = null;
          this.exampleModuleFactory = null;
          this.exampleLoadSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ExampleRendererComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "load",
          value: function load(name) {
            var _this22 = this;

            this.exampleLoader.load(name).then(function (result) {
              _this22.exampleModuleFactory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵNgModuleFactory"](result.moduleType);
              _this22.componentType = result.componentType;

              _this22.exampleLoadSuccess.emit(result.example);
            });
          }
        }, {
          key: "name",
          set: function set(name) {
            this.load(name);
          }
        }, {
          key: "exampleModuleType",
          set: function set(type) {
            this.exampleModuleFactory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵNgModuleFactory"](type);
          }
        }, {
          key: "exampleComponentType",
          set: function set(type) {
            this.componentType = type;
          }
        }, {
          key: "enableIvy",
          get: function get() {
            return this.exampleLoader.enableIvy;
          }
        }]);

        return ExampleRendererComponent;
      }();

      ExampleRendererComponent.ɵfac = function ExampleRendererComponent_Factory(t) {
        return new (t || ExampleRendererComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_example_loader__WEBPACK_IMPORTED_MODULE_1__["ExampleLoader"]));
      };

      ExampleRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExampleRendererComponent,
        selectors: [["dg-example-renderer"], ["", "dgExampleRenderer", ""]],
        inputs: {
          name: "name",
          exampleModuleType: "exampleModuleType",
          exampleComponentType: "exampleComponentType"
        },
        outputs: {
          exampleLoadSuccess: "exampleLoadSuccess"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [3, "ngComponentOutlet", "ngComponentOutletNgModuleFactory"], [3, "ngComponentOutlet"]],
        template: function ExampleRendererComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExampleRendererComponent_0_Template, 1, 2, undefined, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleRendererComponent_1_Template, 1, 1, undefined, 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableIvy && ctx.componentType && ctx.exampleModuleFactory);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enableIvy && ctx.componentType);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleRendererComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dg-example-renderer, [dgExampleRenderer]',
            templateUrl: './example-renderer.component.html'
          }]
        }], function () {
          return [{
            type: _services_example_loader__WEBPACK_IMPORTED_MODULE_1__["ExampleLoader"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          exampleModuleType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          exampleComponentType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          exampleLoadSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "xzLZ":
    /*!******************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/.docgeni/site/src/app/content/config.ts ***!
      \******************************************************************************************/

    /*! exports provided: config */

    /***/
    function xzLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });

      var config = {
        "title": "Docgeni",
        "description": "为 Angular 组件开发场景而生的文档工具",
        "mode": "full",
        "theme": "default",
        "baseHref": "/",
        "locales": [{
          "key": "en-us",
          "name": "EN"
        }, {
          "key": "zh-cn",
          "name": "中文"
        }],
        "defaultLocale": "zh-cn",
        "logoUrl": "https://cdn.pingcode.com/open-sources/docgeni/logo.png",
        "repoUrl": "https://github.com/docgeni/docgeni",
        "footer": "Open-source MIT Licensed | Copyright © 2020-present Powered by <a href=\"https://pingcode.com\" target=\"_blank\">PingCode</a><br />\n    <div class=\"beian\"><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\" class=\"beian-icp\">京ICP备13017353号-13</a><a target=\"_blank\" href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802034808\" class=\"beian-public-security\"><img src=\"assets/images/obtain-icp.png\"> 京公网安备 11010802034808号 </a></div>"
      };
      /***/
    },

    /***/
    "yzKF":
    /*!**********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/built-in/label/label.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: DocgeniLabelComponent, default */

    /***/
    function yzKF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocgeniLabelComponent", function () {
        return DocgeniLabelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _built_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../built-in-component */
      "6uBU");

      var _c0 = ["*"];

      var DocgeniLabelComponent = /*#__PURE__*/function (_built_in_component__) {
        _inherits(DocgeniLabelComponent, _built_in_component__);

        var _super5 = _createSuper(DocgeniLabelComponent);

        function DocgeniLabelComponent(elementRef) {
          var _this23;

          _classCallCheck(this, DocgeniLabelComponent);

          _this23 = _super5.call(this, elementRef);
          _this23.internalType = 'primary';
          return _this23;
        }

        _createClass(DocgeniLabelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateHostClass(["dg-label-".concat(this.type)]);
          }
        }, {
          key: "type",
          get: function get() {
            return this.internalType;
          },
          set: function set(value) {
            this.internalType = value;
            this.updateHostClass(["dg-label-".concat(this.type)]);
          }
        }]);

        return DocgeniLabelComponent;
      }(_built_in_component__WEBPACK_IMPORTED_MODULE_1__["DocgeniBuiltInComponent"]);

      DocgeniLabelComponent.ɵfac = function DocgeniLabelComponent_Factory(t) {
        return new (t || DocgeniLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      DocgeniLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocgeniLabelComponent,
        selectors: [["label"]],
        hostAttrs: [1, "dg-label"],
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function DocgeniLabelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocgeniLabelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'label',
            templateUrl: './label.component.html',
            host: {
              "class": 'dg-label'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /* harmony default export */


      __webpack_exports__["default"] = {
        selector: 'label',
        component: DocgeniLabelComponent
      };
      /***/
    },

    /***/
    "zVRa":
    /*!*****************************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/shared/pipes/assets-content-path.pipe.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: AssetsContentPathPipe */

    /***/
    function zVRa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsContentPathPipe", function () {
        return AssetsContentPathPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _services_global_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/global-context */
      "gKL3");

      var AssetsContentPathPipe = /*#__PURE__*/function () {
        function AssetsContentPathPipe(globalContext) {
          _classCallCheck(this, AssetsContentPathPipe);

          this.globalContext = globalContext;
        }

        _createClass(AssetsContentPathPipe, [{
          key: "transform",
          value: function transform(path) {
            return this.globalContext.getAssetsContentPath(path);
          }
        }]);

        return AssetsContentPathPipe;
      }();

      AssetsContentPathPipe.ɵfac = function AssetsContentPathPipe_Factory(t) {
        return new (t || AssetsContentPathPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]));
      };

      AssetsContentPathPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dgAssetsContentPath",
        type: AssetsContentPathPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetsContentPathPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dgAssetsContentPath'
          }]
        }], function () {
          return [{
            type: _services_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "za4Q":
    /*!**********************************************************************************************************!*\
      !*** /Users/haifeng/IT/01_Study/docgeni/docgeni/packages/template/src/built-in/alert/alert.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: DocgeniAlertComponent, default */

    /***/
    function za4Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocgeniAlertComponent", function () {
        return DocgeniAlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "3TJL");
      /* harmony import */


      var _built_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../built-in-component */
      "6uBU");

      var _c0 = ["*"];

      var DocgeniAlertComponent = /*#__PURE__*/function (_built_in_component__2) {
        _inherits(DocgeniAlertComponent, _built_in_component__2);

        var _super6 = _createSuper(DocgeniAlertComponent);

        function DocgeniAlertComponent(elementRef) {
          var _this24;

          _classCallCheck(this, DocgeniAlertComponent);

          _this24 = _super6.call(this, elementRef);
          _this24.internalType = 'info';
          return _this24;
        }

        _createClass(DocgeniAlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateHostClass(["dg-alert-".concat(this.type)]);
          }
        }, {
          key: "type",
          get: function get() {
            return this.internalType;
          },
          set: function set(value) {
            this.internalType = value;
            this.updateHostClass(["dg-alert-".concat(this.type)]);
          }
        }]);

        return DocgeniAlertComponent;
      }(_built_in_component__WEBPACK_IMPORTED_MODULE_1__["DocgeniBuiltInComponent"]);

      DocgeniAlertComponent.ɵfac = function DocgeniAlertComponent_Factory(t) {
        return new (t || DocgeniAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      DocgeniAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocgeniAlertComponent,
        selectors: [["alert"]],
        hostAttrs: [1, "dg-alert"],
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function DocgeniAlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocgeniAlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'alert',
            templateUrl: './alert.component.html',
            host: {
              "class": 'dg-alert'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /* harmony default export */


      __webpack_exports__["default"] = {
        selector: 'alert',
        component: DocgeniAlertComponent
      };
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map