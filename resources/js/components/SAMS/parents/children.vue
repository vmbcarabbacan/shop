<template>
    <v-dialog
        v-model="open"
        width="800"
        @click:outside="closeViewChild"
    >
        <v-card>
            <v-card-text>
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Photo
                        </th>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Gender
                        </th>
                        <th class="text-left">
                            Date of Birth
                        </th>
                        <th class="text-left">
                            Age
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, index) in sams.children"
                        :key="index"
                        @click="goToItem(item)"
                        >
                        <td>
                            <v-avatar size="150" tile v-if="item.image">
                                <v-img
                                    :src="`/${item.image.link}`"
                                    :lazy-src="`/${item.image.link_res}`"
                                    :name="item.image.name"
                                    :alt="item.image.alt"
                                    contain
                                ></v-img>
                            </v-avatar>
                        </td>
                        <td>{{ item.fullName }}</td>
                        <td>{{ item.gender }}</td>
                        <td>{{ item.date_of_birth }}</td>
                        <td>{{ get_age(item.date_of_birth) }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'child',

    props: {
        open: Boolean
    },

    methods: {
        get_age(e) {
            let currentDate = new Date();
            let birthDate = new Date(e);
            let difference = currentDate - birthDate;
            let age = Math.floor(difference / 31557600000);
            return age;
        },

        closeViewChild() {
            this.$emit('closeModal')
        },

        goToItem(e) {
            let route = this.$router.resolve({name: 'StudentModal', params: {id: e.id}})
            window.open(route.href);
        }
    },

    computed: {
        ...mapState(["sams"])
    }
}
</script>