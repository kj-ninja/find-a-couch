<template>
    <div class="content columns">
        <Filtering @changeFilter="handleFiltering"/>
        <section class="coaches">
            <Spinner v-if="isLoading">Loading...</Spinner>
            <template v-else-if="hasCoaches">
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
import {mapGetters} from 'vuex';
import CoachCard from "@/components/coach/CoachCard";
import Filtering from "@/components/coach/CoachFiltering";
import Spinner from "@/components/ui/Spinner/Spinner";

export default {
    components: {
        CoachCard,
        Filtering,
        Spinner
    },
    data() {
        return {
            isLoading: false,
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
        ...mapGetters('coaches', ['coachesList']),
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
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
        },
        async fetchCoaches() {
            this.isLoading = true;
            await this.$store.dispatch('coaches/fetchCoaches');
            this.isLoading = false;
        }
    },
    created() {
        this.fetchCoaches();
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