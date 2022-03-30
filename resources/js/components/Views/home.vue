<template>
    <div class="body-home">
        <v-card flat>
            <v-card-title>
                <v-subheader class="text-h6 font-weight-bold">
                    Uniforms 
                    <v-btn 
                        text
                        class="text-none"
                        color="primary" 
                        href="/types/Uniforms"
                    >
                        See more...
                    </v-btn>
                </v-subheader>
            </v-card-title>
            <v-card-text>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        md="2"
                        v-for="(uniform, i) in product.home.uniforms"
                        :key="i"
                    >
                        <v-card
                            :href="uniform.pdo ? `/Uniforms/${uniform.slug}/pdo/${uniform.pdo.id}` : '#'"
                        >
                            <v-img
                                :src="uniform.image.link"
                                :lazy-src="uniform.image.link_res"
                                :alt="uniform.image.alt"
                                :name="uniform.image.name"
                            ></v-img>
                            <v-card-text>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <div
                                        v-bind="attrs"
                                        v-on="on"
                                        class="col-12 text-truncate"
                                        >{{ uniform.name | toUpper }}
                                        <br>
                                        <template v-if="uniform.pdo">
                                            AED <span class="font-weight-bold">{{ uniform.pdo.price }}</span>
                                        </template>
                                        <template v-else>
                                            Out of stock
                                        </template>
                                        </div>
                                    </template>
                                    <span>{{ uniform.name | toUpper }}</span>
                                </v-tooltip>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title>
                <v-subheader class="text-h6 font-weight-bold">
                    Lessons 
                    <v-btn 
                        text
                        class="text-none"
                        color="primary" 
                        href="/types/Lessons"
                    >
                        See more...
                    </v-btn>
                </v-subheader>
            </v-card-title>
            <v-card-text>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        md="2"
                        v-for="(lesson, i) in product.home.lessons"
                        :key="i"
                    >
                        <v-card
                            :href="lesson.pdo ? `/Lessons/${lesson.slug}/pdo/${lesson.pdo.id}` : '#'"
                        >
                            <v-img
                                :src="lesson.image.link"
                                :lazy-src="lesson.image.link_res"
                                :alt="lesson.image.alt"
                                :name="lesson.image.name"
                            ></v-img>
                            <v-card-text>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <div
                                        v-bind="attrs"
                                        v-on="on"
                                        class="col-12 text-truncate"
                                        >{{ lesson.name | toUpper }}
                                        <br>
                                        <template v-if="lesson.pdo">
                                            AED <span class="font-weight-bold">{{ lesson.pdo.price * (lesson.byWeek ? lesson.pdo.quantity : 1) }}</span>
                                        </template>
                                        <template v-else>
                                            Coming Soon!
                                        </template>
                                        </div>
                                    </template>
                                    <span>{{ lesson.name | toUpper }}</span>
                                </v-tooltip>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card flat v-if="product.home.camps.length > 0">
            <v-card-title>
                <v-subheader class="text-h6 font-weight-bold">
                    Camps 
                    <v-btn 
                        text
                        class="text-none"
                        color="primary" 
                        href="/types/Camps"
                    >
                        See more...
                    </v-btn>
                </v-subheader>
            </v-card-title>
            <v-card-text>
                <v-row
                    align="start"
                    justify="start"
                >
                    <v-col
                        cols="12"
                        md="2"
                        v-for="(camp, i) in product.home.camps"
                        :key="i"
                    >
                        <v-card
                            :href="camp.pdo ? `/Camps/${camp.slug}/pdo/${camp.pdo.id}` : '#'"
                        >
                            <v-img
                                :src="camp.image.link"
                                :lazy-src="camp.image.link_res"
                                :alt="camp.image.alt"
                                :name="camp.image.name"
                            ></v-img>
                            <v-card-text>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <div
                                        v-bind="attrs"
                                        v-on="on"
                                        class="col-12 text-truncate"
                                        >{{ camp.name | toUpper }}
                                        <br>
                                        <template v-if="camp.pdo">
                                            AED <span class="font-weight-bold">{{ camp.pdo.price }}</span>
                                        </template>
                                        <template v-else>
                                            Coming Soon!
                                        </template>
                                        </div>
                                    </template>
                                    <span>{{ camp.name | toUpper }}</span>
                                </v-tooltip>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'home',

    created() {
        this.$vuetify.goTo(0)
    },

    computed: {
        ...mapState(["product"])
    }
}
</script>

<style lang="scss" scoped>
    .body-home {
        background-color: #c68181;
    }
</style>