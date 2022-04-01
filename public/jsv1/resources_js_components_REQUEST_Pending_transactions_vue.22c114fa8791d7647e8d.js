"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_REQUEST_Pending_transactions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "viewTransactions",
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REQUEST_PROCESS_TRANSACTION", "REQUEST_PROCESS_PRODUCT_OPTION", "REQUEST_PROCESS_CHANGE_PAYMENT_OPTION"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["REQUEST_OPEN_TRANSACTION"])), {}, {
    proceed: function proceed(e) {
      this.REQUEST_PROCESS_TRANSACTION({
        filter: this.request.transaction,
        status: e
      });
    },
    proceedProductOption: function proceedProductOption(e) {
      this.REQUEST_PROCESS_PRODUCT_OPTION({
        filter: this.request.transaction,
        status: e
      });
    },
    proceedChangePayment: function proceedChangePayment(e) {
      this.REQUEST_PROCESS_CHANGE_PAYMENT_OPTION({
        filter: this.request.transaction,
        status: e
      });
    },
    close: function close() {
      this.REQUEST_OPEN_TRANSACTION();
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["request"]))
});

/***/ }),

/***/ "./resources/js/components/REQUEST/Pending/transactions.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/REQUEST/Pending/transactions.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transactions_vue_vue_type_template_id_238c8dd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.vue?vue&type=template&id=238c8dd8& */ "./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=template&id=238c8dd8&");
/* harmony import */ var _transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.vue?vue&type=script&lang=js& */ "./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _transactions_vue_vue_type_template_id_238c8dd8___WEBPACK_IMPORTED_MODULE_0__.render,
  _transactions_vue_vue_type_template_id_238c8dd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/REQUEST/Pending/transactions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./transactions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=template&id=238c8dd8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=template&id=238c8dd8& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_transactions_vue_vue_type_template_id_238c8dd8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_transactions_vue_vue_type_template_id_238c8dd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_transactions_vue_vue_type_template_id_238c8dd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./transactions.vue?vue&type=template&id=238c8dd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=template&id=238c8dd8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=template&id=238c8dd8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REQUEST/Pending/transactions.vue?vue&type=template&id=238c8dd8& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "600", persistent: "" },
      model: {
        value: _vm.request.openTransaction,
        callback: function($$v) {
          _vm.$set(_vm.request, "openTransaction", $$v)
        },
        expression: "request.openTransaction"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "", dark: "", color: "blue accent-2" } },
            [
              _c("v-toolbar-title", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm._f("toUpper")(_vm.request.transaction.type)) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-icon", { on: { click: _vm.close } }, [
                _vm._v("\n                mdi-close\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.request.transaction.type === "complete transaction" ||
          _vm.request.transaction.type === "cancelled transaction" ||
          _vm.request.transaction.type === "refund transaction"
            ? [
                _c("v-card-text", [
                  _c(
                    "div",
                    [
                      _c("p", { staticStyle: { "text-align": "center" } }, [
                        _vm._v(
                          "\n                        Invoice #:  " +
                            _vm._s(_vm.request.transaction.item.id) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", { staticStyle: { "text-align": "center" } }, [
                        _vm._v(
                          "\n                        Date Purchased: " +
                            _vm._s(
                              _vm._f("dateAndTime")(
                                _vm.request.transaction.item.created_at
                              )
                            ) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-simple-table", {
                        staticClass: "overflow-x-auto",
                        attrs: {
                          height: "450",
                          width: "100%",
                          "fixed-header": ""
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function() {
                                return [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { staticClass: "text-left" }),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "\n                                    Total\n                                "
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(
                                      _vm.request.transaction.item.item,
                                      function(cart, index) {
                                        return _c("tr", { key: index }, [
                                          _c("td", [
                                            _c(
                                              "span",
                                              { staticClass: "text-caption" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("toUpper")(
                                                      cart.item.productName
                                                    )
                                                  ) + " - "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-caption font-weight-thin"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toUpper")(
                                                          cart.item.pdoName
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "text-caption" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("toUpper")(cart.type)
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "text-caption",
                                                attrs: { for: "quantity" }
                                              },
                                              [
                                                _vm._v(
                                                  "Qty: " +
                                                    _vm._s(cart.item.quantity)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            cart.type == "Lessons"
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "text-caption"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toUpper")(
                                                          cart.item.student
                                                            .firstName
                                                        )
                                                      ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm._f("toUpper")(
                                                            cart.item.student
                                                              .familyName
                                                          )
                                                        )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "red--text text-right font-weight-bold"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("currency")(
                                                      cart.item.total_price
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ])
                                        ])
                                      }
                                    ),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c("tfoot", [
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "p",
                                          {
                                            staticClass: "text-left black--text"
                                          },
                                          [
                                            _c("span", [
                                              _vm._v("Subtotal "),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v("Tax "),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _vm.request.transaction.item.total
                                              .disc > 0
                                              ? _c("span", [
                                                  _vm._v("Discount "),
                                                  _c("br")
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("span", [_vm._v("Total")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "black--text text-right font-weight-bold"
                                          },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.request.transaction.item
                                                      .total.excl
                                                  )
                                                ) + " "
                                              ),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.request.transaction.item
                                                      .total.tax
                                                  )
                                                ) + " "
                                              ),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _vm.request.transaction.item.total
                                              .disc > 0
                                              ? _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency")(
                                                        _vm.request.transaction
                                                          .item.total.disc
                                                      )
                                                    ) + " "
                                                  ),
                                                  _c("br")
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.request.transaction.item
                                                      .total.total
                                                  )
                                                ) + " "
                                              ),
                                              _c("br")
                                            ])
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _vm._v(
                                          "\n                                    Comment: " +
                                            _vm._s(
                                              _vm.request.transaction.comment
                                            ) +
                                            "\n                                "
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          false,
                          1560290551
                        )
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "text-none success",
                        attrs: { loading: _vm.request.loading },
                        on: {
                          click: function($event) {
                            return _vm.proceed("Completed")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Proceed to " +
                            _vm._s(
                              _vm.request.transaction.type ===
                                "complete transaction"
                                ? "Complete"
                                : _vm.request.transaction.type ===
                                  "cancelled transaction"
                                ? "Cancel"
                                : "Refund"
                            ) +
                            " transaction\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "text-none danger",
                        attrs: { loading: _vm.request.loading },
                        on: {
                          click: function($event) {
                            return _vm.proceed("Cancelled")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Decline request\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            : _vm.request.transaction.type === "add quantity" ||
              _vm.request.transaction.type === "deduct quantity" ||
              _vm.request.transaction.type === "amend price"
            ? [
                _c("v-card-text", [
                  _c("p", { staticClass: "text-h6" }, [
                    _vm._v(
                      "Product: " +
                        _vm._s(_vm.request.transaction.item.product.name) +
                        " - " +
                        _vm._s(_vm.request.transaction.item.name)
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-h6" }, [
                    _vm._v(
                      _vm._s(
                        _vm.request.transaction.type === "amend price"
                          ? "Price"
                          : "Quantity"
                      ) +
                        " : " +
                        _vm._s(_vm.request.transaction.item.value)
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-h6" }, [
                    _vm._v(
                      "Comment: " + _vm._s(_vm.request.transaction.comment)
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "text-none success",
                        attrs: { loading: _vm.request.loading },
                        on: {
                          click: function($event) {
                            return _vm.proceedProductOption("Completed")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Proceed to update\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "text-none danger",
                        attrs: { loading: _vm.request.loading },
                        on: {
                          click: function($event) {
                            return _vm.proceedProductOption("Cancelled")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Decline request\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            : [
                _c("v-card-text", [
                  _c(
                    "div",
                    [
                      _c("p", { staticStyle: { "text-align": "center" } }, [
                        _vm._v(
                          "\n                        Invoice #:  " +
                            _vm._s(_vm.request.transaction.item.id) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", { staticStyle: { "text-align": "center" } }, [
                        _vm._v(
                          "\n                        Date Purchased: " +
                            _vm._s(
                              _vm._f("dateAndTime")(
                                _vm.request.transaction.item.created_at
                              )
                            ) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-simple-table", {
                        staticClass: "overflow-x-auto",
                        attrs: {
                          height: "450",
                          width: "100%",
                          "fixed-header": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-left" }),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-right" }, [
                                      _vm._v(
                                        "\n                                    Total\n                                "
                                      )
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(
                                    _vm.request.transaction.item.item,
                                    function(cart, index) {
                                      return _c("tr", { key: index }, [
                                        _c("td", [
                                          _c(
                                            "span",
                                            { staticClass: "text-caption" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("toUpper")(
                                                    cart.item.productName
                                                  )
                                                ) + " - "
                                              ),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-caption font-weight-thin"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("toUpper")(
                                                        cart.item.pdoName
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "text-caption" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("toUpper")(cart.type)
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass: "text-caption",
                                              attrs: { for: "quantity" }
                                            },
                                            [
                                              _vm._v(
                                                "Qty: " +
                                                  _vm._s(cart.item.quantity)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          cart.type == "Lessons"
                                            ? _c(
                                                "span",
                                                { staticClass: "text-caption" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("toUpper")(
                                                        cart.item.student
                                                          .firstName
                                                      )
                                                    ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm._f("toUpper")(
                                                          cart.item.student
                                                            .familyName
                                                        )
                                                      )
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "red--text text-right font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    cart.item.total_price
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "tfoot",
                                  [
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "p",
                                          {
                                            staticClass: "text-left black--text"
                                          },
                                          [
                                            _c("span", [
                                              _vm._v("Subtotal "),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v("Tax "),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _vm.request.transaction.item.total
                                              .disc > 0
                                              ? _c("span", [
                                                  _vm._v("Discount "),
                                                  _c("br")
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("span", [_vm._v("Total")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "black--text text-right font-weight-bold"
                                          },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.request.transaction.item
                                                      .total.excl
                                                  )
                                                ) + " "
                                              ),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.request.transaction.item
                                                      .total.tax
                                                  )
                                                ) + " "
                                              ),
                                              _c("br")
                                            ]),
                                            _vm._v(" "),
                                            _vm.request.transaction.item.total
                                              .disc > 0
                                              ? _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency")(
                                                        _vm.request.transaction
                                                          .item.total.disc
                                                      )
                                                    ) + " "
                                                  ),
                                                  _c("br")
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.request.transaction.item
                                                      .total.total
                                                  )
                                                ) + " "
                                              ),
                                              _c("br")
                                            ])
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _vm._v(
                                          "\n                                    Comment: " +
                                            _vm._s(
                                              _vm.request.transaction.comment
                                            ) +
                                            "\n                                "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _vm._v(
                                          "\n                                    Change payment to:\n                                "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(
                                      _vm.request.transaction.item.payments,
                                      function(pay, index) {
                                        return _c("tr", { key: index }, [
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-left black--text"
                                            },
                                            [
                                              _vm._v(
                                                " " + _vm._s(pay.payment) + " "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "black--text text-right font-weight-bold"
                                            },
                                            [_vm._v(" " + _vm._s(pay.value))]
                                          )
                                        ])
                                      }
                                    )
                                  ],
                                  2
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
                ]),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "text-none success",
                        attrs: { loading: _vm.request.loading },
                        on: {
                          click: function($event) {
                            return _vm.proceedChangePayment("Completed")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Proceed\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "text-none danger",
                        attrs: { loading: _vm.request.loading },
                        on: {
                          click: function($event) {
                            return _vm.proceedChangePayment("Cancelled")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Decline request\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);