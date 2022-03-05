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
                        app>
                    <v-list-item class="px-2">

                        <v-list-item-content>
                            <v-list-item-title class="title">
                            {{ !mini ? "SAMS" : "" }}
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
                            in_array(registration.form.role, item.access)
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
    name: "authSchedules",
    
    beforeRouteEnter (to, from, next) {
        next(v => {
            v.redirect()
        })
    },

    created() {
        this.GET_ALL_TIMING();
    },

    data() {
        return {
            drawer: this.$vuetify.breakpoint.mdAndUp ? true : false,
            mini: false,
            items: [
                {
                title: "Timetable",
                icon: "mdi-timetable",
                path: { name: 'Timetable' },
                access: [
                    "Admin",
                    "Reception",
                    "Manager",
                    "Teacher"
                ]},
                {
                title: "Parents",
                icon: "mdi-account-multiple-outline",
                path: { name: 'Parents', params: {role: 'User'}, query: {page: 1} },
                access: [
                    "Admin",
                    "Reception",
                    "Manager"
                ]},
                {
                title: "Students",
                icon: "mdi-account-child-outline",
                path: { name: 'Students', query: {page: 1} },
                access: [
                    "Admin",
                    "Reception",
                    "Manager"
                ]},
                {
                title: "Teachers",
                icon: "mdi-shield-account-outline",
                path: { name: 'Teachers', params: {role: 'Teacher'}, query: {page: 1} },
                access: [
                    "Admin",
                    "Reception",
                    "Manager"
                ]},
                {
                title: "Deleted User",
                icon: "mdi-account-multiple-remove",
                path: { name: 'DelUser' },
                access: [
                    "Admin",
                ]},
                {
                title: "Images",
                icon: "mdi-folder-multiple-image",
                path: { name: 'Images' },
                access: [
                    "Admin",
                ]},
            ],
        }
    },

    methods: {
        ...mapActions(["LOGOUT", "GET_ALL_TIMING"]),

        logout() {
            this.LOGOUT();
        },
        
        redirect() {
            setTimeout(() => {
                this.in_array(this.registration.form.role, ['Admin', 'Reception', 'Manager', 'Teacher']) 
                ? '' 
                : this.$router.push({name: "Home"});
            }, 1000);
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
        ...mapState(["registration"])
    }
}
</script>