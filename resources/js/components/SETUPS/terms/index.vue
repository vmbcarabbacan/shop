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
                        <v-subheader class="text-h6 font-weight-bold">Forms</v-subheader>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="primary"
                            @click="newItem"
                        >
                            Create Form
                        </v-btn>
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="form.forms.data"
                            :items-per-page="20"
                            :loading="form.loading"
                            :server-items-length="form.forms.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Categories per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="form not found"
                            @click:row="goEdit"
                        >

                            <template v-slot:item.name="{ item }">
                                {{ item.name | toUpper }}
                            </template>

                            <template v-slot:item.isShow="{ item }">
                                <v-checkbox
                                    v-model="item.isShow"
                                    @click.stop="changeVisible(item)"
                                >
                                </v-checkbox>
                            </template>

                            <template v-slot:no-data>
                                No Available Form <v-btn @click="newItem" class="primary" small>Create</v-btn>
                            </template>

                            <template v-slot:item.action="{ item }">
                                <!-- <v-btn class="primary" icon dark @click.stop="view(item)">
                                    <v-icon> mdi-eye </v-icon>
                                </v-btn> -->
                            </template>

                            <template v-slot:top>
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field 
                                            label="search"
                                            solo
                                            v-model="search"
                                            @keypress.enter="searchForm"
                                            @click:clear="searchForm"
                                            clearable
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    icon
                                                    @click="searchForm"
                                                >
                                                    <v-icon left>
                                                    mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-card>
                    
                    <v-pagination
                        v-model="form.filter.page"
                        :length="form.forms.last_page"
                        @input="paginate"
                    ></v-pagination>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'termsAndConditions',

    data() {
        return {
            search: null,
            headers: [
                {
                    text: "Name", value: "name", align: "left"
                },
                {
                    text: "", value: "isShow", align: "left"
                }
            ]
        }
    },

    created() {
        this.search = null
        var page = parseInt(this.$route.query.page)
        var filter = {
            search: this.search,
            page,
            perPage: 20
        }
        this.FORM_FILTER_M(filter)
        this.paginate(page)
    },


    methods: {
        ...mapActions(["FORMS", "FORM_SAVE"]),
        ...mapMutations(["FORM_FILTER_M"]),

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
            var filter = {
                  search: this.search,
                  page,
                  perPage: 20
              }
              this.FORM_FILTER_M(filter)
              this.FORMS(filter)
        },
        
        searchForm() {
            this.paginate(1)
        },

        changeVisible(e) {
            this.FORM_SAVE(e)
        },

        newItem() {
            this.$router.push({name: "TermsAndConditionsModal", params: {slug: 0, type: 'New'}})

        },

        goEdit(e) {
            this.$router.push({name: "TermsAndConditionsModal", params: {slug: e.slug, type: 'Edit'}})
        }

    },

    computed: {
        ...mapState(["form"]),

    }
}
</script>