<template>
    <v-container
        fluid
        class="py-8 px-6"
    >
        <v-row>
            <v-col
                cols="12"
            >
                <v-card
                    flat
                >
                    <v-card-title>
                        <v-subheader class="text-h6 font-weight-bold">Products</v-subheader>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="primary"
                            @click="newItem"
                        >
                            Create Product
                        </v-btn>
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="product.products.data"
                            :items-per-page="20"
                            :loading="product.loading"
                            :server-items-length="product.products.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Categories per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="product not found"
                            @click:row="goEdit"
                        >

                            <template v-slot:item.image="{ item }">
                                <v-avatar size="150" tile v-if="item.image">
                                <v-img
                                    :src="`/${item.image.link}`"
                                    :lazy-src="`/${item.image.link_res}`"
                                    :name="item.image.name"
                                    :alt="item.image.alt"
                                    contain
                                ></v-img>
                                </v-avatar>
                            </template>

                            <template v-slot:item.name="{ item }">
                                {{ item.name | toUpper }}
                            </template>

                            <template v-slot:item.type="{ item }">
                                {{ item.type }}
                            </template>

                            <template v-slot:item.visible="{ item }">
                                <v-checkbox
                                    v-model="item.isVisible"
                                    @click.stop="changeVisible(item)"
                                >
                                </v-checkbox>
                            </template>

                            <template v-slot:item.soos="{ item }">
                                <v-checkbox
                                    v-model="item.soos"
                                    readonly
                                >
                                </v-checkbox>
                            </template>

                            <template v-slot:no-data>
                                No Available Product <v-btn @click="newItem" class="primary" small>Create</v-btn>
                            </template>

                            <template v-slot:item.action="{ item }">

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            v-if="item.type == 'Uniforms' && item.pdo" class="primary"
                                            icon
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click.stop="view(item)"
                                        >
                                            <v-icon
                                                color="white"
                                                dark
                                            >
                                            mdi-eye-outline
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>View {{ item.name | toUpper }}</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            icon
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click.stop="copyItem(item)"
                                        >
                                            <v-icon
                                                color="primary"
                                                dark
                                            >
                                            mdi-content-copy
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Copy {{ item.name | toUpper }}</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            icon
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click.stop="xeroCode(item)"
                                        >
                                            <v-icon
                                                color="primary"
                                                dark
                                            >
                                            mdi-cloud-sync
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Set xero code for {{ item.name | toUpper }}</span>
                                </v-tooltip>
                                
                            </template>

                            <template v-slot:top>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        md="8"
                                    >
                                        <v-text-field 
                                            label="search"
                                            solo
                                            v-model="search"
                                            @keypress.enter="searchProduct"
                                            clearable
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
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="4"
                                    >
                                        <v-select
                                            solo
                                            :items="productTypes"
                                            v-model="type"
                                            @change="selectedType"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-card>
                    
                    <v-pagination
                        v-model="product.filter.page"
                        :length="product.products.last_page"
                        @input="paginate"
                    ></v-pagination>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog
            v-if="openXero"
            v-model="openXero"
            width="500"
            persistent
        >
            <v-card>
                <v-toolbar
                    flat
                    dark
                    color="primary"
                >
                    <v-toolbar-title>
                        {{ accessProduct.name }}
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        icon
                        @click="closeXero"
                    >
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-autocomplete
                        :items="xero.charts"
                        item-text="name"
                        item-value="id"
                        v-model="code.chart_of_account_id"
                    ></v-autocomplete>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="text-none success" @click="saveXero">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "productView",

    created(){
        var page = parseInt(this.$route.query.page)
        
        var filter = {
            search: null,
            type: null,
            page: page,
            perPage: 20
        }
        this.PRODUCT_FILTER(filter)
        this.XERO_GET_CHART_OF_ACCOUNT({type: 'Sales'})
        this.paginate(page)
    },

    data() {
        return {
            search: null,
            type: null,
            headers: [
                { text: "Image", value: "image", align: "center", sortable: false, width: "15%" },
                { text: "Name", value: "name", align: "left", sortable: false, width: "45%" },
                { text: "Type", value: "type", align: "left", sortable: false, width: "10%" },
                { text: "Visible", value: "visible", align: "left", sortable: false, width: "5%" },
                { text: "", value: "action", align: "center", sortable: false, width: "15%" },
            ],
            openXero: false,
            accessProduct: null,
            code: null,
        }
    },

    methods: {
        ...mapActions(["PRODUCTS", "PRODUCT_CHANGE_VISIBLE", "XERO_GET_CHART_OF_ACCOUNT", "XERO_GET_CODE", "XERO_SAVE"]),
        ...mapMutations(["PRODUCT_LOADING", "PRODUCT_FILTER"]),

        paginate(e) {
            var page = Object.keys(this.$route.query).length > 0 ? e : 1
            this.$router.replace({ query: {page: page} })
            .catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    console.log(error)
                }
            })
            this.PRODUCT_LOADING(true)
            var filter = {
                  search: this.search,
                  type: this.type,
                  page,
                  perPage: 20
              }
              this.PRODUCT_FILTER(filter)
              this.PRODUCTS(this.product.filter)
        },

        changeVisible(e) {
            this.PRODUCT_CHANGE_VISIBLE({item: e})
        },

        newItem(){
            this.$router.push({name: "ProductAdd"})
        },

        searchProduct() {
            this.paginate(1)
        },

        selectedType(e) {
            this.type = e;
            this.paginate(1)
        },

        view(e) {
            let productViewer = this.$router.resolve(`/${e.type}/${e.slug}/pdo/${e.pdo.id}`);
            window.open(productViewer.href, '_blank');
        },

        goEdit(e) {
            this.$router.push(`/auth/products/edit/${e.slug}`)
        },

        copyItem(e) {
            this.$router.push(`/auth/products/copy/${e.slug}`)
        },

        xeroCode(e) {
            this.accessProduct = e
            
            this.XERO_GET_CODE({id: e.id})
            .then((result) => {
                this.openXero = true
                this.code = result.data || {
                    chart_of_account_id: 0
                }
            })
        },

        saveXero() {
            this.XERO_SAVE({
                product_id: this.accessProduct.id,
                chart_of_account_id: this.code.chart_of_account_id
            })
            .then((result) => {
                this.closeXero()
            })
        },
        
        closeXero() {
            this.accessProduct = null
            this.code = null
            this.openXero = false
        }

    },

    computed: {
      ...mapState(["product", "productTypes", "xero"]),
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Products",
      htmlAttrs: {
        lang: "en",
      },
    };
  }
}
</script>