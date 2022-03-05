<template>
    <v-container
        fluid
        class="py-8 px-6"
    >
        <v-row>
            <v-col
                cols="12"
            >
                <v-card
                    flat
                >
                    <v-card-title>
                        <v-subheader class="text-h6 font-weight-bold">Studio</v-subheader>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="primary"
                            @click="newItem"
                        >
                            Create Studio
                        </v-btn>
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="studio.studios.data"
                            :items-per-page="20"
                            :loading="studio.loading"
                            :server-items-length="studio.studios.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Studio per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="Studio not found"
                            @click:row="goEdit"
                        >

                            <template v-slot:item.name="{ item }">
                                {{ item.name | toUpper }}
                            </template>

                            <template v-slot:item.color="{ item }">
                                <v-btn :color="item.color" block></v-btn>
                            </template>


                            <template v-slot:no-data>
                                No Available Studio <v-btn @click="newItem" class="primary" small>Create</v-btn>
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
                                            @keypress.enter="searchLocation"
                                            @click:clear="searchLocation"
                                            clearable
                                        >
                                            <template v-slot:append>
                                                <v-btn
                                                    icon
                                                    @click="searchLocation"
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
                        v-model="studio.studios.page"
                        :length="studio.studios.last_page"
                        @input="paginate"
                    ></v-pagination>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "studioView",

    created(){
        
        var page = parseInt(this.$route.query.page)
        
        var filter = {
            search: null,
            page: page,
            perPage: 20
        }
        this.STUDIO_FILTER(filter)
        this.paginate(page)
    },

    data() {
        return {
            search: null,
            headers: [
                { text: "Name", value: "name", align: "left", sortable: false, width: "90%" },
                { text: "Color", value: "color", align: "left", sortable: false, width: "10%" },
            ]
        }
    },

    methods: {
        ...mapActions(["STUDIOS"]),
        ...mapMutations(["STUDIO_FILTER"]),

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
            var filter = {
                  search: this.search,
                  page,
                  perPage: 20
              }
              this.STUDIO_FILTER(filter)
              this.STUDIOS(filter)
        },

        newItem(){
            this.$router.push({name: "StudioAdd"})
        },

        searchLocation() {
            this.paginate(1)
        },


        goEdit(e) {
            this.$router.push(`/auth/schedules/studio/edit/${e.id}`)
        },

    },

    computed: {
      ...mapState(["studio"]),
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Studios",
      htmlAttrs: {
        lang: "en",
      },
    };
  }
}
</script>