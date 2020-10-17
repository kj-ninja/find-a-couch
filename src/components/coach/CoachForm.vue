<template>
    <form novalidate @submit.prevent="handleSubmit" class="card">
        <b-field label="Full Name">
            <b-input v-model.trim="name" required></b-input>
        </b-field>

        <div class="block">
            <b-field label="Areas">
                <div class="areas">
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
                        Web Designer
                    </b-checkbox>
                    <b-checkbox v-model="areas"
                                native-value="career">
                        Career
                    </b-checkbox>
                    <b-checkbox v-model="areas"
                                native-value="management">
                        Management
                    </b-checkbox>
                </div>
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

        <b-field label="Description" class="description">
            <b-input minlength="10"
                     maxlength="300"
                     required
                     v-model.trim="description"
                     type="textarea"></b-input>
        </b-field>

        <b-field label="Portfolio" class="portfolio">
            <b-input v-model.trim="link" placeholder="Optional"></b-input>
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
            link: '',
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
            const portfolio = {
                name: this.name,
                link: this.link
            };
            const formData = {
                name: this.name,
                areas: this.areas,
                price: this.price,
                description: this.description,
                portfolio: portfolio
            };
            this.$emit('registerCoach', formData);
        }
    }
}
</script>

<style lang="scss" scoped>
form {
    max-width: 800px;
    margin: 30px auto;
    padding: 30px;

    .areas {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 15px;
        }
    }

    .description {
        margin-bottom: 10px;
    }

    .portfolio {
        margin-bottom: 30px;
    }

    button {
        //margin-top: 15px;
    }
}


@media screen and (min-width: 770px) {
    form {
        .areas {
            flex-direction: row;

            .b-checkbox.checkbox {
                margin-right: 20px;
            }
        }
    }
}
</style>