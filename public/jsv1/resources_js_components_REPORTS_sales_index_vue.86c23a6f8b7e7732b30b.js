"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_REPORTS_sales_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/sales/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/sales/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SALES",
  created: function created() {
    this.REPORT_SALES([]);
  },
  data: function data() {
    return {
      filter: {
        dates: [],
        receptionIds: []
      },
      items: [{
        title: 'All Report',
        id: 'export'
      } // { title: 'Transaction Report', id: 'transaction' },
      // { title: 'Product Report', id: 'product' },
      // { title: 'Payment Report', id: 'payment' },
      ],
      types: ["Uniforms", "Lessons", "Camps", "Others"],
      type: [],
      loading: false,
      open: false,
      prod: {}
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REPORT_FILTER_SALES", "REPORT_SALES_RECEIPTS"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["REPORT_SALES", "REPORT_SALE_RECEIPTS"])), {}, {
    filterRecord: function filterRecord() {
      var _this = this;

      this.loading = true;
      var sortedDates = this.filter.dates.sort(function (a, b) {
        return new Date(a) - new Date(b);
      });
      this.REPORT_FILTER_SALES({
        dates: sortedDates,
        types: this.type
      }).then(function (result) {
        _this.loading = false;
      });
    },
    viewReceipt: function viewReceipt(e) {
      this.open = true;
      this.prod = e;
      this.REPORT_SALES_RECEIPTS({
        dates: this.filter.dates,
        productId: e.productId
      });
    },
    closeDialog: function closeDialog() {
      this.open = false;
      this.REPORT_SALE_RECEIPTS([]);
    },
    exportExcel: function exportExcel() {
      this.$excel("export", "Class Information");
    },
    printReport: function printReport(item) {
      this.$print(item);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["reports"])), {}, {
    dateRangeText: function dateRangeText() {
      return this.filter.dates.join(' ~ ');
    },
    transactions: function transactions() {
      var transaction = this.reports.sales;
      var arr = [];
      transaction.forEach(function (element) {
        arr.push({
          'customer': JSON.parse(element.customer),
          'datePurchase': element.datePurchase,
          'item': JSON.parse(element.item),
          'payment': JSON.parse(element.payment),
          'tentered': JSON.parse(element.tentered),
          'total': JSON.parse(element.total),
          'transactionNumber': element.transactionNumber
        });
      });
      return arr;
    },
    receipts: function receipts() {
      var transaction = this.reports.receipts;
      var arr = [];
      transaction.forEach(function (element) {
        arr.push({
          'customer': JSON.parse(element.customer),
          'datePurchase': element.datePurchase,
          'item': JSON.parse(element.item),
          'payment': JSON.parse(element.payment),
          'tentered': JSON.parse(element.tentered),
          'total': JSON.parse(element.total),
          'transactionNumber': element.transactionNumber
        });
      });
      return arr;
    },
    products: function products() {
      var arr = [];
      this.transactions.forEach(function (element) {
        arr.push({
          'uniform': element.item.productName,
          'option': element.item.pdoName,
          'type': element.item.type,
          'uniqueId': element.item.productId,
          'quantity': element.item.quantity,
          'total_discount': element.item.discount,
          'total_price': element.item.total_price,
          'total_price_excl': element.item.total_price_excl,
          'total_tax': element.item.total_tax
        });
      });
      return arr;
    },
    allProducts: function allProducts() {
      var result = [];
      this.products.reduce(function (res, value) {
        if (!res[value.uniqueId]) {
          res[value.uniqueId] = {
            productId: value.uniqueId,
            uniform: value.uniform,
            option: value.option,
            type: value.type,
            quantity: 0,
            total_discount: 0,
            total_price: 0,
            total_price_excl: 0,
            total_tax: 0
          };
          result.push(res[value.uniqueId]);
        }

        ;
        res[value.uniqueId].quantity += value.quantity;
        res[value.uniqueId].total_discount += value.total_discount;
        res[value.uniqueId].total_price += value.total_price;
        res[value.uniqueId].total_price_excl += value.total_price_excl;
        res[value.uniqueId].total_tax += value.total_tax;
        return res;
      }, {});
      return result;
    },
    product_total: function product_total() {
      return this.allProducts.reduce(function (total, item) {
        return total + item.total_price;
      }, 0);
    },
    product_discount: function product_discount() {
      return this.allProducts.reduce(function (total, item) {
        return total + item.total_discount;
      }, 0);
    },
    product_subtotal: function product_subtotal() {
      return this.allProducts.reduce(function (total, item) {
        return total + item.total_price_excl;
      }, 0);
    },
    product_tax: function product_tax() {
      return this.allProducts.reduce(function (total, item) {
        return total + item.total_tax;
      }, 0);
    }
  })
});

/***/ }),

