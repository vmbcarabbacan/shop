"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SETUPS_terms_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/terms/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/terms/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'termsAndConditions',
  data: function data() {
    return {
      search: null,
      headers: [{
        text: "Name",
        value: "name",
        align: "left"
      }, {
        text: "",
        value: "isShow",
        align: "left"
      }]
    };
  },
  created: function created() {
    this.search = null;
    var page = parseInt(this.$route.query.page);
    var filter = {
      search: this.search,
      page: page,
      perPage: 20
    };
    this.FORM_FILTER_M(filter);
    this.paginate(page);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["FORMS", "FORM_SAVE"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["FORM_FILTER_M"])), {}, {
    paginate: function paginate(e) {
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
      var filter = {
        search: this.search,
        page: page,
        perPage: 20
      };
      this.FORM_FILTER_M(filter);
      this.FORMS(filter);
    },
    searchForm: function searchForm() {
      this.paginate(1);
    },
    changeVisible: function changeVisible(e) {
      this.FORM_SAVE(e);
    },
    newItem: function newItem() {
      this.$router.push({
        name: "TermsAndConditionsModal",
        params: {
          slug: 0,
          type: 'New'
        }
      });
    },
    goEdit: function goEdit(e) {
      this.$router.push({
        name: "TermsAndConditionsModal",
        params: {
          slug: e.slug,
          type: 'Edit'
        }
      });
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["form"]))
});

/***/ }),

/***/ "./resources/js/components/SETUPS/terms/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/SETUPS/terms/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_eef2cf48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=eef2cf48& */ "./resources/js/components/SETUPS/terms/index.vue?vue&type=template&id=eef2cf48&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/SETUPS/terms/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_eef2cf48___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_eef2cf48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SETUPS/terms/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SETUPS/terms/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/SETUPS/terms/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/terms/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SETUPS/terms/index.vue?vue&type=template&id=eef2cf48&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/SETUPS/terms/index.vue?vue&type=template&id=eef2cf48& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eef2cf48___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eef2cf48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eef2cf48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=eef2cf48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/terms/index.vue?vue&type=template&id=eef2cf48&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/terms/index.vue?vue&type=template&id=eef2cf48&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SETUPS/terms/index.vue?vue&type=template&id=eef2cf48& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-8 px-6", attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c(
                        "v-subheader",
                        { staticClass: "text-h6 font-weight-bold" },
                        [_vm._v("Forms")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { staticClass: "primary", on: { click: _vm.newItem } },
                        [
                          _vm._v(
                            "\n                        Create Form\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.form.forms.data,
                          "items-per-page": 20,
                          loading: _vm.form.loading,
                          "server-items-length": _vm.form.forms.total,
                          "footer-props": {
                            "items-per-page-options": [5, 10, 20],
                            "items-per-page-text": "Categories per page",
                            "show-current-page": true,
                            "show-first-last-page": true
                          },
                          "mobile-breakpoint": 200,
                          "hide-default-footer": "",
                          "no-results-text": "form not found"
                        },
                        on: { "click:row": _vm.goEdit },
                        scopedSlots: _vm._u([
                          {
                            key: "item.name",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm._f("toUpper")(item.name)) +
                                    "\n                        "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.isShow",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("v-checkbox", {
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.changeVisible(item)
                                    }
                                  },
                                  model: {
                                    value: item.isShow,
                                    callback: function($$v) {
                                      _vm.$set(item, "isShow", $$v)
                                    },
                                    expression: "item.isShow"
                                  }
                                })
                              ]
                            }
                          },
                          {
                            key: "no-data",
                            fn: function() {
                              return [
                                _vm._v(
                                  "\n                            No Available Form "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "primary",
                                    attrs: { small: "" },
                                    on: { click: _vm.newItem }
                                  },
                                  [_vm._v("Create")]
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.action",
                            fn: function(ref) {
                              var item = ref.item
                              return undefined
                            }
                          },
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "search",
                                            solo: "",
                                            clearable: ""
                                          },
                                          on: {
                                            keypress: function($event) {
                                              if (
                                                !$event.type.indexOf("key") &&
                                                _vm._k(
                                                  $event.keyCode,
                                                  "enter",
                                                  13,
                                                  $event.key,
                                                  "Enter"
                                                )
                                              ) {
                                                return null
                                              }
                                              return _vm.searchForm.apply(
                                                null,
                                                arguments
                                              )
                                            },
                                            "click:clear": _vm.searchForm
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
                                                      on: {
                                                        click: _vm.searchForm
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { left: "" } },
                                                        [
                                                          _vm._v(
                                                            "\n                                                mdi-magnify\n                                                "
                                                          )
                                                        ]
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
                                            value: _vm.search,
                                            callback: function($$v) {
                                              _vm.search = $$v
                                            },
                                            expression: "search"
                                          }
                                        })
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
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-pagination", {
                    attrs: { length: _vm.form.forms.last_page },
                    on: { input: _vm.paginate },
                    model: {
                      value: _vm.form.filter.page,
                      callback: function($$v) {
                        _vm.$set(_vm.form.filter, "page", $$v)
                      },
                      expression: "form.filter.page"
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);