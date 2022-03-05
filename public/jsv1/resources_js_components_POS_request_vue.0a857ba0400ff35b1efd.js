"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_POS_request_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/request.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/request.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'posRequestAmend',
  data: function data() {
    return {
      requests: ['complete transaction', 'cancelled transaction', 'refund transaction', 'change payment option'],
      payment: [],
      payments: ["Cash", "Card", "Bank", "Cheque", "Telr"],
      request: {
        type: null,
        comment: null,
        pays: []
      },
      loading: false,
      valid: false,
      requestOpen: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REQUEST_SAVE"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["POS_REQUEST_AMEND_SALE"])), {}, {
    getPayment: function getPayment(e) {
      var pay = [];
      e.forEach(function (data) {
        pay.push({
          payment: data,
          value: 0
        });
      });
      this.request.pays = pay;
    },
    sendRequest: function sendRequest() {
      var _this = this;

      var filter = {
        type: this.request.type,
        comment: this.request.comment,
        pays: this.request.pays,
        transactionNumber: this.pos.amendedId
      };
      this.loading = true;
      this.REQUEST_SAVE({
        filter: filter
      }).then(function (result) {
        _this.requestOpen = true;
        _this.loading = false;

        _this.close();
      });
    },
    close: function close() {
      this.request = {
        type: null,
        comment: null,
        pays: []
      };
      this.POS_REQUEST_AMEND_SALE();
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["pos"]))
});

/***/ }),

/***/ "./resources/js/components/POS/request.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/POS/request.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request_vue_vue_type_template_id_1e9f8a8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.vue?vue&type=template&id=1e9f8a8e& */ "./resources/js/components/POS/request.vue?vue&type=template&id=1e9f8a8e&");
/* harmony import */ var _request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.vue?vue&type=script&lang=js& */ "./resources/js/components/POS/request.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _request_vue_vue_type_template_id_1e9f8a8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _request_vue_vue_type_template_id_1e9f8a8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/POS/request.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/POS/request.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/POS/request.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./request.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/request.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/POS/request.vue?vue&type=template&id=1e9f8a8e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/POS/request.vue?vue&type=template&id=1e9f8a8e& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_template_id_1e9f8a8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_template_id_1e9f8a8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_request_vue_vue_type_template_id_1e9f8a8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./request.vue?vue&type=template&id=1e9f8a8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/request.vue?vue&type=template&id=1e9f8a8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/request.vue?vue&type=template&id=1e9f8a8e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/request.vue?vue&type=template&id=1e9f8a8e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "500", persistent: "" },
      model: {
        value: _vm.pos.isRequestAmend,
        callback: function($$v) {
          _vm.$set(_vm.pos, "isRequestAmend", $$v)
        },
        expression: "pos.isRequestAmend"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { staticClass: "primary text-none", attrs: { flat: "", dark: "" } },
            [
              _c("v-toolbar-title", [
                _vm._v(
                  "\n                Amend Transaction # " +
                    _vm._s(_vm.pos.amendedId) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-icon", { on: { click: _vm.close } }, [_vm._v("mdi-close")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c("v-combobox", {
                    attrs: {
                      label: "Select request type",
                      items: _vm.requests,
                      rules: [
                        function(e) {
                          return !!e || "required"
                        }
                      ]
                    },
                    model: {
                      value: _vm.request.type,
                      callback: function($$v) {
                        _vm.$set(_vm.request, "type", $$v)
                      },
                      expression: "request.type"
                    }
                  }),
                  _vm._v(" "),
                  _vm.request.type == "change payment option"
                    ? _c("v-combobox", {
                        attrs: {
                          label: "Select Payment",
                          items: _vm.payments,
                          rules: [
                            function(e) {
                              return e.length > 0 || "required"
                            }
                          ],
                          multiple: ""
                        },
                        on: { change: _vm.getPayment },
                        model: {
                          value: _vm.payment,
                          callback: function($$v) {
                            _vm.payment = $$v
                          },
                          expression: "payment"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.request.pays, function(pay, index) {
                    return [
                      _c(
                        "div",
                        { key: index },
                        [
                          _vm.request.type == "change payment option"
                            ? _c("v-text-field", {
                                attrs: {
                                  label: pay.payment,
                                  rules: [
                                    function(e) {
                                      return e > 0 || "required"
                                    }
                                  ],
                                  type: "number"
                                },
                                model: {
                                  value: pay.value,
                                  callback: function($$v) {
                                    _vm.$set(pay, "value", _vm._n($$v))
                                  },
                                  expression: "pay.value"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      label: "Please specify reasons",
                      rules: [
                        function(e) {
                          return !!e || "required"
                        }
                      ]
                    },
                    model: {
                      value: _vm.request.comment,
                      callback: function($$v) {
                        _vm.$set(_vm.request, "comment", $$v)
                      },
                      expression: "request.comment"
                    }
                  })
                ],
                2
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
                  attrs: { loading: _vm.loading, disabled: !_vm.valid },
                  on: { click: _vm.sendRequest }
                },
                [_vm._v("\n                Send Request\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            absolute: "",
            top: "",
            right: "",
            color: "deep-purple accent-4"
          },
          model: {
            value: _vm.requestOpen,
            callback: function($$v) {
              _vm.requestOpen = $$v
            },
            expression: "requestOpen"
          }
        },
        [_vm._v("\n        Sending your request\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);