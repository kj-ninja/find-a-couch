<template>
    <section class="coaches">
        <template v-if="hasCoaches">
            <CoachCard
                v-for="coach in coachesList"
                :key="coach.id"
                :coach="coach"/>
        </template>
        <h3 v-else>There is no coaches yet.</h3>
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
        ...mapGetters('coaches', ['coachesList', 'hasCoaches'])
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