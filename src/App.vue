<template>
    <div id="app" class="container">
        <NavBar/>
        <CoachesList/>
        <router-view/>
    </div>
</template>

<script>
import NavBar from "@/components/nav/NavBar";
import CoachesList from "@/pages/CoachesList";

export default {
    name: 'App',
    components: {
        NavBar,
        CoachesList
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
