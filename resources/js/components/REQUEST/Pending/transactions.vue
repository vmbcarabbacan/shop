<template>
    <v-dialog
        v-model="request.openTransaction"
        width="600"
        persistent
    >
        <v-card>
            <v-toolbar
                flat
                dark
                color="blue accent-2"
            >
                <v-toolbar-title>
                    {{ request.transaction.type | toUpper }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon
                    @click="close"
                >
                    mdi-close
                </v-icon>
            </v-toolbar>
            <!-- amending transaction status -->
            <template  v-if="request.transaction.type === 'complete transaction' 
                            || request.transaction.type === 'cancelled transaction'
                            || request.transaction.type === 'refund transaction'">
                <v-card-text>
                    <div>
                            <p style="text-align: center">
                            Invoice #:  {{ request.transaction.item.id }}
                            </p>
                            <hr />
                            <p style="text-align: center">
                            Date Purchased: {{ request.transaction.item.created_at | dateAndTime }}
                            </p>
                        <v-simple-table height="450" width="100%" class="overflow-x-auto" fixed-header>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <!-- <th class="text-left" width="20%">
                                        
                                    </th> -->
                                    <th class="text-left">
                                        
                                    </th>
                                    <th class="text-right">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(cart, index) in request.transaction.item.item"
                                    :key="index"
                                >
                                    <td>
                                        <span class="text-caption">{{ cart.item.productName | toUpper }} - <span class="text-caption font-weight-thin">{{ cart.item.pdoName | toUpper }}</span></span> <br>
                                        <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                        <span class="text-caption" for="quantity">Qty: {{ cart.item.quantity }}</span> <br>
                                        <span v-if="cart.type == 'Lessons'" class="text-caption">{{ cart.item.student.firstName | toUpper }} {{ cart.item.student.familyName | toUpper }}</span>
                                    </td>
                                    <td> <p class="red--text text-right font-weight-bold">{{ cart.item.total_price | currency }}</p> </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <p class="text-left black--text">
                                            <span>Subtotal <br></span>
                                            <span>Tax <br></span>
                                            <span v-if="request.transaction.item.total.disc > 0">Discount <br></span>
                                            <span>Total</span>
                                        </p>
                                    </td>
                                    <td>
                                        <p class="black--text text-right font-weight-bold">
                                            <span>{{ request.transaction.item.total.excl | currency }} <br></span>
                                            <span>{{ request.transaction.item.total.tax | currency }} <br></span>
                                            <span v-if="request.transaction.item.total.disc > 0">{{ request.transaction.item.total.disc | currency }} <br></span>
                                            <span>{{ request.transaction.item.total.total | currency }} <br></span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        Comment: {{ request.transaction.comment }}
                                    </td>
                                </tr>
                            </tfoot>
                            </template>
                        </v-simple-table>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        class="text-none success"
                        @click="proceed('Completed')"
                        :loading="request.loading"
                    >
                        Proceed to {{ request.transaction.type === 'complete transaction' ? 'Complete' : (request.transaction.type === 'cancelled transaction' ? 'Cancel' : 'Refund') }} transaction
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="text-none danger"
                        @click="proceed('Cancelled')"
                        :loading="request.loading"
                    >
                        Decline request
                    </v-btn>
                </v-card-actions>
            </template>

            <!-- amend quantity and price -->
            <template v-else-if="request.transaction.type === 'add quantity' 
                       || request.transaction.type === 'deduct quantity'
                       || request.transaction.type === 'amend price'">
                <v-card-text>
                        <p class="text-h6">Product: {{ request.transaction.item.product.name }} - {{ request.transaction.item.name }}</p>
                        <p class="text-h6">{{ request.transaction.type === 'amend price' ? 'Price' : 'Quantity' }} : {{ request.transaction.item.value }}</p>
                        <p class="text-h6">Comment: {{ request.transaction.comment }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        class="text-none success"
                        @click="proceedProductOption('Completed')"
                        :loading="request.loading"
                    >
                        Proceed to update
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="text-none danger"
                        @click="proceedProductOption('Cancelled')"
                        :loading="request.loading"
                    >
                        Decline request
                    </v-btn>
                </v-card-actions>
            </template>

            <!-- change payment option -->
            <template v-else>
                <v-card-text>
                    <div>
                            <p style="text-align: center">
                            Invoice #:  {{ request.transaction.item.id }}
                            </p>
                            <hr />
                            <p style="text-align: center">
                            Date Purchased: {{ request.transaction.item.created_at | dateAndTime }}
                            </p>
                        <v-simple-table height="450" width="100%" class="overflow-x-auto" fixed-header>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <!-- <th class="text-left" width="20%">
                                        
                                    </th> -->
                                    <th class="text-left">
                                        
                                    </th>
                                    <th class="text-right">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(cart, index) in request.transaction.item.item"
                                    :key="index"
                                >
                                    <td>
                                        <span class="text-caption">{{ cart.item.productName | toUpper }} - <span class="text-caption font-weight-thin">{{ cart.item.pdoName | toUpper }}</span></span> <br>
                                        <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                        <span class="text-caption" for="quantity">Qty: {{ cart.item.quantity }}</span> <br>
                                        <span v-if="cart.type == 'Lessons'" class="text-caption">{{ cart.item.student.firstName | toUpper }} {{ cart.item.student.familyName | toUpper }}</span>
                                    </td>
                                    <td> <p class="red--text text-right font-weight-bold">{{ cart.item.total_price | currency }}</p> </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <p class="text-left black--text">
                                            <span>Subtotal <br></span>
                                            <span>Tax <br></span>
                                            <span v-if="request.transaction.item.total.disc > 0">Discount <br></span>
                                            <span>Total</span>
                                        </p>
                                    </td>
                                    <td>
                                        <p class="black--text text-right font-weight-bold">
                                            <span>{{ request.transaction.item.total.excl | currency }} <br></span>
                                            <span>{{ request.transaction.item.total.tax | currency }} <br></span>
                                            <span v-if="request.transaction.item.total.disc > 0">{{ request.transaction.item.total.disc | currency }} <br></span>
                                            <span>{{ request.transaction.item.total.total | currency }} <br></span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        Comment: {{ request.transaction.comment }}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        Change payment to:
                                    </td>
                                </tr>
                                <tr v-for="(pay, index) in request.transaction.item.payments" :key="index">
                                    <td class="text-left black--text"> {{ pay.payment }} </td>
                                    <td class="black--text text-right font-weight-bold"> {{ pay.value }}</td>
                                </tr>
                            </tfoot>
                            </template>
                        </v-simple-table>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        class="text-none success"
                        @click="proceedChangePayment('Completed')"
                        :loading="request.loading"
                    >
                        Proceed
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="text-none danger"
                        @click="proceedChangePayment('Cancelled')"
                        :loading="request.loading"
                    >
                        Decline request
                    </v-btn>
                </v-card-actions>
            </template>
            
        </v-card>

    </v-dialog>
</template>

<script>
import{mapState, mapMutations, mapActions} from "vuex";
export default {
    name: "viewTransactions",

    methods: {
        ...mapActions(["REQUEST_PROCESS_TRANSACTION", "REQUEST_PROCESS_PRODUCT_OPTION", "REQUEST_PROCESS_CHANGE_PAYMENT_OPTION"]),
        ...mapMutations(["REQUEST_OPEN_TRANSACTION"]),

        proceed(e) {
            this.REQUEST_PROCESS_TRANSACTION({filter: this.request.transaction, status: e});
        },

        proceedProductOption(e) {
            this.REQUEST_PROCESS_PRODUCT_OPTION({filter: this.request.transaction, status: e});
        },

        proceedChangePayment(e) {
            this.REQUEST_PROCESS_CHANGE_PAYMENT_OPTION({filter: this.request.transaction, status: e});
        },

        close() {
            this.REQUEST_OPEN_TRANSACTION();
        }
    },

    computed: {
        ...mapState(["request"])
    }
}
</script>