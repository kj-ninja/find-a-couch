<template>
    <section class="coaches">
        <CoachCard
            v-for="coach in coachesList"
            :key="coach.id"
            :coach="coach"/>
    </section>
</template>

<script>
import CoachCard from "@/components/coach/CoachCard";
import {mapGetters} from 'vuex';

export default {
    components: {
        CoachCard
    },
    computed: {
        ...mapGetters('coaches', ['coachesList'])
    }
}
</script>

<style lang="scss" scoped>
.coaches {
    max-width: 700px;
    margin: 30px auto;
    padding: 10px;
}
</style>