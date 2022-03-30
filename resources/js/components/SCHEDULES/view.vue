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
                        <v-subheader class="text-h6 font-weight-bold">Schedules</v-subheader>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="primary"
                            @click="newItem"
                        >
                            Create Schedule
                        </v-btn>
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="schedule.schedules.data"
                            :items-per-page="20"
                            :loading="schedule.loading"
                            :server-items-length="schedule.schedules.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Categories per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="schedule not found"
                            @click:row="goEdit"
                        >

                            <template v-slot:item.product="{ item }">
                                {{ item.product | toUpper }}
                            </template>

                            <template v-slot:item.location="{ item }">
                                {{ item.location | toUpper }}
                            </template>

                            <template v-slot:item.teacher="{ item }">
                                {{ item.teacher | toUpper }}
                            </template>

                            <template v-slot:item.studio="{ item }">
                                {{ item.studio | toUpper }}
                            </template>

                            <template v-slot:item.weekday="{ item }">
                                {{ item.weekday | toUpper }}
                            </template>

                            <template v-slot:item.price="{ item }">
                                {{ item.price | currency }}
                            </template>

                            <template v-slot:item.isVisible="{ item }">
                                <v-checkbox
                                    v-model="item.isVisible"
                                    @click.stop="changeVisible(item)"
                                >
                                </v-checkbox>
                            </template>

                            <template v-slot:no-data>
                                No Available Schedule <v-btn @click="newItem" class="primary" small>Create</v-btn>
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
                                        md="8"
                                    >
                                        <v-text-field 
                                            label="search"
                                            solo
                                            v-model="search"
                                            @keypress.enter="searchSchedule"
                                            @click:clear="searchSchedule"
                                            clearable
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    icon
                                                    @click="searchSchedule"
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
                                            v-model="type"
                                            :items="types"
                                            solo
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-card>
                    
                    <v-pagination
                        v-model="schedule.filter.page"
                        :length="schedule.schedules.last_page"
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
    name: "scheduleView",

    created(){
        

        var page = parseInt(this.$route.query.page)
        
        var filter = {
            search: null,
            type: "Lesson",
            page: page,
            perPage: 20
        }
        this.SCHEDULE_FILTER(filter)
        this.paginate(page)
    },

    data() {
        return {
            types: ["Lesson", "Location", "Teacher", "Day"],
            search: null,
            type: "Lesson",
            headers: [
                { text: "Lesson", value: "product", align: "left", sortable: false, width: "15%" },
                { text: "Location", value: "location", align: "left", sortable: false, width: "15%" },
                { text: "Teacher", value: "teacher", align: "left", sortable: false, width: "15%" },
                { text: "Studio", value: "studio", align: "left", sortable: false, width: "10%" },
                { text: "Day", value: "weekday", align: "left", sortable: false, width: "10%" },
                { text: "Start", value: "time_start", align: "left", sortable: false, width: "10%" },
                { text: "End", value: "time_end", align: "left", sortable: false, width: "5%" },
                { text: "Price", value: "price", align: "left", sortable: false, width: "10%" },
                { text: "Limit", value: "limit", align: "left", sortable: false, width: "5%" },
                { text: "Visible", value: "isVisible", align: "left", sortable: false, width: "5%" },
            ]
        }
    },

    methods: {
        ...mapActions(["SCHEDULES", "SCHEDULE_CHANGE_VISIBLE"]),
        ...mapMutations(["SCHEDULE_LOADING", "SCHEDULE_FILTER"]),

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
                  type: this.type,
                  page,
                  perPage: 20
              }
              this.SCHEDULE_FILTER(filter)
              this.SCHEDULES(filter)
        },

        newItem(){
            this.$router.push({name: "ScheduleAdd"})
        },

        searchSchedule() {
            this.paginate(1)
        },

        selectedType(e) {
            this.type = e;
            this.paginate(1)
        },

        goEdit(e) {
            let route = this.$router.resolve(`/auth/schedules/edit/${e.id}`)
            window.open(route.href);
        },

        changeVisible(e) {
            this.SCHEDULE_CHANGE_VISIBLE({item: e})
        }

    },

    computed: {
      ...mapState(["schedule"]),
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Schedules",
      htmlAttrs: {
        lang: "en",
      },
    };
  }
}
</script>