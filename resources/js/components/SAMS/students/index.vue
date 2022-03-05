<template>
    <v-container>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                md="8"
            >
                <v-card>
                    <v-data-table
                        :headers="headers"
                        :items="sams.students.data"
                        :items-per-page="20"
                        :loading="sams.loading"
                        :server-items-length="sams.students.total"
                        :mobile-breakpoint="200"
                        hide-default-footer
                        no-results-text="Currently no customer"
                        @click:row="goEdit"
                    >
                        <template v-slot:item.image="{ item }">
                            <v-avatar size="150" tile v-if="item.image">
                            <v-img
                                :src="`/${item.image.link}`"
                                :lazy-src="`/${item.image.link_res}`"
                                :name="item.image.name"
                                :alt="item.image.alt"
                                contain
                            ></v-img>
                            </v-avatar>
                        </template>

                        <template v-slot:item.fullName="{ item }">
                            {{ item.fullName | toUpper }}
                        </template>

                        <template v-slot:item.date_of_birth="{ item }">
                            {{ item.date_of_birth | date }}
                        </template>

                        <template v-slot:item.age="{ item }">
                            {{ get_age(item.date_of_birth) }}
                        </template>

                            <template v-slot:top>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        md="12"
                                    >
                                        <v-text-field 
                                            label="search"
                                            solo
                                            v-model="search"
                                            @keypress.enter="searchStudent"
                                            @click:clear="searchStudent"
                                            clearable
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    icon
                                                    @click="searchStudent"
                                                >
                                                    <v-icon left>
                                                    mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </template>

                    </v-data-table>
                </v-card>
                <v-pagination
                    v-model="sams.studentFilter.page"
                    :length="sams.students.last_page"
                    @input="paginate"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'samsStudents',

    data() {
        return {
            search: null,
            headers: [
                { text: "", value: "image", align: "left", sortable: false, width: "25%" },
                { text: "Name", value: "fullName", align: "left", sortable: false, width: "35%" },
                { text: "Date of Birth", value: "date_of_birth", align: "left", sortable: false, width: "15%" },
                { text: "Age", value: "age", align: "left", sortable: false, width: "15%" },
                { text: "Gender", value: "gender", align: "left", sortable: false, width: "10%" },
            ]
        }
    },

    created() {
        var page = parseInt(this.$route.query.page)

        var data = {
            page: page,
            perPage: 20,
            search: null
        };
        this.SAMS_STUDENT_FILTER(data);
        this.paginate(page);
    },

    methods: {
        ...mapActions(["SAMS_STUDENTS"]),
        ...mapMutations(["SAMS_STUDENT_FILTER"]),

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
                search: this.search
            };
            this.SAMS_STUDENT_FILTER(data);
            this.SAMS_STUDENTS(data)

        },

        searchStudent() {
            this.paginate(1)
        },

        get_age(e) {
            let currentDate = new Date();
            let birthDate = new Date(e);
            let difference = currentDate - birthDate;
            let age = Math.floor(difference / 31557600000);
            return age;
        },

        goEdit(e) {
            this.$router.push({name: 'StudentModal', params: {id: e.id}})
        }
    },

    computed: {
        ...mapState(["sams"])
    }
}
</script>