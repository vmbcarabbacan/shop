<template>
    <div>
        {{ waitingText }}
    </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: 'cancelledPayment',

    data() {
        return {
            waitingText: 'Please wait'
        }
    },

    created() {
        this.SALE_UPDATE_TELR_TRANSACTION({
            cart_id: this.$route.query.cart_id,
            status: 'Cancelled'
        })
        .then((result) => {
            this.waitingText = 'Cancelled'
        })
        
    },

    methods: {
        ...mapActions(["SALE_UPDATE_TELR_TRANSACTION"])
    }
}
</script>