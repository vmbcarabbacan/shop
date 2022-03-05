<template>
    <v-main class="navigation">
      <v-navigation-drawer
        v-model="drawer"
        absolute
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
          <v-expansion-panel 
            v-for="(category, index) in product.webBySearch.categories"
            :key="index"
          >
            <v-expansion-panel-header> {{ category.name }} </v-expansion-panel-header>
            <v-expansion-panel-content>
              <template
                v-for="(child, i) in category.children"
              >
                <div
                  :key="i"
                >
                  <v-checkbox
                    v-model="checkFilter"
                    :value="child.id"
                    :label="child.name"
                    hide-details
                    v-if="category.name == child.type"
                    multiple
                  ></v-checkbox>
                </div>
              </template>
              
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
        <div class="text-right mt-6">
          <v-btn class="text-none" @click="addFilter">Apply Filter</v-btn>
        </div>
      </v-navigation-drawer>

      <v-main>
        <v-container
          class="py-8 px-6"
          fluid
        >
          <v-row>
            <v-col
              cols="12"
              v-if="$vuetify.breakpoint.mdAndDown"
            >
              <div class="text-right">
                <v-btn class="text-none plain text tile" @click="drawer = true">Filter</v-btn>
              </div>
            </v-col>
            <v-col
              v-for="(search, index) in product.webBySearch.items.data"
              :key="index"
              cols="12"
              md="3"
            >
              <v-card
                  :href="search.pdo ? `/${search.type == 'Lessons' ? 'Lessons' : 'Uniforms'}/${search.slug}/pdo/${search.pdo.id}` : '#'"
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
                    v-model="page"
                    :length="product.webBySearch.items.last_page"
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
    name: 'searchItems',

    created() {
      var page = parseInt(this.$route.query.page);
      this.checkFilter = this.$route.query.filter ? this.$route.query.filter.map(i => Number(i)) : [];
      this.paginate(page);
    },

    data() {
        return {
            drawer: true,
            filters: [],
            page: 1,
            panel: [0, 1],
            checkFilter: []
        }
    },

    methods: {
      ...mapActions(["PRODUCT_BY_WEB_SEARCH"]),

      paginate(e) {
        var page = Object.keys(this.$route.query).length > 0 ? e : 1
        var search = this.$route.query.search
            this.$router.push({ query: {search, page} })
            .catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    console.log(error)
                }
            });
          
        this.PRODUCT_BY_WEB_SEARCH({search, filter:this.checkFilter, page, perPage: 12});
      },

      addFilter() {
        
        var search = this.$route.query.search
        this.$router.push({ query: {search, filter: this.checkFilter, page: 1} })
        .catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    console.log(error)
                }
            });
        this.PRODUCT_BY_WEB_SEARCH({search, filter: this.checkFilter, page: 1, perPage: 12});
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