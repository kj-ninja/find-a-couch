<template>
    <section class="filtering">
        <div class="card">
            <h2>Find your coach</h2>
            <div class="block">
                <label class="checkbox">
                    <input type="checkbox" id="frontend" @change="setFilters" checked>
                    Front-end
                </label>
                <label class="checkbox">
                    <input type="checkbox" id="backend" @change="setFilters" checked>
                    Back-end
                </label>
                <label class="checkbox">
                    <input type="checkbox" id="fullstack" @change="setFilters" checked>
                    Full-stack
                </label>
                <label class="checkbox">
                    <input type="checkbox" id="design" @change="setFilters" checked>
                    Web Design
                </label>
                <label class="checkbox">
                    <input type="checkbox" id="management" @change="setFilters" checked>
                    Team Management
                </label>
                <label class="checkbox">
                    <input type="checkbox" id="career" @change="setFilters" checked>
                    Career
                </label>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    emits: ['changeFilter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                fullstack: true,
                design: true,
                career: true,
                management: true
            }
        }
    },
    methods: {
        setFilters(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('changeFilter', updatedFilters);
        }
    }
}
</script>

<style lang="scss" scoped>
.filtering {
    margin: 30px auto 50px auto;
    width: 100%;
    max-width: 800px;

    h2 {
        padding: 0.75rem 1rem;
        margin-bottom: 0;
    }

    .block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.75rem 1rem;

    }
}
</style>