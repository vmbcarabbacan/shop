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
                                {{ item.approvedBy.fullName | toUpper }}
                            </template>

                            <template v-slot:item.type="{ item }">
                                {{ item.type | toUpper }}
                            </template>

                            <template v-slot:item.date="{ item }">
                                {{ item.updated_at | dateAndTime }}
                            </template>


                            <template v-slot:no-data>
                                No Available Request 
                            </template>
                        </v-data-table>
                    </v-card>
                    <v-pagination
                        v-model="page"
                        :length="request.fetch.last_page"
                        @input="paginate"
                    ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
export default {
    name: "requestPending",


    created() {
        var page = parseInt(this.$route.query.page)
        this.page = page
        var filter = {
            search: this.search,
            status: 'Cancelled',
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
                { text: "Aproved By", value: "name", align: "left", sortable: false, width: "20%" },
                { text: "Type", value: "type", align: "left", sortable: false, width: "20%" },
                { text: "Notes", value: "comment", align: "left", sortable: false, width: "40%" },
                { text: "Date", value: "date", align: "left", sortable: false, width: "20%" },
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
                  status: 'Cancelled',
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