"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_POS_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "pointOfSale",
  components: {
    search: function search() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_POS_search_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./search.vue */ "./resources/js/components/POS/search.vue"));
    },
    amend: function amend() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_POS_request_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./request.vue */ "./resources/js/components/POS/request.vue"));
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (v) {
      v.redirect();
      v.POS_USERS();
      v.init();
      setTimeout(function () {
        v.$router.replace()["catch"](function (error) {
          if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation to current location')) {
            console.log(error);
          }
        });
        v.SAMS_STUDENT_BY_PARENT_ID({
          id: v.sales.sale.mom.id
        });
      }, 2000);
    });
  },
  data: function data() {
    return {
      notes: null,
      valid: false,
      validPayment: false,
      openPayment: false,
      search: null,
      variant: null,
      item: null,
      permanent: true,
      isDiscount: false,
      percentage: false,
      quantity: 0,
      discount: 0,
      open: false,
      payments: ["Cash", "Card", "Bank", "Cheque", "Telr"],
      loading: false,
      link: false,
      today_date: new Date(),
      printCarts: [],
      printTotal: {},
      isPrint: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["POS_ITEMS", "POST_VARIANTS", "POS_SEARCH", "CART_UPDATE", "CART_DELETE_BY_ID_UPDATE", "POS_USERS", "SAMS_STUDENT_BY_PARENT_ID", "CHECKOUT_PAYMENT_UPDATE", "SALE", "SALES"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["POS_ITEM_REMOVE", "POS_VAIRANT_REMOVE", "POS_SEARCH_BY_SALE_ID"])), {}, {
    redirect: function redirect() {
      var _this = this;

      setTimeout(function () {
        _this.in_array(_this.registration.form.role, ['Admin', 'Reception', 'Manager']) ? '' : _this.$router.push({
          name: "Home"
        });
      }, 1000);
    },
    copyText: function copyText() {
      var linkCopy = document.querySelector('#link-code');
      linkCopy.setAttribute('type', 'text'); // hidden 

      linkCopy.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert('Telr link was copied ' + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }
      /* unselect the range */


      linkCopy.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
      this.close();
    },
    init: function init() {
      this.SALE({
        id: this.$route.params.id
      });
    },
    selectedProd: function selectedProd(e) {
      this.POS_ITEMS({
        type: e.text
      });
    },
    backToPos: function backToPos() {
      this.item = null;
      this.POS_ITEM_REMOVE();
    },
    deleteItem: function deleteItem(e) {
      var _this2 = this;

      this.sales.sale.item.splice(this.sales.sale.item.indexOf(e), 1);
      var data = {
        cartId: e.id,
        user_id: this.registration.form.id,
        items: this.sales.sale.item,
        sale_id: this.$route.params.id
      };
      setTimeout(function () {
        _this2.CART_DELETE_BY_ID_UPDATE(data);
      }, 1000);
    },
    backtoProduct: function backtoProduct() {
      this.variant = null;
      this.POS_VAIRANT_REMOVE();
    },
    openVariant: function openVariant(e) {
      if (e.totalQty > 0) {
        this.POST_VARIANTS({
          id: e.id,
          type: e.type
        });
        this.item = e;
      }
    },
    getPayment: function getPayment(e) {
      var pay = [];
      e.forEach(function (data) {
        pay.push({
          payment: data,
          value: 0
        });
      });
      this.sales.sale.payment = pay;
    },
    selectedVariant: function selectedVariant(e) {
      this.variant = e;
      this.open = true;
    },
    close: function close() {
      this.quantity = 0;
      this.open = false;
    },
    searchProduct: function searchProduct() {
      this.POS_SEARCH({
        search: this.search
      });
    },
    toggleDiscount: function toggleDiscount() {
      this.percentage = !this.percentage;
    },
    addCart: function addCart() {
      var cart = {
        id: 0,
        browser: '',
        ip: '',
        created_at: '',
        type: this.item.type,
        isCart: 1,
        isWeb: false,
        productId: this.item.id,
        updated_at: '',
        status: 'Pending',
        item: {
          image: this.item.image,
          price: this.variant.price,
          productId: this.item.id,
          productName: this.item.name,
          pdoId: this.variant.id,
          slug: this.item.slug,
          pdoName: this.variant.name,
          is_permanent: this.permanent,
          discounts: [],
          type: this.item.type,
          status: 'Pending',
          student: {
            id: 0,
            firstName: null,
            familyName: null
          },
          address: {
            id: 0
          }
        }
      };
      var discount_percentage = 0;
      var discount = 0;
      var quantity = this.quantity;
      var vat = this.vat; // to be finish

      var tax = vat / 100;
      var price_excl = cart.item.price / (tax + 1);
      var total_price_excl = price_excl * quantity;
      var total_price = cart.item.price * quantity;
      var total_tax = total_price_excl * tax;

      if (this.isDiscount) {
        discount = this.percentage ? total_price * (this.discount / 100) : this.discount;
        discount_percentage = this.percentage ? this.discount : discount / total_price * 100;
        total_price -= discount;
        total_price_excl = total_price / (tax + 1);
        total_tax = total_price_excl * tax;
        cart.item.discounts.push({
          name: 'pos',
          value: discount
        });
      }

      cart.item.quantity = quantity;
      cart.item.quantities = this.quantities;
      cart.item.vat = vat;
      cart.item.tax = tax;
      cart.item.price_excl = price_excl;
      cart.item.total_price_excl = total_price_excl;
      cart.item.total_price = total_price;
      cart.item.total_tax = total_tax;
      cart.item.discount_percentage = discount_percentage;
      cart.item.discount = discount;
      var item = {
        user_id: this.sales.sale.user_id,
        sale_id: this.$route.params.id,
        item: cart,
        items: this.sales.sale.item
      };
      this.CART_UPDATE(item);
      this.close();
    },
    in_array: function in_array(value, arr) {
      var status = false;

      for (var i = 0; i < arr.length; i++) {
        var name = arr[i];

        if (name == value) {
          status = true;
          break;
        }
      }

      return status;
    },
    isSearchOpen: function isSearchOpen() {
      this.POS_SEARCH_BY_SALE_ID();
      this.SALES({
        page: 1,
        search: null,
        type: "Sale ID",
        perPage: 20
      });
    },
    pay: function pay() {
      var _this3 = this;

      this.loading = true;
      this.isPrint = false;
      var total = {
        total: this.total,
        tax: this.tax,
        excl: this.excl,
        disc: this.disc
      };
      this.printCarts = this.sales.sale;
      this.printTotal = total;
      var address = null;
      var change = 0;

      if (this.total < this.total_payment) {
        change = this.total_payment - this.total;
        this.pays.map(function (val) {
          if (val.payment == 'Change') {
            val.value = change;
          }

          if (val.payment == 'Cash') {
            if (change > 0) {
              val.value = val.value - change;
            }
          }
        });
      }

      this.CHECKOUT_PAYMENT_UPDATE({
        id: this.sales.sale.id,
        item: this.sales.sale.item,
        payment: this.sales.sale.payment,
        mom: this.sales.sale.mom,
        link: this.isLink,
        notes: this.sales.sale.notes,
        total: total,
        address: address
      }).then(function (result) {
        if (!_this3.sales.sale.link) {
          _this3.$receipt('print');
        }

        if (_this3.checkout.telr) {
          if (_this3.total > 0) {
            _this3.link = true;
          } else {
            _this3.$receipt('print');
          }
        }

        _this3.close();

        _this3.openPayment = false;
        _this3.loading = false;
      });
    },
    printReceipt: function printReceipt() {
      var _this4 = this;

      var total = {
        total: this.total,
        tax: this.tax,
        excl: this.excl,
        disc: this.disc
      };
      this.printCarts = this.sales.sale;
      this.printTotal = total;
      this.isPrint = true;
      setTimeout(function () {
        _this4.$receipt('print');
      }, 1000);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["registration", "types", "pos", "cart", "sams", "checkout", "sales", "setup"])), {}, {
    total: function total() {
      return this.sales.sale.item.reduce(function (total, item) {
        return total + item.item.total_price;
      }, 0);
    },
    tax: function tax() {
      return this.sales.sale.item.reduce(function (total, item) {
        return total + item.item.total_tax;
      }, 0);
    },
    vat: function vat() {
      return Number(this.setup.filter.vat);
    },
    excl: function excl() {
      return this.sales.sale.item.reduce(function (total, item) {
        return total + item.item.total_price_excl;
      }, 0);
    },
    disc: function disc() {
      return this.sales.sale.item.reduce(function (total, item) {
        return total + item.item.discount;
      }, 0);
    },
    quantities: function quantities() {
      if (this.variant) {
        var qty = [];

        for (var i = 0; i < this.variant.quantity; i++) {
          qty.push(i + 1);
        }

        return qty;
      }
    },
    total_payment: function total_payment() {
      return this.sales.sale.payment.reduce(function (total, item) {
        return total + item.value;
      }, 0);
    },
    isLink: function isLink() {
      return this.sales.sale.payment.some(function (e) {
        return e.payment == 'Telr';
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "tbody tr[data-v-3657ffd0]:hover {\n  background-color: transparent !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_3657ffd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_3657ffd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_3657ffd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/POS/edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/POS/edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_3657ffd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=3657ffd0&scoped=true& */ "./resources/js/components/POS/edit.vue?vue&type=template&id=3657ffd0&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/POS/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _edit_vue_vue_type_style_index_0_id_3657ffd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true& */ "./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_3657ffd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_3657ffd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3657ffd0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/POS/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/POS/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/POS/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_3657ffd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=style&index=0&id=3657ffd0&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/POS/edit.vue?vue&type=template&id=3657ffd0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/POS/edit.vue?vue&type=template&id=3657ffd0&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3657ffd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3657ffd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3657ffd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=3657ffd0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=template&id=3657ffd0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=template&id=3657ffd0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/POS/edit.vue?vue&type=template&id=3657ffd0&scoped=true& ***!
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
    "div",
    [
      _c(
        "v-app-bar",
        [
          _c("v-app-bar-nav-icon"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "", to: { name: "POS" } } },
            [_c("v-icon", [_vm._v("mdi-arrow-left")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" }, on: { click: _vm.isSearchOpen } },
            [_c("v-icon", [_vm._v("mdi-magnify")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "start", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Search",
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
                                            on: { click: _vm.searchProduct }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { left: "" } },
                                              [
                                                _vm._v(
                                                  "\n                                        mdi-magnify\n                                        "
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
                          _vm.pos.items.length == 0
                            ? _c(
                                "v-card",
                                {
                                  staticClass: "overflow-x-auto",
                                  attrs: { "max-height": "600", flat: "" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          attrs: {
                                            align: "start",
                                            justify: "start"
                                          }
                                        },
                                        _vm._l(_vm.types, function(
                                          type,
                                          index
                                        ) {
                                          return _c(
                                            "v-col",
                                            {
                                              key: index,
                                              attrs: { cols: "12", md: "4" }
                                            },
                                            [
                                              _c(
                                                "v-card",
                                                {
                                                  attrs: {
                                                    disabled:
                                                      _vm.sales.sale.status !=
                                                      "Pending"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.selectedProd(
                                                        type
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-card-text", [
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "text-center text-subtitle-1 font-weight-bold"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(type.text)
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm.pos.items.length > 0 &&
                              _vm.pos.variants.length == 0
                            ? _c(
                                "v-card",
                                {
                                  staticClass: "overflow-x-auto",
                                  attrs: { "max-height": "600", flat: "" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "4" } },
                                            [
                                              _c(
                                                "v-card",
                                                {
                                                  staticClass:
                                                    "d-flex justify-center align-center",
                                                  attrs: {
                                                    dark: "",
                                                    color: "purple",
                                                    height: "80"
                                                  },
                                                  on: { click: _vm.backToPos }
                                                },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center white--text"
                                                    },
                                                    [_vm._v("Back")]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.pos.items, function(
                                            item,
                                            index
                                          ) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: index,
                                                attrs: { cols: "12", md: "4" }
                                              },
                                              [
                                                _c(
                                                  "v-card",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-center align-center",
                                                    attrs: {
                                                      dark: "",
                                                      color:
                                                        item.totalQty > 0
                                                          ? "primary"
                                                          : "default",
                                                      height: "80"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.openVariant(
                                                          item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "text-center white--text"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toUpper")(
                                                              item.name
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _c(
                                "v-card",
                                {
                                  staticClass: "overflow-x-auto",
                                  attrs: { "max-height": "600", flat: "" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "4" } },
                                            [
                                              _c(
                                                "v-card",
                                                {
                                                  staticClass:
                                                    "d-flex justify-center align-center",
                                                  attrs: {
                                                    dark: "",
                                                    color: "purple",
                                                    height: "80"
                                                  },
                                                  on: {
                                                    click: _vm.backtoProduct
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-center white--text"
                                                    },
                                                    [_vm._v("Back")]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.pos.variants, function(
                                            variant,
                                            index
                                          ) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: index,
                                                attrs: { cols: "12", md: "4" }
                                              },
                                              [
                                                _c(
                                                  "v-card",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-center align-center",
                                                    attrs: {
                                                      dark: "",
                                                      color:
                                                        variant.quantity > 0
                                                          ? "primary"
                                                          : "default",
                                                      height: "80",
                                                      disabled:
                                                        variant.quantity > 0
                                                          ? false
                                                          : true
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.selectedVariant(
                                                          variant
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "text-center white--text"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toUpper")(
                                                              variant.name
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          })
                                        ],
                                        2
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
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
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
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              Object.keys(_vm.sales.sale.mom).length
                                ? _c(
                                    "v-card-text",
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          label: "Select Customer",
                                          items: _vm.pos.users,
                                          "item-text": "fullName",
                                          "item-value": "id",
                                          "append-icon": "*",
                                          rules: [
                                            function(v) {
                                              return v.id != 0 || "required"
                                            }
                                          ],
                                          solo: "",
                                          "return-object": "",
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.sales.sale.mom.id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.sales.sale.mom,
                                              "id",
                                              $$v
                                            )
                                          },
                                          expression: "sales.sale.mom.id"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _vm.sales.sale.link
                                    ? _c("v-simple-table", {
                                        attrs: { width: "100%" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function() {
                                                return [
                                                  _c("thead", [
                                                    _c("tr", [
                                                      _c(
                                                        "th",
                                                        {
                                                          attrs: {
                                                            width: "80%"
                                                          }
                                                        },
                                                        [
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              readonly: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sales.sale
                                                                  .link,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.sales
                                                                    .sale,
                                                                  "link",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "sales.sale.link"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          attrs: {
                                                            width: "20%"
                                                          }
                                                        },
                                                        [
                                                          _c("input", {
                                                            attrs: {
                                                              type: "hidden",
                                                              id: "link-code"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.sales.sale
                                                                  .link
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "text-none",
                                                              on: {
                                                                click:
                                                                  _vm.copyText
                                                              }
                                                            },
                                                            [_vm._v("copy")]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ])
                                                  ])
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          false,
                                          521977719
                                        )
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.sales.sale.status != "Pending"
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass: "mt-2 success",
                                          attrs: { block: "" },
                                          on: { click: _vm.printReceipt }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Print Receipt\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("v-simple-table", {
                                    staticClass: "overflow-x-auto",
                                    attrs: {
                                      height: "450",
                                      width: "100%",
                                      "fixed-header": ""
                                    },
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
                                                            _vm._s(
                                                              _vm.sales.sale.id
                                                            ) +
                                                            " - " +
                                                            _vm._s(
                                                              _vm.sales.sale
                                                                .status
                                                            )
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
                                                      "\n                                                Total\n                                            "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(
                                                _vm.sales.sale.item,
                                                function(cart, index) {
                                                  return _c(
                                                    "tr",
                                                    { key: index },
                                                    [
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "text-subtitle-1 font-weight-bold black--text",
                                                              attrs: {
                                                                href:
                                                                  "/" +
                                                                  cart.type +
                                                                  "/" +
                                                                  cart.item
                                                                    .slug +
                                                                  "/pdo/" +
                                                                  cart.item
                                                                    .pdoId,
                                                                target: "_blank"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "toUpper"
                                                                  )(
                                                                    cart.item
                                                                      .productName
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
                                                                      _vm._f(
                                                                        "toUpper"
                                                                      )(
                                                                        cart
                                                                          .item
                                                                          .pdoName
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
                                                            {
                                                              staticClass:
                                                                "text-caption"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "toUpper"
                                                                  )(cart.type)
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("br"),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "text-caption",
                                                              attrs: {
                                                                for: "quantity"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Qty: " +
                                                                  _vm._s(
                                                                    cart.item
                                                                      .quantity
                                                                  )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("v-select", {
                                                            staticClass:
                                                              "student",
                                                            attrs: {
                                                              items:
                                                                _vm.sams
                                                                  .studentByParentId,
                                                              "append-icon":
                                                                "*",
                                                              "item-text":
                                                                "firstName",
                                                              "item-value":
                                                                "id",
                                                              label:
                                                                "Select Child",
                                                              rules: [
                                                                function(v) {
                                                                  return (
                                                                    v.id != 0 ||
                                                                    "required"
                                                                  )
                                                                }
                                                              ],
                                                              solo: "",
                                                              "hide-details":
                                                                "",
                                                              "return-object":
                                                                "",
                                                              disabled:
                                                                _vm.sales.sale
                                                                  .status !=
                                                                "Pending"
                                                            },
                                                            model: {
                                                              value:
                                                                cart.item
                                                                  .student,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  cart.item,
                                                                  "student",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "cart.item.student"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "mr-3 text-none red--text",
                                                              attrs: {
                                                                text: "",
                                                                "x-small": "",
                                                                disabled:
                                                                  _vm.sales.sale
                                                                    .status !=
                                                                  "Pending"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.deleteItem(
                                                                    cart
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Delete")]
                                                          )
                                                        ],
                                                        1
                                                      ),
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
                                                                _vm._f(
                                                                  "currency"
                                                                )(
                                                                  cart.item
                                                                    .total_price
                                                                )
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c("td", [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "text-left black--text"
                                                    },
                                                    [
                                                      _c("span", [
                                                        _vm._v("Subtotal "),
                                                        _c("br")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v("Tax "),
                                                        _c("br")
                                                      ]),
                                                      _vm._v(" "),
                                                      _vm.disc > 0
                                                        ? _c("span", [
                                                            _vm._v("Discount "),
                                                            _c("br")
                                                          ])
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v("Total")
                                                      ])
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "black--text text-right font-weight-bold"
                                                    },
                                                    [
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("currency")(
                                                              _vm.excl
                                                            )
                                                          ) + " "
                                                        ),
                                                        _c("br")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("currency")(
                                                              _vm.tax
                                                            )
                                                          ) + " "
                                                        ),
                                                        _c("br")
                                                      ]),
                                                      _vm._v(" "),
                                                      _vm.disc > 0
                                                        ? _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm._f(
                                                                  "currency"
                                                                )(_vm.disc)
                                                              ) + " "
                                                            ),
                                                            _c("br")
                                                          ])
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("currency")(
                                                              _vm.total
                                                            )
                                                          ) + " "
                                                        ),
                                                        _c("br")
                                                      ])
                                                    ]
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td"),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-combobox", {
                                                      attrs: {
                                                        label: "Select Payment",
                                                        items: _vm.payments,
                                                        "item-text": "payment",
                                                        multiple: ""
                                                      },
                                                      on: {
                                                        change: _vm.getPayment
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.sales.sale.pay,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.sales.sale,
                                                            "pay",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "sales.sale.pay"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td"),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          block: "",
                                                          disabled:
                                                            _vm.sales.sale
                                                              .status !=
                                                              "Pending" ||
                                                            _vm.sales.sale.item
                                                              .length == 0 ||
                                                            _vm.sales.sale.pay
                                                              .length == 0 ||
                                                            !_vm.valid
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.openPayment = true
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                        Proceed to payment\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ])
                                            ])
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-overlay",
                                    {
                                      attrs: {
                                        absolute: "",
                                        value: _vm.cart.loading
                                      }
                                    },
                                    [
                                      _c("v-progress-linear", {
                                        attrs: {
                                          color: "deep-purple accent-4",
                                          indeterminate: "",
                                          rounded: "",
                                          height: "6"
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
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.open
                ? _c(
                    "v-dialog",
                    {
                      attrs: { width: "300", persistent: "" },
                      model: {
                        value: _vm.open,
                        callback: function($$v) {
                          _vm.open = $$v
                        },
                        expression: "open"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { flat: "" } },
                            [
                              _c("v-toolbar-title"),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-icon", { on: { click: _vm.close } }, [
                                _vm._v("mdi-close")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "mt-6 text-center text-h6 font-weight-bold"
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm._f("toUpper")(_vm.item.name)) +
                                      " - " +
                                      _vm._s(
                                        _vm._f("toUpper")(_vm.variant.name)
                                      ) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-center text-subtitle-1" },
                                [
                                  _vm._v(
                                    " Price: " +
                                      _vm._s(
                                        _vm._f("currency")(_vm.variant.price)
                                      ) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "Select Quantity",
                                  items: _vm.quantities,
                                  solo: ""
                                },
                                model: {
                                  value: _vm.quantity,
                                  callback: function($$v) {
                                    _vm.quantity = $$v
                                  },
                                  expression: "quantity"
                                }
                              }),
                              _vm._v(" "),
                              _vm.item.type == "Lessons"
                                ? _c("v-checkbox", {
                                    attrs: { label: "Permanent" },
                                    model: {
                                      value: _vm.permanent,
                                      callback: function($$v) {
                                        _vm.permanent = $$v
                                      },
                                      expression: "permanent"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-checkbox", {
                                attrs: { label: "Add Discount?" },
                                model: {
                                  value: _vm.isDiscount,
                                  callback: function($$v) {
                                    _vm.isDiscount = $$v
                                  },
                                  expression: "isDiscount"
                                }
                              }),
                              _vm._v(" "),
                              _vm.isDiscount
                                ? _c("v-text-field", {
                                    attrs: {
                                      label: "Enter Discount",
                                      type: "number",
                                      "append-icon": _vm.percentage
                                        ? "mdi-ticket-percent"
                                        : "mdi-currency-php"
                                    },
                                    on: { "click:append": _vm.toggleDiscount },
                                    model: {
                                      value: _vm.discount,
                                      callback: function($$v) {
                                        _vm.discount = _vm._n($$v)
                                      },
                                      expression: "discount"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "text-none primary",
                                  attrs: {
                                    disabled: _vm.quantity > 0 ? false : true,
                                    block: ""
                                  },
                                  on: { click: _vm.addCart }
                                },
                                [
                                  _vm._v(
                                    "\n                            Add to Cart\n                        "
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
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { width: "400" },
                  model: {
                    value: _vm.openPayment,
                    callback: function($$v) {
                      _vm.openPayment = $$v
                    },
                    expression: "openPayment"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        {
                          staticClass: "primary",
                          attrs: { flat: "", dark: "" }
                        },
                        [
                          _c("v-toolbar-title", [
                            _vm._v(
                              "\n                            Add Payment & Notes\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              ;("#")
                            }
                          },
                          model: {
                            value: _vm.validPayment,
                            callback: function($$v) {
                              _vm.validPayment = $$v
                            },
                            expression: "validPayment"
                          }
                        },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("v-textarea", {
                                attrs: {
                                  label: "Notes",
                                  "append-icon": "*",
                                  solo: "",
                                  rules: [
                                    function(v) {
                                      return !!v || "required"
                                    }
                                  ]
                                },
                                model: {
                                  value: _vm.sales.sale.notes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.sales.sale, "notes", $$v)
                                  },
                                  expression: "sales.sale.notes"
                                }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.sales.sale.payment, function(
                                pay,
                                index
                              ) {
                                return [
                                  _c(
                                    "div",
                                    { key: index },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: pay.payment,
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
                                    ],
                                    1
                                  )
                                ]
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
                              attrs: {
                                type: "submit",
                                disabled:
                                  !_vm.validPayment ||
                                  _vm.total_payment < _vm.total,
                                loading: _vm.loading
                              },
                              on: { click: _vm.pay }
                            },
                            [
                              _vm._v(
                                "\n                            Pay\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("input", {
                            attrs: { type: "text", id: "link-code" },
                            domProps: { value: _vm.sales.sale.link }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-none",
                              on: { click: _vm.copyText }
                            },
                            [_vm._v("copy")]
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
          _c(
            "v-dialog",
            {
              attrs: { width: "400", persistent: "" },
              model: {
                value: _vm.link,
                callback: function($$v) {
                  _vm.link = $$v
                },
                expression: "link"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { staticClass: "primary", attrs: { flat: "", dark: "" } },
                    [
                      _c("v-toolbar-title", [
                        _vm._v(
                          "\n                        Telr Link\n                    "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.sales.sale.link) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "text-none info",
                          on: {
                            click: function($event) {
                              _vm.link = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Close\n                    "
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
          ),
          _vm._v(" "),
          _c("search"),
          _vm._v(" "),
          _c("amend"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-none d-print-block", attrs: { id: "print" } },
            [
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v("StepUp Academy")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v("113 Apex Atrium Motor City, Dubai, UAE")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v("04 453 4360")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v("https://stepup.ae")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v("TRN: 1002540945100003")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v("Tax Invoice")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v(
                  "\n                Invoice #:  " +
                    _vm._s(_vm.printCarts.id) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticStyle: { "text-align": "center" } }, [
                _vm._v(
                  "\n                Date Purchased: " +
                    _vm._s(
                      _vm._f("dateAndTime")(
                        _vm.isPrint ? _vm.printCarts.updated_at : _vm.today_date
                      )
                    ) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("v-simple-table", {
                attrs: { width: "100%", "fixed-header": "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                            Total\n                        "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.printCarts.item, function(cart, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toUpper")(cart.item.productName)
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
                                          _vm._f("toUpper")(cart.item.pdoName)
                                        )
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(_vm._s(_vm._f("toUpper")(cart.type)))
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "text-caption",
                                    attrs: { for: "quantity" }
                                  },
                                  [_vm._v("Qty: " + _vm._s(cart.item.quantity))]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-caption" }, [
                                  _vm._v(
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
                                      )
                                  )
                                ])
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
                        ),
                        _vm._v(" "),
                        _c("tfoot", [
                          _c("tr", [
                            _c("td", [
                              _c(
                                "p",
                                { staticClass: "text-left black--text" },
                                [
                                  _c("span", [_vm._v("Subtotal "), _c("br")]),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Tax "), _c("br")]),
                                  _vm._v(" "),
                                  _vm.printTotal.disc > 0
                                    ? _c("span", [
                                        _vm._v("Discount "),
                                        _c("br")
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Total")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "black--text text-right font-weight-bold"
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("currency")(_vm.printTotal.excl)
                                      ) + " "
                                    ),
                                    _c("br")
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("currency")(_vm.printTotal.tax)
                                      ) + " "
                                    ),
                                    _c("br")
                                  ]),
                                  _vm._v(" "),
                                  _vm.printTotal.disc > 0
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("currency")(
                                              _vm.printTotal.disc
                                            )
                                          ) + " "
                                        ),
                                        _c("br")
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("currency")(_vm.printTotal.total)
                                      ) + " "
                                    ),
                                    _c("br")
                                  ])
                                ]
                              )
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);