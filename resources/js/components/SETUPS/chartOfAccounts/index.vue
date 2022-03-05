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
                            Upload chart of account from xero
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
    name: 'UploadChartOfAccounts',

    data() {
        return {
            fileUpload: null,
            filename: null,
            file: null,
            loading: false
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
            axios.post('/api/SETUP-UPLOAD-CHART-OF-ACCOUNTS', formData, config)
            .then((response) => {
                currentObj.success = response.data.success;
                currentObj.filename = "";
                this.loading = false
            })
            .catch((error) => {
                currentObj.output = error;
                console.log(error.response.data)
                this.loading = false
            });
        }
    }
}
</script>