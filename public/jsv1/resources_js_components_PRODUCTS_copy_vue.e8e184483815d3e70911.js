"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PRODUCTS_copy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "authProductAdd",
  components: {
    productImage: function productImage() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_PRODUCTS_products_image_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./products/image.vue */ "./resources/js/components/PRODUCTS/products/image.vue"));
    },
    productRelatedUniforms: function productRelatedUniforms() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_PRODUCTS_products_uniforms_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./products/uniforms.vue */ "./resources/js/components/PRODUCTS/products/uniforms.vue"));
    },
    productRelatedLessons: function productRelatedLessons() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_PRODUCTS_products_lessons_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./products/lessons.vue */ "./resources/js/components/PRODUCTS/products/lessons.vue"));
    },
    categoryModal: function categoryModal() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_PRODUCTS_categories_modal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./categories/modal.vue */ "./resources/js/components/PRODUCTS/categories/modal.vue"));
    }
  },
  created: function created() {
    var slug = {
      slug: this.$route.params.slug
    };
    this.PRODUCT_FILTER_BY_SLUG(slug);
    this.PRODUCT_SUCCESS(null);
    this.PRODUCT_ERROR(null);
  },
  data: function data() {
    return {
      success: null,
      valid: false,
      status: [{
        text: 'Draft',
        value: 0
      }, {
        text: 'Publish',
        value: 1
      }],
      soos: [{
        text: 'No',
        value: 0
      }, {
        text: 'Yes',
        value: 1
      }]
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["IMAGES", "CATEGORY_FILTER_BY_TYPE", "PRODUCT_COPY", "PRODUCT_FILTER_BY_SLUG", "PRODUCTS"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["IMAGE_OPEN", "CATEGORY_FORM", "CATEGORY_OPEN", "PRODUCT", "IMAGE_FILTER", "PRODUCT_SUCCESS", "PRODUCT_ERROR", "PRODUCT_FILTER", "PRODUCT_UNIFORM_OPEN", "PRODUCT_LESSON_OPEN"])), {}, {
    openMedia: function openMedia() {
      this.IMAGE_OPEN(true);
      var filter = {
        page: 1,
        perPage: 20
      };
      this.IMAGE_FILTER(filter);
      this.IMAGES(this.image.filter);
    },
    selectedType: function selectedType(e) {
      var type = {
        type: e
      };
      this.CATEGORY_FILTER_BY_TYPE(type);
    },
    createCategory: function createCategory() {
      var form = {
        id: 0,
        name: null,
        type: "Uniforms"
      };
      this.CATEGORY_FORM(form);
      this.CATEGORY_OPEN(true);
    },
    addVariant: function addVariant() {
      this.product.product.variants.push({
        id: 0,
        name: null,
        quantity: 0,
        price: 0,
        isVisible: 1
      });
    },
    saveProduct: function saveProduct() {
      var _this = this;

      this.product.product.id = 0;
      var form = {
        form: this.product.product
      };
      this.PRODUCT_COPY(form).then(function (result) {
        _this.$router.push({
          name: 'ProductView'
        });
      });
    },
    openUniforms: function openUniforms() {
      var filter = {
        search: null,
        type: "Uniforms",
        page: 1,
        perPage: 20
      };
      this.PRODUCT_FILTER(filter);
      this.PRODUCTS(this.product.filter);
      this.PRODUCT_UNIFORM_OPEN(true);
    },
    openLessons: function openLessons() {
      var filter = {
        search: null,
        type: "Lessons",
        page: 1,
        perPage: 20
      };
      this.PRODUCT_FILTER(filter);
      this.PRODUCTS(this.product.filter);
      this.PRODUCT_LESSON_OPEN(true);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["image", "categories", "product", "types"]))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".v-text-field.v-text-field--enclosed[data-v-d8d48df6] {\n  margin: 0;\n  padding: 0;\n}\n.v-input--selection-controls[data-v-d8d48df6] {\n  margin: 0px;\n  padding: 0px;\n  margin-top: -15px;\n}\n.slide-fade-enter-active[data-v-d8d48df6] {\n  transition: all 0.3s ease;\n}\n.slide-fade-leave-active[data-v-d8d48df6] {\n  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-d8d48df6], .slide-fade-leave-to[data-v-d8d48df6] {\n  transform: translateX(10px);\n  opacity: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_style_index_0_id_d8d48df6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_style_index_0_id_d8d48df6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_style_index_0_id_d8d48df6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/PRODUCTS/copy.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/PRODUCTS/copy.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copy_vue_vue_type_template_id_d8d48df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy.vue?vue&type=template&id=d8d48df6&scoped=true& */ "./resources/js/components/PRODUCTS/copy.vue?vue&type=template&id=d8d48df6&scoped=true&");
/* harmony import */ var _copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy.vue?vue&type=script&lang=js& */ "./resources/js/components/PRODUCTS/copy.vue?vue&type=script&lang=js&");
/* harmony import */ var _copy_vue_vue_type_style_index_0_id_d8d48df6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true& */ "./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _copy_vue_vue_type_template_id_d8d48df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _copy_vue_vue_type_template_id_d8d48df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d8d48df6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PRODUCTS/copy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PRODUCTS/copy.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/copy.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./copy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_style_index_0_id_d8d48df6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=style&index=0&id=d8d48df6&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/PRODUCTS/copy.vue?vue&type=template&id=d8d48df6&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/PRODUCTS/copy.vue?vue&type=template&id=d8d48df6&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_template_id_d8d48df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_template_id_d8d48df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_copy_vue_vue_type_template_id_d8d48df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./copy.vue?vue&type=template&id=d8d48df6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=template&id=d8d48df6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=template&id=d8d48df6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PRODUCTS/copy.vue?vue&type=template&id=d8d48df6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            "div",
            [
              _c(
                "transition",
                { attrs: { name: "slide-fade" } },
                [
                  _c(
                    "v-alert",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.product.success,
                          expression: "product.success"
                        }
                      ],
                      attrs: { border: "left", type: "success" }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.product.success) +
                          "\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                { attrs: { name: "slide-fade" } },
                [
                  _c(
                    "v-alert",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.product.error,
                          expression: "product.error"
                        }
                      ],
                      attrs: { border: "left", type: "error" }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.product.error) +
                          "\n                "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          Object.keys(_vm.product.product).length > 0
            ? _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c(
                        "v-row",
                        [
                          _vm.$vuetify.breakpoint.smAndDown
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "text-caption blackk--text",
                                          attrs: { to: { name: "ProductView" } }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { "x-small": "" } },
                                            [_vm._v("mdi-arrow-left")]
                                          ),
                                          _vm._v(
                                            " Go back to view\n                            "
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-title",
                                        [
                                          _c(
                                            "v-subheader",
                                            { staticClass: "text-h6" },
                                            [_vm._v("Status")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              solo: "",
                                              items: _vm.status
                                            },
                                            model: {
                                              value:
                                                _vm.product.product.isVisible,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product.product,
                                                  "isVisible",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "product.product.isVisible"
                                            }
                                          })
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
                                              staticClass: "text-none success",
                                              attrs: {
                                                block: "",
                                                disabled: !_vm.valid,
                                                loading: _vm.product.loading
                                              },
                                              on: { click: _vm.saveProduct }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    Save Product\n                                "
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
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _vm.$vuetify.breakpoint.mdAndUp
                                    ? _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "text-caption blackk--text",
                                          attrs: { to: { name: "ProductView" } }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { "x-small": "" } },
                                            [_vm._v("mdi-arrow-left")]
                                          ),
                                          _vm._v(
                                            " Go back to view\n                            "
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "v-subheader",
                                        { staticClass: "text-h6" },
                                        [_vm._v("Title")]
                                      ),
                                      _vm._v(" "),
                                      Object.keys(_vm.product.product).length >
                                        0 &&
                                      _vm.product.product.type == "Uniforms" &&
                                      _vm.product.product.pdo
                                        ? _c(
                                            "a",
                                            {
                                              staticClass:
                                                "text-caption black--text",
                                              attrs: {
                                                href:
                                                  "/" +
                                                  _vm.product.product.type +
                                                  "/" +
                                                  _vm.product.product.slug +
                                                  "/pdo/" +
                                                  _vm.product.product.pdo.id,
                                                target: "_blank"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(" mdi-eye ")
                                              ])
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Product Name",
                                          rules: [
                                            function(v) {
                                              return (
                                                !!v ||
                                                "Product name is required"
                                              )
                                            }
                                          ],
                                          solo: ""
                                        },
                                        model: {
                                          value: _vm.product.product.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product.product,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "product.product.name"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("quill-editor", {
                                        ref: "myQuillEditor",
                                        model: {
                                          value: _vm.product.product.body,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product.product,
                                              "body",
                                              $$v
                                            )
                                          },
                                          expression: "product.product.body"
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
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "v-subheader",
                                        { staticClass: "text-h6" },
                                        [_vm._v("Media")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "primary",
                                          on: { click: _vm.openMedia }
                                        },
                                        [_vm._v("Add media")]
                                      ),
                                      _vm._v(" "),
                                      _c("productImage")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        _vm._l(
                                          _vm.product.product.images,
                                          function(image, index) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: index,
                                                attrs: { cols: "12", md: "3" }
                                              },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    width: "100%",
                                                    src: "/" + image.link,
                                                    "lazy-src":
                                                      "/" + image.link_res,
                                                    name: image.name,
                                                    alt: image.alt
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }
                                        ),
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
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "v-subheader",
                                        { staticClass: "text-h6" },
                                        [
                                          _vm._v(
                                            "Variant (Not applicable for lessons; Go to schedules)"
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    _vm._l(
                                      _vm.product.product.variants,
                                      function(variant, index) {
                                        return _c(
                                          "v-row",
                                          { key: index },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "5" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Name " + (index + 1)
                                                  },
                                                  model: {
                                                    value: variant.name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        variant,
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "variant.name"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "2" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Quantity " + (index + 1),
                                                    type: "number"
                                                  },
                                                  model: {
                                                    value: variant.quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        variant,
                                                        "quantity",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression:
                                                      "variant.quantity"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "2" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Price " + (index + 1),
                                                    type: "number"
                                                  },
                                                  model: {
                                                    value: variant.price,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        variant,
                                                        "price",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression: "variant.price"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "2" }
                                              },
                                              [
                                                _c("v-checkbox", {
                                                  staticClass: "mt-6",
                                                  attrs: {
                                                    label:
                                                      "Visible " + (index + 1)
                                                  },
                                                  model: {
                                                    value: variant.isVisible,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        variant,
                                                        "isVisible",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression:
                                                      "variant.isVisible"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-card-text", [
                                    _c(
                                      "div",
                                      { staticClass: "text-center" },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "text-none primary",
                                            on: { click: _vm.addVariant }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Add Variant\n                                    "
                                            )
                                          ]
                                        )
                                      ],
                                      1
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
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "v-subheader",
                                        { staticClass: "text-h6" },
                                        [_vm._v("Related Uniforms")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "primary",
                                          on: { click: _vm.openUniforms }
                                        },
                                        [_vm._v("Add")]
                                      ),
                                      _vm._v(" "),
                                      _c("productRelatedUniforms")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        _vm._l(
                                          _vm.product.product
                                            .relatedUniformsValue,
                                          function(product, index) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: index,
                                                attrs: { cols: "12", md: "3" }
                                              },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    width: "100%",
                                                    src:
                                                      "/" + product.image.link,
                                                    "lazy-src":
                                                      "/" +
                                                      product.image.link_res,
                                                    name: product.image.name,
                                                    alt: product.image.alt
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }
                                        ),
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
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "v-subheader",
                                        { staticClass: "text-h6" },
                                        [_vm._v("Related Lessons")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "primary",
                                          on: { click: _vm.openLessons }
                                        },
                                        [_vm._v("Add")]
                                      ),
                                      _vm._v(" "),
                                      _c("productRelatedLessons")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        _vm._l(
                                          _vm.product.product
                                            .relatedLessonsValue,
                                          function(product, index) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: index,
                                                attrs: { cols: "12", md: "3" }
                                              },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    width: "100%",
                                                    src:
                                                      "/" + product.image.link,
                                                    "lazy-src":
                                                      "/" +
                                                      product.image.link_res,
                                                    name: product.image.name,
                                                    alt: product.image.alt
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }
                                        ),
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
                          _vm.$vuetify.breakpoint.mdAndUp
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-card-title",
                                        [
                                          _c(
                                            "v-subheader",
                                            { staticClass: "text-h6" },
                                            [_vm._v("SEO")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Keywords",
                                              hint:
                                                "Keywords add | per keywords",
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value:
                                                _vm.product.product.seo
                                                  .keywords,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product.product.seo,
                                                  "keywords",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "product.product.seo.keywords"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-textarea", {
                                            attrs: {
                                              label: "Description",
                                              hint:
                                                "Description must be atleast 70 words and maximum of 300 words",
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value:
                                                _vm.product.product.seo
                                                  .description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product.product.seo,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "product.product.seo.description"
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
                            : _vm._e()
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
                        "v-row",
                        [
                          _vm.$vuetify.breakpoint.mdAndUp
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-card-title",
                                        [
                                          _c(
                                            "v-subheader",
                                            { staticClass: "text-h6" },
                                            [_vm._v("Status")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              solo: "",
                                              items: _vm.status
                                            },
                                            model: {
                                              value:
                                                _vm.product.product.isVisible,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product.product,
                                                  "isVisible",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "product.product.isVisible"
                                            }
                                          })
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
                                              staticClass: "text-none success",
                                              attrs: {
                                                block: "",
                                                disabled: !_vm.valid,
                                                loading: _vm.product.loading
                                              },
                                              on: { click: _vm.saveProduct }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    Save Product\n                                "
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
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "v-subheader",
                                        { staticClass: "text-h6" },
                                        [_vm._v("Type")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          solo: "",
                                          items: _vm.types,
                                          readonly: ""
                                        },
                                        on: { change: _vm.selectedType },
                                        model: {
                                          value: _vm.product.product.type,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product.product,
                                              "type",
                                              $$v
                                            )
                                          },
                                          expression: "product.product.type"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.product.product.type == "Lessons"
                                        ? [
                                            _c("v-checkbox", {
                                              staticClass: "mb-6",
                                              attrs: {
                                                label: "Early Bird Discount",
                                                hint:
                                                  "EBD discount will apply if location is Motor City and EBD is check under Setups",
                                                "persistent-hint": ""
                                              },
                                              model: {
                                                value: _vm.product.product.ebd,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.product.product,
                                                    "ebd",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "product.product.ebd"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-checkbox", {
                                              attrs: {
                                                label:
                                                  "Quantity based on number of weeks",
                                                hint:
                                                  "if uncheck quantity will be 1; applicable for full price like Irish",
                                                "persistent-hint": ""
                                              },
                                              model: {
                                                value:
                                                  _vm.product.product.byWeek,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.product.product,
                                                    "byWeek",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "product.product.byWeek"
                                              }
                                            })
                                          ]
                                        : _vm._e()
                                    ],
                                    2
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
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    [
                                      _c(
                                        "v-subheader",
                                        { staticClass: "text-h6" },
                                        [_vm._v("Category")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.categories.categoryFiltered.length > 0
                                    ? _c(
                                        "v-card-text",
                                        [
                                          _vm._l(
                                            _vm.categories.categoryFiltered,
                                            function(category) {
                                              return _c("v-checkbox", {
                                                key: category.id,
                                                attrs: { value: category.id },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function() {
                                                        return [
                                                          _vm._v(
                                                            "\n                                        " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "toUpper"
                                                                )(category.name)
                                                              ) +
                                                              "\n                                    "
                                                          )
                                                        ]
                                                      },
                                                      proxy: true
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value:
                                                    _vm.product.product
                                                      .categoryIds,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product.product,
                                                      "categoryIds",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.product.categoryIds"
                                                }
                                              })
                                            }
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-center" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "success text-none",
                                                  attrs: { small: "" },
                                                  on: {
                                                    click: _vm.createCategory
                                                  }
                                                },
                                                [_vm._v(" Add Category ")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        2
                                      )
                                    : _c(
                                        "v-card-text",
                                        [
                                          _vm._v(
                                            "\n                                Category not available "
                                          ),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "success text-none",
                                              attrs: { small: "" },
                                              on: { click: _vm.createCategory }
                                            },
                                            [_vm._v(" Create ")]
                                          )
                                        ],
                                        1
                                      ),
                                  _vm._v(" "),
                                  _c("categoryModal")
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.$vuetify.breakpoint.smAndDown
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-card-title",
                                        [
                                          _c(
                                            "v-subheader",
                                            { staticClass: "text-h6" },
                                            [_vm._v("SEO")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Keywords",
                                              hint:
                                                "Keywords add | per keywords",
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value:
                                                _vm.product.product.seo
                                                  .keywords,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product.product.seo,
                                                  "keywords",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "product.product.seo.keywords"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-textarea", {
                                            attrs: {
                                              label: "Description",
                                              hint:
                                                "Description must be atleast 70 words and maximum of 300 words",
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value:
                                                _vm.product.product.seo
                                                  .description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product.product.seo,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "product.product.seo.description"
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
            : _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-text", [
                            _c("p", { staticClass: "text-center" }, [
                              _vm._v("Please wait while getting your data "),
                              _c(
                                "span",
                                [
                                  _c("v-progress-circular", {
                                    attrs: {
                                      width: 3,
                                      color: "green",
                                      indeterminate: ""
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
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