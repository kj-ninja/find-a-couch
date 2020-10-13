<template>
    <section class="content coaches">
        <CoachCard
            v-for="coach in coachesList"
            :key="coach.id"
            :coach="coach"/>
    </section>
</template>

<script>
import CoachCard from "@/components/coach/CoachCard";

export default {
    components: {
        CoachCard
    },
    data() {
        return {
            coachesList: [
                {
                    id: 1,
                    name: 'Krzysztof Jakubiak',
                    price: 39,
                    tags: [
                        {
                            name: 'Front-end',
                            class: 'is-info is-light'
                        },
                        {
                            name: 'Back-end',
                            class: 'is-primary is-light'
                        },
                        {
                            name: 'Career',
                            class: 'is-success is-light'
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.coaches {
    max-width: 700px;
    margin: 30px auto;
}
</style>