<template>
    <v-row
        justify="center"
    >
        <v-col
            cols="12"
            md="10"
        >
            <v-card>
                <v-card-text>
                    <v-simple-table
                        fixed-header
                    >
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Transaction#
                            </th>
                            <th class="text-left">
                                Total
                            </th>
                            <th class="text-left">
                                Date
                            </th>
                            <th class="text-left">
                                
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="(sale, index) in sales.sales.data"
                            :key="index"
                            v-if="sale.status != 'Cancelled'"
                            >
                            <td>{{ sale.id }}</td>
                            <td>{{ sale.total }}</td>
                            <td>{{ sale.purchase_date | dateAndTime }}</td>
                            <td>
                                <v-btn
                                outlined
                                :color="`${sale.status == 'Completed' ? '#00cc00' : sale.status == 'Cancelled' ? '#ffff00' : sale.status == 'Refund' ? '#c2c2a3' : '#ff0000'}`"
                                @click="paynow(sale)"
                                class="text-none"
                                >
                                    {{ sale.status }}
                                </v-btn>
                                <v-icon @click="checkSaleById(sale.id)">
                                    mdi-magnify
                                </v-icon>
                            </td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
            </v-card>
        <div class="text-center">
            <v-pagination
                v-model="page"
                :length="sales.sales.last_page"
                @input="paginate"
                circle
            ></v-pagination>
        </div>

        <v-bottom-sheet
            v-model="openTransactionItem"
            @click:outside="closeTransactionItem"
            hide-overlay
            scrollable
        >
            <v-simple-table  width="100%" fixed-header>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left" width="60%">
                                <p class="font-weight-bold red--text">Transacction# {{ sales.sale.id }} - {{ sales.sale.status }}</p>
                            </th>
                            <th class="text-right" width="40%">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(cart, index) in sales.sale.item"
                            :key="index"
                        >
                            <td>
                                <span class="text-subtitle-1 font-weight-bold black--text">{{ cart.item.productName | toUpper }} - <span class="text-caption font-weight-thin">{{ cart.item.pdoName | toUpper }}</span></span> <br>
                                <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                <span class="text-caption" for="quantity">Qty: {{ cart.item.quantity }}</span> <br>
                                <span class="text-caption font-weight-black"> Student: {{ cart.item.student.firstName | toUpper }} {{ cart.item.student.familyName | toUpper }} </span>
                            </td>
                            <td> <p class="red--text text-right font-weight-bold">{{ cart.item.total_price | currency }}</p> </td>
                        </tr>
                    </tbody>
                
                </template>
            </v-simple-table>
        </v-bottom-sheet>
        </v-col>
    </v-row>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'accountTransactions',
    
    created() {
        var page = parseInt(this.$route.query.page)
        this.page = page
        setTimeout(() => {
            this.paginate(page)
        }, 1000);
    },

    data() {
        return {
            page: 1,
            openTransactionItem: false,
        }
    },

    methods: {
        ...mapActions(["SALES", "SALE", "CHECKOUT_PAYMENT_UPDATE"]),
        ...mapMutations(["SALE_M"]),

        viewHistory(e) {
            this.user_id = this.registration.form.id
            this.paginate(1);
        },

        paginate(e) {
            var page = Object.keys(this.$route.query).length > 0 ? e : 1
            this.$router.replace({ query: {page: page} })
            .catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    console.log(error)
                }
            })
            this.SALES({
                page: e, 
                search: this.registration.form.id, 
                type: 'User ID',
                perPage: 20
            })
            .then((result) => {
                this.openTransaction = true
            })
        },

        checkSaleById(e) {
            this.SALE({id: e})
            .then((result) => {
                this.openTransactionItem = true
            })
        },

        closeTransactionItem() {
            this.SALE_M({
                mom: {},
                payment: [],
                item: [],
                total: {},
                address: null,
                notes: null,
                telr: null,
                pay: []
            })
            this.openTransactionItem = false
        },

        paynow(e) {
            if(e.status == 'Pending') {
                
                this.SALE({id: e.id})
                .then((result) => {
                    this.CHECKOUT_PAYMENT_UPDATE({
                        id: this.sales.sale.id,
                        item: this.sales.sale.item, 
                        payment: this.sales.sale.payment, 
                        mom: this.sales.sale.mom,
                        link: true,
                        notes: this.sales.sale.notes,
                        total: this.sales.sale.total,
                        address: this.registration.form.address,
                    })
                    .then((result) => {
                        location.href = this.sales.sale.link
                    })
                })
            }
        }
    },

    computed: {
        ...mapState(["registration", "sales"]),
    }
}
</script>