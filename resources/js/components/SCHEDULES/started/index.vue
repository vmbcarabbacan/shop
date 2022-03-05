<template>
    <v-expansion-panels>
        <v-expansion-panel
        v-for="(how ,i) in hows"
        :key="i"
        >
        <v-expansion-panel-header>
            {{ how.name | toUpper }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div v-html="how.text"></div>
            <br>
            <video width="100%" controls>
                <source :src="how.mp4" type="video/mp4">
                <source :src="how.webm" type="video/webm">
            </video>
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
export default {
    name: 'how-it-works',

    data() {
        return {
            hows: [
                {
                    name: 'Create schedules',
                    mp4: '/videos/schedules/mp4/create-schedules.mp4',
                    webm: '/videos/schedules/webm/create-schedules.webm',
                    text: ``,
                }, 
                {
                    name: 'Copy Schedules',
                    mp4: '/videos/schedules/mp4/copy-schedules.mp4',
                    webm: '/videos/schedules/webm/copy-schedules.webm',
                    text: ``,
                }, 
                {
                    name: 'Create new location and quantity by day',
                    mp4: '/videos/schedules/mp4/add-location-and-quantity-by-day.mp4',
                    webm: '/videos/schedules/webm/add-location-and-quantity-by-day.webm',
                    text: ``,
                }, 
                {
                    name: 'Edit location and quantity by day',
                    mp4: '/videos/schedules/mp4/edit-quantity-location-by-day.mp4',
                    webm: '/videos/schedules/webm/edit-quantity-location-by-day.webm',
                    text: ``,
                }, 
                {
                    name: 'Add new studio',
                    mp4: '/videos/schedules/mp4/add-studio.mp4',
                    webm: '/videos/schedules/webm/add-studio.webm',
                    text: ``,
                }, 
            ]
        }
    }
}
</script>