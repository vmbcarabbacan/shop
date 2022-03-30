<template>
    <v-container>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
            >
                <v-card>
                    <v-data-table
                        :headers="headers"
                        :items="sams.parents.data"
                        :items-per-page="20"
                        :loading="sams.loading"
                        :server-items-length="sams.parents.total"
                        :mobile-breakpoint="200"
                        hide-default-footer
                        no-results-text="Currently no customer"
                        @click:row="goEdit"
                    >
                        <template v-slot:item.fullName="{ item }">
                            {{ item.fullName | toUpper }}
                        </template>

                        <template v-slot:item.contact="{ item }">
                            +971{{ getNumber(item.contact) }}
                        </template>

                        <template v-slot:item.action="{ item }">
                            <v-icon @click.stop="viewHistory(item)">mdi-receipt</v-icon>
                            <v-icon @click.stop="addCredit(item)">mdi-credit-card-plus</v-icon>
                            <v-icon @click.stop="viewChild(item)">mdi-eye</v-icon>
                            <v-icon @click.stop="deleteItem(item)">mdi-close</v-icon>
                        </template>

                            <template v-slot:top>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        md="6"
                                    >
                                        <v-text-field 
                                            label="search"
                                            solo
                                            v-model="search"
                                            @keypress.enter="searchParent"
                                            @click:clear="searchParent"
                                            clearable
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    icon
                                                    @click="searchParent"
                                                >
                                                    <v-icon left>
                                                    mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="3"
                                    >
                                        <v-select
                                            v-model="type"
                                            :items="types"
                                            solo
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="3"
                                    >
                                        <v-btn
                                            class="primary text-none"
                                            block
                                            large
                                            @click="createItem"
                                        >Create New</v-btn>
                                    </v-col>
                                </v-row>
                            </template>

                    </v-data-table>
                </v-card>
                <v-pagination
                    v-model="sams.parentFilter.page"
                    :length="sams.parents.last_page"
                    @input="paginate"
                ></v-pagination>

                <!-- View all transactions -->
                <v-navigation-drawer
                    v-model="openTransaction"
                    app
                    fixed
                    absolute
                    temporary
                    right
                    width="500"
                >
                    <v-card>
                        <v-card-text>
                            <v-simple-table
                                fixed-header
                            >
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        Transaction#
                                    </th>
                                    <th class="text-left">
                                        Status
                                    </th>
                                    <th class="text-left">
                                        Total
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
                                    :style="`background-color: #${sale.status == 'Completed' ? '00cc00' : 'ff0000'}; color: #fff`"
                                    >
                                    <td>{{ sale.id }}</td>
                                    <td>{{ sale.status }}</td>
                                    <td>{{ sale.total }}</td>
                                    <td>{{ sale.purchase_date | dateAndTime }}</td>
                                    <td>
                                        <v-icon dark @click="checkSaleById(sale.id)">
                                            mdi-magnify
                                        </v-icon>
                                    </td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                <div class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="sales.sales.last_page"
                        @input="historyPaginate"
                        circle
                    ></v-pagination>
                </div>
                </v-navigation-drawer>
                
                <v-bottom-sheet
                    v-model="openTransactionItem"
                    @click:outside="closeTransactionItem"
                    hide-overlay
                    scrollable
                >
                    <v-simple-table  width="100%" fixed-header>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left" width="60%">
                                        <p class="font-weight-bold red--text">Transacction# {{ sales.sale.id }} - {{ sales.sale.status }}</p>
                                    </th>
                                    <th class="text-right" width="40%">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(cart, index) in sales.sale.item"
                                    :key="index"
                                >
                                    <td>
                                        <span class="text-subtitle-1 font-weight-bold black--text">{{ cart.item.productName | toUpper }} - <span class="text-caption font-weight-thin">{{ cart.item.pdoName | toUpper }}</span></span> <br>
                                        <span class="text-caption">{{ cart.type | toUpper }}</span> <br>
                                        <span class="text-caption" for="quantity">Qty: {{ cart.item.quantity }}</span> <br>
                                        <a :href="`/auth/sams/students/modal/${cart.item.student.id}`" class="text-caption font-weight-black"> Student: {{ cart.item.student.firstName | toUpper }} {{ cart.item.student.familyName | toUpper }} </a>
                                    </td>
                                    <td> <p class="red--text text-right font-weight-bold">{{ cart.item.total_price | currency }}</p> </td>
                                </tr>
                            </tbody>
                        
                        </template>
                    </v-simple-table>
                </v-bottom-sheet>

                <v-dialog
                    v-model="isCredit"
                    @click:outside="closeCredit"
                    width="300"
                    persistent
                >
                    <v-card>
                        <v-toolbar
                            flat
                            dark
                            color="success"
                        >
                            <v-toolbar-title>
                                Add Credit
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                label="Current Credit"
                                type="number"
                                v-model.number="sams.credits"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="text-none success" @click="submitCredit">Add</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <myChild v-if="open" :open="open" v-on:closeModal="closeViewChild" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'samsParents',

    components: {
        myChild: () => import('./children.vue')
    },

    data() {
        return {
            search: null,
            headers: [
                { text: "Name", value: "fullName", align: "left", sortable: false, width: "50%" },
                { text: "Contact Number", value: "contact", align: "left", sortable: false, width: "40%" },
                { text: "", value: "action", align: "left", sortable: false, width: "10%" },
            ],
            type: 'Name',
            types: ['Name', 'Email', 'Number'],
            page: 1,
            openTransaction: false,
            openTransactionItem: false,
            user_id: null,
            isCredit: false,
            parent_id: null,
            open: false
        }
    },

    created() {
        var page = parseInt(this.$route.query.page)

        var data = {
            page: page,
            perPage: 20,
            search: null,
            role: this.$route.params.role
        };
        this.SAMS_PARENT_FILTER(data);
        this.paginate(page);
    },

    methods: {
        ...mapActions(["SAMS_PARENTS", "SAMS_VERIFY_EMAIL", "SAMS_PARENT_DELETE", "SALES", "SALE", "SAMS_GET_PARENT_CREDITS", "SAMS_UPDATE_PARENT_CREDITS", "SAMS_PARENT_CHILDREN"]),
        ...mapMutations(["SAMS_PARENT_FILTER", "SAMS_PARENT_EDIT", "SALES_M", "SALE_M", "SAMS_PARENT_CREDITS", "SAMS_PARENT_CHILDREN_M"]),
        
        getNumber(number) {
            
            return number.length > 9 ? number.slice(number.length - 9) : number
        },

        paginate(e) {
            var page = Object.keys(this.$route.query).length > 0 ? e : 1
            this.$router.replace({ query: {page: page} })
            .catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    console.log(error)
                }
            })
            var data = {
                page,
                perPage: 20,
                search: this.search,
                role: this.$route.params.role,
                filter: this.type
            };
            this.SAMS_PARENT_FILTER(data);
            this.SAMS_PARENTS(data)

        },

        viewChild(e) {
            this.SAMS_PARENT_CHILDREN_M([])
            this.SAMS_PARENT_CHILDREN({id: e.id})
            this.closeViewChild()
        },

        closeViewChild() {
            this.open = !this.open
        },

        searchParent() {
            this.paginate(1)
        },

        goEdit(e) {
            
            var email = {
                email: e.email
            }
            this.SAMS_VERIFY_EMAIL(email)
            .then((result) => {
                this.SAMS_PARENT_EDIT(true)
                this.$router.push({name: 'ParentModal', params:{role: 'User'}})
            })
        },

        deleteItem(e) {
            this.SAMS_PARENT_DELETE({id: e.id})
        },

        viewHistory(e) {
            this.user_id = e.id
            this.historyPaginate(1);
        },

        addCredit(e) {
            this.parent_id = e.id
            this.SAMS_GET_PARENT_CREDITS({id: e.id})
            .then((result) => {
                this.isCredit = true
            })
            
        },

        submitCredit() {
            this.SAMS_UPDATE_PARENT_CREDITS({
                id: this.parent_id,
                value: this.sams.credits
            })
            .then((result) => {
                this.closeCredit()
            })
        },

        historyPaginate(e) {
            
            this.SALES({
                page: e, 
                search: this.user_id, 
                type: 'User ID',
                perPage: 20
            })
            .then((result) => {
                this.openTransaction = true
            })
        },

        checkSaleById(e) {
            this.SALE({id: e})
            .then((result) => {
                this.openTransactionItem = true
            })
        },

        closeCredit() {
            this.SAMS_PARENT_CREDITS(null)
            this.isCredit = false
            this.parent_id = null
        },

        closeTransaction() {
            this.SALES_M([])
            this.openTransaction = false
        },

        closeTransactionItem() {
            this.SALE_M({
                mom: {},
                payment: [],
                item: [],
                total: {},
                address: null,
                notes: null,
                telr: null,
                pay: []
            })
            this.openTransactionItem = false
        },

        // goEdit(e) {
        //     this.$router.push({name: 'StudentModal', params: {id: e}})
        // },

        createItem() {
            this.SAMS_PARENT_EDIT(false)
            this.$router.push({name: 'ParentModal', params:{role: 'User'}})
        }
    },

    computed: {
        ...mapState(["sams", "sales"])
    }
}
</script>