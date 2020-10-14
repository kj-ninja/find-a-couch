<template>
    <div class="card coach">
        <header class="card-header">
            <p class="card-header-title">
                {{fullName}}<br>
                ${{pricing}} / hour
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
            </a>
        </header>
        <div class="card-content">
            <div class="content">
                <p style="margin-bottom: 5px"><strong>Description:</strong></p>
                {{description}}
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
            <p style="margin-bottom: 5px"><strong>Portfolio: </strong></p>
            <a :href="portfolioLink">{{ portfolioName }}</a>
        </div>
        <footer class="card-footer">
            <router-link :to="`/coaches/${coachId}/contact`" href="#" class="card-footer-item">Contact</router-link>
        </footer>
    </div>
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
       portfolioName() {
           return this.coach.portfolio.name;
       },
       portfolioLink() {
           return this.coach.portfolio.link;
       },
       fullName() {
           return this.coach.name;
       },
       pricing() {
           return this.coach.price;
       },
       description() {
           return this.coach.message;
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
    max-width: 800px;
    margin: 30px auto;
}
</style>