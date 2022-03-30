"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PRODUCTS_view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/view.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/view.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "productView",
  created: function created() {
    var page = parseInt(this.$route.query.page);
    var filter = {
      search: null,
      type: null,
      page: page,
      perPage: 20
    };
    this.PRODUCT_FILTER(filter);
    this.XERO_GET_CHART_OF_ACCOUNT({
      type: 'Sales'
    });
    this.paginate(page);
  },
  data: function data() {
    return {
      search: null,
      type: null,
      headers: [{
        text: "Image",
        value: "image",
        align: "center",
        sortable: false,
        width: "15%"
      }, {
        text: "Name",
        value: "name",
        align: "left",
        sortable: false,
        width: "45%"
      }, {
        text: "Type",
        value: "type",
        align: "left",
        sortable: false,
        width: "10%"
      }, {
        text: "Visible",
        value: "visible",
        align: "left",
        sortable: false,
        width: "5%"
      }, {
        text: "",
        value: "action",
        align: "center",
        sortable: false,
        width: "15%"
      }],
      openXero: false,
      accessProduct: null,
      code: null
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["PRODUCTS", "PRODUCT_CHANGE_VISIBLE", "XERO_GET_CHART_OF_ACCOUNT", "XERO_GET_CODE", "XERO_SAVE"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["PRODUCT_LOADING", "PRODUCT_FILTER"])), {}, {
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
      this.PRODUCT_LOADING(true);
      var filter = {
        search: this.search,
        type: this.type,
        page: page,
        perPage: 20
      };
      this.PRODUCT_FILTER(filter);
      this.PRODUCTS(this.product.filter);
    },
    changeVisible: function changeVisible(e) {
      this.PRODUCT_CHANGE_VISIBLE({
        item: e
      });
    },
    newItem: function newItem() {
      this.$router.push({
        name: "ProductAdd"
      });
    },
    searchProduct: function searchProduct() {
      this.paginate(1);
    },
    selectedType: function selectedType(e) {
      this.type = e;
      this.paginate(1);
    },
    view: function view(e) {
      var productViewer = this.$router.resolve("/".concat(e.type, "/").concat(e.slug, "/pdo/").concat(e.pdo.id));
      window.open(productViewer.href, '_blank');
    },
    goEdit: function goEdit(e) {
      var route = this.$router.resolve("/auth/products/edit/".concat(e.slug));
      window.open(route.href);
    },
    copyItem: function copyItem(e) {
      var route = this.$router.resolve("/auth/products/copy/".concat(e.slug));
      window.open(route.href);
    },
    xeroCode: function xeroCode(e) {
      var _this = this;

      this.accessProduct = e;
      this.XERO_GET_CODE({
        id: e.id
      }).then(function (result) {
        _this.openXero = true;
        _this.code = result.data || {
          chart_of_account_id: 0
        };
      });
    },
    saveXero: function saveXero() {
      var _this2 = this;

      this.XERO_SAVE({
        product_id: this.accessProduct.id,
        chart_of_account_id: this.code.chart_of_account_id
      }).then(function (result) {
        _this2.closeXero();
      });
    },
    closeXero: function closeXero() {
      this.accessProduct = null;
      this.code = null;
      this.openXero = false;
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["product", "productTypes", "xero"])),
  metaInfo: function metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Products",
      htmlAttrs: {
        lang: "en"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/components/PRODUCTS/view.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/PRODUCTS/view.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_vue_vue_type_template_id_0df5a796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=0df5a796& */ "./resources/js/components/PRODUCTS/view.vue?vue&type=template&id=0df5a796&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/components/PRODUCTS/view.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_0df5a796___WEBPACK_IMPORTED_MODULE_0__.render,
  _view_vue_vue_type_template_id_0df5a796___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PRODUCTS/view.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PRODUCTS/view.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/view.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/view.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PRODUCTS/view.vue?vue&type=template&id=0df5a796&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/view.vue?vue&type=template&id=0df5a796& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0df5a796___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0df5a796___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0df5a796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./view.vue?vue&type=template&id=0df5a796& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/view.vue?vue&type=template&id=0df5a796&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/view.vue?vue&type=template&id=0df5a796&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/view.vue?vue&type=template&id=0df5a796& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                        [_vm._v("Products")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { staticClass: "primary", on: { click: _vm.newItem } },
                        [
                          _vm._v(
                            "\n                        Create Product\n                    "
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
                          items: _vm.product.products.data,
                          "items-per-page": 20,
                          loading: _vm.product.loading,
                          "server-items-length": _vm.product.products.total,
                          "footer-props": {
                            "items-per-page-options": [5, 10, 20],
                            "items-per-page-text": "Categories per page",
                            "show-current-page": true,
                            "show-first-last-page": true
                          },
                          "mobile-breakpoint": 200,
                          "hide-default-footer": "",
                          "no-results-text": "product not found"
                        },
                        on: { "click:row": _vm.goEdit },
                        scopedSlots: _vm._u([
                          {
                            key: "item.image",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.image
                                  ? _c(
                                      "v-avatar",
                                      { attrs: { size: "150", tile: "" } },
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src: "/" + item.image.link,
                                            "lazy-src":
                                              "/" + item.image.link_res,
                                            name: item.image.name,
                                            alt: item.image.alt,
                                            contain: ""
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            }
                          },
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
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.changeVisible(item)
                                    }
                                  },
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
                            key: "item.soos",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("v-checkbox", {
                                  attrs: { readonly: "" },
                                  model: {
                                    value: item.soos,
                                    callback: function($$v) {
                                      _vm.$set(item, "soos", $$v)
                                    },
                                    expression: "item.soos"
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
                                  "\n                            No Available Product "
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
                              return [
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
                                              item.type == "Uniforms" &&
                                              item.pdo
                                                ? _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          staticClass:
                                                            "primary",
                                                          attrs: {
                                                            icon: "",
                                                            dark: ""
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.stopPropagation()
                                                              return _vm.view(
                                                                item
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
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "white",
                                                            dark: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                        mdi-eye-outline\n                                        "
                                                          )
                                                        ]
                                                      )
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
                                      _vm._v(
                                        "View " +
                                          _vm._s(_vm._f("toUpper")(item.name))
                                      )
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
                                                      attrs: {
                                                        icon: "",
                                                        dark: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          return _vm.copyItem(
                                                            item
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
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        color: "primary",
                                                        dark: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        mdi-content-copy\n                                        "
                                                      )
                                                    ]
                                                  )
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
                                      _vm._v(
                                        "Copy " +
                                          _vm._s(_vm._f("toUpper")(item.name))
                                      )
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
                                                      attrs: {
                                                        icon: "",
                                                        dark: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          return _vm.xeroCode(
                                                            item
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
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        color: "primary",
                                                        dark: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        mdi-cloud-sync\n                                        "
                                                      )
                                                    ]
                                                  )
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
                                      _vm._v(
                                        "Set xero code for " +
                                          _vm._s(_vm._f("toUpper")(item.name))
                                      )
                                    ])
                                  ]
                                )
                              ]
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
                                      { attrs: { cols: "12", md: "8" } },
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
                                              return _vm.searchProduct.apply(
                                                null,
                                                arguments
                                              )
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
                                                      on: {
                                                        click: _vm.searchProduct
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
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "4" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            solo: "",
                                            items: _vm.productTypes
                                          },
                                          on: { change: _vm.selectedType },
                                          model: {
                                            value: _vm.type,
                                            callback: function($$v) {
                                              _vm.type = $$v
                                            },
                                            expression: "type"
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
                    attrs: { length: _vm.product.products.last_page },
                    on: { input: _vm.paginate },
                    model: {
                      value: _vm.product.filter.page,
                      callback: function($$v) {
                        _vm.$set(_vm.product.filter, "page", $$v)
                      },
                      expression: "product.filter.page"
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
      _vm.openXero
        ? _c(
            "v-dialog",
            {
              attrs: { width: "500", persistent: "" },
              model: {
                value: _vm.openXero,
                callback: function($$v) {
                  _vm.openXero = $$v
                },
                expression: "openXero"
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
                      _c("v-toolbar-title", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.accessProduct.name) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", icon: "" },
                          on: { click: _vm.closeXero }
                        },
                        [
                          _c("v-icon", [
                            _vm._v(
                              "\n                        mdi-close\n                    "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          items: _vm.xero.charts,
                          "item-text": "name",
                          "item-value": "id"
                        },
                        model: {
                          value: _vm.code.chart_of_account_id,
                          callback: function($$v) {
                            _vm.$set(_vm.code, "chart_of_account_id", $$v)
                          },
                          expression: "code.chart_of_account_id"
                        }
                      })
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
                          on: { click: _vm.saveXero }
                        },
                        [_vm._v("\n                    Save\n                ")]
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);