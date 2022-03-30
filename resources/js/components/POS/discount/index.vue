<template>
    <v-dialog
        v-model="isDiscountOpen"
        width="500"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar
                flat
                dark
                color="blue darken-1"
            >
                <v-toolbar-title>
                    Discounts
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Value
                            </th>
                            <th class="text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="(discount, i) in discounts.discounts"
                            :key="i"
                            >
                                <td>{{ discount.name | toUpper }}</td>
                                <td>{{ discount.value }}</td>
                                <td>
                                    <v-icon
                                        @click="editDiscount(discount)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon
                                        @click="addDiscount(discount)"
                                    >
                                        mdi-cart-plus
                                    </v-icon>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
            <v-card-actions>
                <v-btn
                  color="red"
                  fab
                  dark
                  small
                  bottom
                  left
                  @click="newDiscount"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        <modal 
            :isOpen="open"
            :discount="discount"
            v-on:closeDiscountModal="closeModal"
        />
    </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "discounts",

    data() {
        return {
            open: false,
            discount: {}
        }
    },

    components: {
        modal: () => import('./modal.vue')
    },

    created() {
        this.DISCOUNTS()
    },

    props: {
        isDiscountOpen: Boolean
    },

    methods: {
        ...mapActions(["DISCOUNTS"]),

        close() {
            this.$emit('closeModal')
        },

        addDiscount(e){
            this.$emit('addDiscount', e)
        },

        closeModal() {
            this.discount = {},
            this.open = false
        },

        newDiscount() {
            this.discount = {
                id: 0,
                name: null,
                value: 0
            }
            this.open = true
        },

        editDiscount(e) {
            this.discount = e
            this.open = true
        }
    },

    computed: {
        ...mapState(["discounts"])
    }

}
</script>