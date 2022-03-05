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
                <v-card>
                    <v-card-title>
                        Add New Teacher
                    </v-card-title>
                    <v-form
                        v-model="valid"
                    >
                        <v-card-text>
                            <v-alert
                                type="success"
                                v-show="message"
                            >{{message}}</v-alert>
                            <v-alert
                                type="error"
                                v-show="error"
                            >{{error}}</v-alert>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="First Name"
                                        v-model="sams.form.mom.firstName"
                                        :rules="specialRules"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Family Name"
                                        v-model="sams.form.mom.familyName"
                                        :rules="specialRules"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Email Address"
                                        v-model="sams.form.mom.emailAddress"
                                        :rules="[v => !!v || 'Email address is required']"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Contact Number"
                                        v-model="sams.form.mom.mobileNumber"
                                        type="number"
                                        :rules="[v => !!v || 'Contact number is required', v => v.length > 8 && v.length < 10 || 'enter valid number']"
                                        hint="example: 565123456"
                                        persistent-hint
                                    ></v-text-field>
                                </v-col>
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
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                :loading="sams.loading"
                                :disabled="!valid"
                                class="text-none primary"
                                @click="save"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: 'samsTeacherAdd',

    created() {
        
        this.SAMS_FORM(this.myDatas);
    },

    data() {
        return {
            show_password: false,
            valid: false,
            message: null,
            error: null,
            specialRules: [
                v => !!v || 'Name is required',
                v => /^[A-Za-z]+$/.test(v) || 'Please enter character a-z only',
            ],
        }
    },

    methods: {
        ...mapMutations(["SAMS_FORM", "SAMS_LOADING"]),
        ...mapActions(["REGISTRATION_FORM"]),

        save() {
            var data = {
                form: this.sams.form,
                email: this.sams.form.mom.emailAddress,
                password: this.sams.form.password
            };
            this.SAMS_LOADING(true)
            this.REGISTRATION_FORM(data)
            .then((result) => {
                this.message = 'Teacher successfully save!'
                this.error = null
                setTimeout(() => {
                    this.SAMS_LOADING(false)
                    this.$router.push({name: 'Teachers', params: {role: 'Teacher'}})
                    this.SAMS_FORM(this.myDatas);
                    this.message = null
                }, 3000);
            })
            .catch((err) => {
                this.SAMS_LOADING(false)
                this.message = null
                this.error = 'Email address was alrady used'
                setTimeout(() => {
                    this.error = null
                }, 3000);
            })
            
        }
    },

    computed: {
        ...mapState(["sams"]),

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
                role: "Teacher",
                password: null,
                confirm_password: null
            };
        }
    }
}
</script>