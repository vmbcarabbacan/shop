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
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            v-model="selected"
                            :headers="headers"
                            :items="schedule.schedules.data"
                            :items-per-page="20"
                            :loading="schedule.loading"
                            :server-items-length="schedule.schedules.total"
                            show-select
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="schedule not found"
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

                            <template v-slot:item.is_permanent="{ item }">
                                <v-checkbox
                                    v-model="item.is_permanent"
                                >
                                </v-checkbox>
                                <v-select
                                    label="Select trial date"
                                    v-if="!item.is_permanent"
                                    :items="item.dates"
                                    v-model="item.trial_date"
                                >
                                </v-select>
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
                                        <v-btn
                                            class="text-none primary"
                                            large
                                            block
                                            @click="enrollStudent"
                                        >
                                            Enroll Student
                                        </v-btn>
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
        };
        this.SCHEDULE_FILTER(filter);
        this.paginate(page);
    },

    data() {
        return {
            selected: [],
            types: ["Lesson", "Location", "Teacher", "Day"],
            search: null,
            type: "Lesson",
            headers: [
                { text: "", value: "id", align: "left", sortable: false, width: "5%" },
                { text: "isPermanent", value: "is_permanent", align: "left", sortable: false, width: "15%" },
                { text: "Lesson", value: "product", align: "left", sortable: false, width: "20%" },
                { text: "Location", value: "location", align: "left", sortable: false, width: "10%" },
                { text: "Teacher", value: "teacher", align: "left", sortable: false, width: "15%" },
                { text: "Studio", value: "studio", align: "left", sortable: false, width: "10%" },
                { text: "Day", value: "weekday", align: "left", sortable: false, width: "10%" },
                { text: "Start", value: "time_start", align: "left", sortable: false, width: "5%" },
                { text: "End", value: "time_end", align: "left", sortable: false, width: "5%" },
            ]
        }
    },

    methods: {
        ...mapActions(["SCHEDULES", "ENROLLMENT"]),
        ...mapMutations(["SCHEDULE_LOADING", "SCHEDULE_FILTER"]),

        paginate(e) {
            var page = e
            this.$router.replace({ query: {student_id: this.$route.query.student_id, page} })
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

        enrollStudent() {
            this.ENROLLMENT({id: this.$route.query.student_id, schedules: this.selected});
        },

        searchSchedule() {
            this.paginate(1)
        },

        newItem(){
            this.$router.push({name: "ScheduleAdd"})
        },

        selectedType(e) {
            this.type = e;
            this.paginate(1)
        },

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