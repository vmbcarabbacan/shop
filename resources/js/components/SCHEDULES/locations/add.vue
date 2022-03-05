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
                >
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>
                            <router-link class="text-caption" :to="{name: 'LocationView'}"><v-icon small>mdi-arrow-left</v-icon> Go back</router-link>
                            <br> Add Location
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert
                            type="success"
                            v-show="location.message"
                        >
                        {{ location.message }}
                        </v-alert>
                        <v-alert
                            type="error"
                            v-show="location.error"
                        >
                        {{ location.error }}
                        </v-alert>
                        <v-form v-model="valid">
                            <v-text-field
                                label="Name"
                                v-model="location.location.name"
                                :rules="[v => !!v || 'name is required']"
                            ></v-text-field>
                            <br>
                            <p class="font-weight-bold text-body-1">Weekdays</p>
                            <v-row v-for="(weekday, index) in location.location.weekdays" :key="index">
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Name"
                                        v-model="weekday.name"
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Value"
                                        v-model.number="weekday.value"
                                        type="number"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="text-none primary" :loading="location.loading" :disabled="!valid" @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name: "locationAdd",

    created() {
        var data = {
            id: 0,
            name: null,
            is_visible: true,
            weekdays: [
                {
                    id: 0,
                    day_id: 1,
                    name: "Monday",
                    value: 0
                },
                {
                    id: 0,
                    day_id: 2,
                    name: "Tuesday",
                    value: 0
                },
                {
                    id: 0,
                    day_id: 3,
                    name: "Wednesday",
                    value: 0
                },
                {
                    id: 0,
                    day_id: 4,
                    name: "Thursday",
                    value: 0
                },
                {
                    id: 0,
                    day_id: 5,
                    name: "Friday",
                    value: 0
                },
                {
                    id: 0,
                    day_id: 6,
                    name: "Saturday",
                    value: 0
                },
                {
                    id: 0,
                    day_id: 7,
                    name: "Sunday",
                    value: 0
                }
            ]
        }
        this.LOCATION(data);
    },

    data() {
        return { 
            valid: false,
            start: false,
            end: false
        }
    },

    methods: {
        ...mapMutations(["LOCATION"]),
        ...mapActions(["LOCATION_SAVE"]),

        save() {
            var data = {
                id: this.location.location.id,
                name: this.location.location.name,
                is_visible: this.location.location.is_visible,
                weekdays: this.location.location.weekdays
            }
            this.LOCATION_SAVE(data)
        },
    },

    computed: {
        ...mapState(["location"])
    }
}
</script>