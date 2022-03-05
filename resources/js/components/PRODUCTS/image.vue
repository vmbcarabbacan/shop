<template>
    <div>
        <vue-dropzone
            ref="myVueDropzone"
            id="dropzone"
            :options="dropzoneOptions"
            v-on:vdropzone-success="paginate()"
        />

        <v-data-table
            :headers="headers"
            :items="image.images.data"
            :items-per-page="20"
            :loading="image.loading"
            :server-items-length="image.images.total"
            :footer-props="{
            'items-per-page-options': [5, 10, 20],
            'items-per-page-text': 'Image per page',
            'show-current-page': true,
            'show-first-last-page': true,
            }"
            :mobile-breakpoint="200"
            hide-default-footer
        >
            <template v-slot:item.image="{ item }">
            <v-avatar size="150" tile>
                <v-img :src="`/${item.link}`" :lazy-src="`/${item.link_res}`" contain />
            </v-avatar>
            </template>

            <template v-slot:item.alt="{ item }">
            <div v-if="item.alt !== null">
                {{ item.alt | toUpper }}
            </div>
            <div v-else>
                {{ item.alt }}
            </div>
            </template>

            <template v-slot:item.name="{ item }">
                <a :href="`/image-gallery/${item.slug}`" target="_blank">
                    {{ item.name | toUpper }}
                </a>
            </template>

            <template v-slot:item.slug="{ item }">
            {{ item.slug }}
            </template>

            <template v-slot:item.action="{ item }">
            <v-btn class="primary" icon dark @click="edit(item)">
                <v-icon> mdi-pencil </v-icon>
            </v-btn>
            </template>
        </v-data-table>
        <v-pagination
            v-model="image.filter.page"
            :length="image.images.last_page"
            @input="paginate"
        ></v-pagination>
        <updateImage />
    </div>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: 'image-upload',

    components: {
        vueDropzone: vue2Dropzone,
        updateImage: () => import("./image/update.vue")
    },

    created(){
        var page = parseInt(this.$route.query.page)
        
        var filter = {
            page: page,
            perPage: 20
        }
        this.IMAGE_FILTER(filter)
        this.paginate(page)
    },

    data: function () {
        return {
          dropzoneOptions: {
              url: '/api/IMAGE-STORE',
              thumbnailWidth: 150,
              maxFilesize: 5,
              headers: { "Authorization": `Bearer ${this.$store.state.login.token}` }
          },

          headers: [
                { text: "Image", value: "image", align: "center", sortable: false },
                { text: "Name", value: "name", align: "center", sortable: false },
                { text: "Alt", value: "alt", align: "center", sortable: false },
                { text: "Slug", value: "slug", align: "center", sortable: false },
                { text: "", value: "action", align: "center", sortable: false },
            ],
        }
      },

      methods: {
          ...mapMutations(["IMAGE_LOADING", "IMAGE_FILTER", "IMAGE_EDIT", "IMAGE_FORM"]),
          ...mapActions(["IMAGES"]),

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

              this.IMAGE_LOADING(true)
              var filter = {
                  page,
                  perPage: 20
              }
              this.IMAGE_FILTER(filter)
              this.IMAGES(this.image.filter)
            
          },

          edit(e) {
              this.IMAGE_FORM(e)
              this.IMAGE_EDIT(true)
          }
      },

      computed: {
          ...mapState(["image"])
      },

    metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "Image",
      htmlAttrs: {
        lang: "en",
      }
    };
  }

}
</script>
