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
                    <v-toolbar
                        flat
                        dark
                        color="primary"
                    >
                        <v-toolbar-title>
                            Registration Form
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-stepper v-model="stepper">
                        <v-stepper-header>
                            <v-stepper-step
                                :complete="stepper > 1"
                                step="1"
                            >
                                Check Email
                            </v-stepper-step>

                             <v-divider></v-divider>

                            <v-stepper-step
                                :complete="stepper > 2"
                                step="2"
                            >
                                Location
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="stepper > 3"
                                step="3"
                            >
                                Child Information
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step 
                                :complete="stepper > 4"
                                step="4"
                            >
                                
                                Parent's Information
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="5">
                                Details
                            </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <verifyEmail />
                            </v-stepper-content>
                            
                            <v-stepper-content step="2">
                                <location />
                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <children />
                            </v-stepper-content>

                            <v-stepper-content step="4">
                                <parent />
                            </v-stepper-content>

                            <v-stepper-content step="5">
                                <detail />
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'registrationForm',

    components: {
        verifyEmail: () => import('../registrationForm/verifyEmail.vue'),
        location: () => import('../registrationForm/location.vue'),
        children: () => import('../registrationForm/children.vue'),
        parent: () => import('../registrationForm/parent.vue'),
        detail: () => import('../registrationForm/details.vue'),
    },

    computed: {
        ...mapState(["stepper"])
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Registration Form",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "StepUp Academy shop registration form landing page" },
        {
          name: "keywords",
          content: "StepUp, StepUp Academy, step up " + "Registration Form",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: "Registration Form" },
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
        { property: "og:description", content: "StepUp Academy shop registration form landing page" },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
        { name: "twitter:title", content: "Registration Form" },
        { name: "twitter:description", content: "StepUp Academy shop registration form landing page" },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "Registration Form" },
        { itemprop: "description", content: "StepUp Academy shop registration form landing page" },
        {
          itemprop: "image",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
      ],
      link: [
            {rel: 'canonical', href: `http://localhost:3000/registration-form`}
        ]
    };
  }
}
</script>