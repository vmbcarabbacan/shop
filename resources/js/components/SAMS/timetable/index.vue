<template>
    <div>
        <v-row>
            <v-col
                cols="12"
                md="6"
            >
                <v-autocomplete
                    label="Select Location"
                    v-model="location_id"
                    :items="location.all"
                    @change="selectedLocation"
                    item-value="id"
                    item-text="name"
                    solo
                ></v-autocomplete>
            </v-col>
            <v-col
                cols="12"
                md="6"
            >
                <v-autocomplete
                    label="Select Date Range"
                    v-model="dateRange_id"
                    :items="dateRange.allSams"
                    @change="getSchedules"
                    item-value="id"
                    item-text="name"
                    solo
                ></v-autocomplete>
            </v-col>
        </v-row>
        <v-simple-table
            fixed-header
            height="100%"
        >
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">Timings</th>
                <th class="text-left" v-for="(day, index) in days" :key="index">
                    {{ day.text }}
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="timing in timings"
                :key="timing"
                >
                <td>{{ timing | time }}</td>
                <td  v-for="(day, index) in days" :key="index">
                    <template v-for="schedule in sams.schedules">
                        <div :key="schedule.id">
                            <v-menu
                                open-on-hover
                                :nudge-width="200"
                                offset-y
                                bottom
                                v-if="day.text == schedule.weekday && timing == schedule.time_start"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    :color="schedule.color"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    class="text-none"
                                    block
                                >
                                {{ schedule.product | toUpper }} {{ schedule.limit - schedule.quantity }}/{{ schedule.limit }}
                                </v-btn>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>

                                        <v-list-item-content>
                                        <v-list-item-title class="text-subtitle-1 font-weight-bold">{{ schedule.teacher | toUpper }}</v-list-item-title>
                                        <v-list-item-title class="font-weight-bold"> {{ schedule.studio }}</v-list-item-title>
                                        <v-list-item-title class="font-weight-bold"> Duration: {{ schedule.duration }} mins</v-list-item-title>
                                        </v-list-item-content>

                                    </v-list-item>
                                </v-list>

                                <v-divider></v-divider>

                                <v-list>
                                    <v-list-item v-for="(student, index) in schedule.students" :key="index">
                                        <v-list-item-title>{{ student.fullName | toUpper }}</v-list-item-title>
                                    </v-list-item>

                                </v-list>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        class="text-none"
                                        text
                                        @click="viewAttendance(schedule.id)"
                                    >
                                        View Attendance
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-menu>
                        </div>
                    </template>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        <attendance v-if="sams.openAttendance" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'timetable',

    created() {
        this.LOCATION_ALL()
    },

    components: {
        attendance: () => import('./attendance.vue')
    },

    data() {
        return {
            location_id: null,
            dateRange_id: null,
        }
    },

    methods: {
        ...mapActions(["LOCATION_ALL", "DATERANGE_ALL_SAMS", "SAMS_SCHEDULES", "SCHEDULE_DATES"]),

        selectedLocation(e) {
            this.dateRange_id = null
            this.DATERANGE_ALL_SAMS({id: e})
        },

        getSchedules() {
            var data = {
                location_id: this.location_id,
                date_range_id: this.dateRange_id
            }
            this.SAMS_SCHEDULES(data);
        },

        viewAttendance(e) {
            this.SCHEDULE_DATES({id: e})
        }
    },

    computed: {
        ...mapState(["timings", "days", "location", "dateRange", "sams"])
    }
}
</script>

<style lang="scss" scoped>
    table, td, th {  
        border: 1px solid #ddd;
        text-align: left;
    }

    .v-list-item {
        min-height: 0px;
    }
</style>