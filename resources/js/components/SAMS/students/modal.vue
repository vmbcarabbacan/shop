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
                    <router-link :to="{name: 'Students'}" class="text-caption blackk--text">
                        <v-icon x-small>mdi-arrow-left</v-icon> Go back to view
                    </router-link>
                    <v-alert
                        type="success"
                        v-show="sams.studentMessage"
                    >
                        {{ sams.studentMessage }}
                    </v-alert>
                    <v-card-text>
                        <v-row
                                justify="center"
                                align="center"
                            >
                                <v-col
                                    cols="12"
                                    md="8"
                                >
                                    
                                    <div class="text-center">
                                        <v-avatar size="150" tile v-if="sams.student.image">
                                            <v-img
                                                :src="`/${sams.student.image.link}`"
                                                :lazy-src="`/${sams.student.image.link_res}`"
                                                :name="sams.student.image.name"
                                                :alt="sams.student.image.alt"
                                            ></v-img>
                                        </v-avatar>
                                    </div>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="8"
                                >
                                    
                                    <div class="text-center">
                                        <v-btn class="primary text-none" @click="openMedia">Add photo</v-btn>
                                    </div>
                                    <productImage />
                                </v-col>
                            </v-row>
                        <v-form
                            v-model="valid"
                        >
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="First Name"
                                        v-model="sams.student.firstName"
                                        :rules="specialRules"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Family Name"
                                        v-model="sams.student.familyName"
                                        :rules="specialRules"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-select
                                        label="Gender"
                                        :items="gender"
                                        v-model="sams.student.gender"
                                    ></v-select>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-menu
                                        ref="dob"
                                        v-model="open"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="290px"
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="sams.student.dateOfBirth"
                                            label="Date"
                                            persistent-hint
                                            prepend-icon="mdi-calendar"
                                            append-icon="*"
                                            :rules="[(v) => !!v || 'Date of birth is required']"
                                            suffix="*"
                                            v-bind="attrs"
                                            readonly
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker
                                        v-model="sams.student.dateOfBirth"
                                        no-title
                                        :max="new Date().toISOString().substr(0, 10)"
                                        @input="open = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        label="Nationality"
                                        v-model="sams.student.nationality"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="text-none primary"
                            @click="save"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <v-card
                    class="mt-6"
                >
                    <v-card-title>
                        Current Schedule
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th class="left">Lesson</th>
                                    <th class="left">Location</th>
                                    <th class="left">Day</th>
                                    <th class="left">Teacher</th>
                                    <th class="left">Start</th>
                                    <th class="left">End</th>
                                    <th class="left">Permanent</th>
                                    <th class="left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(current, index) in enroll.current" 
                                    :key="index"
                                >
                                    <td> {{ current.product | toUpper }} </td>
                                    <td> {{ current.location | toUpper }} </td>
                                    <td> {{ current.weekday | toUpper }} </td>
                                    <td> {{ current.teacher | toUpper }} </td>
                                    <td> {{ current.time_start | time }} </td>
                                    <td> {{ current.time_end | time }} </td>
                                    <td> <v-checkbox
                                            v-model="current.is_permanent"
                                            readonly
                                        ></v-checkbox> 
                                    </td>
                                    <td>
                                        <v-icon small v-if="!current.is_permanent" @click="makePermanent(current)">mdi-sticker-text</v-icon>
                                        <v-icon small @click="deleteItem(current)">mdi-close</v-icon>
                                    </td>
                                </tr>
                            </tbody>
                        </v-simple-table>

                        <div
                            class="text-center"
                        >
                            <v-btn
                                class="text-none primary"
                                @click="addSchedule"
                            >
                                Add Schedule
                            </v-btn>
                        </div>
                    </v-card-text>
                </v-card>

                <v-card
                    class="mt-6"
                >
                    <v-card-title>
                        Previous Schedule
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th class="left">Lesson</th>
                                    <th class="left">Location</th>
                                    <th class="left">Day</th>
                                    <th class="left">Teacher</th>
                                    <th class="left">Start</th>
                                    <th class="left">End</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(current, index) in enroll.done" 
                                    :key="index"
                                >
                                    <td> {{ current.product | toUpper }} </td>
                                    <td> {{ current.location | toUpper }} </td>
                                    <td> {{ current.weekday | toUpper }} </td>
                                    <td> {{ current.teacher | toUpper }} </td>
                                    <td> {{ current.time_start | time }} </td>
                                    <td> {{ current.time_end | time }} </td>
                                </tr>
                            </tbody>
                        </v-simple-table>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'studentEdit',

    components: {
        productImage: () => import("./image.vue"),
    },

    created() {
        this.SAMS_STUDENT({id: parseInt(this.$route.params.id)})
        this.ENROLLMENT_GET({id: parseInt(this.$route.params.id), is_end: 0});
        this.ENROLLMENT_GET({id: parseInt(this.$route.params.id), is_end: 1});
    },

    data() {
        return {
            valid: false,
            open: false,
            gender: ["Female", "Male"],
            specialRules: [
                v => !!v || 'Name is required',
                v => /^[A-Za-z]+$/.test(v) || 'Please enter character a-z only',
            ],
        }
    },

    methods: {
        ...mapActions(["SAMS_STUDENT", "SAMS_STUDENT_STORE", "ENROLLMENT_GET", "ENROLLMENT_DELETE", "ENROLLMENT_CHANGE_TO_PERMANENT", "IMAGES"]),
        ...mapMutations(["IMAGE_OPEN", "IMAGE_FILTER"]),

        save() {
            this.SAMS_STUDENT_STORE({form: this.sams.student});
        },

        addSchedule() {
            this.$router.push({name: 'StudentSchedules', query: {student_id: parseInt(this.$route.params.id), page: 1}})
        },

        makePermanent(e) {
            this.ENROLLMENT_CHANGE_TO_PERMANENT({id: e.id, student_id: parseInt(this.$route.params.id)});
        },

        deleteItem(e) {
            this.ENROLLMENT_DELETE({id: e.id, student_id: parseInt(this.$route.params.id)});
        },

        openMedia() {
            this.IMAGE_OPEN(true)
            var filter = {
                  page: 1,
                  perPage: 20
              }
            this.IMAGE_FILTER(filter)
            this.IMAGES(this.image.filter)
        },
    },

    computed:{
        ...mapState(["sams", "enroll", "image"])
    }
}
</script>