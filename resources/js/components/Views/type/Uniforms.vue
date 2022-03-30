<template>
    <v-main class="navigation">
      <v-navigation-drawer
        v-model="drawer"
        :fixed="$vuetify.breakpoint.smAndDown"
        :absolute="$vuetify.breakpoint.mdAndUp"
        clipped
        right
        app
      >
        <v-sheet
          class="pa-4"
        >
          <v-row>
            <v-col cols="12" md="6">
              <div class="text-h6">Filters</div>
            </v-col>
            <v-col cols="12" md="5">
              <v-btn class="text-none ml-md-n6" @click="addFilter">Apply Filter</v-btn>
            </v-col>
          </v-row>
        </v-sheet>
        <v-divider></v-divider>

        <v-expansion-panels
          v-model="panel"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(category, index) in product.typeUniforms.categories"
              :key="index"
            >
              <v-checkbox
                v-model="checkFilter"
                :value="category.id"
                :label="category.name"
                hide-details
                hide-spin-buttons
                multiple
              ></v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
        <div class="text-right mt-6">
          <v-btn class="text-none" @click="addFilter">Apply Filter</v-btn>
        </div>
      </v-navigation-drawer>

      <v-btn v-if="$vuetify.breakpoint.mdAndDown" fixed bottom right style="z-index: 1;" class="text-none plain text tile primary" @click="drawer = true">Filter</v-btn>

      <v-main>
       <v-container
          class="py-8 px-6"
          fluid
        >
          <v-row>
            <v-col
              v-for="(search, index) in product.typeUniforms.items.data"
              :key="index"
              cols="12"
              md="3"
            >
              <v-card
                  :href="search.pdo ? `/Uniforms/${search.slug}/pdo/${search.pdo.id}` : '#'"
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
                    v-if="product.typeUniforms.items.last_page > 1"
                    v-model="page"
                    :length="product.typeUniforms.items.last_page"
                    @input="paginate"
                  ></v-pagination>
                </div>
              </template>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    name: 'typeUniforms',

    created() {
      var page = parseInt(this.$route.query.page);
      this.checkFilter = this.$route.query.filter !== undefined ? this.$route.query.filter.map(i => Number(i)) : [];
      this.paginate(page);
    },

    data() {
        return {
            drawer: true,
            filters: [],
            page: 1,
            panel: [0],
            checkFilter: []
        }
    },

    methods: {
      ...mapActions(["PRODUCT_BY_TYPE_UNIFORMS"]),

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
          
        this.PRODUCT_BY_TYPE_UNIFORMS({type: 'Uniforms', filter:this.checkFilter, page, perPage: 12});
      },

      addFilter() {
        
        this.$router.push({ query: {page: 1} })
        .catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    console.log(error)
                }
            });
        this.PRODUCT_BY_TYPE_UNIFORMS({type: 'Uniforms', filter: this.checkFilter, page: 1, perPage: 12});
      }
    },

    computed: {
      ...mapState(["product"]),

    }
}
</script>

<style lang="scss" scoped>
  
    .v-main.navigation {
      padding: 0px !important;
    }
  
</style>