<template>
    <div>
        <p v-html="waitingText"></p>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
    name: 'successPayment',

    data() {
        return {
            waitingText: 'Please wait'
        }
    },

    created() {
        if(this.$route.query.cart_id) {
            this.SALE_UPDATE_TELR_TRANSACTION({
                cart_id: this.$route.query.cart_id,
                status: 'Completed'
            })
            .then((result) => {
                this.waitingText = 'Completed'
                this.CARTS({id: this.registration.form.id});
            })
        } else {
            this.SALE_UPDATE_ONLINE_TRANSACTION({
                transactionNumber: this.checkout.transactionNumber,
                status: 'Completed'
            })
            .then((result) => {
                this.waitingText = 'Completed'
                this.CARTS({id: this.registration.form.id});
            })
        }
        
        
    },

    methods: {
        ...mapActions(["SALE_UPDATE_TELR_TRANSACTION", "SALE_UPDATE_ONLINE_TRANSACTION", "CARTS"])
    },

    computed: {
        ...mapState(["checkout", "registration"])
    }
}
</script>