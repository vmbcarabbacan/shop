"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SAMS_parents_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'samsParents',
  components: {
    myChild: function myChild() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_SAMS_parents_children_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./children.vue */ "./resources/js/components/SAMS/parents/children.vue"));
    }
  },
  data: function data() {
    return {
      search: null,
      headers: [{
        text: "Name",
        value: "fullName",
        align: "left",
        sortable: false,
        width: "50%"
      }, {
        text: "Contact Number",
        value: "contact",
        align: "left",
        sortable: false,
        width: "40%"
      }, {
        text: "",
        value: "action",
        align: "left",
        sortable: false,
        width: "10%"
      }],
      type: 'Name',
      types: ['Name', 'Email', 'Number'],
      page: 1,
      openTransaction: false,
      openTransactionItem: false,
      user_id: null,
      isCredit: false,
      parent_id: null,
      open: false
    };
  },
  created: function created() {
    var page = parseInt(this.$route.query.page);
    var data = {
      page: page,
      perPage: 20,
      search: null,
      role: this.$route.params.role
    };
    this.SAMS_PARENT_FILTER(data);
    this.paginate(page);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SAMS_PARENTS", "SAMS_VERIFY_EMAIL", "SAMS_PARENT_DELETE", "SALES", "SALE", "SAMS_GET_PARENT_CREDITS", "SAMS_UPDATE_PARENT_CREDITS", "SAMS_PARENT_CHILDREN"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["SAMS_PARENT_FILTER", "SAMS_PARENT_EDIT", "SALES_M", "SALE_M", "SAMS_PARENT_CREDITS", "SAMS_PARENT_CHILDREN_M"])), {}, {
    getNumber: function getNumber(number) {
      return number.length > 9 ? number.slice(number.length - 9) : number;
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
        perPage: 20,
        search: this.search,
        role: this.$route.params.role,
        filter: this.type
      };
      this.SAMS_PARENT_FILTER(data);
      this.SAMS_PARENTS(data);
    },
    viewChild: function viewChild(e) {
      this.SAMS_PARENT_CHILDREN_M([]);
      this.SAMS_PARENT_CHILDREN({
        id: e.id
      });
      this.closeViewChild();
    },
    closeViewChild: function closeViewChild() {
      this.open = !this.open;
    },
    searchParent: function searchParent() {
      this.paginate(1);
    },
    goEdit: function goEdit(e) {
      var _this = this;

      var email = {
        email: e.email
      };
      this.SAMS_VERIFY_EMAIL(email).then(function (result) {
        _this.SAMS_PARENT_EDIT(true);

        _this.$router.push({
          name: 'ParentModal',
          params: {
            role: 'User'
          }
        });
      });
    },
    deleteItem: function deleteItem(e) {
      this.SAMS_PARENT_DELETE({
        id: e.id
      });
    },
    viewHistory: function viewHistory(e) {
      this.user_id = e.id;
      this.historyPaginate(1);
    },
    addCredit: function addCredit(e) {
      var _this2 = this;

      this.parent_id = e.id;
      this.SAMS_GET_PARENT_CREDITS({
        id: e.id
      }).then(function (result) {
        _this2.isCredit = true;
      });
    },
    submitCredit: function submitCredit() {
      var _this3 = this;

      this.SAMS_UPDATE_PARENT_CREDITS({
        id: this.parent_id,
        value: this.sams.credits
      }).then(function (result) {
        _this3.closeCredit();
      });
    },
    historyPaginate: function historyPaginate(e) {
      var _this4 = this;

      this.SALES({
        page: e,
        search: this.user_id,
        type: 'User ID',
        perPage: 20
      }).then(function (result) {
        _this4.openTransaction = true;
      });
    },
    checkSaleById: function checkSaleById(e) {
      var _this5 = this;

      this.SALE({
        id: e
      }).then(function (result) {
        _this5.openTransactionItem = true;
      });
    },
    closeCredit: function closeCredit() {
      this.SAMS_PARENT_CREDITS(null);
      this.isCredit = false;
      this.parent_id = null;
    },
    closeTransaction: function closeTransaction() {
      this.SALES_M([]);
      this.openTransaction = false;
    },
    closeTransactionItem: function closeTransactionItem() {
      this.SALE_M({
        mom: {},
        payment: [],
        item: [],
        total: {},
        address: null,
        notes: null,
        telr: null,
        pay: []
      });
      this.openTransactionItem = false;
    },
    // goEdit(e) {
    //     this.$router.push({name: 'StudentModal', params: {id: e}})
    // },
    createItem: function createItem() {
      this.SAMS_PARENT_EDIT(false);
      this.$router.push({
        name: 'ParentModal',
        params: {
          role: 'User'
        }
      });
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["sams", "sales"]))
});

/***/ }),

