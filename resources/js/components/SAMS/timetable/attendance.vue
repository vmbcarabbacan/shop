<template>
    <v-dialog
        v-model="sams.openAttendance"
    >
        <v-card>
            <v-toolbar
                flat
                dark
                color="success"
            >
                <v-toolbar-title>
                    Attendance - {{ schedule.enrollment.schedule.product | toUpper }} - {{ schedule.enrollment.schedule.teacher | toUpper }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon @click="close">mdi-close</v-icon>
            </v-toolbar>
            <v-card-text>
                <v-simple-table
                    fixed-header
                    height="100%"
                >
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Timings</th>
                        <th class="text-left" v-for="(date, index) in schedule.enrollment.dates" :key="index">
                            {{ date }}
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(enroll, i) in schedule.enrollment.enrolled"
                        :key="i"
                        >
                        <td>{{ enroll.fullname | toUpper }}</td>
                        <td  v-for="(day, j) in enroll.attendance" :key="j">
                            <template v-for="(date, k) in schedule.enrollment.dates">
                                <div :key="k">
                                    <v-combobox
                                        v-if="date === day.date"
                                        :items="statuses"
                                        v-model="day.status"
                                    ></v-combobox>
                                </div>
                            </template>
                        </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-textarea
                            v-model="notes"
                            label="add notes"
                        ></v-textarea>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-timeline dense>
                            
                            <v-timeline-item
                                v-for="(note, l) in schedule.enrollment.notes"
                                :key="l"
                                icon="mdi-chart-timeline"
                                color="success"
                                small
                                fill-dot
                            >
                                <v-card
                                    color="success"
                                    dark
                                >
                                    <v-card-title class="text-h6">
                                    {{ note.date }}
                                    </v-card-title>
                                    <v-card-text class="white text--primary">
                                    <p v-html="note.notes"></p>
                                    
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            
                        </v-timeline>
                    </v-col>
                </v-row>
                <v-simple-table
                    class="d-none"
                    fixed-header
                    height="100%"
                    id="attendance"
                >
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th :colspan="schedule.enrollment.dates.length + 1"> 
                                <h2>{{ schedule.enrollment.schedule.product | toUpper }} </h2>
                                <h2>{{ schedule.enrollment.schedule.teacher | toUpper }}</h2>
                                <h2>{{ schedule.enrollment.schedule.time_start }} - {{ schedule.enrollment.schedule.time_end }}</h2>
                                <h2>{{ schedule.enrollment.schedule.location | toUpper }}</h2>
                                <h2>{{ schedule.enrollment.schedule.weekday }}</h2>
                                <h2>{{ schedule.enrollment.schedule.studio }}</h2> 
                            </th>
                        </tr>
                        <tr>
                        <th class="text-left">Timings</th>
                        <th class="text-left" style="width: 5vh" v-for="(date, index) in schedule.enrollment.dates" :key="index">
                            {{ date }}
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(enroll, i) in schedule.enrollment.enrolled"
                        :key="i"
                        >
                        <td>{{ enroll.fullname | toUpper }}</td>
                        <td class="text-center"  v-for="(day, j) in enroll.attendance" :key="j">
                            <template v-for="(date, k) in schedule.enrollment.dates">
                                <div :key="k">
                                    <p v-if="date === day.date" v-html="day.status"></p>
                                    
                                </div>
                            </template>
                        </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    class="text-none success"
                    @click="print"
                >
                    print
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    class="text-none success"
                    @click="save"
                    :loading="loading"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
    name: 'samsAttendance',

    data() {
        return {
            notes: null,
            loading: false,
            statuses: ["P", "A"]
        }
    },

    methods: {
        ...mapActions(["SAMS_UPDATE_ATTENDANCE"]),
        ...mapMutations(["SAMS_OPEN_ATTENDANCE"]),

        close() {
            this.SAMS_OPEN_ATTENDANCE()
        },

        print() {
            this.$print('attendance')
        },

        save() {
            this.loading = true
            this.SAMS_UPDATE_ATTENDANCE({
                attendance: this.schedule.enrollment.enrolled,
                notes: this.notes,
                schedule_id: this.schedule.enrollment.schedule_id,
                date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
            })
            .then((result) => {
                this.notes = null
                this.loading = false
            })
        }
    },

    computed: {
        ...mapState(["sams", "schedule"])
    }
}
</script>