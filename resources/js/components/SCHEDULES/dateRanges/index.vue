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
                        <v-subheader class="text-h6 font-weight-bold">Date Ranges</v-subheader>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="primary"
                            @click="newItem"
                        >
                            Create Date Range
                        </v-btn>
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="dateRange.dateRanges.data"
                            :items-per-page="20"
                            :loading="dateRange.loading"
                            :server-items-length="dateRange.dateRanges.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Date Range per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="Date Range not found"
                            @click:row="goEdit"
                        >

                            <template v-slot:item.image="{ item }">
                                <v-avatar size="150" tile>
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

                            <template v-slot:item.is_end="{ item }">
                                <v-checkbox
                                    v-model="item.is_end"
                                    readonly
                                >
                                </v-checkbox>
                            </template>

                            <template v-slot:item.cog="{ item }">
                                <v-icon @click.stop="setup(item)">mdi-cog</v-icon>
                            </template>

                            <template v-slot:no-data>
                                No Available Date Range <v-btn @click="newItem" class="primary" small>Create</v-btn>
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
                                            @keypress.enter="searchDateRange"
                                            @click:clear="searchDateRange"
                                            clearable
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    icon
                                                    @click="searchDateRange"
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
                        v-model="dateRange.filter.page"
                        :length="dateRange.dateRanges.last_page"
                        @input="paginate"
                    ></v-pagination>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog
            v-model="dateRange.open"
            width="400"
            @click:outside="close"
        >
            <v-card>
                <v-card-text>
                    <p class="text-subtitle-1 font-weight-bold">Setup your date range per location</p>
                </v-card-text>
                <v-card-text>
                    <v-autocomplete
                        label="Select Location"
                        v-model="dateRange.setup.location_id"
                        :items="location.all"
                        item-value="id"
                        item-text="name"
                        multiple
                        chips
                    ></v-autocomplete>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="text-none primary"
                        @click="save"
                    >Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "dateRangeView",

    created(){
        
        var page = parseInt(this.$route.query.page)
        
        var filter = {
            search: null,
            page: page,
            perPage: 20
        }
        this.DATERANGE_FILTER(filter)
        this.paginate(page)
    },

    data() {
        return {
            search: null,
            headers: [
                { text: "Name", value: "name", align: "left", sortable: false, width: "50%" },
                { text: "Start", value: "start", align: "left", sortable: false, width: "15%" },
                { text: "End", value: "end", align: "left", sortable: false, width: "15%" },
                { text: "Finish", value: "is_end", align: "left", sortable: false, width: "10%" },
                { text: "", value: "cog", align: "left", sortable: false, width: "10%" },
            ]
        }
    },

    methods: {
        ...mapActions(["DATERANGES", "DATERANGE_SETUP", "DATERANGE_SETUP_SAVE"]),
        ...mapMutations(["DATERANGE_FILTER", "DATERANGE_OPEN"]),

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
              this.DATERANGE_FILTER(filter);
              this.DATERANGES(filter);
        },

        newItem(){
            this.$router.push({name: "DateRangeAdd"})
        },

        searchDateRange() {
            this.paginate(1);
        },
        
        setup(e) {
            this.DATERANGE_SETUP({id: e.id});
        },

        goEdit(e) {
            this.$router.push(`/auth/schedules/date-range/edit/${e.id}`);
        },

        save() {
            var data = {
                dateRangeId: this.dateRange.setup.id,
                locationIds: this.dateRange.setup.location_id
            }
            this.DATERANGE_SETUP_SAVE(data)
        },

        close() {
            this.DATERANGE_OPEN(false);
        }

    },

    computed: {
      ...mapState(["dateRange", "location"]),
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Date Ranges",
      htmlAttrs: {
        lang: "en",
      },
    };
  }
}
</script>