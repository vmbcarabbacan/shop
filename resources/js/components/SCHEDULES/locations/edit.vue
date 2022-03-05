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
                    v-if="Object.keys(location.location).length > 0"
                >
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>
                            <router-link class="text-caption" :to="{name: 'LocationView'}"><v-icon small>mdi-arrow-left</v-icon> Go back</router-link>
                            <br> Edit Location
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
                            <v-checkbox
                                v-model="location.location.is_visible"
                                label="Is visible?"
                            ></v-checkbox>
                            
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
    name: "locationEdit",

    created() {
        var data = {
            id: parseInt(this.$route.params.id)
        };
        this.LOCATION_GET(data);
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
        ...mapActions(["LOCATION_SAVE", "LOCATION_GET"]),

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