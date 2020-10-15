<template>
    <section class="filtering">
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
            <input type="checkbox" id="management" @change="setFilters" checked>
            Team Management
        </label>
        <label class="checkbox">
            <input type="checkbox" id="career" @change="setFilters" checked>
            Career
        </label>
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
    margin-bottom: 30px;

    label {
        margin-right: 30px;
    }
}
</style>