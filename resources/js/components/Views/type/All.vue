<template>
    <div>
        <v-container
          class="py-8 px-6"
          fluid
        >
          <v-row>
            <v-col
              v-for="(search, index) in product.typeByAllCategory.data"
              :key="index"
              cols="12"
              md="3"
            >
              <v-card
                  :href="search.pdo ? `/${$route.params.type == 'Lessons' ? 'Lessons' : ($route.params.type == 'Uniforms' ? 'Uniforms' : 'Camps')}/${search.slug}/pdo/${search.pdo.id}` : '#'"
              >
                  <v-img
                      :src="`/${search.image.link}`"
                      :lazy-src="`/${search.image.link_res}`"
                      :alt="search.image.alt"
                      :name="search.image.name"
                  ></v-img>
                  <v-card-text>
                      <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                              <div
                              v-bind="attrs"
                              v-on="on"
                              class="col-12 text-truncate"
                              >{{ search.name | toUpper }}
                              <br>
                              <template v-if="search.pdo">
                                  AED <span class="font-weight-bold">{{ search.type == 'Uniforms' ? search.pdo.price : search.pdo.price * search.pdo.quantity }}</span>
                              </template>
                              <template v-else>
                                  {{ search.type == 'Uniforms' ? 'Out of stock' : 'Coming Soon!' }}
                              </template>
                              </div>
                          </template>
                          <span>{{ search.name | toUpper }}</span>
                      </v-tooltip>
                  </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
            >
              <template>
                <div class="text-center">
                  <v-pagination
                    v-if="product.typeByAllCategory.last_page > 1"
                    v-model="page"
                    :length="product.typeByAllCategory.last_page"
                    @input="paginate"
                  ></v-pagination>
                </div>
              </template>
            </v-col>
          </v-row>
        </v-container>
    </div>
</template>
<script>
import {mapState, mapActions} from "vuex";
export default {
    name: "homeAllType",

    created() {
        var page = parseInt(this.$route.query.page);
        this.paginate(page);
    },

    data() {
        return {
            page: 1
        }
    },

    methods: {
        ...mapActions(["PRODUCT_BY_TYPE_BY_CATEGORY_ID"]),

        paginate(e) {
        var page = Object.keys(this.$route.query).length > 0 ? e : 1
        this.$router.push({ query: {page} })
        .catch(error => {
            if (
                error.name !== 'NavigationDuplicated' &&
                !error.message.includes('Avoided redundant navigation to current location')
            ) {
                console.log(error)
            }
        });
          
        this.PRODUCT_BY_TYPE_BY_CATEGORY_ID({type: this.$route.params.type, id: this.$route.params.id, page, perPage: 12});
      },
    },

    computed: {
        ...mapState(["product"])
    }
}
</script>