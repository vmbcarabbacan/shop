<template>
    <v-app>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                md="5"
            >
                <v-card
                    v-if="Object.keys(image.image).length > 0"
                >
                    <v-img
                        width="100%"
                        :src="`/${image.image.link}`"
                        :lazy-src="`/${image.image.link_res}`"
                        :name="image.image.name"
                        :alt="image.image.alt"
                    ></v-img>
                </v-card>
                <v-card v-else flat>
                    <v-card-text>
                        Sorry, Image is not available
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "imageGallery",

    created() {
        this.$vuetify.goTo(0)
        var slug = {
            slug: this.$route.params.slug
        }
        this.IMAGE_SEARCH(slug)
    },

    methods: {
        ...mapActions(["IMAGE_SEARCH"])
    },

    computed: {
        ...mapState(["image"])
    },

    metaInfo() {
    return {
      title: "Image Gallery",
      titleTemplate: "%s - StepUp Academy | " + this.image.image.name,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.image.image.alt },
        {
          name: "keywords",
          content: "StepUp, StepUp Academy, step up " + this.image.image.name,
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.image.image.name },
        { property: "og:site_name", content: "StepUp Academy" },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        {
          property: "og:url",
          content: this.image.image.link,
        },
        {
          property: "og:image",
          content: this.image.image.link,
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.image.image.alt },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.image.image.link,
        },
        { name: "twitter:title", content: this.image.image.name },
        { name: "twitter:description", content: this.image.image.alt },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.image.image.link,
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.image.image.name },
        { itemprop: "description", content: this.image.image.alt },
        {
          itemprop: "image",
          content: this.image.image.link,
        },
      ],
      link: [
            {rel: 'canonical', href: `http://localhost:3000/image-gallery/${this.image.image.link}`}
        ]
    };
  }
}
</script>