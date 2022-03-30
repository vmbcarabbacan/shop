<template>
    <div>
        <v-card
            flat
        >
            <p class="text-h4 text-center">
                Please check the child you want to enroll
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
                <v-row>
                    <v-col
                        cols="12"
                    >
                        Name: <span class="text-subtitle-1 font-weight-bold">{{ child.firstName }} {{ child.familyName }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Gender: <span class="text-subtitle-1 font-weight-bold">{{ child.gender }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Date of Birth: <span class="text-subtitle-1 font-weight-bold">{{ child.dateOfBirth | date }}</span>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-text>
                <p class="text-h5 font-weight-bold">Mom's Information</p>
                <v-row>
                    <v-col
                        cols="12"
                    >
                        Name: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.mom.firstName }} {{ registration.form.mom.familyName }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Email Address: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.mom.emailAddress }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Nationality: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.mom.nationality }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Mobile Number: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.mom.mobileNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Home Number: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.mom.homeNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Work Number: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.mom.workNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        Company: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.mom.company }}</span>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-text>
                <p class="text-h5 font-weight-bold">Dad's Information</p>
                <v-row>
                    <v-col
                        cols="12"
                    >
                        Name: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.dad.firstName }} {{ registration.form.dad.familyName }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Email Address: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.dad.emailAddress }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Nationality: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.dad.nationality }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Mobile Number: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.dad.mobileNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Home Number: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.dad.homeNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Work Number: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.dad.workNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        Company: <span class="text-subtitle-1 font-weight-bold">{{ registration.form.dad.company }}</span>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-text>
                <h3>
                    I agree to fulfil the obligations set forth to StepUp Academy and will ensure all school terms in which I/my child attends are accounted for
                </h3>
                <v-row>
                    <v-col cols="12">
                    
                    <template v-for="(form, index) in form.active">
                        <div :key="index">
                            <v-checkbox
                                v-model="form.isCheck"
                                class="my-0"
                            >
                                <template v-slot:label>
                                <v-btn @click="termsAndCondition(form)" text class="text-none">
                                    {{ form.name | toUpper }}
                                </v-btn>
                                </template>
                            </v-checkbox>
                        </div>
                    </template>
                    </v-col>
                </v-row>
            </v-card-text>
            
            <v-dialog
                v-model="open"
                width="800"
                v-if="open"
            >
                <v-card>
                    <v-card-text>
                        <div v-html="iagrees.body"></div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="open = !open">Agree and Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <thankYou />
        </v-card>

        <v-btn
            color="primary"
            @click="submit"
            :disabled="!isCheck"
            :loading="registration.loading"
        >
            Submit
        </v-btn>

        <v-btn
            text
            @click="nextStepper(4)"
        >
            Back
        </v-btn>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "registrationFormParent",

    components: {
        thankYou: () => import("./submitModal.vue")
    },

    data() {
        return {
            error: null,
            iagrees: null,
            open: false
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN", "REGISTRATION_FORM_WAIVER_OPEN", "SAMS_LOADING"]),
        ...mapActions(["REGISTRATION_FORM"]),

        submit() {
            var form = {
                form: this.registration.form,
                email: this.registration.form.mom.emailAddress,
                password: this.registration.form.password
            }
            this.SAMS_LOADING(true)
            this.REGISTRATION_FORM(form)
            .then((result) => {
                this.$router.push({name: 'Home'})
                this.STEPPER(1)
                this.SAMS_LOADING(false)
            })
            .catch((err) => {
                this.SAMS_LOADING(false)
                this.error = err.response.data.errors.email
                setTimeout(() => {
                    this.error = null
                    this.$router.push({name: "Home"})
                }, 5000);
            });
        },

        nextStepper(e) {
            this.STEPPER(e)
        },

        termsAndCondition(e) {
            this.iagrees = e
            this.open = true
        },

        covid() {
            this.REGISTRATION_FORM_WAIVER_OPEN(true)
        }

        
    },

    computed: {
        ...mapState(["registration", "form"]),

        isCheck() {
            return this.form.active.every(v => v.isCheck == 1)
        }
    }
}
</script>

<style lang="scss" scoped>
    $checkbox-dense-margin-top: 0px !important;
</style>