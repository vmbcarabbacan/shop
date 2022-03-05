<template>
    <div>
        <v-card
            flat
        >
            <v-card-text>
                <p class="text-h4 text-center font-weight-bold">Please enter character A-Z only; no special character like (á, é, í, ò, ù, ', ", \, /, etc...) </p>
            </v-card-text>
            <v-form
                v-model="valid"
            >
                <v-card-text>
                    <p class="text-h5 font-weight-bold">Mom Information</p>
                    <v-row
                        align="center"
                    >
                        
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="First Name" 
                                v-model="registration.form.mom.firstName"
                                :rules="specialRules"
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
                                v-model="registration.form.mom.familyName"
                                :rules="specialRules"
                                suffix="*"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Email Address" 
                                v-model="registration.form.mom.emailAddress"
                                suffix="*"
                                readonly
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Nationality" 
                                v-model="registration.form.mom.nationality"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Mobile Number" 
                                v-model="registration.form.mom.mobileNumber"
                                :rules="[v => !!v || 'Mobile number is required', v => v.length > 8 && v.length < 10 || 'enter valid number']"
                                suffix="*"
                                type="number"
                                hint="example: 565123456"
                                persistent-hint
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Home Number" 
                                v-model="registration.form.mom.homeNumber"
                                type="number"
                                hint="example: 565123456"
                                persistent-hint
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Work Number" 
                                v-model.number="registration.form.mom.workNumber"
                                type="number"
                                hint="example: 565123456"
                                persistent-hint
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Company" 
                                v-model="registration.form.mom.company"
                            >
                            </v-text-field>
                        </v-col> 
                    </v-row>
                </v-card-text>
                <v-card-text>
                    <p class="text-h5 font-weight-bold">Dad Information</p>
                    <v-row
                        align="center"
                    >
                        
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="First Name" 
                                v-model="registration.form.dad.firstName"
                                :rules="specialRules"
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
                                v-model="registration.form.dad.familyName"
                                :rules="specialRules"
                                suffix="*"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Email Address" 
                                v-model="registration.form.dad.emailAddress"
                                :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                                suffix="*"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Nationality" 
                                v-model="registration.form.dad.nationality"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Mobile Number" 
                                v-model="registration.form.dad.mobileNumber"
                                type="number"
                                :rules="[v => !!v || 'Mobile number is required', v => v.length > 8 && v.length < 10 || 'enter valid number']"
                                suffix="*"
                                hint="example: 565123456"
                                persistent-hint
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Home Number" 
                                v-model.number="registration.form.dad.homeNumber"
                                type="number"
                                hint="example: 565123456"
                                persistent-hint
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Work Number" 
                                v-model.number="registration.form.dad.workNumber"
                                type="number"
                                hint="example: 565123456"
                                persistent-hint
                            >
                            </v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field 
                                label="Company" 
                                v-model="registration.form.dad.company"
                            >
                            </v-text-field>
                        </v-col> 
                    </v-row>
                </v-card-text>
            </v-form>
        </v-card>

        <div
            class="mt-6"
        >
            <v-btn
                color="primary"
                @click="nextStepper(5)"
                class="text-none"
                :disabled="!valid"
            >
                View Details
            </v-btn>
            <v-btn
                text
                @click="nextStepper(3)"
            >
                Back
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "registrationFormParent",

    data() {
        return {
            valid: false,
            specialRules: [
                v => !!v || 'Name is required',
                v => /^[A-Za-z]+$/.test(v) || 'Please enter character a-z only',
            ],
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "REGISTRATION_FORM"]),

        nextStepper(e) {
            this.STEPPER(e)
            this.REGISTRATION_FORM(this.registration.form)
        },
    },

    computed: {
        ...mapState(["registration"])
    }
}
</script>