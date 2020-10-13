<template>
    <div class="card coach">
        <header class="card-header">
            <p class="card-header-title">
                {{coach.name}}<br>
                ${{coach.price}} / hour
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
                {{coach.message}}
                <br>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to="`/coaches/${coach.id}/contact`" href="#" class="card-footer-item">Contact</router-link>
        </footer>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            coach: null
        }
    },
   computed: {
       ...mapGetters('coaches', ['coachesList', 'getCoachById']),
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