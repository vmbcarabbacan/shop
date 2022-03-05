<template>
    <v-app>
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-form v-model="valid" @submit.prevent="resetPass">
                        <v-card>
                        <v-card-title>
                            <p class="text-center text-h5 font-weight-bold">Password Reset</p>
                        </v-card-title>

                        <v-card-text>

                            <v-alert
                                v-show="resetPassword.errorCommit"
                                :value="true"
                                color="error"
                                class="mb-5"
                                dark>
                                {{ resetPassword.errorCommit }}
                            </v-alert>
                            <span> Enter your new password </span>

                            <v-text-field
                                label="Password"
                                v-model="resetPassword.form.password"
                                :type="showPassword ? 'text': 'password'"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                                :rules="[v => !!v || 'Password is required', v => v && v.length > 7 || 'Password must not less than 8 characters']"
                            ></v-text-field>

                            <v-text-field
                                label="Confirm password"
                                v-model="resetPassword.form.confirmPassword"
                                :type="showPassword ? 'text': 'password'"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                                :rules="[v => v && v === resetPassword.form.password || 'Password not matched!']"
                            ></v-text-field>
                        </v-card-text>

                        <v-alert
                                v-show="resetPassword.successMessageCommit"
                                :value="true"
                                color="success"
                                dark
                            >
                                {{ resetPassword.successMessageCommit }}
                            </v-alert>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                type="submit"
                                class="text-none primary"
                                :disabled="!valid"
                                :loading="resetPassword.loading"
                            >
                                Submit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-form>
                </v-col>
            </v-row>
    </v-app>
</template>
<script>

import { mapState, mapActions } from "vuex";
export default {
    name: 'resetPassword',

    data() {
        return {
            valid: false,
            email: null,
            password: null,
            confirmPassword: null,
            showPassword: false,
            rules: {
                email: v => /.+@.+/.test(v) || "E-mail must be valid",
                required: v => !!v || 'Required',
                password: v => v && v.length >= 6 || 'Password atleast 6 characters'
            },
        }
    },

    methods: {
        ...mapActions(["RESET_PASSWORD_CONFIRM"]),

        resetPass() {
            var email = {
                id: parseInt(this.$route.params.id),
                token: this.$route.params.token,
                password: this.resetPassword.form.password
            }
            this.RESET_PASSWORD_CONFIRM(email)
        }
    },

    computed: {
        ...mapState(["resetPassword"])
    },
    
    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Forgot Password",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "StepUp Academy shop forgot password initiate landing page" },
        {
          name: "keywords",
          content: "StepUp, StepUp Academy, step up " + "Forgot Password",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: "Forgot Password" },
        { property: "og:site_name", content: "StepUp Academy" },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        {
          property: "og:url",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
        {
          property: "og:image",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: "StepUp Academy shop forgot password initiate landing page" },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
        { name: "twitter:title", content: "Forgot Password" },
        { name: "twitter:description", content: "StepUp Academy shop forgot password initiate landing page" },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "Forgot Password" },
        { itemprop: "description", content: "StepUp Academy shop forgot password initiate landing page" },
        {
          itemprop: "image",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
      ],
    };
  }
}
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
</style>
