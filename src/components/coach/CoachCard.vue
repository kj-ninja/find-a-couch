<template>
    <div class="card" aria-id="contentIdForA11y3">
        <div
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3">
            <p class="card-header-title">
                <template v-if="!loading">
                    {{ coach.name }}<br>
                    ${{ coach.price }} / hour
                </template>
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
            </p>
        </div>
        <div class="card-content">
            <div class="content">
                <template v-if="!loading">
                    <p>Technologię których nauczam:</p>
                    <b-taglist>
                        <Tag
                            v-for="(area, index) in coach.areas"
                            :key="index"
                            :index="index"
                            :tag="area">
                        </Tag>
                    </b-taglist>
                </template>
                <b-skeleton size="is-large" :active="loading" :count="2"></b-skeleton>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to="coachContactLink" class="card-footer-item">
                <template v-if="!loading">Contact</template>
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
            </router-link>
            <router-link :to="coachDetailsLink" class="card-footer-item">
                <template v-if="!loading">View Details</template>
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
            </router-link>
        </footer>
    </div>
</template>

<script>
import Tag from "@/components/ui/Tag";

export default {
    props: ['coach'],
    components: {
        Tag
    },
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        coachContactLink() {
            return `${this.$route.path}/${this.coach.id}/contact`;
        },
        coachDetailsLink() {
            return `${this.$route.path}/${this.coach.id}`;
        },
    },
    // mounted() {
    //     setInterval(() => {
    //         this.loading = !this.loading
    //     }, 3 * 1000)
    // }
}
</script>

<style lang="scss" scoped>
.card {
    margin-bottom: 25px;
    text-align: left;
}
</style>