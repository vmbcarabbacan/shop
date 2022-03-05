<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card>
                    <v-container>
                        <v-row align="center" justify="center">
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-date-picker v-model="filter.dates" full-width range></v-date-picker>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-autocomplete
                                    v-model="filter.receptionIds"
                                    :items="reports.filters.receptions"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Receptions"
                                    multiple
                                >
                                    <template v-slot:selection="{ item, index }">
                                        <v-chip v-if="index < 5">
                                            <span>{{ item.name }}</span>
                                        </v-chip>
                                        <span
                                            v-if="index === 5"
                                            class="grey--text text-caption"
                                            >
                                            (+{{ filter.receptionIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>

                                <div class="text-right mb-6 mr-4">
                                    <v-btn
                                        @click="filterRecord" 
                                        class="text-none success"
                                        :loading="loading"
                                    >
                                        Filter Record
                                    </v-btn>
                                </div>

                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-divider class="mt-2"></v-divider>
                <v-card class="mt-2">
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-btn @click="exportExcel" icon text fab> <v-icon>mdi-cloud-download</v-icon> </v-btn>
                        <v-menu
                            open-on-hover
                            bottom
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    icon text fab
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon>mdi-cloud-print</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                 @click="printReport(item.id)"
                                >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <!-- <v-btn @click="printReport" icon text fab> <v-icon>mdi-cloud-print</v-icon> </v-btn> -->
                    </v-card-title>
                    <v-card-text id="export">
                        <v-simple-table id="transaction">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center" colspan="9"> <h1>End of Day</h1> </th>
                                    </tr>
                                    <tr>
                                        <th class="text-center" colspan="9"> <h4> {{ dateRangeText }} </h4> </th>
                                    </tr>
                                    <tr>
                                        <th colspan="9">
                                            <h3>Transaction Report</h3>
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
                                        Payment
                                    </th>
                                    <th class="text-center">
                                        Status
                                    </th>
                                    <th class="text-center">
                                        Taxable
                                    </th>
                                    <th class="text-center">
                                        Discount
                                    </th>
                                    <th class="text-center">
                                        VAT 5%
                                    </th>
                                    <th class="text-center">
                                        Total
                                    </th>
                                    <!-- <th class="text-center">
                                        Tendered By
                                    </th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(trans, index) in allTransaction"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ trans.datePurchase | dateAndTime }}</td>
                                    <td class="text-center">{{ trans.transactionNumber }}</td>
                                    <td class="text-center"><span v-for="(payment, i) in trans.type" :key="i"> {{ payment }} {{ trans.type.length > 1 ? ', ' : trans.type.length == i + 1 ? '' : ', ' }} </span></td>
                                    <td class="text-center"> {{ trans.status }} </td>
                                    <td class="text-center"> {{ trans.subtotal | currency }} </td>
                                    <td class="text-center">{{ trans.discount | currency }}</td>
                                    <td class="text-center">{{ trans.tax | currency }}</td>
                                    <td class="text-center">{{ trans.total | currency }}</td>
                                    <!-- <td class="text-center">{{ trans.tenteredBy | toUpper }}</td> -->
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td class="text-center font-weight-black">Total</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center font-weight-black">{{ subtotal | currency }}</td>
                                        <td class="text-center font-weight-black">{{ discount | currency }}</td>
                                        <td class="text-center font-weight-black">{{ tax | currency }}</td>
                                        <td class="text-center font-weight-black">{{ total | currency }}</td>
                                        <!-- <td class="text-center"></td> -->
                                    </tr>
                                </tfoot>
                            </template>
                        </v-simple-table>
                        <br>

                        <v-simple-table id="product">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th colspan="7">
                                            <h3>Product Report</h3>
                                        </th>
                                    </tr>
                                    <tr>
                                    <th class="text-center">
                                        Uniform
                                    </th>
                                    <th class="text-center">
                                        Size/Color
                                    </th>
                                    <th class="text-center">
                                        Quantity
                                    </th>
                                    <th class="text-center">
                                        Taxable
                                    </th>
                                    <th class="text-center">
                                        Discount
                                    </th>
                                    <th class="text-center">
                                        VAT 5%
                                    </th>
                                    <th class="text-center">
                                        Total
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(prod, index) in allProducts"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ prod.uniform }}</td>
                                    <td class="text-center"> {{ prod.option }} </td>
                                    <td class="text-center"> {{ prod.quantity }} </td>
                                    <td class="text-center"> {{ prod.total_price_excl | currency }} </td>
                                    <td class="text-center">{{ prod.total_discount | currency }}</td>
                                    <td class="text-center">{{ prod.total_tax | currency }}</td>
                                    <td class="text-center">{{ prod.total_price | currency }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td class="text-center font-weight-black">Total</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center font-weight-black">{{ product_subtotal | currency }}</td>
                                        <td class="text-center font-weight-black">{{ product_discount | currency }}</td>
                                        <td class="text-center font-weight-black">{{ product_tax | currency }}</td>
                                        <td class="text-center font-weight-black">{{ product_total | currency }}</td>
                                    </tr>
                                </tfoot>
                            </template>
                        </v-simple-table>
                        <br>
                        
                        <v-simple-table id="payment">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th colspan="2">
                                            <h3>Payment Report</h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(mode, index) in payments"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ mode.payment }}</td>
                                    <td class="text-center font-weight-black"> {{ mode.value | currency }} </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <br>
                        
                        <v-simple-table id="cancelled">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th colspan="4">
                                            <h3>Cancelled / Refund</h3>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">Transaction</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Notes</th>
                                        <th class="text-center">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(cancelled, index) in reports.cancelled"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ cancelled.transactionNumber }}</td>
                                    <td class="text-center">{{ cancelled.status | toUpper  }}</td>
                                    <td class="text-center">{{ JSON.parse(cancelled.notes) | toUpper  }}</td>
                                    <td class="text-center">{{ cancelled.dateCancelled | dateAndTime  }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <br>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex";

export default {
    name: "ENDOFDAY",

    created() {
        this.REPORT_END_OF_DAY([])
    },

    data() {
        return {
            filter: {
                dates: [],
                receptionIds: []
            },
            items: [
                { title: 'All Report', id: 'export' },
                { title: 'Transaction Report', id: 'transaction' },
                { title: 'Product Report', id: 'product' },
                { title: 'Payment Report', id: 'payment' },
                { title: 'Cancelled / Refund Report', id: 'cancelled' },
            ],
            loading: false
        }
    },
    
    methods: {
        ...mapActions(["REPORT_FILTER_END_OF_DAY"]),
        ...mapMutations(["REPORT_END_OF_DAY"]),

        filterRecord() {
            this.loading = true
            var sortedDates = this.filter.dates.sort((a, b) => new Date(a) - new Date(b));
            this.REPORT_FILTER_END_OF_DAY({
                dates: sortedDates,
                receptionIds: this.filter.receptionIds
            })
            .then((result) => {
                this.loading = false
            })

        },

        exportExcel() {
            this.$excel("export", `Class Information`);
        },

        printReport(item) {
            this.$print(item)
        }
    },

    computed: {
        ...mapState(["reports"]),

      dateRangeText () {
        return this.filter.dates.join(' ~ ')
      },

      transactions() {
          var transaction = this.reports.endOfDay;
          var arr = [];
          transaction.forEach(element => {
              arr.push({
                  'customer': JSON.parse(element.customer),
                  'datePurchase': element.datePurchase,
                  'item': JSON.parse(element.item),
                  'payment': JSON.parse(element.payment),
                  'tentered': JSON.parse(element.tentered),
                  'status': element.status,
                  'total': JSON.parse(element.total),
                  'transactionNumber': element.transactionNumber
              });
          });

          return arr;
      },

      products() {
          
          var arr = [];
          this.transactions.forEach(element => {
              if(element.item.type == "Uniforms") {
                  arr.push({
                    'uniform': element.item.productName,
                    'option': element.item.pdoName,
                    'uniqueId': element.item.pdoId,
                    'quantity': element.item.quantity,
                    'total_discount': element.item.discount,
                    'total_price': element.item.total_price,
                    'total_price_excl': element.item.total_price_excl,
                    'total_tax': element.item.total_tax,
                });
              }
          });

          return arr;
      },

      allProducts() {
          var result = [];
          this.products.reduce((res, value) => {
              if(!res[value.uniqueId]) {
                  res[value.uniqueId] = {
                      uniform: value.uniform,
                      option: value.option,
                      quantity: 0,
                      total_discount: 0,
                      total_price: 0,
                      total_price_excl: 0,
                      total_tax: 0
                  };
                  result.push(res[value.uniqueId]);
              };
              res[value.uniqueId].quantity += value.quantity;
              res[value.uniqueId].total_discount += value.total_discount;
              res[value.uniqueId].total_price += value.total_price;
              res[value.uniqueId].total_price_excl += value.total_price_excl;
              res[value.uniqueId].total_tax += value.total_tax;
              return res;
          }, {});

          return result;
      },

      allTransaction() {
          var result = [];
          this.transactions.reduce((res, value) => {
              if(!res[value.transactionNumber]) {
                  res[value.transactionNumber] = {
                      transactionNumber: value.transactionNumber,
                      customerName: value.customer.fullName,
                      datePurchase: value.datePurchase,
                      tenteredBy: value.tentered.fullName,
                      status: value.status,
                      type: value.payment.map(({payment}) => payment),
                      payments: value.payment,
                      discount: 0,
                      subtotal: 0,
                      tax: 0,
                      total: 0
                  };
                  result.push(res[value.transactionNumber]);
              };
              res[value.transactionNumber].discount += value.item.discount;
              res[value.transactionNumber].subtotal += value.item.total_price_excl;
              res[value.transactionNumber].tax += value.item.total_tax;
              res[value.transactionNumber].total += value.item.total_price;
              return res;
          }, {});

          return result;
      },

      total() {
          return this.allTransaction.reduce((total, item) => {
              return total + item.total;
          }, 0);
      },

      discount() {
          return this.allTransaction.reduce((total, item) => {
              return total + item.discount;
          }, 0);
      },

      subtotal() {
          return this.allTransaction.reduce((total, item) => {
              return total + item.subtotal;
          }, 0);
      },

      tax() {
          return this.allTransaction.reduce((total, item) => {
              return total + item.tax;
          }, 0);
      },

      product_total() {
          return this.allProducts.reduce((total, item) => {
              return total + item.total_price;
          }, 0);
      },

      product_discount() {
          return this.allProducts.reduce((total, item) => {
              return total + item.total_discount;
          }, 0);
      },

      product_subtotal() {
          return this.allProducts.reduce((total, item) => {
              return total + item.total_price_excl;
          }, 0);
      },

      product_tax() {
          return this.allProducts.reduce((total, item) => {
              return total + item.total_tax;
          }, 0);
      },

      payments() {
          var transactions = this.allTransaction;
          var newArray = [];

          for(var i = 0; i < transactions.length; i++) {
              var payments = transactions[i].payments;
              for(var j = 0; j < payments.length; j++) {
                  var existed = false;
                  for(var k = 0; k < newArray.length; k++) {
                      if(newArray[k].payment === payments[j].payment) {
                          newArray[k].value += payments[j].value;
                         existed = true
                      }
                  }
                  if(!existed) {
                      newArray.push({
                          'payment': payments[j].payment,
                          'value': payments[j].value
                      })
                  }
              }
          }

          return newArray;
      },

   
    }
}
</script>