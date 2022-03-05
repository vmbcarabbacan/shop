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
                    v-if="Object.keys(dateRange.dateRange).length > 0"
                >
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>
                            <router-link class="text-caption" :to="{name: 'DateRangeView'}"><v-icon small>mdi-arrow-left</v-icon> Go back</router-link>
                            <br> Edit Date Range
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert
                            type="success"
                            v-show="dateRange.message"
                        >
                        {{ dateRange.message }}
                        </v-alert>
                        <v-alert
                            type="error"
                            v-show="dateRange.error"
                        >
                        {{ dateRange.error }}
                        </v-alert>
                        <v-form v-model="valid">
                            <v-text-field
                                label="Name"
                                v-model="dateRange.dateRange.name"
                                :rules="[v => !!v || 'name is required']"
                            ></v-text-field>
                            <v-menu
                                v-model="start"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="dateRange.dateRange.start"
                                    label="Picker without buttons"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="dateRange.dateRange.start"
                                @input="start = false"
                                ></v-date-picker>
                            </v-menu>
                            <v-menu
                                v-model="end"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="dateRange.dateRange.end"
                                    label="Picker without buttons"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="[v => v > dateRange.dateRange.start || 'start date must not greater than end date']"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="dateRange.dateRange.end"
                                :min="dateRange.dateRange.start"
                                @input="end = false"
                                ></v-date-picker>
                            </v-menu>
                            <v-checkbox
                                v-model="dateRange.dateRange.is_end"
                                label="Is date range finish?"
                            ></v-checkbox>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="text-none primary" :loading="dateRange.loading" :disabled="!valid" @click="save">Save</v-btn>
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
    name: "dateRangeEdit",

    created() {
        var data = {
            id: parseInt(this.$route.params.id)
        };
        this.DATERANGE_GET(data);
    },

    data() {
        return { 
            valid: false,
            start: false,
            end: false
        }
    },

    methods: {
        ...mapMutations(["DATERANGE"]),
        ...mapActions(["DATERANGE_SAVE", "DATERANGE_GET"]),

        save() {
            var data = {
                id: this.dateRange.dateRange.id,
                name: this.dateRange.dateRange.name,
                start: this.dateRange.dateRange.start,
                end: this.dateRange.dateRange.end,
                is_end: this.dateRange.dateRange.is_end,
            }
            this.DATERANGE_SAVE(data)
        },
    },

    computed: {
        ...mapState(["dateRange"])
    }
}
</script>