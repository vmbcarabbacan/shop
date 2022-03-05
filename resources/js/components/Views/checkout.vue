<template>
    <v-container>
        <v-form
            v-model="valid"
        >
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-card>
                        <v-card-title>
                            Address
                        </v-card-title>
                        <v-card-text>
                            <v-alert
                                type="success"
                                v-show="address.message"
                            >
                                {{ address.message }}
                            </v-alert>
                                <v-select
                                    v-model="registration.form.address.country"
                                    :items="countries"
                                    label="Country/Region"
                                    solo
                                ></v-select>
                                <v-text-field
                                    v-model="registration.form.address.street"
                                    label="Street name"
                                    :rules="[v => !!v || 'Street name is required']"
                                ></v-text-field>
                                <v-text-field
                                    v-model="registration.form.address.building"
                                    label="Building name/no., floor, Apt. or villa no."
                                    :rules="[v => !!v || 'Building name is required']"
                                ></v-text-field>
                                <v-select
                                    v-model="registration.form.address.city"
                                    :items="cities"
                                    label="City"
                                    solo
                                ></v-select>
                                <v-text-field
                                    v-model="registration.form.address.area"
                                    label="Area/District"
                                    :rules="[v => !!v || 'Area is required']"
                                ></v-text-field>
                        </v-card-text>
                        <v-card-text>
                            <v-textarea
                                label="Notes"
                                v-model="notes"
                            ></v-textarea>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    md="7"
                >
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-card>
                                <v-card-text>
                                    <v-simple-table width="100%">
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <!-- <th class="text-left" width="20%">
                                                    
                                                </th> -->
                                                <th class="text-left" width="80%">
                                                    
                                                </th>
                                                <th class="text-right" width="20%">
                                                    Total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(cart, index) in cart.carts"
                                                :key="index"
                                            >
                                                <!-- <td>
                                                    <v-avatar size="150" tile>
                                                        <v-img
                                                            :src="`/${cart.item.image.link}`"
                                                            :lazy-src="`/${cart.item.image.link_res}`"
                                                            :name="cart.item.image.name"
                                                            :alt="cart.item.image.alt"
                                                            contain
                                                        ></v-img>
                                                    </v-avatar>
                                                </td> -->
                                                <td>
                                                    <a :href="`/${cart.type}/${cart.item.slug}/pdo/${cart.item.pdoId}`" target="_blank" class="text-subtitle-1 font-weight-bold black--text">{{ cart.item.productName | toUpper }} - <span class="text-caption font-weight-thin">{{ cart.item.pdoName | toUpper }}</span></a> <br>
                                                    <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                                    <span class="text-caption" for="quantity">Qty: {{ cart.item.quantity }}</span>
                                                        <!-- v-if="cart.type == 'Lessons'" -->
                                                    <v-select
                                                        class="student"
                                                        v-model="cart.item.student"
                                                        :items="registration.form.children"
                                                        item-text="firstName"
                                                        item-value="id"
                                                        label="Select Child"
                                                        hint="required"
                                                        persistent-hint
                                                        :rules="[v => v.id != 0 || 'required']"
                                                        solo
                                                        return-object
                                                    ></v-select>
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
                                                        <span v-if="discount > 0">Discount <br></span>
                                                        <span>Total</span>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p class="black--text text-right font-weight-bold">
                                                        <span>{{ excl | currency }} <br></span>
                                                        <span>{{ tax | currency }} <br></span>
                                                        <span v-if="discount > 0">{{ discount | currency }} <br></span>
                                                        <span>{{ total | currency }} <br></span>
                                                    </p>
                                                </td>
                                            </tr>
                                        </tfoot>
                                        </template>
                                    </v-simple-table>
                                    
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col v-if="registration.form.credits > 0">
                            <v-card>
                                <v-card-actions>
                                    <span>
                                        You have available credits. Do you want to use?
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
                                                :rules="[v => v <= registration.form.credits || 'Enter valid amount']"
                                                :hint="`${registration.form.credits}`"
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
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <div class="text-right">
                                <v-btn @click="checkoutBtn" :disabled="!valid" class="text-none success">Proceed to checkout</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'checkout',

    // created() {
    //     if(this.registration.form.id ==  0) {
    //         this.$router.push('/')
    //     }
    // },

    data() {
        return {
            isCreditApplied: false,
            valid: false,
            validCredits: false,
            credits: 0,
            notes: null
        }
    },

    methods: {
        ...mapActions(["ADDRESS_SAVE", "CHECKOUT_PAYMENT_ONLINE"]),

        saveAddress() {
            var data = {
                address: this.registration.form.address
            };
            this.ADDRESS_SAVE(data);
        },

        checkoutBtn() {
            var payment = [{
                payment: 'Telr',
                value: this.total
            }];
            var total = {
                total: this.total,
                tax: this.tax,
                excl: this.excl,
                disc: this.discount
            };
            var item = {
                item: this.cart.carts, 
                payment, 
                total, 
                notes: this.notes, 
                mom: this.registration.form.mom, 
                address: this.registration.form.address,
                isCredit: this.isCreditApplied,
                credit: this.credits
            };
            
            this.CHECKOUT_PAYMENT_ONLINE(item)
            .then((result) => {
                if(result.data.telr) {
                    location.href = result.data.telr
                } else {
                    this.$router.push({name: 'SuccessPayment'})
                }
            });
        },

        addCredits() {
            
            var discountPercentage = (this.credits / this.total) * 100;
            this.cart.carts.forEach((item) => {

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
            // console.log(this.cart.carts)
        },

        removeCredits() {
            this.cart.carts.forEach((item) => {
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
        }
    },

    computed: {
        ...mapState(["registration", "countries", "cities", "address", "cart", "checkout"]),

        total() {
            return this.cart.carts.reduce((total, item) => {
                return total + item.item.total_price
            }, 0)
        },
        tax() {
            return this.cart.carts.reduce((total, item) => {
                return total + item.item.total_tax
            }, 0)
        },
        excl() {
            return this.cart.carts.reduce((total, item) => {
                return total + item.item.total_price_excl
            }, 0)
        },
        discount() {
            return this.cart.carts.reduce((total, item) => {
                return total + item.item.discount
            }, 0)
        },

    }
}
</script>


<style lang="scss" scoped>
tbody {
     tr:hover {
        background-color: transparent !important;
     }
  }

  .student {
      width: 50%;
  }

</style>