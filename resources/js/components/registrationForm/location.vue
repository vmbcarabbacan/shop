<template>
    <div>
        <v-card
            height="200px"
            flat
        >
            <v-form
                v-model="valid"
            >
                <v-autocomplete
                    label="Select Location"
                    :items="locations"
                    v-model="registration.form.location"
                    :rules="[(v) => !!v || 'Location is required']"
                    suffix="*"
                >
                </v-autocomplete>
            </v-form>
        </v-card>

        <v-btn
            color="primary"
            @click="nextStepper(3)"
            :disabled="!valid"
        >
            Continue
        </v-btn>
        <v-btn
                text
                @click="nextStepper(1)"
            >
                Back
            </v-btn>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: 'registrationFormLocation',
  
    data() {
        return {
            locations: [
                {
                    value: 'motor city',
                    text: 'Motor City'
                },
                {
                    value: 'lakes',
                    text: 'Lakes'
                },

            ],
            valid: false
        }
    },

    methods: {
        ...mapMutations(["STEPPER", "REGISTRATION_FORM"]),


        nextStepper(e) {
            this.REGISTRATION_FORM(this.registration.form)
            this.STEPPER(e)
        }
    },
    
    computed: {
        ...mapState(["registration"])
    }
}
</script>