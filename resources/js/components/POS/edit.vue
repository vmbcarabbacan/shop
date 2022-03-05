<template>
    <div>
        <v-app-bar>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-btn icon :to="{name: 'POS'}">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn icon @click="isSearchOpen">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

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
                        <v-card>
                            <v-card-title>
                                <v-text-field
                                    label="Search"
                                    solo
                                    v-model="search"
                                    @keypress.enter="searchProduct"
                                    clearable
                                >
                                    <template v-slot:append>
                                        <v-btn
                                            icon
                                            @click="searchProduct"
                                        >
                                            <v-icon left>
                                            mdi-magnify
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                </v-text-field>
                            </v-card-title>
                            <v-card
                                max-height="600"
                                class="overflow-x-auto"
                                v-if="pos.items.length == 0"
                                flat
                            >
                                <v-card-text>
                                    <v-row
                                        align="start"
                                        justify="start"
                                    >
                                        <v-col
                                            cols="12"
                                            md="4"
                                            v-for="(type, index) in types"
                                            :key="index"
                                        >
                                            <v-card
                                                @click="selectedProd(type)"
                                                :disabled="sales.sale.status != 'Pending'"
                                            >
                                                <v-card-text>
                                                    <p class="text-center text-subtitle-1 font-weight-bold" >{{ type.text }}</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            <v-card
                                max-height="600"
                                class="overflow-x-auto"
                                v-else-if="pos.items.length > 0 && pos.variants.length == 0"
                                flat
                            >
                                <v-card-text>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            md="4"
                                        >
                                            <v-card
                                                dark
                                                class="d-flex justify-center align-center"
                                                color="purple"
                                                height="80"
                                                @click="backToPos"
                                            >
                                                <p class="text-center white--text">Back</p>
                                            </v-card>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            md="4"
                                            v-for="(item, index) in pos.items"
                                            :key="index"
                                        >
                                            <v-card
                                                dark
                                                class="d-flex justify-center align-center"
                                                :color="item.totalQty > 0 ? 'primary' : 'default'"
                                                height="80"
                                                @click="openVariant(item)"
                                            >
                                                <p class="text-center white--text">{{ item.name | toUpper }}</p>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            <v-card
                                max-height="600"
                                class="overflow-x-auto"
                                v-else
                                flat
                            >
                                <v-card-text>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            md="4"
                                        >
                                            <v-card
                                                dark
                                                class="d-flex justify-center align-center"
                                                color="purple"
                                                height="80"
                                                @click="backtoProduct"
                                            >
                                                <p class="text-center white--text">Back</p>
                                            </v-card>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            md="4"
                                            v-for="(variant, index) in pos.variants"
                                            :key="index"
                                        >
                                            <v-card
                                                dark
                                                class="d-flex justify-center align-center"
                                                :color="variant.quantity > 0 ? 'primary' : 'default'"
                                                height="80"
                                                @click="selectedVariant(variant)"
                                                :disabled="variant.quantity > 0 ? false : true"
                                            >
                                                <p class="text-center white--text">{{ variant.name | toUpper }}</p>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-form
                            v-model="valid"
                        >
                            <v-card
                                flat
                            >
                                <v-card-text v-if="Object.keys(sales.sale.mom).length">
                                    <v-autocomplete
                                        label="Select Customer"
                                        :items="pos.users"
                                        item-text="fullName"
                                        item-value="id"
                                        v-model="sales.sale.mom.id"
                                        append-icon="*"
                                        :rules="[v => v.id != 0 || 'required']"
                                        solo
                                        return-object
                                        disabled
                                    ></v-autocomplete>
                                </v-card-text>
                                <v-card-text>
                                    <v-simple-table width="100%" v-if="sales.sale.link">
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th width="80%">
                                                        <v-text-field
                                                            v-model="sales.sale.link"
                                                            readonly
                                                        ></v-text-field>
                                                    </th>
                                                    <th width="20%">
                                                        <input type="hidden" id="link-code" :value="sales.sale.link">
                                                        <v-btn class="text-none" @click="copyText">copy</v-btn>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </template>
                                    </v-simple-table>
                                    <v-btn 
                                        @click="printReceipt"
                                        block
                                        class="mt-2 success"
                                        v-if="sales.sale.status != 'Pending'"
                                    >
                                        Print Receipt
                                    </v-btn>
                                    <v-simple-table height="450" width="100%" class="overflow-x-auto" fixed-header>
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
                                                    <a :href="`/${cart.type}/${cart.item.slug}/pdo/${cart.item.pdoId}`" target="_blank" class="text-subtitle-1 font-weight-bold black--text">{{ cart.item.productName | toUpper }} - <span class="text-caption font-weight-thin">{{ cart.item.pdoName | toUpper }}</span></a> <br>
                                                    <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                                    <span class="text-caption" for="quantity">Qty: {{ cart.item.quantity }}</span>
                                                        <!-- v-if="cart.type == 'Lessons'" -->
                                                    <v-select
                                                        class="student"
                                                        v-model="cart.item.student"
                                                        :items="sams.studentByParentId"
                                                        append-icon="*"
                                                        item-text="firstName"
                                                        item-value="id"
                                                        label="Select Child"
                                                        :rules="[v => v.id != 0 || 'required']"
                                                        solo
                                                        hide-details
                                                        return-object
                                                        :disabled="sales.sale.status != 'Pending'"
                                                    ></v-select>
                                                    <v-btn class="mr-3 text-none red--text" text x-small :disabled="sales.sale.status != 'Pending'" @click="deleteItem(cart)">Delete</v-btn>
                                                </td>
                                                <td> <p class="red--text text-right font-weight-bold">{{ cart.item.total_price | currency }}</p> </td>
                                            </tr>
                                        </tbody>
                                        
                                        </template>
                                    </v-simple-table>
                                    <v-divider></v-divider>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <p class="text-left black--text">
                                                            <span>Subtotal <br></span>
                                                            <span>Tax <br></span>
                                                            <span v-if="disc > 0">Discount <br></span>
                                                            <span>Total</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p class="black--text text-right font-weight-bold">
                                                            <span>{{ excl | currency }} <br></span>
                                                            <span>{{ tax | currency }} <br></span>
                                                            <span v-if="disc > 0">{{ disc | currency }} <br></span>
                                                            <span>{{ total | currency }} <br></span>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <v-combobox
                                                            label="Select Payment"
                                                            v-model="sales.sale.pay"
                                                            :items="payments"
                                                            item-text="payment"
                                                            multiple
                                                            @change="getPayment"
                                                        >
                                                        </v-combobox>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <v-btn 
                                                            @click="openPayment = true"
                                                            block
                                                            :disabled="sales.sale.status != 'Pending' || sales.sale.item.length == 0 || sales.sale.pay.length == 0 || !valid"
                                                        >
                                                            Proceed to payment
                                                        </v-btn>
                                                        
                                                    </td>
                                                </tr>
                                            </thead>
                                        </template>
                                    </v-simple-table>
                                    <v-overlay
                                        absolute
                                        :value="cart.loading"
                                        >
                                        <v-progress-linear
                                            color="deep-purple accent-4"
                                            indeterminate
                                            rounded
                                            height="6"
                                        ></v-progress-linear>
                                    </v-overlay>
                                </v-card-text>
                            </v-card>
                        </v-form>
                    </v-col>
                </v-row>
                <v-dialog
                    v-if="open"
                    v-model="open"
                    width="300"
                    persistent
                >
                    <v-card>
                        <v-toolbar
                            flat
                        >
                            <v-toolbar-title>
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-icon @click="close">mdi-close</v-icon>
                        </v-toolbar>
                        <v-card-text>
                            <span class="mt-6 text-center text-h6 font-weight-bold"> {{ item.name | toUpper }} - {{ variant.name | toUpper }} </span> <br>
                            <span class="text-center text-subtitle-1"> Price: {{ variant.price | currency }} </span>
                                <v-select
                                    label="Select Quantity"
                                    :items="quantities"
                                    v-model="quantity"
                                    solo
                                ></v-select>
                                <v-checkbox
                                    v-if="item.type == 'Lessons'"
                                    label="Permanent"
                                    v-model="permanent"
                                ></v-checkbox>
                                <v-checkbox
                                    v-model="isDiscount"
                                    label="Add Discount?"
                                ></v-checkbox>
                                <v-text-field
                                    v-if="isDiscount"
                                    label="Enter Discount"
                                    v-model.number="discount"
                                    type="number"
                                    :append-icon="percentage ? 'mdi-ticket-percent' : 'mdi-currency-php'"
                                    @click:append="toggleDiscount"
                                >
                                </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                class="text-none primary"
                                :disabled="quantity > 0 ? false : true"
                                block
                                @click="addCart"
                            >
                                Add to Cart
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog
                    v-model="openPayment"
                    width="400"
                >
                    <v-card>
                        <v-toolbar
                            flat
                            dark
                            class="primary"
                        >
                            <v-toolbar-title>
                                Add Payment &amp; Notes
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-form
                            v-model="validPayment"
                            @submit.prevent="'#'"
                        > 
                            <v-card-text>
                                    <v-textarea
                                        label="Notes"
                                        v-model="sales.sale.notes"
                                        append-icon="*"
                                        solo
                                        :rules="[v => !!v || 'required']"
                                    ></v-textarea>
                                    <template v-for="(pay, index) in sales.sale.payment">
                                        <div :key="index">
                                            <v-text-field
                                                :label="pay.payment"
                                                v-model.number="pay.value"
                                                type="number"
                                            ></v-text-field>
                                        </div>
                                    </template>
                                
                            </v-card-text>
                        </v-form>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="text-none success"
                                type="submit"
                                :disabled="!validPayment || total_payment < total"
                                :loading="loading"
                                @click="pay"
                            >
                                Pay
                            </v-btn>
                        </v-card-actions>
                        <v-card-text>
                            <input type="text" id="link-code" :value="sales.sale.link">
                            <v-btn class="text-none" @click="copyText">copy</v-btn>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-container>
            <v-dialog
                v-model="link"
                width="400"
                persistent
            >
                <v-card>
                    <v-toolbar
                        flat
                        dark
                        class="primary"
                    >
                        <v-toolbar-title>
                            Telr Link
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        {{ sales.sale.link }}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="link = false" class="text-none info">
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <search />
            <amend />
            <div class="d-none d-print-block" id="print">
                <p style="text-align: center">StepUp Academy</p>
                    <p style="text-align: center">113 Apex Atrium Motor City, Dubai, UAE</p>
                    <p style="text-align: center">04 453 4360</p>
                    <p style="text-align: center">https://stepup.ae</p>
                    <p style="text-align: center">TRN: 1002540945100003</p>
                    <p style="text-align: center">Tax Invoice</p>
                    <p style="text-align: center">
                    Invoice #:  {{ printCarts.id }}
                    </p>
                    <hr />
                    <p style="text-align: center">
                    Date Purchased: {{ isPrint ? printCarts.updated_at : today_date | dateAndTime }}
                    </p>
                <v-simple-table width="100%" fixed-header>
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
                            v-for="(cart, index) in printCarts.item"
                            :key="index"
                        >
                            <td>
                                <span class="text-caption">{{ cart.item.productName | toUpper }} - <span class="text-caption font-weight-thin">{{ cart.item.pdoName | toUpper }}</span></span> <br>
                                <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                <span class="text-caption" for="quantity">Qty: {{ cart.item.quantity }}</span> <br>
                                <!-- v-if="cart.type == 'Lessons'" -->
                                <span class="text-caption">{{ cart.item.student.firstName | toUpper }} {{ cart.item.student.familyName | toUpper }}</span>
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
                                    <span v-if="printTotal.disc > 0">Discount <br></span>
                                    <span>Total</span>
                                </p>
                            </td>
                            <td>
                                <p class="black--text text-right font-weight-bold">
                                    <span>{{ printTotal.excl | currency }} <br></span>
                                    <span>{{ printTotal.tax | currency }} <br></span>
                                    <span v-if="printTotal.disc > 0">{{ printTotal.disc | currency }} <br></span>
                                    <span>{{ printTotal.total | currency }} <br></span>
                                </p>
                            </td>
                        </tr>
                    </tfoot>
                    
                    </template>
                </v-simple-table>
            </div>
        </v-main>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "pointOfSale",

    components: {
        search: () => import('./search.vue'),
        amend: () => import('./request.vue')
    },

    beforeRouteEnter (to, from, next) {
        next(v => {
            v.redirect()
            v.POS_USERS()
            v.init()
            setTimeout(() => {
                v.$router.replace()
                .catch(error => {
                    if (
                        error.name !== 'NavigationDuplicated' &&
                        !error.message.includes('Avoided redundant navigation to current location')
                    ) {
                        console.log(error)
                    }
                })
                v.SAMS_STUDENT_BY_PARENT_ID({id: v.sales.sale.mom.id})
            }, 2000);
        })
    },

    data() {
        return {
            notes: null,
            valid: false,
            validPayment: false,
            openPayment: false,
            search: null,
            variant: null,
            item: null,
            permanent: true,
            isDiscount: false,
            percentage: false,
            quantity: 0,
            discount: 0,
            open: false,
            payments: [
                "Cash",
                "Card",
                "Bank",
                "Cheque",
                "Telr"              
            ],
            loading: false,
            link: false,
            today_date: new Date(),
            printCarts: [],
            printTotal: {},
            isPrint: false
        }
    },


    methods: {
        ...mapActions(["POS_ITEMS", "POST_VARIANTS", "POS_SEARCH", "CART_UPDATE", "CART_DELETE_BY_ID_UPDATE", "POS_USERS", "SAMS_STUDENT_BY_PARENT_ID", "CHECKOUT_PAYMENT_UPDATE", "SALE", "SALES"]),
        ...mapMutations(["POS_ITEM_REMOVE", "POS_VAIRANT_REMOVE", "POS_SEARCH_BY_SALE_ID"]),

        redirect() {
            setTimeout(() => {
                this.in_array(this.registration.form.role, ['Admin', 'Reception', 'Manager']) 
                ? '' 
                : this.$router.push({name: "Home"});
            }, 1000);
        },

        copyText() {
            let linkCopy = document.querySelector('#link-code')
            linkCopy.setAttribute('type', 'text')    // hidden 
            linkCopy.select()

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('Telr link was copied ' + msg);
            } catch (err) {
                alert('Oops, unable to copy');
            }

            /* unselect the range */
            linkCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges();
            this.close();
        },

        init() {
            this.SALE({id: this.$route.params.id})
        },

        selectedProd(e) {
            this.POS_ITEMS({type: e.text});
        },

        backToPos() {
            this.item = null
            this.POS_ITEM_REMOVE()
        },

        deleteItem(e) {
            this.sales.sale.item.splice(this.sales.sale.item.indexOf(e), 1);

            var data = {
                cartId: e.id,
                user_id: this.registration.form.id,
                items: this.sales.sale.item,
                sale_id: this.$route.params.id
            }
            setTimeout(() => {
                this.CART_DELETE_BY_ID_UPDATE(data);
            }, 1000);
        },

        backtoProduct() {
            this.variant = null
            this.POS_VAIRANT_REMOVE()
        },

        openVariant(e) {
            if(e.totalQty > 0) {
                this.POST_VARIANTS({id: e.id, type: e.type})
                this.item = e
            }
        },

        getPayment(e) {
            var pay = [];
             e.forEach((data) => {
                 pay.push({
                     payment: data,
                     value: 0
                 })
             });
             this.sales.sale.payment = pay;
        },

        selectedVariant(e) {
            this.variant = e
            this.open = true
        },

        close() {
            this.quantity = 0
            this.open = false
        },

        searchProduct() {
            this.POS_SEARCH({search: this.search})
        },

        toggleDiscount() {
            this.percentage = !this.percentage
        },

        addCart() {
            
            var cart = {
                id: 0,
                browser: '',
                ip: '',
                created_at: '',
                type: this.item.type,
                isCart: 1,
                isWeb: false,
                productId: this.item.id,
                updated_at: '',
                status: 'Pending',
                item: {
                    image: this.item.image,
                    price: this.variant.price,
                    productId: this.item.id,
                    productName: this.item.name,
                    pdoId: this.variant.id,
                    slug: this.item.slug,
                    pdoName: this.variant.name,
                    is_permanent: this.permanent,
                    discounts: [],
                    type: this.item.type,
                    status: 'Pending',
                    student: {id: 0, firstName: null, familyName: null},
                    address: {id: 0}
                }
            };

            var discount_percentage = 0;
            var discount = 0;

            var quantity = this.quantity;
            var vat = this.vat; // to be finish
            var tax = vat / 100;
            var price_excl = cart.item.price / (tax + 1);
            var total_price_excl = price_excl * quantity;
            var total_price = cart.item.price * quantity;
            var total_tax = total_price_excl * tax;
            
            if(this.isDiscount) {
                discount = this.percentage ? (total_price * (this.discount / 100)) : this.discount;
                discount_percentage = this.percentage ? this.discount : (discount / total_price) * 100;
                total_price -=  discount;
                total_price_excl = total_price / (tax + 1);
                total_tax = total_price_excl * tax

                cart.item.discounts.push({name: 'pos', value: discount})
            }
            
                cart.item.quantity = quantity
                cart.item.quantities = this.quantities
                cart.item.vat = vat
                cart.item.tax = tax
                cart.item.price_excl = price_excl
                cart.item.total_price_excl = total_price_excl
                cart.item.total_price = total_price
                cart.item.total_tax = total_tax
                cart.item.discount_percentage = discount_percentage
                cart.item.discount = discount
                

            var item = {
                user_id: this.sales.sale.user_id,
                sale_id: this.$route.params.id,
                item: cart,
                items: this.sales.sale.item
            };
            this.CART_UPDATE(item);
            this.close();
        },

        in_array(value, arr) {
          var status = false;

          for (var i = 0; i < arr.length; i++) {
            var name = arr[i];
            if (name == value) {
              status = true;
              break;
            }
          }

          return status;
        },

        isSearchOpen() {
            this.POS_SEARCH_BY_SALE_ID();
            this.SALES({
                page: 1, 
                search: null, 
                type: "Sale ID",
                perPage: 20
            });
        },

        pay() {
            this.loading = true
            this.isPrint = false
            
            var total = {
                total: this.total,
                tax: this.tax,
                excl: this.excl,
                disc: this.disc,
            };
            this.printCarts = this.sales.sale;
            this.printTotal = total;

            var address = null;
            var change = 0;

            if(this.total < this.total_payment) {
                change = this.total_payment - this.total;
                this.pays.map(val => {
                    if(val.payment == 'Change') {
                        val.value = change;
                    }
                    if(val.payment == 'Cash') {
                        if(change > 0) {
                            val.value = val.value - change;
                        }
                    }
                })
            }

            this.CHECKOUT_PAYMENT_UPDATE({
                id: this.sales.sale.id,
                item: this.sales.sale.item, 
                payment: this.sales.sale.payment, 
                mom: this.sales.sale.mom,
                link: this.isLink,
                notes: this.sales.sale.notes,
                total,
                address,
            })
            .then((result) => {
                if(!this.sales.sale.link) {
                    this.$receipt('print')
                }
                if(this.checkout.telr) {
                    if(this.total > 0) {
                        this.link = true
                    }
                    else {
                        this.$receipt('print')
                    }
                }
                this.close();
                this.openPayment = false
                this.loading = false
            })
        },

        printReceipt() {
            var total = {
                total: this.total,
                tax: this.tax,
                excl: this.excl,
                disc: this.disc,
            };
            this.printCarts = this.sales.sale;
            this.printTotal = total;
            this.isPrint = true

            setTimeout(() => {
                this.$receipt('print')
            }, 1000);
        }
    },

    computed: {
        ...mapState(["registration", "types", "pos", "cart", "sams", "checkout", "sales", "setup"]),

        total() {
            return this.sales.sale.item.reduce((total, item) => {
                return total + item.item.total_price
            }, 0)
        },

        tax() {
            return this.sales.sale.item.reduce((total, item) => {
                return total + item.item.total_tax
            }, 0)
        },

        vat() {
            return Number(this.setup.filter.vat);
        },

        excl() {
            return this.sales.sale.item.reduce((total, item) => {
                return total + item.item.total_price_excl
            }, 0)
        },

        disc() {
            return this.sales.sale.item.reduce((total, item) => {
                return total + item.item.discount
            }, 0)
        },

        quantities() {
            if(this.variant) {
                var qty = []
                for(var i = 0; i < this.variant.quantity; i++) {
                    qty.push(i + 1)
                }
                return qty;
            }
        },

        total_payment() {
            return this.sales.sale.payment.reduce((total, item) => {
                return total + item.value
            }, 0)
        },

        isLink() {
            return this.sales.sale.payment.some(e => e.payment == 'Telr');
        }
    }
}
</script>

<style lang="scss" scoped>
tbody {
     tr:hover {
        background-color: transparent !important;
     }
  }

</style>