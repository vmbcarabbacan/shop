<template>
    <v-dialog
        v-model="image.isEdit"
        width="1000"
        @click:outside="close"
    >
        <v-card
            class="overflow-hidden"
        >
            <v-toolbar
                color="primary"
                dark
                flat
            >
                <v-toolbar-title>
                    Update Image
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon
                    @click="close"
                >
                    mdi-close
                </v-icon>
            </v-toolbar>
            <v-row>
                <v-col
                    cols="6"
                >
                    <v-img
                        :src="`/${image.form.link}`"
                        :lazy-src="`/${image.form.link_res}`"
                        :name="image.form.name"
                        :alt="image.form.alt"
                    >
                    </v-img>
                </v-col>
                <v-col
                    cols="6"
                >
                    <v-card-text>
                        <v-alert v-show="image.error" :value="true" color="error" dark class="mb-5">
                            {{ image.error }}
                        </v-alert>
                        <v-text-field
                            label="Name"
                            v-model="form.name"
                            :rules="[v => !!v || 'Name is required']"
                        ></v-text-field>
                        <v-text-field
                            label="Alt Text"
                            v-model="form.alt"
                            :rules="[v => !!v || 'Alt is required']"
                        ></v-text-field>
                        <v-text-field
                            label="Slug"
                            v-model="form.slug"
                            :rules="[v => !!v || 'Slug is required']"
                        ></v-text-field>
                        <v-btn
                            dark
                            color="primary"
                            class="text-none"
                            @click="save"
                        >
                            Save
                        </v-btn>
                        
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "productImageUpdate",

    methods: {
        ...mapActions(["IMAGE_UPDATE", "IMAGES"]),
        ...mapMutations(["IMAGE_EDIT", "IMAGE_FORM"]),

        save() {
            this.IMAGE_UPDATE(this.form);
        },

        close() {
            this.IMAGE_FORM({});
            this.IMAGE_EDIT(false);
        }
    },


    computed: {
        ...mapState(["image"]),

        form() {
            var form = {
                id: this.image.form.id,
                name: this.image.form.name,
                alt: this.image.form.alt,
                slug: this.image.form.slug
            }

            return form;
        }
    }
}
</script>