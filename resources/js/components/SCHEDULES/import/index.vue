<template>
    <v-app>
        <v-container>
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-card>
                        <v-card-title>
                            Upload schedules here
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
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
    name: 'ProductImport',

    data() {
        return {
            fileUpload: null,
            filename: null,
            file: null,
            loading: false,
            error: false
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
                currentObj.filename = "";
                this.loading = false
            })
            .catch((error) => {
                currentObj.output = error;
                this.error = true
                this.loading = false
            });
        }
    }
}
</script>