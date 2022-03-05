<template>
    <div>
        <v-app-bar>
            
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon 
                        :to="{name: 'Home'}"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon
                            color="primary"
                            dark
                        >
                        mdi-home
                        </v-icon>
                    </v-btn>
                </template>
                <span>Go Home</span>
            </v-tooltip>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="refreshToken"
                    >
                        <v-icon
                            color="primary"
                            dark
                        >
                        mdi-cloud-refresh
                        </v-icon>
                    </v-btn>
                </template>
                <span>Refresh token</span>
            </v-tooltip>

            <v-spacer></v-spacer>
            Token before expires: {{ timerCount > 0 ? timerCount : 0 }} {{ timerCount > 1 ? 'mins' : 'min' }}

        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-row
                    align="start"
                    justify="center"
                >
                    
                    <v-col
                        cols="12"
                        md="8"
                    >
                        <v-date-picker v-model="filter.dates" full-width range></v-date-picker>
                        <div class="text-right mt-6">
                            <v-btn
                                @click="filterRecord" 
                                class="text-none success"
                                :loading="loading"
                            >
                                Filter Record
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        md="8"
                    >
                        <v-simple-table id="transaction">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center" colspan="9"> <h1>Import to Xero</h1> </th>
                                    </tr>
                                    <tr>
                                        <th class="text-center" colspan="9"> <h4> {{ dateRangeText }} </h4> </th>
                                    </tr>
                                    <tr>
                                        <th colspan="9">
                                            <!-- <div class="text-right">
                                                <v-btn 
                                                    class="text-none success"
                                                    @click="loadInvoice"
                                                >
                                                    Load Invoice
                                                </v-btn>
                                            </div> -->
                                            <div class="text-right">
                                                <v-btn 
                                                    class="text-none success"
                                                    @click="importToXero"
                                                    :loading="imporLoading"
                                                    :disabled="xero.items.length > 0 ? false : true"
                                                >
                                                    <v-icon>mdi-file-import</v-icon>
                                                    Import
                                                </v-btn>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                    <th class="text-center">
                                        Date
                                    </th>
                                    <th class="text-center">
                                        Transaction
                                    </th>
                                    <th class="text-center">
                                        Status
                                    </th>
                                    <th class="text-center">
                                        Total
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(trans, index) in transactions"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ trans.datePurchase | dateAndTime }}</td>
                                    <td class="text-center">{{ trans.transactionNumber }}</td>
                                    <td class="text-center"> {{ trans.status }} </td>
                                    <td class="text-center">{{ trans.total | currency }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                    
                </v-row>
            
            </v-container>
           
        </v-main>
    </div>
</template>
<script>
import {mapState, mapActions} from "vuex";
export default {
    name: 'xero',

    created() {

        this.XERO_GET()

        setTimeout(() => {
            this.SETUP_XERO_DETAILS_SAVE({
                code: this.$route.query.code,
                scope: this.$route.query.scope,
                session_state: this.$route.query.session_state,
                state: this.$route.query.state
            })
            .then((result)=> {

            })
            .catch((err) => {
                this.XERO_REFRESH_TOKEN({
                    token: this.xero.xero.token.refresh_token
                })
            })
        }, 2000);
    },

    watch: {
        timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 60000);
                    }

                },
                immediate: true 
            }
    },

    data() {
        return {
            timerCount: 30,
            filter: {
                dates: []
            },
            loading: false,
            imporLoading: false
        }
    },

    methods: {
        ...mapActions(["SETUP_XERO_DETAILS_SAVE", "XERO_REFRESH_TOKEN", "XERO_GET", "XERO_FILTER_RECORD", "XERO_IMPORT", "XERO_LOAD_INVOICES"]),

        refreshToken() {
            this.XERO_REFRESH_TOKEN({
                token: this.xero.xero.token.refresh_token
            })
            .then((result) => {
                this.timerCount = 30
            })
        },

        filterRecord() {
            this.loading = true
            this.XERO_FILTER_RECORD(this.filter)
            .then((result) => {
                this.loading = false
            })
        },

        importToXero() {
            this.imporLoading = true
            this.XERO_IMPORT({
                items: this.transactions,
                accessToken: this.xero.xero.token.access_token,
                tenantId: this.xero.xero.tenant[0].tenantId
            })
            .then((result) => {
                this.imporLoading = false
            })
        },

        loadInvoice() {
            this.XERO_LOAD_INVOICES({
                accessToken: this.xero.xero.token.access_token,
                tenantId: this.xero.xero.tenant[0].tenantId
            })
        }
    },

    computed: {
        ...mapState(["xero"]),

        dateRangeText () {
            return this.filter.dates.join(' ~ ')
        },

        transactions() {
          var transaction = this.xero.items;
          var arr = [];
          transaction.forEach(element => {
              arr.push({
                  'customer': JSON.parse(element.customer),
                  'datePurchase': element.datePurchase,
                  'payment': JSON.parse(element.payment),
                  'status': element.status,
                  'total': JSON.parse(element.total),
                  'transactionNumber': element.transactionNumber,
                  'carts': element.carts
              });
          });

          return arr;
      },

    }
}
</script>