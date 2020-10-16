<template>
    <section class="requests">
        <div class="card">
            <header class="card-header">
                <h2 class="card-header-title">
                    Requests Received
                </h2>
            </header>
            <div class="card-content">
                <div class="content">
                    <ul v-if="hasRequests">
                        <RequestItem
                            v-for="request in requests"
                            :key="request.requestId"
                            :message="request.message"
                            :email="request.email"
                            :name="request.name"
                        />
                    </ul>
                    <p v-else>You haven't received any requests yet!</p>
                    <br>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex';
import RequestItem from "@/components/request/RequestItem";

export default {
    components: {
        RequestItem
    },
    computed: {
        ...mapGetters('requests', ['requests', 'hasRequests'])
    }

}
</script>

<style lang="scss" scoped>
.requests {
    max-width: 800px;
    margin: 30px auto;
    padding: 10px;

    ul {
        list-style: none;
        margin: 0;
    }
}
</style>