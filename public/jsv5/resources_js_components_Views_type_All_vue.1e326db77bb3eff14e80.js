"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Views_type_All_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/type/All.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/type/All.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "homeAllType",
  created: function created() {
    var page = parseInt(this.$route.query.page);
    this.paginate(page);
  },
  data: function data() {
    return {
      page: 1
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["PRODUCT_BY_TYPE_BY_CATEGORY_ID"])), {}, {
    paginate: function paginate(e) {
      var page = Object.keys(this.$route.query).length > 0 ? e : 1;
      this.$router.push({
        query: {
          page: page
        }
      })["catch"](function (error) {
        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation to current location')) {
          console.log(error);
        }
      });
      this.PRODUCT_BY_TYPE_BY_CATEGORY_ID({
        type: this.$route.params.type,
        id: this.$route.params.id,
        page: page,
        perPage: 12
      });
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["product"]))
});

/***/ }),

/***/ "./resources/js/components/Views/type/All.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Views/type/All.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _All_vue_vue_type_template_id_56afb058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./All.vue?vue&type=template&id=56afb058& */ "./resources/js/components/Views/type/All.vue?vue&type=template&id=56afb058&");
/* harmony import */ var _All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./All.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/type/All.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _All_vue_vue_type_template_id_56afb058___WEBPACK_IMPORTED_MODULE_0__.render,
  _All_vue_vue_type_template_id_56afb058___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/type/All.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/type/All.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Views/type/All.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./All.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/type/All.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/type/All.vue?vue&type=template&id=56afb058&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Views/type/All.vue?vue&type=template&id=56afb058& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_56afb058___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_56afb058___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_56afb058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./All.vue?vue&type=template&id=56afb058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/type/All.vue?vue&type=template&id=56afb058&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/type/All.vue?vue&type=template&id=56afb058&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/type/All.vue?vue&type=template&id=56afb058& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        { staticClass: "py-8 px-6", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _vm._l(_vm.product.typeByAllCategory.data, function(
                search,
                index
              ) {
                return _c(
                  "v-col",
                  { key: index, attrs: { cols: "12", md: "3" } },
                  [
                    _c(
                      "v-card",
                      {
                        attrs: {
                          href: search.pdo
                            ? "/" +
                              (_vm.$route.params.type == "Lessons"
                                ? "Lessons"
                                : _vm.$route.params.type == "Uniforms"
                                ? "Uniforms"
                                : "Camps") +
                              "/" +
                              search.slug +
                              "/pdo/" +
                              search.pdo.id
                            : "#"
                        }
                      },
                      [
                        _c("v-img", {
                          attrs: {
                            src: "/" + search.image.link,
                            "lazy-src": "/" + search.image.link_res,
                            alt: search.image.alt,
                            name: search.image.name
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
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
                                            "div",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  staticClass:
                                                    "col-12 text-truncate"
                                                },
                                                "div",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("toUpper")(search.name)
                                                ) +
                                                  "\n                          "
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              search.pdo
                                                ? [
                                                    _vm._v(
                                                      "\n                              AED "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            search.type ==
                                                              "Uniforms"
                                                              ? search.pdo.price
                                                              : search.pdo
                                                                  .price *
                                                                  search.pdo
                                                                    .quantity
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : [
                                                    _vm._v(
                                                      "\n                              " +
                                                        _vm._s(
                                                          search.type ==
                                                            "Uniforms"
                                                            ? "Out of stock"
                                                            : "Coming Soon!"
                                                        ) +
                                                        "\n                          "
                                                    )
                                                  ]
                                            ],
                                            2
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
                                  _vm._v(_vm._s(_vm._f("toUpper")(search.name)))
                                ])
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
              }),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _vm.product.typeByAllCategory.last_page > 1
                          ? _c("v-pagination", {
                              attrs: {
                                length: _vm.product.typeByAllCategory.last_page
                              },
                              on: { input: _vm.paginate },
                              model: {
                                value: _vm.page,
                                callback: function($$v) {
                                  _vm.page = $$v
                                },
                                expression: "page"
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                ],
                2
              )
            ],
            2
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