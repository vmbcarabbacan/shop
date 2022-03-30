<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" md="10">
                <v-card>
                    <v-card-text>
                        <v-form v-model="valid" ref="form">
                            <v-text-field
                                solo
                                label="Name"
                                v-model="filter.name"
                                :rules="[v => !!v || 'name is required']"
                            ></v-text-field>
                            <quill-editor v-model="filter.body"></quill-editor>
                        </v-form>
                    </v-card-text>
                    
                    <v-card-actions>
                        <v-checkbox
                            v-model="filter.isShow"
                            label="Is visible?"
                            hint="if this check; Visible on all pages with I agree"
                            persistent-hint
                        ></v-checkbox>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="text-none success"
                            @click="save"
                            :disabled="!valid"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'termsAndConditionsModal',

    created() {
        if(this.$route.params.type === "Edit") {
            this.FORM_FILTER({slug: this.$route.params.slug})
        }
    },

    data() {
        return {
            valid: false
        }
    },

    methods: {
        ...mapActions(["FORM_SAVE", "FORM_FILTER"]),
        ...mapMutations(["FORM_M"]),
        
        save() {
            this.FORM_SAVE(this.filter)
            .then(() => {
                this.FORM_M({})
                this.$router.push({name: "TermsAndConditions"})
            })
        },

    },

    computed: {
        ...mapState(["form"]),


        filter() {
            var form = {
                id: this.form.form.id || 0,
                name: this.form.form.name || null,
                slug: this.form.form.slug || null,
                body: this.form.form.body || null,
                isShow: this.form.form.isShow || true,
            }

            return form
        },
    }
}
</script>