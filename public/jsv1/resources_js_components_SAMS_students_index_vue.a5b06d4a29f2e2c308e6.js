"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SAMS_students_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/students/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/students/index.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'samsStudents',
  data: function data() {
    return {
      search: null,
      headers: [{
        text: "",
        value: "image",
        align: "left",
        sortable: false,
        width: "25%"
      }, {
        text: "Name",
        value: "fullName",
        align: "left",
        sortable: false,
        width: "35%"
      }, {
        text: "Date of Birth",
        value: "date_of_birth",
        align: "left",
        sortable: false,
        width: "15%"
      }, {
        text: "Age",
        value: "age",
        align: "left",
        sortable: false,
        width: "15%"
      }, {
        text: "Gender",
        value: "gender",
        align: "left",
        sortable: false,
        width: "10%"
      }]
    };
  },
  created: function created() {
    var page = parseInt(this.$route.query.page);
    var data = {
      page: page,
      perPage: 20,
      search: null
    };
    this.SAMS_STUDENT_FILTER(data);
    this.paginate(page);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SAMS_STUDENTS"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["SAMS_STUDENT_FILTER"])), {}, {
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
        perPage: 20,
        search: this.search
      };
      this.SAMS_STUDENT_FILTER(data);
      this.SAMS_STUDENTS(data);
    },
    searchStudent: function searchStudent() {
      this.paginate(1);
    },
    get_age: function get_age(e) {
      var currentDate = new Date();
      var birthDate = new Date(e);
      var difference = currentDate - birthDate;
      var age = Math.floor(difference / 31557600000);
      return age;
    },
    goEdit: function goEdit(e) {
      this.$router.push({
        name: 'StudentModal',
        params: {
          id: e.id
        }
      });
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["sams"]))
});

/***/ }),

/***/ "./resources/js/components/SAMS/students/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/SAMS/students/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_25aabf9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=25aabf9b& */ "./resources/js/components/SAMS/students/index.vue?vue&type=template&id=25aabf9b&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/SAMS/students/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_25aabf9b___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_25aabf9b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SAMS/students/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SAMS/students/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SAMS/students/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/students/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SAMS/students/index.vue?vue&type=template&id=25aabf9b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/SAMS/students/index.vue?vue&type=template&id=25aabf9b& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25aabf9b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25aabf9b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25aabf9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=25aabf9b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/students/index.vue?vue&type=template&id=25aabf9b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/students/index.vue?vue&type=template&id=25aabf9b&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/students/index.vue?vue&type=template&id=25aabf9b& ***!
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
            { attrs: { cols: "12", md: "8" } },
            [
              _c(
                "v-card",
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.sams.students.data,
                      "items-per-page": 20,
                      loading: _vm.sams.loading,
                      "server-items-length": _vm.sams.students.total,
                      "mobile-breakpoint": 200,
                      "hide-default-footer": "",
                      "no-results-text": "Currently no customer"
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
                                        "lazy-src": "/" + item.image.link_res,
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
                        key: "item.fullName",
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
                        key: "item.date_of_birth",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm._f("date")(item.date_of_birth)) +
                                "\n                    "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.age",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.get_age(item.date_of_birth)) +
                                "\n                    "
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
                                  { attrs: { cols: "12", md: "12" } },
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
                                          return _vm.searchStudent.apply(
                                            null,
                                            arguments
                                          )
                                        },
                                        "click:clear": _vm.searchStudent
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
                                                    click: _vm.searchStudent
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
                attrs: { length: _vm.sams.students.last_page },
                on: { input: _vm.paginate },
                model: {
                  value: _vm.sams.studentFilter.page,
                  callback: function($$v) {
                    _vm.$set(_vm.sams.studentFilter, "page", $$v)
                  },
                  expression: "sams.studentFilter.page"
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