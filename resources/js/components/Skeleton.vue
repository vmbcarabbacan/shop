<template>
    <div>
        <appBar />
        <toolBar />
        <login />
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "skeleton",

    components: {
        appBar: () => import("./appBar.vue"),
        toolBar: () => import("./toolBar.vue"),
        login: () => import("./login.vue")
    }

}
</script>