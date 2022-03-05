<template>
    <div>
        <v-form
            v-model="valid"
            @submit.prevent="nextStepper"
        >
            <v-card
                flat
            >
                <v-alert
                    border="top"
                    color="red lighten-2"
                    dark
                    v-show="sams.error"
                >
                    {{ sams.error }}
                </v-alert>
                <v-text-field
                    label="Email Address"
                    v-model="sams.form.mom.emailAddress"
                    :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                >
                </v-text-field>
                
                <v-row
                    v-if="sams.isNew"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="password"
                            v-model="sams.form.password"
                            :type="show_password ? 'text': 'password'"
                            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show_password = !show_password"
                            :rules="[v => !!v || 'Password is required', v => v && v.length > 7 || 'Password must not less than 8 characters']"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="password"
                            v-model="sams.form.confirm_password"
                            :type="show_password ? 'text': 'password'"
                            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show_password = !show_password"
                            :rules="[v => v && v === sams.form.password || 'Password not matched!']"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card>

            <v-btn
                color="primary"
                type="submit"
                :loading="loading"
                class="text-none"
            >
                {{ sams.isNew && valid ? "Continue" : "Verify Email" }}
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: 'parentsFormLocation',
  
    data() {
        return {
            valid: false,
            show_password: false,
            loading: false
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "SAMS_FORM", "SAMS_ERROR"]),
        ...mapActions(["SAMS_VERIFY_EMAIL"]),

        validate_email() {
            this.loading = true
            var email = {
                email: this.sams.form.mom.emailAddress
            }
            this.SAMS_VERIFY_EMAIL(email)
            .then((result) => {
                this.loading = false;
                if(this.sams.isNew && this.valid) {
                    this.SAMS_ERROR(null);
                    this.STEPPER(2);
                }

                if(!this.sams.isNew) {
                    this.STEPPER(2);
                }
            })
            .catch((err) => {
                this.loading = false;
                var form = {
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
                        emailAddress: this.sams.form.mom.emailAddress
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
                    password: this.sams.form.password,
                    confirm_password: this.sams.form.confirm_password
                }

                !this.valid ? this.SAMS_FORM(form) : this.STEPPER(2);
                
            });
        },

        nextStepper() {
            this.SAMS_FORM(this.sams.form);
            this.validate_email();
            
        }
    },
    
    computed: {
        ...mapState(["sams"])
    }
}
</script>