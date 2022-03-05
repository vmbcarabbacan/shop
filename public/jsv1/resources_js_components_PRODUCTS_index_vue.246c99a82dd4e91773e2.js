"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PRODUCTS_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "authProducts",
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (v) {
      v.redirect();
    });
  },
  created: function created() {
    this.PRODUCT_EXPORT_UNIFORMS();
  },
  data: function data() {
    return {
      drawer: this.$vuetify.breakpoint.mdAndUp ? true : false,
      mini: false,
      access_export: ["Admin", "Reception", "Manager"],
      access_import: ["Admin", "Manager"],
      items: [{
        title: "View",
        icon: "mdi-store",
        path: {
          name: "ProductView"
        },
        access: ["Admin", "Reception", "Manager"]
      }, {
        title: "Add",
        icon: "mdi-plus-circle",
        path: {
          name: "ProductAdd"
        },
        access: ["Admin", "Reception", "Manager"]
      }, {
        title: "Category",
        icon: "mdi-tag-multiple",
        path: {
          name: 'ProductCategories'
        },
        access: ["Admin", "Reception", "Manager"]
      }, {
        title: "Images",
        icon: "mdi-folder-multiple-image",
        path: {
          name: 'ProductImages'
        },
        access: ["Admin", "Reception", "Manager"]
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["LOGOUT", "PRODUCT_EXPORT_UNIFORMS"])), {}, {
    logout: function logout() {
      this.LOGOUT();
    },
    redirect: function redirect() {
      var _this = this;

      setTimeout(function () {
        _this.in_array(_this.registration.form.role, ['Admin', 'Reception', 'Manager']) ? '' : _this.$router.push({
          name: "Home"
        });
      }, 1000);
    },
    exportUniform: function exportUniform() {
      this.$excel("export", "Uniform Stocks");
    },
    importUniform: function importUniform() {
      console.log('import nga gago');
    },
    in_array: function in_array(value, arr) {
      var status = false;

      for (var i = 0; i < arr.length; i++) {
        var name = arr[i];

        if (name == value) {
          status = true;
          break;
        }
      }

      return status;
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["registration", "product"]))
});

/***/ }),

/***/ "./resources/js/components/PRODUCTS/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/PRODUCTS/index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_57e137f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57e137f2& */ "./resources/js/components/PRODUCTS/index.vue?vue&type=template&id=57e137f2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/PRODUCTS/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57e137f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_57e137f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PRODUCTS/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PRODUCTS/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PRODUCTS/index.vue?vue&type=template&id=57e137f2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/index.vue?vue&type=template&id=57e137f2& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57e137f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57e137f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57e137f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=57e137f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/index.vue?vue&type=template&id=57e137f2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/index.vue?vue&type=template&id=57e137f2&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/index.vue?vue&type=template&id=57e137f2& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.$vuetify.breakpoint.mdAndDown
        ? _c(
            "v-app-bar",
            { attrs: { dark: "", color: "blue darken-3" } },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    _vm.drawer = !_vm.drawer
                  }
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          attrs: { "mini-variant": _vm.mini, app: "" },
          scopedSlots: _vm._u([
            {
              key: "append",
              fn: function() {
                return [
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item",
                        { attrs: { to: "/" } },
                        [
                          _c(
                            "v-list-item-action",
                            [_c("v-icon", [_vm._v("mdi-home")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [_c("v-list-item-title", [_vm._v(" Home ")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.logout } },
                        [
                          _c(
                            "v-list-item-action",
                            [_c("v-icon", [_vm._v("mdi-logout")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [_c("v-list-item-title", [_vm._v(" Logout ")])],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list-item",
            { staticClass: "px-2" },
            [
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    { staticClass: "title" },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(!_vm.mini ? "Products" : "") +
                          "\n                    "
                      ),
                      _vm.mini
                        ? [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    _vm.mini = !_vm.mini
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-chevron-right")])],
                              1
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.mini = !_vm.mini
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _vm._l(_vm.items, function(item) {
                return [
                  _vm.in_array(_vm.registration.form.role, item.access)
                    ? [
                        _c(
                          "v-list-item",
                          { key: item.title, attrs: { to: item.path } },
                          [
                            _c(
                              "v-list-item-action",
                              [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", [
                                  _vm._v(_vm._s(item.title))
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    : _vm._e()
                ]
              }),
              _vm._v(" "),
              _vm.in_array(_vm.registration.form.role, _vm.access_export)
                ? _c(
                    "v-list-item",
                    { on: { click: _vm.exportUniform } },
                    [
                      _c(
                        "v-list-item-action",
                        [_c("v-icon", [_vm._v("mdi-database-export")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("Export Uniforms")])],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.in_array(_vm.registration.form.role, _vm.access_import)
                ? _c(
                    "v-list-item",
                    { attrs: { to: { name: "ProductImport" } } },
                    [
                      _c(
                        "v-list-item-action",
                        [_c("v-icon", [_vm._v("mdi-database-import")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("Import Uniforms")])],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.in_array(_vm.registration.form.role, _vm.access_export)
                ? _c(
                    "v-list-item",
                    { attrs: { to: { name: "ProductStarted" } } },
                    [
                      _c(
                        "v-list-item-action",
                        [_c("v-icon", [_vm._v("mdi-information-outline")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("How it works")])],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c("router-view"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-none d-print-block", attrs: { id: "export" } },
            [
              _c("v-simple-table", {
                attrs: { width: "100%", "fixed-header": "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                ID \n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                Product\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                Option\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                Price\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                Available stock(s) in POS\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                Available stock(s) in Actual\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                New Stock\n                            "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.product.export, function(product, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(_vm._s(product.id) + " ")
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(
                                    _vm._s(_vm._f("toUpper")(product.product)) +
                                      " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(
                                    _vm._s(_vm._f("toUpper")(product.option)) +
                                      " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(_vm._s(product.price) + " ")
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(
                                    _vm._s(product.availableStocksInPOS) + " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(
                                    _vm._s(product.availableStocksInActual) +
                                      " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(_vm._s(product.newStocks) + " ")
                                ]),
                                _vm._v(" "),
                                _c("br")
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);