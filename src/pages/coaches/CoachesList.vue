<template>
    <div class="content columns">
        <Filtering @changeFilter="handleFiltering"/>
        <section class="coaches">
            <template v-if="hasCoaches">
                <CoachCard
                    v-for="coach in filteredCoaches"
                    :key="coach.id"
                    :coach="coach"/>
            </template>
            <h3 v-else>There is no coaches yet.</h3>
        </section>
    </div>
</template>

<script>
import CoachCard from "@/components/coach/CoachCard";
import Filtering from "@/components/coach/CoachFiltering";
import {mapGetters} from 'vuex';

export default {
    components: {
        CoachCard,
        Filtering
    },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                fullstack: true,
                career: true,
                management: true
            }
        }
    },
    computed: {
        ...mapGetters('coaches', ['hasCoaches', 'coachesList']),
        filteredCoaches() {
            return this.coachesList.filter((coach) => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                if (this.activeFilters.fullstack && coach.areas.includes('fullstack')) {
                    return true;
                }
                if (this.activeFilters.management && coach.areas.includes('management')) {
                    return true;
                }
                return false;
            });
        },
    },
    methods: {
        handleFiltering(updatedFilters) {
            this.activeFilters = updatedFilters;
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    margin: 30px auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .coaches {
        max-width: 800px;
        width: 100%;
    }
}
</style>