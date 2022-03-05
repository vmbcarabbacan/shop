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
                            <p class="text-center text-h5 font-weight-bold">Forgot Password</p>
                        </v-card-title>

                        <v-card-text>

                            <v-alert
                                v-show="resetPassword.error"
                                :value="true"
                                color="error"
                                class="mb-5"
                                dark>
                                {{ resetPassword.error }}
                            </v-alert>
                            <span> Enter your email address and we'll send you the instructions for resetting your password </span>
                            <v-text-field
                                label="Email Address"
                                v-model="email"
                                prepend-icon="mdi-account"
                                :rules="[rules.email]"
                            />
                            <v-alert
                                v-show="resetPassword.successMessage"
                                :value="true"
                                color="success"
                                dark
                            >
                                {{ resetPassword.successMessage }}
                            </v-alert>
                        </v-card-text>
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
            rules: {
                email: v => /.+@.+/.test(v) || "E-mail must be valid",
                required: v => !!v || 'Required',
                password: v => v && v.length >= 6 || 'Password atleast 6 characters'
            },
        }
    },

    methods: {
        ...mapActions(["RESET_PASSWORD"]),

        resetPass() {
            var email = {
                email: this.email
            }
            this.RESET_PASSWORD(email)
        }
    },

    computed: {
        ...mapState(["resetPassword"])
    },
    
    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Reset Password",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "StepUp Academy shop forgot password landing page" },
        {
          name: "keywords",
          content: "StepUp, StepUp Academy, step up " + "Reset Password",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: "Reset Password" },
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
        { property: "og:description", content: "StepUp Academy shop forgot password landing page" },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
        { name: "twitter:title", content: "Reset Password" },
        { name: "twitter:description", content: "StepUp Academy shop forgot password landing page" },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "Reset Password" },
        { itemprop: "description", content: "StepUp Academy shop forgot password landing page" },
        {
          itemprop: "image",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
      ],
      link: [
            {rel: 'canonical', href: `http://localhost:3000/reset-password`}
        ]
    };
  }
}
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
</style>
