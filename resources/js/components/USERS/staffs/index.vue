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
                        :items="sams.teachers.data"
                        :items-per-page="10"
                        :loading="sams.loading"
                        :server-items-length="sams.teachers.total"
                        :mobile-breakpoint="200"
                        hide-default-footer
                        no-results-text="Currently no customer"
                        @click:row="goEdit"
                    >
                        <template v-slot:item.fullname="{ item }">
                            {{ item.fullName | toUpper }}
                        </template>

                        <template v-slot:item.contact="{ item }">
                            +971{{ getNumber(item.contact) }}
                        </template>

                        <template v-slot:item.action="{ item }">
                            <v-icon v-if="item.role != 'Admin'" @click.stop="deleteItem(item)">mdi-close</v-icon>
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
                    :length="sams.teachers.last_page"
                    @input="paginate"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'authStaffs',

    data() {
        return {
            search: null,
            headers: [
                { text: "Name", value: "fullName", align: "left", sortable: false, width: "30%" },
                { text: "Email", value: "email", align: "left", sortable: false, width: "30%" },
                { text: "Contact Number", value: "contact", align: "left", sortable: false, width: "20%" },
                { text: "Role", value: "role", align: "left", sortable: false, width: "10%" },
                { text: "", value: "action", align: "left", sortable: false, width: "10%" },
            ],
            type: 'Name',
            types: ['Name', 'Email', 'Number', 'Role']
        }
    },

    created() {
        var page = parseInt(this.$route.query.page)

        var data = {
            page: page,
            perPage: 10,
            search: null,
            role: this.$route.params.role
        };
        this.SAMS_PARENT_FILTER(data);
        this.paginate(page);
    },

    methods: {
        ...mapActions(["SAMS_PARENTS", "SAMS_PARENT_DELETE"]),
        ...mapMutations(["SAMS_PARENT_FILTER"]),
        
        getNumber(number) {
            return number.slice(number.length - 9)
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
                perPage: 10,
                search: this.search,
                role: "All",
                filter: this.type
            };
            this.SAMS_PARENT_FILTER(data);
            this.SAMS_PARENTS(data)

        },

        createItem() {
            this.$router.push({name: 'AddStaff'})
        },

        searchParent() {
            this.paginate(1)
        },

        deleteItem(e) {
            this.SAMS_PARENT_DELETE({id: e.id})
        },

        goEdit(e) {
            this.$router.push({name: 'EditStaff', params: {email: e.email}})
        }
    },

    computed: {
        ...mapState(["sams"])
    }
}
</script>