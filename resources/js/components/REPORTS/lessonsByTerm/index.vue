<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card>
                    <v-container>
                        <v-row align="center" justify="center">
                            <v-col
                                cols="12"
                            >
                                <v-autocomplete
                                    v-model="filter.termIds"
                                    :items="reports.filters.terms"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Term"
                                    @change="selectedTerm"
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
                                            (+{{ filter.termIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-if="filter.termIds.length > 0"
                                    v-model="filter.locationIds"
                                    :items="reports.locations"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Location"
                                    hint="(optional)"
                                    persistent-hint
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
                                            (+{{ filter.locationIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-model="filter.lessonIds"
                                    :items="reports.filters.lessons"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Lessons"
                                    hint="(optional)"
                                    persistent-hint
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
                                            (+{{ filter.lessonIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-model="filter.teacherIds"
                                    :items="reports.filters.teachers"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Teachers"
                                    hint="(optional)"
                                    persistent-hint
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
                                            (+{{ filter.teacherIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>

                                <div class="text-right mb-6 mr-4">
                                    <v-btn
                                        @click="filterRecord" 
                                        class="text-none success"
                                        :disabled="filter.termIds.length === 0"
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
                        
                        <br>

                        <v-simple-table id="product">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center" colspan="7"> <h1>Lesson By Term Report</h1> </th>
                                    </tr>
                                    <tr>
                                    <th class="text-center">
                                        Product/Lesson
                                    </th>
                                    <th class="text-center">
                                        Type
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
                                    <th class="text-center">
                                        
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(prod, index) in allProducts"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ prod.uniform }}</td>
                                    <td class="text-center"> {{ prod.type }} </td>
                                    <td class="text-center"> {{ prod.quantity }} </td>
                                    <td class="text-center"> {{ prod.total_price_excl | currency }} </td>
                                    <td class="text-center">{{ prod.total_discount | currency }}</td>
                                    <td class="text-center">{{ prod.total_tax | currency }}</td>
                                    <td class="text-center">{{ prod.total_price | currency }}</td>
                                    <td class="text-center">
                                        <v-icon @click="viewReceipt(prod)">mdi-magnify</v-icon>
                                    </td>
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
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </template>
                        </v-simple-table>
                        
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog
            @click:outside="closeDialog"
            v-model="open"
            persistent
            width="800"
        >
            <v-card>
                <v-toolbar
                    flat
                    dark
                    color="primary"
                >
                    <v-toolbar-title>
                        
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-icon @click="closeDialog">mdi-close</v-icon>
                </v-toolbar>
                <v-card-text>
                    <v-simple-table id="product">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                        <th class="text-center" colspan="6"> <h1>{{ prod.uniform | toUpper }}</h1> </th>
                                    </tr>
                                <tr>
                                    <th class="text-center">
                                        Transaction
                                    </th>
                                    <th class="text-center">
                                        Mom Name
                                    </th>
                                    <th class="text-center">
                                        Student Name
                                    </th>
                                    <th class="text-center">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                v-for="(receipt, index) in receipts"
                                :key="index"
                                >
                                <td class="text-center">{{ receipt.transactionNumber }}</td>
                                <td class="text-center"> {{ receipt.customer.fullName | toUpper }} </td>
                                <td class="text-center"> {{ receipt.item.student.firstName | toUpper }} {{ receipt.item.student.familyName | toUpper }} </td>
                                <td class="text-center">{{ receipt.item.total_price | currency }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex";

export default {
    name: "LESSONBYTERM",

    created() {
        this.REPORT_LESSON_BY_TERM([])
    },

    data() {
        return {
            filter: {
                termIds: [],
                locationIds: [],
                lessonIds: [],
                teacherIds: []
            },
            items: [
                { title: 'All Report', id: 'export' },
            ],
            loading: false,
            open: false,
            prod: {}
            
        }
    },
    
    methods: {
        ...mapActions(["REPORT_FILTER_LESSON_BY_TERM", "REPORT_SALES_RECEIPT_BY_TERM", "REPORT_FILTER_LOCATION_BY_TERM_ID"]),
        ...mapMutations(["REPORT_LESSON_BY_TERM", "REPORT_SALE_RECEIPT_BY_TERM"]),

        selectedTerm(e) {
            this.filter.locationIds = []
            this.REPORT_FILTER_LOCATION_BY_TERM_ID({id: e});
        },

        filterRecord() {
            this.loading = true
            this.REPORT_FILTER_LESSON_BY_TERM({
                termIds: this.filter.termIds,
                locationIds: this.filter.locationIds,
                lessonIds: this.filter.lessonIds,
                teacherIds: this.filter.teacherIds
            })
            .then((result) => {
                this.loading = false
            })

        },

        viewReceipt(e) {
            this.open = true
            this.prod = e
            this.REPORT_SALES_RECEIPT_BY_TERM({
                productId: e.productId,
                termIds: this.filter.termIds,
                locationIds: this.filter.locationIds,
                lessonIds: this.filter.lessonIds,
                teacherIds: this.filter.teacherIds
            })
        },

        closeDialog() {
            this.open = false
            this.REPORT_SALE_RECEIPT_BY_TERM([])
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

      transactions() {
          var transaction = this.reports.lessonByTerm;
          var arr = [];
          transaction.forEach(element => {
              arr.push({
                  'customer': JSON.parse(element.customer),
                  'datePurchase': element.datePurchase,
                  'item': JSON.parse(element.item),
                  'payment': JSON.parse(element.payment),
                  'tentered': JSON.parse(element.tentered),
                  'total': JSON.parse(element.total),
                  'transactionNumber': element.transactionNumber
              });
          });

          return arr;
      },

      receipts() {
          var transaction = this.reports.receiptByTerm;
          var arr = [];
          transaction.forEach(element => {
              arr.push({
                  'customer': JSON.parse(element.customer),
                  'datePurchase': element.datePurchase,
                  'item': JSON.parse(element.item),
                  'payment': JSON.parse(element.payment),
                  'tentered': JSON.parse(element.tentered),
                  'total': JSON.parse(element.total),
                  'transactionNumber': element.transactionNumber
              });
          });

          return arr;
      },

      products() {
          
          var arr = [];
          this.transactions.forEach(element => { 
                  arr.push({
                    'uniform': element.item.productName,
                    'option': element.item.pdoName,
                    'type': element.item.type,
                    'uniqueId': element.item.productId,
                    'quantity': element.item.quantity,
                    'total_discount': element.item.discount,
                    'total_price': element.item.total_price,
                    'total_price_excl': element.item.total_price_excl,
                    'total_tax': element.item.total_tax,
                });
          });

          return arr;
      },

      allProducts() {
          var result = [];
          this.products.reduce((res, value) => {
              if(!res[value.uniqueId]) {
                  res[value.uniqueId] = {
                      productId: value.uniqueId,
                      uniform: value.uniform,
                      option: value.option,
                      type: value.type,
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
   
    }
}
</script>