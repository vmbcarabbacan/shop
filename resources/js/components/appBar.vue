<template>
        <v-app-bar v-if="$route.meta.requiresWebsite || $route.meta.requiresVisitor || $route.name == 'Address'">

            <v-toolbar-title>
                    <v-img src="/Image/stepUpAcademy.svg" 
                        name="Step Up Academy" 
                        alt="Step Up Academy"
                        :class="$vuetify.breakpoint.mdAndUp ? 'ml-12' : ''"
                        width="150"
                        @click="homePage"
                        style="cursor: pointer"
                        aspect-ratio="16/9"></v-img>
            </v-toolbar-title>

            <v-spacer></v-spacer>
                    <v-text-field 
                        label="search"
                        solo
                        v-model="searching"
                        v-if="$vuetify.breakpoint.mdAndUp"
                        @keypress.enter="searchItems"
                    >
                        <template v-slot:append>
                            <v-btn
                                icon
                                @click="searchItems"
                            >
                                <v-icon left>
                                mdi-magnify
                                </v-icon>
                            </v-btn>
                        </template>
                    </v-text-field>
            
            <v-spacer></v-spacer>

                <v-menu
      open-on-hover
      bottom
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-none ma-2"
          color="black"
          dark
          text
          v-bind="attrs"
          v-on="on"
        >
          Hello, {{ login.token ? registration.form.mom.firstName : "Sign in" }} <br>
          Account &amp; list <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-card flat class="overflow-hidden" width="400">
        <v-list v-if="!login.token">
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title>
                  <div
                    class="text-center"
                  >
                        <v-btn
                            class="text-none"
                            color="primary"
                            @click="openSignIn"
                        >
                          Sign in
                        </v-btn>
                  </div>
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-row>
          <v-col
            cols="6"
            v-if="login.token"
          >
            <v-list>
              <template v-for="(link, index) in authLinks" >
                <div :key="index">
                  <v-list-item 
                    :to="link.to"
                    v-if="
                        in_array(
                          registration.form.role,
                          link.access
                        )"
                  >
                    <v-list-item-subtitle>
                        {{ link.text }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </div>
              </template>
              <v-list-item
                @click="loginXero"
                v-if="in_array(registration.form.role, access_xero)"
              >
                <v-list-item-subtitle>
                  Import to Xero
                </v-list-item-subtitle>
              </v-list-item>

            </v-list>
          </v-col>
          <v-col
            :cols="login.token ? 6 : 12"
          >
            <v-list>
              <template v-for="(link, index) in links" >
                <div :key="index">
                  <template v-if="link.isLink">
                    <v-list-item 
                      :to="link.to"
                      v-if="
                          in_array(
                            registration.form.email,
                            link.access
                          )"
                    >
                      <v-list-item-subtitle v-html="link.text">
                      </v-list-item-subtitle>
                    </v-list-item>
                  </template>
                  <template v-if="!link.isLink">
                    <v-list-item 
                      :to="link.to"
                    >
                      <v-list-item-subtitle v-html="link.text">
                      </v-list-item-subtitle>
                    </v-list-item>
                  </template>
                </div>
              </template>

            </v-list>
          </v-col>
        </v-row>

        <v-divider v-if="login.token"></v-divider>

        <v-list v-if="login.token">
          <v-list-item 
            @click="logout"
          >
            <v-list-item-subtitle>
                <p class="text-center">Sign out</p>
            </v-list-item-subtitle>
          </v-list-item>

        </v-list>

      </v-card>
    </v-menu>

          <v-badge
            bordered
            left
            color="error"
            :value="cart.carts.length"
            overlap
          >
            <template v-slot:badge>
              <span v-if="cart.carts.length > 0">
                {{ cart.carts.length }}
              </span>
            </template>
              <v-icon
                @click="viewCart"
              >mdi-cart</v-icon>
          </v-badge>

        </v-app-bar>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
    name: "skeletonAppBar",

    data() {
        return {
            fav: true,
            menu: false,
            message: false,
            hints: true,
            searching: this.$route.query.search || null,
            access_xero: ['Admin', 'Manager', 'Accounts']
        }
    },

    methods: {
        ...mapMutations(["LOGIN_OPEN"]),
        ...mapActions(["LOGOUT", "XERO_LOGIN"]),

        logout() {
            this.LOGOUT();
        },

        homePage() {
          this.$router.push({name: "Home"})
        },

        openSignIn() {
            this.LOGIN_OPEN(true)
        },

        searchItems() {
          // this.$router.push({name: 'SearchItems', query: {search: this.searching, page: 1}})
          window.location.href = `/s/q?search=${this.searching}&filter=&page=1`
        },

        viewCart() {
          this.$router.push({name: "Cart"})
        },

        loginXero() {
          this.XERO_LOGIN()
            .then((result) => {
                window.location.href = result.data
            })
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
        }

    },

    computed :{
      ...mapState(["login", "registration", "cart", "setup", "request"]),

      links() {
        return [
                {
                    text: 'Your Account',
                    to: {name: 'ACCOUNT'},
                    isLink: false
                },
                {
                    text: 'Your Address',
                    to: '/account/address',
                    isLink: false
                },
                {
                    text: `${this.request.count > 0 ? "<span style='color: red; font-weight: 600'>" + this.request.count + "</span>" : ''} Pending Request`,
                    to: {name: 'REQUEST_AMEND'},
                    access: JSON.parse(this.setup.filter.emails),
                    isLink: true
                },
            ];
      },

      authLinks() {
        return [
              {
                text: 'Products',
                to: {name: 'Product'},
                access:['Admin', 'Reception', 'Manager']
              },
              {
                text: 'Schedules',
                to: {name: 'Schedules'},
                access:['Admin', 'Reception', 'Manager']
              },
              {
                text: 'SAMS',
                to: {name: 'SAMS'},
                access:['Admin', 'Reception', 'Manager', 'Teacher']
              },
              {
                text: 'Reports',
                to: {name: 'REPORTS'},
                access:['Admin', 'Reception', 'Manager', 'Teacher', 'Accounts']
              },
              {
                text: 'Point of Sale',
                to: {name: 'POS'},
                access:['Admin', 'Reception', 'Manager']
              },
              {
                text: 'Staffs',
                to: {name: 'Staffs'},
                access:['Admin', 'Manager', 'Accounts']
              },
              // {
              //   text: 'Import to Xero',
              //   to: {name: 'Xero'},
              //   access:['Admin', 'Manager', 'Accounts']
              // },
              {
                text: 'Setups',
                to: {name: 'Setups'},
                access:['Admin']
              },
          ]
      } 
    }
}
</script>

<style scoped>
    .v-text-field.v-text-field--enclosed {
        margin: 0;
        margin-top: auto;
        padding: 0;
    }
</style>