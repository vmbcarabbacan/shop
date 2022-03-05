<template>
    <div>
        <v-card
            flat
        >
            
            <v-form
                v-model="valid"
                @submit.prevent="nextStepper"
            >
                <v-alert
                    border="top"
                    color="red lighten-2"
                    dark
                    v-show="registration.emailError"
                >
                    {{ registration.emailError }}
                </v-alert>
                <v-text-field
                    label="Email Address"
                    v-model="registration.form.mom.emailAddress"
                    :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                >
                </v-text-field>
                
                <v-row
                    v-if="registration.isNew"
                >
                    <v-col
                        cols="12"
                        md="6"
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
                <v-card-actions>
                    <v-btn
                        color="primary"
                        type="submit"
                        :loading="loading"
                        class="text-none"
                    >
                        {{ registration.isNew && valid ? "Continue" : "Verify Email" }}
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: 'registrationFormLocation',
  
    data() {
        return {
            valid: false,
            show_password: false,
            loading: false
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "REGISTRATION_FORM", "REGISTRATION_ERROR"]),
        ...mapActions(["REGISTRATION_VERIFY_EMAIL"]),

        validate_email() {
            this.loading = true
            var email = {
                email: this.registration.form.mom.emailAddress
            }
            this.REGISTRATION_VERIFY_EMAIL(email)
            .then((result) => {
                this.loading = false;
                if(this.registration.isNew && this.valid) {
                    this.REGISTRATION_ERROR(null);
                    this.STEPPER(2);
                }

                if(!this.registration.isNew) {
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
                        emailAddress: this.registration.form.mom.emailAddress
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
                    password: this.registration.form.password,
                    confirm_password: this.registration.form.confirm_password
                }

                !this.valid ? this.REGISTRATION_FORM(form) : this.STEPPER(2);
                
            });
        },

        nextStepper() {
            this.REGISTRATION_FORM(this.registration.form);
            this.validate_email();
            
        }
    },
    
    computed: {
        ...mapState(["registration"])
    }
}
</script>