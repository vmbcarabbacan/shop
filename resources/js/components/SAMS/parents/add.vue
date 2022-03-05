<template>
    <v-app>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                md="8"
            >
                <v-card
                    v-if="Object.keys(sams.form).length > 0"
                >
                    <v-toolbar
                        flat
                        dark
                        color="primary"
                    >
                        <v-toolbar-title>
                            Form
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-stepper v-model="stepper">
                        <v-stepper-header>
                            <v-stepper-step
                                :complete="stepper > 1"
                                step="1"
                            >
                                Check Email
                            </v-stepper-step>

                             <v-divider></v-divider>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="stepper > 2"
                                step="2"
                            >
                                Child Information
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step 
                                :complete="stepper > 3"
                                step="3"
                            >
                                
                                Parent's Information
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="4">
                                Details
                            </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <verifyEmail />
                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <children />
                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <parent />
                            </v-stepper-content>

                            <v-stepper-content step="4">
                                <detail />
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
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
    </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: 'parentAdd',

    components: {
        verifyEmail: () => import('./form/verifyEmail.vue'),
        children: () => import('./form/children.vue'),
        parent: () => import('./form/parent.vue'),
        detail: () => import('./form/details.vue')
    },

    created() {
        if(!this.sams.isEdit) {
            this.SAMS_FORM(this.myDatas);
        }
    },

    methods: {
        ...mapMutations(["SAMS_FORM"])
    },

    computed: {
        ...mapState(["stepper", "sams"]),

        myDatas() {
            return {
                id: 0,
                location: "motor city",
                children: [
                    {
                        id: 0,
                        firstName: null,
                        familyName: null,
                        gender: "Female",
                        nationality: null,
                        dateOfBirth: null,
                        dob_open: false,
                        isSelected: true
                    }
                ],
                mom: {
                    firstName: null,
                    familyName: null,
                    nationality: null,
                    mobileNumber: null,
                    homeNumber: null,
                    workNumber: null,
                    company: null,
                    emailAddress: null
                },
                dad: {
                    firstName: null,
                    familyName: null,
                    nationality: null,
                    mobileNumber: null,
                    homeNumber: null,
                    workNumber: null,
                    company: null,
                    emailAddress: null
                },
                address: {
                    id: 0,
                    address_1: null,
                    area: null,
                    building: null,
                    city: 'Dubai',
                    country: 'AE',
                    street: null,
                    zip: '00000',

                },
                role: "User",
                password: null,
                confirm_password: null
            };
        }
    },

    
}
</script>