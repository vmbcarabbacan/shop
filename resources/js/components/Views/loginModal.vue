<template>
    <v-app>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                md="6"
            >
                <v-form
                    v-model="valid"
                    @submit.prevent="signIn"
                >
                    <v-card :loading="login.loading">
                        <v-toolbar dense color="blue darken-2" dark>
                            <v-toolbar-title>
                                Sign in
                            </v-toolbar-title>
                        </v-toolbar>
                        
                        <v-card-text v-if="status == 'Verify'">
                            <v-alert v-show="login.error" :value="true" color="error" class="mb-5">
                                {{ login.error }}
                            </v-alert>
                            <v-text-field
                                label="Email Address"
                                v-model="login.form.emailAddress"
                                :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                            />
                            <v-btn
                                v-show="login.error"
                                @click="createNewAccount"
                                class="text-none"
                                text
                            >
                                Create new account?
                            </v-btn>
                        </v-card-text>
                        
                        
                        <v-card-text v-if="status == 'Login'">
                            <v-alert v-show="login.error" :value="true" color="error" class="mb-5">
                                {{ login.error }}
                            </v-alert>
                            <p>
                                {{ login.form.emailAddress }}
                                <v-btn @click="changeEmail" class="text-none" text>
                                Change email address?
                                </v-btn>
                            </p>
                            <v-text-field
                                label="password"
                                v-model="login.form.password"
                                :rules="[v => !!v || 'Password is required', v => v && v.length > 7 || 'Password must not less than 8 characters']"
                                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show_password ? 'text' : 'password'"
                                @click:append="show_password = !show_password"
                            />
                            <a href="/reset-password"> Reset Password </a>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary text-none" type="submit" :loading="login.loading" :disabled="!valid">
                            {{ status }}
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "login",

    data() {
        return {
            show_password: false,
            valid: false,
            status: "Verify",
        }
    },

    methods: {
        ...mapMutations(["LOGIN_OPEN", "LOGIN_ERROR", "LOGIN_FORM", "LOGIN_LOADING", "REGISTRATION_FORM"]),
        ...mapActions(["REGISTRATION_VERIFY_EMAIL", "LOGIN", "CART_UPDATE_USER"]),
        

        changeEmail() {
            this.status = "Verify";
        },

        signIn() {
            this.LOGIN_LOADING(true)
            this.LOGIN_ERROR(null);
            switch (this.status) {
                case "Verify":
                    this.verify()
                    break;
                case "Login":
                    this.tryLogin()
                    break;
                default: break;
            }
        },

        createNewAccount() {
            var email = {
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
                    emailAddress: this.login.form.emailAddress
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
                password: null,
                confirm_password: null
            }
            this.REGISTRATION_FORM(email);
            this.$router.push({name: "Registration"});
            this.close();
        },

        verify() {
            var email = {
                email: this.login.form.emailAddress
            }
            this.REGISTRATION_VERIFY_EMAIL(email)
            .then((result) => {
                this.status = "Login";
                this.LOGIN_LOADING(false);
            })
            .catch((err) => {
                this.LOGIN_ERROR("Email not found");
                this.LOGIN_LOADING(false);
            })
        },

        tryLogin() {
            var login = {
                email: this.login.form.emailAddress,
                password: this.login.form.password
            }
            this.LOGIN(login)
            .then((result) => {
                this.$router.push('/')
                var cart = {
                    user_id: result.data.user.id,
                    carts: this.cart.carts,
                    wishlist: this.cart.wishlist
                }
                this.CART_UPDATE_USER(cart)
                this.LOGIN_LOADING(false);
            })
            .catch((err) => {
                this.LOGIN_LOADING(false);
            })
        },


    },

    computed: {
        ...mapState(["login", "registration"])
    },
    
    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Login",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "StepUp Academy shop login landing page" },
        {
          name: "keywords",
          content: "StepUp, StepUp Academy, step up " + "Login",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: "Login" },
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
        { property: "og:description", content: "StepUp Academy shop login landing page" },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
        { name: "twitter:title", content: "Login" },
        { name: "twitter:description", content: "StepUp Academy shop login landing page" },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "Login" },
        { itemprop: "description", content: "StepUp Academy shop login landing page" },
        {
          itemprop: "image",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
      ],
      link: [
            {rel: 'canonical', href: `http://localhost:3000/login`}
        ]
    };
  }
}
</script>