<template>
    <v-dialog
        v-model="isOpen"
        width="300"
        @click:outside="close"
    >
        <v-card>
            <v-card-title>
                {{ title }} Discount
            </v-card-title>
            <v-card-text>
                <v-form
                    v-model="valid"
                    ref="form"
                >
                    <v-text-field
                        label="Name"
                        v-model="discount.name"
                        :rules="[v => !!v || 'name is required']"
                    ></v-text-field>
                    <v-text-field
                        label="Value"
                        v-model.number="discount.value"
                        type="number"
                        :rules="[v => !!v || 'value is required']"
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    @click="save"
                    class="text-none success"
                    :disabled="!valid"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'add-modal',

    data() {
        return {
            valid: false
        }
    },

    props: {
        isOpen: Boolean,
        discount: Object
    },

    methods: {
        ...mapActions(["DISCOUNT_SAVE"]),

        close() {
            this.$emit('closeDiscountModal')
        },

        save() {
            this.DISCOUNT_SAVE(this.discount)
            .then(() => {
                this.close();
            })
        }
    },

    computed: {
        title() {
            return this.discount.id > 0 ? "Edit" : "New"
        }
    }


}
</script>