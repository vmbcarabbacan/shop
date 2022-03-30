"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PRODUCTS_categories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/categories.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/categories.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "productCategories",
  components: {
    modal: function modal() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_PRODUCTS_categories_modal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./categories/modal.vue */ "./resources/js/components/PRODUCTS/categories/modal.vue"));
    }
  },
  created: function created() {
    var page = parseInt(this.$route.query.page);
    var filter = {
      page: page,
      perPage: 20
    };
    this.CATEGORY_FILTER(filter);
    this.paginate(page);
  },
  data: function data() {
    return {
      headers: [{
        text: "Name",
        value: "name",
        align: "center",
        sortable: false,
        width: "50%"
      }, {
        text: "Type",
        value: "type",
        align: "center",
        sortable: false,
        width: "40%"
      }, {
        text: "Visible",
        value: "visible",
        align: "left",
        sortable: false,
        width: "10%"
      }]
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["CATEGORIES"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["CATEGORY_LOADING", "CATEGORY_FILTER", "CATEGORY_OPEN", "CATEGORY_FORM"])), {}, {
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
      this.CATEGORY_LOADING(true);
      var filter = {
        page: page,
        perPage: 20
      };
      this.CATEGORY_FILTER(filter);
      this.CATEGORIES(this.categories.filter);
    },
    newItem: function newItem() {
      var form = {
        id: 0,
        name: null,
        type: "Uniforms",
        isVisible: 1
      };
      this.edit(form);
    },
    edit: function edit(e) {
      this.CATEGORY_FORM(e);
      this.CATEGORY_OPEN(true);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["categories"])),
  metaInfo: function metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "Categories",
      htmlAttrs: {
        lang: "en"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/components/PRODUCTS/categories.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/PRODUCTS/categories.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _categories_vue_vue_type_template_id_5019aa2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.vue?vue&type=template&id=5019aa2c& */ "./resources/js/components/PRODUCTS/categories.vue?vue&type=template&id=5019aa2c&");
/* harmony import */ var _categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.vue?vue&type=script&lang=js& */ "./resources/js/components/PRODUCTS/categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categories_vue_vue_type_template_id_5019aa2c___WEBPACK_IMPORTED_MODULE_0__.render,
  _categories_vue_vue_type_template_id_5019aa2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PRODUCTS/categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PRODUCTS/categories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/categories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PRODUCTS/categories.vue?vue&type=template&id=5019aa2c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/categories.vue?vue&type=template&id=5019aa2c& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_5019aa2c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_5019aa2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_5019aa2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categories.vue?vue&type=template&id=5019aa2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/categories.vue?vue&type=template&id=5019aa2c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/categories.vue?vue&type=template&id=5019aa2c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/categories.vue?vue&type=template&id=5019aa2c& ***!
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
                        [_vm._v("Categories")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { staticClass: "primary", on: { click: _vm.newItem } },
                        [
                          _vm._v(
                            "\n                        Create Category\n                    "
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
                          items: _vm.categories.categories.data,
                          "items-per-page": 5,
                          loading: _vm.categories.loading,
                          "server-items-length":
                            _vm.categories.categories.total,
                          "footer-props": {
                            "items-per-page-options": [5, 10, 20],
                            "items-per-page-text": "Categories per page",
                            "show-current-page": true,
                            "show-first-last-page": true
                          },
                          "mobile-breakpoint": 200,
                          "hide-default-footer": ""
                        },
                        on: { "click:row": _vm.edit },
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
                            key: "item.type",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(item.type) +
                                    "\n                        "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.visible",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("v-checkbox", {
                                  attrs: { readonly: "" },
                                  model: {
                                    value: item.isVisible,
                                    callback: function($$v) {
                                      _vm.$set(item, "isVisible", $$v)
                                    },
                                    expression: "item.isVisible"
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
                                  "\n                            No Available Category "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "primary",
                                    attrs: { small: "" },
                                    on: { click: _vm.newItem }
                                  },
                                  [_vm._v("Create Category")]
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
                    attrs: { length: _vm.categories.categories.last_page },
                    on: { input: _vm.paginate },
                    model: {
                      value: _vm.categories.filter.page,
                      callback: function($$v) {
                        _vm.$set(_vm.categories.filter, "page", $$v)
                      },
                      expression: "categories.filter.page"
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
      _c("modal")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);