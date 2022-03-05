<template>
    <v-dialog
        v-model="pos.isSearchSale"
        width="1200"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar
                flat
                dark
                class="primary text-none"
            >
                <v-toolbar-title>
                    View Sales
                </v-toolbar-title>
            </v-toolbar>

            <v-card-text class="mt-6">
                <v-text-field 
                    solo
                    clearable
                    v-model="search"
                    :label="`search ${type == 'Sale ID' ? 'sale id' : 'customer'}`"
                    @keypress.enter="searchSchedule"
                >
                    <template v-slot:append>
                        <v-btn
                            icon
                            @click="searchSchedule"
                        >
                            <v-icon left>
                            mdi-magnify
                            </v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:prepend-inner>
                        <v-combobox
                            shaped
                            solo
                            flat
                            :items="types"
                            v-model="type"
                            label="Select Type"
                            hide-details
                            style="border-right: solid #000"
                        ></v-combobox>
                    </template>
                </v-text-field>
                <v-simple-table
                    fixed-header
                >
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Transaction
                        </th>
                        <th class="text-left">
                            Customer
                        </th>
                        <th class="text-left">
                            Total
                        </th>
                        <th class="text-left">
                            Status
                        </th>
                        <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                            
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(sale, index) in sales.sales.data"
                        :key="index"
                        >
                        <td>{{ sale.id }}</td>
                        <td>{{ sale.name | toUpper }}</td>
                        <td>{{ sale.total }}</td>
                        <td>{{ sale.status }}</td>
                        <td>{{ sale.purchase_date | dateAndTime }}</td>
                        <td>
                            <template v-if="registration.form.role == 'Admin'">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            icon 
                                            v-if="sale.status == 'Pending'" color="green" 
                                            @click="checkSaleCompleted(sale.id)"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon>
                                                mdi-cart-check
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Complete transaction</span>
                                </v-tooltip>
                            </template>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        icon 
                                        @click="checkSaleById(sale.id)"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon>
                                            mdi-magnify
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>View Transaction Details</span>
                            </v-tooltip>
                            
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        icon 
                                        @click="requestUpdate(sale.id)"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon>
                                            mdi-calendar-question
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Request to amend</span>
                            </v-tooltip>
                        </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <div class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="sales.sales.last_page"
                        @input="paginate"
                        circle
                    ></v-pagination>
                </div>
            </v-card-text>

            <v-snackbar
                color="deep-purple accent-4"
                v-model="openBar"
                top
                right
                absolute
            >
                Succesful!
            </v-snackbar>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "posSearch",

    data() {
        return {
            search: null,
            page: 1,
            perPage: 20,
            type: 'Sale ID',
            types: ["Sale ID", "Customer"],
            openBar: false

        }
    },

    created() {
        this.paginate(this.page);  
    },

    methods: {
        ...mapActions(["SALES", "SALE", "SALE_UPDATE"]),
        ...mapMutations(["POS_SEARCH_BY_SALE_ID", "POS_REQUEST_AMEND_SALE", "POS_AMENDED_ID"]),

        paginate(e) {
            this.page = e
            this.SALES({
                page: e, 
                search: this.search, 
                type: this.type,
                perPage: this.perPage
            })
        },

        checkSaleCompleted(e) {
            this.SALE_UPDATE({
                id: e,
                status: 'Completed'
            })
            .then((result) => {
                this.paginate(this.page)
                this.openBar = true
            })
        },

        requestUpdate(e) {
            this.POS_AMENDED_ID(e)
            this.POS_REQUEST_AMEND_SALE();
        },

        searchSchedule() {
            this.paginate(1); 
        },

        checkSaleById(e) {
            this.$router.push({name: 'POSFilter', params: {id: e} })
            this.SALE({id: e})
            this.close();
        },

        close() {
            this.POS_SEARCH_BY_SALE_ID()
        }
    },

    computed: {
        ...mapState(["pos", "sales", "registration"])
    }
}
</script>
