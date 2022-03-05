<template>
    <div>
      <v-toolbar dense v-if="$route.meta.requiresWebsite && $route.name !== 'ImageGallery'">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>All</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-toolbar>
      

      <v-navigation-drawer
        v-model="drawer"
        width="390"
        absolute
        temporary
        app
      >
        <v-btn
          @click="drawer = false"
          color="red"
          dark
          absolute
          right
          fab
        >
          x
        </v-btn>
        <v-divider></v-divider>

        <v-expansion-panels
          v-model="panel"
          multiple
        >
          <v-expansion-panel 
            v-for="(category, index) in product.categories"
            :key="index"
          >
            <v-expansion-panel-header> {{ category.name }} </v-expansion-panel-header>
            <v-expansion-panel-content>
              <template
                v-for="(child, i) in category.children"
              >
                <div
                  :key="i"
                >
                  <v-btn
                    v-if="category.name == child.type"
                    :href="`/t/${category.name}/cid/${child.id}`"
                    class="text-none"
                    text
                    tile
                  >
                    {{ child.name | toUpper }}
                  </v-btn>
                </div>
              </template>
              
            </v-expansion-panel-content> 
          </v-expansion-panel>

        </v-expansion-panels>
      </v-navigation-drawer>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name: "skeletonMenu",

    data() {
      return {
        drawer: false,
        panel: [0, 1, 2]
      }
    },

    computed: {
      ...mapState(["product"])
    }

}
</script>