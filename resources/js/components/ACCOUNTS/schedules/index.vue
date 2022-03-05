<template>
    <div>
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
                    <template v-for="schedule in sams.studSchedules">
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
                                {{ schedule.product | toUpper }} 
                                </v-btn>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>

                                        <v-list-item-content>
                                        <v-list-item-title class="text-subtitle-1 font-weight-bold">{{ schedule.teacher | toUpper }}</v-list-item-title>
                                        <v-list-item-title class="font-weight-bold"> {{ schedule.studio }}</v-list-item-title>
                                        <v-list-item-title class="font-weight-bold"> Location: {{ schedule.location | toUpper }}</v-list-item-title>
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
                                        text
                                        color="red"
                                        class="text-none"
                                        href="tel:+971558552797"
                                    >
                                        Contact Reception
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="green"
                                        class="text-none"
                                        :href="`mailto:${schedule.teacher_email}`"
                                    >
                                        Message Teacher
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
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
    name: 'accountsSchedule',

    created() {
        this.SAMS_GET_STUDENT_SCHEDULES();
        this.GET_ALL_TIMING();
    },

    methods: {
        ...mapActions(["SAMS_GET_STUDENT_SCHEDULES", "GET_ALL_TIMING"]),

    },

    computed: {
        ...mapState(["timings", "days", "sams"])
    }
}
</script>