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
                        <v-subheader class="text-h6 font-weight-bold">Categories</v-subheader>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="primary"
                            @click="newItem"
                        >
                            Create Category
                        </v-btn>
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="categories.categories.data"
                            :items-per-page="5"
                            :loading="categories.loading"
                            :server-items-length="categories.categories.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Categories per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            @click:row="edit"
                        >

                            <template v-slot:item.name="{ item }">
                                {{ item.name | toUpper }}
                            </template>

                            <template v-slot:item.type="{ item }">
                                {{ item.type }}
                            </template>

                            <template v-slot:item.visible="{ item }">
                                <v-checkbox
                                    v-model="item.isVisible"
                                    readonly
                                ></v-checkbox>
                            </template>

                            <template v-slot:no-data>
                                No Available Category <v-btn @click="newItem" class="primary" small>Create Category</v-btn>
                            </template>

                        </v-data-table>
                    </v-card>
                    
                    <v-pagination
                        v-model="categories.filter.page"
                        :length="categories.categories.last_page"
                        @input="paginate"
                    ></v-pagination>
                </v-card>
            </v-col>
        </v-row>
        <modal />
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "productCategories",

    components: {
        modal: () => import("./categories/modal.vue")
    },

    created(){
        var page = parseInt(this.$route.query.page)
        
        var filter = {
            page: page,
            perPage: 20
        }
        this.CATEGORY_FILTER(filter)
        this.paginate(page)
    },

    data() {
        return {
            headers: [
                { text: "Name", value: "name", align: "center", sortable: false, width: "50%" },
                { text: "Type", value: "type", align: "center", sortable: false, width: "40%" },
                { text: "Visible", value: "visible", align: "left", sortable: false, width: "10%" },
            ]
        }
    },

    methods: {
        ...mapActions(["CATEGORIES"]),
        ...mapMutations(["CATEGORY_LOADING", "CATEGORY_FILTER", "CATEGORY_OPEN", "CATEGORY_FORM"]),

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
            this.CATEGORY_LOADING(true)
            var filter = {
                  page,
                  perPage: 20
              }
              this.CATEGORY_FILTER(filter)
              this.CATEGORIES(this.categories.filter)
        },

        newItem(){
            var form = {
                id: 0,
                name: null,
                type: "Uniforms",
                isVisible: 1
            }
            this.edit(form)
        },

        edit(e) {
            this.CATEGORY_FORM(e)
            this.CATEGORY_OPEN(true)
        }
    },

    computed: {
      ...mapState(["categories"])  
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "Categories",
      htmlAttrs: {
        lang: "en",
      },
    };
  }
}
</script>