<template>
        <div>
            <v-app-bar 
                dark
                color="blue darken-3" 
                v-if="$vuetify.breakpoint.mdAndDown"
            >
                <v-spacer></v-spacer>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            </v-app-bar>
                <v-navigation-drawer 
                        v-model="drawer"
                        :mini-variant="mini"
                        absolute
                        app>
                    <v-list-item class="px-2">

                        <v-list-item-content>
                            <v-list-item-title class="title">
                            {{ !mini ? "App Request" : "" }}
                            <template v-if="mini">
                                <v-btn
                                    icon
                                    @click.stop="mini = !mini"
                                >
                                    <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </template>
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-btn
                            icon
                            @click.stop="mini = !mini"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                    <template v-for="item in items">
                        <template
                        v-if="
                            in_array(registration.form.email, item.access)
                        "
                        >
                        <v-list-item
                            :key="item.title"
                            :to="item.path"
                        >
                            <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        </template>
                    </template>
                    </v-list>

                    <template v-slot:append>
                        <v-list dense>
                            <v-list-item to="/">
                                <v-list-item-action>
                                    <v-icon>mdi-home</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title> Home </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item @click="logout">
                                <v-list-item-action>
                                    <v-icon>mdi-logout</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title> Logout </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </template>
                </v-navigation-drawer>
                
                <v-main>
                    <router-view></router-view>
                </v-main>
        </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "authSetups",
    
    beforeRouteEnter (to, from, next) {
        next(v => {
            v.redirect();
            v.SETUP_FILTER();
        })
    },

    data() {
        return {
            drawer: this.$vuetify.breakpoint.mdAndUp ? true : false,
            mini: false,
        }
    },

    methods: {
        ...mapActions(["LOGOUT", "SETUP_FILTER"]),

        redirect() {
            setTimeout(() => {
                this.in_array(this.registration.form.email, JSON.parse(this.setup.filter.emails)) 
                ? '' 
                : this.$router.push({name: "Home"});
            }, 1000);
        },
        
        logout() {
            this.LOGOUT();
        },

        in_array(value, arr) {
        var status = false;

        for (var i = 0; i < arr.length; i++) {
            var name = arr[i];
            if (name == value) {
            status = true;
            break;
            }
        }

        return status;
        },
    },

    computed: {
        ...mapState(["registration", "setup"]),

        items() {
            return [
                    {
                    title: "Pending",
                    icon: "mdi-timeline-alert",
                    path: { name: 'RequestPending' },
                    access: JSON.parse(this.setup.filter.emails)
                    },
                    {
                    title: "Completed",
                    icon: "mdi-timeline-check",
                    path: { name: 'RequestCompleted' },
                    access: JSON.parse(this.setup.filter.emails)
                    },
                    {
                    title: "Declined",
                    icon: "mdi-timeline-remove",
                    path: { name: 'RequestCancelled' },
                    access: JSON.parse(this.setup.filter.emails)
                    },
                ]
        } 
    }
}
</script>