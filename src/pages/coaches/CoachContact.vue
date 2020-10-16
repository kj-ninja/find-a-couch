<template>
    <section class="contact">
        <form novalidate @submit.prevent="handleSubmit" class="card">
            <b-field label="Email">
                <b-input type="email" v-model="email" required></b-input>
            </b-field>

            <b-field label="Description">
                <b-input minlength="10"
                         maxlength="100"
                         required
                         v-model.trim="message"
                         type="textarea">
                </b-input>
            </b-field>

            <b-field v-if="!formIsValid">
                <p class="help is-danger">Please fill the entire form.</p>
            </b-field>
            <b-field>
                <button class="button is-primary">Submit</button>
            </b-field>
        </form>
    </section>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'CoachContact',
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true
        }
    },
    methods: {
        ...mapActions('requests', ['addRequest']),
        handleSubmit() {
            if (this.email === '') {
                return this.formIsValid = false;
            }
            if (this.message === '' || this.message.length < 10) {
                return this.formIsValid = false;
            }

            this.formIsValid = true;
            const formData = {
                email: this.email,
                message: this.message,
                coachId: this.$route.params.coachId,
                requestId: new Date().toISOString()
            };
            this.addRequest(formData);
            this.$router.replace('/coaches');
        }
    }
}
</script>

<style lang="scss" scoped>
.contact {
    padding: 10px;

    form {
        max-width: 800px;
        margin: 30px auto;
        padding: 30px;
    }
}
</style>