"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_POS_search_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "posSearch",
  data: function data() {
    return {
      search: null,
      page: 1,
      perPage: 20,
      type: 'Sale ID',
      types: ["Sale ID", "Customer"],
      openBar: false
    };
  },
  created: function created() {
    this.paginate(this.page);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SALES", "SALE", "SALE_UPDATE"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["POS_SEARCH_BY_SALE_ID", "POS_REQUEST_AMEND_SALE", "POS_AMENDED_ID"])), {}, {
    paginate: function paginate(e) {
      this.page = e;
      this.SALES({
        page: e,
        search: this.search,
        type: this.type,
        perPage: this.perPage
      });
    },
    checkSaleCompleted: function checkSaleCompleted(e) {
      var _this = this;

      this.SALE_UPDATE({
        id: e,
        status: 'Completed'
      }).then(function (result) {
        _this.paginate(_this.page);

        _this.openBar = true;
      });
    },
    requestUpdate: function requestUpdate(e) {
      this.POS_AMENDED_ID(e);
      this.POS_REQUEST_AMEND_SALE();
    },
    searchSchedule: function searchSchedule() {
      this.paginate(1);
    },
    checkSaleById: function checkSaleById(e) {
      this.$router.push({
        name: 'POSFilter',
        params: {
          id: e
        }
      });
      this.SALE({
        id: e
      });
      this.close();
    },
    close: function close() {
      this.POS_SEARCH_BY_SALE_ID();
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["pos", "sales", "registration"]))
});

/***/ }),

/***/ "./resources/js/components/POS/search.vue":
/*!************************************************!*\
  !*** ./resources/js/components/POS/search.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_vue_vue_type_template_id_bd54b624___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=bd54b624& */ "./resources/js/components/POS/search.vue?vue&type=template&id=bd54b624&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./resources/js/components/POS/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_bd54b624___WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_bd54b624___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/POS/search.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/POS/search.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/POS/search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/search.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/POS/search.vue?vue&type=template&id=bd54b624&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/POS/search.vue?vue&type=template&id=bd54b624& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_bd54b624___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_bd54b624___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_bd54b624___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=template&id=bd54b624& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/search.vue?vue&type=template&id=bd54b624&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/search.vue?vue&type=template&id=bd54b624&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/search.vue?vue&type=template&id=bd54b624& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { width: "1200" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.pos.isSearchSale,
        callback: function($$v) {
          _vm.$set(_vm.pos, "isSearchSale", $$v)
        },
        expression: "pos.isSearchSale"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { staticClass: "primary text-none", attrs: { flat: "", dark: "" } },
            [
              _c("v-toolbar-title", [
                _vm._v("\n                View Sales\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "mt-6" },
            [
              _c("v-text-field", {
                attrs: {
                  solo: "",
                  clearable: "",
                  label:
                    "search " + (_vm.type == "Sale ID" ? "sale id" : "customer")
                },
                on: {
                  keypress: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.searchSchedule.apply(null, arguments)
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "append",
                    fn: function() {
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: { click: _vm.searchSchedule }
                          },
                          [
                            _c("v-icon", { attrs: { left: "" } }, [
                              _vm._v(
                                "\n                        mdi-magnify\n                        "
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "prepend-inner",
                    fn: function() {
                      return [
                        _c("v-combobox", {
                          staticStyle: { "border-right": "solid #000" },
                          attrs: {
                            shaped: "",
                            solo: "",
                            flat: "",
                            items: _vm.types,
                            label: "Select Type",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.type,
                            callback: function($$v) {
                              _vm.type = $$v
                            },
                            expression: "type"
                          }
                        })
                      ]
                    },
                    proxy: true
                  }
                ]),
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              }),
              _vm._v(" "),
              _c("v-simple-table", {
                attrs: { "fixed-header": "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                        Transaction\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                        Customer\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                        Total\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                        Status\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                        Date\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.sales.sales.data, function(sale, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(sale.id))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm._f("toUpper")(sale.name)))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.total))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.status))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("dateAndTime")(sale.purchase_date)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _vm.registration.form.role == "Admin"
                                    ? [
                                        _c(
                                          "v-tooltip",
                                          {
                                            attrs: { bottom: "" },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    var attrs = ref.attrs
                                                    return [
                                                      sale.status == "Pending"
                                                        ? _c(
                                                            "v-btn",
                                                            _vm._g(
                                                              _vm._b(
                                                                {
                                                                  attrs: {
                                                                    icon: "",
                                                                    color:
                                                                      "green"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.checkSaleCompleted(
                                                                        sale.id
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                "v-btn",
                                                                attrs,
                                                                false
                                                              ),
                                                              on
                                                            ),
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "\n                                            mdi-cart-check\n                                        "
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              true
                                            )
                                          },
                                          [
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v("Complete transaction")
                                            ])
                                          ]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { bottom: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.checkSaleById(
                                                              sale.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      "v-btn",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(
                                                        "\n                                        mdi-magnify\n                                    "
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v("View Transaction Details")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { bottom: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.requestUpdate(
                                                              sale.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      "v-btn",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(
                                                        "\n                                        mdi-calendar-question\n                                    "
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Request to amend")])
                                    ]
                                  )
                                ],
                                2
                              )
                            ])
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c("v-pagination", {
                    attrs: { length: _vm.sales.sales.last_page, circle: "" },
                    on: { input: _vm.paginate },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: {
                color: "deep-purple accent-4",
                top: "",
                right: "",
                absolute: ""
              },
              model: {
                value: _vm.openBar,
                callback: function($$v) {
                  _vm.openBar = $$v
                },
                expression: "openBar"
              }
            },
            [_vm._v("\n            Succesful!\n        ")]
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