/***/ "./resources/js/components/REPORTS/sales/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/REPORTS/sales/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_25a1a024___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=25a1a024& */ "./resources/js/components/REPORTS/sales/index.vue?vue&type=template&id=25a1a024&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/REPORTS/sales/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_25a1a024___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_25a1a024___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/REPORTS/sales/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/REPORTS/sales/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/REPORTS/sales/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/sales/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/REPORTS/sales/index.vue?vue&type=template&id=25a1a024&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/REPORTS/sales/index.vue?vue&type=template&id=25a1a024& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25a1a024___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25a1a024___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25a1a024___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=25a1a024& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/sales/index.vue?vue&type=template&id=25a1a024&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/sales/index.vue?vue&type=template&id=25a1a024&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/sales/index.vue?vue&type=template&id=25a1a024& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
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
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.types,
                                  label: "Select Types",
                                  multiple: ""
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "selection",
                                    fn: function(ref) {
                                      var item = ref.item
                                      var index = ref.index
                                      return [
                                        index < 5
                                          ? _c("v-chip", [
                                              _c("span", [_vm._v(_vm._s(item))])
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        index === 5
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "grey--text text-caption"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        (+" +
                                                    _vm._s(
                                                      _vm.type.length - 5
                                                    ) +
                                                    " others)\n                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.type,
                                  callback: function($$v) {
                                    _vm.type = $$v
                                  },
                                  expression: "type"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-right mb-6 mr-4" },
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
                                        "\n                                    Filter Record\n                                "
                                      )
                                    ]
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
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mt-2" }),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mt-2" },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", text: "", fab: "" },
                          on: { click: _vm.exportExcel }
                        },
                        [_c("v-icon", [_vm._v("mdi-cloud-download")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            "open-on-hover": "",
                            bottom: "",
                            "offset-y": ""
                          },
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
                                          attrs: { icon: "", text: "", fab: "" }
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [_c("v-icon", [_vm._v("mdi-cloud-print")])],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-list",
                            _vm._l(_vm.items, function(item, index) {
                              return _c(
                                "v-list-item",
                                {
                                  key: index,
                                  on: {
                                    click: function($event) {
                                      return _vm.printReport(item.id)
                                    }
                                  }
                                },
                                [
                                  _c("v-list-item-title", [
                                    _vm._v(_vm._s(item.title))
                                  ])
                                ],
                                1
                              )
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { attrs: { id: "export" } },
                    [
                      _c("br"),
                      _vm._v(" "),
                      _c("v-simple-table", {
                        attrs: { id: "product" },
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
                                        attrs: { colspan: "7" }
                                      },
                                      [_c("h1", [_vm._v("Sales Report")])]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "th",
                                      {
                                        staticClass: "text-center",
                                        attrs: { colspan: "7" }
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
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Product/Lesson\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Type\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Quantity\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Taxable\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Discount\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    VAT 5%\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Total\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.allProducts, function(
                                    prod,
                                    index
                                  ) {
                                    return _c("tr", { key: index }, [
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(_vm._s(prod.uniform))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(" " + _vm._s(prod.type) + " ")
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          " " + _vm._s(prod.quantity) + " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("currency")(
                                                prod.total_price_excl
                                              )
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(
                                              prod.total_discount
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(prod.total_tax)
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(prod.total_price)
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticClass: "text-center" },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.viewReceipt(prod)
                                                }
                                              }
                                            },
                                            [_vm._v("mdi-magnify")]
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "text-center font-weight-black"
                                      },
                                      [_vm._v("Total")]
                                    ),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "text-center font-weight-black"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(
                                              _vm.product_subtotal
                                            )
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "text-center font-weight-black"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(
                                              _vm.product_discount
                                            )
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "text-center font-weight-black"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(_vm.product_tax)
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "text-center font-weight-black"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(
                                              _vm.product_total
                                            )
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("td")
                                  ])
                                ])
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", width: "800" },
          on: { "click:outside": _vm.closeDialog },
          model: {
            value: _vm.open,
            callback: function($$v) {
              _vm.open = $$v
            },
            expression: "open"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "", dark: "", color: "primary" } },
                [
                  _c("v-toolbar-title"),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-icon", { on: { click: _vm.closeDialog } }, [
                    _vm._v("mdi-close")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-simple-table", {
                    attrs: { id: "product" },
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
                                    attrs: { colspan: "6" }
                                  },
                                  [
                                    _c("h1", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("toUpper")(_vm.prod.uniform)
                                        )
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v(
                                    "\n                                    Transaction\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v(
                                    "\n                                    Mom Name\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v(
                                    "\n                                    Student Name\n                                "
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
                              _vm._l(_vm.receipts, function(receipt, index) {
                                return _c("tr", { key: index }, [
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(receipt.transactionNumber))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm._f("toUpper")(
                                            receipt.customer.fullName
                                          )
                                        ) +
                                        " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm._f("toUpper")(
                                            receipt.item.student.firstName
                                          )
                                        ) +
                                        " " +
                                        _vm._s(
                                          _vm._f("toUpper")(
                                            receipt.item.student.familyName
                                          )
                                        ) +
                                        " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("currency")(
                                          receipt.item.total_price
                                        )
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);