<template>
    <v-container>
        <v-row
            justify="center"
            align="start"
        >
            <v-col
                cols="12"
                md="8"
            >
                <v-card
                    v-if="Object.keys(schedule.schedule).length > 0"
                >
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>
                            <router-link class="text-caption" :to="{name: 'ScheduleView'}"><v-icon small>mdi-arrow-left</v-icon> Go back</router-link>
                            <br> Edit Schedule
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert
                            type="success"
                            v-show="schedule.message"
                        >
                        {{ schedule.message }}
                        </v-alert>
                        <v-alert
                            type="error"
                            v-show="schedule.error"
                        >
                        {{ schedule.error }}
                        </v-alert>
                        <v-form
                            v-model="valid"
                        >
                            <v-autocomplete
                                label="Select Location"
                                v-model="schedule.schedule.location_id"
                                :items="location.all"
                                item-text="name"
                                item-value="id"
                                @change="selectedLocation"
                                :rules="[v => v > 0 || 'location is requried']"
                                prepend-icon="mdi-location-enter"
                                solo
                            ></v-autocomplete>
                            
                            <v-autocomplete
                                label="Select Date Range"
                                v-model="schedule.schedule.date_range_id"
                                :items="dateRange.all"
                                item-text="name"
                                item-value="id"
                                :rules="[v => v > 0 || 'date range is requried']"
                                prepend-icon="mdi-location-enter"
                                solo
                            ></v-autocomplete>

                            <v-autocomplete
                                label="Select Lesson"
                                v-model="schedule.schedule.product_id"
                                :items="product.lessonAll"
                                item-text="name"
                                item-value="id"
                                :rules="[v => v > 0 || 'lesson is requried']"
                                prepend-icon="mdi-google-classroom"
                                solo
                            ></v-autocomplete>
                            
                            <v-autocomplete
                                label="Select Teacher"
                                v-model="schedule.schedule.user_id"
                                :items="registration.teachers"
                                item-text="name"
                                item-value="id"
                                :rules="[v => v > 0 || 'teacher is requried']"
                                prepend-icon="mdi-shield-account-outline"
                                solo
                            ></v-autocomplete>

                            <v-autocomplete
                                label="Select Day"
                                v-model="schedule.schedule.weekday_id"
                                :items="weekday.days"
                                item-text="name"
                                item-value="id"
                                :rules="[v => v > 0 || 'day is requried']"
                                prepend-icon="mdi-view-week-outline"
                                solo
                            ></v-autocomplete>

                            <v-autocomplete
                                label="Select Studio"
                                v-model="schedule.schedule.studio_id"
                                :items="studio.all"
                                item-text="name"
                                item-value="id"
                                :rules="[v => v > 0 || 'studio is requried']"
                                prepend-icon="mdi-map-marker-outline"
                                solo
                            ></v-autocomplete>

                            <v-dialog
                                ref="time_start"
                                v-model="start"
                                :return-value.sync="schedule.schedule.time_start"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="schedule.schedule.time_start"
                                    label="Select Time Start"
                                    prepend-icon="mdi-clock-time-one-outline"
                                    :rules="[v => !!v || 'time start is requried']"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    solo
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="start"
                                v-model="schedule.schedule.time_start"
                                full-width
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="start = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.time_start.save(schedule.schedule.time_start)"
                                >
                                    OK
                                </v-btn>
                                </v-time-picker>
                            </v-dialog>

                            <v-dialog
                                ref="time_end"
                                v-model="end"
                                :return-value.sync="schedule.schedule.time_end"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="schedule.schedule.time_end"
                                    label="Select Time End"
                                    prepend-icon="mdi-clock-time-two-outline"
                                    :rules="[v => !!v || 'time end is requried']"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    solo
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="end"
                                v-model="schedule.schedule.time_end"
                                full-width
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="end = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.time_end.save(schedule.schedule.time_end)"
                                >
                                    OK
                                </v-btn>
                                </v-time-picker>
                            </v-dialog>

                            <v-text-field
                                label="Enter Quantity"
                                v-model.number="schedule.schedule.quantity"
                                type="number"
                                prepend-icon="mdi-equal"
                                :rules="[v => !!v || 'quantity is requried']"
                            ></v-text-field>

                            <v-text-field
                                label="Enter Student Limit"
                                v-model.number="schedule.schedule.limit"
                                type="number"
                                prepend-icon="mdi-equal"
                                :rules="[v => !!v || 'limit is requried']"
                            ></v-text-field>

                            <v-text-field
                                label="Enter Price"
                                v-model.number="schedule.schedule.price"
                                type="number"
                                prepend-icon="mdi-currency-php"
                                :rules="[v => !!v || 'price is requried']"
                            ></v-text-field>

                            <v-checkbox
                                v-model="schedule.schedule.isVisible"
                                label="is visible?"
                            ></v-checkbox>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="text-none primary" :loading="schedule.loading" :disabled="!valid" @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    v-else
                >
                    <v-card-text>
                        <p class="text-center">Please wait while getting your data <span> <v-progress-circular
                        :width="3"
                        color="green"
                        indeterminate
                        ></v-progress-circular></span></p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name: 'scheduleEdit',

    created() {
        var data = {
            id: parseInt(this.$route.params.id)
        };
        this.SCHEDULE_GET(data);
        // this.SCHEDULE_GET_ALL_DETAILS();
    },

    data() {
        return {
            start: false,
            end: false,
            valid: false,
        }
    },


    methods: {
        ...mapMutations(["SCHEDULE"]),
        ...mapActions(["SCHEDULE_GET_ALL_DETAILS", "WEEKDAYS", "SCHEDULE_SAVE", "SCHEDULE_GET", "DATERANGE_ALL"]),

        selectedLocation(e) {
            var data = {
                id: e
            };
            this.WEEKDAYS(data)
            this.DATERANGE_ALL(data)
        },

        save() {
            this.SCHEDULE_SAVE(this.schedule.schedule)
        },
    },

    computed: {
        ...mapState(["schedule", "location", "studio", "product", "registration", "weekday", "dateRange"]),

        duration() {
            var timeStart = new Date("01/01/2007 " + this.schedule.schedule.time_start);
            var timeEnd = new Date("01/01/2007 " + this.schedule.schedule.time_end);
            
            var diff =(timeStart.getTime() - timeEnd.getTime()) / 1000;
            diff /= 60;

            this.schedule.schedule.duration = Math.abs(Math.round(diff));
            return Math.abs(Math.round(diff));

        }
    }
}
</script>