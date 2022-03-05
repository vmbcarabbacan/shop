<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col
                cols="12"
            >
                <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="request.fetch.data"
                            :items-per-page="20"
                            :loading="request.loading"
                            :server-items-length="request.fetch.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Categories per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="request not found"
                        >
                            <!-- @click:row="goEdit" -->

                            <template v-slot:item.name="{ item }">
                                {{ item.requestedBy.fullName | toUpper }}
                            </template>

                            <template v-slot:item.type="{ item }">
                                {{ item.type | toUpper }}
                            </template>

                            <template v-slot:item.date="{ item }">
                                {{ item.created_at | dateAndTime }}
                            </template>


                            <template v-slot:no-data>
                                No Available Request 
                            </template>

                            <template v-slot:item.action="{ item }">
                                <v-btn class="primary" icon dark @click.stop="view(item)">
                                    <v-icon> mdi-eye </v-icon>
                                </v-btn>
                            </template>

                            <!-- <template v-slot:top>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        md="8"
                                    >
                                        <v-text-field 
                                            label="search"
                                            solo
                                            v-model="search"
                                            @keypress.enter="searchRequest"
                                            clearable
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    icon
                                                    @click="searchRequest"
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
                                            :items="types"
                                            v-model="type"
                                            @change="searchRequest"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </template> -->
                        </v-data-table>
                    </v-card>
                    <v-pagination
                        v-model="page"
                        :length="request.fetch.last_page"
                        @input="paginate"
                    ></v-pagination>
            </v-col>
        </v-row>
        <transactions v-if="request.openTransaction" />
    </v-container>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
export default {
    name: "requestPending",

    components: {
        transactions: () => import("./transactions.vue")
    },

    created() {
        var page = parseInt(this.$route.query.page)
        this.page = page
        var filter = {
            search: this.search,
            status: 'Pending',
            type: this.type,
            page,
            perPage: 20
        }
        this.REQUEST_FILTER_M(filter)
        this.paginate(page)
    },

    data() {
        return {
            search: null,
            page: 1,
            type: "",
            types: ["Full Name", "Type"],
            headers: [
                { text: "Requested By", value: "name", align: "left", sortable: false, width: "20%" },
                { text: "Type", value: "type", align: "left", sortable: false, width: "20%" },
                { text: "Notes", value: "comment", align: "left", sortable: false, width: "30%" },
                { text: "Date", value: "date", align: "left", sortable: false, width: "20%" },
                { text: "", value: "action", align: "center", sortable: false, width: "10%" },
            ]
        }
    },

    methods: {
        ...mapActions(["REQUEST_FETCH"]),
        ...mapMutations(["REQUEST_VIEW_TRANSACTION", "REQUEST_OPEN_TRANSACTION", "REQUEST_FILTER_M"]),

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
                  status: 'Pending',
                  type: this.type,
                  page,
                  perPage: 20
              }
              this.REQUEST_FILTER_M(filter)
              this.REQUEST_FETCH(filter)
        },

        view(e) {
            this.REQUEST_OPEN_TRANSACTION()
            this.REQUEST_VIEW_TRANSACTION(e)
        },

        searchRequest() {
            this.paginate(1)
        }
    },

    computed: {
        ...mapState(["request"])
    }
}
</script>