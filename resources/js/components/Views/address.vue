<template>
    <v-app>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                md="7"
            >
                <v-card
                    flat
                >
                    <v-card-title>
                        Edit your address
                    </v-card-title>
                    <v-card-text>
                        <v-alert
                            type="success"
                            v-show="address.message"
                        >
                            {{ address.message }}
                        </v-alert>
                        <v-form
                            v-model="valid"
                        >
                            <v-select
                                v-model="registration.form.address.country"
                                :items="countries"
                                label="Country/Region"
                                solo
                            ></v-select>
                            <v-text-field
                                v-model="registration.form.address.street"
                                label="Street name"
                                :rules="[v => !!v || 'Street name is required']"
                            ></v-text-field>
                            <v-text-field
                                v-model="registration.form.address.building"
                                label="Building name/no., floor, Apt. or villa no."
                                :rules="[v => !!v || 'Building name is required']"
                            ></v-text-field>
                            <v-select
                                v-model="registration.form.address.city"
                                :items="cities"
                                label="City"
                                solo
                            ></v-select>
                            <v-text-field
                                v-model="registration.form.address.area"
                                label="Area/District"
                                :rules="[v => !!v || 'Area is required']"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            @click="saveAddress"
                            class="text-none primary"
                            :disabled="!valid"
                            :loading="address.loading"
                        >
                            Save Address
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'yourAddress',

    data() {
        return {
            valid: false
        }
    },

    methods: {
        ...mapActions(["ADDRESS_SAVE"]),

        saveAddress() {
            var data = {
                address: this.registration.form.address
            };
            this.ADDRESS_SAVE(data);
        }
    },

    computed: {
        ...mapState(["registration", "countries", "cities", "address"])
    }
}
</script>