<template>
    <form novalidate @submit.prevent="handleSubmit">
        <b-field label="Full Name">
            <b-input v-model.trim="name" required></b-input>
        </b-field>

        <div class="block">
            <b-field label="Areas">
                <b-checkbox v-model="areas"
                            native-value="frontend">
                    Frontend
                </b-checkbox>
                <b-checkbox v-model="areas"
                            native-value="backend">
                    Backend
                </b-checkbox>
                <b-checkbox v-model="areas"
                            native-value="fullstack">
                    Fullstack
                </b-checkbox>
                <b-checkbox v-model="areas"
                            native-value="designer">
                    Designer
                </b-checkbox>
                <b-checkbox v-model="areas"
                            native-value="career">
                    Career
                </b-checkbox>
                <b-checkbox v-model="areas"
                            native-value="management">
                    Management
                </b-checkbox>
            </b-field>
        </div>

        <b-field label="Hourly Rate in $">
            <b-input type="number"
                     required
                     min="0"
                     v-model.number="price">
            </b-input>
        </b-field>

        <!--        <b-field label="Password">-->
        <!--            <b-input type="password"-->
        <!--                     v-model="password.value"-->
        <!--                     password-reveal>-->
        <!--            </b-input>-->
        <!--        </b-field>-->

        <b-field label="Description">
            <b-input minlength="10"
                     maxlength="100"
                     required
                     v-model.trim="description"
                     type="textarea"></b-input>
        </b-field>
        <b-field v-if="!formIsValid">
            <p class="help is-danger">Please fill the entire form.</p>
        </b-field>
        <b-field>
            <button class="button is-primary">Submit</button>
        </b-field>
    </form>
</template>

<script>
export default {
    emits: ['registerCoach'],
    data() {
        return {
            name: '',
            areas: [],
            price: null,
            description: '',
            formIsValid: true
        }
    },
    methods: {
        handleSubmit() {
            if (this.areas.length === 0) {
                return this.formIsValid = false;
            }
            if (this.name === '') {
                return this.formIsValid = false;
            }
            if (!this.price || this.price < 0) {
                return this.formIsValid = false;
            }
            if (this.description === '' || this.description.length < 10) {
                return this.formIsValid = false;
            }

            this.formIsValid = true;
            const formData = {
                id: 10,
                name: this.name,
                areas: this.areas,
                price: this.price,
                description: this.description
            };
            console.log(formData);

            this.$emit('registerCoach', formData);
        }
    }
}
</script>

<style scoped>
.b-checkbox.checkbox {
    margin-right: 20px;
}

.error-message {
    color: #f14668;
    font-size: 14px;
}
</style>