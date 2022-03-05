<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    label="VAT"
                                    hint="VAT that will use for POS and online shop"
                                    persistent-hint
                                    v-model.number="filter.vat"
                                    type="number"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-autocomplete
                                    v-model="filter.emails"
                                    :items="setup.filters.staffs"
                                    item-text="fullName"
                                    item-value="email"
                                    label="Staff"
                                    hint="Select staff/s that will receive and process the cancellation/refund of transactions"
                                    persistent-hint
                                    multiple
                                >
                                    <template v-slot:selection="{ item, index }">
                                        <v-chip v-if="index < 2">
                                            <span>{{ item.fullName }}</span>
                                        </v-chip>
                                        <span
                                            v-if="index === 2"
                                            class="grey--text text-caption"
                                            >
                                            (+{{ filter.emails.length - 2 }} others)
                                        </span>
                                    </template>
                                </v-autocomplete>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-checkbox
                                    v-model="filter.is_start_term"
                                    label="is term started?"
                                ></v-checkbox>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-checkbox
                                    v-model="filter.ebd"
                                    label="is EBD?"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="text-none success"
                            @click="save"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'setupGeneral',

    created() {
        this.SETUP_LOAD_FILTER();
    },

    methods: {
        ...mapActions(["SETUP_LOAD_FILTER", "SETUP_SAVE"]),

        save() {
            this.SETUP_SAVE({
                filter: this.filter
            })
        }
    },

    computed: {
        ...mapState(["setup"]),

        filter() {
            var filt = {
                ebd: this.setup.filter.ebd == 'true' ? true : false || false,
                is_start_term: this.setup.filter.is_start_term == 'true' ? true : false || false,
                vat: Number(this.setup.filter.vat) || 0,
                emails: JSON.parse(this.setup.filter.emails) || []
            }
            return filt;
        }
    }
}
</script>