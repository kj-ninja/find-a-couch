<template>
    <section class="coach">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{ fullName }}<br>
                    ${{ pricing }} / hour
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p style="margin-bottom: 5px"><strong>Description:</strong></p>
                    {{ description }}
                    <br>
                </div>
                <b-taglist>
                    <Tag
                        v-for="(area, index) in areas"
                        :key="index"
                        :index="index"
                        :tag="area">
                    </Tag>
                </b-taglist>
                <!--            <p style="margin-bottom: 5px"><strong>Portfolio: </strong></p>-->
                <!--            <a :href="portfolioLink">{{ portfolioName }}</a>-->
            </div>
            <footer class="card-footer">
                <router-link :to="`/coaches/${coachId}/contact`" class="card-footer-item">Contact</router-link>
            </footer>
        </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex';
import Tag from "@/components/ui/Tag";

export default {
    components: {
        Tag
    },
    data() {
        return {
            coach: null
        }
    },
    computed: {
        ...mapGetters('coaches', ['coachesList', 'getCoachById']),
        // portfolioName() {
        //     return this.coach.portfolio.name;
        // },
        // portfolioLink() {
        //     return this.coach.portfolio.link;
        // },
        fullName() {
            return this.coach.name;
        },
        pricing() {
            return this.coach.price;
        },
        description() {
            return this.coach.description;
        },
        coachId() {
            return this.coach.id;
        },
        areas() {
            return this.coach.areas;
        }
    },
    created() {
        this.coach = this.getCoachById(+this.$route.params.coachId);
    }
}
</script>

<style lang="scss" scoped>
.coach {
    padding: 10px;

    .card {
        max-width: 800px;
        margin: 30px auto;
    }
}
</style>