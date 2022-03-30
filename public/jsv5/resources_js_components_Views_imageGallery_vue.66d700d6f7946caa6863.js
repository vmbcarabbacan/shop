"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Views_imageGallery_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/imageGallery.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/imageGallery.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "imageGallery",
  created: function created() {
    this.$vuetify.goTo(0);
    var slug = {
      slug: this.$route.params.slug
    };
    this.IMAGE_SEARCH(slug);
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["IMAGE_SEARCH"])),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["image"])),
  metaInfo: function metaInfo() {
    return {
      title: "Image Gallery",
      titleTemplate: "%s - StepUp Academy | " + this.image.image.name,
      htmlAttrs: {
        lang: "en"
      },
      meta: [{
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        name: "description",
        content: this.image.image.alt
      }, {
        name: "keywords",
        content: "StepUp, StepUp Academy, step up " + this.image.image.name
      }, // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: this.image.image.name
      }, {
        property: "og:site_name",
        content: "StepUp Academy"
      }, // The list of types is available here: http://ogp.me/#types
      {
        property: "og:type",
        content: "article"
      }, // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: this.image.image.link
      }, {
        property: "og:image",
        content: this.image.image.link
      }, // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: this.image.image.alt
      }, // Twitter card
      {
        name: "twitter:card",
        content: "summary"
      }, {
        name: "twitter:site",
        content: this.image.image.link
      }, {
        name: "twitter:title",
        content: this.image.image.name
      }, {
        name: "twitter:description",
        content: this.image.image.alt
      }, // Your twitter handle, if you have one.
      {
        name: "twitter:creator",
        content: "@vmbcarabbacan"
      }, {
        name: "twitter:image:src",
        content: this.image.image.link
      }, // Google / Schema.org markup:
      {
        itemprop: "name",
        content: this.image.image.name
      }, {
        itemprop: "description",
        content: this.image.image.alt
      }, {
        itemprop: "image",
        content: this.image.image.link
      }],
      link: [{
        rel: 'canonical',
        href: "http://localhost:3000/image-gallery/".concat(this.image.image.link)
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/components/Views/imageGallery.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Views/imageGallery.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imageGallery_vue_vue_type_template_id_14a7a123___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageGallery.vue?vue&type=template&id=14a7a123& */ "./resources/js/components/Views/imageGallery.vue?vue&type=template&id=14a7a123&");
/* harmony import */ var _imageGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageGallery.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/imageGallery.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _imageGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _imageGallery_vue_vue_type_template_id_14a7a123___WEBPACK_IMPORTED_MODULE_0__.render,
  _imageGallery_vue_vue_type_template_id_14a7a123___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/imageGallery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/imageGallery.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Views/imageGallery.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imageGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./imageGallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/imageGallery.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imageGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/imageGallery.vue?vue&type=template&id=14a7a123&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Views/imageGallery.vue?vue&type=template&id=14a7a123& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageGallery_vue_vue_type_template_id_14a7a123___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageGallery_vue_vue_type_template_id_14a7a123___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageGallery_vue_vue_type_template_id_14a7a123___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./imageGallery.vue?vue&type=template&id=14a7a123& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/imageGallery.vue?vue&type=template&id=14a7a123&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/imageGallery.vue?vue&type=template&id=14a7a123&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/imageGallery.vue?vue&type=template&id=14a7a123& ***!
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
    "v-app",
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "5" } },
            [
              Object.keys(_vm.image.image).length > 0
                ? _c(
                    "v-card",
                    [
                      _c("v-img", {
                        attrs: {
                          width: "100%",
                          src: "/" + _vm.image.image.link,
                          "lazy-src": "/" + _vm.image.image.link_res,
                          name: _vm.image.image.name,
                          alt: _vm.image.image.alt
                        }
                      })
                    ],
                    1
                  )
                : _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c("v-card-text", [
                        _vm._v(
                          "\n                    Sorry, Image is not available\n                "
                        )
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);