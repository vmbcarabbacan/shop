<template>
    <div>
        <v-card>
            <v-form v-model="valid">
                <p class="text-h4 text-center">
                    Please check the child you want to enroll for trial
                </p>
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

                <br>
                <v-divider></v-divider>

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
                                v-model="registration.form.mom.familyName"
                                :rules="[(v) => !!v || 'Family name is required']"
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
                            v-if="registration.isNew"
                        >
                            <v-text-field
                                label="password"
                                v-model="registration.form.password"
                                :type="show_password ? 'text': 'password'"
                                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="show_password = !show_password"
                                :rules="[v => !!v || 'Password is required', v => v && v.length > 7 || 'Password must not less than 8 characters']"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                            v-if="registration.isNew"
                        >
                            <v-text-field
                                label="password"
                                v-model="registration.form.confirm_password"
                                :type="show_password ? 'text': 'password'"
                                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="show_password = !show_password"
                                :rules="[v => v && v === registration.form.password || 'Password not matched!']"
                            ></v-text-field>
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
                                v-model="registration.form.dad.familyName"
                                :rules="[(v) => !!v || 'Family name is required']"
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
                    </v-row>
                </v-card-text>
            </v-form>
            <v-card-text>
                <h3>
                    I agree to fulfil the obligations set forth to StepUp Academy and will ensure all school terms in which I/my child attends are accounted for
                </h3>
                <v-row>
                    <v-col cols="12">
                    
                    <v-checkbox
                        v-model="registration.classTermsAndConditions"
                        class="my-0"
                    >
                        <template v-slot:label>
                        <v-btn @click="termsAndCondition" text class="text-none">
                            Terms &amp; Conditions
                        </v-btn>
                        </template>
                    </v-checkbox>
                    <v-checkbox v-model="registration.waiver" class="my-0">
                        <template v-slot:label>
                        <v-btn @click="covid" text class="text-none">
                            Covid-19
                        </v-btn>
                        </template>
                    </v-checkbox>
                    </v-col>
                </v-row>
            </v-card-text>
            <termsAndConditions />
            <waiver />
            <v-card-actions>
                
                <v-btn
                    class="text-none primary"
                    @click="submitForm"
                    :disabled="!valid || !registration.classTermsAndConditions || !registration.waiver"
                >
                    Submit
                </v-btn>
                <v-btn
                    text
                    @click="nextStepper(1)"
                >
                    Back
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "trialFormData",

    components: {
        termsAndConditions: () => import("../terms/classTermsAndConditions.vue"),
        waiver: () => import("../terms/waiver.vue")
    },

    data() {
        return {
            gender: ["Female", "Male"],
            show_password: false,
            valid: false
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "REGISTRATION_FORM", "REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN", "REGISTRATION_FORM_WAIVER_OPEN"]),
        ...mapActions(["REGISTRATION_TRIAL_FORM"]),
        addMoreChild() {
            this.registration.form.children.push({
                id: 0,
                firstName: null,
                familyName: null,
                gender: "Female",
                nationality: null,
                dateOfBirth: null,
                dob_open: false,
                isSelected: true
            })
        },

        nextStepper(e) {
            this.REGISTRATION_FORM(this.registration.form)
            this.STEPPER(e)
        },

        submitForm() {
            var form = {
                form: this.registration.form,
                email: this.registration.form.mom.emailAddress,
                password: this.registration.form.password
            }
            this.REGISTRATION_FORM(this.registration.form)
            this.REGISTRATION_TRIAL_FORM(form)
        },
        
        termsAndCondition() {
            this.REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN(true)
        },

        covid() {
            this.REGISTRATION_FORM_WAIVER_OPEN(true)
        }
    },

    computed: {
        ...mapState(["registration"])
    }

}
</script>

<style lang="scss" scoped>
    $checkbox-dense-margin-top: 0px !important;
</style>