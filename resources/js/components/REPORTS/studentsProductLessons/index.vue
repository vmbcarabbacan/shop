<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-card>
                    <v-container>
                        <v-row align="center" justify="center">
                            <!-- <v-col
                                cols="12"
                                md="6"
                            >
                                <v-date-picker
                                    v-model="filter.dates"
                                    range
                                    full-width
                                ></v-date-picker>
                            </v-col> -->
                            <v-col
                                cols="12"
                            >
                                <!-- <p class="text-center font-weight-thin font-italic mt-2"> You can disregard the date range function if you want to filter the report by term </p> -->
                                <v-autocomplete
                                    v-model="filter.allProdIds"
                                    :items="reports.filters.allProducts"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Uniforms/Lessons"
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
                                            (+{{ filter.allProdIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-model="filter.studentIds"
                                    :items="reports.filters.students"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Students"
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
                                            (+{{ filter.studentIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-model="filter.status"
                                    :items="status"
                                    label="Select Status (Optional)"
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
                                        :disabled="filter.allProdIds.length === 0 &&
                                                    filter.studentIds.length === 0"
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
                    </v-card-title>
                    <v-card-text id="export">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center" colspan="6"> <h1>Purchased Lessons/Products/Camps/Other by Students</h1> </th>
                                    </tr>
                                    <tr>
                                    <th class="text-center">
                                        Student
                                    </th>
                                    <th class="text-center">
                                        Lesson / Product
                                    </th>
                                    <th class="text-center">
                                        Status
                                    </th>
                                    <th class="text-center">
                                        Total
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(res, index) in result"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ res.item.student.firstName | toUpper }} {{ res.item.student.familyName | toUpper }}</td>
                                    <td class="text-center">{{ res.item.productName | toUpper }}  <span class="font-weight-thin">( {{res.item.pdoName | toUpper}} )</span></td>
                                    <td class="text-center">{{ res.item.status | toUpper }}</td>
                                    <td class="text-center">{{ res.item.total_price | currency }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="4"><b>Total Count: {{ result.length }}</b></td>
                                    </tr>
                                </tfoot>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    name: "STUDENTPRODUCTLESSONS",

    data() {
        return {
            status: ['Completed', 'Pending', 'Cancelled', 'Refund'],
            filter: {
                dates: [],
                allProdIds: [],
                studentIds: [],
                status: []
            },
            result: []
        }
    },
    
    methods: {
        ...mapActions(["REPORT_FILTER_LOCATION_BY_TERM_ID", "REPORT_STUDENT_ALL_PRODUCTS"]),

        selectedTerm(e) {
            this.filter.locationIds = []
            this.REPORT_FILTER_LOCATION_BY_TERM_ID({id: e});
        },

        filterRecord() {
            var sortedDates = this.filter.dates.sort((a, b) => new Date(a) - new Date(b));
            this.REPORT_STUDENT_ALL_PRODUCTS({
                dates: sortedDates,
                allProdIds: this.filter.allProdIds,
                studentIds: this.filter.studentIds,
                status: this.filter.status
            })
            .then((result) => {
                this.result = result.data
            })
        },

        exportExcel() {
            this.$excel("export", `Students over Lesson`);
        },

        printReport() {
            this.$print("export")
        },
    },

    computed: {
        ...mapState(["reports"]),
      dateRangeText () {
        return this.filter.dates.join(' ~ ')
      },

      totalStudents() {
          return this.reports.studentsPerLessons.reduce((total, item) => {
              return total + item.students;
          }, 0)
      }
    },
}
</script>