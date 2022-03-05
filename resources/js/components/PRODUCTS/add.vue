<template>
    <v-container
        fluid
        class="py-8 px-6"
    >
        <v-form v-model="valid">
            <div>
                <transition name="slide-fade">
                    <v-alert
                        border="left"
                        type="success"
                        v-show="product.success"
                    >
                        {{ product.success }}
                    </v-alert>
                </transition>
                <transition name="slide-fade">
                    <v-alert
                        border="left"
                        type="error"
                        v-show="product.error"
                    >
                        {{ product.error }}
                    </v-alert>
                </transition>
            </div>
            <v-row>
                <v-col
                    cols="12"
                    md="8"
                >
                    <v-row>
                        <v-col
                            cols="12"
                            v-if="$vuetify.breakpoint.smAndDown"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Status</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-select
                                        solo
                                        :items="status"
                                        v-model="product.product.isVisible"
                                    ></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        @click="saveProduct"
                                        class="text-none success"
                                        block
                                        :disabled="!valid"
                                        :loading="product.loading"
                                    >
                                        Save Product
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <router-link :to="{name: 'ProductView'}" class="text-caption blackk--text">
                                    <v-icon x-small>mdi-arrow-left</v-icon> Go back to view
                                </router-link>
                                <v-card-title>
                                    <v-subheader class="text-h6">Title</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field
                                        label="Product Name"
                                        v-model="product.product.name"
                                        @keypress.enter="searchProduct"
                                        :rules="[v => !!v || 'Product name is required']"
                                        solo
                                    >
                                        <template v-slot:append>
                                            <v-btn
                                                icon
                                                @click="searchProduct"
                                            >
                                                <v-icon left>
                                                mdi-magnify
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                    </v-text-field>
                                    <v-alert
                                        type="success"
                                        v-if="product.search.length > 0"
                                    >
                                        {{ product.search.length }} found
                                    </v-alert>
                                    <quill-editor
                                        ref="myQuillEditor"
                                        v-model="product.product.body"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Media</v-subheader>
                                    <v-spacer></v-spacer>
                                    <v-btn class="primary" @click="openMedia">Add media</v-btn>
                                    <productImage />
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            md="3"
                                            v-for="(image, index) in product.product.images"
                                            :key="index"
                                        >
                                            <v-img
                                                width="100%"
                                                :src="`/${image.link}`"
                                                :lazy-src="`/${image.link_res}`"
                                                :name="image.name"
                                                :alt="image.alt"
                                            ></v-img>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Variant</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-row
                                        v-for="(variant, index) in product.product.variants"
                                        :key="index"
                                    >
                                        <v-col
                                            cols="12"
                                            md="5"
                                        >
                                            <v-text-field
                                                :label="`Name ${index + 1}`"
                                                v-model="variant.name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            md="2"
                                        >
                                            <v-text-field
                                                :label="`Quantity ${index + 1}`"
                                                v-model.number="variant.quantity"
                                                type="number"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            md="2"
                                        >
                                            <v-text-field
                                                :label="`Price ${index + 1}`"
                                                v-model.number="variant.price"
                                                type="number"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            md="2"
                                        >
                                            <v-checkbox
                                                class="mt-6"
                                                :label="`Visible ${index + 1}`"
                                                v-model.number="variant.isVisible"
                                            ></v-checkbox>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-text>
                                    <div class="text-center">
                                        <v-btn
                                            class="text-none primary"
                                            @click="addVariant"
                                        >
                                            Add Variant
                                        </v-btn>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Related Uniforms</v-subheader>
                                    <v-spacer></v-spacer>
                                    <v-btn class="primary" @click="openUniforms">Add</v-btn>
                                    <productRelatedUniforms />
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            md="3"
                                            v-for="(product, index) in product.product.relatedUniformsValue"
                                            :key="index"
                                        >
                                            <v-img
                                                width="100%"
                                                :src="`/${product.image.link}`"
                                                :lazy-src="`/${product.image.link_res}`"
                                                :name="product.image.name"
                                                :alt="product.image.alt"
                                            ></v-img>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Related Lessons</v-subheader>
                                    <v-spacer></v-spacer>
                                    <v-btn class="primary" @click="openLessons">Add</v-btn>
                                    <productRelatedLessons />
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            md="3"
                                            v-for="(product, index) in product.product.relatedLessonsValue"
                                            :key="index"
                                        >
                                            <v-img
                                                width="100%"
                                                :src="`/${product.image.link}`"
                                                :lazy-src="`/${product.image.link_res}`"
                                                :name="product.image.name"
                                                :alt="product.image.alt"
                                            ></v-img>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                            v-if="$vuetify.breakpoint.mdAndUp"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">SEO</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field
                                    label="Keywords"
                                    v-model="product.product.seo.keywords"
                                    hint="Keywords add | per keywords"
                                    persistent-hint
                                    ></v-text-field>
                                    <v-textarea
                                        label="Description"
                                        v-model="product.product.seo.description"
                                        hint="Description must be atleast 70 words and maximum of 300 words"
                                        persistent-hint
                                    ></v-textarea>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-row>
                        <v-col
                            cols="12"
                            v-if="$vuetify.breakpoint.mdAndUp"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Status</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-select
                                        solo
                                        :items="status"
                                        v-model="product.product.isVisible"
                                    ></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        @click="saveProduct"
                                        class="text-none success"
                                        block
                                        :disabled="!valid"
                                        :loading="product.loading"
                                    >
                                        Save Product
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <!-- <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Sell out of stock item</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-select
                                        solo
                                        :items="soos"
                                        v-model="product.product.soos"
                                    ></v-select>
                                </v-card-text>
                            </v-card>
                        </v-col> -->
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Type</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-select
                                        solo
                                        :items="types"
                                        v-model="product.product.type"
                                        @change="selectedType"
                                    ></v-select>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">Category</v-subheader>
                                </v-card-title>
                                <v-card-text 
                                    v-if="categories.categoryFiltered.length > 0"
                                >
                                    <v-checkbox
                                        v-for="category in categories.categoryFiltered"
                                        :key="category.id"
                                        v-model="product.product.categoryIds"
                                        :value="category.id"
                                    >
                                        <template v-slot:label>
                                            {{ category.name | toUpper }}
                                        </template>
                                    </v-checkbox>
                                    <div class="text-center">
                                        <v-btn @click="createCategory" class="success text-none" small> Add Category </v-btn>
                                    </div>
                                </v-card-text>
                                <v-card-text v-else>
                                    Category not available <v-btn @click="createCategory" class="success text-none" small> Create </v-btn>
                                </v-card-text>
                                <categoryModal />
                            </v-card>
                        </v-col>
                        <v-col
                            cols="12"
                            v-if="$vuetify.breakpoint.smAndDown"
                        >
                            <v-card>
                                <v-card-title>
                                    <v-subheader class="text-h6">SEO</v-subheader>
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field
                                    label="Keywords"
                                    v-model="product.product.seo.keywords"
                                    hint="Keywords add | per keywords"
                                    persistent-hint
                                    ></v-text-field>
                                    <v-textarea
                                        label="Description"
                                        v-model="product.product.seo.description"
                                        hint="Description must be atleast 70 words and maximum of 300 words"
                                        persistent-hint
                                    ></v-textarea>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    name: "authProductAdd",

    components: {
        productImage: () => import("./products/image.vue"),
        productRelatedUniforms: () => import("./products/uniforms.vue"),
        productRelatedLessons: () => import("./products/lessons.vue"),
        categoryModal: () => import("./categories/modal.vue")
    },

    created() {
        var product = {
            id: 0,
            name: null,
            body: null,
            type: "Uniforms",
            isVisible: 1,
            soos: 0,
            imageIds: [],
            images: [],
            categoryIds: [],
            variants: [
                {
                    id: 0,
                    name: null,
                    quantity: 0,
                    price: 0,
                    isVisible: 1
                }
            ],
            relatedUniforms: [],
            relatedUniformsValue: [],
            relatedLessons: [],
            relatedLessonsValue: [],
            seo: {
                keywords: null,
                description: null
            }
        }
        this.PRODUCT(product)
        this.selectedType("Uniforms")
        this.PRODUCT_SUCCESS(null)
        this.PRODUCT_ERROR(null)
    },

    data() {
        return {
            success: null,
            valid: false,
            status: [
                {
                    text: 'Draft',
                    value: 0
                },
                {
                    text: 'Publish',
                    value: 1
                }
            ],
            soos: [
                {
                    text: 'No',
                    value: 0
                },
                {
                    text: 'Yes',
                    value: 1
                }
            ],
        }
    },

    methods: {
        ...mapActions(["IMAGES", "CATEGORY_FILTER_BY_TYPE", "PRODUCT_SAVE", "PRODUCTS", "PRODUCT_SEARCH"]),
        ...mapMutations(["IMAGE_OPEN", "CATEGORY_FORM", "CATEGORY_OPEN", "PRODUCT", "IMAGE_FILTER", "PRODUCT_SUCCESS", "PRODUCT_ERROR", "PRODUCT_FILTER", "PRODUCT_UNIFORM_OPEN", "PRODUCT_LESSON_OPEN"]),

        openMedia() {
            this.IMAGE_OPEN(true)
            var filter = {
                  page: 1,
                  perPage: 20
              }
            this.IMAGE_FILTER(filter)
            this.IMAGES(this.image.filter)
        },

        searchProduct() {
            this.PRODUCT_SEARCH({search: this.product.product.name})
        },

        selectedType(e) {
            var type = {
                type: e
            }
            this.product.product.categoryIds = [];
            this.PRODUCT(this.product.product);
            this.CATEGORY_FILTER_BY_TYPE(type)
        },

        createCategory() {
            var form = {
                id: 0,
                name: null,
                type: "Uniforms",
                isVisible: 1
            }
            this.CATEGORY_FORM(form)
            this.CATEGORY_OPEN(true)
        },

        addVariant() {
            this.product.product.variants.push({
                id: 0,
                name: null,
                quantity: 0,
                price: 0,
                isVisible: 1
            })
        },

        saveProduct() {
            var form = {
                form: this.product.product
            }
            this.PRODUCT_SAVE(form)
        },

        openUniforms() {
            var filter = {
                search: null,
                type: "Uniforms",
                page: 1,
                perPage: 20
            }
            this.PRODUCT_FILTER(filter)
            this.PRODUCTS(this.product.filter)
            this.PRODUCT_UNIFORM_OPEN(true)
        },

        openLessons() {
            var filter = {
                search: null,
                type: "Lessons",
                page: 1,
                perPage: 20
            }
            this.PRODUCT_FILTER(filter)
            this.PRODUCTS(this.product.filter)
            this.PRODUCT_LESSON_OPEN(true)
        }
    },

    computed: {
        ...mapState(["image", "categories", "product", "types"])
    }
}
</script>

<style lang="scss" scoped>
.v-text-field.v-text-field--enclosed {
  margin: 0;
  padding: 0;
}
.v-input--selection-controls {
  margin: 0px;
  padding: 0px;
  margin-top: -15px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>