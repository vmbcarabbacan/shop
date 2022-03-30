<template>
    <div>
        <v-card
            flat
        >
            <v-card-text>
                <p class="text-h4 text-center font-weight-bold">Please enter character A-Z only; no special character like (á, é, í, ò, ù, ', ", \, /, etc...) </p>
            </v-card-text>
            <v-form v-model="valid">
                <v-card-text
                    v-for="(child, index) in sams.form.children"
                    :key="index"
                >
                    <p class="text-h5 font-weight-bold">Child {{index + 1}}</p>
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
                                v-model="child.familyName"
                                :rules="specialRules"
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
        </v-card>

        <div
            class="mt-6"
        >
            <v-btn
                color="primary"
                @click="nextStepper(3)"
                :disabled="!valid"
            >
                Continue
            </v-btn>
            <v-btn
                text
                @click="nextStepper(1)"
            >
                Back
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "parentsFormChildren",

    data() {
        return {
            gender: ["Female", "Male"],
            valid: false,
            specialRules: [
                v => !!v || 'Name is required',
                v => /^[A-Za-z ]+$/.test(v) || 'Please enter character a-z only',
            ],
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "SAMS_FORM"]),

        nextStepper(e) {
            this.STEPPER(e)
            this.SAMS_FORM(this.sams.form)
        },

        addMoreChild() {
            this.sams.form.children.push({
                id: 0,
                firstName: null,
                familyName: null,
                gender: "Female",
                nationality: null,
                dateOfBirth: null,
                dob_open: false,
                isSelected: true
            })
        }
    },

    computed: {
        ...mapState(["sams"])
    }
}
</script>