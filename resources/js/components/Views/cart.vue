<template>
    <div>
        <v-container>
            <v-row
                align="start"
                justify="center"
            >
                <v-col
                    cols="12"
                    md="8"
                >
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-card
                                light
                                outlined
                            >
                                <v-card-title>
                                    <v-subheader class="text-h4">Shopping Cart</v-subheader>
                                    
                                </v-card-title>
                                <v-card-text>
                                    <v-simple-table width="100%">
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left" width="20%">
                                                    
                                                </th>
                                                <th class="text-left" width="60%">
                                                    
                                                </th>
                                                <th class="text-right" width="20%">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(cart, index) in cart.carts"
                                                :key="index"
                                            >
                                                <td>
                                                    <v-avatar size="150" tile>
                                                        <v-img
                                                            :src="`/${cart.item.image.link}`"
                                                            :lazy-src="`/${cart.item.image.link_res}`"
                                                            :name="cart.item.image.name"
                                                            :alt="cart.item.image.alt"
                                                            contain
                                                        ></v-img>
                                                    </v-avatar>
                                                </td>
                                                <td>
                                                    <a :href="`/${cart.type}/${cart.item.slug}/pdo/${cart.item.pdoId}`" target="_blank" class="text-subtitle-1 font-weight-bold black--text">{{ cart.item.productName | toUpper }}</a> <br>
                                                    <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                                    <span class="text-body-1">Option: {{ cart.item.pdoName | toUpper }}</span><br>
                                                    <label class="text-body-1 red--text" for="quantity">Quantity: </label>
                                                        <template v-if="cart.type == 'Lessons'">
                                                            {{ cart.item.quantity }}
                                                        </template>
                                                        <template v-else>
                                                            <select class="quantity" name="quantity" id="quantity" @change="selectedQuantity(cart)" v-model="cart.item.quantity">
                                                                <option v-for="(qty) in cart.item.quantities" :key="qty" :value="qty"> {{qty}} </option>
                                                            </select> 
                                                        </template>
                                                            <br>
                                                    <v-btn class="mr-3 text-none" text x-small @click="deleteItem(cart.id)">Delete</v-btn>
                                                    <v-btn class="ml-3 text-none" text x-small @click="changeIsCart(cart.id, false)">Save for later</v-btn>
                                                </td>
                                                <td> <p class="red--text text-right font-weight-bold">{{ cart.item.price | currency }}</p> </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td></td>
                                                <td colspan="2">
                                                    <p class="text-subtitle-1 text-right black--text">
                                                        Subtotal ({{ cart.carts.length }} {{ cart.carts.length > 1 ? 'items' : 'item' }})
                                                        <span class="black--text font-weight-bold"> {{ total | currency }} </span>
                                                    </p>
                                                </td>
                                            </tr>
                                        </tfoot>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>

                            <v-card
                                light
                                outlined
                                class="mt-6"
                                v-if="cart.wishlist.length > 0"
                            >
                                <v-card-title>
                                    <v-subheader class="text-h4">Save for later ({{ cart.wishlist.length }} {{ cart.wishlist.length > 1 ? 'items' : 'item' }}) </v-subheader>
                                    
                                </v-card-title>
                                <v-card-text>
                                    <v-slide-group
                                        class="pa-4"
                                        active-class="success"
                                        show-arrows
                                    >
                                        <v-slide-item
                                            v-for="(cart, index) in cart.wishlist"
                                            :key="index"
                                            v-slot="{ active, toggle }"
                                        >
                                            <v-card
                                                :color="active ? undefined : 'grey lighten-1'"
                                                class="ma-4"
                                                @click="toggle"
                                            >
                                            <v-card
                                                class="text-center"
                                                flat
                                            >
                                                <v-avatar
                                                    tile
                                                    size="250"
                                                >
                                                    <v-img
                                                        :src="`/${cart.item.image.link}`"
                                                        :lazy-src="`/${cart.item.image.link_res}`"
                                                        :name="cart.item.image.name"
                                                        :alt="cart.item.image.alt"
                                                        contain
                                                    ></v-img>
                                                </v-avatar>
                                                <v-card-text class="text-left">
                                                    <span class="text-h6" v-html="$options.filters.toUpper(cart.item.productName)"></span> <br>
                                                    <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                                    <span class="text-body-1">Option: {{ cart.item.pdoName | toUpper }}</span><br>
                                                    <span class="text-body-1 mt-n4" v-html="$options.filters.currency(cart.item.price)"></span> <br>
                                                    <v-btn
                                                        class="text-none"
                                                        small
                                                        block
                                                        @click="changeIsCart(cart.id, true)"
                                                    >
                                                        Move to cart
                                                    </v-btn>
                                                    <br>
                                                    <v-btn
                                                        class="text-none"
                                                        x-small
                                                        text
                                                        @click="deleteItem(cart.id)"
                                                    >
                                                        Delete
                                                    </v-btn>
                                                </v-card-text>
                                            </v-card>
                                            </v-card>
                                        </v-slide-item>
                                    </v-slide-group>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    md="2"
                    v-if="$vuetify.breakpoint.mdAndUp"
                >
                    <v-card
                        light
                        outlined
                        v-if="cart.carts.length > 0"
                    >
                        <v-card-text>
                            <span class="text-subtitle-1">
                                Subtotal ({{ cart.carts.length }} {{ cart.carts.length > 1 ? 'items' : 'item' }})
                                <span class="black--text font-weight-bold"> {{ total | currency }} </span>
                            </span>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                color="orange"
                                class="text-none"
                                block
                                small
                                @click="proceedToBuy"
                            >
                                Proceed to buy
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-dialog
                        v-model="cart.loading"
                        width="400"
                    >
                        <v-card>
                            <v-card-text>
                                <p class="text-center">Processing your request. Please wait</p>
                                <v-progress-linear
                                    color="deep-purple accent-4"
                                    indeterminate
                                    rounded
                                    height="6"
                                ></v-progress-linear>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "cartView",

    created() {
        this.checkIfAvailable()
    },

    methods: {
        ...mapMutations(["LOGIN_OPEN", "CART_IS_PROCEED"]),
        ...mapActions(["CART_DELETE_BY_ID", "CART_IS", "PRODUCT_CHECK_IF_AVAILABLE", "CART_UPDATE_QUANTITY"]),

        deleteItem(e) {
            var data = {
                cartId: e,
                user_id: this.registration.form.id
            }
            this.CART_DELETE_BY_ID(data);
        },

        checkIfAvailable() {
            if(this.cart.carts.length > 0) { 
                var data = {
                    carts: this.cart.carts,
                    user_id: this.registration.form.id
                }
                this.PRODUCT_CHECK_IF_AVAILABLE(data)
            }
        },

        selectedQuantity(cart) {
            var data = {
                cart
            }
            this.CART_UPDATE_QUANTITY(data)
        },

        proceedToBuy() {
            if(this.registration.form.id === 0) {
                this.LOGIN_OPEN(true)
                this.CART_IS_PROCEED(true)
                return;
            }

            this.$router.push({name: 'Checkout'})
        },

        changeIsCart(e, f) {
            var data = {
                cartId: e,
                isCart: f,
                user_id: this.registration.form.id
            }

            this.CART_IS(data)
        }
    },
    
    computed: {
        ...mapState(["cart", "registration"]),

        total() {
            return this.cart.carts.reduce((total, item) => {
                return total + item.item.total_price
            }, 0)
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

  .quantity {
      border-style: solid;
      box-sizing: border-box;
      border: solid;
  }
</style>