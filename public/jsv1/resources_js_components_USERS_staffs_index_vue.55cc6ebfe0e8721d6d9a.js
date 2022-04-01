"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_USERS_staffs_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/index.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'authStaffs',
  data: function data() {
    return {
      search: null,
      headers: [{
        text: "Name",
        value: "fullName",
        align: "left",
        sortable: false,
        width: "30%"
      }, {
        text: "Email",
        value: "email",
        align: "left",
        sortable: false,
        width: "30%"
      }, {
        text: "Contact Number",
        value: "contact",
        align: "left",
        sortable: false,
        width: "20%"
      }, {
        text: "Role",
        value: "role",
        align: "left",
        sortable: false,
        width: "10%"
      }, {
        text: "",
        value: "action",
        align: "left",
        sortable: false,
        width: "10%"
      }],
      type: 'Name',
      types: ['Name', 'Email', 'Number', 'Role']
    };
  },
  created: function created() {
    var page = parseInt(this.$route.query.page);
    var data = {
      page: page,
      perPage: 10,
      search: null,
      role: this.$route.params.role
    };
    this.SAMS_PARENT_FILTER(data);
    this.paginate(page);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SAMS_PARENTS", "SAMS_PARENT_DELETE"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["SAMS_PARENT_FILTER"])), {}, {
    getNumber: function getNumber(number) {
      return number.slice(number.length - 9);
    },
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
      var data = {
        page: page,
        perPage: 10,
        search: this.search,
        role: "All",
        filter: this.type
      };
      this.SAMS_PARENT_FILTER(data);
      this.SAMS_PARENTS(data);
    },
    createItem: function createItem() {
      this.$router.push({
        name: 'AddStaff'
      });
    },
    searchParent: function searchParent() {
      this.paginate(1);
    },
    deleteItem: function deleteItem(e) {
      this.SAMS_PARENT_DELETE({
        id: e.id
      });
    },
    goEdit: function goEdit(e) {
      this.$router.push({
        name: 'EditStaff',
        params: {
          email: e.email
        }
      });
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["sams"]))
});

/***/ }),

/***/ "./resources/js/components/USERS/staffs/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/USERS/staffs/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3f8f2928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3f8f2928& */ "./resources/js/components/USERS/staffs/index.vue?vue&type=template&id=3f8f2928&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/USERS/staffs/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3f8f2928___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3f8f2928___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/USERS/staffs/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/USERS/staffs/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/USERS/staffs/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/USERS/staffs/index.vue?vue&type=template&id=3f8f2928&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/USERS/staffs/index.vue?vue&type=template&id=3f8f2928& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3f8f2928___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3f8f2928___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3f8f2928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3f8f2928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/index.vue?vue&type=template&id=3f8f2928&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/index.vue?vue&type=template&id=3f8f2928&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/index.vue?vue&type=template&id=3f8f2928& ***!
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
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.sams.teachers.data,
                      "items-per-page": 10,
                      loading: _vm.sams.loading,
                      "server-items-length": _vm.sams.teachers.total,
                      "mobile-breakpoint": 200,
                      "hide-default-footer": "",
                      "no-results-text": "Currently no customer"
                    },
                    on: { "click:row": _vm.goEdit },
                    scopedSlots: _vm._u([
                      {
                        key: "item.fullname",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm._f("toUpper")(item.fullName)) +
                                "\n                    "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.contact",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                        +971" +
                                _vm._s(_vm.getNumber(item.contact)) +
                                "\n                    "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            item.role != "Admin"
                              ? _c(
                                  "v-icon",
                                  {
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.deleteItem(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-close")]
                                )
                              : _vm._e()
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
                                  { attrs: { cols: "12", md: "6" } },
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
                                          return _vm.searchParent.apply(
                                            null,
                                            arguments
                                          )
                                        },
                                        "click:clear": _vm.searchParent
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
                                                    click: _vm.searchParent
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
                                  { attrs: { cols: "12", md: "3" } },
                                  [
                                    _c("v-select", {
                                      attrs: { items: _vm.types, solo: "" },
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", md: "3" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "primary text-none",
                                        attrs: { block: "", large: "" },
                                        on: { click: _vm.createItem }
                                      },
                                      [_vm._v("Create New")]
                                    )
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
                attrs: { length: _vm.sams.teachers.last_page },
                on: { input: _vm.paginate },
                model: {
                  value: _vm.sams.parentFilter.page,
                  callback: function($$v) {
                    _vm.$set(_vm.sams.parentFilter, "page", $$v)
                  },
                  expression: "sams.parentFilter.page"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);