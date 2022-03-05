<template>
    <div>
        <dailySales />
    </div>
</template>

<script>

export default {
    name: "dahsboard",

    components: {
        dailySales: () => import('./dailySales.vue')
    }

}
</script>