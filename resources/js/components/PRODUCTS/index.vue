<template>
        <div>
            <v-app-bar 
                dark
                color="blue darken-3" 
                v-if="$vuetify.breakpoint.mdAndDown"
            >
                <v-spacer></v-spacer>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            </v-app-bar>
                <v-navigation-drawer 
                        v-model="drawer"
                        :mini-variant="mini"
                        app>
                    <v-list-item class="px-2">

                        <v-list-item-content>
                            <v-list-item-title class="title">
                            {{ !mini ? "Products" : "" }}
                            <template v-if="mini">
                                <v-btn
                                    icon
                                    @click.stop="mini = !mini"
                                >
                                    <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </template>
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-btn
                            icon
                            @click.stop="mini = !mini"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                    <template v-for="item in items">
                        <template
                        v-if="
                            in_array(registration.form.role, item.access)
                        "
                        >
                        <v-list-item
                            :key="item.title"
                            :to="item.path"
                        >
                            <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        </template>
                    </template>
                        <v-list-item
                            v-if="in_array(registration.form.role, access_export)"
                            @click="exportUniform"
                        >
                            <v-list-item-action>
                            <v-icon>mdi-database-export</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>Export Uniforms</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                            v-if="in_array(registration.form.role, access_import)"
                            :to="{name: 'ProductImport'}"
                        >
                            <v-list-item-action>
                            <v-icon>mdi-database-import</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>Import Uniforms</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                            v-if="in_array(registration.form.role, access_export)"
                            :to="{name: 'ProductStarted'}"
                        >
                            <v-list-item-action>
                            <v-icon>mdi-information-outline</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>How it works</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <template v-slot:append>
                        <v-list dense>
                            <v-list-item to="/">
                                <v-list-item-action>
                                    <v-icon>mdi-home</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title> Home </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item @click="logout">
                                <v-list-item-action>
                                    <v-icon>mdi-logout</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title> Logout </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </template>
                </v-navigation-drawer>
                
                <v-main>
                    <router-view></router-view>
                    <div  class="d-none d-print-block" id="export">
                        <v-simple-table width="100%" fixed-header>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        ID 
                                    </th>
                                    <th class="text-right">
                                        Product
                                    </th>
                                    <th class="text-right">
                                        Option
                                    </th>
                                    <th class="text-right">
                                        Price
                                    </th>
                                    <th class="text-right">
                                        Available stock(s) in POS
                                    </th>
                                    <th class="text-right">
                                        Available stock(s) in Actual
                                    </th>
                                    <th class="text-right">
                                        New Stock
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(product, index) in product.export"
                                    :key="index"
                                >
                                    <td>
                                        <span class="text-caption">{{ product.id }} </span> <br>
                                    </td>
                                    <td>
                                        <span class="text-caption">{{ product.product | toUpper }} </span> <br>
                                    </td>
                                    <td>
                                        <span class="text-caption">{{ product.option | toUpper }} </span> <br>
                                    </td>
                                    <td>
                                        <span class="text-caption">{{ product.price }} </span> <br>
                                    </td>
                                    <td>
                                        <span class="text-caption">{{ product.availableStocksInPOS }} </span> <br>
                                    </td>
                                    <td>
                                        <span class="text-caption">{{ product.availableStocksInActual }} </span> <br>
                                    </td>
                                    <td>
                                        <span class="text-caption">{{ product.newStocks }} </span> <br>
                                    </td>
                                </tr>
                            </tbody>
                            
                            </template>
                        </v-simple-table>
                    </div>
                </v-main>
        </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "authProducts",
    
    beforeRouteEnter (to, from, next) {
        next(v => {
            v.redirect()
        })
    },

    created() {
        this.PRODUCT_EXPORT_UNIFORMS();
    },

    data() {
        return {
            drawer: this.$vuetify.breakpoint.mdAndUp ? true : false,
            mini: false,
            access_export: ["Admin",
                            "Reception",
                            "Manager"],
            access_import: ["Admin",
                            "Manager"],
            items: [
                {
                title: "View",
                icon: "mdi-store",
                path: { name: "ProductView" },
                access: [
                    "Admin",
                    "Reception",
                    "Manager"
                ]},
                {
                title: "Add",
                icon: "mdi-plus-circle",
                path: { name: "ProductAdd" },
                access: [
                    "Admin",
                    "Reception",
                    "Manager"
                ]},
                {
                title: "Category",
                icon: "mdi-tag-multiple",
                path: { name: 'ProductCategories' },
                access: [
                    "Admin",
                    "Reception",
                    "Manager"
                ]},
                {
                title: "Images",
                icon: "mdi-folder-multiple-image",
                path: { name: 'ProductImages' },
                access: [
                    "Admin",
                    "Reception",
                    "Manager"
                ]}
            ],
        }
    },

    methods: {
        ...mapActions(["LOGOUT", "PRODUCT_EXPORT_UNIFORMS"]),

        logout() {
            this.LOGOUT();
        },
        
        redirect() {
            setTimeout(() => {
                this.in_array(this.registration.form.role, ['Admin', 'Reception', 'Manager']) 
                ? '' 
                : this.$router.push({name: "Home"});
            }, 1000);
        },

        exportUniform() {
            this.$excel("export", `Uniform Stocks`);
        },

        importUniform() {
            console.log('import nga gago')
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
    },

    computed: {
        ...mapState(["registration", "product"])
    }
}
</script>