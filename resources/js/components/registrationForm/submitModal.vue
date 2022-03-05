<template>
    <v-dialog
        v-model="registration.submitOpen"
        width="400"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar
                flat
                dark
                color="primary"
            >
                <v-toolbar-title>
                    Thank you
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon
                    @click="close"
                >
                    mdi-close
                </v-icon>
            </v-toolbar>

            <v-card-text>
                <p class="text-subtitle-1">
                    Thank you for filling out our enrollment form. We will keep your information safe. Feel free to follow us on social media or ask any questions. StepUp Academy 
                </p>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "registrationFormSubmitModal",


    methods: {
        ...mapMutations(["REGISTRATION_FORM_SUBMIT"]),

        close() {
            this.REGISTRATION_FORM_SUBMIT(false)
        }
    },

    computed: {
        ...mapState(["registration"])
    }
}
</script>