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
                    <v-card-title>
                        Edit Staff
                        <v-spacer></v-spacer>
                        <v-select
                            v-model="sams.form.role"
                            :items="roles"
                            label="Role"
                        ></v-select>
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
                                        :rules="[v => !!v || 'First name is required']"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Family Name"
                                        v-model="sams.form.mom.familyName"
                                        :rules="[v => !!v || 'Family name is required']"
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
                                        readonly
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
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                :loading="sams.loading"
                                :disabled="!valid || sams.form.role == 'Admin' ? true : false"
                                class="text-none primary"
                                @click="save"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-form>
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
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: 'authUserEdit',

    created() {
        this.SAMS_VERIFY_EMAIL({email: this.$route.params.email});
    },

    data() {
        return {
            show_password: false,
            valid: false,
            message: null,
            error: null,
            roles: ['Reception', 'Manager', 'Teacher', 'Accounts', 'Others']
        }
    },

    methods: {
        ...mapMutations(["SAMS_FORM", "SAMS_LOADING"]),
        ...mapActions(["REGISTRATION_FORM", "SAMS_VERIFY_EMAIL"]),

        save() {
            var data = {
                form: this.sams.form,
                email: this.sams.form.mom.emailAddress,
                password: this.sams.form.password
            };
            this.SAMS_LOADING(true)
            this.REGISTRATION_FORM(data)
            .then((result) => {
                this.message = 'Staff successfully save!'
                this.error = null
                setTimeout(() => {
                    this.SAMS_LOADING(false)
                    this.$router.push({name: 'Staffs'})
                    this.SAMS_FORM({});
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

    }
}
</script>