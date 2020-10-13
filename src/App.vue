<template>
    <div id="app" class="container">
        <NavBar/>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "@/components/nav/NavBar";

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>
