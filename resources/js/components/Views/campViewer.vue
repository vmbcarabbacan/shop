<template>
    <div>
        <!-- <div v-if="Object.keys(product.productPd).length > 0"> -->
            <v-container>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <div>
                            <VueSlickCarousel
                                ref="c1"
                                :asNavFor="$refs.c2"
                                :focusOnSelect="true"
                                fade
                                
                            >
                                <v-img
                                    v-for="(prodductImage, index) in pd.images"
                                    :key="index"
                                    :src="`/${prodductImage.link}`"
                                    :lazy-src="`/${prodductImage.link_res}`"
                                    :alt="prodductImage.alt"
                                    :name="prodductImage.name"
                                />
                            </VueSlickCarousel>
                            <VueSlickCarousel
                                ref="c2"
                                class="bottom"
                                :asNavFor="$refs.c1"
                                :slidesToShow="7"
                                :focusOnSelect="true"
                            >
                                <v-img
                                    v-for="(prodductImage, index) in pd.images"
                                    :key="index"
                                    :src="`/${prodductImage.link}`"
                                    :lazy-src="`/${prodductImage.link_res}`"
                                    :alt="prodductImage.alt"
                                    :name="prodductImage.name"
                                />
                            </VueSlickCarousel>
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        md="3"
                    >
                        <v-card
                            flat
                        >
                            <v-card-text>
                                <h1 class="text-lg-h6 text-body-1">{{ pd.name | toUpper }}</h1>
                                <span> {{ pd.type | toUpper }} </span>
                                
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-text>
                                <span class="text-lg-subtitle-1 text-caption">
                                    Price: <span class="red--text" v-if="pd.pdo.name"> {{ parseInt(pd.pdo.price) | currency }} </span>
                                     <span class="red--text" v-else> not available </span>
                                </span>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-select
                                v-model="pd.pdo.id"
                                :items="pd.variants"
                                item-text="name"
                                item-value="id"
                                solo
                                @change="change_sku"
                            >

                            </v-select>
                            <v-card-text>
                                <div v-html="pd.body"></div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        md="2"
                    >
                        <v-card>
                            <v-card-text>
                                <span class="red--text" v-if="pd.pdo.name"> {{ parseInt(pd.pdo.price) | currency }} </span>
                                <span class="red--text" v-else> not available </span>
                            </v-card-text>
                            <v-card-text>
                                <span v-if="pd.pdo.quantity > 0" class="green--text">In Stock</span>
                                <span v-else class="red--text">Out of Stock</span>
                                <v-select
                                    v-model="quantity"
                                    :items="quantities"
                                    solo
                                    :disabled="pd.pdo.quantity === 0"
                                >
                                    <template v-slot:prepend>
                                        <p v-html="`Qty: `"></p>
                                    </template>
                                </v-select>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-btn
                                    dark
                                    block
                                    class="text-none mb-2"
                                    color="purple"
                                    @click="addCart(true)"
                                >
                                    Add to cart
                                </v-btn>
                                <v-btn
                                    dark
                                    block
                                    class="text-none"
                                    color="orange"
                                    @click="buyNow(true)"
                                >
                                    Buy Now
                                </v-btn>
                                
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-btn
                                    dark
                                    block
                                    class="text-none"
                                    color="green"
                                    @click="addCart(false)"
                                >
                                    Add to wishlist
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row
                    v-if="pd.relatedUniformsValue.length > 0"
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        md="9"
                    >
                        <v-sheet
                            class="mx-auto"
                        >

                                <v-subheader class="text-h5">Related Uniforms</v-subheader>
                            <v-slide-group
                            class="pa-4"
                            active-class="success"
                            show-arrows
                            >
                            <v-slide-item
                                v-for="(product, index) in pd.relatedUniformsValue"
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
                                        @click="selected(product)"
                                    >
                                        <v-img
                                            :src="`/${product.image.link}`"
                                            :lazy-src="`/${product.image.link_res}`"
                                            :name="product.image.name"
                                            :alt="product.image.alt"
                                            contain
                                        >
                                        </v-img>
                                    </v-avatar>
                                    <v-card-text class="text-left">
                                        <p class="text-h6" v-html="$options.filters.toUpper(product.name)" @click="selected(product)"></p>
                                        <p class="text-body-1 mt-n4" v-html="$options.filters.currency(product.pdo.price)"></p>
                                    </v-card-text>
                                </v-card>
                                </v-card>
                            </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-col>
                    <v-col
                        cols="12"
                        md="9"
                    >
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
                <v-row
                    v-if="pd.relatedUniformsValue.length > 0"
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        md="9"
                    >
                        <v-sheet
                            class="mx-auto"
                        >

                                <v-subheader class="text-h5">Related Lessons</v-subheader>
                            <v-slide-group
                            class="pa-4"
                            active-class="success"
                            show-arrows
                            >
                            <v-slide-item
                                v-for="(product, index) in pd.relatedLessonsValue"
                                :key="index"
                                v-slot="{ active, toggle }"
                            >
                                <v-card
                                    :color="active ? undefined : 'grey lighten-1'"
                                    class="ma-4"
                                    @click="toggle"
                                    v-if="product.pdo"
                                >
                                <v-card
                                    class="text-center"
                                    flat
                                >
                                    <v-avatar
                                        tile
                                        size="250"
                                        @click="selected(product)"
                                    >
                                        <v-img
                                            :src="`/${product.image.link}`"
                                            :lazy-src="`/${product.image.link_res}`"
                                            :name="product.image.name"
                                            :alt="product.image.alt"
                                            contain
                                        >
                                        </v-img>
                                    </v-avatar>
                                    <v-card-text class="text-left">
                                        <p class="text-h6" v-html="$options.filters.toUpper(product.name)" @click="selected(product)"></p>
                                        <p class="text-body-1 mt-n4" v-if="product.pdo" v-html="$options.filters.currency(product.pdo.price)"></p>
                                        <p class="text-body-1 mt-n4 red--text" v-else v-html="`Out of Stock`"></p>
                                    </v-card-text>
                                </v-card>
                                </v-card>
                            </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-snackbar
                    v-model="product.addedLoading"
                    top
                    right
                    :color="color"
                    >
                    <v-alert
                        type="success"
                        :color="color"
                    >
                        {{ text }}
                    </v-alert>
                </v-snackbar>
            </v-container>
        <!-- </div>
        <div
            v-else
        >
            Looking for something?
            We're sorry. The web address you entered is not a functioning page on our site
            go to StepUp Academy online shope home page
        </div> -->
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { mapState, mapActions } from "vuex";
export default {
    name: "productUniformViewer",

    components: {
        VueSlickCarousel,
    },

    data() {
        return {
            quantity: 1,
            color: null,
            text: null
        }
    },

    created() {
        var link = {
            slug: this.$route.params.slug,
            pdo: this.$route.params.pdo
        }
        this.PRODUCT_FILTER_BY_SLUG_AND_PDO(link)
    },

    methods: {
        ...mapActions(["PRODUCT_FILTER_BY_SLUG_AND_PDO", "CART_ADD"]),

        selected(e) {
            this.$router.push({
                path: `/${e.type}/${e.slug}/pdo/${e.pdo.id}`
            })
            .catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    console.log(error)
                }
            })

            var link = {
                slug: e.slug,
                pdo: e.pdo.id
            }
            this.PRODUCT_FILTER_BY_SLUG_AND_PDO(link)
        },

        addShop(isCart) {
            var cart = {
                id: 0,
                browser: '',
                ip: '',
                created_at: '',
                type: this.pd.type,
                isCart,
                isWeb: true,
                productId: this.pd.id,
                updated_at: '',
                status: 'Pending',
                item: {
                    image: this.pd.images[0],
                    price: this.pd.pdo.price,
                    productId: this.pd.id,
                    productName: this.pd.name,
                    pdoId: this.pd.pdo.id,
                    slug: this.pd.slug,
                    pdoName: this.pd.pdo.name,
                    is_permanent: true,
                    discounts: [],
                    type: this.pd.type,
                    status: 'Pending',
                    student: {id: 0, firstName: null, familyName: null},
                    address: {id: 0}
                }
            };
            var quantity = this.quantity;
            var vat = this.vat; // to be finish
            var tax = vat / 100;
            var price_excl = cart.item.price / (tax + 1);
            var total_price_excl = price_excl * quantity;
            var total_price = cart.item.price * quantity;
            var total_tax = total_price_excl * tax;
            var discount_percentage = 0;
            var discount = 0;

            var my_cart = isCart ? this.cart.carts : this.cart.wishlist
            var exist = my_cart.find((x) => x.item.pdoId == cart.item.pdoId)

            if(!exist) {
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
                cart.item.status = status
            } else {
                exist.item.quantity = quantity
                exist.item.quantities = this.quantities
                exist.item.vat = vat
                exist.item.tax = tax
                exist.item.price_excl = price_excl
                exist.item.total_price_excl = total_price_excl
                exist.item.total_price = total_price
                exist.item.total_tax = total_tax
                exist.item.discount_percentage = discount_percentage
                exist.item.discount = discount
                exist.item.status = status

            }
            return !exist ? cart : exist
        },

        addCart(isCart) {
            this.color = isCart ? 'purple' : 'success';
            this.text = isCart ? 'Product added to your cart' : 'Product added to your wishlist';
            var item = {
                user_id: this.registration.form.id,
                item: this.addShop(isCart)
            }

            this.CART_ADD(item);
        },

        buyNow(isCart) {
            this.addCart(isCart)
            this.$router.push({name: "Cart"});
        },

        change_sku(e) {
            var link = {
                slug: this.$route.params.slug,
                pdo: e
            }

            this.$router.push({
                path: `/Uniforms/${link.slug}/pdo/${link.pdo}`
            })

            this.PRODUCT_FILTER_BY_SLUG_AND_PDO(link)       
            
        }
    },

    computed: {
        ...mapState(["product", "cart", "registration", "setup"]),
        
        pd() {
            var pd = {
                body: this.product.productPd.body || null,
                categoryIds: this.product.productPd.categoryIds || [],
                id: this.product.productPd.id || null,
                imageIds: this.product.productPd.imageIds || [],
                images: this.product.productPd.images || [
                    {
                        link: "image/default-product.png",
                        link_res: "image/default-product.png",
                        alt: 'product',
                        name: 'product'
                    }
                ],
                isVisible: this.product.productPd.isVisible || 0,
                name: this.product.productPd.name || null,
                pdo: this.product.productPd.pdo || {id: 0, name: null, price: 0, quantity: 0},
                relatedLessons: this.product.productPd.relatedLessons || [],
                relatedLessonsValue: this.product.productPd.relatedLessonsValue || [],
                relatedUniforms: this.product.productPd.relatedUniforms || [],
                relatedUniformsValue: this.product.productPd.relatedUniformsValue || [],
                relatedUniformsValue: this.product.productPd.relatedUniformsValue || [],
                seo: this.product.productPd.seo || { description: null, keywords: null },
                slug: this.product.productPd.slug || null,
                soos: this.product.productPd.soos || 0,
                type: this.product.productPd.type || null,
                variants: this.product.productPd.variants || [],
            }

            return pd;
        },

        vat() {
            return Number(this.setup.filter.vat);
        },

        quantities() {
            var qty = []
            for(var i = 0; i < this.pd.pdo.quantity; i++) {
                qty.push(i + 1)
            }
            return qty;
        },

        soosQty() {
            return [1]
        },
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: this.$options.filters.toUpper(this.pd.name),
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.pd.seo.description },
        {
          name: "keywords",
          content: this.pd.seo.keywords,
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.$options.filters.toUpper(this.pd.name) },
        { property: "og:site_name", content: "StepUp Academy" },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        {
          property: "og:url",
          content: `${process.env.MIX_APP_URL}/${this.pd.images[0].link}`,
        },
        {
          property: "og:image",
          content: `${process.env.MIX_APP_URL}/${this.pd.images[0].link}`,
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.pd.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: `${process.env.MIX_APP_URL}/${this.pd.images[0].link}`,
        },
        { name: "twitter:title", content: this.$options.filters.toUpper(this.pd.name) },
        { name: "twitter:description", content: this.pd.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: `${process.env.MIX_APP_URL}/${this.pd.images[0].link}`,
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.$options.filters.toUpper(this.pd.name) },
        { itemprop: "description", content: this.pd.seo.description },
        {
          itemprop: "image",
          content: `${process.env.MIX_APP_URL}/${this.pd.images[0].link}`,
        },
      ],
      link: [
            {rel: 'canonical', href: `${process.env.MIX_APP_URL}/${this.pd.type}/${this.pd.slug}/pdo/${this.pd.pdo.id}`}
        ]
    };
  }
}
</script>
