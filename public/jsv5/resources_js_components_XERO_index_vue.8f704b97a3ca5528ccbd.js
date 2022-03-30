"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_XERO_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/XERO/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/XERO/index.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'xero',
  created: function created() {
    var _this = this;

    this.XERO_GET();
    setTimeout(function () {
      _this.SETUP_XERO_DETAILS_SAVE({
        code: _this.$route.query.code,
        scope: _this.$route.query.scope,
        session_state: _this.$route.query.session_state,
        state: _this.$route.query.state
      }).then(function (result) {})["catch"](function (err) {
        _this.XERO_REFRESH_TOKEN({
          token: _this.xero.xero.token.refresh_token
        });
      });
    }, 2000);
  },
  watch: {
    timerCount: {
      handler: function handler(value) {
        var _this2 = this;

        if (value > 0) {
          setTimeout(function () {
            _this2.timerCount--;
          }, 60000);
        }
      },
      immediate: true
    }
  },
  data: function data() {
    return {
      timerCount: 30,
      filter: {
        dates: []
      },
      loading: false,
      imporLoading: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SETUP_XERO_DETAILS_SAVE", "XERO_REFRESH_TOKEN", "XERO_GET", "XERO_FILTER_RECORD", "XERO_IMPORT", "XERO_LOAD_INVOICES"])), {}, {
    refreshToken: function refreshToken() {
      var _this3 = this;

      this.XERO_REFRESH_TOKEN({
        token: this.xero.xero.token.refresh_token
      }).then(function (result) {
        _this3.timerCount = 30;
      });
    },
    filterRecord: function filterRecord() {
      var _this4 = this;

      this.loading = true;
      this.XERO_FILTER_RECORD(this.filter).then(function (result) {
        _this4.loading = false;
      });
    },
    importToXero: function importToXero() {
      var _this5 = this;

      this.imporLoading = true;
      this.XERO_IMPORT({
        items: this.transactions,
        accessToken: this.xero.xero.token.access_token,
        tenantId: this.xero.xero.tenant[0].tenantId
      }).then(function (result) {
        _this5.imporLoading = false;
      });
    },
    loadInvoice: function loadInvoice() {
      this.XERO_LOAD_INVOICES({
        accessToken: this.xero.xero.token.access_token,
        tenantId: this.xero.xero.tenant[0].tenantId
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["xero"])), {}, {
    dateRangeText: function dateRangeText() {
      return this.filter.dates.join(' ~ ');
    },
    transactions: function transactions() {
      var transaction = this.xero.items;
      var arr = [];
      transaction.forEach(function (element) {
        arr.push({
          'customer': JSON.parse(element.customer),
          'datePurchase': element.datePurchase,
          'payment': JSON.parse(element.payment),
          'status': element.status,
          'total': JSON.parse(element.total),
          'transactionNumber': element.transactionNumber,
          'carts': element.carts
        });
      });
      return arr;
    }
  })
});

/***/ }),

/***/ "./resources/js/components/XERO/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/XERO/index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_70857310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=70857310& */ "./resources/js/components/XERO/index.vue?vue&type=template&id=70857310&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/XERO/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_70857310___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_70857310___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/XERO/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/XERO/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/XERO/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/XERO/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/XERO/index.vue?vue&type=template&id=70857310&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/XERO/index.vue?vue&type=template&id=70857310& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70857310___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70857310___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70857310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=70857310& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/XERO/index.vue?vue&type=template&id=70857310&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/XERO/index.vue?vue&type=template&id=70857310&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/XERO/index.vue?vue&type=template&id=70857310& ***!
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
    "div",
    [
      _c(
        "v-app-bar",
        [
          _c(
            "v-tooltip",
            {
              attrs: { bottom: "" },
              scopedSlots: _vm._u([
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
                            { attrs: { icon: "", to: { name: "Home" } } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "primary", dark: "" } },
                            [
                              _vm._v(
                                "\n                    mdi-home\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [_vm._v(" "), _c("span", [_vm._v("Go Home")])]
          ),
          _vm._v(" "),
          _c(
            "v-tooltip",
            {
              attrs: { bottom: "" },
              scopedSlots: _vm._u([
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
                              on: { click: _vm.refreshToken }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "primary", dark: "" } },
                            [
                              _vm._v(
                                "\n                    mdi-cloud-refresh\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [_vm._v(" "), _c("span", [_vm._v("Refresh token")])]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(
            "\n        Token before expires: " +
              _vm._s(_vm.timerCount > 0 ? _vm.timerCount : 0) +
              " " +
              _vm._s(_vm.timerCount > 1 ? "mins" : "min") +
              "\n\n    "
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "start", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c("v-date-picker", {
                        attrs: { "full-width": "", range: "" },
                        model: {
                          value: _vm.filter.dates,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "dates", $$v)
                          },
                          expression: "filter.dates"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-right mt-6" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-none success",
                              attrs: { loading: _vm.loading },
                              on: { click: _vm.filterRecord }
                            },
                            [
                              _vm._v(
                                "\n                            Filter Record\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c("v-simple-table", {
                        attrs: { id: "transaction" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c(
                                      "th",
                                      {
                                        staticClass: "text-center",
                                        attrs: { colspan: "9" }
                                      },
                                      [_c("h1", [_vm._v("Import to Xero")])]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "th",
                                      {
                                        staticClass: "text-center",
                                        attrs: { colspan: "9" }
                                      },
                                      [
                                        _c("h4", [
                                          _vm._v(
                                            " " +
                                              _vm._s(_vm.dateRangeText) +
                                              " "
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("th", { attrs: { colspan: "9" } }, [
                                      _c(
                                        "div",
                                        { staticClass: "text-right" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "text-none success",
                                              attrs: {
                                                loading: _vm.imporLoading,
                                                disabled:
                                                  _vm.xero.items.length > 0
                                                    ? false
                                                    : true
                                              },
                                              on: { click: _vm.importToXero }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-file-import")
                                              ]),
                                              _vm._v(
                                                "\n                                                Import\n                                            "
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Date\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Transaction\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Status\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Total\n                                "
                                      )
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.transactions, function(
                                    trans,
                                    index
                                  ) {
                                    return _c("tr", { key: index }, [
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("dateAndTime")(
                                              trans.datePurchase
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(_vm._s(trans.transactionNumber))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(" " + _vm._s(trans.status) + " ")
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(trans.total)
                                          )
                                        )
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