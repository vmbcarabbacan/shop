"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_REPORTS_studentsProductLessons_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "STUDENTPRODUCTLESSONS",
  data: function data() {
    return {
      status: ['Completed', 'Pending', 'Cancelled', 'Refund'],
      filter: {
        dates: [],
        allProdIds: [],
        studentIds: [],
        status: []
      },
      result: []
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REPORT_FILTER_LOCATION_BY_TERM_ID", "REPORT_STUDENT_ALL_PRODUCTS"])), {}, {
    selectedTerm: function selectedTerm(e) {
      this.filter.locationIds = [];
      this.REPORT_FILTER_LOCATION_BY_TERM_ID({
        id: e
      });
    },
    filterRecord: function filterRecord() {
      var _this = this;

      var sortedDates = this.filter.dates.sort(function (a, b) {
        return new Date(a) - new Date(b);
      });
      this.REPORT_STUDENT_ALL_PRODUCTS({
        dates: sortedDates,
        allProdIds: this.filter.allProdIds,
        studentIds: this.filter.studentIds,
        status: this.filter.status
      }).then(function (result) {
        _this.result = result.data;
      });
    },
    exportExcel: function exportExcel() {
      this.$excel("export", "Students over Lesson");
    },
    printReport: function printReport() {
      this.$print("export");
    },
    searchStudent: function searchStudent(e) {
      console.log(e);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["reports"])), {}, {
    dateRangeText: function dateRangeText() {
      return this.filter.dates.join(' ~ ');
    },
    totalStudents: function totalStudents() {
      return this.reports.studentsPerLessons.reduce(function (total, item) {
        return total + item.students;
      }, 0);
    }
  })
});

/***/ }),

/***/ "./resources/js/components/REPORTS/studentsProductLessons/index.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/REPORTS/studentsProductLessons/index.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_8f2fa27c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8f2fa27c& */ "./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=template&id=8f2fa27c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8f2fa27c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_8f2fa27c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/REPORTS/studentsProductLessons/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=template&id=8f2fa27c&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=template&id=8f2fa27c& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8f2fa27c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8f2fa27c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8f2fa27c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=8f2fa27c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=template&id=8f2fa27c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=template&id=8f2fa27c&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/REPORTS/studentsProductLessons/index.vue?vue&type=template&id=8f2fa27c& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.reports.filters.allProducts,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Select Uniforms/Lessons",
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
                                                      _vm.filter.allProdIds
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
                                  value: _vm.filter.allProdIds,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "allProdIds", $$v)
                                  },
                                  expression: "filter.allProdIds"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.reports.filters.students,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Select Students",
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
                                                      _vm.filter.studentIds
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
                                  value: _vm.filter.studentIds,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "studentIds", $$v)
                                  },
                                  expression: "filter.studentIds"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.status,
                                  label: "Select Status (Optional)",
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
                                        disabled:
                                          _vm.filter.allProdIds.length === 0 &&
                                          _vm.filter.studentIds.length === 0
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
                                      [
                                        _c("h1", [
                                          _vm._v(
                                            "Purchased Lessons/Products/Camps/Other by Students"
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Student\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                    Lesson / Product\n                                "
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
                                  _vm._l(_vm.result, function(res, index) {
                                    return _c("tr", { key: index }, [
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("toUpper")(
                                              res.item.student.firstName
                                            )
                                          ) +
                                            " " +
                                            _vm._s(
                                              _vm._f("toUpper")(
                                                res.item.student.familyName
                                              )
                                            )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("toUpper")(
                                              res.item.productName
                                            )
                                          ) + "  "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-thin" },
                                          [
                                            _vm._v(
                                              "( " +
                                                _vm._s(
                                                  _vm._f("toUpper")(
                                                    res.item.pdoName
                                                  )
                                                ) +
                                                " )"
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("toUpper")(res.item.status)
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(
                                              res.item.total_price
                                            )
                                          )
                                        )
                                      ])
                                    ])
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "4" } }, [
                                      _c("b", [
                                        _vm._v(
                                          "Total Count: " +
                                            _vm._s(_vm.result.length)
                                        )
                                      ])
                                    ])
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);