"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ACCOUNTS_transactions_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'accountTransactions',
  created: function created() {
    var _this = this;

    var page = parseInt(this.$route.query.page);
    this.page = page;
    setTimeout(function () {
      _this.paginate(page);
    }, 1000);
  },
  data: function data() {
    return {
      page: 1,
      openTransactionItem: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SALES", "SALE", "CHECKOUT_PAYMENT_UPDATE"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["SALE_M"])), {}, {
    viewHistory: function viewHistory(e) {
      this.user_id = this.registration.form.id;
      this.paginate(1);
    },
    paginate: function paginate(e) {
      var _this2 = this;

      var page = Object.keys(this.$route.query).length > 0 ? e : 1;
      this.$router.replace({
        query: {
          page: page
        }
      })["catch"](function (error) {
        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation to current location')) {
          console.log(error);
        }
      });
      this.SALES({
        page: e,
        search: this.registration.form.id,
        type: 'User ID',
        perPage: 20
      }).then(function (result) {
        _this2.openTransaction = true;
      });
    },
    checkSaleById: function checkSaleById(e) {
      var _this3 = this;

      this.SALE({
        id: e
      }).then(function (result) {
        _this3.openTransactionItem = true;
      });
    },
    closeTransactionItem: function closeTransactionItem() {
      this.SALE_M({
        mom: {},
        payment: [],
        item: [],
        total: {},
        address: null,
        notes: null,
        telr: null,
        pay: []
      });
      this.openTransactionItem = false;
    },
    paynow: function paynow(e) {
      var _this4 = this;

      if (e.status == 'Pending') {
        this.SALE({
          id: e.id
        }).then(function (result) {
          _this4.CHECKOUT_PAYMENT_UPDATE({
            id: _this4.sales.sale.id,
            item: _this4.sales.sale.item,
            payment: _this4.sales.sale.payment,
            mom: _this4.sales.sale.mom,
            link: true,
            notes: _this4.sales.sale.notes,
            total: _this4.sales.sale.total,
            address: _this4.registration.form.address
          }).then(function (result) {
            location.href = _this4.sales.sale.link;
          });
        });
      }
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["registration", "sales"]))
});

/***/ }),

/***/ "./resources/js/components/ACCOUNTS/transactions/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ACCOUNTS/transactions/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_0fb514e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0fb514e6& */ "./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=template&id=0fb514e6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0fb514e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_0fb514e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ACCOUNTS/transactions/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=template&id=0fb514e6&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=template&id=0fb514e6& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0fb514e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0fb514e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0fb514e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=0fb514e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=template&id=0fb514e6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=template&id=0fb514e6&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ACCOUNTS/transactions/index.vue?vue&type=template&id=0fb514e6& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-col",
        { attrs: { cols: "12", md: "10" } },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
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
                                    "\n                            Transaction#\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                            Total\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                            Date\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.sales.sales.data, function(
                                sale,
                                index
                              ) {
                                return sale.status != "Cancelled"
                                  ? _c("tr", { key: index }, [
                                      _c("td", [_vm._v(_vm._s(sale.id))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(sale.total))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("dateAndTime")(
                                              sale.purchase_date
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "text-none",
                                              attrs: {
                                                outlined: "",
                                                color:
                                                  "" +
                                                  (sale.status == "Completed"
                                                    ? "#00cc00"
                                                    : sale.status == "Cancelled"
                                                    ? "#ffff00"
                                                    : sale.status == "Refund"
                                                    ? "#c2c2a3"
                                                    : "#ff0000")
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.paynow(sale)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(sale.status) +
                                                  "\n                            "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-icon",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.checkSaleById(
                                                    sale.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                mdi-magnify\n                            "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  : _vm._e()
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
          ),
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
          ),
          _vm._v(" "),
          _c(
            "v-bottom-sheet",
            {
              attrs: { "hide-overlay": "", scrollable: "" },
              on: { "click:outside": _vm.closeTransactionItem },
              model: {
                value: _vm.openTransactionItem,
                callback: function($$v) {
                  _vm.openTransactionItem = $$v
                },
                expression: "openTransactionItem"
              }
            },
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
                            _c(
                              "th",
                              {
                                staticClass: "text-left",
                                attrs: { width: "60%" }
                              },
                              [
                                _c(
                                  "p",
                                  { staticClass: "font-weight-bold red--text" },
                                  [
                                    _vm._v(
                                      "Transacction# " +
                                        _vm._s(_vm.sales.sale.id) +
                                        " - " +
                                        _vm._s(_vm.sales.sale.status)
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticClass: "text-right",
                                attrs: { width: "40%" }
                              },
                              [
                                _vm._v(
                                  "\n                            Total\n                        "
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.sales.sale.item, function(cart, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-subtitle-1 font-weight-bold black--text"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("toUpper")(cart.item.productName)
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
                                            _vm._f("toUpper")(cart.item.pdoName)
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(_vm._s(_vm._f("toUpper")(cart.type)))
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "text-caption",
                                    attrs: { for: "quantity" }
                                  },
                                  [_vm._v("Qty: " + _vm._s(cart.item.quantity))]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-caption font-weight-black"
                                  },
                                  [
                                    _vm._v(
                                      " Student: " +
                                        _vm._s(
                                          _vm._f("toUpper")(
                                            cart.item.student.firstName
                                          )
                                        ) +
                                        " " +
                                        _vm._s(
                                          _vm._f("toUpper")(
                                            cart.item.student.familyName
                                          )
                                        ) +
                                        " "
                                    )
                                  ]
                                )
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