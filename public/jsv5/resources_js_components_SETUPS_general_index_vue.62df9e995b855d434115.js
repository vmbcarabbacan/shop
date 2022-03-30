"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SETUPS_general_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/general/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/general/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'setupGeneral',
  created: function created() {
    this.SETUP_LOAD_FILTER();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SETUP_LOAD_FILTER", "SETUP_SAVE"])), {}, {
    save: function save() {
      this.SETUP_SAVE({
        filter: this.filter
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["setup"])), {}, {
    filter: function filter() {
      var filt = {
        ebd: this.setup.filter.ebd == 'true' ? true :  false || false,
        is_start_term: this.setup.filter.is_start_term == 'true' ? true :  false || false,
        vat: Number(this.setup.filter.vat) || 0,
        emails: JSON.parse(this.setup.filter.emails) || []
      };
      return filt;
    }
  })
});

/***/ }),

/***/ "./resources/js/components/SETUPS/general/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/SETUPS/general/index.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_25a9c806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=25a9c806& */ "./resources/js/components/SETUPS/general/index.vue?vue&type=template&id=25a9c806&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/SETUPS/general/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_25a9c806___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_25a9c806___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SETUPS/general/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SETUPS/general/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SETUPS/general/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/general/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SETUPS/general/index.vue?vue&type=template&id=25a9c806&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/SETUPS/general/index.vue?vue&type=template&id=25a9c806& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25a9c806___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25a9c806___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25a9c806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=25a9c806& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/general/index.vue?vue&type=template&id=25a9c806&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/general/index.vue?vue&type=template&id=25a9c806&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/general/index.vue?vue&type=template&id=25a9c806& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12", md: "8" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "VAT",
                                  hint:
                                    "VAT that will use for POS and online shop",
                                  "persistent-hint": "",
                                  type: "number"
                                },
                                model: {
                                  value: _vm.filter.vat,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "vat", _vm._n($$v))
                                  },
                                  expression: "filter.vat"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.setup.filters.staffs,
                                  "item-text": "fullName",
                                  "item-value": "email",
                                  label: "Staff",
                                  hint:
                                    "Select staff/s that will receive and process the cancellation/refund of transactions",
                                  "persistent-hint": "",
                                  multiple: ""
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "selection",
                                    fn: function(ref) {
                                      var item = ref.item
                                      var index = ref.index
                                      return [
                                        index < 2
                                          ? _c("v-chip", [
                                              _c("span", [
                                                _vm._v(_vm._s(item.fullName))
                                              ])
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        index === 2
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
                                                      _vm.filter.emails.length -
                                                        2
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
                                  value: _vm.filter.emails,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "emails", $$v)
                                  },
                                  expression: "filter.emails"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-checkbox", {
                                attrs: { label: "is term started?" },
                                model: {
                                  value: _vm.filter.is_start_term,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "is_start_term", $$v)
                                  },
                                  expression: "filter.is_start_term"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-checkbox", {
                                attrs: { label: "is EBD?" },
                                model: {
                                  value: _vm.filter.ebd,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "ebd", $$v)
                                  },
                                  expression: "filter.ebd"
                                }
                              })
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
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "text-none success",
                          on: { click: _vm.save }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);