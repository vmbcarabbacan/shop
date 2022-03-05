<template>
    <div>
        <v-row justify="center">
            <v-col
                cols="12"
                md="10"
            >

                <v-card
                >
                    <v-card-title>
                        <p class="text-h4 text-center">
                            Please check the child you want to enroll
                        </p>
                    </v-card-title>
                    <v-form v-model="valid">
                        <v-card-text
                            v-for="(child, index) in registration.form.children"
                            :key="index"
                        >
                        <v-checkbox v-model="child.isSelected">
                            <template v-slot:label>
                                <div class="text-h5 font-weight-bold">Child {{index + 1}}</div>
                            </template>
                        </v-checkbox>

                            <v-row
                                align="center"
                            >
                                
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field 
                                        label="First Name" 
                                        v-model="child.firstName"
                                        :rules="[(v) => !!v || 'First name is required']"
                                        suffix="*"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field 
                                        label="Family Name" 
                                        v-model="child.familyName"
                                        :rules="[(v) => !!v || 'Family name is required']"
                                        suffix="*"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-autocomplete 
                                        label="Gender" 
                                        :items="gender" 
                                        v-model="child.gender"
                                    >
                                    </v-autocomplete>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-menu
                                        ref="dob"
                                        v-model="child.dob_open"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="290px"
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="child.dateOfBirth"
                                            label="Date"
                                            persistent-hint
                                            prepend-icon="mdi-calendar"
                                            append-icon="*"
                                            :rules="[(v) => !!v || 'Date of birth is required']"
                                            suffix="*"
                                            v-bind="attrs"
                                            readonly
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker
                                        v-model="child.dateOfBirth"
                                        no-title
                                        :max="new Date().toISOString().substr(0, 10)"
                                        @input="child.dob_open = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <div
                            class="text-center"
                        >
                            <v-btn
                                x-large
                                color="blue darken-2"
                                @click="addMoreChild"
                                dark
                            >
                                Add more child
                            </v-btn>
                        </div>
                    </v-form>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            class="text-none success" 
                            :disabled="!valid"
                            :loading="loading"
                            @click="save"
                        >
                            Save and send registration form
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
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
            You have successfully updated your child details
        </v-snackbar>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'accountChildren',

    data() {
        return {
            gender: ["Female", "Male"],
            valid: false,
            loading: false,
            openMessage: false
        }
    },

    methods: {
        ...mapActions(["REGISTRATION_FORM"]),

        addMoreChild() {
            this.registration.form.children.push({
                id: 0,
                firstName: null,
                familyName: null,
                gender: "Female",
                dateOfBirth: null,
                dob_open: false,
                isSelected: true
            })
        },

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