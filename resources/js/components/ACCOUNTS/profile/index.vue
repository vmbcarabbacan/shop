<template>
    <div>
        <v-row
            justify="center"
        >
            <v-form
                v-model="valid"
            >
            <v-col
                cols="10"
            >
                <v-card>
                    <v-toolbar
                        flat
                        dark
                        color="success"
                    >
                        <v-toolbar-title>
                            Mom
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="First Name"
                                    v-model="registration.form.mom.firstName"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Family Name"
                                    v-model="registration.form.mom.familyName"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Email Address"
                                    v-model="registration.form.mom.emailAddress"
                                    disabled
                                    readonly
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Contact Number"
                                    type="number"
                                    v-model="registration.form.mom.mobileNumber"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Nationality"
                                    v-model="registration.form.mom.nationality"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Company"
                                    v-model="registration.form.mom.company"
                                    
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                cols="10"
            >
                <v-card>
                    <v-toolbar
                        flat
                        dark
                        color="success"
                    >
                        <v-toolbar-title>
                            Dad
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="First Name"
                                    v-model="registration.form.dad.firstName"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Family Name"
                                    v-model="registration.form.dad.familyName"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Email Address"
                                    v-model="registration.form.dad.emailAddress"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Contact Number"
                                    type="number"
                                    v-model="registration.form.dad.mobileNumber"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Nationality"
                                    v-model="registration.form.dad.nationality"
                                    :rules="[v => !!v || 'required']"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="Company"
                                    v-model="registration.form.dad.company"
                                    
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            
            <v-col
                cols="10"
            >
                <v-card
                    flat
                    tile
                >
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            class="text-none success" 
                            :disabled="!valid"
                            :loading="loading"
                            @click="save"
                        >
                            Save Details
                        </v-btn>
                    </v-card-actions>
                </v-card>
                
            </v-col>
            </v-form>
        </v-row>
        <v-snackbar
            :timeout="-1"
            v-model="openMessage"
            absolute
            top
            right
            color="deep-purple accent-4"
            elevation="24"
        >
            You have successfully updated your profile
        </v-snackbar>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
    name: 'accountProfile',

    data() {
        return {
            valid: false,
            loading: false,
            openMessage: false
        }
    },

    methods: {
        ...mapActions(["REGISTRATION_FORM"]),

        save() {
            this.loading = true
            this.REGISTRATION_FORM({
                form: this.registration.form,
                email: this.registration.form.mom.emailAddress,
                password: null
            })
            .then((result) => {
                this.loading = false
                this.openMessage = true
            })
        }
    },

    computed: {
        ...mapState(["registration"])
    }
}
</script>