/***/ "./resources/js/components/SAMS/parents/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/SAMS/parents/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_08670efc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=08670efc& */ "./resources/js/components/SAMS/parents/index.vue?vue&type=template&id=08670efc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/SAMS/parents/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_08670efc___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_08670efc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SAMS/parents/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SAMS/parents/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SAMS/parents/index.vue?vue&type=template&id=08670efc&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/index.vue?vue&type=template&id=08670efc& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08670efc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08670efc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08670efc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=08670efc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/index.vue?vue&type=template&id=08670efc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/index.vue?vue&type=template&id=08670efc&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/index.vue?vue&type=template&id=08670efc& ***!
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
                      items: _vm.sams.parents.data,
                      "items-per-page": 20,
                      loading: _vm.sams.loading,
                      "server-items-length": _vm.sams.parents.total,
                      "mobile-breakpoint": 200,
                      "hide-default-footer": "",
                      "no-results-text": "Currently no customer"
                    },
                    on: { "click:row": _vm.goEdit },
                    scopedSlots: _vm._u([
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
                            _c(
                              "v-icon",
                              {
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.viewHistory(item)
                                  }
                                }
                              },
                              [_vm._v("mdi-receipt")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.addCredit(item)
                                  }
                                }
                              },
                              [_vm._v("mdi-credit-card-plus")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.viewChild(item)
                                  }
                                }
                              },
                              [_vm._v("mdi-eye")]
                            ),
                            _vm._v(" "),
                            _c(
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
                attrs: { length: _vm.sams.parents.last_page },
                on: { input: _vm.paginate },
                model: {
                  value: _vm.sams.parentFilter.page,
                  callback: function($$v) {
                    _vm.$set(_vm.sams.parentFilter, "page", $$v)
                  },
                  expression: "sams.parentFilter.page"
                }
              }),
              _vm._v(" "),
              _c(
                "v-navigation-drawer",
                {
                  attrs: {
                    app: "",
                    fixed: "",
                    absolute: "",
                    temporary: "",
                    right: "",
                    width: "500"
                  },
                  model: {
                    value: _vm.openTransaction,
                    callback: function($$v) {
                      _vm.openTransaction = $$v
                    },
                    expression: "openTransaction"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-text",
                        [
                          _c("v-simple-table", {
                            attrs: { "fixed-header": "" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function() {
                                  return [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Transaction#\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Status\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Total\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                    Date\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" })
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.sales.sales.data, function(
                                        sale,
                                        index
                                      ) {
                                        return _c(
                                          "tr",
                                          {
                                            key: index,
                                            style:
                                              "background-color: #" +
                                              (sale.status == "Completed"
                                                ? "00cc00"
                                                : "ff0000") +
                                              "; color: #fff"
                                          },
                                          [
                                            _c("td", [_vm._v(_vm._s(sale.id))]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(sale.status))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(sale.total))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("dateAndTime")(
                                                    sale.purchase_date
                                                  )
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    attrs: { dark: "" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.checkSaleById(
                                                          sale.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                        mdi-magnify\n                                    "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      }),
                                      0
                                    )
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("v-pagination", {
                        attrs: {
                          length: _vm.sales.sales.last_page,
                          circle: ""
                        },
                        on: { input: _vm.historyPaginate },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-bottom-sheet",
                {
                  attrs: { "hide-overlay": "", scrollable: "" },
                  on: { "click:outside": _vm.closeTransactionItem },
                  model: {
                    value: _vm.openTransactionItem,
                    callback: function($$v) {
                      _vm.openTransactionItem = $$v
                    },
                    expression: "openTransactionItem"
                  }
                },
                [
                  _c("v-simple-table", {
                    attrs: { width: "100%", "fixed-header": "" },
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
                                    staticClass: "text-left",
                                    attrs: { width: "60%" }
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-weight-bold red--text"
                                      },
                                      [
                                        _vm._v(
                                          "Transacction# " +
                                            _vm._s(_vm.sales.sale.id) +
                                            " - " +
                                            _vm._s(_vm.sales.sale.status)
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "text-right",
                                    attrs: { width: "40%" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Total\n                                "
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.sales.sale.item, function(
                                cart,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "text-subtitle-1 font-weight-bold black--text"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("toUpper")(
                                              cart.item.productName
                                            )
                                          ) + " - "
                                        ),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-caption font-weight-thin"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("toUpper")(
                                                  cart.item.pdoName
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "text-caption" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm._f("toUpper")(cart.type))
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "text-caption",
                                        attrs: { for: "quantity" }
                                      },
                                      [
                                        _vm._v(
                                          "Qty: " + _vm._s(cart.item.quantity)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "text-caption font-weight-black",
                                        attrs: {
                                          href:
                                            "/auth/sams/students/modal/" +
                                            cart.item.student.id
                                        }
                                      },
                                      [
                                        _vm._v(
                                          " Student: " +
                                            _vm._s(
                                              _vm._f("toUpper")(
                                                cart.item.student.firstName
                                              )
                                            ) +
                                            " " +
                                            _vm._s(
                                              _vm._f("toUpper")(
                                                cart.item.student.familyName
                                              )
                                            ) +
                                            " "
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "red--text text-right font-weight-bold"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(
                                              cart.item.total_price
                                            )
                                          )
                                        )
                                      ]
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
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { width: "300", persistent: "" },
                  on: { "click:outside": _vm.closeCredit },
                  model: {
                    value: _vm.isCredit,
                    callback: function($$v) {
                      _vm.isCredit = $$v
                    },
                    expression: "isCredit"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "", dark: "", color: "success" } },
                        [
                          _c("v-toolbar-title", [
                            _vm._v(
                              "\n                            Add Credit\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-text-field", {
                            attrs: { label: "Current Credit", type: "number" },
                            model: {
                              value: _vm.sams.credits,
                              callback: function($$v) {
                                _vm.$set(_vm.sams, "credits", _vm._n($$v))
                              },
                              expression: "sams.credits"
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
                              on: { click: _vm.submitCredit }
                            },
                            [_vm._v("Add")]
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
              _vm.open
                ? _c("myChild", {
                    attrs: { open: _vm.open },
                    on: { closeModal: _vm.closeViewChild }
                  })
                : _vm._e()
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