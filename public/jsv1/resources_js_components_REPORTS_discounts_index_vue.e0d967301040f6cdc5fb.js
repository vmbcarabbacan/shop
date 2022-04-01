"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_REPORTS_discounts_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/discounts/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/discounts/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DISCOUNTS',
  data: function data() {
    return {
      filter: {
        dates: [],
        status: null,
        discounts: []
      },
      status: ['Completed', 'Pending', 'Cancelled', 'Refund'],
      loading: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REPORT_DISCOUNTS"])), {}, {
    exportExcel: function exportExcel() {
      this.$excel("export", "Discounts");
    },
    printReport: function printReport() {
      this.$print("export");
    },
    filterRecord: function filterRecord() {
      this.REPORT_DISCOUNTS(this.filter);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["reports"])), {}, {
    dateRangeText: function dateRangeText() {
      return this.filter.dates.join(' ~ ');
    }
  })
});

/***/ }),

/***/ "./resources/js/components/REPORTS/discounts/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/REPORTS/discounts/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_beafb72c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=beafb72c& */ "./resources/js/components/REPORTS/discounts/index.vue?vue&type=template&id=beafb72c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/REPORTS/discounts/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_beafb72c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_beafb72c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/REPORTS/discounts/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/REPORTS/discounts/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/REPORTS/discounts/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/discounts/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/REPORTS/discounts/index.vue?vue&type=template&id=beafb72c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/REPORTS/discounts/index.vue?vue&type=template&id=beafb72c& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_beafb72c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_beafb72c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_beafb72c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=beafb72c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/discounts/index.vue?vue&type=template&id=beafb72c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/discounts/index.vue?vue&type=template&id=beafb72c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/discounts/index.vue?vue&type=template&id=beafb72c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                                  items: _vm.reports.filters.discounts,
                                  "item-text": "name",
                                  "item-value": "name",
                                  label: "Select Discount Name",
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
                                              _c("span", [
                                                _vm._v(_vm._s(item.name))
                                              ])
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
                                                      _vm.filter.discounts
                                                        .length - 5
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
                                  value: _vm.filter.discounts,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "discounts", $$v)
                                  },
                                  expression: "filter.discounts"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.status,
                                  label: "Select Status",
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
                                                      _vm.filter.status.length -
                                                        5
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
                                  value: _vm.filter.status,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "status", $$v)
                                  },
                                  expression: "filter.status"
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
                                      attrs: {
                                        loading: _vm.loading,
                                        disabled:
                                          _vm.filter.discounts.length === 0 ||
                                          _vm.filter.status == null
                                      },
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
                        "v-btn",
                        {
                          attrs: { icon: "", text: "", fab: "" },
                          on: { click: _vm.printReport }
                        },
                        [_c("v-icon", [_vm._v("mdi-cloud-print")])],
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
                      _c("v-simple-table", {
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
                                      [_c("h3", [_vm._v("Discounts")])]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "th",
                                      {
                                        staticClass: "text-center",
                                        attrs: { colspan: "6" }
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
                                      _vm._v("Student")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Product")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Status")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Discount")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Total")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Date")
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.reports.discounts, function(
                                    discount,
                                    i
                                  ) {
                                    return _c("tr", { key: (_vm.u = i) }, [
                                      _c("th", { staticClass: "text-center" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("toUpper")(
                                                discount.item.student.firstName
                                              )
                                            ) +
                                            " " +
                                            _vm._s(
                                              _vm._f("toUpper")(
                                                discount.item.student.familyName
                                              )
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-center" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("toUpper")(
                                                discount.item.productName
                                              )
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-center" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("toUpper")(
                                                discount.item.status
                                              )
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "th",
                                        { staticClass: "text-center" },
                                        _vm._l(
                                          discount.item.discounts,
                                          function(disc, j) {
                                            return _c("p", { key: j }, [
                                              _vm._v(
                                                _vm._s(disc.name) +
                                                  " - " +
                                                  _vm._s(
                                                    _vm._f("currency")(
                                                      disc.value
                                                    )
                                                  )
                                              )
                                            ])
                                          }
                                        ),
                                        0
                                      ),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-center" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("currency")(
                                                discount.item.total_price
                                              )
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-center" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("date")(
                                                discount.updated_at
                                              )
                                            ) +
                                            " "
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
                      }),
                      _vm._v(" "),
                      _c("br")
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