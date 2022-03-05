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
                    <v-subheader class="text-subtitle-1">Deleted User</v-subheader>
                    <v-data-table
                        :headers="headers"
                        :items="admin.deletedUsers.data"
                        :items-per-page="20"
                        :loading="admin.loading"
                        :server-items-length="admin.deletedUsers.total"
                        :mobile-breakpoint="200"
                        hide-default-footer
                        no-results-text="Currently no deleted user"
                    >
                        <template v-slot:item.deleted_at="{ item }">
                            {{ item.deleted_at | date }}
                        </template>

                        <template v-slot:item.action="{ item }">
                            <v-icon @click="goBack(item)">mdi-account-check</v-icon>
                        </template>

                        <template v-slot:top>
                            <v-row>
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field 
                                        label="search"
                                        solo
                                        v-model="search"
                                        @keypress.enter="searchDelUser"
                                        @click:clear="searchDelUser"
                                        clearable
                                    >
                                        <template v-slot:append>
                                            <v-btn
                                                icon
                                                @click="searchDelUser"
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
                    v-model="admin.filter.page"
                    :length="admin.deletedUsers.last_page"
                    @input="paginate"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    name: 'deletedUser',

    data() {
        return {
            search: null,
            headers: [
                {
                    text: 'Email',
                    value: 'email',
                    sortable: false,
                    align: 'left',
                    width: '70%'
                },
                {
                    text: 'Deleted Date',
                    value: 'deleted_at',
                    sortable: false,
                    align: 'left',
                    width: '20%'
                },
                {
                    text: '',
                    value: 'action',
                    sortable: false,
                    align: 'left',
                    width: '10%'
                },
            ]
        }
    },

    created() {
        var page = parseInt(this.$route.query.page)

        var data = {
            page: page,
            perPage: 20,
            seach: null
        }
        this.ADMIN_FILTER(data)
        this.paginate(page)
    },

    methods: {
        ...mapActions(["ADMIN_DELETED_USER", "ADMIN_RESTORE_DELETED"]),
        ...mapMutations(["ADMIN_FILTER"]),

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
            this.ADMIN_FILTER(data);
            this.ADMIN_DELETED_USER(data)
        },

        searchDelUser() {
            this.paginate(1)
        },

        goBack(e) {
            this.ADMIN_RESTORE_DELETED({id: e.id})
        }
    },

    computed: {
        ...mapState(["admin"])
    }
}
</script>