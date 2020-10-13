<template>
    <section>
        <div class="card" aria-id="contentIdForA11y3">
            <div
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                    <template v-if="!loading">
                        {{coachName}}<br>
                        ${{price}} / hour
                    </template>
                    <b-skeleton size="is-large" :active="loading"></b-skeleton>
                </p>
            </div>
            <div class="card-content">
                <div class="content">
                    <template v-if="!loading">
                        <p>Technologię których nauczam:</p>
                        <b-taglist>
                            <b-tag
                                v-for="tag in tags"
                                :key="tag.name"
                                :type="tag.class"
                                size="is-medium">
                                {{tag.name}}
                            </b-tag>

                        </b-taglist>
                    </template>
                    <b-skeleton size="is-large" :active="loading" :count="2"></b-skeleton>
                </div>
            </div>
            <footer class="card-footer">
                <router-link :to="`/coaches/${coachId}/contact`" class="card-footer-item">
                    <template v-if="!loading">Contact</template>
                    <b-skeleton size="is-large" :active="loading"></b-skeleton>
                </router-link>
                <router-link :to="`/coaches/${coachId}`" class="card-footer-item">
                    <template v-if="!loading">View Details</template>
                    <b-skeleton size="is-large" :active="loading"></b-skeleton>
                </router-link>
            </footer>
        </div>
    </section>
</template>

<script>

export default {
    props: ['coach'],
    components: {
    },
    data() {
        return {
            loading: false,
            coachId: this.coach.id,
            coachName: this.coach.name,
            tags: this.coach.tags,
            price: this.coach.price
        }
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
    margin-bottom: 30px;
    text-align: left;
}
</style>