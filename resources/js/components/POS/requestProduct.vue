<template>
    <v-dialog
        v-model="pos.addProduct"
        width="500"
        persistent
    >
        <v-card>
            <v-toolbar
                flat
                dark
                class="primary text-none"
            >
                <v-toolbar-title>
                    Request for product
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon @click="close">mdi-close</v-icon>
            </v-toolbar>
            <v-card-text>
                <v-form
                    v-model="valid"
                >
                    <v-combobox
                        label="Select request type"
                        v-model="request.type"
                        :items="requests"
                        :rules="[e => !!e || 'required']"
                    ></v-combobox>
                    <v-combobox
                        v-if="request.type == 'change payment option'"
                        label="Select Payment"
                        v-model="payment"
                        :items="payments"
                        :rules="[e => e.length > 0 || 'required']"
                        multiple
                        @change="getPayment"
                    >
                    </v-combobox>
                    <template v-for="(pay, index) in request.pays">
                        <div :key="index">
                            <v-text-field
                                v-if="request.type == 'change payment option'"
                                :label="pay.payment"
                                v-model.number="pay.value"
                                :rules="[e => e > 0 || 'required']"
                                type="number"
                            ></v-text-field>
                        </div>
                    </template>
                    <v-textarea
                        label="Please specify reasons"
                        v-model="request.comment"
                        :rules="[e => !!e || 'required']"
                    ></v-textarea>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    class="text-none success"
                    :loading="loading"
                    @click="sendRequest"
                    :disabled="!valid"
                >
                    Send Request
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-snackbar
            v-model="requestOpen"
            absolute
            top
            right
            color="deep-purple accent-4"
        >
            Sending your request
        </v-snackbar>
    </v-dialog>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    name: 'posRequestAmend',

    data() {
        return {
            requests: ['complete transaction', 'cancelled transaction', 'refund transaction', 'change payment option'],
            payment: [],
            payments: ["Cash", "Card", "Bank", "Cheque", "Telr"],
            request: {
                type: null,
                comment: null,
                pays: [],
            },
            loading: false,
            valid: false,
            requestOpen: false
        }
    },

    methods: {
        ...mapActions(["REQUEST_SAVE"]),
        ...mapMutations(["POS_OPEN_ADD_PRODUCT"]),

        getPayment(e) {
            var pay = [];
             e.forEach((data) => {
                 pay.push({
                     payment: data,
                     value: 0
                 })
             });
             this.request.pays = pay;
        },

        sendRequest() {
            var filter = {
                type: this.request.type,
                comment: this.request.comment,
                pays: this.request.pays,
                transactionNumber: this.pos.amendedId
            }
            this.loading = true
            this.REQUEST_SAVE({filter})
            .then((result) => {
                this.requestOpen = true
                this.loading = false
                this.close();
            })
        },

        close() {
            this.request = {
                type: null,
                comment: null,
                pays: []
            };
            this.POS_OPEN_ADD_PRODUCT()
        }
    },

    computed: {
        ...mapState(["pos"])
    }
}
</script>