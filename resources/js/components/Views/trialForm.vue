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
                            Trial Form
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
                                step="2"
                            >
                                Form
                            </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <verifyEmail />
                            </v-stepper-content>
                            
                            <v-stepper-content step="2">
                                <trialForm />
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
        trialForm: () => import('../trialForm/form.vue'),
    },

    computed: {
        ...mapState(["stepper"])
    },
    
    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Trial Form",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "StepUp Academy shop trial form landing page" },
        {
          name: "keywords",
          content: "StepUp, StepUp Academy, step up " + "Trial Form",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: "Trial Form" },
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
        { property: "og:description", content: "StepUp Academy shop trial form landing page" },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
        { name: "twitter:title", content: "Trial Form" },
        { name: "twitter:description", content: "StepUp Academy shop trial form landing page" },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "Trial Form" },
        { itemprop: "description", content: "StepUp Academy shop trial form landing page" },
        {
          itemprop: "image",
          content: "http://localhost:3000/image/stepUpAcademy.svg",
        },
      ],
      link: [
            {rel: 'canonical', href: `http://localhost:3000/trial-form`}
        ]
    };
  }
}
</script>