<template>
    <section class="register">
        <CoachForm @registerCoach="registerCoach"/>
    </section>
</template>

<script>
import CoachForm from "@/components/coach/CoachForm";
import {mapActions} from "vuex";

export default {
    components: {
        CoachForm
    },
    methods: {
        ...mapActions('coaches', ['addCoach']),
        registerCoach(formData) {
            this.addCoach(formData);
            this.$router.replace('/coaches');
        },
    }
}
</script>

<style lang="scss">
.register {
    max-width: 700px;
    margin: 30px auto;
}
</style>