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
                        @click="isSearchOpen"
                    >
                        <v-icon
                            color="primary"
                            dark
                        >
                        mdi-magnify
                        </v-icon>
                    </v-btn>
                </template>
                <span>View Transaction</span>
            </v-tooltip>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        :to="{name: 'ENDOFDAY'}"
                    >
                        <v-icon
                            color="primary"
                            dark
                        >
                        mdi-calendar-today
                        </v-icon>
                    </v-btn>
                </template>
                <span>View end of day report</span>
            </v-tooltip>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="isDiscountOpen = !isDiscountOpen"
                    >
                        <v-icon
                            color="primary"
                            dark
                        >
                        mdi-sale
                        </v-icon>
                    </v-btn>
                </template>
                <span>Add package discounts</span>
            </v-tooltip>

        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-row
                    align="start"
                    justify="center"
                >
                    <!-- Item container for POS -->
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
                                                
                                            >
                                                <p class="text-center white--text">{{ variant.name | toUpper }}</p>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            
                        </v-card>
                    </v-col>
                    <!-- POS Cart Preview -->
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
                                <v-card-text>
                                    <v-autocomplete
                                        label="Select Customer"
                                        :items="pos.users"
                                        item-text="fullName"
                                        item-value="id"
                                        @change="selectedParent"
                                        v-model="mom"
                                        append-icon="*"
                                        :rules="[v => v.id != 0 || 'required']"
                                        solo
                                        return-object
                                    ></v-autocomplete>
                                </v-card-text>
                                <v-card-text>
                                    <v-simple-table height="450" width="100%" class="overflow-x-auto" fixed-header>
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <!-- <th class="text-left" width="20%">
                                                    
                                                </th> -->
                                                <th class="text-left" width="60%">
                                                    
                                                </th>
                                                <th class="text-right" width="40%">
                                                    Total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(cart, index) in cart.pos"
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
                                                    ></v-select>
                                                    <v-btn class="mr-3 text-none red--text" text x-small @click="deleteItem(cart.id)">Delete</v-btn>
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
                                                <tr v-if="pos.credits > 0">
                                                    <td colspan="2">
                                                        <v-card flat tile>
                                                            <v-card-actions>
                                                                <span>
                                                                    Available credits
                                                                </span>
                                                                <v-spacer></v-spacer>
                                                                <v-form
                                                                    v-model="validCredits"
                                                                >
                                                                    <div v-if="!isCreditApplied">
                                                                        <v-text-field
                                                                            label="Enter Amount"
                                                                            v-model.number="credits"
                                                                            type="number"
                                                                            :rules="[v => v <= pos.credits || 'Enter valid amount']"
                                                                            :hint="`${pos.credits}`"
                                                                            persistent-hint
                                                                        ></v-text-field>
                                                                        <v-btn
                                                                            :disabled="!validCredits"
                                                                            class="text-none"
                                                                            @click="addCredits"
                                                                        >
                                                                        Apply Credits
                                                                        </v-btn>
                                                                    </div>
                                                                    <v-btn
                                                                        v-else
                                                                        @click="removeCredits"
                                                                        class="text-none"
                                                                    >
                                                                        Remove Credit ({{ credits | currency }})
                                                                    </v-btn>
                                                                </v-form>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <v-combobox
                                                            label="Select Payment"
                                                            v-model="payment"
                                                            :items="payments"
                                                            multiple
                                                            @change="getPayment"
                                                        >
                                                        </v-combobox>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <td colspan="2">
                                                        <v-btn 
                                                            @click="openPayment = true"
                                                            block
                                                            :disabled="cart.pos.length == 0 || pays.length == 0 || !valid"
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
                <!-- Item options -->
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
                        <v-card-actions>
                            <v-btn
                                class="text-none success"
                                block
                                @click="requestBtn"
                            >
                                Request
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- Request Dialog -->
                <v-dialog
                    v-if="openRequest"
                    v-model="openRequest"
                    width="500"
                    persistent
                >
                    <v-card>
                        <v-toolbar
                            flat
                            dark
                            class="primary"
                        >
                            <v-toolbar-title>
                                Request for stock {{ item.name | toUpper }} - {{ variant.name | toUpper }}
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-icon @click="closeRequest">mdi-close</v-icon>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                v-model="requestValid"
                            >
                                <v-combobox
                                    label="Select request type"
                                    v-model="request.type"
                                    :items="requests"
                                    :rules="[e => !!e || 'required']"
                                ></v-combobox>
                                <v-text-field
                                    :label="request.type === 'amend price' ? 'Price' : 'Quantity'"
                                    v-model.number="request.value"
                                    type="number"
                                    :rules="[e => e > 0 || 'required']"
                                ></v-text-field>
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
                                @click="sendRequest"
                                :disabled="!requestValid"
                                :loading="openRequestLoading"
                            >
                                Send Request
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- Dialog Box for Payments -->
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
                                    v-model="notes"
                                    append-icon="*"
                                    solo
                                    :rules="[v => !!v || 'required']"
                                ></v-textarea>
                                <template v-for="(pay, index) in pays">
                                    <div :key="index">
                                        <v-text-field
                                            v-if="pay.payment != 'Change'"
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
                                @click="pay"
                                :disabled="!validPayment || total_payment < total"
                                :loading="loading"
                            >
                                Pay
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                
            </v-container>
                <!-- Generated link for telr transaction -->
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
                            {{ checkout.telr }}
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="closeLink" class="text-none info">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            <search />
            <amend />
            <discount 
                :isDiscountOpen="isDiscountOpen" 
                v-on:closeModal="isDiscountOpen = !isDiscountOpen"
                v-on:addDiscount="addDiscount($event)"
            />
            <!-- Generated receipt for printing -->
            <div class="d-none d-print-block" id="print">
                <p style="text-align: center">StepUp Academy</p>
                    <p style="text-align: center">113 Apex Atrium Motor City, Dubai, UAE</p>
                    <p style="text-align: center">04 453 4360</p>
                    <p style="text-align: center">https://stepup.ae</p>
                    <p style="text-align: center">TRN: 1002540945100003</p>
                    <p style="text-align: center">Tax Invoice</p>
                    <p style="text-align: center">
                    Invoice #:  {{ checkout.transactionNumber }}
                    </p>
                    <hr />
                    <p style="text-align: center">
                    Date Purchased: {{ today_date | dateAndTime }}
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
                            v-for="(cart, index) in printCarts"
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
        amend: () => import('./request.vue'),
        discount: () => import('./discount/index.vue')
    },

    beforeRouteEnter (to, from, next) {
        next(v => {
            v.redirect()
            v.POS_USERS()
            v.POS_ITEM_REMOVE()
            v.POS_VAIRANT_REMOVE()
        })
    },

    data() {
        return {
            notes: null,
            valid: false,
            validPayment: false,
            openPayment: false,
            payment: null,
            search: null,
            item: null,
            permanent: true,
            variant: null,
            isDiscount: false,
            percentage: false,
            quantity: 0,
            discount: 0,
            open: false,
            mom: {id: 0},
            pays: [],
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
            openRequest: false,
            requestValid: false,
            requests: ['add quantity', 'deduct quantity', 'amend price'],
            request: {
                type: null,
                comment: null,
                value: 0
            },
            openRequestLoading: false,
            validCredits: false,
            isCreditApplied: false,
            credits: 0,
            isDiscountOpen: false
        }
    },


    methods: {
        ...mapActions(["POS_ITEMS", "POST_VARIANTS", "POS_SEARCH", "CART_ADD", "CART_DELETE_BY_ID", "POS_USERS", "SAMS_STUDENT_BY_PARENT_ID", "CHECKOUT_PAYMENT", "SALES", "REQUEST_SAVE"]),
        ...mapMutations(["POS_ITEM_REMOVE", "POS_VAIRANT_REMOVE", "POS_SEARCH_BY_SALE_ID", "CHECKOUT_TELR"]),

        
        redirect() {
            setTimeout(() => {
                this.in_array(this.registration.form.role, ['Admin', 'Reception', 'Manager']) 
                ? '' 
                : this.$router.push({name: "Home"});
            }, 1000);
        },

        selectedProd(e) {
            this.POS_ITEMS({type: e.text});
        },

        backToPos() {
            this.item = null
            this.POS_ITEM_REMOVE()
        },

        deleteItem(e) {
            var data = {
                cartId: e,
                user_id: this.registration.form.id
            }
            this.CART_DELETE_BY_ID(data);
        },

        backtoProduct() {
            this.variant = null
            this.POS_VAIRANT_REMOVE()
        },

        openVariant(e) {
            // if(e.totalQty > 0) {
                this.POST_VARIANTS({id: e.id, type: e.type})
                this.item = e
            // }
        },

        getPayment(e) {
            var pay = [];
             e.forEach((data) => {
                 if(data == 'Cash') {
                     pay.push({
                         payment: 'Change',
                         value: 0
                     })
                 }
                 pay.push({
                     payment: data,
                     value: 0
                 })
             });
             this.pays = pay;
        },

        selectedParent(e) {
            this.mom = e
            this.SAMS_STUDENT_BY_PARENT_ID({id: e.id})
        },

        selectedVariant(e) {
            this.variant = e
            this.open = true
        },

        close() {
            this.quantity = 0
            this.open = false
        },

        closeRequest() {
            this.openRequest = false
            this.openRequestLoading = false
        },

        searchProduct() {
            this.POS_SEARCH({search: this.search})
        },

        toggleDiscount() {
            this.percentage = !this.percentage
        },

        ebd(price) {
            return price - (price * .1);
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
            var discount_ebd = 0;
            var discount_pos = 0;

            var quantity = this.quantity;
            var vat = this.vat; // to be finish
            var tax = vat / 100;
            var price_excl = cart.item.price / (tax + 1);
            var total_price_excl = price_excl * quantity;
            var total_price = cart.item.price * quantity;
            var total_tax = total_price_excl * tax;

            if(this.variant.targetEbd && this.variant.targetEbd === 1 && (this.setup.filter.ebd == 'true' || this.setup.filter.ebd == true)) {
                discount_ebd = total_price - this.ebd(total_price);
                discount_percentage = 10;
                total_price_excl = this.ebd(total_price_excl);
                total_price = this.ebd(total_price);
                total_tax = this.ebd(total_tax);

                cart.item.discounts.push({name:'ebd', value: discount_ebd});
            }
            
            if(this.isDiscount) {
                discount_pos = this.percentage ? (total_price * (this.discount / 100)) : this.discount;
                discount_percentage = this.percentage ? this.discount : (discount_pos / total_price) * 100;
                total_price -=  discount_pos;
                total_price_excl = total_price / (tax + 1);
                total_tax = total_price_excl * tax

                cart.item.discounts.push({name: 'pos', value: discount_pos})
            }
            
                discount = discount_ebd + discount_pos;

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
                user_id: this.registration.form.id,
                item: cart
            };
            this.CART_ADD(item);
            this.close();
        },

        addCredits() {
            var discountPercentage = (this.credits / this.total) * 100;
            this.cart.pos.forEach((item) => {

                var price = item.item.total_price + item.item.discount;
                var discount = item.item.total_price * (discountPercentage / 100);

                var totalDiscountPerItem = item.item.discount + discount;
                var discountPercentagePerItem = (totalDiscountPerItem / price) * 100;

                var totalPricePerItem = item.item.total_price - discount;
                var totalPriceExclPerItem = totalPricePerItem / 1.05;
                var totalTaxPerItem = totalPriceExclPerItem * 0.05;

                item.item.total_price = totalPricePerItem;
                item.item.total_price_excl = totalPriceExclPerItem;
                item.item.total_tax = totalTaxPerItem;
                item.item.discount = totalDiscountPerItem;
                item.item.discount_percentage = discountPercentagePerItem;

                item.item.discounts.push({name: 'credits', value: discount});
            })

            this.isCreditApplied = true
        },

        removeCredits() {
            this.cart.pos.forEach((item) => {
            item.item.discounts.filter((credit) => {
                    if(credit.name == 'credits') {
                        var priceItem = item.item.total_price + item.item.discount;
                        var totalPrice = item.item.total_price + credit.value;
                        var totalPriceExcl = totalPrice / 1.05;
                        var totalTax = totalPriceExcl * 0.05;
                        var totalDiscount = item.item.discount - credit.value;
                        var discountPercentages = (totalDiscount / priceItem) * 100;

                        item.item.total_price = totalPrice;
                        item.item.total_price_excl = totalPriceExcl;
                        item.item.total_tax = totalTax;
                        item.item.discount = totalDiscount;
                        item.item.discount_percentage = discountPercentages;

                        const filtersList = item.item.discounts.filter(element => element !== credit)
                        item.item.discounts = filtersList
                    }
                });
            });

            this.isCreditApplied = false
        },

        addDiscount(e) {
            if(this.total > e.value) {
                var discountedTotal = this.total - e.value;
                var discountPercentage = (discountedTotal / this.total) * 100;
                this.cart.pos.forEach((item) => {

                    var price = item.item.total_price + item.item.discount;
                    var discount = item.item.total_price * (discountPercentage / 100);

                    var totalDiscountPerItem = item.item.discount + discount;
                    var discountPercentagePerItem = (totalDiscountPerItem / price) * 100;

                    var totalPricePerItem = item.item.total_price - discount;
                    var totalPriceExclPerItem = totalPricePerItem / 1.05;
                    var totalTaxPerItem = totalPriceExclPerItem * 0.05;

                    item.item.total_price = totalPricePerItem;
                    item.item.total_price_excl = totalPriceExclPerItem;
                    item.item.total_tax = totalTaxPerItem;
                    item.item.discount = totalDiscountPerItem;
                    item.item.discount_percentage = discountPercentagePerItem;

                    item.item.discounts.push({name: e.name, value: discount});
                })
            } 
            this.isDiscountOpen = !this.isDiscountOpen
        },

        requestBtn() {
            this.openRequest = true
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
            
            var total = {
                total: this.total,
                tax: this.tax,
                excl: this.excl,
                disc: this.disc,
            };
            this.printCarts = this.cart.pos;
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
            
            this.CHECKOUT_PAYMENT({
                item: this.cart.pos, 
                payment: this.pays, 
                mom: this.mom,
                link: this.isLink,
                notes: this.notes,
                total,
                address,
                isCredit: this.isCreditApplied,
                credit: this.credits
            })
            .then((result) => {
                if(!this.checkout.telr) {
                    this.$receipt('print')
                } else {
                    this.link = true
                }
                setTimeout(() => {
                    this.pays = [];
                    this.mom = {id: 0}
                    this.notes = null
                    this.payment = null
                    this.openPayment = false
                    this.loading = false
                }, 1000);
            })
            
        },

        sendRequest() {
            var filter = {
                type: this.request.type,
                comment: this.request.comment,
                value: this.request.value,
                product_id: this.item.id,
                option_id: this.variant.id
            }
            this.openRequestLoading = true
            this.REQUEST_SAVE({filter})
            .then((result) => {
                this.closeRequest();
            })
        },

        closeLink() {
            this.CHECKOUT_TELR(null)
            this.link = false
        }
    },

    computed: {
        ...mapState(["registration", "types", "pos", "cart", "sams", "checkout", "setup"]),

        total() {
            return this.cart.pos.reduce((total, item) => {
                return total + item.item.total_price
            }, 0)
        },

        vat() {
            return Number(this.setup.filter.vat);
        },

        tax() {
            return this.cart.pos.reduce((total, item) => {
                return total + item.item.total_tax
            }, 0)
        },

        excl() {
            return this.cart.pos.reduce((total, item) => {
                return total + item.item.total_price_excl
            }, 0)
        },

        disc() {
            return this.cart.pos.reduce((total, item) => {
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
            return this.pays.reduce((total, item) => {
                return total + item.value
            }, 0)
        },

        isLink() {
            return this.pays.some(e => e.payment == 'Telr');
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