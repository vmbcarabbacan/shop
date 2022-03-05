<template>
    <div>
        <v-card
            flat
        >
            <p class="text-h4 text-center">
                Please check the child you want to enroll
            </p>
            <v-alert
                type="error"
                v-show="error"
            >
                <template v-for="err in error">
                    <div :key="err">
                        {{ err }}
                    </div>
                </template>
            </v-alert>
            <v-card-text
                v-for="(child, index) in sams.form.children"
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
                        Name: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.mom.firstName }} {{ sams.form.mom.familyName }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Email Address: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.mom.emailAddress }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Nationality: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.mom.nationality }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Mobile Number: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.mom.mobileNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Home Number: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.mom.homeNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Work Number: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.mom.workNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        Company: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.mom.company }}</span>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-text>
                <p class="text-h5 font-weight-bold">Dad's Information</p>
                <v-row>
                    <v-col
                        cols="12"
                    >
                        Name: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.dad.firstName }} {{ sams.form.dad.familyName }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Email Address: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.dad.emailAddress }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        Nationality: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.dad.nationality }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Mobile Number: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.dad.mobileNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Home Number: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.dad.homeNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        Work Number: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.dad.workNumber }}</span>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        Company: <span class="text-subtitle-1 font-weight-bold">{{ sams.form.dad.company }}</span>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-btn
            color="primary"
            @click="submit"
            :loading="sams.loading"
        >
            Submit
        </v-btn>

        <v-btn
            text
            @click="nextStepper(3)"
        >
            Back
        </v-btn>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "parentsFormParent",

    data() {
        return {
            error: null
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "SAMS_LOADING"]),
        ...mapActions(["REGISTRATION_FORM"]),

        submit() {
            this.SAMS_LOADING(true)
            var form = {
                form: this.sams.form,
                email: this.sams.form.mom.emailAddress,
                password: this.sams.form.password
            }
            this.REGISTRATION_FORM(form)
            .then((result) => {
                this.$router.push({name: 'Parents'})
                this.STEPPER(1)
                this.SAMS_LOADING(false)
            })
            .catch((err) => {
                this.SAMS_LOADING(false)
                this.error = err.response.data.errors.email
                setTimeout(() => {
                    this.error = null
                }, 5000);
            })

        },

        nextStepper(e) {
            this.STEPPER(e)
        },
  
    },

    computed: {
        ...mapState(["sams"])
    }
}
</script>

<style lang="scss" scoped>
    $checkbox-dense-margin-top: 0px !important;
</style>