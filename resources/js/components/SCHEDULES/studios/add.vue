<template>
    <v-container>
        <v-row
            justify="center"
            align="start"
        >
            <v-col
                cols="12"
                md="8"
            >
                <v-card
                >
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>
                            <router-link class="text-caption" :to="{name: 'StudioView'}"><v-icon small>mdi-arrow-left</v-icon> Go back</router-link>
                            <br> Add Studio
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert
                            type="success"
                            v-show="studio.message"
                        >
                        {{ studio.message }}
                        </v-alert>
                        <v-alert
                            type="error"
                            v-show="studio.error"
                        >
                        {{ studio.error }}
                        </v-alert>
                        <v-form v-model="valid">
                            <v-text-field
                                label="Name"
                                v-model="studio.studio.name"
                                :rules="[v => !!v || 'name is required']"
                            ></v-text-field>
                            <v-color-picker
                            v-model="studio.studio.color"
                            class="ma-2"
                            canvas-height="300"
                            ></v-color-picker>
                            
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="text-none primary" :loading="studio.loading" :disabled="!valid" @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name: "studioAdd",

    created() {
        var data = {
            id: 0,
            name: null,
            color: '#17DFF7',
        }
        this.STUDIO(data);
    },

    data() {
        return { 
            valid: false
        }
    },

    methods: {
        ...mapMutations(["STUDIO"]),
        ...mapActions(["STUDIO_SAVE"]),

        save() {
            var data = {
                id: this.studio.studio.id,
                name: this.studio.studio.name,
                color: this.studio.studio.color,
            }
            this.STUDIO_SAVE(data)
        },
    },

    computed: {
        ...mapState(["studio"])
    }
}
</script>