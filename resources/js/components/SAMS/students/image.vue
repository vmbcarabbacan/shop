<template>
    <v-dialog
        v-model="image.open"
        width="1000"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar
                flat
                dark
                color="primary"
            >
                <v-toolbar-title>
                    Select Media
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon
                    @click="close"
                >
                    mdi-close
                </v-icon>
            </v-toolbar>
            <v-card-text>
                <v-container fluid>
                    <v-radio-group v-model="selected" row>
                        <v-radio
                            v-for="image in image.images.data"
                            :key="image.id"
                            :value="image.id"
                            class="modified"
                        >
                            <template v-slot:label>
                                <v-avatar
                                    size="160"
                                    tile
                                    class="modified"
                                >
                                    <v-img
                                        :src="`/${image.link}`"
                                        :lazy-src="`/${image.link_res}`"
                                        :alt="image.alt"
                                        contain
                                    />
                                </v-avatar>
                            </template>
                        </v-radio>
                    </v-radio-group>
                </v-container>
                
            </v-card-text>
            <v-card-actions>
                <v-pagination
                @input="paginate"
                v-model="image.images.current_page"
                :length="image.images.last_page"
                ></v-pagination>
                <v-spacer></v-spacer>
                <v-btn
                    class="text-none primary"
                    @click="selectedImage"
                >
                    Selected Image
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "productMedia",

    methods: {
        ...mapMutations(["IMAGE_OPEN", "IMAGE_FILTER"]),
        ...mapActions(["IMAGES", "IMAGE_FILTER_BY_STUDENT_IDS"]),

        paginate(e) {
            var filter = {
                  page: e,
                  perPage: 20
              }
            this.IMAGE_FILTER(filter)
            this.IMAGES(this.image.filter)
        },

        close() {
            this.IMAGE_OPEN(false)
        },

        selectedImage(){
            var ids = {
                ids: this.sams.student.photo
            }
            this.IMAGE_FILTER_BY_STUDENT_IDS(ids)
            this.close()
        }
    },


    computed: {
        ...mapState(["image", "sams"]),

        selected: {
            get() {
                return this.sams.student.photo
            },
            set(e) {
                this.sams.student.photo = e
            }
        }
    }
}
</script>

<style scoped>
    .v-radio >>> .v-input--selection-controls__input {
        display: none;
    }

    .v-radio.modified.theme--light.v-item--active {
        background-color: aqua;
        margin: 10px;
    }

    .v-avatar {
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        line-height: normal;
        position: relative;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;
        margin: 5px;
        padding: 5px;
    }
</style>
