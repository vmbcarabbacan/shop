<template>
    <v-dialog
        v-model="product.openUniforms"
        width="800"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar
                flat
                dark
                color="primary"
            >
                <v-toolbar-title>
                    Select Related Uniforms
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon
                    @click="close"
                >
                    mdi-close
                </v-icon>
            </v-toolbar>
            <v-card-text>
                <v-row
                    justify="start"
                >
                    <v-checkbox
                        v-for="product in product.products.data"
                        :key="product.id"
                        v-model="selected"
                        :value="product.id"
                        class="modified"
                    >
                        <template v-slot:label>
                            <v-avatar
                                size="160"
                                tile
                                class="modified"
                            >
                                <v-img
                                    :src="`/${product.image.link}`"
                                    :lazy-src="`/${product.image.link_res}`"
                                    :alt="product.image.alt"
                                    contain
                                >
                                    <v-sheet
                                        height="100%"
                                        width="100%"
                                        color="transparent"
                                    >
                                        <v-container>
                                            <v-row
                                                align="end"
                                                justify="center"
                                            >
                                                <v-col
                                                    cols="12"
                                                >
                                                <p class="red--text">{{ product.name }}</p>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-sheet>
                                </v-img>
                            </v-avatar>
                        </template>
                    </v-checkbox>
                </v-row>
                
            </v-card-text>
            <v-card-actions>
                <v-pagination
                @input="paginate"
                v-model="product.products.current_page"
                :length="product.products.last_page"
                ></v-pagination>
                <v-spacer></v-spacer>
                <v-btn
                    class="text-none primary"
                    @click="selectedUniforms"
                >
                    Selected Uniforms({{ product.product.relatedUniforms.length }})
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "productRelatedUniforms",

    methods: {
        ...mapMutations(["PRODUCT_UNIFORM_OPEN", "PRODUCT_FILTER"]),
        ...mapActions(["PRODUCTS", "PRODUCT_RELATED_UNIFORMS_FILTER_BY_IDS"]),

        paginate(e) {
            var filter = {
                  search: null,
                  type: "Uniforms",
                  page: e,
                  perPage: 20
              }
            this.PRODUCT_FILTER(filter)
            this.PRODUCTS(this.product.filter)
        },

        close() {
            this.PRODUCT_UNIFORM_OPEN(false)
        },

        selectedUniforms(){
            var ids = {
                ids: this.product.product.relatedUniforms
            }
            this.PRODUCT_RELATED_UNIFORMS_FILTER_BY_IDS(ids)
            this.close()
        }
    },


    computed: {
        ...mapState(["product"]),

        selected: {
            get() {
                return this.product.product.relatedUniforms
            },
            set(e) {
                this.product.product.relatedUniforms = e
            }
        }
    }
}
</script>

<style scoped>
    .v-input >>> .v-input--selection-controls__input {
        display: none;
    }

    .v-input.modified.v-input--is-label-active {
        background-color: aqua;
        margin: 10px;
    }

    .v-avatar {
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        line-height: normal;
        position: relative;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;
        margin: 5px;
        padding: 5px;
    }
</style>
