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
                        <v-subheader class="text-h6 font-weight-bold">Location</v-subheader>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="primary"
                            @click="newItem"
                        >
                            Create Location
                        </v-btn>
                    </v-card-title>
                    
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="location.locations.data"
                            :items-per-page="20"
                            :loading="location.loading"
                            :server-items-length="location.locations.total"
                            :footer-props="{
                            'items-per-page-options': [5, 10, 20],
                            'items-per-page-text': 'Location per page',
                            'show-current-page': true,
                            'show-first-last-page': true,
                            }"
                            :mobile-breakpoint="200"
                            hide-default-footer
                            no-results-text="Location not found"
                            @click:row="goEdit"
                        >

                            <template v-slot:item.name="{ item }">
                                {{ item.name | toUpper }}
                            </template>

                            <template v-slot:item.is_visible="{ item }">
                                <v-checkbox
                                    v-model="item.is_visible"
                                    readonly
                                >
                                </v-checkbox>
                            </template>

                            <template v-slot:no-data>
                                No Available Location <v-btn @click="newItem" class="primary" small>Create</v-btn>
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
                        v-model="location.filter.page"
                        :length="location.locations.last_page"
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
    name: "locationView",

    created(){
        
        var page = parseInt(this.$route.query.page)
        
        var filter = {
            search: null,
            page: page,
            perPage: 20
        }
        this.LOCATION_FILTER(filter)
        this.paginate(page)
    },

    data() {
        return {
            search: null,
            headers: [
                { text: "Name", value: "name", align: "left", sortable: false, width: "90%" },
                { text: "Visible", value: "is_visible", align: "left", sortable: false, width: "10%" },
            ]
        }
    },

    methods: {
        ...mapActions(["LOCATIONS"]),
        ...mapMutations(["LOCATION_FILTER"]),

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
              this.LOCATION_FILTER(filter)
              this.LOCATIONS(filter)
        },

        newItem(){
            this.$router.push({name: "LocationAdd"})
        },

        searchLocation() {
            this.paginate(1)
        },


        goEdit(e) {
            this.$router.push(`/auth/schedules/location/edit/${e.id}`)
        },

    },

    computed: {
      ...mapState(["location"]),
    },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Locations",
      htmlAttrs: {
        lang: "en",
      },
    };
  }
}
</script>