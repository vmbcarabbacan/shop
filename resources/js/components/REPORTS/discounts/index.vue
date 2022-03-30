<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card>
                    <v-container>
                        <v-row align="center" justify="center">
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-date-picker v-model="filter.dates" full-width range></v-date-picker>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-autocomplete
                                    v-model="filter.discounts"
                                    :items="reports.filters.discounts"
                                    item-text="name"
                                    item-value="name"
                                    label="Select Discount Name"
                                    multiple
                                >
                                    <template v-slot:selection="{ item, index }">
                                        <v-chip v-if="index < 5">
                                            <span>{{ item.name }}</span>
                                        </v-chip>
                                        <span
                                            v-if="index === 5"
                                            class="grey--text text-caption"
                                            >
                                            (+{{ filter.discounts.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>

                                <v-autocomplete
                                    v-model="filter.status"
                                    :items="status"
                                    label="Select Status"
                                    multiple
                                >
                                    <template v-slot:selection="{ item, index }">
                                        <v-chip v-if="index < 5">
                                            <span>{{ item }}</span>
                                        </v-chip>
                                        <span
                                            v-if="index === 5"
                                            class="grey--text text-caption"
                                            >
                                            (+{{ filter.status.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>

                                <div class="text-right mb-6 mr-4">
                                    <v-btn
                                        @click="filterRecord" 
                                        class="text-none success"
                                        :loading="loading"
                                        :disabled="filter.discounts.length === 0 ||
                                                    filter.status == null"
                                    >
                                        Filter Record
                                    </v-btn>
                                </div>

                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-divider class="mt-2"></v-divider>
                <v-card class="mt-2">
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-btn @click="exportExcel" icon text fab> <v-icon>mdi-cloud-download</v-icon> </v-btn>
                        <v-btn @click="printReport" icon text fab> <v-icon>mdi-cloud-print</v-icon> </v-btn>
                        <!-- <v-btn @click="printReport" icon text fab> <v-icon>mdi-cloud-print</v-icon> </v-btn> -->
                    </v-card-title>
                    <v-card-text id="export">
                        
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center" colspan="6">
                                            <h3>Discounts</h3>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-center" colspan="6"> <h4> {{ dateRangeText }} </h4> </th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">Student</th>
                                        <th class="text-center">Product</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Discount</th>
                                        <th class="text-center">Total</th>
                                        <th class="text-center">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(discount, i) in reports.discounts"
                                        :key="u=i"
                                    >
                                        <th class="text-center"> {{ discount.item.student.firstName | toUpper }} {{ discount.item.student.familyName | toUpper }} </th>
                                        <th class="text-center"> {{ discount.item.productName | toUpper }} </th>
                                        <th class="text-center"> {{ discount.item.status | toUpper }} </th>
                                        <th class="text-center"> <p v-for="(disc, j) in discount.item.discounts" :key="j">{{ disc.name }} - {{ disc.value | currency }}</p> </th>
                                        <th class="text-center"> {{ discount.item.total_price | currency }} </th>
                                        <th class="text-center"> {{ discount.updated_at | date }} </th>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <br>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'DISCOUNTS',

    data() {
        return {
            filter: {
                dates: [],
                status: null,
                discounts: []
            },
            status: ['Completed', 'Pending', 'Cancelled', 'Refund'],
            loading: false
        }
    },

    methods: {
        ...mapActions(["REPORT_DISCOUNTS"]),

        exportExcel() {
            this.$excel("export", `Discounts`);
        },

        printReport() {
            this.$print("export")
        },

        filterRecord() {
            this.REPORT_DISCOUNTS(this.filter);
        }
    },

    computed: {
        ...mapState(["reports"]),

        dateRangeText () {
            return this.filter.dates.join(' ~ ')
        },
    }
}
</script>