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
                                    v-model="filter.termIds"
                                    :items="reports.filters.terms"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Term"
                                    @change="selectedTerm"
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
                                            (+{{ filter.termIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-if="filter.termIds.length > 0"
                                    v-model="filter.locationIds"
                                    :items="reports.locations"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Location"
                                    hint="(optional)"
                                    persistent-hint
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
                                            (+{{ filter.locationIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-model="filter.lessonIds"
                                    :items="reports.filters.lessons"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Lessons"
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
                                            (+{{ filter.lessonIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                                <v-autocomplete
                                    v-model="filter.teacherIds"
                                    :items="reports.filters.teachers"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Teachers"
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
                                            (+{{ filter.teacherIds.length - 5 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>

                                <div class="text-right mb-6 mr-4">
                                    <v-btn
                                        @click="filterRecord" 
                                        class="text-none success"
                                        :disabled="filter.termIds.length === 0"
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
                                        <th class="text-center" colspan="10"> <h1>Class Information</h1> </th>
                                    </tr>
                                    <tr>
                                    <th class="text-center">
                                        Student
                                    </th>
                                    <th class="text-center">
                                        Age
                                    </th>
                                    <th class="text-center">
                                        Mom
                                    </th>
                                    <th class="text-center">
                                        Email
                                    </th>
                                    <th class="text-center">
                                        Mobile
                                    </th>
                                    <th class="text-center">
                                        Location
                                    </th>
                                    <th class="text-center">
                                        Lesson
                                    </th>
                                    <th class="text-center">
                                        Day
                                    </th>
                                    <th class="text-center">
                                        Time
                                    </th>
                                    <th class="text-center">
                                        Teacher
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(info, index) in reports.classInformations"
                                    :key="index"
                                    >
                                    <td class="text-center">{{ info.studentFullName | toUpper }}</td>
                                    <td class="text-center">{{ $age(info.dateOfBirth) }}</td>
                                    <td class="text-center">{{ info.momFullName | toUpper }}</td>
                                    <td class="text-center"> <a :href="`mailto:${info.momEmail}`">{{ info.momEmail }}</a> </td>
                                    <td class="text-center"> <a :href="`tel:+971${info.momMobileNumber}`">+971{{ info.momMobileNumber }}</a></td>
                                    <td class="text-center">{{ info.location | toUpper }}</td>
                                    <td class="text-center">{{ info.lesson | toUpper }}</td>
                                    <td class="text-center">{{ info.weekName | toUpper }}</td>
                                    <td class="text-center">{{ info.time_start }} - {{ info.time_end }}</td>
                                    <td class="text-center">{{ info.teacherFullName | toUpper }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="10"><b>Total: {{ reports.classInformations.length }}</b></td>
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
import {mapState, mapActions, mapMutations} from "vuex";

export default {
    name: "CLASSINFORMATION",

    created() {
        this.REPORT_CLASS_INFORMATION([])
    },

    data() {
        return {
            filter: {
                dates: [],
                termIds: [],
                locationIds: [],
                lessonIds: [],
                teacherIds: []
            }
        }
    },
    
    methods: {
        ...mapActions(["REPORT_FILTER_LOCATION_BY_TERM_ID", "REPORT_FILTER_CLASS_INFORMATION"]),
        ...mapMutations(["REPORT_CLASS_INFORMATION"]),

        selectedTerm(e) {
            this.filter.locationIds = []
            this.REPORT_FILTER_LOCATION_BY_TERM_ID({id: e});
        },

        filterRecord() {
            var sortedDates = this.filter.dates.sort((a, b) => new Date(a) - new Date(b));
            this.REPORT_FILTER_CLASS_INFORMATION({
                dates: sortedDates,
                termIds: this.filter.termIds,
                locationIds: this.filter.locationIds,
                lessonIds: this.filter.lessonIds,
                teacherIds: this.filter.teacherIds
            })
        },

        exportExcel() {
            this.$excel("export", `Class Information`);
        },

        printReport() {
            this.$print("export")
        }
    },

    computed: {
        ...mapState(["reports"]),
      dateRangeText () {
        return this.filter.dates.join(' ~ ')
      },
    },
}
</script>