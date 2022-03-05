<template>
    <v-dialog
        v-model="categories.open"
        width="500"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar
                flat
                dark
                color="primary"
            >
                <v-toolbar-title>
                    {{ form.id > 0 ? 'Edit ' : 'New ' }} Cateory
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon
                    @click="close"
                >
                    mdi-close
                </v-icon>
            </v-toolbar>
            <v-card-text>
                <v-form
                    v-model="valid"
                >
                    <v-text-field
                        label="Name"
                        v-model="form.name"
                        :rules="[v => !!v || 'Name is required']"
                    ></v-text-field>
                    <v-autocomplete
                        label="Type"
                        v-model="form.type"
                        :items="types"
                    ></v-autocomplete>
                    <v-checkbox
                        v-model="form.isVisible"
                        label="is visible?"
                    ></v-checkbox>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    @click="save"
                    class="text-none primary"
                    :disabled="!valid"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "productCategoryModal",

    data() {
        return {
            valid: false,
        }
    },

    methods: {
        ...mapMutations(["CATEGORY_OPEN", "CATEGORY_FORM"]),
        ...mapActions(["CATEGORY_SAVE", "CATEGORY_FILTER_BY_TYPE"]),

        save() {
            this.CATEGORY_SAVE(this.form)
        },

        close() {
            this.CATEGORY_FORM({})
            this.CATEGORY_OPEN(false)
        }
    },

    computed: {
        ...mapState(["categories", "types"]),

        form() {
            var form = {
                id: this.categories.form.id,
                name: this.categories.form.name,
                type: this.categories.form.type,
                isVisible: this.categories.form.isVisible
            }

            return form
        }
    }
}
</script>