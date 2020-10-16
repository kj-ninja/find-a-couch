<template>
    <b-navbar :close-on-click="false">
        <template slot="brand">
            <h1>
                <b-navbar-item tag="router-link" to="/" class="logo">
                    Code Masters
                </b-navbar-item>
            </h1>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="/register" class="button is-primary">
                        <strong>Register as a Coach</strong>
                    </router-link>
                    <router-link to="/login" class="button is-light">
                        Log in
                    </router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss">
.logo {
    font-size: 1.5em;
    color: #3377b5;
}
</style>