<template>
    <v-app>
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
                        <v-card-title>
                            Upload schedules here
                            <v-spacer></v-spacer>
                            <v-btn 
                                text
                                class="text-none"
                                @click="downloadTemplate"
                            >Download template here</v-btn>
                        </v-card-title>
                        <v-card-text>
                            <form @submit="submitForm" enctype="multipart/form-data">
                            <div class="input-group">
                            <div class="custom-file">
                            <input type="file" name="filename" class="custom-file-input" id="inputFileUpload"
                            v-on:change="onFileChange">
                            <label class="custom-file-label" for="inputFileUpload">Choose file</label>
                            </div>
                            <div class="input-group-append">
                            <v-btn class="text-none success mt-2" type="submit" :loading="loading">Upload</v-btn>
                            </div>
                            </div>
                            <br>
                            <p class="text-danger font-weight-bold">{{filename}}</p>
                            <v-alert
                                v-show="error"
                                border="right"
                                colored-border
                                type="error"
                                elevation="2"
                            >
                                Something went wrong! Please reload the browser and import the data again
                            </v-alert>
                            </form>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    md="8"
                    v-if="failedSchedules.length > 0"
                >
                    <v-card>
                        <v-card-text>
                            You have {{ failedSchedules.length }} failed import due to below missing fields
                        </v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Term
                                </th>
                                <th class="text-left">
                                    Location
                                </th>
                                <th class="text-left">
                                    Lesson
                                </th>
                                <th class="text-left">
                                    Teacher
                                </th>
                                <th class="text-left">
                                    Day
                                </th>
                                <th class="text-left">
                                    Studio
                                </th>
                                <th class="text-left">
                                    Time Start
                                </th>
                                <th class="text-left">
                                    Time End
                                </th>
                                <th class="text-left">
                                    Limit
                                </th>
                                <th class="text-left">
                                    Price
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                v-for="(item, index) in failedSchedules"
                                :key="index"
                                >
                                <td>{{ item.term | toUpper }}</td>
                                <td>{{ item.location | toUpper }}</td>
                                <td>{{ item.lesson | toUpper }}</td>
                                <td>{{ item.teacher | toUpper }}</td>
                                <td>{{ item.day | toUpper }}</td>
                                <td>{{ item.studio | toUpper }}</td>
                                <td>{{ realTime(item.time_start) }}</td>
                                <td>{{ realTime(item.time_end) }}</td>
                                <td>{{ item.limit }}</td>
                                <td>{{ item.price | currency }}</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
    name: 'ScheduleImport',

    data() {
        return {
            fileUpload: null,
            filename: null,
            file: null,
            loading: false,
            error: false,
            failedSchedules: []
        }
    },

    methods: {
        ...mapActions(["SETUP_UPLOAD_USERS"]),

        onFileChange(e) {
        //console.log(e.target.files[0]);
            this.filename = "Selected File: " + e.target.files[0].name;
            this.file = e.target.files[0];
        },

        submitForm(e) {
            e.preventDefault();
            this.loading = true
            this.error = false
            let currentObj = this;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': window.csrf_token
                }
            }
            let formData = new FormData();
            formData.append('file', this.file);
            // send upload request
            axios.post('/api/SCHEDULE-IMPORT', formData, config)
            .then((response) => {
                currentObj.success = response.data.success;
                this.failedSchedules = response.data.failed;
                currentObj.filename = "";
                this.loading = false
            })
            .catch((error) => {
                currentObj.output = error;
                this.error = true
                this.loading = false
            });
        },

        realTime(value) {
            if(value) {
                var sec = (value * (24*60*60));
                var hours   = Math.floor(sec / 3600);
                var minutes = Math.floor((sec - (hours * 3600)) / 60);
                var seconds = sec - (hours * 3600) - (minutes * 60);

                if (hours   < 10) {hours   = "0"+hours;}
                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                return hours+':'+minutes+':'+seconds;
            }
        },

        downloadTemplate() {
            window.location.href = "/downloadTemplate"
        }
    },
}
</script>